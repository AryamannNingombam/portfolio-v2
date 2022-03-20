import NavbarWrapper from "components/common/navbar-wrapper";
import Image from "next/image";
import styles from "styles/components/common/project.module.scss";
import KryptoMainLogo from "assets/projects/krypto-cards/krypto-cards-big-logo.png";
import MainImage1 from "assets/projects/krypto-cards/main-image-1.png";
import MainImage2 from "assets/projects/krypto-cards/main-image-2.png";
import MainImage3 from "assets/projects/krypto-cards/main-image-3.png";
import Head from "next/head";
export default function KryptoCardsProject() {
  return (
    <NavbarWrapper>
      <Head>
        <title>kryptocards.tech - Aryamann Ningombam</title>
      </Head>
      <div className={styles.mainDiv}>
        <div className={styles.headingSection}>
          <h1 className={styles.heading}>kryptocards.tech</h1>
          <h2 className={styles.subheading}>KRYPTO CARDS</h2>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.description}>
            <p>
              One of the{" "}
              <span>first ethereum based NFT startups in our country.</span>
              Krypto Cards aims to bring the trend of{" "}
              <span> NFTs & digital art in our country.</span> Bring out your
              inner fan, live your childhood, <span> all in digital form.</span>
            </p>
            <p>
              We&apos;ve launched our <span>own podcast</span>, & have been
              actively reaching out potential customers and collaborators.
            </p>
            <p>
              A student startup operating in Manipal, India. The team consists
              of members ranging from{" "}
              <span>blockchain developers to video editors</span>, all working
              towards a common goal, to bring out the{" "}
              <span>NFTs & digital art in our country.</span>
            </p>
          </div>
          <div className={styles.image}>
            <Image height={4000} width={4000} alt="g" src={KryptoMainLogo} />
          </div>
        </div>
        <div className={styles.mainImage}>
          <Image src={MainImage1} alt="f" />
        </div>
        <div className={styles.aboutMoonnets}>
          <h2 className={styles.aboutMoonnetsHeading}>About Moonnets</h2>
          <div className={styles.description}>
            <p>
              A realm, breathed to life, colossal yet the most oblivious one.
              Enshrouded in the allure of darkness, it still shines the
              brightest, basking in its glory - the abode of ephemeral galaxies
              - the Cosmos sovereign. Birthed and ruled by the primordial god of
              light, atmosphere, space, and heaven - Aether! We are all only a
              minuscule part of this vast expanse, one of its significant and
              active provinces - The Solar System.
            </p>
            <p>
              The Moonnets are a <span> collection of 219 Unique NFTs </span>
              where each NFT represents one moon of our Solar System. Moonnets
              is our <span>first project</span> & it is the{" "}
              <span>first project</span>
              that brings all the <span>moons of the solar system</span> under
              one NFT collection. We have our own smart contract, no third party
              interference, & are <span>bootstrapped as a student startup</span>
            </p>
            <p>
              We have been in talks with{" "}
              <span> international and national </span>
              NFT sellers & buyers, have taken feedback from several people
              leading to
              <span>multiple pivots,</span> & have been shortlisted for
              <span> Shark Tank India, season 1.</span>
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
              As the <span>COO of the company,</span> and the primary person who
              was{" "}
              <span>
                handling the smart contract and backend of the product
              </span>
              , I was involved in both technical and non-technical aspects of
              the company,
              <span>managing a team of 16,</span> making sure that the team was
              not slacking off & was always on the <span>right track</span>.
            </p>
            <p>
              The backend & smart contract were solely handled by me, every line
              of code was written by me, the smart contracts were tested on
              <span> Ganache</span>,
            </p>
            <p>
              When we started out, none of us had heard of Ganache, and what it
              did. We were all very confused. We all started{" "}
              <span>learning about smart contracts</span>
              and how to make an NFT marketplace, and we were all very excited.
              In the end, I was the one who <span>
                made the smart contract
              </span>{" "}
              , and the whole <span> logic behind the marketplace.</span>
            </p>
          </div>
        </div>
        <div className={styles.linksAndStack}>
          <div className={styles.links}>
            <div className={styles.section}>
              <div>
                <a
                  href="https://kryptocards.tech"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://kryptocards.tech
                </a>
              </div>

              <span>website</span>
            </div>
            <div className={styles.section}>
              <div className={styles.row}>
                <div>node</div>
                <div>react</div>
                <div>ipfs</div>
                <div>web3</div>
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
