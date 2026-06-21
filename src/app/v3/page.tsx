"use client";

import { useState } from "react";
import FloatingContact from "@/components/FloatingContact";

const FACTORY_IMG = "https://images.pexels.com/photos/34718925/pexels-photo-34718925.jpeg?cs=srgb&dl=pexels-yetkin-agac-664866326-34718925.jpg&fm=jpg&w=1920";
const ROBOT_IMG = "https://images.pexels.com/photos/18471441/pexels-photo-18471441.jpeg?cs=srgb&dl=pexels-delot-18471441.jpg&fm=jpg&w=1920";
const WORKER_IMG = "https://images.pexels.com/photos/6474117/pexels-photo-6474117.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6474117.jpg&fm=jpg&w=1920";

const capabilities = [
  { value: "20,000", unit: "㎡", label: "PRODUCTION AREA" },
  { value: "12", unit: "", label: "PRODUCTION LINES" },
  { value: "500", unit: "万", label: "ANNUAL CAPACITY" },
  { value: "80+", unit: "", label: "ENGINEERS" },
];

const industries = ["电子制造", "半导体芯片", "生物制药", "航空航天", "科研实验"];
const industryIcons = ["🏭", "💻", "🧬", "🚀", "🔬"];

export default function VersionCForge() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <div className="theme-forge concrete-texture" style={{ background: "var(--forge-bg)", color: "var(--forge-text)", fontFamily: "var(--forge-font-body)" }}>
      {/* ===== TOP BAR — Raw ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ borderColor: "var(--forge-border)", background: "rgba(18,18,18,0.96)", backdropFilter: "blur(20px)" }}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--forge-accent)" }}>
              <span className="text-white text-sm font-bold tracking-[-0.05em]" style={{ fontFamily: "var(--forge-font-display)" }}>SF</span>
            </div>
            <span className="text-lg tracking-[-0.02em] font-bold text-white" style={{ fontFamily: "var(--forge-font-display)" }}>SIFANGSHANG</span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            {["PRODUCTS", "CAPABILITY", "INDUSTRIES", "CONTACT"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] tracking-[0.2em] font-bold opacity-40 hover:opacity-100 transition-opacity" style={{ fontFamily: "var(--forge-font-display)" }}>
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="px-5 py-2 text-[11px] tracking-[0.15em] font-bold text-white transition-colors" style={{ background: "var(--forge-accent)", fontFamily: "var(--forge-font-display)" }}>
            GET QUOTE
          </a>
        </nav>
      </header>

      {/* ===== HERO — Full bleed ===== */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${FACTORY_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.25) saturate(0.3)",
          }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(255,92,0,0.15) 0%, transparent 50%)" }} />
        </div>

        {/* Diagonal overlay block */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]" style={{ background: `repeating-linear-gradient(-45deg, transparent, transparent 2px, var(--forge-accent) 2px, var(--forge-accent) 4px)` }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
          <div>
            {/* BIG bold text */}
            <div className="inline-block px-4 py-1.5 border mb-8 anim-fade-up" style={{ borderColor: "var(--forge-accent)", borderWidth: 2 }}>
              <span className="text-[10px] tracking-[0.3em] font-bold" style={{ color: "var(--forge-accent)", fontFamily: "var(--forge-font-display)" }}>
                ESD MANUFACTURING
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-[9rem] font-bold leading-[0.85] text-white mb-8 anim-reveal-right" style={{ fontFamily: "var(--forge-font-display)" }}>
              精密<span className="block lg:inline" style={{ color: "var(--forge-accent)" }}>制造</span>
            </h1>

            <p className="text-base lg:text-lg max-w-xl mb-10 anim-fade-up delay-200 font-light" style={{ color: "var(--forge-muted)" }}>
              我们不制造产品，我们制造精密环境的<span className="text-white">可靠保障</span>。
              从洁净室到实验室，思帆商始终在静电防护前沿。
            </p>

            <div className="flex gap-4 anim-fade-up delay-300">
              <a href="#products" className="px-8 py-4 text-sm tracking-[0.15em] font-bold text-white transition-colors" style={{ background: "var(--forge-accent)", fontFamily: "var(--forge-font-display)" }}>
                VIEW PRODUCTS
              </a>
              <a href="#contact" className="px-8 py-4 text-sm tracking-[0.15em] font-bold transition-colors" style={{ border: "2px solid var(--forge-border)", fontFamily: "var(--forge-font-display)" }}>
                CONTACT
              </a>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 right-10">
          <span className="text-[9px] tracking-[0.3em] opacity-20 font-bold" style={{ fontFamily: "var(--forge-font-display)" }}>↓ SCROLL</span>
        </div>
      </section>

      {/* ===== CAPABILITY STRIP ===== */}
      <section id="capability" className="border-y py-12" style={{ borderColor: "var(--forge-border)", borderWidth: 2 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div key={cap.label} className="px-6 py-4 lg:border-r last:border-r-0" style={{ borderColor: "var(--forge-border)" }}>
                <div className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "var(--forge-font-display)" }}>
                  {cap.value}
                  <span style={{ color: "var(--forge-accent)" }}>{cap.unit}</span>
                </div>
                <p className="text-[9px] tracking-[0.2em] mt-1 font-bold" style={{ color: "var(--forge-muted)" }}>{cap.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS — Asymmetric ===== */}
      <section id="products" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <span className="text-[9px] tracking-[0.3em] font-bold" style={{ color: "var(--forge-accent)", fontFamily: "var(--forge-font-display)" }}>PRODUCT LINE</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-white" style={{ fontFamily: "var(--forge-font-display)" }}>
              产品线
            </h2>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
            {[
              { title: "防静电服装", en: "ESD GARMENTS", img: "https://images.pexels.com/photos/9574476/pexels-photo-9574476.jpeg?w=800&h=600&fit=crop", span: "md:col-span-3 md:row-span-2", large: true, badge: "FEATURED" },
              { title: "防静电鞋类", en: "ESD FOOTWEAR", img: "https://images.pexels.com/photos/14982935/pexels-photo-14982935.jpeg?w=800&h=600&fit=crop", span: "md:col-span-3", large: false, badge: "" },
              { title: "无尘口罩", en: "MASKS", img: "https://images.pexels.com/photos/5040595/pexels-photo-5040595.jpeg?w=800&h=600&fit=crop", span: "md:col-span-2", large: false, badge: "BEST" },
              { title: "ESD工作椅", en: "CHAIRS", img: "https://images.pexels.com/photos/7897069/pexels-photo-7897069.jpeg?w=800&h=600&fit=crop", span: "md:col-span-2", large: false, badge: "" },
              { title: "防静电地板", en: "FLOORING", img: "https://images.unsplash.com/photo-1772305336606-989a457ffbae?w=800&h=600&fit=crop", span: "md:col-span-2", large: false, badge: "" },
              { title: "工程服务", en: "ENGINEERING", img: "https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?w=800&h=600&fit=crop", span: "md:col-span-4", large: true, badge: "PRO" },
            ].map((p) => (
              <div
                key={p.title}
                className={`group cursor-pointer transition-all duration-500 hover:-translate-y-1 ${p.span} flex flex-col relative overflow-hidden`}
                style={{ background: "var(--forge-surface)", border: "3px solid var(--forge-border)", minHeight: p.large ? 380 : 220 }}
              >
                {/* Product image background */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent" />

                {p.badge && (
                  <div className="absolute top-3 right-3 z-10 px-3 py-1 text-[9px] tracking-[0.2em] font-bold" style={{ background: p.badge === "FEATURED" ? "var(--forge-accent)" : "#f59e0b", color: "white", fontFamily: "var(--forge-font-display)" }}>
                    {p.badge}
                  </div>
                )}
                <div className={`relative z-10 p-6 lg:p-8 flex flex-col h-full ${p.large ? "justify-end" : ""}`}>
                  <h3 className={`font-bold text-white ${p.large ? "text-3xl lg:text-4xl" : "text-xl"}`} style={{ fontFamily: "var(--forge-font-display)" }}>
                    {p.title}
                  </h3>
                  <p className="text-[9px] tracking-[0.2em] font-bold mt-1" style={{ color: "var(--forge-muted)" }}>{p.en}</p>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] font-bold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--forge-accent)", fontFamily: "var(--forge-font-display)" }}>
                      GET QUOTE
                      <span className="w-4 h-0.5" style={{ background: "var(--forge-accent)" }} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMAGE BLOCK ===== */}
      <section className="relative h-[450px] overflow-hidden border-y-2" style={{ borderColor: "var(--forge-border)" }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${ROBOT_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3) saturate(0.4)",
        }} />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-lg">
              <p className="text-6xl lg:text-8xl font-bold text-white leading-none" style={{ fontFamily: "var(--forge-font-display)" }}>
                AUTOMATED
                <br />
                <span style={{ color: "var(--forge-accent)" }}>PRECISION</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRY TABS ===== */}
      <section id="industries" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="text-[9px] tracking-[0.3em] font-bold" style={{ color: "var(--forge-accent)", fontFamily: "var(--forge-font-display)" }}>INDUSTRIES</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-white" style={{ fontFamily: "var(--forge-font-display)" }}>
              应用行业
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap border-b-2 mb-10" style={{ borderColor: "var(--forge-border)" }}>
            {industries.map((ind, i) => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(i)}
                className="px-6 py-4 text-sm tracking-[0.15em] font-bold transition-colors"
                style={{
                  fontFamily: "var(--forge-font-display)",
                  color: activeIndustry === i ? "var(--forge-accent)" : "var(--forge-muted)",
                  borderBottom: activeIndustry === i ? "2px solid var(--forge-accent)" : "2px solid transparent",
                  marginBottom: -2,
                }}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid lg:grid-cols-2 gap-16" style={{ background: "var(--forge-surface)", border: "3px solid var(--forge-border)" }}>
            <div className="p-8 lg:p-12">
              <div className="text-6xl mb-4">{industryIcons[activeIndustry]}</div>
              <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--forge-font-display)" }}>
                {industries[activeIndustry]}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--forge-muted)" }}>
                针对{industries[activeIndustry]}的独特需求，提供从人体防护到环境控制的全方位ESD解决方案。
                包括静电接地系统、洁净室环境控制、人员防护装备等。
              </p>
              <ul className="space-y-3">
                {["ESD环境评估与风险等级分析", "定制化防护方案设计", "产品供应与工程实施", "定期检测与持续优化"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-2 h-2 shrink-0" style={{ background: "var(--forge-accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex items-center justify-center p-8" style={{ background: "rgba(255,92,0,0.03)" }}>
              <div className="text-[12rem] opacity-15">{industryIcons[activeIndustry]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORKER IMAGE PARALLAX ===== */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${WORKER_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          filter: "brightness(0.25)",
          backgroundAttachment: "fixed",
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-5xl lg:text-7xl font-bold text-white mb-4" style={{ fontFamily: "var(--forge-font-display)" }}>
              98.6<span style={{ color: "var(--forge-accent)" }}>%</span>
            </p>
            <p className="text-sm tracking-[0.3em] font-bold opacity-40" style={{ fontFamily: "var(--forge-font-display)" }}>CUSTOMER SATISFACTION</p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT — Raw form ===== */}
      <section id="contact" className="py-28" style={{ background: "var(--forge-surface)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="text-[9px] tracking-[0.3em] font-bold" style={{ color: "var(--forge-accent)", fontFamily: "var(--forge-font-display)" }}>CONTACT</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-white mb-12" style={{ fontFamily: "var(--forge-font-display)" }}>
            开始合作
          </h2>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Form */}
            <form className="lg:col-span-3 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" placeholder="NAME / 姓名" className="px-5 py-3.5 text-sm font-bold border-2 focus:outline-none transition-colors" style={{
                  background: "var(--forge-bg)", borderColor: "var(--forge-border)", color: "var(--forge-text)",
                  fontFamily: "var(--forge-font-body)",
                }} />
                <input type="text" placeholder="PHONE / 电话" className="px-5 py-3.5 text-sm font-bold border-2 focus:outline-none transition-colors" style={{
                  background: "var(--forge-bg)", borderColor: "var(--forge-border)", color: "var(--forge-text)",
                  fontFamily: "var(--forge-font-body)",
                }} />
              </div>
              <input type="email" placeholder="EMAIL / 邮箱" className="w-full px-5 py-3.5 text-sm font-bold border-2 focus:outline-none transition-colors" style={{
                background: "var(--forge-bg)", borderColor: "var(--forge-border)", color: "var(--forge-text)",
                fontFamily: "var(--forge-font-body)",
              }} />
              <textarea rows={4} placeholder="MESSAGE / 需求描述" className="w-full px-5 py-3.5 text-sm font-bold border-2 focus:outline-none transition-colors resize-none" style={{
                background: "var(--forge-bg)", borderColor: "var(--forge-border)", color: "var(--forge-text)",
                fontFamily: "var(--forge-font-body)",
              }} />
              <button type="submit" className="w-full px-8 py-4 text-sm tracking-[0.2em] font-bold text-white transition-colors hover:opacity-90" style={{
                background: "var(--forge-accent)", fontFamily: "var(--forge-font-display)",
              }}>
                SUBMIT
              </button>
            </form>

            {/* Right: Contact info */}
            <div className="lg:col-span-2 space-y-6">
              {/* WeChat QR */}
              <div className="p-6 border-2" style={{ borderColor: "var(--forge-border)", background: "var(--forge-bg)" }}>
                <img src="/wechat-qr.png" alt="微信扫码" className="w-32 h-32 mx-auto mb-3" style={{ filter: "grayscale(20%)" }} />
                <p className="text-center text-sm font-bold text-white" style={{ fontFamily: "var(--forge-font-display)" }}>
                  微信扫码联系
                </p>
                <p className="text-center text-[10px] mt-1 tracking-[0.15em] font-bold" style={{ color: "var(--forge-muted)" }}>
                  SCAN TO ADD WECHAT
                </p>
              </div>

              {/* Details */}
              <div className="space-y-4 p-6 border-2" style={{ borderColor: "var(--forge-border)", background: "var(--forge-bg)" }}>
                {[
                  { icon: "📞", label: "电话", value: "+86 400-XXX-XXXX" },
                  { icon: "📧", label: "邮箱", value: "info@sifangshang.com" },
                  { icon: "📍", label: "地址", value: "生产基地 · XX省XX市" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <p className="text-[10px] tracking-[0.15em] font-bold" style={{ color: "var(--forge-muted)" }}>
                        {item.label.toUpperCase()}
                      </p>
                      <p className="text-sm font-bold text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[10px] tracking-[0.15em] font-bold flex items-center gap-2" style={{ color: "var(--forge-muted)" }}>
                <span className="w-2 h-2" style={{ background: "var(--forge-accent)" }} />
                技术团队24小时内响应
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 border-t-2" style={{ borderColor: "var(--forge-border)", background: "var(--forge-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--forge-accent)" }}>
                <span className="text-white text-sm font-bold" style={{ fontFamily: "var(--forge-font-display)" }}>SF</span>
              </div>
              <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--forge-font-display)" }}>SIFANGSHANG</span>
            </a>
            <div className="flex gap-8 text-xs tracking-[0.15em] font-bold" style={{ color: "var(--forge-muted)" }}>
              <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-white transition-colors">TERMS</a>
              <a href="#" className="hover:text-white transition-colors">SITEMAP</a>
            </div>
            <p className="text-xs font-bold" style={{ color: "var(--forge-muted)" }}>© 2026 SIFANGSHANG</p>
          </div>
        </div>
      </footer>

      <FloatingContact />
    </div>
  );
}
