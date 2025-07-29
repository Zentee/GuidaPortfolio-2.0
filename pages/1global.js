import React from "react";
import MultiProjects from "@components/MultiProjects";

export default function Global1() {
  return (
    <MultiProjects
      firstParagraph={
        "For this project our focus was on redesigning a key website page to make it more engaging and interactive, encouraging users to create their own custom plan with 1GLOBAL. The original layout lacked user engagement, so we introduced gamified elements and improved the flow to better capture and hold attention."
      }
      secondtParagraph={
        "It was a rewarding challenge to transform a low-performing page into a more dynamic and effective experience. Collaborating closely with a cross-functional team made the process both efficient and impactful."
      }
      team={
        "1 Head of Design  / 1 UX/UI Designer / 1 Developer / 1 SEO Manager"
      }
      img={""}
      timeline={"1 Month"}
      role={"Visual, Prototyping, A/B Testing"}
      title={"Enterprise (1GLOBAL)"}
      date={"2025"}
    />
  );
}
