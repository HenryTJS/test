import data from '../../utils/data';

Page({
  data: {
    image: '',
    text: '',
    isFavorited: false,
  },
  onLoad(options: any) {
    const decodedImage = options?.image ? decodeURIComponent(options.image) : '';
    const decodedText = options?.text ? decodeURIComponent(options.text) : '';

    // 若未传 image，但传了 text，则尝试依据数据源解析图片路径
    let finalImage = decodedImage;
    if (!finalImage && decodedText) {
      const idx = (data as Array<{ text: string; detail: string }>).findIndex(d => d.text === decodedText);
      if (idx >= 0) {
        finalImage = (data as Array<{ text: string; detail: string }>)[idx].detail;
      }
    }

    this.setData({ image: finalImage, text: decodedText });

    if (decodedText) {
      wx.setNavigationBarTitle({ title: decodedText });
    }

    // 初始化收藏状态（使用已解析的值避免 setData 异步竞态）
    this.updateFavoriteState(finalImage, decodedText);
  },
  onShow() {
    const { image, text } = this.data;
    this.updateFavoriteState(image, text);
  },
  toggleFavorite() {
    const app = getApp<IAppOption>();
    const { image, text, isFavorited } = this.data;
    if (!app.globalData.favorites) {
      app.globalData.favorites = [];
    }
    if (!isFavorited) {
      app.globalData.favorites.push({ image, text });
      this.setData({ isFavorited: true });
      try { wx.setStorageSync(`favorites_${app.globalData.userKey}`, app.globalData.favorites); } catch (e) {}
      wx.showToast({ title: '已添加到收藏', icon: 'success' });
    } else {
      const idx = app.globalData.favorites.findIndex(
        (it: { image: string; text: string }) => it.text === text && it.image === image
      );
      if (idx > -1) { app.globalData.favorites.splice(idx, 1); }
      this.setData({ isFavorited: false });
      try { wx.setStorageSync(`favorites_${app.globalData.userKey}`, app.globalData.favorites); } catch (e) {}
      wx.showToast({ title: '已取消收藏', icon: 'none' });
    }
  },
  updateFavoriteState(image?: string, text?: string) {
    const app = getApp<IAppOption>();
    const curImage = image ?? this.data.image;
    const curText = text ?? this.data.text;
    const list = app.globalData.favorites || [];
    const exists = list.some(
      (it: { image: string; text: string }) => it.text === curText && it.image === curImage
    );
    this.setData({ isFavorited: exists });
  }
});