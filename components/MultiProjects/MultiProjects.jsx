import React, { useEffect, useState } from "react";
import styles from "./MultiProjects.module.scss";
import { useRouter } from "next/router";

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

  switch (path) {
    case "/golem":
      pdfUrl =
        "https://drive.google.com/file/d/1DSIvps4pnoi_Yse0KnuWbnx1GLaB6YT2/view?usp=sharing";
      break;

    case "/nano":
      pdfUrl =
        "https://drive.google.com/file/d/1nnFUiuakZ4mu01l5IorO-0c1xV4yLyaG/view";
      break;
  }

  const handleButtonClick = () => {
    if (!isClient) {
      // If not client-side, do not proceed
      return;
    }

    const password = window.prompt(
      "Please enter the password to access the PDF:"
    );

    const correctPassword = "GD30!"; // Replace with your actual password

    if (password === correctPassword) {
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
              Ask for Process
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
