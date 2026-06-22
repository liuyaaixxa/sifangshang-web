export const products = [
  {
    slug: "garments",
    name: "防静电服装系列",
    en: "ESD Garments",
    tagline: "人体静电防护的第一道防线",
    heroImg: "https://images.pexels.com/photos/9574476/pexels-photo-9574476.jpeg?w=1200&fit=crop",
    overview: "思帆商防静电服装系列采用碳纤维复合面料，表面电阻严格控制在10⁶–10⁸Ω范围内，适用于Class 100至Class 100K各级别洁净室环境。从大褂、连体服到分体工作服，覆盖完整的ESD人体防护需求。",
    specs: [
      { label: "面料", value: "碳纤维复合导电面料" },
      { label: "表面电阻", value: "10⁶ – 10⁸ Ω" },
      { label: "洁净等级", value: "Class 100 – Class 100K" },
      { label: "标准", value: "IEC 61340-5-1 / GB 12014" },
      { label: "颜色", value: "白/蓝/灰（可定制）" },
      { label: "尺码", value: "XS–5XL" },
    ],
    variants: ["ESD大褂", "防静电连体服", "分体工作服", "防尘服", "洁净室帽"],
    applications: ["SMT产线", "芯片封装", "PCB制造", "实验室", "GMP车间"],
    related: ["footwear", "masks", "chairs"],
  },
  {
    slug: "footwear",
    name: "防静电鞋类",
    en: "ESD Footwear",
    tagline: "每一步都安全接地",
    heroImg: "https://images.pexels.com/photos/14982935/pexels-photo-14982935.jpeg?w=1200&fit=crop",
    overview: "思帆商防静电鞋类采用导电橡胶鞋底，人体综合电阻<35MΩ，符合IEC 61340-5-1国际标准。涵盖工作鞋、拖鞋、鞋套等多种款式，适用于不同洁净等级的工作环境。",
    specs: [
      { label: "鞋底材料", value: "导电橡胶 / PU" },
      { label: "人体电阻", value: "<35MΩ (系统电阻10⁶–10⁸Ω)" },
      { label: "标准", value: "IEC 61340-5-1 / GB 4385" },
      { label: "款式", value: "工作鞋/拖鞋/鞋套/靴子" },
      { label: "尺码", value: "35–48" },
    ],
    variants: ["ESD工作鞋", "防静电拖鞋", "导电鞋套", "防静电靴"],
    applications: ["电子装配", "半导体车间", "洁净室", "实验室"],
    related: ["garments", "flooring", "chairs"],
  },
  {
    slug: "masks",
    name: "无尘口罩系列",
    en: "Cleanroom Masks",
    tagline: "呼吸之间，洁净如初",
    heroImg: "https://images.pexels.com/photos/5040595/pexels-photo-5040595.jpeg?w=1200&fit=crop",
    overview: "思帆商无尘口罩采用熔喷过滤层技术，BFE≥99.9%，低微粒脱落特性满足洁净室严格要求。提供多种规格，从标准三层到医用级防护，覆盖全面的呼吸防护需求。",
    specs: [
      { label: "过滤层", value: "熔喷布 + 无纺布" },
      { label: "BFE", value: "≥99.9%" },
      { label: "微粒脱落", value: "低微粒 (<1000 particles/m³)" },
      { label: "标准", value: "YY 0469 / EN 14683" },
      { label: "规格", value: "耳挂式 / 头戴式" },
    ],
    variants: ["无尘口罩", "活性炭口罩", "洁净室专用口罩", "防静电口罩"],
    applications: ["洁净室", "实验室", "GMP车间", "电子装配"],
    related: ["garments", "chairs"],
  },
  {
    slug: "chairs",
    name: "ESD工作椅系列",
    en: "ESD Work Chairs",
    tagline: "坐得稳，防得住",
    heroImg: "https://images.pexels.com/photos/7897069/pexels-photo-7897069.jpeg?w=1200&fit=crop",
    overview: "思帆商ESD工作椅采用导电PU革面，对地电阻严格控制在10⁶–10⁸Ω，配备气动升降调节功能。从转椅到固定凳，覆盖生产线、实验室、检测台各类工位需求。",
    specs: [
      { label: "面料", value: "导电PU革 / 防静电布" },
      { label: "对地电阻", value: "10⁶ – 10⁸ Ω" },
      { label: "标准", value: "IEC 61340-5-1 / ANSI/ESD S20.20" },
      { label: "调节", value: "气动升降 / 固定高度" },
      { label: "承重", value: "≤150kg" },
    ],
    variants: ["ESD转椅", "无尘室凳", "防静电工作椅", "导电PU椅"],
    applications: ["SMT产线", "检测台", "实验室", "装配线"],
    related: ["garments", "footwear", "flooring"],
  },
  {
    slug: "flooring",
    name: "防静电地板系统",
    en: "ESD Flooring Systems",
    tagline: "从地面开始的全面防护",
    heroImg: "https://images.unsplash.com/photo-1772305336606-989a457ffbae?w=1200&fit=crop",
    overview: "思帆商防静电地板系统涵盖PVC卷材、环氧自流平、网络高架地板三大系列，系统电阻严格可控，配套完整的接地系统设计与施工服务，为各类电子制造环境提供从地面开始的全面ESD防护。",
    specs: [
      { label: "类型", value: "PVC卷材 / 环氧自流平 / 高架地板" },
      { label: "系统电阻", value: "10⁶ – 10⁹ Ω (可定制)" },
      { label: "标准", value: "IEC 61340-5-1 / GB 50515" },
      { label: "厚度", value: "2.0mm / 3.0mm / 5.0mm" },
      { label: "颜色", value: "灰/蓝/绿（可定制）" },
    ],
    variants: ["PVC防静电地板", "环氧自流平地坪", "网络高架地板", "导电地坪"],
    applications: ["SMT车间", "半导体Fab", "实验室", "数据中心"],
    related: ["footwear", "chairs"],
  },
];

export const solutions = [
  {
    slug: "electronics",
    name: "电子制造业",
    en: "Electronics Manufacturing",
    icon: "🏭",
    heroImg: "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=1200&q=80",
    overview: "电子制造业是ESD防护需求最密集的行业。从SMT贴片、芯片封装到PCB组装，每一个环节都对静电控制有严格要求。思帆商为电子制造企业提供从人体防护到环境控制的全链路ESD解决方案。",
    challenges: ["SMT产线静电敏感器件保护", "PCB制造过程中的静电积累", "包装运输环节的ESD风险", "多温区环境下的静电控制"],
    approach: ["现场ESD风险评估与等级分析", "定制化产品组合方案", "工程实施与接地系统部署", "定期巡检与持续优化"],
    products: ["garments", "footwear", "flooring", "chairs"],
    cases: [{ client: "某大型PCB制造企业", result: "ESD不良率从3.2%降至0.5%", desc: "部署全链路ESD方案后，PCB制造良率大幅提升。" }],
  },
  {
    slug: "semiconductor",
    name: "半导体芯片",
    en: "Semiconductor",
    icon: "💻",
    heroImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    overview: "半导体制造对环境洁净度和静电控制有极高标准。Class 1-Class 100洁净室要求每一位进入者都经过严格的静电防护。思帆商为半导体企业提供符合ISO 14644标准的全套ESD解决方案。",
    challenges: ["晶圆制造的极端ESD敏感度", "Class 1–100洁净室要求", "光刻/蚀刻等关键工艺的静电风险", "设备接地与人员接地的双重保障"],
    approach: ["超高洁净度ESD产品定制", "晶圆厂专用接地系统设计", "环境实时监测与预警系统", "操作人员ESD培训认证"],
    products: ["garments", "footwear", "masks", "flooring"],
    cases: [{ client: "某半导体封装测试企业", result: "晶圆损失率降低92%", desc: "部署高等级洁净室ESD方案后，关键工序的静电损伤事件大幅减少。" }],
  },
  {
    slug: "biopharma",
    name: "生物制药",
    en: "Biopharma",
    icon: "🧬",
    heroImg: "https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?w=1200&q=80",
    overview: "生物制药行业的GMP车间对洁净度、温湿度、微生物控制及静电防护均有综合要求。思帆商为生物制药企业提供同时满足GMP规范和ESD标准的整体解决方案。",
    challenges: ["GMP A/B/C/D级洁净区ESD要求", "无菌环境下的静电控制", "生物安全实验室的特殊防护", "温湿度对静电产生的影响"],
    approach: ["GMP合规的ESD方案设计", "洁净室施工与验证", "环境参数监测系统", "年度GMP复检技术支持"],
    products: ["garments", "masks", "flooring", "chairs"],
    cases: [{ client: "某生物制药公司", result: "一次性通过GMP认证审核", desc: "洁净车间从设计到施工到第三方检测一次性达标。" }],
  },
  {
    slug: "laboratory",
    name: "科研实验室",
    en: "Laboratory",
    icon: "🔬",
    heroImg: "https://images.pexels.com/photos/5118462/pexels-photo-5118462.jpeg?w=1200",
    overview: "科研实验室对实验环境有精准控制需求。恒温恒湿、洁净度、静电防护每一项都至关重要。思帆商为各类实验室提供定制化的环境控制与ESD防护方案。",
    challenges: ["精密仪器的静电敏感性", "恒温恒湿环境控制", "多实验室类型的差异化需求", "实验数据的可靠性保障"],
    approach: ["实验室环境综合评估", "定制化ESD防护方案", "精密接地系统安装", "定期环境参数校准"],
    products: ["garments", "footwear", "flooring", "masks"],
    cases: [{ client: "某国家级材料实验室", result: "洁净度达Class 100标准", desc: "恒温恒湿洁净室工程一次性验收通过。" }],
  },
  {
    slug: "aerospace",
    name: "航空航天",
    en: "Aerospace",
    icon: "🚀",
    heroImg: "https://images.unsplash.com/photo-1606206873764-fd15e242df52?w=1200&q=80",
    overview: "航空航天领域的电子设备对可靠性有极高要求。静电放电可能导致卫星、飞行器关键电子系统的失效。思帆商为航空航天企业提供军工级别的ESD防护产品与工程服务。",
    challenges: ["航天级电子设备的极端ESD敏感度", "特殊材料的静电控制", "发射环境下的综合防护", "严格的军工标准要求"],
    approach: ["军工级ESD产品供应", "特殊环境模拟测试", "全流程ESD防护方案", "定期技术审核与升级"],
    products: ["garments", "footwear", "flooring", "chairs"],
    cases: [],
  },
];

export const newsArticles = [
  {
    slug: "esd-standards-2026",
    title: "2026年ESD防护国际标准更新解读",
    date: "2026-06-15",
    summary: "IEC 61340系列标准最新修订版发布，本文详细解读关键变化及对企业ESD防护体系的影响。",
    content: `2026年，国际电工委员会（IEC）发布了IEC 61340系列标准的最新修订版。本次修订主要涉及以下几个方面：

**1. 静电放电敏感度分级更新**
新增了对新型半导体器件的ESD敏感度分级，特别是针对先进封装（Advanced Packaging）和3D IC的防护要求。

**2. 接地系统测试方法优化**
更新了接地系统的测试方法和验收标准，增加了对复杂接地网络的评估要求。

**3. 人员接地装置新规**
对腕带、鞋类等人员接地装置的测试频率和判定标准进行了修订。

**4. 包装材料ESD性能评估**
新增了对可重复使用ESD包装材料的寿命评估方法。

思帆商建议所有客户根据新标准对现有ESD防护体系进行评估和升级。`,
  },
  {
    slug: "cleanroom-class100-upgrade",
    title: "思帆商助力某半导体企业完成Class 100洁净室升级",
    date: "2026-06-08",
    summary: "我司工程团队成功为某大型半导体封装测试企业完成Class 100洁净室整体升级改造工程。",
    content: `近日，思帆商工程团队成功完成了某大型半导体封装测试企业的Class 100洁净室整体升级改造项目。

**项目概况**
- 面积：3,000㎡
- 洁净等级：Class 100 (ISO 5)
- 工期：45天
- 涵盖：地面工程、通风系统、ESD接地、环境监测

**技术亮点**
1. 采用新型防静电环氧自流平地坪，系统电阻稳定在10⁶–10⁸Ω
2. 升级FFU高效过滤系统，实现0.1μm颗粒物99.999%过滤效率
3. 部署IoT环境实时监测系统，温湿度、压差、颗粒物浓度全时在线
4. 全面升级人员接地监测系统，实现100%人员覆盖

**项目成果**
- 洁净度一次性通过Class 100认证
- ESD防护系统通过IEC 61340合规检测
- 客户产线良率提升2.3个百分点`,
  },
  {
    slug: "smart-esd-monitoring",
    title: "智能ESD监测：从被动防护到主动预警",
    date: "2026-05-28",
    summary: "探讨物联网技术在ESD环境监测中的应用，以及如何实现从被动防护到主动预警的转变。",
    content: `随着工业4.0和智能制造的推进，ESD防护也正在从传统的被动防护向智能化的主动预警转变。

**传统ESD防护的痛点**
1. 依赖人工定期检测，存在检测盲区
2. 数据记录不完整，难以追溯
3. 异常发现滞后，往往在不良品出现后才察觉

**智能ESD监测系统**
思帆商推出的智能ESD监测系统，基于物联网技术实现：
- 实时监测：7×24小时不间断采集接地电阻、静电场强等关键参数
- 主动预警：参数异常时即时通过短信/微信/APP推送告警
- 数据分析：历史数据趋势分析，预测潜在风险
- 合规报告：自动生成符合IEC 61340标准的检测报告

**应用案例**
某电子制造企业部署智能ESD监测系统后：
- ESD异常发现时间从平均48小时缩短至2分钟
- 静电损伤不良率降低76%
- 检测人力成本节约60%`,
  },
  {
    slug: "esd-packaging-guide",
    title: "ESD防护包装选型指南",
    date: "2026-05-20",
    summary: "如何根据产品ESD敏感等级和应用场景选择合适的防静电包装材料。",
    content: `选择合适的ESD防护包装是保护静电敏感器件的关键环节。本文提供全面的选型指南。

**ESD包装材料分类**
1. 屏蔽袋（Shielding Bag）：法拉第笼效应，阻挡外部静电场
2. 导电袋（Conductive Bag）：表面电阻<10⁴Ω，快速泄放静电荷
3. 防静电袋（Anti-static Bag）：表面电阻10⁹–10¹¹Ω，抑制摩擦起电
4. 防静电托盘（ESD Tray）：用于元器件周转和存储

**选型考虑因素**
- 器件的ESD敏感等级（HBM/CDM模型）
- 运输距离和环境条件
- 存储时间和周转频率
- 成本和可重复使用性

**行业最佳实践**
- 敏感度高的器件（Class 0, <250V）必须使用屏蔽袋
- 长途运输建议双层包装：内层屏蔽袋+外层缓冲材料
- 定期检测重复使用包装的ESD性能衰减`,
  },
];
