import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "思帆商 SIFANGSHANG | 静电防尘整体解决方案提供商",
  description:
    "思帆商专注于静电防尘产品研发与制造，提供防静电服装、鞋子、口罩、椅子、地板及工程服务，服务电子厂、实验室、生物科技企业。",
  keywords:
    "防静电, 无尘服, 防静电鞋, 防静电地板, 无尘室, ESD, 思帆商, 净化工程",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500;600;700&family=Share+Tech+Mono&family=Space+Mono:wght@400;700&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
