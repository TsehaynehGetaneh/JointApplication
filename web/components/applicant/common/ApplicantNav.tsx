import Link from "next/link";
import { BsPersonFill } from "react-icons/bs";
import React, { useState } from "react";

const ApplicantNav: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");


  const handleClick = (id: string) => {
    setActiveLink(id);
  };

  return (
    <>
      <div className="flex justify-between items-center md:flex-row md:items-center 
      space-y-2 md:space-y-0 md:space-x-2">
        <div className="ml-8">
          <Link href="/">
            <span className="flex items-center flex-shrink-0 text-black cursor-pointer">
              <span className="font-semibold text-xl tracking-tight hover:text-green-800">
                Joint
                <span className="text-blue-500">Application</span>
              </span>
            </span>
          </Link>
        </div>

        {/* Account Information */}
         <BsPersonFill className="md:hidden block text-lg"/> : 
        <div className="text-sm hidden md:flex rounded p-2  space-x-2 items-center border-4 border-blue-500">

          <BsPersonFill className="h-5 w-5 text-gray-600 text-lg" />
          <div>
            <div className="font-bold">Welcome, Ebisa!</div>
            <div>CAID 36567844</div>
            <div>mststy8@gmail.com</div>
          </div>
          <button className="text-white bg-black rounded-full px-3 py-1 border-2 
          border-gray-600 transform ease-in-out hover:shadow-lg hover:scale-110">
            Sign Out
          </button>
        </div>
      </div>

      <div className="flex flex-col ml-5 md:flex-row justify-between md:items-center space-y-2 
      md:space-y-0 md:space-x-4 border-b-4 border-blue-400 text-sm md:text-xl">
        <div className="flex justify-center md:justify-start space-x-1  md:space-x-2">
          <Link
            href={"/dashboard"}
            className={`${activeLink === "dashboard" ? "bg-blue-500" : "bg-gray-600"
              } text-white text-sm md:text-lg px-2 py-1 rounded hover:bg-gray-500 
            whitespace-nowrap`}
            onClick={() => handleClick("dashboard")}
          >
            Dashboard
          </Link>
          <Link
            href={"/my-universities"}
            className={`${activeLink === "mycolleges" ? "bg-blue-500" : "bg-gray-600"
              } text-white text-sm md:text-lg px-2 py-1 rounded hover:bg-gray-500 
            whitespace-nowrap`}
            onClick={() => handleClick("mycolleges")}
          >
            My Colleges
          </Link>
          <Link
            href={"/joint-app"}
            className={`${activeLink === "joint-app" ? "bg-blue-500" : "bg-gray-600"
              } text-white text-sm md:text-lg px-2 py-1 rounded hover:bg-gray-500 
            whitespace-nowrap`}
            onClick={() => handleClick("joint-app")}
          >
            Joint Application
          </Link>
          <Link
            href={"/search"}
            className={`${activeLink === "search" ? "bg-blue-500" : "bg-gray-600"
              } text-white text-sm md:text-lg px-2 py-1 rounded hover:bg-gray-500 
            whitespace-nowrap`}
            onClick={() => handleClick("search")}
          >
            College Search
          </Link>
          <Link
            href={"/finaid"}
            className={`${activeLink === "finaid" ? "bg-blue-500" : "bg-gray-600"
              } text-white text-sm md:text-lg px-2 py-1 rounded hover:bg-gray-500 
            whitespace-nowrap`}
            onClick={() => handleClick("finaid")}
          >
            Financial Aid Resources
          </Link>
        </div>
      </div>
    </>
  );
};

export default ApplicantNav;
