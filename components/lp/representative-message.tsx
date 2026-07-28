import Image from "next/image"
import { SectionHeading } from "./section-heading"
import type { Settings } from "@/types/microcms"

type RepresentativeMessageProps = {
  settings: Settings
}

export function RepresentativeMessage({ settings }: RepresentativeMessageProps) {
  return (
    <section className="bg-cream-deep">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading eyebrow="MESSAGE" title="代表弁護士の想い" />

        <div className="mt-12 grid items-center gap-8 rounded-2xl border-2 border-navy/15 bg-card p-6 shadow-[0_8px_24px_rgba(21,119,194,0.1)] md:grid-cols-[auto_1fr] md:p-10">
          <div className="mx-auto flex flex-col items-center gap-3">
            <div className="flex size-44 items-end justify-center overflow-hidden rounded-full bg-cream-deep">
              <Image
                src="/images/koide_face.png"
                alt="アエル法律事務所 代表弁護士 小出和之の似顔絵イラスト"
                width={224}
                height={290}
                className="h-auto w-36"
              />
            </div>
            <p className="text-center font-sans text-sm leading-relaxed text-foreground">
              <span className="font-bold text-navy">弁護士　{settings.lawyerName}</span>
              <br />
              {settings.officeName} 代表
              <br />
              {settings.barAssociation}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-sans text-sm leading-relaxed text-foreground md:text-base">
              交通事故の被害者側に特化し、これまで多くの医療機関の先生方と連携してきました。保険会社との交渉で患者さんが不安を抱えたまま治療を諦めてしまう——そんな場面を、何度も見てきました。
            </p>
            <p className="font-sans text-sm leading-relaxed text-foreground md:text-base">
              私たちの役割は、その不安を安心に変えること。保険会社対応を私たちが担うことで、先生方には施術と患者さんとの信頼づくりに専念していただけます。「この院に相談してよかった」という満足が、再来院や長いお付き合いにつながる。そんな健全な連携を、地域の先生方とご一緒できれば幸いです。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
