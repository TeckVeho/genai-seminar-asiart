import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: '物流企業特化 AI人材育成プログラム | 生成AI活用・業務効率化研修 | 株式会社Asiart',
  description:
    '全社員向け。生成AIで定型業務・文書作成を効率化する全10回・10時間の実践研修。人材開発支援助成金（事業展開等リスキリング支援コース）に対応。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
