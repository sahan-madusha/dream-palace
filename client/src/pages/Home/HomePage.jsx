import {
  HeroSection,
  AboutUs,
  PropertiesSection,
  ContactUsSection,
} from "./common";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <PropertiesSection count={8} />
      <ContactUsSection />
    </>
  );
};
