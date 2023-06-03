import React, { useState } from 'react';
import Card from "./Card";


interface  College {
    id:string;
    name:string
    location:string;
    image?:string;
}

const colleges: College[] = [
  { id: 'hawassa', name: 'Hawassa University', location: 'Hawassa, Sidama, Ethiopia',image:'https://th.bing.com/th?q=Logo+of+Hawassa+University&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=ET&setlang=en&adlt=moderate&t=1&mw=247' },
  { id: 'jimaa', name: 'Jimma University', location: 'Jimma, Oromia, Ethiopia' ,image:'https://th.bing.com/th/id/OIP.KgdodRZx7wxyvFxml0b3EQAAAA?w=181&h=180&c=7&r=0&o=5&pid=1.7'},
  { id: 'bahirdar', name: 'Bahirdar University', location: 'Bahirdar, Amhara, Ethiopia' },
  { id: 'gondar', name: 'University of Gondar', location: 'Gondar, Amhara, Ethiopia' },
  { id: 'mekele', name: 'Mekelle University', location: 'Mekelle, Tigray, Ethiopia' },
];

const SearchCollegeOrUni: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  
  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-200 mr-5 ml-5 w-[80%] md:w-[1000px] border border-gray-500 min-h-[500px]">
      <div className="m-10">
        <div className="bg-white w-full border border-b-2 rounded-md">
          <div className="flex flex-col md:flex-row justify-between items-center p-6 border-b-2">
            <h3 className="text-gray-900 text-2xl">College Search</h3>
            <button className="text-gray-600 rounded-full px-3 py-1 border-2 border-gray-600 transform ease-in-out hover:border-gray-900 hover:shadow-lg hover:text-gray-900 hover:scale-110">Application Requirements</button>
          </div>
          <div className="flex flex-col mx-4 my -3 text-gray-700 gap-2 my-4">
            <label htmlFor="search">College or City Name</label>
            <input
              type="search"
              name="search"
              id="search"
              className="w-full border-gray-600 py-2 px-2 focus:border-green-800 border outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span>Separate multiple search terms with a comma, e.g.: Hawassa, hawassa</span>
          </div>
          <div>
            <div className="overflow-y-scroll">
              {filteredColleges.map(college => (
                <Card
                  id={college.id}
                  src={college.image}
                  title={college.name}
                  location={college.location}
                  key={college.id}
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
