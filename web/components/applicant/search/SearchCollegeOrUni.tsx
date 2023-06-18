'use client'
import React, { useEffect, useState } from 'react';
import Card from "../common/Card";

interface University {
  id: string;
  name: string;
  phone: number;
  email: string;
  address: string;
  links: string;
  deadlines: {
    id: string,
    term: string,
    level: string,
    deadline: Date
  };
  image?: string;
}
const SearchCollegeOrUni: React.FC = () => {

  const [universitiesData, setuniversitiesData] = useState<University[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [addToDashboard,setAddToDashboard]=useState<University[]>([]);
  

  useEffect(() => {
    fetchData();
  }, []);


  async function fetchData() {
    try {
      const response = await fetch('http://localhost:9000/api/v1/universities');
      const universitiesData = await response.json();
      setuniversitiesData(universitiesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  const filtereduniversitiesData = universitiesData?.filter((university: University) =>
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
              id="search"
              className="w-full border-gray-600 py-2 px-2 focus:border-green-800 border outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span>Separate multiple search terms with a comma, e.g.: Kotebe, Addis Ababa</span>
          </div>
          <div>
            <div className="overflow-y-scroll">
              {filtereduniversitiesData?.map(university => (
                <Card
                  id={university?.id}
                  src={university.image}
                  title={university.name}
                  location={university.address}
                  key={university.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCollegeOrUni;
