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
  title,
  date,
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

    case "/infraspeak":
      pdfUrl =
        "https://drive.google.com/file/d/1_O1yHUwjBvlOUj1jQospJD3VGbeXZHtV/view";
      passwordLess = "";
      break;

    case "/1global":
      pdfUrl = "";
      passwordLess = "";
      break;

    case "/invisible":
      pdfUrl = "";
      passwordLess = "";
      break;

    case "/betterroaming":
      pdfUrl = "";
      passwordLess = "";
      break;
  }

  const hashPassword = (password) => {
    return sha256(password).toString();
  };

  const handleButtonClick = () => {
    if (!isClient) {
      // If not client-side, do not proceed
      return;
    }

    if (passwordLess === "") {
      window.open(pdfUrl, "_blank");
      return;
    }

    let correctPassword = "";

    switch (path) {
      case "/golem":
        correctPassword = hashPassword("GD30!");

        break;

      case "/nano":
        correctPassword = hashPassword("ND30!");
        break;
    }

    const inputPassword = window.prompt(
      "Please enter the password to access the PDF:"
    );

    const inputPasswordHash = hashPassword(inputPassword).toString();

    if (inputPasswordHash === correctPassword) {
      // Password is correct, grant access to the PDF
      window.open(pdfUrl, "_blank"); // Replace with the actual URL to your PDF
    } else {
      // Password is incorrect, show an alert or handle as needed
      alert("Incorrect password. Access denied.");
    }
  };

  return (
    <aside className={styles.projects}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{date}</p>
        <div className={styles.container_twoColumns}>
          <div className={styles.container_twoColumns_first}>
            <p>
              Timeline: <span>{timeline}</span>
            </p>
            <p>
              {roleArray.length > 1 ? "Roles: " : "Role: "} <span>{role}</span>
            </p>
            <button className={styles.button} onClick={handleButtonClick}>
              {passwordLess !== "" ? "Ask for Process" : "View Process"}
            </button>
          </div>
          <div className={styles.container_twoColumns_second}>
            <p>{firstParagraph}</p>
            {secondtParagraph && <p>{secondtParagraph}</p>}
            {thirdParagraph && <p>{thirdParagraph}</p>}
          </div>
        </div>
      </div>
    </aside>
  );
}
