import { SectionHeading } from "./section-heading"

const items = [
  {
    no: "01",
    title: "紹介料のやり取りは、一切なし",
    text: "金銭のやり取りのある提携（非弁提携）は行いません。あくまで患者さんのための健全な連携。だから、安心しておつなぎいただけます。",
  },
  {
    no: "02",
    title: "患者さんファースト",
    text: "私たちが第一に考えるのは、患者さんの回復と適正な解決。院と弁護士が同じ方向を向けるから、信頼関係が続きます。",
  },
  {
    no: "03",
    title: "受任を限定した丁寧・迅速な対応",
    text: "件数を絞り、一件一件に丁寧に向き合います。ご紹介いただいた患者さんにも、迅速・誠実に対応します。",
  },
]

export function Assurances() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading eyebrow="信頼される院づくりを支える" title="長く選ばれる治療院につながる、3つの安心" />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.no}
              className="flex flex-col items-center gap-4 rounded-2xl border-2 border-rule bg-card px-6 pb-6 pt-10 text-center shadow-[0_4px_16px_rgba(21,119,194,0.06)]"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-navy font-sans text-2xl font-bold text-white shadow-[0_4px_0_0_var(--navy-deep)]">
                {item.no}
              </span>
              <h3 className="font-sans text-lg font-bold leading-relaxed text-navy">{item.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-terracotta/30 bg-terracotta-soft p-6 text-center">
          <p className="font-sans text-sm leading-relaxed text-foreground md:text-base">
            「紹介料のやり取りがない」からこそ、健全で長く続く連携になります。
            <br className="hidden md:block" />
            患者さんのためを思う先生ほど、安心して連携いただけます。
          </p>
        </div>
      </div>
    </section>
  )
}
