"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "产品中心",
    href: "#",
    children: [
      { label: "防静电服装", href: "/products/garments" },
      { label: "防静电鞋类", href: "/products/footwear" },
      { label: "无尘口罩", href: "/products/masks" },
      { label: "ESD工作椅", href: "/products/chairs" },
      { label: "防静电地板", href: "/products/flooring" },
    ],
  },
  {
    label: "解决方案",
    href: "#",
    children: [
      { label: "电子制造业", href: "/solutions/electronics" },
      { label: "半导体芯片", href: "/solutions/semiconductor" },
      { label: "生物制药", href: "/solutions/biopharma" },
      { label: "科研实验室", href: "/solutions/laboratory" },
      { label: "航空航天", href: "/solutions/aerospace" },
    ],
  },
  { label: "新闻动态", href: "/news", children: [] },
  { label: "关于我们", href: "/about", children: [] },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  let closeTimer: ReturnType<typeof setTimeout> | null = null;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ borderColor: "#1e3a5f", background: "rgba(10,22,40,0.94)", backdropFilter: "blur(20px)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 border flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(0,180,224,0.3)] transition-shadow"
            style={{ borderColor: "#00b4e0" }}
          >
            <span className="text-sm tracking-widest" style={{ color: "#00b4e0", fontFamily: "'Share Tech Mono', monospace" }}>SF</span>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.15em] text-white" style={{ fontFamily: "'Share Tech Mono', monospace" }}>思帆商</div>
            <div className="text-[9px] tracking-[0.3em] opacity-40">SIFANGSHANG</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0">
          <Link
            href="/"
            className="px-4 py-2 text-xs tracking-[0.15em] opacity-60 hover:opacity-100 transition-opacity"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            首页
          </Link>
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
                setOpenMenu(item.label);
              }}
              onMouseLeave={() => {
                closeTimer = setTimeout(() => setOpenMenu(null), 200);
              }}
            >
              <Link
                href={item.children.length ? "#" : item.href}
                onClick={(e) => { if (item.children.length) e.preventDefault(); }}
                className="px-4 py-2 text-xs tracking-[0.15em] opacity-60 hover:opacity-100 transition-opacity inline-flex items-center gap-1"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                {item.label}
                {item.children.length > 0 && (
                  <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.children.length > 0 && openMenu === item.label && (
                <div
                  className="absolute top-full left-0 mt-0 w-56 py-2 border shadow-2xl"
                  style={{ borderColor: "#1e3a5f", background: "#0d1f35" }}
                  onMouseEnter={() => {
                    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
                  }}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpenMenu(null)}
                      className="block px-4 py-2.5 text-xs tracking-[0.1em] opacity-60 hover:opacity-100 hover:bg-white/5 transition-all"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/en"
            className="hidden lg:block text-[10px] tracking-[0.2em] opacity-30 hover:opacity-60 transition-opacity"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            EN
          </Link>
          <Link
            href="/#contact"
            className="hidden lg:block px-5 py-2 text-xs tracking-[0.15em] border transition-all hover:shadow-[0_0_30px_rgba(0,180,224,0.2)]"
            style={{ borderColor: "#00b4e0", color: "#00b4e0", fontFamily: "'Share Tech Mono', monospace" }}
          >
            获取报价
          </Link>
          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t px-6 pb-4" style={{ borderColor: "#1e3a5f", background: "#0d1f35" }}>
          <Link href="/" onClick={() => setMobileOpen(false)} className="block py-3 text-sm opacity-60">首页</Link>
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children.length > 0 ? (
                <div>
                  <div className="py-3 text-sm opacity-40" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{item.label}</div>
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)} className="block py-2 pl-4 text-xs opacity-50">
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link href={item.href} onClick={() => setMobileOpen(false)} className="block py-3 text-sm opacity-60">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link href="/en" onClick={() => setMobileOpen(false)} className="block py-3 text-sm opacity-40">EN / 英文版</Link>
        </div>
      )}
    </header>
  );
}
