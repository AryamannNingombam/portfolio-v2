import NavbarWrapper from "components/common/navbar-wrapper";
import HeroSection from "components/home/hero";
import NavbarSection from "components/home/navbar-section";
export default function Home() {
  return (
    <NavbarWrapper>
      <HeroSection />
      <NavbarSection
        title="Latest Work"
        subtitle="A section on my current work experience."
      />
      <NavbarSection
        title="Some Projects"
        subtitle="A list of my best projects"
      />
      <NavbarSection
        title="My Clubs"
        subtitle="The clubs that I run in my college"
      />
      <NavbarSection title="Awards List" subtitle="Awards that I have won" />
    </NavbarWrapper>
  );
}
