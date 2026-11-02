import { MobileTableOfContents } from './components/MobileTableOfContents'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TableOfContents } from './components/TableOfContents'
import { BenefitsSection } from './sections/BenefitsSection'
import { CalculatorSection } from './sections/CalculatorSection'
import { FermentationSection } from './sections/FermentationSection'
import { Hero } from './sections/Hero'
import { StepsSection } from './sections/StepsSection'
import { ToolsSection } from './sections/ToolsSection'

export default function App() {
  return (
    <div id="atas" className="min-h-dvh">
      <a href="#konten" className="skip-link">
        Lewati ke konten
      </a>

      <SiteHeader />

      <main id="konten">
        <Hero />

        <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:pt-20">
          <TableOfContents />

          <div className="min-w-0">
            <div className="lg:hidden">
              <MobileTableOfContents />
            </div>

            <div className="mt-10 space-y-20 sm:mt-12 sm:space-y-24 lg:mt-0">
              <CalculatorSection />
              <ToolsSection />
              <StepsSection />
              <FermentationSection />
              <BenefitsSection />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
