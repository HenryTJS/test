// mine.ts
Page({
  data: {
    userInfo: {
      avatarUrl: '',
      nickName: '',
    },
  },
  onLoad() {
    const app = getApp<IAppOption>();
    if (!app.globalData.isLoggedIn) {
      wx.redirectTo({
        url: '/pages/index/index',
      });
    }

    this.setData({
      userInfo: app.globalData.userInfo || {
        avatarUrl: '/images/default-avatar.png',
        nickName: '未登录用户',
      },
    });
  },
  viewFavorites() {
    wx.showToast({
      title: '我的收藏功能暂未开通',
      icon: 'none',
    });
  },
  viewDictionary() {
    wx.navigateTo({
      url: '/pages/partone/partone',
    });
  },
  viewMap() {
    wx.navigateTo({
      url: '/pages/newpage/newpage',
    });
  },
  downloadResources() {
    wx.showToast({
      title: '下载功能暂未开通',
      icon: 'none',
    });
  },
  openStore() {
    wx.showToast({
      title: '商城功能暂未开通',
      icon: 'none',
    });
  },
});