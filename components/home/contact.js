import MainHeading from "components/common/main-heading";
import Styles from "styles/components/home/contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={Styles.mainDiv}>
      <MainHeading heading={"Contact "} />
      <p>
        You can reach me at{" "}
        <a href="mailto:aryamann@formi.co.in">
          <span>aryamann@formi.co.in.</span>
        </a>
        You can also use{" "}
        <a
          href="https://linktr.ee/ary_amann"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          <span> this link </span>{" "}
        </a>
        to a <span> connect with me </span>in other social media platforms. Hope
        to <span> build something new </span>and great with you soon :).
      </p>
    </section>
  );
}
