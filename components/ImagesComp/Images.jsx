import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Images.module.scss";

function Images({ link, alt, img, text, ...props }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <div
      className={isHover ? styles.img : styles.img_nothover}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <a target="_blank" href={link}>
        <Image src={img} alt={alt} layout="intrinsic" />
      </a>
      <div
        className={
          isHover
            ? `${styles.images_hovertext} ${styles.images_hoveranimation}`
            : styles.images_hovertext
        }
      >
        {text}
      </div>
      {/*   {text(animationStyle)} */}
    </div>
  );
}

export default Images;
