import Link from "next/link";
import FloatingContact from "@/components/FloatingContact";

export const metadata = { title: "关于我们 | 思帆商 SIFANGSHANG", description: "思帆商专注于静电防尘领域的高新技术企业，15年行业深耕。" };

const milestones = [
  { year: "2011", event: "思帆商成立，首条防静电服装产线投产" },
  { year: "2014", event: "通过ISO 9001质量管理体系认证" },
  { year: "2016", event: "生产基地扩建至10,000㎡，新增ESD鞋类产线" },
  { year: "2018", event: "通过ISO 14001环境管理体系认证，获IEC 61340产品认证" },
  { year: "2020", event: "生产基地扩建至20,000㎡；服务客户突破300家" },
  { year: "2022", event: "推出智能ESD监测系统，进入物联网防护领域" },
  { year: "2024", event: "获国家高新技术企业认定；产品出口扩展至30+国家和地区" },
  { year: "2026", event: "服务客户突破500家，启动全球化品牌战略" },
];

export default function AboutPage() {
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

      {/* Hero */}
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-10">
        <span className="text-[10px] tracking-[0.3em] opacity-40" style={{ fontFamily: "'Share Tech Mono', monospace" }}>ABOUT</span>
        <h1 className="text-3xl lg:text-5xl font-bold text-white mt-3 mb-6" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          关于思帆商<span className="opacity-20 ml-3">/ About Us</span>
        </h1>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#8899bb" }}>
              思帆商（SIFANGSHANG）是一家专注于静电防尘领域的高新技术企业。自2011年成立以来，始终致力于为电子制造、半导体、生物制药、航空航天等行业提供高品质的ESD防护产品和洁净室工程服务。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#8899bb" }}>
              公司拥有20,000㎡现代化生产基地，12条自动化生产线，年产能500万件。服务超过500家企业客户，产品远销全球30多个国家和地区。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "20,000㎡", l: "生产基地" }, { n: "500+", l: "企业客户" },
              { n: "15年+", l: "行业经验" }, { n: "30+", l: "出口国家" },
            ].map((s) => (
              <div key={s.l} className="p-6 border text-center" style={{ borderColor: "#1e3a5f" }}>
                <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                  {s.n}
                </div>
                <div className="text-xs mt-2 opacity-40">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 border-t" style={{ borderColor: "#1e3a5f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-bold text-white mb-12" style={{ fontFamily: "'Share Tech Mono', monospace" }}>发展历程</h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-8 py-5 border-b" style={{ borderColor: "#1e3a5f" }}>
                <span className="text-xl font-bold shrink-0 w-20" style={{ color: "#00b4e0", fontFamily: "'Share Tech Mono', monospace" }}>{m.year}</span>
                <p className="text-sm" style={{ color: "#8899bb" }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certs */}
      <section className="py-16 border-t" style={{ borderColor: "#1e3a5f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Share Tech Mono', monospace" }}>资质认证</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["ISO 9001", "ISO 14001", "IEC 61340", "CE", "3C", "GB3007-97"].map((c) => (
              <div key={c} className="p-6 border text-center" style={{ borderColor: "#1e3a5f" }}>
                <div className="w-12 h-12 rounded-full border-2 mx-auto mb-3 flex items-center justify-center" style={{ borderColor: "#00b4e0" }}>
                  <span style={{ color: "#00b4e0" }}>✓</span>
                </div>
                <span className="text-xs font-bold text-white">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-10 text-center" style={{ borderColor: "#1e3a5f" }}>
        <Link href="/" className="text-xs opacity-30 hover:opacity-60">← 思帆商 SIFANGSHANG</Link>
      </footer>
      <FloatingContact />
    </div>
  );
}
