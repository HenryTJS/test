const oracle = [
  {
    day: "甲子",
    question: "甲子卜，㱿贞：作邑于洮，若？",
    answer: "王占曰：吉，无咎。"
  },
  {
    day: "乙丑",
    question: "乙丑卜，宾贞：翌丁卯侑于姚庚，五羊？",
    answer: "王占曰：受祐，大吉。"
  },
  {
    day: "丙寅",
    question: "丙寅卜，争贞：王梦兕，其有来嬿？",
    answer: "王占曰：有喜，吉。"
  },
  {
    day: "丁卯",
    question: "丁卯卜，古贞：往狩于孟，擒？",
    answer: "王占曰：今日行，无艰。"
  },
  {
    day: "戊辰",
    question: "戊辰卜，㱿贞：飨多子，若？",
    answer: "王占曰：食，吉。"
  },
  {
    day: "己巳",
    question: "己巳卜，宾贞：新寝成，宁？",
    answer: "王占曰：居，吉。"
  },
  {
    day: "庚午",
    question: "庚午卜，争贞：作舟于河，其涉？",
    answer: "王占曰：作，吉，无不利。"
  },
  {
    day: "辛未",
    question: "辛未卜，古贞：使人往沚，其复？",
    answer: "王占曰：往，吉。"
  },
  {
    day: "壬申",
    question: "壬申卜，㱿贞：启扉祀于旦，若？",
    answer: "王占曰：启，吉。"
  },
  {
    day: "癸酉",
    question: "癸酉卜，宾贞：王疾齿，御于父乙？",
    answer: "王占曰：身无疾，吉。"
  },

  {
    day: "甲戌",
    question: "甲戌卜，争贞：王寝，其宁？",
    answer: "王占曰：寝，宁。"
  },
  {
    day: "乙亥",
    question: "乙亥卜，古贞：妇好示子，若？",
    answer: "王占曰：家人，和。"
  },
  {
    day: "丙子",
    question: "丙子卜，㱿贞：年于河，受年？",
    answer: "王占曰：年，有秋。"
  },
  {
    day: "丁丑",
    question: "丁丑卜，宾贞：田于敦，其获？",
    answer: "王占曰：田，获。"
  },
  {
    day: "戊寅",
    question: "戊寅卜，争贞：王心若沚，其忧？",
    answer: "王占曰：心，宁。"
  },
  {
    day: "己卯",
    question: "己卯卜，古贞：艰自西，其告？",
    answer: "王占曰：勿忧，吉。"
  },
  {
    day: "庚辰",
    question: "庚辰卜，㱿贞：祀中彡，其静？",
    answer: "王占曰：静，无咎。"
  },
  {
    day: "辛巳",
    question: "辛巳卜，宾贞：禘于成汤，三牛？",
    answer: "王占曰：吉，无咎。"
  },
  {
    day: "壬午",
    question: "壬午卜，争贞：王往逐兕，亡灾？",
    answer: "王占曰：受祐，大吉。"
  },
  {
    day: "癸未",
    question: "癸未卜，古贞：有云自东，其雨？",
    answer: "王占曰：有喜，吉。"
  },
  {
    day: "甲申",
    question: "甲申卜，㱿贞：步自冥至丧，亡祸？",
    answer: "王占曰：今日行，无艰。"
  },
  {
    day: "乙酉",
    question: "乙酉卜，宾贞：登黍于祖乙，若？",
    answer: "王占曰：食，吉。"
  },
  {
    day: "丙戌",
    question: "丙戌卜，争贞：入于新宗，宁？",
    answer: "王占曰：居，吉。"
  },
  {
    day: "丁亥",
    question: "丁亥卜，古贞：作戈三百，用？",
    answer: "王占曰：作，吉，无不利。"
  },
  {
    day: "戊子",
    question: "戊子卜，㱿贞：使人入羌，其来？",
    answer: "王占曰：往，吉。"
  },
  {
    day: "己丑",
    question: "己丑卜，宾贞：启庙门，侑于上甲？",
    answer: "王占曰：启，吉。"
  },
  {
    day: "庚寅",
    question: "庚寅卜，争贞：小王疾目，御于母庚？",
    answer: "王占曰：身无疾，吉。"
  },
  {
    day: "辛卯",
    question: "辛卯卜，古贞：夕寝，有梦？",
    answer: "王占曰：寝，宁。"
  },
  {
    day: "壬辰",
    question: "壬辰卜，㱿贞：多子入学，若？",
    answer: "王占曰：家人，和。"
  },
  {
    day: "癸巳",
    question: "癸巳卜，宾贞：祷年于岳，受禾？",
    answer: "王占曰：年，有秋。"
  },
  {
    day: "甲午",
    question: "甲午卜，争贞：狩于斿，擒狐？",
    answer: "王占曰：田，获。"
  },
  {
    day: "乙未",
    question: "乙未卜，古贞：王心惕，其有祟？",
    answer: "王占曰：心，宁。"
  },
  {
    day: "丙申",
    question: "丙申卜，㱿贞：方不出，其忧？",
    answer: "王占曰：勿忧，吉。"
  },
  {
    day: "丁酉",
    question: "丁酉卜，宾贞：夕祼，其喧？",
    answer: "王占曰：静，无咎。"
  },
  {
    day: "戊戌",
    question: "戊戌卜，争贞：御于高祖夒，十豕？",
    answer: "王占曰：吉，无咎。"
  },
  {
    day: "己亥",
    question: "己亥卜，古贞：王射麋，擒？",
    answer: "王占曰：受祐，大吉。"
  },
  {
    day: "庚子",
    question: "庚子卜，㱿贞：虹饮于河，有咎？",
    answer: "王占曰：有喜，吉。"
  },
  {
    day: "辛丑",
    question: "辛丑卜，宾贞：涉洹，亡祸？",
    answer: "王占曰：今日行，无艰。"
  },
  {
    day: "壬寅",
    question: "壬寅卜，争贞：以鬯酒侑妣癸，若？",
    answer: "王占曰：食，吉。"
  },
  {
    day: "癸卯",
    question: "癸卯卜，古贞：入于洮室，宁？",
    answer: "王占曰：居，吉。"
  },
  {
    day: "甲辰",
    question: "甲辰卜，㱿贞：作圉于羌，若？",
    answer: "王占曰：作，吉，无不利。"
  },
  {
    day: "乙巳",
    question: "乙巳卜，宾贞：往于巂，以众？",
    answer: "王占曰：往，吉。"
  },
  {
    day: "丙午",
    question: "丙午卜，争贞：启仓廪，祀河？",
    answer: "王占曰：启，吉。"
  },
  {
    day: "丁未",
    question: "丁未卜，古贞：妇鼠疾首，御于母丙？",
    answer: "王占曰：身无疾，吉。"
  },
  {
    day: "戊申",
    question: "戊申卜，㱿贞：王夙夜，其宁？",
    answer: "王占曰：寝，宁。"
  },
  {
    day: "己酉",
    question: "己酉卜，宾贞：多妣协祀，无聒？",
    answer: "王占曰：家人，和。"
  },
  {
    day: "庚戌",
    question: "庚戌卜，争贞：祷于土，受年？",
    answer: "王占曰：年，有秋。"
  },
  {
    day: "辛亥",
    question: "辛亥卜，古贞：渔于渊，其获？",
    answer: "王占曰：田，获。"
  },
  {
    day: "壬子",
    question: "壬子卜，㱿贞：王心荡，其有艰？",
    answer: "王占曰：心，宁。"
  },
  {
    day: "癸丑",
    question: "癸丑卜，宾贞：艰自北，勿忧？",
    answer: "王占曰：勿忧，吉。"
  },
  {
    day: "甲寅",
    question: "甲寅卜，争贞：夕告于祖，其嚣？",
    answer: "王占曰：静，无咎。"
  },
  {
    day: "乙卯",
    question: "乙卯卜，古贞：禘于伊尹，五豕？",
    answer: "王占曰：吉，无咎。"
  },
  {
    day: "丙辰",
    question: "丙辰卜，㱿贞：王逐豕于膏，亡灾？",
    answer: "王占曰：受祐，大吉。"
  },
  {
    day: "丁巳",
    question: "丁巳卜，宾贞：凤（风）隹（唯）它，不惟孽？",
    answer: "王占曰：有喜，吉。"
  },
  {
    day: "戊午",
    question: "戊午卜，争贞：步于攸，往来亡祸？",
    answer: "王占曰：今日行，无艰。"
  },
  {
    day: "己未",
    question: "己未卜，古贞：登粱于父丁，若？",
    answer: "王占曰：食，吉。"
  },
  {
    day: "庚申",
    question: "庚申卜，㱿贞：入于盟室，安？",
    answer: "王占曰：居，吉。"
  },
  {
    day: "辛酉",
    question: "辛酉卜，宾贞：作册于西隃，若？",
    answer: "王占曰：作，吉，无不利。"
  },
  {
    day: "壬戌",
    question: "壬戌卜，争贞：使人于亳，其得？",
    answer: "王占曰：往，吉。"
  },
  {
    day: "癸亥",
    question: "癸亥卜，古贞：启酉（酒）祀，彡于唐？",
    answer: "王占曰：启，吉。"
  }
];

export default oracle;