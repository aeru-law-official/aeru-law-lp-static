import { Phone, MessageCircle, Mail } from "lucide-react"
import type { Settings } from "@/types/microcms"

type ContactProps = {
  settings: Settings
}

export function Contact({ settings }: ContactProps) {
  const channels = [
    {
      icon: Phone,
      label: "お電話",
      value: settings.phone,
      sub: settings.businessHours,
      href: `tel:${settings.phone}`,
    },
    {
      icon: MessageCircle,
      label: "LINE",
      value: "友だち追加で相談",
      sub: settings.lineUrl.replace(/^https?:\/\//, ""),
      href: settings.lineUrl,
    },
    {
      icon: Mail,
      label: "メール",
      value: settings.email,
      sub: "24時間受付",
      href: `mailto:${settings.email}`,
    },
  ]

  return (
    <section id="contact" className="bg-gradient-to-b from-navy to-navy-deep">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-24">
        <span className="inline-flex items-center rounded-full bg-gold px-5 py-1.5 font-sans text-sm font-bold text-white">
          お気軽にお問い合わせください
        </span>
        <h2 className="mt-5 text-balance font-sans text-2xl font-bold leading-relaxed text-white md:text-3xl">
          患者さんに選ばれ続ける治療院へ。
        </h2>
        <p className="mt-4 text-pretty font-sans text-base leading-relaxed text-white/90 md:text-lg">
          患者満足と再来院につながる連携を、まずは知るところから始めませんか。
        </p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
          ご相談・ご質問だけでも歓迎です。紹介料のやり取りは一切ありません。
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, sub, href }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-cream-deep">
                <Icon className="size-6 text-navy" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-terracotta-soft px-3 py-0.5 font-sans text-xs font-bold text-terracotta">
                {label}
              </span>
              <span className="font-sans text-base font-bold text-navy">{value}</span>
              <span className="font-sans text-xs text-muted-foreground">{sub}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
