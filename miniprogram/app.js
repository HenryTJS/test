App({
  globalData: {
    userInfo: null,
    isLoggedIn: false,
    userKey: 'guest',
  },
  onLaunch() {
    // 恢复本地登录态
    try {
      const storedUserKey = wx.getStorageSync('userKey');
      const storedUserInfo = wx.getStorageSync('userInfo');
      const storedIsLoggedIn = wx.getStorageSync('isLoggedIn');

      this.globalData.userKey = storedUserKey || 'guest';
      this.globalData.userInfo = storedUserInfo || null;
      this.globalData.isLoggedIn = !!storedIsLoggedIn;
    } catch (e) {}

    wx.login({
      success: (res) => {
        console.log(res.code);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
  },
});
