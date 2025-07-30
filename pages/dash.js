import React from "react";
import MultiProjects from "@components/MultiProjects";
import dash from "img/dashPage.png";

export default function Dash() {
  return (
    <MultiProjects
      firstParagraph={
        "Working on Dash marked my first experience working on an existing product and collaborating with clients. Alongside an experienced lead designer, we aimed to enhance the user experience of Dash—a comprehensive business management software."
      }
      secondtParagraph={
        "Our objectives were clear: improve the existing user experience across platforms and ensure accessibility for diverse user types. Collaborating closely with the lead designer, I contributed to the creation of user-friendly wireframes and UI elements through iterative prototyping."
      }
      thirdParagraph={
        "This enhanced interface empowers users with an intuitive experience across platforms, enabling teams to effortlessly schedule tasks, input real-time data, and generate detailed reports. The collaborative journey not only improved Dash's usability but also laid the foundation for a more accessible and inclusive user experience."
      }
      img={dash}
      imgAlt={"Dash"}
      timeline={"1 Month"}
      role={"Visual"}
      role2={"Testing"}
      role3={"Acessibility"}
      title={"Dash"}
      date={"2022"}
    />
  );
}
