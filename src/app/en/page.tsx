import Link from "next/link";
import { products } from "@/data/content";
import FloatingContact from "@/components/FloatingContact";

export const metadata = { title: "SIFANGSHANG | ESD & Cleanroom Solutions", description: "SIFANGSHANG provides ESD protection products and cleanroom engineering services." };

export default function EnPage() {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", background: "#0a1628", color: "#e8edf5", minHeight: "100vh" }}>
      <header style={{ borderColor: "#1e3a5f", background: "rgba(10,22,40,0.92)", backdropFilter: "blur(20px)" }} className="fixed top-0 left-0 right-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 border flex items-center justify-center" style={{ borderColor: "#00b4e0", boxShadow: "0 0 20px rgba(0,180,224,0.2)" }}>
              <span className="text-sm tracking-widest" style={{ color: "#00b4e0", fontFamily: "'Share Tech Mono', monospace" }}>SF</span>
            </div>
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-white" style={{ fontFamily: "'Share Tech Mono', monospace" }}>SIFANGSHANG</span>
              <span className="text-[9px] tracking-[0.3em] opacity-40 ml-1">ESD SOLUTIONS</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs opacity-40 hover:opacity-80">中文</Link>
            <Link href="#contact" className="px-4 py-1.5 text-xs border" style={{ borderColor: "#00b4e0", color: "#00b4e0", fontFamily: "'Share Tech Mono', monospace" }}>GET QUOTE</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border mb-8" style={{ borderColor: "rgba(0,180,224,0.2)" }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00b4e0" }} />
          <span className="text-[10px] tracking-[0.3em] opacity-60" style={{ fontFamily: "'Share Tech Mono', monospace" }}>ESD PROTECTION SOLUTIONS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          Precision Protection
          <br />
          <span style={{ color: "#00b4e0", textShadow: "0 0 40px rgba(0,180,224,0.3)" }}>Zero Static Interference</span>
        </h1>
        <p className="text-base max-w-xl mb-10" style={{ color: "#8899bb" }}>
          SIFANGSHANG provides comprehensive ESD protection solutions for semiconductor, electronics manufacturing, biotech, and aerospace industries.
        </p>
        <div className="flex gap-4">
          <a href="#products" className="px-8 py-3.5 text-sm tracking-[0.15em]" style={{ background: "#00b4e0", color: "#0a1628", fontFamily: "'Share Tech Mono', monospace" }}>VIEW PRODUCTS</a>
          <a href="#contact" className="px-8 py-3.5 text-sm tracking-[0.15em] border" style={{ borderColor: "rgba(255,255,255,0.15)", fontFamily: "'Share Tech Mono', monospace", color: "#e8edf5" }}>CONTACT US</a>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y py-10" style={{ borderColor: "#1e3a5f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { v: "20,000", u: "㎡", l: "Production Base" },
            { v: "500+", u: "", l: "Enterprise Clients" },
            { v: "98.6", u: "%", l: "Satisfaction Rate" },
            { v: "30+", u: "", l: "Export Countries" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{s.v}<span style={{ color: "#00b4e0" }}>{s.u}</span></div>
              <div className="text-xs mt-1 opacity-40">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-2xl font-bold text-white mb-12" style={{ fontFamily: "'Share Tech Mono', monospace" }}>Product Line</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.slice(0, 6).map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group block p-8 border transition-all hover:-translate-y-1" style={{ borderColor: "#1e3a5f", background: "rgba(255,255,255,0.01)" }}>
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{p.en}</h3>
              <p className="text-xs opacity-30 mb-1" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{p.name}</p>
              <p className="text-sm" style={{ color: "#8899bb" }}>{p.tagline}</p>
              <span className="inline-flex items-center gap-2 text-xs mt-4 tracking-[0.1em]" style={{ color: "#00b4e0" }}>
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t" style={{ borderColor: "#1e3a5f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Share Tech Mono', monospace" }}>Get in Touch</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="text" placeholder="Name" className="px-5 py-3.5 text-sm border bg-transparent focus:outline-none" style={{ borderColor: "#1e3a5f", color: "#e8edf5" }} />
            <input type="text" placeholder="Email" className="px-5 py-3.5 text-sm border bg-transparent focus:outline-none" style={{ borderColor: "#1e3a5f", color: "#e8edf5" }} />
            <textarea rows={3} placeholder="Project requirements..." className="sm:col-span-2 px-5 py-3.5 text-sm border bg-transparent focus:outline-none resize-none" style={{ borderColor: "#1e3a5f", color: "#e8edf5" }} />
            <button type="submit" className="sm:col-span-2 px-8 py-4 text-sm tracking-[0.2em]" style={{ background: "#00b4e0", color: "#0a1628", fontFamily: "'Share Tech Mono', monospace" }}>SUBMIT</button>
          </form>
        </div>
      </section>

      <footer className="border-t py-10 text-center" style={{ borderColor: "#1e3a5f" }}>
        <p className="text-xs opacity-30">© 2026 SIFANGSHANG. All rights reserved.</p>
      </footer>
      <FloatingContact />
    </div>
  );
}
