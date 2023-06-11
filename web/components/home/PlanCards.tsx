import HomeCard from './HomeCard';

interface CardData {
  link1: string;
  paragraph: string;
  link2: string;
  path: string;
}

const PlanCards: React.FC = () => {
  const homeCardsData: CardData[] = [
    {
      link1: 'Why College Matters',
      paragraph: 'College is worth it. Your future is worth it. You are worth it.',
      link2: 'Learn why college matters>',
      path: '/plan/why-college-matters',
    },
    {
      link1: 'Paying for College',
      paragraph: 'There are lots of options available to you. We can help you find them.',
      link2: 'Learn how to pay for College>',
      path: '/plan/paying-for-college',
    },
    {
      link1: 'Your College Roadmap',
      paragraph: 'The path may seem unclear. We can help you find your way.',
      link2: 'Learn how to get to college>',
      path: '/plan/your-path-to-college',
    },
    // Add more card data as needed
  ];

  return (
    <div className="p-4">
      <div className="w-full mx-auto">
        <h1 className="text-5xl font-semibold mb-4 md:w-1/2">Plan your future</h1>
        <p className="mb-12 md:w-1/2 text-2xl">
          Get connected with everything you need to apply to college, research financial aid and scholarships, and get advice from counselors, advisors, and mentors.
        </p>
      </div>
      <HomeCard cards={homeCardsData} />
    </div>
  );
};

export default PlanCards;
