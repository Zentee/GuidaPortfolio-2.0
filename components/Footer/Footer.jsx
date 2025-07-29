import styles from "./Footer.module.scss";
import { CircleArrow } from "./FooterSvg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer_container}>
        <p>Feel free to reach out! I'd love to hear from you</p>
        <CircleArrow />
        <div className={styles.footer_container_buttons}>
          <a href="https://dribbble.com/anamcunha">Dribble</a>
          <a href="mailto:anaguida30@hotmail.com">Email</a>
          <a href="https://www.linkedin.com/in/ana-cunha-5a3893211/">
            Linkedin
          </a>
          <a href="#start" className={styles.footer_scroll_up}>
            <svg
              width="44"
              height="23"
              viewBox="0 0 44 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43 22L22 1L1 22"
                stroke="#fa8080"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <p className={styles.footer_container_trademark}>
          © 2025 All rights reseved to Ana Cunha
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
