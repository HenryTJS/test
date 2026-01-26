Page({
  data: {
    favorites: []
  },
  onLoad() {
    const app = getApp();
    this.setData({
      favorites: app.globalData.favorites || []
    });
  }
  ,onShow() {
    // 进入页面时刷新一次，确保展示当前用户的收藏
    const app = getApp<IAppOption>();
    try {
      const list = wx.getStorageSync(`favorites_${app.globalData.userKey}`) || [];
      this.setData({ favorites: list });
      // 保持全局一致
      app.globalData.favorites = list;
    } catch (e) {
      this.setData({ favorites: app.globalData.favorites || [] });
    }
  }
});