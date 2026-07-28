import Image from "next/image"
import { Phone, Check } from "lucide-react"
import { CtaButton } from "./cta-button"
import type { Settings } from "@/types/microcms"

const points = ["患者さんへ法的な安心も提供", "先生は施術と信頼づくりに専念", "紹介料のやり取りは一切なし"]

type HeroProps = {
  settings: Settings
}

export function Hero({ settings }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-deep to-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:grid-cols-[3fr_2fr] md:px-6 md:py-16">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-4 py-1.5 font-sans text-xs font-bold text-white md:text-sm">
            交通事故患者の対応にお悩みの治療院へ
          </span>

          <h1 className="font-heading text-3xl font-black leading-[1.45] text-navy md:text-[2.5rem] md:leading-[1.4]">
            <span className="relative inline-block md:whitespace-nowrap">
              <span className="relative z-10">再来院・リピートを増やしたい</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-gold/40" aria-hidden="true" />
            </span>
            <br />
            治療院・保険会社の方へ
            <span className="mt-2 block text-xl font-bold text-navy-deep md:text-2xl">弁護士からのご提案です。</span>
          </h1>

          <p className="font-sans text-base font-medium leading-relaxed text-foreground md:text-lg">
            患者さんに法的な安心まで届けることで、
            <br className="hidden sm:block" />
            「この院に相談してよかった」という信頼を育てませんか。
          </p>

          <ul className="flex flex-col gap-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 font-sans text-sm font-bold text-navy-deep md:text-base">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-terracotta text-white">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <CtaButton href="#contact" variant="green" size="lg">
              提携について相談する
            </CtaButton>
            <a
              href={`tel:${settings.phone}`}
              className="flex items-center gap-2 font-sans text-lg font-bold text-navy"
            >
              <Phone className="size-5 text-gold" aria-hidden="true" />
              {settings.phone}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border-4 border-white shadow-[0_12px_40px_rgba(12,82,133,0.18)]">
            <Image
              src="/images/hero-bg.png"
              alt="落ち着いた法律事務所の執務室"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border-2 border-navy/15 bg-white px-5 py-3 text-center shadow-lg">
            <p className="font-sans text-sm font-bold text-navy md:text-base">
              交通事故被害者の<span className="text-terracotta">心強いパートナー</span>へ
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="border-t-4 border-navy bg-white p-5 shadow-[0_8px_24px_rgba(12,82,133,0.12)] md:p-7">
            <p className="text-center font-heading text-xl font-black tracking-wide text-navy md:text-2xl">
              患者さんの安心が、先生への信頼につながります
            </p>

            <div className="my-8 grid gap-8 md:grid-cols-3 md:gap-12">
              {[
                { image: "/images/patient-woman.png", voice: "相談先を教えてくれて安心しました", alt: "安心して感謝する女性患者" },
                { image: "/images/patient-man.png", voice: "この治療院に相談してよかった", alt: "治療院への信頼を話す男性患者" },
                { image: "/images/patient-senior.png", voice: "丁寧に支えてくれてありがとう", alt: "支援に感謝するシニア患者" },
              ].map((patient) => (
                <figure key={patient.image} className="flex min-w-0 flex-col items-center gap-4">
                  <blockquote className="relative w-full rounded-md border-2 border-navy bg-white px-4 py-3 text-center font-sans text-sm font-bold leading-relaxed text-navy shadow-md after:absolute after:-bottom-2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-navy after:bg-white">
                    {patient.voice}
                  </blockquote>
                  <div className="w-full overflow-hidden border-b-4 border-navy bg-cream">
                    <Image
                      src={patient.image}
                      alt={patient.alt}
                      width={640}
                      height={640}
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                </figure>
              ))}
            </div>

            <div className="border-t-2 border-navy pt-7">
              <p className="mb-6 text-center font-heading text-lg font-black text-navy md:text-xl">
                弁護士との連携が、患者さんとの長い関係をつくります
              </p>
              <ol className="relative grid gap-0 md:grid-cols-3">
                {[
                  ["01", "患者さんに安心を", "適切な補償と法的な安心まで届ける"],
                  ["02", "先生への信頼に", "「紹介してくれてよかった」が生まれる"],
                  ["03", "再来院・リピートへ", "満足度が高まり、長いお付き合いにつながる"],
                ].map(([number, title, text], index) => (
                  <li key={number} className="relative flex gap-4 border-b border-rule px-3 py-5 md:flex-col md:items-center md:border-b-0 md:border-r md:px-7 md:text-center md:last:border-r-0">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy font-sans text-base font-black text-white ring-4 ring-cream">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-black text-navy md:text-xl">{title}</h3>
                      <p className="mt-2 font-sans text-sm font-medium leading-relaxed text-foreground">{text}</p>
                    </div>
                    {index < 2 && (
                      <span className="absolute -bottom-3 left-1/2 z-10 hidden size-6 -translate-x-1/2 rotate-45 border-r-4 border-b-4 border-gold md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:block md:-translate-y-1/2 md:translate-x-0 md:-rotate-45" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
