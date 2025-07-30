import React, { useEffect, useState } from "react";
import styles from "./MultiProjects.module.scss";
import { useRouter } from "next/router";
import sha256 from "crypto-js/sha256";

export default function MultiProjects({
  firstParagraph,
  secondtParagraph,
  thirdParagraph,
  img,
  timeline,
  role,
  role2,
  role3,
  role4,
  title,
  date,
  subtitle,
  team,
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Once the component mounts, we know it's client-side
    setIsClient(true);
  }, []);

  const roleArray = role.split(" ");
  let pdfUrl = "";
  let path = useRouter().pathname;
  let passwordLess = undefined;

  switch (path) {
    case "/golem":
      pdfUrl =
        "https://drive.google.com/file/d/1DSIvps4pnoi_Yse0KnuWbnx1GLaB6YT2/view?usp=sharing";
      break;

    case "/nano":
      pdfUrl =
        "https://drive.google.com/file/d/1nnFUiuakZ4mu01l5IorO-0c1xV4yLyaG/view";
      break;

    case "/dash":
      pdfUrl =
        "https://drive.google.com/file/d/14pTxTKO0e7HEwRkY4pwZnSh1dANimRaa/view";
      passwordLess = "";
      break;

    /*     case "/infraspeak":
      pdfUrl =
        "https://drive.google.com/file/d/1_O1yHUwjBvlOUj1jQospJD3VGbeXZHtV/view";
      passwordLess = "";
      break; */

    case "/1global":
      pdfUrl =
        "https://drive.google.com/file/d/1GExB16OfcQ-sd45bdoQLSmM0Pz3k-ggk/view?usp=sharing";

      break;

    case "/invisible":
      pdfUrl =
        "https://drive.google.com/file/d/12UK0IV_q3Kd0of6DloX_LD8mG9KyqwIC/view?usp=sharing";
      passwordLess = "";
      break;

    case "/betterroaming":
      pdfUrl =
        "https://drive.google.com/file/d/1OafIWJoFADy5-4X9fkrQK8IpOP_IT--I/view?usp=sharing";

      break;
  }

  const hashPassword = (password) => {
    return sha256(password).toString();
  };

  const handleButtonClick = async () => {
    if (!isClient) return;

    if (passwordLess === "") {
      window.open(pdfUrl, "_blank");
      return;
    }

    const inputPassword = window.prompt(
      "Please enter the password to access the PDF:"
    );
    if (!inputPassword) return;

    try {
      const res = await fetch("/api/pdf-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path, password: inputPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        window.open(data.url, "_blank");
      } else {
        alert("Incorrect password. Access denied.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <aside className={styles.projects}>
      <div className={styles.container}>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <p>{date}</p>
        <div className={styles.container_twoColumns}>
          <div className={styles.container_twoColumns_first}>
            <p>
              Timeline:
              <br />
              <span style={{ display: "inline-block", marginTop: "5px" }}>
                {timeline}
              </span>
            </p>
            <p>
              {roleArray.length > 1 ? "Roles: " : "Role: "}
              <br />
              <span
                style={{
                  display: "inline-block",
                  marginTop: "5px",
                }}
              >
                {role}
              </span>
              {role2 && <br />}
              {role2 && (
                <span style={{ display: "inline-block" }}>{role2}</span>
              )}
              {role3 && <br />}
              {role3 && (
                <span style={{ display: "inline-block" }}>{role3}</span>
              )}
              {role4 && <br />}
              {role4 && (
                <span style={{ display: "inline-block" }}>{role4}</span>
              )}
            </p>
            <button className={styles.button} onClick={handleButtonClick}>
              {passwordLess !== "" ? "Ask for Process" : "View Process"}
            </button>
          </div>
          <div className={styles.container_twoColumns_second}>
            <p>{firstParagraph}</p>
            {secondtParagraph && <p>{secondtParagraph}</p>}
            {thirdParagraph && <p>{thirdParagraph}</p>}
            {team && (
              <p className={styles.container_twoColumns_second_team}>
                <b>Team:</b> {team}
              </p>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
