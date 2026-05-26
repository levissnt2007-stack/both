import { TopBar } from "@/components/top-bar"
import { HeroSection } from "@/components/hero-section"
import { ForYouSection } from "@/components/for-you-section"
import { WhatYouFindSection } from "@/components/what-you-find-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeedbacksSection } from "@/components/feedbacks-section"
import { BenefitsSection } from "@/components/benefits-section"
import { MainOfferSection } from "@/components/main-offer-section"
import { PackSection } from "@/components/pack-section"
import { PackOfferSection } from "@/components/pack-offer-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <HeroSection />
      <ForYouSection />
      <WhatYouFindSection />
      <CategoriesSection />
      <FeedbacksSection />
      <BenefitsSection />
      <MainOfferSection />
      <PackSection />
      <PackOfferSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  )
}
