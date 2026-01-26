// TS文件
import data from '../../utils/data';

Page({
  data: {
    allWords: [] as { text: string; detail: string; image: string }[],
    currentBatch: [] as { text: string; detail: string; image: string }[],
    currentPage: 1, // 当前页码（从1开始）
    batchSize: 11, // 一次展示全部
    imageCount: 7, // 固定图片数量
    totalBatches: 1, // 总批数
    searchQuery: '', // 搜索框输入内容
    gapPx: 0, // 水平/垂直一致的间隔（像素）
  },

  onLoad() {
    // 计算统一间隔：宽度 30% * 3 = 90%，剩余约 10%；为避免换行，用 4% 间距（两段共 8%）
    const { windowWidth } = wx.getSystemInfoSync();
    const gapPx = windowWidth * 0.04; // 4% 宽度的像素值

    // 处理数据，为每个单词添加图片路径（根据索引循环使用7张图片）
    const processedData = data.map((item, index) => ({
      ...item,
      // 使用模运算循环使用7张图片: (索引 % 7) + 1 得到 1-7
      image: `/images/word${(index % this.data.imageCount) + 1}.png`
    }));
    
    console.log('处理后的数据:', processedData); // 调试用
    
    // 计算总批数 - 正确的逻辑
    const totalData = processedData.length;
    
    // 一次性展示全部
    this.setData({
      allWords: processedData,
      currentBatch: processedData,
      totalBatches: 1,
      gapPx,
    });
  },

  onWordTap(event: any) {
    const { detail, text } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/worddetail/worddetail?image=${encodeURIComponent(detail)}&text=${encodeURIComponent(text)}`
    });
  },

  // 搜索框输入事件
  onSearchInput(event: any) {
    this.setData({
      searchQuery: event.detail.value
    });
  },

  // 搜索按钮点击事件
  onSearchTap() {
    const { searchQuery, allWords } = this.data;
    if (!searchQuery.trim()) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      });
      return;
    }

    // 过滤单词
    const filteredWords = allWords.filter(word => word.text.includes(searchQuery));

    if (filteredWords.length === 0) {
      wx.showToast({
        title: '未找到匹配项',
        icon: 'none'
      });
      return;
    }

    // 更新当前批次为搜索结果
    this.setData({
      currentBatch: filteredWords
    });
  },

  // 显示指定页码的数据
  showPage(pageNumber: number) {
    // 已改为一次展示全部，这里保持数据一致性
    const { allWords, imageCount } = this.data;
    const batch = allWords.map((item, idx) => ({
      ...item,
      image: `/images/word${(idx % imageCount) + 1}.png`
    }));
    this.setData({ currentBatch: batch, currentPage: 1 });
  },

  // 换一批按钮点击事件
  changeBatch() {
    // 已不再分页，保留空实现以防旧绑定报错
    this.showPage(1);
  },

  // 页面显示时确保显示正确页面
  onShow() {
    this.showPage(this.data.currentPage);
  }
});