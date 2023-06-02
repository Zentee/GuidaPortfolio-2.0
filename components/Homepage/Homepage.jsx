import styles from "./Homepage.module.scss";
import { useState, useEffect, useCallback } from "react";
import dashWork from "img/dashWork.png";
import cookingWork from "img/cookingWork.png";
import nutriumWork from "img/Nutrium.jpg";
import floristWork from "img/floristWork.png";
import animalWork from "img/animalWork.png";
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

  //UseCallBack para Memoizar uma função recurrente para não estar a gastar muita memoria para algo que vai ser sempre o mesmo
  // Usamos O UseCallBack para funções e o UseMemo para variaveis que guardamos o valor. Aqui o props.id como exemplo (e vou tirar o props id da homepage=

  /*
     const patrickIdTest = useCallback(() => {
    console.log("Let's gooooooo");
  }, [props.id]);
  */

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
        <div className={styles.conditionalbuttons}>
          <a href="https://drive.google.com/file/d/1xbP5CtNzTnW1DUUsmY8sYzmcPbWfRi98/view?usp=sharing">
            <button>Work</button>
          </a>
          <a href="https://drive.google.com/file/d/1UIj22zVAVKKRb4Fmlv5wkdBy0HA7CHkw/view">
            <button>Resume</button>
          </a>
          <a href="/about">
            <button>About</button>
          </a>
        </div>
        <article className={styles.homepage_container_images}>
          <ImagesComp
            img={dashWork}
            alt={"Dash Freelance Work"}
            link={
              "https://drive.google.com/file/d/1uCNDqArpC-Z0MpcKXzwTCzPf83m9YLOD/view?usp=sharing"
            }
            text={
              <span>
                <p style={{ whiteSpace: "nowrap", textAlign: "center" }}>
                  Freelance Work
                </p>
              </span>
            }
          />
          <ImagesComp
            img={nutriumWork}
            alt={"Nutrium Design Challenge"}
            link={
              "https://drive.google.com/file/d/1n5DQRAfCxr_0gSwwVHwSvT25kdFQ1WHN/view"
            }
            text={<span>Design Challenge</span>}
          />
          <ImagesComp
            img={cookingWork}
            alt={"Cooking Case Study"}
            link={
              "https://drive.google.com/file/d/1mEinlmVDUEWWxl4N57sW7jFXO6GVCXQn/view"
            }
            text={<span>Case Study</span>}
          />
          <ImagesComp
            img={animalWork}
            alt={"anima Case Study"}
            link={
              "https://drive.google.com/file/d/1iwBJ-jbDI6tnsb32qrD_dNR-liMCfqxe/view?usp=sharing"
            }
            text={<span>Case Study</span>}
          />
        </article>
      </div>
    </section>
  );
}

export default Homepage;
