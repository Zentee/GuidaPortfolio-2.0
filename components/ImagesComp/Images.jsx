import Image from "next/image";
import styles from "./Images.module.scss";

function Images({ link, alt, img, text, ...props }) {
  return (
    <div className={styles.img}>
      <a target="_blank" href={link} rel="noopener noreferrer">
        <Image
          src={img}
          alt={alt}
          layout="intrinsic"
          loading="eager"
          placeholder="blur"
        />
      </a>
      <div className={styles.images_hovertext}>{text}</div>
    </div>
  );
}

export default Images;
