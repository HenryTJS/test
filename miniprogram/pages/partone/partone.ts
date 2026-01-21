// TS文件
import data from '../../utils/data';

Page({
  data: {
    allWords: [] as { text: string; detail: string; image: string }[],
    currentBatch: [] as { text: string; detail: string; image: string }[],
    currentPage: 1, // 当前页码（从1开始）
    batchSize: 6, // 每批显示的数量
    imageCount: 7, // 固定图片数量
    totalBatches: 0, // 总批数
    searchQuery: '' // 搜索框输入内容
  },

  onLoad() {
    // 处理数据，为每个单词添加图片路径（根据索引循环使用7张图片）
    const processedData = data.map((item, index) => ({
      ...item,
      // 使用模运算循环使用7张图片: (索引 % 7) + 1 得到 1-7
      image: `/images/word${(index % this.data.imageCount) + 1}.png`
    }));
    
    console.log('处理后的数据:', processedData); // 调试用
    
    // 计算总批数 - 正确的逻辑
    const totalData = processedData.length;
    
    // 如果数据量小于等于6，只有一批
    if (totalData <= this.data.batchSize) {
      this.setData({
        allWords: processedData,
        totalBatches: 1
      });
      this.showPage(1);
      return;
    }
    
    // 计算总批数：对于循环显示6个一组的情况
    // 例如：9个数据，循环显示6个，批次数为：
    // 第1批：0-5
    // 第2批：6-8,0-2
    // 第3批：3-8
    // 第4批：回到0-5
    // 所以总批数 = totalData (因为每次偏移半个批次)
    const totalBatches = totalData;
    
    // 初始化数据
    this.setData({
      allWords: processedData,
      totalBatches: totalBatches
    });
    
    // 显示第一批数据
    this.showPage(1);
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
    const { allWords, batchSize, imageCount } = this.data;
    const totalData = allWords.length;
    
    console.log(`显示第 ${pageNumber} 页，总数据量: ${totalData}`);
    
    // 计算当前页的起始数据索引
    // 公式：每页移动6个位置（整批）
    let startIndex = ((pageNumber - 1) * batchSize) % totalData;
    
    console.log(`起始索引: ${startIndex}`);
    
    // 计算当前批次的数据
    let batch = [];
    for (let i = 0; i < batchSize; i++) {
      // 计算当前数据在全部数据中的索引（循环使用）
      const dataIndex = (startIndex + i) % totalData;
      
      // 根据数据索引计算对应的图片索引（循环使用7张图片）
      const imageIndex = dataIndex % imageCount;
      
      batch.push({
        ...allWords[dataIndex],
        // 重新计算图片路径，确保图片正确
        image: `/images/word${imageIndex + 1}.png`
      });
    }
    
    console.log(`当前页数据索引:`, batch.map(item => allWords.indexOf(item)));
    
    this.setData({
      currentBatch: batch,
      currentPage: pageNumber
    });
  },

  // 换一批按钮点击事件
  changeBatch() {
    const { currentPage, totalBatches } = this.data;
    
    // 计算下一页
    let nextPage = currentPage + 1;
    
    // 如果超过总批数，回到第一页
    if (nextPage > totalBatches) {
      nextPage = 1;
    }
    
    console.log(`换一批，新页码: ${nextPage}`);
    
    // 显示下一页数据
    this.showPage(nextPage);
    
    // 添加轻微动画效果
    wx.showToast({
      title: '已更新',
      icon: 'success',
      duration: 500
    });
  },

  // 页面显示时确保显示正确页面
  onShow() {
    this.showPage(this.data.currentPage);
  }
});