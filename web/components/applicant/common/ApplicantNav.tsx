import Link from "next/link";
import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";


const ApplicantNav: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (id: string) => {
    setActiveLink(id);
  };

  return (
    <>
      <div className="flex justify-between items-center md:flex-row mb-10 md:items-center space-y-2 md:space-y-0 md:space-x-2">    
          <Link href="/" className="ml-8">
            <span className="flex items-center flex-shrink-0 text-black cursor-pointer">
              <span className="font-semibold text-xl tracking-tight hover:text-green-800">
                Joint
                <span className="text-blue-500">Application</span>
              </span>
            </span>
          </Link>
        {/* Account Information */}
        <ProfileInfo />
      </div>

      <div className="flex flex-col ml-5 md:flex-row justify-between md:items-center space-y-2 md:space-y-0 md:space-x-4 border-b-4 border-blue-400 text-sm md:text-xl">
        <div className="flex justify-center md:justify-start space-x-1 md:space-x-2">
          <Link
            href={"/dashboard"}
            className={`${activeLink === "dashboard" ? "bg-blue-500" : "bg-gray-600"
              } text-white text-sm md:text-lg px-2 py-1 rounded hover:bg-gray-500 whitespace-nowrap`}
            onClick={() => handleClick("dashboard")}
          >
            Dashboard
          </Link>
          <Link
            href={"/my-universities"}
            className={`${activeLink === "mycolleges" ? "bg-blue-500" : "bg-gray-600"
              } text-white text-sm md:text-lg px-2 py-1 rounded hover:bg-gray-500 whitespace-nowrap`}
            onClick={() => handleClick("mycolleges")}
          >
            My Colleges
          </Link>
          <Link
            href={"/joint-app"}
            className={`${activeLink === "joint-app" ? "bg-blue-500" : "bg-gray-600"
              } text-white text-sm md:text-lg px-2 py-1 rounded hover:bg-gray-500 whitespace-nowrap`}
            onClick={() => handleClick("joint-app")}
          >
            Joint Application
          </Link>
          <Link
            href={"/search"}
            className={`${activeLink === "search" ? "bg-blue-500" : "bg-gray-600"
              } text-white text-sm md:text-lg px-2 py-1 rounded hover:bg-gray-500 whitespace-nowrap`}
            onClick={() => handleClick("search")}
          >
            College Search
          </Link>
          <Link
            href={"/finaid"}
            className={`${activeLink === "finaid" ? "bg-blue-500" : "bg-gray-600"
              } text-white text-sm md:text-lg px-2 py-1 rounded hover:bg-gray-500 whitespace-nowrap`}
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
