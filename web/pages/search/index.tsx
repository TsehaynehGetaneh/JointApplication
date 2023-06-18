import React, { useState, useEffect } from 'react';
import HelpSection from '@/components/applicant/common/HelpSection';
import { NextPage } from 'next';
import ApplicantNav from '@/components/applicant/common/ApplicantNav';
import SearchCollegeOrUni from '@/components/applicant/search/SearchCollegeOrUni';

type ShowState = Record<string, boolean>;

const Search: NextPage<{}> = () => {
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

      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-4 w-full">
        
                <div>
                  <SearchCollegeOrUni />
                </div>
            
          <HelpSection />
        </div>
      )}
    </div>
  );
};

export default Search;
