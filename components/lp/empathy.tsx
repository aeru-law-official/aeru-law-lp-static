import { Check } from "lucide-react"
import { SectionHeading } from "./section-heading"

const troubles = [
  "保険会社に施術費を打ち切られ、患者さんが通えなくなる",
  "「まだ痛むのに」と治療の中断を迫られ、対応に苦慮する",
  "保険会社とのやり取りに時間を取られ、施術に集中できない",
  "患者さんに「どうすれば」と相談されても、助言が難しい",
  "後遺障害の手続きを、どこに相談すればいいか分からない",
  "信頼して紹介できる弁護士の知り合いがいない",
]

export function Empathy() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="こんなお困りはありませんか？"
          title="患者さんの満足と再来院を妨げる、交通事故対応のお悩み"
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {troubles.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border-2 border-rule bg-card p-5 shadow-[0_4px_16px_rgba(21,119,194,0.06)]"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                <Check className="size-4" aria-hidden="true" />
              </span>
              <span className="font-sans text-sm leading-relaxed text-foreground md:text-base">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-navy p-6 text-center shadow-[0_8px_24px_rgba(12,82,133,0.2)] md:p-8">
          <p className="text-pretty font-sans text-base leading-relaxed text-white md:text-lg">
            患者さんが治療を続けられないと、回復にも、院の経営にも影響します。
            <br className="hidden md:block" />
            その<span className="rounded-md bg-gold px-2 py-0.5 font-bold text-navy-deep">&ldquo;あいだ&rdquo;</span>
            を、弁護士が引き受けます。
          </p>
        </div>
      </div>
    </section>
  )
}
