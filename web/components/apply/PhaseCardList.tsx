import React from "react";
import PhaseCard from "./PhaseCard";

interface Phase {
  number: number;
  title: string;
  paragraph: string;
}

const homeCardsData: Phase[] = [
    {
      number: 1,
      title: "Create your profile",
      paragraph: "Your Common App profile is your chance to shine. It’s everything you want a college or university to know about you - from your academic coursework to your extracurricular activities.",
    },
    {
      number: 2,
      title: "Add colleges to your list",
      paragraph: "Now you get to decide what’s most important to you in a college or university. Search through the characteristics and add colleges that align with them.",
    },
    {
      number: 3,
      title: "Gather requirements",
      paragraph: "Once you’ve decided where you want to apply, make a checklist of everything required. Each college and university is different, so make sure you stay on top of their application requirements.",
    },
    {
      number: 4,
      title: "Submit applications",
      paragraph: "Be sure to take a moment to celebrate this huge accomplishment! And remember to finish the academic year on a high note, apply for financial aid and prepare for the future.",
    },
    // Add more card data as needed
  ];

const PhaseCardList: React.FC = () => {

  return (
    <div className="bg-[#57c4e5]">
        <div className="my-5">
            <h1 className="text-3xl font-bold p-8">Application steps to follow!</h1>
        </div>
      <PhaseCard cards={homeCardsData} />
    </div>
  );
};

export default PhaseCardList;
