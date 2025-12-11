import data from '../../utils/data';

Page({
  data: {
    words: [] as { text: string; image: string }[] // 显式声明类型
  },
  onLoad() {
    this.setData({
      words: data
    });
  }
});