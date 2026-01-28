const data = require('../../utils/data');

Page({
  data: {
    image: '',
    text: '',
  },
  onLoad(options) {
    const decodedImage = options && options.image ? decodeURIComponent(options.image) : '';
    const decodedText = options && options.text ? decodeURIComponent(options.text) : '';

    // 若未传 image，但传了 text，则尝试依据数据源解析图片路径
    let finalImage = decodedImage;
    if (!finalImage && decodedText) {
      const idx = data.findIndex(d => d.text === decodedText);
      if (idx >= 0) {
        finalImage = data[idx].detail;
      }
    }

    this.setData({ image: finalImage, text: decodedText });

    if (decodedText) {
      wx.setNavigationBarTitle({ title: decodedText });
    }
  },
});
