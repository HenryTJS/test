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
});