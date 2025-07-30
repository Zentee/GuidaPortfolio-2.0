import React from "react";
import MultiProjects from "@components/MultiProjects";

export default function Invisible() {
  return (
    <MultiProjects
      firstParagraph={
        "The goal of this project was to improve the internal app used by agents to compare LLM’s responses and mark violations within them. The main focus was on streamlining workflows, enhancing usability, and addressing key pain points to boost efficiency and accuracy in AI training tasks."
      }
      secondtParagraph={
        "Working on the design improvements of an app that directly supports the training and development of AI was both meaningful and highly relevant, especially given the growing impact of AI in today’s world. It was an exciting challenge to contribute to a project with such purpose, and having the chance to collaborate with a passionate and supportive team made the experience even more rewarding."
      }
      thirdParagraph={""}
      team={
        "1 Team Lead  / 1 Designer / 1 Developer / 1 Quality Analyst / 5 Agents"
      }
      img={""}
      timeline={"1 week"}
      role={"User Research"}
      role2={"UX/UI Design"}
      title={"Invisible Technologies"}
      date={"2025"}
    />
  );
}
