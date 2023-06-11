import Link from "next/link";
// import { FiChevronRight } from 'react-icons/fi';

interface CardData {
  link1: string;
  paragraph: string;
  link2: string;
  path: string;
}

interface HomeCardProps {
  cards: CardData[];
}

const HomeCard: React.FC<HomeCardProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap p-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg flex flex-col w-64 min-h-48 max-h-screen m-2 p-4">
          <div className="flex-grow">
            <Link href={card.path} className="text-2xl font-md mt-5 hover:text-black hover:underline">
              {card.link1}
            </Link>
            <p className="mb-4 mt-3">{card.paragraph}</p>
          </div>
          <div className="inline-flex items-center mb-2">
            <Link href={card.path} className="font-bold flex hover:text-black hover:underline">
              {card.link2}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
