import NavbarWrapper from "components/common/navbar-wrapper";
import HeroSection from "components/home/hero";
import Projects from "components/home/projects";
import LeadershipRoles from "components/home/leadership-roles";
import Achievements from "components/home/achievements";
import Timeline from "components/home/timeline";
import Contact from "components/home/contact";
import Head from "next/head";
import TravelSection from "components/home/travel";
import Publications from "components/home/publications";
export default function Home() {
  return (
    <NavbarWrapper>
      <Head>
        <title>Aryamann Ningombam</title>
        <meta
          name="description"
          content="Aryamann Ningombam is a full stack developer and entrepreneur.
          Aryamann Ningombam loves all things tech, and Aryamann Ningombam
          believes in the power of technology."
        />
      </Head>
      <meta
        name="description"
        content="        This is hero section of the portfolio website of Aryamann Ningombam."
      />

      <HeroSection />
      <meta
        name="description"
        content="This is timeline section of the portfolio website of Aryamann Ningombam."
      />
      <Timeline />

      <meta
        name="description"
        content="This is projects section of the portfolio website of Aryamann Ningombam."
      />
      <Projects />
      <meta
        name="description"
        content=" This is leadership roles section of the portfolio website of Aryamann
        Ningombam."
      />

      <LeadershipRoles />
      <meta
        name="description"
        content="This is achievements section of the portfolio website of Aryamann
        Ningombam."
      />
      <Publications />
      <Achievements />
      <meta
        name="description"
        content="This is contact section of the portfolio website of Aryamann Ningombam."
      />
      {/* <TravelSection /> */}

      <Contact />
    </NavbarWrapper>
  );
}
