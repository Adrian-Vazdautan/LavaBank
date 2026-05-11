// src/pages/HomePage.tsx
import { HeaderMegaMenu } from '../Header/HeaderMegaMenu';
import { HeroImageBackground } from '../HeroHeader/HeroImageBackground';
import { FeaturesCards } from '../FeatureSection/FeaturesCards';
import { FeaturesCardsSteps } from '../FeatureSectionSteps/FeaturesCardsSteps';
import { FeaturesCardsBenefits } from '../FeatureSectionBenefits/FeaturesCardsBenefits';
import { GetStartedSection } from '../FeatureSectionGetStarted/GetStartedSection';
import { FooterLinks } from '../Footer/FooterLinks';

export function HomePage() {
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
  );
}