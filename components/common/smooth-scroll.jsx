import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";
const options = {
  damping: 0.04,
};

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);

  return null;
};

export default SmoothScroll;
