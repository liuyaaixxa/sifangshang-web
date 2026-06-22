import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/content";
import FloatingContact from "@/components/FloatingContact";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = products.find((p) => p.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.name} | 思帆商 SIFANGSHANG`,
    description: `${p.tagline} — ${p.overview.slice(0, 120)}`,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = products.find((p) => p.slug === params.slug);
  if (!p) notFound();

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", background: "#0a1628", color: "#e8edf5", minHeight: "100vh" }}>
      {/* Top Bar */}
      <header style={{ borderColor: "#1e3a5f", background: "rgba(10,22,40,0.92)", backdropFilter: "blur(20px)" }} className="fixed top-0 left-0 right-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 border flex items-center justify-center" style={{ borderColor: "#00b4e0", boxShadow: "0 0 20px rgba(0,180,224,0.2)" }}>
              <span className="text-sm tracking-widest" style={{ color: "#00b4e0", fontFamily: "'Share Tech Mono', monospace" }}>SF</span>
            </div>
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-white" style={{ fontFamily: "'Share Tech Mono', monospace" }}>思帆商</span>
              <span className="text-[9px] tracking-[0.3em] opacity-40 ml-1">SIFANGSHANG</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs tracking-[0.15em] opacity-50 hover:opacity-100 transition-opacity" style={{ fontFamily: "'Share Tech Mono', monospace" }}>← 返回首页</Link>
            <Link href="#contact" className="px-5 py-2 text-xs tracking-[0.15em] border" style={{ borderColor: "#00b4e0", color: "#00b4e0", fontFamily: "'Share Tech Mono', monospace" }}>获取报价</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-20">
        <div className="aspect-[21/9] overflow-hidden relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${p.heroImg})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16 max-w-7xl mx-auto">
            <span className="text-[10px] tracking-[0.3em] opacity-50" style={{ fontFamily: "'Share Tech Mono', monospace" }}>PRODUCT DETAIL</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mt-2 mb-2" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{p.name}</h1>
            <p className="text-lg lg:text-xl" style={{ color: "#00b4e0", fontFamily: "'Share Tech Mono', monospace" }}>{p.tagline}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Share Tech Mono', monospace" }}>产品概述</h2>
            <p className="text-sm leading-relaxed mb-12" style={{ color: "#8899bb" }}>{p.overview}</p>

            {/* Specs table */}
            <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Share Tech Mono', monospace" }}>技术规格</h2>
            <div className="border" style={{ borderColor: "#1e3a5f" }}>
              {p.specs.map((s, i) => (
                <div key={s.label} className="flex border-b last:border-b-0" style={{ borderColor: "#1e3a5f", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                  <div className="w-48 shrink-0 px-6 py-3.5 text-xs tracking-[0.1em] font-semibold text-white" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{s.label}</div>
                  <div className="flex-1 px-6 py-3.5 text-sm" style={{ color: "#8899bb" }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Variants */}
            <h2 className="text-xl font-bold text-white mt-12 mb-6" style={{ fontFamily: "'Share Tech Mono', monospace" }}>产品款式</h2>
            <div className="flex flex-wrap gap-2">
              {p.variants.map((v) => (
                <span key={v} className="px-4 py-2 text-xs border" style={{ borderColor: "#1e3a5f", color: "#8899bb" }}>{v}</span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Side info card */}
            <div className="p-6 border mb-6" style={{ borderColor: "#1e3a5f", background: "rgba(255,255,255,0.02)" }}>
              <h3 className="text-xs tracking-[0.15em] font-bold text-white mb-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>应用场景</h3>
              <div className="space-y-2">
                {p.applications.map((a) => (
                  <div key={a} className="text-sm flex items-center gap-2" style={{ color: "#8899bb" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00b4e0", opacity: 0.5 }} />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Related products */}
            <div className="p-6 border" style={{ borderColor: "#1e3a5f", background: "rgba(255,255,255,0.02)" }}>
              <h3 className="text-xs tracking-[0.15em] font-bold text-white mb-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>相关产品</h3>
              <div className="space-y-2">
                {p.related.map((r) => {
                  const rel = products.find((pp) => pp.slug === r);
                  if (!rel) return null;
                  return (
                    <Link
                      key={r}
                      href={`/products/${r}`}
                      className="block text-sm py-1.5 transition-colors hover:opacity-100"
                      style={{ color: "#00b4e0", opacity: 0.7 }}
                    >
                      {rel.name} →
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="block text-center mt-6 px-6 py-3.5 text-sm tracking-[0.15em] transition-all hover:-translate-y-0.5"
              style={{
                background: "#00b4e0", color: "#0a1628",
                fontFamily: "'Share Tech Mono', monospace",
                boxShadow: "0 0 40px rgba(0,180,224,0.2)",
              }}
            >
              获取报价
            </a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-20" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid #1e3a5f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Share Tech Mono', monospace" }}>咨询产品详情</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="text" placeholder="姓名" className="px-5 py-3.5 text-sm border bg-transparent focus:outline-none" style={{ borderColor: "#1e3a5f", color: "#e8edf5" }} />
            <input type="text" placeholder="电话" className="px-5 py-3.5 text-sm border bg-transparent focus:outline-none" style={{ borderColor: "#1e3a5f", color: "#e8edf5" }} />
            <input type="text" defaultValue={p.name} className="sm:col-span-2 px-5 py-3.5 text-sm border bg-transparent" style={{ borderColor: "#1e3a5f", color: "#00b4e0" }} />
            <textarea rows={3} placeholder="请描述您的需求..." className="sm:col-span-2 px-5 py-3.5 text-sm border bg-transparent focus:outline-none resize-none" style={{ borderColor: "#1e3a5f", color: "#e8edf5" }} />
            <button type="submit" className="sm:col-span-2 px-8 py-4 text-sm tracking-[0.2em]" style={{ background: "#00b4e0", color: "#0a1628", fontFamily: "'Share Tech Mono', monospace" }}>提交咨询</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: "#1e3a5f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Link href="/" className="text-xs opacity-30 hover:opacity-60 transition-opacity">← 思帆商 SIFANGSHANG</Link>
        </div>
      </footer>
      <FloatingContact />
    </div>
  );
}
