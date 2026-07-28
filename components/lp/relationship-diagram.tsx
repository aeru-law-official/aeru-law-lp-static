import { Building2, Scale, UserRound } from "lucide-react"

const partyCardClass =
  "relative z-10 flex flex-col items-center border-2 border-navy bg-white px-3 py-4 text-center shadow-[0_8px_20px_rgba(12,82,133,0.14)] md:px-6 md:py-5"

export function RelationshipDiagram() {
  return (
    <section className="border-y-2 border-rule bg-white" aria-labelledby="relationship-title">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-18">
        <div className="text-center">
          <p className="font-sans text-sm font-bold tracking-widest text-navy">THREE-WAY PARTNERSHIP</p>
          <h2
            id="relationship-title"
            className="mt-3 text-balance font-heading text-2xl font-black leading-relaxed text-navy md:text-4xl"
          >
            三者の連携が、患者満足と院への信頼を育てます
          </h2>
          <p className="mt-3 font-sans text-sm font-medium leading-relaxed text-muted-foreground md:text-base">
            三者それぞれをつなぐ、患者さんファーストの連携です。
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl px-1 pb-2 md:mt-12 md:px-12">
          <div className="pointer-events-none absolute inset-x-[18%] top-[22%] bottom-[18%] z-0" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-[72%] w-1 origin-top -rotate-[57deg] bg-navy md:h-[78%] md:-rotate-[61deg]" />
            <div className="absolute right-1/2 top-0 h-[72%] w-1 origin-top rotate-[57deg] bg-navy md:h-[78%] md:rotate-[61deg]" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-navy" />
          </div>

          <div className="relative z-10 mx-auto w-[58%] md:w-[38%]">
            <div className={`${partyCardClass} border-navy bg-cream`}>
              <span className="flex size-12 items-center justify-center rounded-full bg-white text-navy shadow-sm md:size-16">
                <Scale className="size-6 md:size-8" strokeWidth={2.25} aria-hidden="true" />
              </span>
              <p className="mt-3 text-balance font-heading text-base font-black text-navy md:text-2xl">アエル法律事務所</p>
              <p className="mt-1 font-sans text-[10px] font-bold text-navy-deep md:text-xs">交通事故に強い弁護士</p>
              <p className="mt-3 hidden font-sans text-sm font-bold leading-relaxed text-foreground md:block">
                保険会社対応・法的手続きを支援
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-20 grid grid-cols-2 gap-12 md:mt-28 md:gap-40">
            <div className={partyCardClass}>
              <span className="flex size-12 items-center justify-center rounded-full bg-cream text-navy md:size-16">
                <Building2 className="size-6 md:size-8" strokeWidth={2.25} aria-hidden="true" />
              </span>
              <p className="mt-3 font-heading text-base font-black text-navy md:text-2xl">紹介者</p>
              <p className="mt-1 font-sans text-[10px] font-bold text-muted-foreground md:text-xs">治療院・保険代理店</p>
              <p className="mt-3 hidden font-sans text-sm font-bold leading-relaxed text-foreground md:block">
                信頼できる相談先をご案内
              </p>
            </div>

            <div className={`${partyCardClass} border-gold bg-gold-soft`}>
              <span className="flex size-12 items-center justify-center rounded-full bg-white text-navy shadow-sm md:size-16">
                <UserRound className="size-6 md:size-8" strokeWidth={2.25} aria-hidden="true" />
              </span>
              <p className="mt-3 font-heading text-base font-black text-navy md:text-2xl">患者さん</p>
              <p className="mt-1 font-sans text-[10px] font-bold text-navy-deep md:text-xs">交通事故の被害者</p>
              <p className="mt-3 hidden font-sans text-sm font-bold leading-relaxed text-foreground md:block">
                治療と法的サポートを安心して受けられる
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[43%] z-20 -translate-x-1/2 bg-navy px-3 py-1 text-center font-sans text-[10px] font-bold text-white md:top-[47%] md:text-xs">
            相談・紹介
          </div>
          <div className="pointer-events-none absolute bottom-[18%] left-1/2 z-20 -translate-x-1/2 bg-white px-3 py-1 text-center font-sans text-[10px] font-bold text-navy shadow-sm md:bottom-[20%] md:text-xs">
            健全な連携
          </div>
        </div>

        <div className="mt-8 border-2 border-dashed border-navy bg-cream px-5 py-4 text-center md:mx-auto md:max-w-3xl">
          <p className="font-sans text-sm font-bold leading-relaxed text-navy md:text-base">
            紹介者と弁護士は<span className="mx-1 bg-gold-soft px-2 py-1 font-black">紹介料のやり取りなし</span>
            の健全な連携
          </p>
          <p className="mt-2 font-sans text-xs font-medium leading-relaxed text-muted-foreground md:text-sm">
            患者さんの安心が、紹介者への信頼と顧客満足度の向上につながります。
          </p>
        </div>
      </div>
    </section>
  )
}
