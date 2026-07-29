import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  variable: '--font-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  variable: '--font-serif-jp',
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  display: 'swap',
})

const title = '連携パートナー募集 | アエル法律事務所'
const description =
  '再来院・リピートを増やしたい治療院の方へ、交通事故の被害者側に強い弁護士からのご提案。患者さんへ法的な安心も提供し、院への信頼と満足度向上につなげる、紹介料のやり取りが一切ない健全な連携です。'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title,
  description,
  // 公開準備が整うまでは検索エンジンに載せない。正式公開時にこの2行を削除する
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'アエル法律事務所',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: '/images/aeru_logo.png', width: 349, height: 60 }],
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1577c2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
