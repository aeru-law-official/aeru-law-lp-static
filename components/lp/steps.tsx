import { SectionHeading } from "./section-heading"

const steps = [
  {
    no: "01",
    title: "お問い合わせ",
    text: "LINE・お電話・メールでご連絡ください。まずは「話を聞いてみたい」だけでもOKです。",
  },
  {
    no: "02",
    title: "顔合わせ・面談",
    text: "事務所の方針や連携の進め方を、直接お話しします。ご質問・ご不安は何でもどうぞ。",
  },
  {
    no: "03",
    title: "連携スタート",
    text: "お互いに合意できれば、連携開始。患者さんへのご案内方法もご一緒に決めます。",
  },
  {
    no: "04",
    title: "患者さんをサポート",
    text: "交通事故の患者さんがいらしたら、弁護士へ。安心して通院を続けられるよう支えます。",
  },
]

export function Steps() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading eyebrow="むずかしい手続きはありません" title="連携をはじめる、4つのステップ" />

        <ol className="mt-12 flex flex-col gap-4">
          {steps.map((step, i) => (
            <li key={step.no} className="relative flex items-start gap-4">
              <div className="flex flex-col items-center">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy font-sans text-base font-bold text-white shadow-[0_4px_0_0_var(--navy-deep)]">
                  {step.no}
                </span>
                {i < steps.length - 1 ? (
                  <span className="mt-1 h-full min-h-8 w-0.5 flex-1 bg-navy/25" aria-hidden="true" />
                ) : null}
              </div>
              <div className="flex-1 rounded-2xl border-2 border-rule bg-card p-5 shadow-[0_4px_16px_rgba(21,119,194,0.06)]">
                <h3 className="font-sans text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
