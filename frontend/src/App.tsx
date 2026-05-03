import { useState } from 'react'
import { HeaderMegaMenu } from './components/Header/HeaderMegaMenu';
import { HeroImageBackground } from './components/HeroHeader/HeroImageBackground';
import { FeaturesCards } from './components/FeatureSection/FeaturesCards';
import { FeaturesCardsSteps } from './components/FeatureSectionSteps/FeaturesCardsSteps';
import { FeaturesCardsBenefits } from './components/FeatureSectionBenefits/FeaturesCardsBenefits';
import { GetStartedSection } from './components/FeatureSectionGetStarted/GetStartedSection';
import { FooterLinks } from './components/Footer/FooterLinks';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderMegaMenu />
      <HeroImageBackground />
      <FeaturesCards />
      <FeaturesCardsSteps />
      <FeaturesCardsBenefits />
      <GetStartedSection />
      <FooterLinks />
    </>
  )
}

export default App
