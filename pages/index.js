import styles from "styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.heading}>Hey, I&apos;m Aryamann</div>
      <div className={styles.subheading}>
        currently Unlocking your experiences{" "}
        <a href="https://formi.co.in">@formi.co.in</a>
      </div>
      <div className={styles.text}>
        Mail me at{" "}
        <a href="mailto:aryamann@formi.co.in">aryamann@formi.co.in</a>
      </div>
    </div>
  );
}
