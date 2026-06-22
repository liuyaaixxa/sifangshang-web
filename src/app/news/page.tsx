import Link from "next/link";
import { newsArticles } from "@/data/content";
import FloatingContact from "@/components/FloatingContact";

export const metadata = { title: "新闻动态 | 思帆商 SIFANGSHANG", description: "思帆商最新动态、行业资讯与技术分享。" };

export default function NewsPage() {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", background: "#0a1628", color: "#e8edf5", minHeight: "100vh" }}>
      <header style={{ borderColor: "#1e3a5f", background: "rgba(10,22,40,0.92)", backdropFilter: "blur(20px)" }} className="fixed top-0 left-0 right-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 border flex items-center justify-center" style={{ borderColor: "#00b4e0" }}>
              <span className="text-sm tracking-widest" style={{ color: "#00b4e0", fontFamily: "'Share Tech Mono', monospace" }}>SF</span>
            </div>
            <span className="text-sm font-semibold tracking-[0.15em] text-white" style={{ fontFamily: "'Share Tech Mono', monospace" }}>思帆商</span>
          </Link>
          <Link href="/" className="text-xs opacity-50 hover:opacity-100" style={{ fontFamily: "'Share Tech Mono', monospace" }}>← 返回首页</Link>
        </div>
      </header>

      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-10">
        <span className="text-[10px] tracking-[0.3em] opacity-40" style={{ fontFamily: "'Share Tech Mono', monospace" }}>NEWS & INSIGHTS</span>
        <h1 className="text-3xl lg:text-5xl font-bold text-white mt-3 mb-12" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          新闻动态<span className="opacity-20 ml-3">/ News</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsArticles.map((a) => (
            <Link
              key={a.slug}
              href={`/news/${a.slug}`}
              className="group block p-8 border transition-all hover:-translate-y-1"
              style={{ borderColor: "#1e3a5f", background: "rgba(255,255,255,0.02)" }}
            >
              <span className="text-[10px] tracking-[0.2em] opacity-30">{a.date}</span>
              <h2 className="text-lg font-bold text-white mt-2 mb-3 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "'Share Tech Mono', monospace", opacity: 0.9 }}>
                {a.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#8899bb" }}>{a.summary}</p>
              <span className="inline-flex items-center gap-2 text-xs mt-4 tracking-[0.1em]" style={{ color: "#00b4e0", fontFamily: "'Share Tech Mono', monospace" }}>
                阅读全文
                <span className="w-4 h-px group-hover:w-8 transition-all" style={{ background: "#00b4e0" }} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t py-10 text-center" style={{ borderColor: "#1e3a5f" }}>
        <Link href="/" className="text-xs opacity-30 hover:opacity-60">← 思帆商 SIFANGSHANG</Link>
      </footer>
      <FloatingContact />
    </div>
  );
}
