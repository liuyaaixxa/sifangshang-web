import { notFound } from "next/navigation";
import Link from "next/link";
import { solutions, products } from "@/data/content";
import FloatingContact from "@/components/FloatingContact";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = solutions.find((s) => s.slug === params.slug);
  if (!s) return {};
  return { title: `${s.name}ESD解决方案 | 思帆商`, description: s.overview.slice(0, 120) };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = solutions.find((s) => s.slug === params.slug);
  if (!s) notFound();

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", background: "#0a1628", color: "#e8edf5", minHeight: "100vh" }}>
      <header style={{ borderColor: "#1e3a5f", background: "rgba(10,22,40,0.92)", backdropFilter: "blur(20px)" }} className="fixed top-0 left-0 right-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 border flex items-center justify-center" style={{ borderColor: "#00b4e0", boxShadow: "0 0 20px rgba(0,180,224,0.2)" }}>
              <span className="text-sm tracking-widest" style={{ color: "#00b4e0", fontFamily: "'Share Tech Mono', monospace" }}>SF</span>
            </div>
            <span className="text-sm font-semibold tracking-[0.15em] text-white" style={{ fontFamily: "'Share Tech Mono', monospace" }}>思帆商</span>
          </Link>
          <Link href="/" className="text-xs tracking-[0.15em] opacity-50 hover:opacity-100" style={{ fontFamily: "'Share Tech Mono', monospace" }}>← 返回首页</Link>
        </div>
      </header>

      <section className="relative pt-20">
        <div className="aspect-[21/9] overflow-hidden relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${s.heroImg})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16 max-w-7xl mx-auto">
            <span className="text-5xl mb-4 block">{s.icon}</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{s.name}</h1>
            <p className="text-sm mt-2 opacity-40" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{s.en}</p>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-sm leading-relaxed mb-12" style={{ color: "#8899bb" }}>{s.overview}</p>

            <div className="grid sm:grid-cols-2 gap-10 mb-12">
              <div>
                <h2 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>行业挑战</h2>
                <ul className="space-y-3">
                  {s.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm" style={{ color: "#8899bb" }}>
                      <span className="text-red-400 mt-0.5 shrink-0">●</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>我们的方法</h2>
                <ul className="space-y-3">
                  {s.approach.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm" style={{ color: "#8899bb" }}>
                      <span className="mt-0.5 shrink-0" style={{ color: "#00b4e0" }}>✓</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {s.cases.length > 0 && (
              <>
                <h2 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>客户案例</h2>
                {s.cases.map((c) => (
                  <div key={c.client} className="p-6 border mb-4" style={{ borderColor: "#1e3a5f", background: "rgba(255,255,255,0.02)" }}>
                    <div className="text-xs opacity-40 mb-1">案例</div>
                    <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{c.result}</div>
                    <p className="text-sm" style={{ color: "#8899bb" }}>{c.client} — {c.desc}</p>
                  </div>
                ))}
              </>
            )}
          </div>

          <div>
            <div className="p-6 border mb-6" style={{ borderColor: "#1e3a5f", background: "rgba(255,255,255,0.02)" }}>
              <h3 className="text-xs tracking-[0.15em] font-bold text-white mb-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>相关产品</h3>
              {s.products.map((slug) => {
                const prod = products.find((p) => p.slug === slug);
                if (!prod) return null;
                return (
                  <Link key={slug} href={`/products/${slug}`} className="block text-sm py-2 hover:opacity-100 transition-opacity" style={{ color: "#00b4e0", opacity: 0.7 }}>
                    {prod.name} →
                  </Link>
                );
              })}
            </div>
            <Link href="#contact" className="block text-center px-6 py-3.5 text-sm tracking-[0.15em]" style={{ background: "#00b4e0", color: "#0a1628", fontFamily: "'Share Tech Mono', monospace", boxShadow: "0 0 40px rgba(0,180,224,0.2)" }}>
              获取方案
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 border-t" style={{ borderColor: "#1e3a5f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Share Tech Mono', monospace" }}>获取{s.name}解决方案</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="text" placeholder="姓名" className="px-5 py-3.5 text-sm border bg-transparent focus:outline-none" style={{ borderColor: "#1e3a5f", color: "#e8edf5" }} />
            <input type="text" placeholder="电话" className="px-5 py-3.5 text-sm border bg-transparent focus:outline-none" style={{ borderColor: "#1e3a5f", color: "#e8edf5" }} />
            <input type="text" defaultValue={s.name} className="sm:col-span-2 px-5 py-3.5 text-sm border bg-transparent" style={{ borderColor: "#1e3a5f", color: "#00b4e0" }} />
            <textarea rows={3} placeholder="请描述您的需求..." className="sm:col-span-2 px-5 py-3.5 text-sm border bg-transparent focus:outline-none resize-none" style={{ borderColor: "#1e3a5f", color: "#e8edf5" }} />
            <button type="submit" className="sm:col-span-2 px-8 py-4 text-sm tracking-[0.2em]" style={{ background: "#00b4e0", color: "#0a1628", fontFamily: "'Share Tech Mono', monospace" }}>提交咨询</button>
          </form>
        </div>
      </section>

      <footer className="border-t py-10 text-center" style={{ borderColor: "#1e3a5f" }}>
        <Link href="/" className="text-xs opacity-30 hover:opacity-60">← 思帆商 SIFANGSHANG</Link>
      </footer>
      <FloatingContact />
    </div>
  );
}
