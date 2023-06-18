import React, { useState, useEffect } from 'react';
import ApplicantNav from '@/components/applicant/ApplicantNav';
import UniversityCard from '@/components/applicant/common/dashboard/UniversityCard';
import HelpSection from '@/components/applicant/common/HelpSection';
import { NextPage } from 'next';

type ShowState = Record<string, boolean>;

const Dashboard: NextPage<{}> = () => {
  const [showState, setShowState] = useState<ShowState>({});
  const [optional, setOptional] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleShow = (id: string) => {
    setShowState((prevStateShow) => ({
      ...prevStateShow,
      [id]: !prevStateShow[id],
    }));
  };

  useEffect(() => {
    // Simulating an asynchronous data fetching process
    const fetchData = async () => {
      // Simulating a delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false); // Once the data is loaded, set isLoading to false
    };

    fetchData();
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-2 lg:p-3">
      <div className="w-full">
        <ApplicantNav />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="bg-gray-200 w-full sm:w-[90%] md:w-[80%] border border-gray-500 min-h-[500px]">
          <div className="m-4 sm:m-6 md:m-8 lg:m-10">
            {isLoading ? (
              <div className="flex justify-center items-center h-screen">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" />
                </div>
              </div>
            ) : (
              <div className="bg-white w-full border border-b-2 rounded-md">
                <div className="flex justify-between p-4 sm:p-6 md:p-8 lg:p-10 border-b-2">
                  <h3 className="text-gray-900 text-xl :text-2xl">Dashboard</h3>
                  <button className="text-gray-600 rounded-full px-3 py-1 border-2 border-gray-600 transform ease-in-out hover:border-gray-900 hover:shadow-lg hover:text-gray-900 hover:scale-110">
                    Application Requirements
                  </button>
                </div>
                <div>
                  {/* UniversityCard 1 */}
                  <UniversityCard
                    id="university1"
                    imageSrc="https://th.bing.com/th?q=Logo+of+Hawassa+University&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=ET&setlang=en&adlt=moderate&t=1&mw=247"
                    altText=""
                    collegeName=""
                    admissionPlan=""
                    showDetails={showState['university1']}
                    toggleDetails={() => toggleShow('university1')}
                    optional={optional}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <HelpSection />
      </div>
    </div>
  );
};

export default Dashboard;
