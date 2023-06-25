import React, { useState } from 'react';
import Card from "../common/Card";
import { University } from '@/types/university';
import { useGetCollegesQuery } from '@/store/college/college-api';
import Lodding from '../common/Loading';

const SearchCollege: React.FC = () => {
  // search states
  const [searchTerm, setSearchTerm] = useState<string>('');

  // fetched data 
  const { data: colleges, isSuccess, isLoading, isError, error } = useGetCollegesQuery();

  if (isLoading) {
    return  <Lodding />
  }

  if (isError) {
    return (
      <p>Loading...</p>
    );
  }

  if (!colleges || colleges.length === 0) {
    return <p>You do not have any colleges yet.</p>;
  }

  const filteredCollges = colleges.filter((university: University) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    university.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-200 mr-5 ml-5 w-[80%] md:w-[1000px] border border-gray-500 min-h-[500px]">
      <div className="m-10">
        <div className="bg-white w-full border border-b-2 rounded-md">
          <div className="flex flex-col md:flex-row justify-between items-center p-6 border-b-2">
            <h3 className="text-gray-900 text-2xl">University Search</h3>
            <button className="text-gray-600 rounded-full px-3 py-1 border-2 border-gray-600 transform ease-in-out hover:border-gray-900 hover:shadow-lg hover:text-gray-900 hover:scale-110">Application Requirements</button>
          </div>
          <div className="flex flex-col mx-4 my -3 text-gray-700 gap-2 my-4">
            <label htmlFor="search">University or City Name</label>
            <input
              type="search"
              name="search"
              placeholder='Enter University or City Name'
              id="search"
              className="w-full border-gray-600 py-2 px-2 focus:border-green-800 border outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span>Separate multiple search terms with a comma, e.g.: Kotebe, Addis Ababa</span>
          </div>
          <div>
            <div className="overflow-y-scroll h-96 m-2 p-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-200 rounded-lg">
              {filteredCollges.length > 0 ? (filteredCollges.map((college: University, index: number) => (
                <Card key={index} college={college} />
              ))) : (<div>University Not Found</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCollege;
