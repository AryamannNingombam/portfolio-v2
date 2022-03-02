import Me from "assets/me/me.jpeg";
import Image from "next/image";
import Styles from "styles/components/home/image.module.scss";
export default function HomeImage() {
  return (
    <div className={Styles.mainDiv}>
      <Image
        src={Me}
        layout="fixed"
        width={310}
        height={430}
        alt="profile"
        className={Styles.mainImage}
      />
    </div>
  );
}
