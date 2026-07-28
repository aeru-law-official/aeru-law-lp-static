import { SectionHeading } from "./section-heading"
import type { Faq as FaqItem } from "@/types/microcms"

type FaqProps = {
  faqs: FaqItem[]
}

export function Faq({ faqs }: FaqProps) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading eyebrow="FAQ" title="よくあるご質問" />

        <dl className="mt-12 flex flex-col gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="overflow-hidden rounded-2xl border-2 border-rule bg-card shadow-[0_4px_16px_rgba(21,119,194,0.06)]"
            >
              <dt className="flex items-start gap-3 bg-navy/5 p-5 font-sans text-base font-bold text-navy md:text-lg">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-navy font-sans text-sm font-bold text-white">
                  Q
                </span>
                {faq.question}
              </dt>
              <dd className="flex items-start gap-3 p-5 font-sans text-sm leading-relaxed text-foreground md:text-base">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold font-sans text-sm font-bold text-white">
                  A
                </span>
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
