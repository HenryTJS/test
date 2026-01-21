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
        const decodedText = decodeURIComponent(options.text);
        this.setData({
          text: decodedText
        });
        wx.setNavigationBarTitle({
          title: decodedText
        });
      }
    }
  }
});