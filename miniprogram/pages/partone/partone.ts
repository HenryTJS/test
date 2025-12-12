import data from '../../utils/data';

Page({
  data: {
    words: [] as { text: string; image: string; detail: string }[], // 新增 detail 字段类型
    filteredWords: [] as { text: string; image: string; detail: string }[]
  },
  onLoad() {
    this.setData({
      words: data,
      filteredWords: data
    });
  },
  onSearchInput(e: any) {
    const query = e.detail.value.trim();
    const filtered = this.data.words.filter(word => word.text.includes(query));
    this.setData({
      filteredWords: filtered
    });
  }
});