// app.ts
App<IAppOption>({
  globalData: {
    userInfo: null,
    isLoggedIn: false,
    favorites: [],
    userKey: 'guest',
  },
  onLaunch() {
    // 恢复本地登录态与收藏（按用户键分桶）
    try {
      const storedUserKey = wx.getStorageSync('userKey');
      const storedUserInfo = wx.getStorageSync('userInfo');
      const storedIsLoggedIn = wx.getStorageSync('isLoggedIn');

      this.globalData.userKey = storedUserKey || 'guest';
      this.globalData.userInfo = storedUserInfo || null;
      this.globalData.isLoggedIn = !!storedIsLoggedIn;

      const storedFavorites = wx.getStorageSync(`favorites_${this.globalData.userKey}`);
      if (Array.isArray(storedFavorites)) {
        this.globalData.favorites = storedFavorites;
      }
    } catch (e) {}

    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})

interface IAppOption {
  globalData: {
    userInfo: WechatMiniprogram.UserInfo | null;
    isLoggedIn: boolean;
    favorites: Array<{ image: string; text: string }>;
    userKey: string;
  };
}