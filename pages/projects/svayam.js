import NavbarWrapper from "components/common/navbar-wrapper";
import Image from "next/image";
import styles from "styles/components/common/project.module.scss";
import SvayamMainLogo from "assets/projects/svayam/svayam-big-logo.png";
import MainImage2 from "assets/projects/svayam/main-image-2.png";
import MainImage3 from "assets/projects/svayam/main-image-3.png";
import Head from "next/head";
export default function BugbaseProject() {
  return (
    <NavbarWrapper>
      <Head>
        <title>Svayam - Aryamann Ningombam</title>
      </Head>
      <div className={styles.mainDiv}>
        <div className={styles.headingSection}>
          <h1 className={styles.heading}>Svayam</h1>
          <h2 className={styles.subheading}>SMART INDIA HACKATHON(2022)</h2>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.description}>
            <p>
              Svayam is an easy-to-use platform with the{" "}
              <span>support of English, Hindi, and native languages,</span>{" "}
              thereby increasing accessibility. The platform also has a{" "}
              <span> Chatbot that answers any questions about Svayam </span> and
              how to use the platform.
            </p>
            <p>
              Employing a <span> recommender system, </span>Svayam enhances the
              user experience by exposing every customer to a{" "}
              <span> personalized array of recommended products to buy!</span>
            </p>
          </div>
          <div className={styles.image}>
            <Image height={4000} width={4000} alt="g" src={SvayamMainLogo} />
          </div>
        </div>
        <div className={styles.mainImage}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/maI5PTvtnmY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.aboutMoonnets}>
          <h2 className={styles.aboutMoonnetsHeading}>About Svayam</h2>
          <div className={styles.description}>
            <p>
              Svayam aims to{" "}
              <span> bring into light the Indian traditional </span> products
              that are sold in rural areas, and to{" "}
              <span> make them available to the </span>
              people of the <span> urban areas. </span>
              <span> SHGs register </span> on our platform, and they can
              <span> sell their product </span> to the country through our
              platform. These products are mostly{" "}
              <span> handmade products </span> that are made by the{" "}
              <span> rural population. </span>
            </p>
            <p>
              This product was made for the first round of{" "}
              <span> Smart India Hackathon </span>, a nationwide hackathon where
              participants are given a problem statement{" "}
              <span> mostly by the government </span>, and they have to come up
              with an <span> innovative solution </span> to solve the problem.
              We have been <span> shortlisted for the main hackathon </span> and
              we would be representing the country for the{" "}
              <span> main event </span> with this product.
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
              I was the <span> leader for the hackathon </span>, and I was
              responsible for the whole{" "}
              <span> backend architecture of the product </span>. We started at{" "}
              <span> 8am in the morning </span> and were ready with most of the
              product by <span>7pm</span>.
            </p>
            <p>
              I was the one who <span> managed all the formalities </span>
              that were required by the organizers to make sure that our team
              had a <span> smooth run </span> and we could
              <span> build the best product in the given time frame.</span>
            </p>
          </div>
        </div>
        <div className={styles.linksAndStack}>
          <div className={styles.links}>
            <div className={styles.section}>
              <div>
                <a
                  href="https://svayam.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  link here
                </a>
              </div>

              <span>website</span>
            </div>
            <div className={styles.section}>
              <div className={styles.row}>
                <div>node</div>
                <div>nextjs</div>
                <div>ipfs</div>
                <div>razorpay</div>
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
