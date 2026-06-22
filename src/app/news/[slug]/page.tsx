import { notFound } from "next/navigation";
import Link from "next/link";
import { newsArticles } from "@/data/content";
import FloatingContact from "@/components/FloatingContact";

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = newsArticles.find((a) => a.slug === params.slug);
  if (!a) return {};
  return { title: `${a.title} | 思帆商`, description: a.summary };
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const a = newsArticles.find((a) => a.slug === params.slug);
  if (!a) notFound();

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
          <Link href="/news" className="text-xs opacity-50 hover:opacity-100" style={{ fontFamily: "'Share Tech Mono', monospace" }}>← 返回新闻</Link>
        </div>
      </header>

      <article className="pt-32 pb-16 max-w-3xl mx-auto px-6 lg:px-10">
        <span className="text-[10px] tracking-[0.3em] opacity-30">{a.date}</span>
        <h1 className="text-2xl lg:text-4xl font-bold text-white mt-3 mb-10 leading-tight" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          {a.title}
        </h1>
        <div className="text-sm leading-relaxed space-y-4" style={{ color: "#8899bb" }}>
          {a.content.split("\n\n").map((p, i) => {
            if (p.startsWith("**") && p.includes("**")) {
              const cleaned = p.replace(/\*\*/g, "");
              return (
                <h2 key={i} className="text-lg font-bold text-white pt-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                  {cleaned}
                </h2>
              );
            }
            if (p.startsWith("- ")) {
              return (
                <ul key={i} className="space-y-1 pl-4">
                  {p.split("\n").map((li, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#00b4e0" }} />
                      {li.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            if (p.match(/^\d+\./)) {
              return (
                <ul key={i} className="space-y-1 pl-4">
                  {p.split("\n").map((li, j) => (
                    <li key={j} style={{ color: "#8899bb" }}>
                      {li}
                    </li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{p}</p>;
          })}
        </div>
      </article>

      <footer className="border-t py-10 text-center" style={{ borderColor: "#1e3a5f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between">
          <Link href="/news" className="text-xs opacity-30 hover:opacity-60">← 新闻列表</Link>
          <Link href="/" className="text-xs opacity-30 hover:opacity-60">思帆商首页</Link>
        </div>
      </footer>
      <FloatingContact />
    </div>
  );
}
