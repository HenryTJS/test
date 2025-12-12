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
        this.setData({
          text: options.text });
        wx.setNavigationBarTitle({
          title: decodeURIComponent(options.text)
        });
      }
    }
  }
});