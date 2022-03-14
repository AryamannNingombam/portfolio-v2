import { motion } from "framer-motion";
import { Linear, TweenLite, gsap } from "gsap/dist/gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import Styles from "styles/components/layout/navbar.module.scss";
import Router from "next/router";
import shuffle from "utils/navbar/shuffle";
import { useRef } from "react";
const returnItem = (dist) => ({
  hidden: { x: 0, opacity: 0 },
  visible: { x: dist * 4, opacity: 1, transition: { delay: 0.1 } },
});

gsap.registerPlugin(TextPlugin);

export default function NavbarLink({ value }) {
  const motionRef = useRef();
  const linkRef = useRef();
  const handleAnimation = (e) => {
    let node = motionRef.current;
    let originalText = value.name;
    if (node._isRollingText) return;
    node._isRollingText = true;
    let tmpText = shuffle(originalText.split(""))
      .map((item) => {
        //return String.fromCharCode(item.charCodeAt(0) - 10 + Math.floor(Math.random() * 20))
        return String.fromCharCode(item.charCodeAt(0));
      })
      .join("");

    node.style.width =
      Math.round(
        parseFloat(
          window.getComputedStyle(node).width.toString().replace("px", "")
        )
      ) + "px";
    node.style.textAlign = "center";

    try {
      let duration = tmpText.length * 0.02;
      TweenLite.to(node, duration, {
        text: tmpText,
        ease: Linear.easeNone,
        onComplete: function () {
          TweenLite.to(node, duration, {
            text: originalText,
            ease: Linear.easeNone,
            overwrite: "all",
            onComplete: function () {
              node.style.width = "";
              node.style.textAlign = "";
              node._isRollingText = false;
            },
          });
        },
      });
    } catch (err) {
      console.log("ERROR");
      console.log(err);
    }
  };
  return (
    <motion.span
      className={`${Styles.item} ${Styles.mainText}`}
      onMouseOver={handleAnimation}
      data-text={value.name}
      ref={motionRef}
      variants={returnItem(value.distance)}
      onClick={(e) => {
        if (value.link === "#home") {
          window.scrollTo({
            behavior: "smooth",
            top: 0,
          });
        } else {
          document.querySelector(value.link.slice(1)).scrollIntoView({
            behavior: "smooth",
          });
        }
      }}
    >
      {value.name}
    </motion.span>
  );
}
