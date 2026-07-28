import { Phone } from "lucide-react"
import { CtaButton } from "./cta-button"
import type { Settings } from "@/types/microcms"

type PhoneCtaProps = {
  settings: Settings
}

export function PhoneCta({ settings }: PhoneCtaProps) {
  return (
    <section className="bg-cream-deep">
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-12">
        <div className="rounded-3xl border-2 border-navy/15 bg-card p-6 text-center shadow-[0_8px_30px_rgba(21,119,194,0.12)] md:p-8">
          <span className="inline-flex items-center rounded-full bg-gold px-5 py-1.5 font-sans text-sm font-bold text-white">
            提携のご相談はこちら
          </span>

          <a
            href={`tel:${settings.phone}`}
            className="mt-4 flex items-center justify-center gap-3 text-navy"
          >
            <Phone className="size-7 md:size-8" aria-hidden="true" />
            <span className="font-sans text-3xl font-bold tracking-tight md:text-5xl">
              {settings.phone}
            </span>
          </a>
          <p className="mt-1 font-sans text-sm text-muted-foreground">
            {settings.businessHours}／ご相談・ご質問だけでもOK
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <CtaButton href={settings.lineUrl} variant="green" size="lg">
              LINEで相談する
            </CtaButton>
            <CtaButton href="#contact" variant="white" size="lg">
              メールで相談する
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
