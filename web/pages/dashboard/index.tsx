import React, { useState, useEffect } from 'react';
import UniversityCard from '@/components/applicant/dashboard/UniversityCard';
import HelpSection from '@/components/applicant/common/HelpSection';
import { NextPage } from 'next';
import ApplicantNav from '@/components/applicant/common/ApplicantNav';
import { useGetMyCollegesQuery } from "@/store/my-college/my-college-api";
import Loading from '@/components/applicant/common/Loading';
import { University } from '@/types/university';
type ShowState = Record<string, boolean>;


const Dashboard: NextPage<{}> = () => {
  const [showState, setShowState] = useState<ShowState>({});
  const [optional, setOptional] = useState(false);

    // get universities using rtk query 
    const { data: myColleges,isSuccess,isError, isLoading  } = useGetMyCollegesQuery();
    console.log(myColleges);
    
    if(isLoading) {
        return <div><Loading /></div>
    }
  
    if(isError) {
        <div>Error happend while fetching</div>
    }
    
  

  const toggleShow = (id: string) => {
    setShowState((prevStateShow) => ({
      ...prevStateShow,
      [id]: !prevStateShow[id],
    }));
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-2 lg:p-3">
      <div className="w-full">
        <ApplicantNav />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="bg-gray-200 w-full sm:w-[90%] md:w-[80%] border border-gray-500 min-h-[500px]">
          <div className="m-4 sm:m-6 md:m-8 lg:m-10"> 
              <div className="bg-white w-full border border-b-2 rounded-md">
                <div className="flex justify-between p-4 sm:p-6 md:p-8 lg:p-10 border-b-2">
                  <h3 className="text-gray-900 text-xl :text-2xl">Dashboard</h3>
                  <button className="text-gray-600 rounded-full px-3 py-1 border-2 border-gray-600 transform ease-in-out hover:border-gray-900 hover:shadow-lg hover:text-gray-900 hover:scale-110">
                    Application Requirements
                  </button>
                </div>
                <div>
                  
               { myColleges?.map((myCollege:University,index:number)=>
               ( <UniversityCard
                 collegeId={myCollege._id}
                 key={index}
                 imageSrc={myCollege.images.logo.url}
                 altText={myCollege.name}
                 collegeName={myCollege.name} optional={false}/>)
               )  }
                </div>
              </div>
          </div>
        </div>
        <HelpSection />
      </div>
    </div>
  );
};

export default Dashboard;
