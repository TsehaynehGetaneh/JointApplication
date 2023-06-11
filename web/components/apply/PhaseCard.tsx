import React from "react";

interface CardData {
  number: number;
  title: string;
  paragraph: string;
}

interface PhaseCardProps {
  cards: CardData[];
}

const PhaseCard: React.FC<PhaseCardProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap gap-4 p-8">
      {cards.map((card) => (
        <div
          key={card.number}
          className="w-64 p-4 bg-[#57c4e5] ml-4 border-r-2 border-white last:border-r-0"
        >
          <h1 className="text-4xl mb-2 font-bold">{card.number}</h1>
          <h2 className="text-4lg mb-3 font-bold">{card.title}</h2>
          <p className="text-lg">{card.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default PhaseCard;
