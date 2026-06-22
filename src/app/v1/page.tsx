"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FloatingContact from "@/components/FloatingContact";

const HERO_IMG = "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=1920&q=80";
const ROBOT_IMG = "https://images.unsplash.com/photo-1606206873764-fd15e242df52?w=1920&q=80";
const CLEANROOM_IMG = "https://images.unsplash.com/photo-1748349221526-33b51820b21e?w=1920&q=80";

const products = [
  {
    label: "防静电服装",
    en: "ESD Garments",
    desc: "碳纤维复合面料 · 10⁶–10⁸Ω · Class 100–100K",
    stat: "12+款",
    img: "https://images.pexels.com/photos/9574476/pexels-photo-9574476.jpeg?w=800&h=600&fit=crop",
    badge: "HOT",
    gradient: "from-slate-800/30 via-slate-900/50 to-slate-950/70",
    href: "/products/garments",
  },
  {
    label: "防静电鞋类",
    en: "ESD Footwear",
    desc: "导电橡胶鞋底 · IEC 61340-5-1 · 人体电阻<35MΩ",
    stat: "8款",
    img: "https://images.pexels.com/photos/14982935/pexels-photo-14982935.jpeg?w=800&h=600&fit=crop",
    badge: "NEW",
    gradient: "from-slate-700/30 via-slate-800/50 to-slate-950/70",
    href: "/products/footwear",
  },
  {
    label: "无尘口罩",
    en: "Cleanroom Masks",
    desc: "熔喷过滤层 · BFE≥99.9% · 低微粒脱落",
    stat: "Class 100",
    img: "https://images.pexels.com/photos/5040595/pexels-photo-5040595.jpeg?w=800&h=600&fit=crop",
    badge: "BEST",
    gradient: "from-sky-800/30 via-blue-900/50 to-slate-950/70",
    href: "/products/masks",
  },
  {
    label: "ESD工作椅",
    en: "ESD Chairs",
    desc: "导电PU革面 · 对地电阻10⁶–10⁸Ω · 气动升降",
    stat: "10⁶Ω",
    img: "https://images.pexels.com/photos/7897069/pexels-photo-7897069.jpeg?w=800&h=600&fit=crop",
    badge: "",
    gradient: "from-gray-700/25 via-gray-800/45 to-gray-950/65",
    href: "/products/chairs",
  },
  {
    label: "防静电地板",
    en: "ESD Flooring",
    desc: "PVC卷材/环氧自流平/高架地板 · 系统电阻可控",
    stat: "3类",
    img: "https://images.unsplash.com/photo-1772305336606-989a457ffbae?w=800&h=600&fit=crop",
    badge: "",
    gradient: "from-stone-700/25 via-stone-800/45 to-stone-950/65",
    href: "/products/flooring",
  },
  {
    label: "工程服务",
    en: "Engineering",
    desc: "洁净室设计施工 · ESD检测认证 · 接地系统",
    stat: "15年+",
    img: "https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?w=800&h=600&fit=crop",
    badge: "PRO",
    gradient: "from-indigo-800/30 via-indigo-900/50 to-slate-950/70",
    href: "/solutions/electronics",
  },
];

const stats = [
  { value: "20,000", unit: "㎡", label: "生产基地" },
  { value: "500+", unit: "", label: "企业客户" },
  { value: "98.6", unit: "%", label: "客户满意率" },
  { value: "30+", unit: "", label: "出口国家" },
];

export default function VersionACircuit() {
  return (
    <div className="theme-circuit min-h-screen" style={{ background: "var(--circuit-bg)", color: "var(--circuit-text)", fontFamily: "var(--circuit-font-body)" }}>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden circuit-grid pcb-pattern">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-[0.25]" style={{
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }} />

        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(0,180,255,0.04) 0%, transparent 50%)" }} />

        {/* Decorative circuit lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px opacity-20" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), rgba(0,212,255,0.8), rgba(0,212,255,0.5), transparent)" }} />
        <div className="absolute bottom-1/3 left-0 right-0 h-px opacity-10" style={{ background: "linear-gradient(90deg, transparent, rgba(0,180,255,0.4), transparent)" }} />
        <div className="absolute top-0 bottom-0 left-[60%] w-px opacity-10" style={{ background: "linear-gradient(180deg, transparent, rgba(0,212,255,0.5), transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border mb-8 anim-fade-up" style={{ borderColor: "rgba(0,212,255,0.2)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--circuit-accent)" }} />
                <span className="text-[10px] tracking-[0.3em] opacity-60" style={{ fontFamily: "var(--circuit-font-display)" }}>ESD SOLUTIONS</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 anim-fade-up delay-100" style={{ fontFamily: "var(--circuit-font-display)" }}>
                <span className="text-white">精密防护</span>
                <br />
                <span className="glow-text-cyan" style={{ color: "var(--circuit-accent)" }}>零静电干扰</span>
              </h1>

              <p className="text-base lg:text-lg leading-relaxed mb-10 max-w-md anim-fade-up delay-200" style={{ color: "var(--circuit-muted)" }}>
                思帆商为半导体、电子制造、生物科技提供从<span className="text-white">人体防护</span>到<span className="text-white">环境控制</span>的全链路ESD解决方案。
              </p>

              <div className="flex flex-wrap gap-4 anim-fade-up delay-300">
                <a href="#contact" className="px-8 py-3.5 text-sm tracking-[0.15em] transition-all hover:-translate-y-0.5" style={{
                  background: "var(--circuit-accent)",
                  color: "#06090f",
                  fontFamily: "var(--circuit-font-display)",
                  boxShadow: "0 0 40px rgba(0,212,255,0.25)",
                }}>
                  开始合作
                </a>
                <a href="#产品" className="px-8 py-3.5 text-sm tracking-[0.15em] border transition-all hover:bg-white/5" style={{ borderColor: "rgba(255,255,255,0.15)", fontFamily: "var(--circuit-font-display)", color: "var(--circuit-text)" }}>
                  探索产品
                </a>
              </div>
            </div>

            {/* Right — Abstract visual */}
            <div className="hidden lg:block relative anim-scale-in delay-400">
              <div className="aspect-square max-w-md ml-auto relative">
                {/* Concentric circuit rings */}
                {[280, 220, 160, 100].map((size, i) => (
                  <div key={size} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-[0.08]" style={{
                    width: size, height: size,
                    borderColor: "var(--circuit-accent)",
                    animationDelay: `${i * 0.5}s`,
                  }} />
                ))}
                {/* Center node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full" style={{
                  border: "1px solid rgba(0,212,255,0.3)",
                  boxShadow: "0 0 60px rgba(0,212,255,0.15), inset 0 0 30px rgba(0,212,255,0.05)",
                }}>
                  <div className="absolute inset-3 rounded-full" style={{ background: "var(--circuit-accent)", opacity: 0.15 }} />
                  <span className="absolute inset-0 flex items-center justify-center text-2xl" style={{ color: "var(--circuit-accent)" }}>⚡</span>
                </div>
                {/* Floating data nodes */}
                {[
                  { x: "10%", y: "20%", text: "10⁶Ω" },
                  { x: "80%", y: "15%", text: "ESD" },
                  { x: "75%", y: "75%", text: "ISO 4" },
                  { x: "15%", y: "70%", text: "99.9%" },
                ].map((node) => (
                  <div key={node.text} className="absolute px-2.5 py-1 text-[10px] tracking-wider border opacity-60" style={{
                    left: node.x, top: node.y,
                    borderColor: "rgba(0,212,255,0.2)",
                    color: "var(--circuit-accent)",
                    fontFamily: "var(--circuit-font-display)",
                  }}>
                    {node.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] opacity-30" style={{ fontFamily: "var(--circuit-font-display)" }}>SCROLL</span>
          <div className="w-px h-8 opacity-20" style={{ background: "linear-gradient(180deg, var(--circuit-accent), transparent)" }} />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y py-10" style={{ borderColor: "var(--circuit-border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--circuit-font-display)" }}>
                  {s.value}<span style={{ color: "var(--circuit-accent)" }}>{s.unit}</span>
                </div>
                <div className="text-xs mt-1 tracking-[0.1em]" style={{ color: "var(--circuit-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="产品" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <span className="text-[10px] tracking-[0.3em] opacity-60" style={{ fontFamily: "var(--circuit-font-display)" }}>PRODUCT MATRIX</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3" style={{ fontFamily: "var(--circuit-font-display)" }}>
              产品矩阵<span className="opacity-20 ml-2">/ 产品中心</span>
            </h2>
          </div>

          {/* E-commerce poster grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group relative overflow-hidden cursor-pointer border transition-all duration-500 hover:-translate-y-1 block"
                style={{ borderColor: "var(--circuit-border)", minHeight: 380 }}
              >
                {/* Product image background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${p.gradient}`} />
                {/* Circuit line overlay */}
                <div className="absolute inset-0 opacity-10 circuit-grid" />

                {/* Badge */}
                {p.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-[10px] tracking-[0.2em] font-bold" style={{
                      background: p.badge === "HOT" ? "#ff3b5c" : p.badge === "NEW" ? "#00d4ff" : p.badge === "BEST" ? "#f59e0b" : "#00d4ff",
                      color: "#fff",
                      fontFamily: "var(--circuit-font-display)",
                    }}>
                      {p.badge}
                    </span>
                  </div>
                )}

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-[10px] tracking-[0.2em] opacity-70 mb-1" style={{ fontFamily: "var(--circuit-font-display)" }}>
                        {p.en}
                      </p>
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--circuit-font-display)" }}>
                        {p.label}
                      </h3>
                    </div>
                    <span className="text-lg font-bold shrink-0 px-3 py-1 border backdrop-blur-sm" style={{
                      color: "var(--circuit-accent)",
                      borderColor: "rgba(0,212,255,0.3)",
                      fontFamily: "var(--circuit-font-display)",
                      background: "rgba(0,0,0,0.4)",
                    }}>
                      {p.stat}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed mb-4 opacity-75">{p.desc}</p>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform transition-transform">
                    <span className="text-xs tracking-[0.15em] font-bold" style={{ color: "var(--circuit-accent)", fontFamily: "var(--circuit-font-display)" }}>
                      立即询价 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENGINEERING SPLIT ===== */}
      <section id="工程" className="py-28 border-t" style={{ borderColor: "var(--circuit-border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] tracking-[0.3em] opacity-60" style={{ fontFamily: "var(--circuit-font-display)" }}>ENGINEERING</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-8" style={{ fontFamily: "var(--circuit-font-display)" }}>
                工程服务<span className="opacity-20 ml-2">/ 工程服务</span>
              </h2>

              <div className="space-y-6">
                {[
                  { num: "01", title: "洁净室设计施工", desc: "Class 100 – Class 100K · ISO 14644标准 · BIM三维模拟" },
                  { num: "02", title: "防静电地坪工程", desc: "PVC地板 · 环氧自流平 · 网络高架地板 · 接地系统" },
                  { num: "03", title: "ESD环境检测认证", desc: "IEC 61340 · GB3007 · 第三方权威检测报告" },
                  { num: "04", title: "技术培训与维护", desc: "定制化培训课程 · 定期巡检 · 7×24h技术支持" },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5 group cursor-pointer">
                    <span className="text-2xl font-bold shrink-0 transition-colors group-hover:opacity-100" style={{ fontFamily: "var(--circuit-font-display)", color: "var(--circuit-accent)", opacity: 0.3 }}>{item.num}</span>
                    <div>
                      <h3 className="text-white font-semibold text-sm tracking-[0.1em] mb-1" style={{ fontFamily: "var(--circuit-font-display)" }}>{item.title}</h3>
                      <p className="text-sm" style={{ color: "var(--circuit-muted)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image panel */}
            <div className="relative aspect-[4/5] overflow-hidden" style={{ background: "var(--circuit-surface)", border: "1px solid var(--circuit-border)" }}>
              <div className="absolute inset-0 opacity-60" style={{
                backgroundImage: `url(${CLEANROOM_IMG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(6,9,15,0.8) 0%, transparent 50%)" }} />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "var(--circuit-font-display)" }}>15年+</div>
                <p className="text-xs tracking-[0.15em] opacity-60">工程服务经验</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROBOT IMAGE STRIP ===== */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url(${ROBOT_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(10,22,40,0.85) 0%, transparent 40%, transparent 60%, rgba(10,22,40,0.85) 100%)" }} />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] mb-4 opacity-40" style={{ fontFamily: "var(--circuit-font-display)" }}>TRUSTED BY 500+ ENTERPRISES</p>
            <p className="text-2xl lg:text-3xl text-white max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--circuit-font-display)" }}>
              <span style={{ color: "var(--circuit-accent)" }}>"</span>思帆商的ESD方案使我们的产线不良率降低了<span style={{ color: "var(--circuit-accent)" }}>85%</span><span style={{ color: "var(--circuit-accent)" }}>"</span>
            </p>
            <p className="text-sm mt-6 opacity-40">— 某大型半导体封装企业</p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" className="py-28" style={{ background: "var(--circuit-surface)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <span className="text-[10px] tracking-[0.3em] opacity-60" style={{ fontFamily: "var(--circuit-font-display)" }}>START A PROJECT</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3" style={{ fontFamily: "var(--circuit-font-display)" }}>
              启动您的防护方案
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Form */}
            <form className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" placeholder="姓名 / Name" className="px-5 py-3.5 text-sm border focus:outline-none focus:border-[var(--circuit-accent)] transition-colors" style={{
                background: "transparent", borderColor: "var(--circuit-border)", color: "var(--circuit-text)",
                fontFamily: "var(--circuit-font-body)",
              }} />
              <input type="text" placeholder="电话 / Phone" className="px-5 py-3.5 text-sm border focus:outline-none focus:border-[var(--circuit-accent)] transition-colors" style={{
                background: "transparent", borderColor: "var(--circuit-border)", color: "var(--circuit-text)",
                fontFamily: "var(--circuit-font-body)",
              }} />
              <input type="email" placeholder="邮箱 / Email" className="sm:col-span-2 px-5 py-3.5 text-sm border focus:outline-none focus:border-[var(--circuit-accent)] transition-colors" style={{
                background: "transparent", borderColor: "var(--circuit-border)", color: "var(--circuit-text)",
                fontFamily: "var(--circuit-font-body)",
              }} />
              <textarea rows={4} placeholder="请描述您的需求 / Project requirements..." className="sm:col-span-2 px-5 py-3.5 text-sm border focus:outline-none focus:border-[var(--circuit-accent)] transition-colors resize-none" style={{
                background: "transparent", borderColor: "var(--circuit-border)", color: "var(--circuit-text)",
                fontFamily: "var(--circuit-font-body)",
              }} />
              <button type="submit" className="sm:col-span-2 px-8 py-4 text-sm tracking-[0.2em] transition-all hover:-translate-y-0.5" style={{
                background: "var(--circuit-accent)", color: "#0a1628",
                fontFamily: "var(--circuit-font-display)",
                boxShadow: "0 0 40px rgba(0,180,224,0.25)",
              }}>
                提交需求
              </button>
            </form>

            {/* Right: Contact info */}
            <div className="lg:col-span-2 space-y-8">
              {/* WeChat QR */}
              <div className="p-6 border" style={{ borderColor: "var(--circuit-border)", background: "rgba(255,255,255,0.02)" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ background: "#07C160" }}>
                    💬
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--circuit-font-display)" }}>微信咨询</p>
                    <p className="text-xs opacity-50">WeChat</p>
                  </div>
                </div>
                <img src="/wechat-qr.png" alt="微信扫码" className="w-36 h-36 mx-auto rounded-xl border border-white/10" />
                <p className="text-center text-xs mt-3 opacity-40">扫一扫添加微信</p>
              </div>

              {/* Contact details */}
              <div className="space-y-4 p-6 border" style={{ borderColor: "var(--circuit-border)", background: "rgba(255,255,255,0.02)" }}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ background: "rgba(0,180,224,0.15)" }}>
                    📞
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--circuit-font-display)" }}>电话咨询</p>
                    <p className="text-xs opacity-50">400-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ background: "rgba(0,180,224,0.15)" }}>
                    📧
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--circuit-font-display)" }}>电子邮件</p>
                    <p className="text-xs opacity-50">info@sifangshang.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ background: "rgba(0,180,224,0.15)" }}>
                    📍
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--circuit-font-display)" }}>生产基地</p>
                    <p className="text-xs opacity-50">XX省XX市XX区</p>
                  </div>
                </div>
              </div>

              {/* Response promise */}
              <div className="flex items-center gap-2 text-xs opacity-40">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--circuit-accent)" }} />
                技术团队24小时内响应
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t py-16" style={{ borderColor: "var(--circuit-border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 border flex items-center justify-center" style={{ borderColor: "var(--circuit-accent)", boxShadow: "0 0 20px rgba(0,212,255,0.15)" }}>
                  <span className="text-sm tracking-widest" style={{ color: "var(--circuit-accent)", fontFamily: "var(--circuit-font-display)" }}>SF</span>
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-[0.15em] text-white" style={{ fontFamily: "var(--circuit-font-display)" }}>思帆商</div>
                  <div className="text-[9px] tracking-[0.3em] opacity-40">SIFANGSHANG</div>
                </div>
              </a>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--circuit-muted)" }}>
                专注静电防尘领域的高新技术企业。服务电子制造、半导体、生物制药、航空航天等行业。
              </p>
            </div>
            {[
              { title: "产品", links: ["防静电服装", "防静电鞋类", "无尘口罩", "ESD工作椅", "防静电地板"] },
              { title: "方案", links: ["电子制造", "半导体", "生物制药", "实验室", "航空航天"] },
              { title: "公司", links: ["关于我们", "工厂实力", "资质认证", "客户案例", "联系我们"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs tracking-[0.2em] text-white mb-5 opacity-50" style={{ fontFamily: "var(--circuit-font-display)" }}>{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="text-sm opacity-40 hover:opacity-80 transition-opacity">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between gap-4" style={{ borderColor: "var(--circuit-border)" }}>
            <p className="text-xs opacity-30">© 2026 思帆商 SIFANGSHANG</p>
            <div className="flex gap-6 text-xs opacity-30">
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
