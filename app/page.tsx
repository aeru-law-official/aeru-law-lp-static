import { SiteHeader } from "@/components/lp/site-header"
import { Hero } from "@/components/lp/hero"
import { RelationshipDiagram } from "@/components/lp/relationship-diagram"
import { Empathy } from "@/components/lp/empathy"
import { Solution } from "@/components/lp/solution"
import { Assurances } from "@/components/lp/assurances"
import { PhoneCta } from "@/components/lp/phone-cta"
import { RepresentativeMessage } from "@/components/lp/representative-message"
import { Steps } from "@/components/lp/steps"
import { Target } from "@/components/lp/target"
import { Faq } from "@/components/lp/faq"
import { Contact } from "@/components/lp/contact"
import { SiteFooter } from "@/components/lp/site-footer"
import { getFaqs, getSettings } from "@/lib/microcms"

export default async function Page() {
  const [faqs, settings] = await Promise.all([getFaqs(), getSettings()])

  // 検索結果でのリッチ表示用の構造化データ（法律事務所情報）
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: settings.officeName,
    telephone: settings.phone,
    email: settings.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
      streetAddress: settings.address,
    },
  }

  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader settings={settings} />
      <main>
        <Hero settings={settings} />
        <RelationshipDiagram />
        <Empathy />
        <Solution />
        <Assurances />
        <PhoneCta settings={settings} />
        <RepresentativeMessage settings={settings} />
        <Steps />
        <Target />
        <PhoneCta settings={settings} />
        <Faq faqs={faqs} />
        <Contact settings={settings} />
      </main>
      <SiteFooter settings={settings} />
    </div>
  )
}
