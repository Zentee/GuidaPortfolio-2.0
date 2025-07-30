import React from "react";
import MultiProjects from "@components/MultiProjects";
import infraSpeak from "img/infrapseakPage.png";

export default function Infraspeak() {
  return (
    <MultiProjects
      firstParagraph={
        "Taking on a design challenge for Infraspeak, known for its advanced SaaS solution in maintenance and facility management, I focused on creating a user-friendly mobile app interface."
      }
      secondtParagraph={
        "The specific task involved designing an intuitive app interface for hotel employees, particularly the cleaning crew, to report malfunctioning equipment in hotel rooms. The goal was to streamline the user experience, considering the entire journey from the app's empty state to successful submission, while addressing potential edge cases."
      }
      thirdParagraph={
        "Crafting Infraspeak's hotel equipment app proved enlightening as it required understanding the cleaning crew's needs and simplifying the design for seamless navigation across diverse tech backgrounds. The iterative process, from strategic button placement to addressing challenges like duplicate reports, reinforced the app's efficiency and resilience for real-world use."
      }
      img={infraSpeak}
      imgAlt={"Infraspeak"}
      timeline={"1 week"}
      role={"User Journey"}
      role2={"Visual"}
      role3={"Prototyping"}
      title={"Infraspeak"}
      date={"2023"}
    />
  );
}
