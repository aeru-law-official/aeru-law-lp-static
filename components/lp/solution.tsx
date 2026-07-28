import { HeartHandshake, Stethoscope, Scale } from "lucide-react"
import { SectionHeading } from "./section-heading"

const outcomes = [
  {
    icon: HeartHandshake,
    role: "患者さんは",
    text: "治療費の不安なく、納得いくまで通院できる",
  },
  {
    icon: Stethoscope,
    role: "先生（院）は",
    text: "施術と信頼づくりに専念し、再来院につなげられる",
  },
  {
    icon: Scale,
    role: "弁護士は",
    text: "交渉・手続きを担い、適正な解決へ導く",
  },
]

export function Solution() {
  return (
    <section className="bg-cream-deep">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading eyebrow="アエルと連携すると" title="アエルと連携すると、こう変わります" />

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border-2 border-navy/15 bg-card p-6 text-center shadow-[0_4px_16px_rgba(21,119,194,0.08)] md:p-8">
          <p className="font-sans text-lg font-bold leading-relaxed text-navy md:text-xl">
            法的な不安は弁護士へ。
            <br className="hidden sm:block" />
            院は、患者さんの回復と信頼づくりに集中できます。
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-foreground md:text-base">
            弁護士が保険会社との交渉や手続きを担い、患者さんが安心して通院を続けられる環境を支えます。院から信頼できる相談先まで案内することで、「ここに相談してよかった」という満足が生まれ、再来院や長いお付き合いにつながります。
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {outcomes.map(({ icon: Icon, role, text }) => (
            <div
              key={role}
              className="flex flex-col items-center gap-3 rounded-2xl border-2 border-rule bg-card p-6 text-center shadow-[0_4px_16px_rgba(21,119,194,0.06)]"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-cream-deep">
                <Icon className="size-7 text-navy" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-terracotta-soft px-3 py-1 font-sans text-sm font-bold text-terracotta">
                {role}
              </span>
              <p className="font-sans text-sm leading-relaxed text-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
