import NavbarWrapper from "components/common/navbar-wrapper";
import HeroSection from "components/home/hero";
import NavbarSection from "components/home/navbar-section";
import Navbar from "components/layout/navbar";
export default function Home() {
  return (
    <NavbarWrapper>
      <HeroSection />
      <NavbarSection title="projects" />
      <NavbarSection title="work" />
      <NavbarSection title="clubs" />
      <NavbarSection title="awards" />
    </NavbarWrapper>
  );
}
