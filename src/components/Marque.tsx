"use client"
import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    "Informational System Designer",
    "Design Strategy",
    "Systems Designer",
    "Interaction Design",
    "User Experience Design",
    "User Testing",
    "User Interface Design",
    "Framer",
    "User Research",
  ];

  const lowerMarquee = [
    "Design Strategy",
    "Systems Designer",
    "Informational System Designer",
    "User Research",
    "User Testing",
    "Interaction Design",
    "User Interface Design",
    "User Experience Design",
    "Framer",
  ];




  const centerMarquee = [
    "Systems Designer",
    "User Research",
    "Informational System Designer",
    "Interaction Design",
    "Design Strategy",
    "User Interface Design",
    "User Testing",
    "Framer",
    "User Experience Design",
  ];

  return (
    <div className="container h-full overflow-x-hidden flex flex-col gap-4  lg:gap-4 overflow-y-hidden py-8 mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} textSize="text-3xl" />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} textSize="text-4xl" />
      <MarqueeItem images={centerMarquee} from={0} to={"-100%"} textSize="text-2xl" />
    </div>

  );
};

export default Marquee;