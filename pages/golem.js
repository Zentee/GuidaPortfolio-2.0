import React from "react";
import MultiProjects from "@components/MultiProjects";

export default function Golem() {
  return (
    <MultiProjects
      firstParagraph={
        "Working on a project for Golem within our design studio, the goal was to improve subscription frequency adjustments, partnering with an enthusiastic design lead and a skilled developer. Our collaborative journey revolved around enhancing user experience."
      }
      secondtParagraph={
        "Beginning with in-depth user research, we gained valuable insights to shape our approach. Through iterative prototyping, I crafted user-friendly wireframes and UI elements, ensuring seamless implementation alongside the developer."
      }
      thirdParagraph={
        "Our refined subscription interface now empowers users with effortless transitions between bi-weekly and monthly cycles, significantly elevating Golem's customer experience."
      }
      img={""}
      timeline={"2 weeks"}
      role={"Visual, Prototyping"}
      title={"Golem"}
      date={"2023"}
    />
  );
}
