import React from "react";
import MultiProjects from "@components/MultiProjects";
import bettterRoaming from "img/betterRoamingPage.png";

export default function BetterRoaming() {
  return (
    <MultiProjects
      firstParagraph={
        "For this project our goal was to enable users to seamlessly add roaming plans to their existing voice subscriptions, enhancing connectivity for international travel while using BetterRoaming’s plans and a Google Watch device. This feature aimed to improve user satisfaction and drive additional revenue through tailored roaming options."
      }
      secondtParagraph={
        "The solution was based on scaling to accommodate additional roaming plans and an expanding user base, with flexibility for future product extensions."
      }
      thirdParagraph={""}
      team={"1 Product Manager  / 2 Designers / 1 Developer / 2 Stakeholders"}
      img={bettterRoaming}
      imgAlt="BetterRoaming"
      timeline={"2 months"}
      role={"User Journey"}
      role2={"Visual"}
      role3={"Prototyping"}
      //role4={}
      title={"BetterRoaming"}
      subtitle={"(Google Watch)"}
      date={"2025"}
    />
  );
}
