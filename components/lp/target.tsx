import { Activity, ShieldCheck } from "lucide-react"
import { SectionHeading } from "./section-heading"

const targets = [
  {
    icon: Activity,
    title: "整骨院・接骨院",
    text: "交通事故の患者さんを施術されている院長先生",
  },
  {
    icon: ShieldCheck,
    title: "保険代理店",
    text: "事故対応で頼れる弁護士を探している経営者の方",
  },
]

export function Target() {
  return (
    <section className="bg-cream-deep">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading eyebrow="募集対象" title="こんな先生・事業者の方へ" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {targets.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 rounded-2xl border-2 border-navy/15 bg-card p-8 text-center shadow-[0_4px_16px_rgba(21,119,194,0.08)]"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-navy text-white">
                <Icon className="size-8" aria-hidden="true" />
              </span>
              <h3 className="font-sans text-xl font-bold text-navy">{title}</h3>
              <p className="font-sans text-sm leading-relaxed text-foreground">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-sans text-xs leading-relaxed text-muted-foreground md:text-sm">
          ※ 岡崎市・西三河エリアを中心に。エリア外の先生も、まずはお気軽にご相談ください。
        </p>
      </div>
    </section>
  )
}
