Page({
  data: {},
  onLoad() {
    console.log('新页面加载完成');
  },
  onImageClick(e: any) {
    // 判断点击的是哪张图片
    const { src } = e.currentTarget.dataset;
    if (src === '5.png') {
      wx.navigateTo({
        url: '/pages/index/index',
      });
    } else if (src === '1.png') {
      wx.navigateTo({
        url: '/pages/partone/partone',
      });
    } else {
      wx.showToast({
        title: '该功能暂未开通',
        icon: 'none',
      });
    }
  },
});