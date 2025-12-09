Page({
  data: {},
  onLoad() {
    console.log('新页面加载完成');
  },
  onImageClick(e: any) {
    // 判断点击的是哪张图片
    const { src } = e.currentTarget.dataset;
    if (src === '5.png') {
      // 跳转到 pages/index/index 页面
      wx.navigateTo({
        url: '/pages/index/index',
      });
    } else {
      wx.showToast({
        title: '该功能暂未开通',
        icon: 'none',
      });
    }
  },
});