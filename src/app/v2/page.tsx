"use client";

import FloatingContact from "@/components/FloatingContact";

const LAB_IMG = "https://images.pexels.com/photos/5118462/pexels-photo-5118462.jpeg?cs=srgb&dl=pexels-3430425-5118462.jpg&fm=jpg&w=1920";
const CIRCUIT_BG = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80";
const CLEANROOM_IMG = "https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?w=1920&q=80";

const products = [
  { label: "防静电服装系列", en: "ESD Garments Collection", desc: "碳纤维复合面料，表面电阻10⁶–10⁸Ω，适用于Class 100–100K洁净室", img: "https://images.pexels.com/photos/9574476/pexels-photo-9574476.jpeg?w=600&h=400&fit=crop" },
  { label: "防静电鞋类", en: "ESD Footwear", desc: "导电橡胶鞋底，符合IEC 61340-5-1标准，人体综合电阻<35MΩ", img: "https://images.pexels.com/photos/14982935/pexels-photo-14982935.jpeg?w=600&h=400&fit=crop" },
  { label: "无尘口罩系列", en: "Cleanroom Masks", desc: "熔喷过滤层，BFE≥99.9%，低微粒脱落", img: "https://images.pexels.com/photos/5040595/pexels-photo-5040595.jpeg?w=600&h=400&fit=crop" },
  { label: "ESD工作椅", en: "ESD Work Chairs", desc: "导电PU革面，对地电阻10⁶–10⁸Ω，气动升降调节", img: "https://images.pexels.com/photos/7897069/pexels-photo-7897069.jpeg?w=600&h=400&fit=crop" },
  { label: "防静电地板系统", en: "ESD Flooring Systems", desc: "PVC卷材/环氧自流平/网络高架地板", img: "https://images.unsplash.com/photo-1772305336606-989a457ffbae?w=600&h=400&fit=crop" },
  { label: "工程服务", en: "Engineering Services", desc: "洁净室设计施工 · ESD环境检测 · 接地系统安装", img: "https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?w=600&h=400&fit=crop" },
];

export default function VersionBPrecision() {
  return (
    <div className="theme-precision noise-texture" style={{ background: "var(--prec-bg)", color: "var(--prec-text)", fontFamily: "var(--prec-font-body)" }}>
      {/* ===== HEADER — Minimal ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ borderColor: "var(--prec-border)", background: "rgba(250,250,249,0.95)", backdropFilter: "blur(20px)" }}>
        <nav className="max-w-7xl mx-auto px-8 lg:px-12 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--prec-accent)" }}>
              <span className="text-white text-xs tracking-[0.15em]" style={{ fontFamily: "var(--prec-font-display)" }}>SF</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-semibold tracking-[0.1em]" style={{ fontFamily: "var(--prec-font-display)" }}>思帆商</span>
              <span className="text-[9px] tracking-[0.25em] ml-2 opacity-30">SIFANGSHANG</span>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {["产品", "方案", "工程", "案例", "联系"].map((item) => (
              <a key={item} href={`#${item}`} className="text-xs tracking-[0.15em] opacity-40 hover:opacity-100 transition-opacity">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="px-6 py-2 text-xs tracking-[0.15em] border border-current opacity-70 hover:opacity-100 transition-opacity" style={{ color: "var(--prec-accent)" }}>
            获取报价
          </a>
        </nav>
      </header>

      {/* ===== HERO — Editorial ===== */}
      <section className="relative min-h-screen flex items-center">
        {/* Split layout */}
        <div className="absolute inset-0 flex">
          <div className="w-full lg:w-[55%]" style={{ background: "var(--prec-bg)" }} />
          <div className="hidden lg:block w-[45%] relative overflow-hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: `url(${LAB_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} />
            <div className="absolute inset-0 opacity-20" style={{ background: "var(--prec-accent)" }} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-12 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="editorial-rule mb-8 anim-fade-up" />

              <div className="anim-fade-up delay-100">
                <span className="text-[10px] tracking-[0.3em] opacity-30">SINCE 2011 · ESD SOLUTIONS</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mt-4 mb-8 anim-fade-up delay-200" style={{ fontFamily: "var(--prec-font-display)" }}>
                洁净
                <br />
                <span className="italic font-semibold" style={{ color: "var(--prec-accent)" }}>即标准</span>
              </h1>

              <p className="text-base leading-relaxed max-w-md font-light anim-fade-up delay-300" style={{ color: "var(--prec-muted)" }}>
                在每一个精密制造环节中，洁净不是可选项。
                <br />
                思帆商以极致的工程精度，守护您的产品品质。
              </p>

              <div className="flex gap-8 mt-10 anim-fade-up delay-400">
                <a href="#产品" className="group inline-flex items-center gap-2 text-sm tracking-[0.1em] font-medium" style={{ color: "var(--prec-accent)" }}>
                  探索产品
                  <span className="w-8 h-px transition-all duration-300 group-hover:w-12" style={{ background: "var(--prec-accent)" }} />
                </a>
                <a href="#contact" className="text-sm tracking-[0.1em] opacity-30 hover:opacity-60 transition-opacity">
                  联系咨询
                </a>
              </div>
            </div>

            {/* Right side text (over image) */}
            <div className="hidden lg:flex items-end h-full min-h-[400px]">
              <div className="text-white/90" style={{ fontFamily: "var(--prec-font-display)" }}>
                <p className="text-2xl italic leading-relaxed">
                  &ldquo;思帆商的专业方案
                  <br />
                  让我们的洁净室达到
                  <br />
                  <span className="text-4xl font-semibold not-italic">Class 100</span> 标准。&rdquo;
                </p>
                <p className="text-sm mt-4 opacity-60" style={{ fontFamily: "var(--prec-font-body)" }}>— 某国家级实验室负责人</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS — Museum cards ===== */}
      <section id="产品" className="py-28" style={{ background: "var(--prec-surface)" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <div className="editorial-rule mb-4" />
            <span className="text-[10px] tracking-[0.3em] opacity-30">PRODUCT ARCHIVE</span>
            <h2 className="text-3xl lg:text-4xl font-light mt-2" style={{ fontFamily: "var(--prec-font-display)" }}>
              产品典藏<span className="text-sm ml-3 opacity-20">/ 产品中心</span>
            </h2>
          </div>

          <div className="space-y-1">
            {products.map((p, i) => (
              <div key={p.label} className="group grid grid-cols-1 lg:grid-cols-[80px_1fr_2fr_1fr] gap-6 items-center py-8 px-6 transition-all hover:bg-black/[0.02]" style={{ borderBottom: "1px solid var(--prec-border)" }}>
                {/* Thumbnail */}
                <div className="hidden lg:block w-20 h-20 overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${p.img})` }} />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.3em] opacity-20">0{i + 1}</span>
                  <h3 className="text-xl font-semibold mt-1" style={{ fontFamily: "var(--prec-font-display)" }}>{p.label}</h3>
                  <p className="text-[10px] tracking-[0.15em] opacity-25 mt-0.5">{p.en}</p>
                </div>
                <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--prec-muted)" }}>
                  {p.desc}
                </p>
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.1em] opacity-0 group-hover:opacity-40 transition-opacity" style={{ color: "var(--prec-accent)" }}>
                    了解详情
                    <span className="w-6 h-px" style={{ background: "var(--prec-accent)" }} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMAGE INTERLUDE ===== */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${CIRCUIT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)",
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-8xl font-light italic mb-4" style={{ fontFamily: "var(--prec-font-display)" }}>20,000<span className="text-3xl opacity-40">㎡</span></p>
            <p className="text-sm tracking-[0.3em] opacity-40">现代化生产基地</p>
          </div>
        </div>
      </section>

      {/* ===== ENGINEERING — Split ===== */}
      <section id="工程" className="py-28" style={{ background: "var(--prec-bg)" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] overflow-hidden">
                <div className="w-full h-full" style={{
                  backgroundImage: `url(${CLEANROOM_IMG})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }} />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="editorial-rule mb-4" />
              <span className="text-[10px] tracking-[0.3em] opacity-30">ENGINEERING</span>
              <h2 className="text-3xl lg:text-4xl font-light mt-2 mb-12" style={{ fontFamily: "var(--prec-font-display)" }}>
                工程服务
              </h2>

              <div className="space-y-10">
                {[
                  { step: "诊断", title: "ESD风险评估", desc: "现场勘查 · 静电风险等级分析 · 定制化建议报告" },
                  { step: "设计", title: "方案设计", desc: "CAD/BIM三维模拟 · 物料选型 · 工程预算" },
                  { step: "施工", title: "工程实施", desc: "专业施工团队 · 严格QC流程 · 按期交付" },
                  { step: "认证", title: "检测认证", desc: "IEC 61340合规 · 第三方检测 · 年度复检" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 group">
                    <span className="text-6xl font-light opacity-10" style={{ fontFamily: "var(--prec-font-display)" }}>{item.step}</span>
                    <div className="pt-2">
                      <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "var(--prec-font-display)" }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--prec-muted)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CASES ===== */}
      <section id="案例" className="py-28" style={{ background: "var(--prec-surface)" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="editorial-rule mb-4" />
          <span className="text-[10px] tracking-[0.3em] opacity-30">CASE STUDIES</span>
          <h2 className="text-3xl lg:text-4xl font-light mt-2 mb-16" style={{ fontFamily: "var(--prec-font-display)" }}>
            客户案例
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {[
              { industry: "半导体封装", result: "ESD不良率 ↓85%", desc: "某大型封装测试企业，部署全链路ESD防护方案后，芯片封装良率显著提升。" },
              { industry: "生物制药", result: "通过GMP认证", desc: "某生物制药公司洁净车间，从设计到施工到认证，一次性通过GMP审核。" },
              { industry: "国家级实验室", result: "Class 100 达标", desc: "某国家级材料实验室，恒温恒湿洁净室工程，达到ISO Class 100标准。" },
            ].map((cs) => (
              <div key={cs.industry} className="p-10" style={{ border: "1px solid var(--prec-border)" }}>
                <div className="text-3xl mb-4 opacity-15">✓</div>
                <div className="text-[10px] tracking-[0.2em] opacity-30 mb-2">{cs.industry}</div>
                <div className="text-2xl font-semibold mb-3" style={{ fontFamily: "var(--prec-font-display)", color: "var(--prec-accent)" }}>{cs.result}</div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--prec-muted)" }}>{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" className="py-28" style={{ background: "var(--prec-accent)" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <span className="text-[10px] tracking-[0.3em] text-white/40">START A CONVERSATION</span>
            <h2 className="text-3xl lg:text-4xl font-light text-white mt-3" style={{ fontFamily: "var(--prec-font-display)" }}>
              开启对话
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Form */}
            <form className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" placeholder="您的姓名" className="px-5 py-3.5 text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors" />
              <input type="text" placeholder="联系电话" className="px-5 py-3.5 text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors" />
              <input type="email" placeholder="电子邮箱" className="sm:col-span-2 px-5 py-3.5 text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors" />
              <textarea rows={4} placeholder="请描述您的需求..." className="sm:col-span-2 px-5 py-3.5 text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none" />
              <button type="submit" className="sm:col-span-2 px-8 py-4 text-sm tracking-[0.2em] bg-white font-semibold transition-colors hover:bg-white/90" style={{ color: "var(--prec-accent)" }}>
                提交需求
              </button>
            </form>

            {/* Right: Contact info */}
            <div className="lg:col-span-2 space-y-6 text-white">
              <div className="p-6 bg-white/10 border border-white/20">
                <img src="/wechat-qr.png" alt="微信扫码" className="w-32 h-32 mx-auto rounded-xl mb-3" />
                <p className="text-center text-sm font-semibold" style={{ fontFamily: "var(--prec-font-display)" }}>微信扫码联系</p>
                <p className="text-center text-xs text-white/40 mt-1">扫一扫添加微信</p>
              </div>
              <div className="space-y-4 p-6 bg-white/10 border border-white/20">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <div>
                    <p className="text-sm font-semibold">电话咨询</p>
                    <p className="text-xs text-white/50">400-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📧</span>
                  <div>
                    <p className="text-sm font-semibold">电子邮件</p>
                    <p className="text-xs text-white/50">info@sifangshang.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📍</span>
                  <div>
                    <p className="text-sm font-semibold">生产基地</p>
                    <p className="text-xs text-white/50">XX省XX市XX区</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-white/30 flex items-center gap-2">
                <span>●</span> 技术团队24小时内响应
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16" style={{ background: "#1a1817", color: "#a8a29e" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--prec-accent)" }}>
                  <span className="text-white text-xs tracking-[0.15em]" style={{ fontFamily: "var(--prec-font-display)" }}>SF</span>
                </div>
                <span className="text-sm text-white/80 tracking-[0.15em]" style={{ fontFamily: "var(--prec-font-display)" }}>思帆商</span>
              </a>
              <p className="text-sm leading-relaxed max-w-xs">
                专注静电防尘领域的高新技术企业。
              </p>
            </div>
            {[
              { title: "产品", links: ["防静电服装", "防静电鞋类", "无尘口罩", "ESD工作椅", "防静电地板"] },
              { title: "方案", links: ["电子制造", "半导体", "生物制药", "实验室", "航空航天"] },
              { title: "公司", links: ["关于我们", "工厂实力", "资质认证", "客户案例", "联系我们"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs tracking-[0.2em] text-white/40 mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="text-sm opacity-40 hover:opacity-70 transition-opacity">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-xs opacity-30">
            <p>© 2026 思帆商 SIFANGSHANG</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-60 transition-opacity">隐私政策</a>
              <a href="#" className="hover:opacity-60 transition-opacity">服务条款</a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingContact />
    </div>
  );
}
