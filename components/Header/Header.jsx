import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import React from "react";

function Header() {
  let color = "";
  let svgColor = "";
  let path = useRouter().pathname;
  let direction = "";

  const homePath = path === "/";

  switch (path) {
    case "/golem":
      direction = "/golem";
      break;
    case "/nano":
      direction = "/nano";
      break;
    case "/dash":
      direction = "/dash";
      break;
    case "/infraspeak":
      direction = "/infraspeak";
      break;
  }

  if (path === direction) {
    color = "#000000";
    svgColor = "#FA8080";
  } else {
    color = "#F3F3F3";
    svgColor = "#F3F3F3";
  }

  return (
    <header className={styles.header} id="start">
      <nav className={styles.header_navbar}>
        <a href="/">
          <svg
            width="51"
            height="86"
            viewBox="0 0 51 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.09717 51.3301L5.70264 55.5386C5.354 56.6011 4.74805 57.4893 3.88477 58.2031C3.02148 58.9004 2.05029 59.249 0.971191 59.249C0.705566 59.249 0.481445 59.1743 0.298828 59.0249C0.132813 58.8921 0.0498047 58.6929 0.0498047 58.4272C0.0498047 58.3276 0.0830078 58.1782 0.149414 57.979L2.54004 51.1309C2.65625 50.7822 2.78076 50.5166 2.91357 50.334C3.04639 50.1348 3.229 49.9937 3.46143 49.9106C3.71045 49.8276 3.92627 49.7778 4.10889 49.7612C4.30811 49.7446 4.64014 49.7363 5.10498 49.7363C5.48682 49.7363 5.76904 49.7446 5.95166 49.7612C6.13428 49.7612 6.3418 49.7861 6.57422 49.8359C6.82324 49.8857 6.99756 49.9771 7.09717 50.1099C7.19678 50.2261 7.24658 50.3921 7.24658 50.6079C7.24658 50.7573 7.19678 50.998 7.09717 51.3301ZM15.29 24.3608L25.8984 55.2148C26.0146 55.7461 26.0728 56.0449 26.0728 56.1113C26.0728 56.8252 25.6577 57.5308 24.8276 58.228C23.9976 58.9087 23.2671 59.249 22.6362 59.249C22.0884 59.249 21.665 58.8257 21.3662 57.979L11.0068 27.7476C10.8408 27.0005 10.7578 26.6021 10.7578 26.5522C10.7578 25.8218 11.2144 25.0996 12.1274 24.3857C13.0571 23.6553 13.771 23.29 14.269 23.29C14.5513 23.29 14.7505 23.3647 14.8667 23.5142C14.9995 23.647 15.1406 23.9292 15.29 24.3608ZM14.8418 48.2422H4.73145C4.10059 48.2422 3.78516 47.9683 3.78516 47.4204C3.78516 47.271 3.81836 47.105 3.88477 46.9224L8.98975 31.6572C9.22217 31.0098 9.48779 30.686 9.78662 30.686C10.0522 30.686 10.2847 30.8521 10.4839 31.1841C10.6831 31.4995 10.8989 32.0142 11.1313 32.728C11.563 34.0728 11.7788 35.0771 11.7788 35.7412C11.7788 36.2061 11.6958 36.6958 11.5298 37.2104L9.5874 43.1372C9.5542 43.2202 9.5376 43.3364 9.5376 43.4858C9.5376 43.9341 9.79492 44.1582 10.3096 44.1582H12.8994C13.7461 44.1582 14.3188 44.1997 14.6177 44.2827C14.9165 44.3657 15.1572 44.5981 15.3398 44.98C15.5059 45.312 15.6387 45.7437 15.7383 46.2749C15.8545 46.7896 15.9126 47.1714 15.9126 47.4204C15.9126 47.9683 15.5557 48.2422 14.8418 48.2422Z"
              fill={svgColor}
            />
            <path
              d="M32.5982 26.0778C32.7415 26.2637 32.8623 26.4434 32.9604 26.6168C33.1974 27.0358 33.0544 27.5078 32.5312 28.0327L31.5042 29.1001C31.2046 29.3459 30.8376 29.4391 30.4034 29.3796C29.9754 29.2974 29.6367 29.0695 29.387 28.6957C27.8724 26.558 26.4624 25.2289 25.157 24.7085C24.6851 24.7848 24.2108 24.9578 23.7339 25.2276C22.2563 25.9873 21.3774 27.8388 21.0971 30.7823C20.8231 33.7031 21.2397 37.4063 22.3469 41.8918C23.4685 46.3691 24.9335 49.7844 26.7417 52.1375C28.5643 54.4825 30.1169 55.4734 31.3992 55.1103C33.4955 53.6573 34.3659 50.914 34.0104 46.8806C33.9354 46.141 33.9663 45.6562 34.1031 45.4262C34.2545 45.188 34.6402 45.0269 35.2604 44.9431L37.0003 44.7312C37.6657 44.6599 38.0442 45.2278 38.1359 46.4349C38.2001 49.7175 37.8659 52.2623 37.1334 54.0692C36.3926 55.8616 35.0469 57.3097 33.0963 58.4133C32.0886 59.0597 30.6896 59.2504 28.8993 58.9853C27.1007 58.7058 25.1741 57.0873 23.1193 54.1298C21.079 51.164 19.4046 47.3618 18.0963 42.723C16.7942 38.0616 16.5287 33.6816 17.2999 29.583C18.0629 25.47 19.7511 22.6551 22.3645 21.1383C22.7258 20.934 23.2784 20.7644 24.0223 20.6296C24.7581 20.4803 25.4892 20.4577 26.2156 20.5617C26.9484 20.6431 27.9314 21.1837 29.1647 22.1836C30.398 23.1835 31.5425 24.4815 32.5982 26.0778Z"
              fill={svgColor}
            />
          </svg>
        </a>
        <div className={styles.header_navbar_buttons}>
          {!homePath && (
            <a style={{ color: color }} href="/">
              Work
            </a>
          )}
          <a style={{ color: color }} href="/about">
            About
          </a>
          <a
            style={{ color: color }}
            href="https://drive.google.com/file/d/13NUGGTOb5UB9UN40535hc3zK6TEyqHw5/view"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
