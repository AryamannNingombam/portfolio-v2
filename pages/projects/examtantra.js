import NavbarWrapper from "components/common/navbar-wrapper";
import Image from "next/image";
import styles from "styles/components/common/project.module.scss";
import ExamtantraMainLogo from "assets/projects/examtantra/examtantra-big-logo.png";
import MainImage1 from "assets/projects/examtantra/main-image-1.png";
import MainImage2 from "assets/projects/examtantra/main-image-2.png";
import MainImage3 from "assets/projects/examtantra/main-image-3.png";
export default function ExamtantraProject() {
  return (
    <NavbarWrapper>
      <div className={styles.mainDiv}>
        <div className={styles.headingSection}>
          <h1 className={styles.heading}>Examtantra</h1>
          <h2 className={styles.subheading}>HACKOWASP 3.0</h2>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.description}>
            <p>
              ExamTantra’s goal is to <span>“Gamify” the mundane tasks</span> of
              attempting exams by adding elements such as peer attempts:{" "}
              <span>
                solving papers with peers resulting in a more productive
                practice environment
              </span>{" "}
              , leaderboards to compare progress,{" "}
              <span>a clean minimal UI so as to not distract the user</span> ,
              badges, awards and other reinforcements{" "}
              <span>
                {" "}
                which have been proven to be psychological motivators.
              </span>
            </p>
            <p>
              We believe that{" "}
              <span> everyone must have the right to a fair education,</span>
              thus, ExamTantra aims to make practicing more accessible to
              students by{" "}
              <span>
                offering an ad free uninterrupted experience as well as being
                optimised to run on most devices.
              </span>
            </p>
          </div>
          <div className={styles.image}>
            <Image
              height={4000}
              width={4000}
              alt="g"
              src={ExamtantraMainLogo}
            />
          </div>
        </div>
        <div className={styles.mainImage}>
          <Image src={MainImage1} alt="f" />
        </div>
        <div className={styles.aboutMoonnets}>
          <h2 className={styles.aboutMoonnetsHeading}>About Examtantra</h2>
          <div className={styles.description}>
            <p>
              Competitive exams are a cornerstone in almost every student’s
              life. There are <span>two purposes for competitive exams;</span>{" "}
              at school and college, they encourage students to study by
              <span>
                rewarding those who demonstrate the will to learn with
                reputation,
              </span>
              prizes, admissions to universities and scholarships. They&apos;re
              also used in the selection of military and civil service officers.
              This makes{" "}
              <span>
                {" "}
                success in these exams very lucrative, attracting many students.
              </span>
            </p>
            <p>
              However the archaic education system makes the preparation process
              very tedious, boring and unintuitive. This leads to{" "}
              <span>
                {" "}
                burnout and a general disinterest towards academics.{" "}
              </span>{" "}
              This system is also inefficient as it doesn&apos;t have room for a
              dynamic system of preparation. Another issue that presented itself
              in the current, unprecedented times is that{" "}
              <span>
                {" "}
                education has to evolve beyond brick and mortar institutions to
                function and thrive.
              </span>
              The sudden rise in solutions implementing technology into
              education is no coincidence. As we are forced to look for
              alternatives to conventional learning methods, we have to{" "}
              <span> find efficient and innovative methods </span> so as to keep
              improving the quality of education.
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
              As this was <span>my first Hackathon,</span> and the tech stack
              that we were using was really new for us{" "}
              <span>(Ionic for the app)</span>. Only one out of the four of us
              had previous experience in hackathons, and{" "}
              <span> we did not have much idea </span> on how things are{" "}
              <span> done in a hackathon. </span>
            </p>
            <p>
              I had mainly made the frontend using{" "}
              <span> Ionic and React, </span> where we worked with Typescript, a
              language that we had never worked with. We had used firebase to
              make the backend, and had prepared a{" "}
              <span> proper product roadmap </span>.
            </p>
            <p>
              We pitched pur product on the final day, fortunately, we had
              secured the <span>second rank in the competition.</span>
            </p>
          </div>
        </div>
        <div className={styles.linksAndStack}>
          <div className={styles.links}>
            <div className={styles.section}>
              <div>
                <a
                  href="https://drive.google.com/file/d/1Va-TlFD3ab7K3gHOzlVY4Z-IFSk7lZKx/view"
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
                <div>firebase</div>
                <div>ionic</div>
                <div>react</div>
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
