import styles from "./About.module.scss";
import { useState, useEffect, useCallback } from "react";
import profilePicture from "img/profilePicture.jpg";
import aboutImageMobile from "img/profilePicture.jpg";
import Image from "next/image";

function About() {
  let changingNames = [
    "colorful",
    "friendly",
    "engaging",
    "useful",
    "helpful",
    "mindful",
  ];

  const [count, setCount] = useState(0);
  const word = changingNames[count];

  useEffect(() => {
    function loopingWords() {
      if (count >= changingNames.length - 1) {
        setCount(0);
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }

    const timer = setInterval(loopingWords, 2500);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <section className={styles.homepage}>
      <div className={styles.homepage_container}>
        <div className={styles.homepage_text}>
          <h1 className={styles.homepage_text_intro}>Hi, I'm Ana!</h1>
          <p className={styles.homepage_text_body}>
            UX designer passionate about creating&nbsp;
            <span className={styles[word]}>{word}</span>
          </p>
          <p className={styles.homepage_text_lastline}>
            experiences for social good.
          </p>
          <div className={styles.homepage_text_imgmobile}>
            <Image
              src={aboutImageMobile}
              alt="Ana Profile Picture"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
          <p className={styles.homepage_text_about}>
            My name is Ana Cunha and I’m from Lisbon, Portugal. I'm passionate
            about creating inclusive and meaningful experiences for social good
            through design.
          </p>
          <br />
          <p className={styles.homepage_text_lastlineabout}>
            When I'm not designing, you can find me walking dogs in the park,
            streaming all kinds of games, or reading books.
          </p>
        </div>
        <div className={styles.homepage_container_img}>
          <Image
            src={profilePicture}
            alt="Ana Profile Picture"
            layout="intrinsic"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
