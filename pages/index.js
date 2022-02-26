import NavbarWrapper from "components/common/navbar-wrapper";
import HeroSection from "components/home/hero";
import NavbarSection from "components/home/navbar-section";
export default function Home() {
  return (
    <NavbarWrapper>
      <HeroSection />
      <NavbarSection title="Work Exp." />
      <NavbarSection title="Latest Projects" />
      <NavbarSection title="My Clubs" />
      <NavbarSection title="Some Awards" />
    </NavbarWrapper>
  );
}
