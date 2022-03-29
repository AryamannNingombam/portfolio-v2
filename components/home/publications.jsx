import Styles from "styles/components/home/achievements.module.scss";

export default function Publications() {
  return (
    <section className={Styles.mainDiv}>
      <div className={Styles.mainHeading}>Publications</div>
      <ul className={Styles.list}>
        <li className={Styles.listItem}>
          American Published Patent -
          <a
            href="https://www.freepatentsonline.com/10993017.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Smart Earbud Device Of An Earphone
          </a>{" "}
        </li>
      </ul>
    </section>
  );
}
