import ApplicantNav from '@/components/applicant/ApplicantNav'
import Left from '@/components/applicant/Left'
import Education from '@/components/applicant/common/Education'
import React, { useEffect, useState } from 'react'
import router, { useRouter } from 'next/router'
import Family from '@/components/applicant/common/family/Family'
import PersonalEssay from '@/components/applicant/common/Essay/PersonalEssay'
import Profile from '@/components/applicant/common/profile/Profile'
import HelpSection from '@/components/applicant/common/HelpSection';
import { NextPage } from 'next';


const Others: NextPage<{}> = () => {

  const [isLoading, setIsLoading] = useState(true);


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
            {router.asPath.split('/')[2] === 'Profile'.toLocaleLowerCase() &&
              <Left Children={<Profile />} title={'Profile'} />}
            {router.asPath.split('/')[2] === 'Writing'.toLocaleLowerCase() &&
              <Left Children={<PersonalEssay />} title={'PersonalEssay'} />}
            {router.asPath.split('/')[2] === 'Family'.toLocaleLowerCase() &&
              <Left Children={<Family onSubmit={function (values: { firstName: string; preferredName: string; middleName: string; lastName: string; otherNames: string; dob: string; permanentAddress: string; city: string; state: string; postalCode: string; country: string }): void {
                throw new Error('Function not implemented.')
              }} />} title={'Family'} />}
            {router.asPath.split('/')[2] === 'Education'.toLocaleLowerCase() &&
              <Left Children={<Education />} title={'Education'} />}
          </div>
          <HelpSection />
        </div>
      )}
    </div>
  );
};

export default Others;
