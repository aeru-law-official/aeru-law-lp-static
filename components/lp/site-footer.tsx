import Image from "next/image"
import type { Settings } from "@/types/microcms"

type SiteFooterProps = {
  settings: Settings
}

export function SiteFooter({ settings }: SiteFooterProps) {
  return (
    <footer className="border-t-2 border-rule bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/images/aeru_logo.png"
            alt="アエル法律事務所"
            width={349}
            height={60}
            className="h-9 w-auto"
          />
          <p className="font-sans text-sm leading-relaxed text-foreground">
            {settings.officeName}　弁護士 {settings.lawyerName}
            <br />
            {settings.address}
            <br />
            aeru-law.com
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-pretty border-t border-rule pt-6 text-center font-sans text-xs leading-relaxed text-muted-foreground">
          ※本ページは、交通事故被害者側に取り組むアエル法律事務所が、連携先の治療院・保険代理店を募集するものです。患者さんを集めるための広告ではありません。弁護士広告に関する規程を遵守しています。
        </p>
      </div>
    </footer>
  )
}
