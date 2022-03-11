import Styles from "styles/components/home/contact.module.scss";

export default function Contact() {
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.mainHeading}>Contact</div>
      <p>
        You can reach me at <span>hi@aryamann.com</span> or{" "}
        <span>aryamannsinghningombam@gmail.com.</span>
        You can also use this link to connect with me in other social media
        platforms. Hope to build something new and great with you soon :).
      </p>
    </div>
  );
}
