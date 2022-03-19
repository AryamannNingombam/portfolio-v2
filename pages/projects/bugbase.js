import NavbarWrapper from "components/common/navbar-wrapper";
import Image from "next/image";
import styles from "styles/components/common/project.module.scss";
import BugbaseMainLogo from "assets/projects/bugbase/bugbase-big-logo.png";
import MainImage2 from "assets/projects/bugbase/main-image-2.png";
import MainImage3 from "assets/projects/bugbase/main-image-3.png";
import Head from "next/head";
export default function BugbaseProject() {
  return (
    <NavbarWrapper>
      <Head>
        <title>bugbase.in - Aryamann Ningombam</title>
        <meta content="This is BugBase, one of the projects of Aryamann Ningombam." />
      </Head>
      <div className={styles.mainDiv}>
        <div className={styles.headingSection}>
          <h1 className={styles.heading}>bugbase.in</h1>
          <h2 className={styles.subheading}>BUGBASE</h2>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.description}>
            <p>
              BugBase is India&apos;s{" "}
              <span>first consolidated bug bounty platform,</span>
              that aims to{" "}
              <span>connect companies with bug bounty hunters.</span> It is a
              SaaS platform that allows companies to{" "}
              <span> post bug bounties </span>and get bug bounty hunters to
              submit bug reports.
            </p>
            <p>
              BugBase is a startup that began with a{" "}
              <span> simple idea for a hackathon </span>
              by two school students, but now has become one of the{" "}
              <span> fastest growing startups in our country, </span>with
              mentions from various platforms such as{" "}
              <span> timesofindia, portswigger, etc. </span>
            </p>
          </div>
          <div className={styles.image}>
            <Image height={4000} width={4000} alt="g" src={BugbaseMainLogo} />
          </div>
        </div>
        <div className={styles.mainImage}>
          <iframe
            width="1100"
            height="700"
            src="https://www.youtube.com/embed/EEVtjjKyP3o"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.aboutMoonnets}>
          <h2 className={styles.aboutMoonnetsHeading}>About Bugbase</h2>
          <div className={styles.description}>
            <p>
              BugBase is an <span>Indian platform</span> that enables companies
              to set up <span>bug bounty programs</span> that can be reached out
              to by ethical hackers and cybersecurity enthusiasts from all over
              the country. Bug bounty programs are a way to{" "}
              <span>crowdsource identifying potential threats</span> on
              websites, thus safeguarding the web for future users. We provide a
              clean and straightforward User Experience to engage more
              cybersecurity fanatics. Despite being a giant in the tech world,
              several Indian companies, private and government-run are{" "}
              <span>
                {" "}
                still not secure and frequently experience security breaches.
              </span>
            </p>
            <p>
              BugBase also provides organizations with the ability to{" "}
              <span> host Capture The Flag (CTFs) </span> events for
              cybersecurity novices to practice, learn and grow into
              professionals. We believe that if we want a truly Digital India,
              we must defend its foundation in every possible way. Therefore, we
              would <span> collaborate with various private companies </span>{" "}
              and the Indian government to ensure the safety of all
              applications. India&apos;s cybersecurity environment is slowly
              maturing, and we will be pioneers in India&apos;s path of{" "}
              <span> becoming a global cybersecurity giant. </span>
            </p>
          </div>
        </div>
        <div className={styles.mainImage}>
          <Image src={MainImage2} alt="f" />
        </div>
        <div className={styles.aboutMoonnets}>
          <h2 className={styles.aboutMoonnetsHeading}>My Role</h2>
          <div className={styles.description}>
            <p>
              Working as a <span>full-stack developer</span> at BugBase, I
              joined the team when the company had{" "}
              <span>started developing the second version </span> of the
              platform, with a new tech-stack{" "}
              <span>(from React to Next, Node to Node+TS)</span>.
            </p>
            <p>
              I had mainly worked in{" "}
              <span>shifting the backend architecture</span>
              from plain Javascript to Typescript, and{" "}
              <span>
                add additional features such as pagination, search, and sorting.
              </span>
              . I was also responsible for{" "}
              <span>integration of the api and the frontend</span>, which can
              sometimes be the most difficult task, as you have to deal with
              issues such as{" "}
              <span>
                CORS, what computation to do in the frontend, and what in the
                api, etc.{" "}
              </span>
            </p>
            <p>
              I also had the opportunity to work on the marketing and business
              side where I had
              <span> contacted and mailed various companies and founders </span>
              to sign up on our platform for their bug bounties.
            </p>
          </div>
        </div>
        <div className={styles.linksAndStack}>
          <div className={styles.links}>
            <div className={styles.section}>
              <div>
                <a href="https://bugbase.in" target="_blank" rel="noreferrer">
                  https://bugbase.in
                </a>
              </div>

              <span>website</span>
            </div>
            <div className={styles.section}>
              <div className={styles.row}>
                <div>node</div>
                <div>nextjs</div>
              </div>
              <span>tech stack</span>
            </div>
          </div>
          <div className={styles.image}>
            <Image src={MainImage3} alt="f" />
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
}
