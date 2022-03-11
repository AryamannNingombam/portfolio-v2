import NavbarWrapper from "components/common/navbar-wrapper";
import HeroSection from "components/home/hero";
import WorkExperience from "components/home/work-experience";
import Projects from "components/home/projects";
import LeadershipRoles from "components/home/leadership-roles";
import Achievements from "components/home/achievements";
import Timeline from "components/home/timeline";
export default function Home() {
  return (
    <NavbarWrapper>
      <HeroSection />
      <Timeline />
      <Projects />
      <LeadershipRoles />
      <Achievements />
    </NavbarWrapper>
  );
}
