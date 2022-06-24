import NavbarWrapper from "components/common/navbar-wrapper";
import Image from "next/image";
import styles from "styles/components/common/project.module.scss";
import MrexMainLogo from "assets/projects/mrex/mrex-big-logo.png";
import MainImage3 from "assets/projects/mrex/main-image-3.png";
import Head from "next/head";
export default function MrexProject() {
  return (
    <NavbarWrapper>
      <Head>
        <title>MRex - Aryamann Ningombam</title>
      </Head>
      <div className={styles.mainDiv}>
        <div className={styles.headingSection}>
          <h1 className={styles.heading}>Mrex</h1>
          <h2 className={styles.subheading}>REVAHACK</h2>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.description}>
            <p>
              Understandably so, any user would be skeptical of trusting an
              unknown organization with their medical records. Medical records
              hold highly sensitive information about the health of a person. In
              the wrong hands, the situation can be lead to making the user
              subject to exploitation.
            </p>{" "}
            <p>
              <span>MRex</span> addresses that by creating a{" "}
              <span>highly secure and decentralized system</span> to store
              medical reports that can only be{" "}
              <span>accessed by the intended users.</span>
            </p>
          </div>
          <div className={styles.image}>
            <Image height={4000} width={4000} alt="g" src={MrexMainLogo} />
          </div>
        </div>
        <div className={styles.mainImage}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/kmI5YqM8KrU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.aboutMoonnets}>
          <h2 className={styles.aboutMoonnetsHeading}>About MRex</h2>
          <div className={styles.description}>
            <p>
              Think of MRex and our use of <span>IPFS</span> as a place where
              the medical records are stored, the links to which are{" "}
              <span>publicly accessible. However, there&apos;s a catch!</span>{" "}
              There is virtually no way to access these records in an
              intelligible format. Our platform{" "}
              <span> encrypts all the reports and uploads on IPFS. </span> Only
              the report&apos;s owner can get it decrypted on our application.
              As an additional feature, they can{" "}
              <span>
                grant access to any trusted user by entering their email.
              </span>
            </p>
            <p>
              <span>Government websites are seldom the most reliable.</span>{" "}
              This could look like anything from server errors where users would
              have to wait an extended period of time to get access to
              time-sensitive information, or loss of information during
              transfer. Despite this,{" "}
              <span>
                only about 1 in 5 people actually notice these errors.
              </span>{" "}
              When in the context of something as crucial as health information,
              this is far from ideal. We at MRex make sure that these technical
              errors never are an issue, and the user has a{" "}
              <span> seamless experience </span>
              when using our product.
            </p>
            <p>
              The adoption of Electronic Medical Reports (EMR) is{" "}
              <span>
                {" "}
                very tragic in India in comparison to the rest of the world
              </span>
              . MRex offers an effortless experience, while{" "}
              <span>boosting EMR adoption rates.</span>
            </p>
          </div>
        </div>
        <div className={styles.mainImage}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/VZ-uOMXVzOc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.aboutMoonnets}>
          <h2 className={styles.aboutMoonnetsHeading}>My Role</h2>
          <div className={styles.description}>
            <p>
              As this was a <span> hackathon product </span>, we had no choice
              to but to forget all that we were doing and make sure that the app
              was fully ready before the hackathon ended. I was{" "}
              <span> mainly responsible </span> for the
              <span> backend architecture </span> of the app, and{" "}
              <span>integrating the frontend with the backend </span>. I had
              also <span>made some of the frontend pages</span>, but most of the
              frontend work was done by two of my teammates.
            </p>
            <p>
              We had <span>initially started with Node+TS,</span> but then soon
              realised that working with IPFS and typescript would be very
              difficult, <span>we could not find a way</span> to make
              <span> IPFS work with Typescript. </span> We{" "}
              <span>
                had to shift our whole backend from Typesript to Javascript.
              </span>
            </p>
            <p>
              In the end, we loved the product, and we were able to{" "}
              <span>get the first position in the hackathon</span> where around{" "}
              <span>250 teams had participated.</span>
            </p>
          </div>
        </div>
        <div className={styles.linksAndStack}>
          <div className={styles.links}>
            <div className={styles.section}>
              <div>
                <a
                  href="https://drive.google.com/file/d/12my-lOW0Akq6WjxMxbrurcZk_IOCIA-g/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  download here
                </a>
              </div>

              <span>link</span>
            </div>
            <div className={styles.section}>
              <div className={styles.row}>
                <div>node</div>
                <div>react-native</div>
                <div>ipfs</div>
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
