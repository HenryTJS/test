// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

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
    onChooseAvatar(e: any) {
      if (e.detail && e.detail.avatarUrl) {
        const { avatarUrl } = e.detail;
        this.setData({
          "userInfo.avatarUrl": avatarUrl,
        });
      } else {
        wx.showToast({
          title: '取消选择头像',
          icon: 'none',
        });
      }
    },
    onInputChange(e: any) {
      const nickName = e.detail.value;
      const { avatarUrl } = this.data.userInfo;
      this.setData({
        "userInfo.nickName": nickName,
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
        const app = getApp<IAppOption>();
        app.globalData.userInfo = {
          ...this.data.userInfo,
          city: '',
          country: '',
          gender: 0,
          language: 'zh_CN',
          province: '',
        };
        app.globalData.isLoggedIn = true;

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
