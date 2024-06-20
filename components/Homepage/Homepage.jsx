import styles from "./Homepage.module.scss";
import { useState, useEffect, useId } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import dashWork from "img/dashWork.png";
import cookingWork from "img/cookingWork.png";
import infraSpeak from "img/infraSpeak.jpg";
import golem from "img/Golem.png";
import nano from "img/Nano.png";
import ImagesComp from "@components/ImagesComp";

function Homepage() {
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
  const isMobile = useMediaQuery("470px");
  const project1 = useId();
  const project2 = useId();
  const project3 = useId();
  const project4 = useId();
  const project5 = useId();

  useEffect(() => {
    function loopingWords() {
      if (count >= changingNames.length - 1) {
        setCount(0);
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }

    const timer = setInterval(loopingWords, 2000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <section className={styles.homepage}>
      <div className={styles.homepage_container}>
        <div className={styles.homepage_text}>
          <h1 className={styles.homepage_text_intro}>Hi, I'm Ana!</h1>
          <div className={styles.homepage_text_subTextAnim}>
            <p className={styles.homepage_text_body}>
              UX designer passionate about creating&nbsp;
              <span className={styles[word]}>{word}</span>
            </p>
            <p className={styles.homepage_text_lastline}>
              experiences for social good.
            </p>
          </div>
        </div>
        {isMobile && (
          <div className={styles.conditionalbuttons}>
            <a href="https://drive.google.com/file/d/1AbyYqklDs-Obx3TLHx-mnI656vQqYjr9/view?usp=sharing">
              <button>Work</button>
            </a>
            <a href="https://drive.google.com/file/d/1AbyYqklDs-Obx3TLHx-mnI656vQqYjr9/view?usp=sharing">
              <button>Resume</button>
            </a>
            <a href="/about">
              <button>About</button>
            </a>
          </div>
        )}
        <article className={styles.homepage_container_images}>
          <ImagesComp
            img={nano}
            alt={"Client Work"}
            text={<span>Client Work</span>}
            link={"/nano"}
            id={project1}
          />
          <ImagesComp
            img={golem}
            alt={"Client Work"}
            text={<span>Client Work</span>}
            link={"/golem"}
            id={project2}
          />
          <ImagesComp
            img={infraSpeak}
            alt={"infraSpeak Case Study"}
            text={<span>Design Challenge</span>}
            link={"/infraspeak"}
            id={project3}
          />
          <ImagesComp
            img={dashWork}
            alt={"Dash Freelance Work"}
            link={"/dash"}
            id={project4}
            text={
              <span>
                <p style={{ whiteSpace: "nowrap", textAlign: "center" }}>
                  Freelance Work
                </p>
              </span>
            }
          />
          <ImagesComp
            img={cookingWork}
            alt={"Cooking Case Study"}
            link={
              "https://drive.google.com/file/d/1mEinlmVDUEWWxl4N57sW7jFXO6GVCXQn/view"
            }
            text={<span>Case Study</span>}
            id={project5}
          />
        </article>
      </div>
    </section>
  );
}

export default Homepage;
