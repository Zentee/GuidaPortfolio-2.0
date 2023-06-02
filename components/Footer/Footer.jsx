import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer_container}>
        <p>Feel free to reach out! I'd love to hear from you</p>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 11L11 15L15 11"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 7V15"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className={styles.footer_container_buttons}>
          <a href="https://dribbble.com/anamcunha">DRIBBLE</a>
          <a href="mailto:anaguida30@hotmail.com">EMAIL</a>
          <a href="https://www.linkedin.com/in/ana-cunha-5a3893211/">
            LINKEDIN
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
          © 2022 All rights reseved to Ana Cunha
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
