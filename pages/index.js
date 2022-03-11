import NavbarWrapper from "components/common/navbar-wrapper";
import HeroSection from "components/home/hero";
import Projects from "components/home/projects";
import LeadershipRoles from "components/home/leadership-roles";
import Achievements from "components/home/achievements";
import Timeline from "components/home/timeline";
import Contact from "components/home/contact";
export default function Home() {
  return (
    <NavbarWrapper>
      <HeroSection />
      <Timeline />
      <Projects />
      <LeadershipRoles />
      <Achievements />
      <Contact />
    </NavbarWrapper>
  );
}
