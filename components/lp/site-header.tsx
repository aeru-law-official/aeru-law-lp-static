import Image from "next/image"
import { Phone } from "lucide-react"
import { CtaButton } from "./cta-button"
import type { Settings } from "@/types/microcms"

type SiteHeaderProps = {
  settings: Settings
}

export function SiteHeader({ settings }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-navy/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Image
          src="/images/aeru_logo.png"
          alt="アエル法律事務所"
          width={349}
          height={60}
          className="h-8 w-auto md:h-10"
          priority
        />
        <div className="flex items-center gap-3">
          <a
            href={`tel:${settings.phone}`}
            className="hidden flex-col items-end leading-tight sm:flex"
          >
            <span className="flex items-center gap-1.5 font-sans text-lg font-bold text-navy">
              <Phone className="size-4 text-gold" aria-hidden="true" />
              {settings.phone}
            </span>
            <span className="font-sans text-[11px] text-muted-foreground">{settings.businessHours}</span>
          </a>
          <CtaButton href="#contact" variant="green">
            提携を相談する
          </CtaButton>
        </div>
      </div>
    </header>
  )
}
