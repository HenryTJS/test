const app = getApp();
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';

Component({
  data: {
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  methods: {
    onChooseAvatar(e) {
      if (e.detail && e.detail.avatarUrl) {
        const { avatarUrl } = e.detail;
        this.setData({
          'userInfo.avatarUrl': avatarUrl,
        });
      } else if (e.detail && e.detail.errMsg === 'chooseAvatar:fail cancel') {
        wx.showToast({
          title: '已取消头像选择',
          icon: 'none',
        });
        return;
      } else {
        wx.showToast({
          title: '取消选择头像',
          icon: 'none',
        });
      }
    },
    onInputChange(e) {
      const nickName = e.detail.value;
      const { avatarUrl } = this.data.userInfo;
      this.setData({
        'userInfo.nickName': nickName,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      });
    },
    getUserProfile() {
      wx.getUserProfile({
        desc: '展示用户信息',
        success: (res) => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          });
        },
      });
    },
    navigateToMyPage() {
      if (this.data.hasUserInfo) {
        const app = getApp();
        const { getUserKey } = require('../../utils/util').default;
        app.globalData.userInfo = {
          ...this.data.userInfo,
          city: '',
          country: '',
          gender: 0,
          language: 'zh_CN',
          province: '',
        };
        app.globalData.isLoggedIn = true;
        // 计算用户键并迁移 guest 收藏
        const userKey = getUserKey(app.globalData.userInfo, app.globalData.isLoggedIn);
        app.globalData.userKey = userKey;
        try {
          const guest = wx.getStorageSync('favorites_guest') || [];
          const userFav = wx.getStorageSync(`favorites_${userKey}`) || [];
          const mergeMap = {};
          [...guest, ...userFav].forEach((it) => {
            mergeMap[`${it.image}|${it.text}`] = it;
          });
          const merged = Object.values(mergeMap);
          wx.setStorageSync(`favorites_${userKey}`, merged);
          wx.setStorageSync('userKey', userKey);
          wx.setStorageSync('userInfo', app.globalData.userInfo);
          wx.setStorageSync('isLoggedIn', true);
          app.globalData.favorites = merged;
          // 可选：清理 guest 收藏避免后续混淆
          // wx.setStorageSync('favorites_guest', []);
        } catch (e) {}

        wx.navigateTo({
          url: '/pages/mine/mine',
        });
      } else {
        wx.showToast({
          title: '请先完成登录',
          icon: 'none',
        });
      }
    },
  },
});
