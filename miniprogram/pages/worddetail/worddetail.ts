Page({
  data: {
    image: '',
    text: ''
  },
  onLoad(options: any) {
    if (options) {
      if (options.image) {
        this.setData({
          image: decodeURIComponent(options.image)
        });
      }
      if (options.text) {
        const decodedText = decodeURIComponent(options.text);
        this.setData({
          text: decodedText
        });
        wx.setNavigationBarTitle({
          title: decodedText
        });
      }
    }
  },
  addToFavorites() {
    const app = getApp();
    const { image, text } = this.data;
    if (!app.globalData.favorites) {
      app.globalData.favorites = [];
    }
    app.globalData.favorites.push({ image, text });
    wx.showToast({
      title: '已添加到收藏',
      icon: 'success'
    });
  }
});