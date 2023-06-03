'use client'

import Link from "next/link";
import React, { useState } from "react";

const ApplicantNav: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (id: string) => {
    setActiveLink(id);
  };

  return (
    <div className="flex space-x-1 border-b-4 border-blue-400 justify-start text-sm md:text-lg">
      <Link
        href={"/dashboard"}
        className={`${
          activeLink === "dashboard" ? "bg-blue-500" : "bg-gray-900"
        } text-white text-md px-3 py-2 rounded hover:bg-gray-500`}
        onClick={() => handleClick("dashboard")}
      >
        Dashboard
      </Link>
      <Link
        href={"/mycollegesoruniversities"}
        className={`${
          activeLink === "mycolleges" ? "bg-blue-500" : "bg-gray-900"
        } text-white text-md px-3 py-2 rounded hover:bg-gray-500`}
        onClick={() => handleClick("mycolleges")}
      >
        My colleges
      </Link>
      <Link
        href={"/common"}
        className={`${
          activeLink === "common" ? "bg-blue-500" : "bg-gray-900"
        } text-white text-md px-3 py-2 rounded hover:bg-gray-500`}
        onClick={() => handleClick("common")}
      >
        Common App
      </Link>
      <Link
        href={"/search"}
        className={`${
          activeLink === "search" ? "bg-blue-500" : "bg-gray-900"
        } text-white text-md px-3 py-2 rounded hover:bg-gray-500`}
        onClick={() => handleClick("search")}
      >
        College Search
      </Link>
      <Link
        href={"/finaid"}
        className={`${
          activeLink === "finaid" ? "bg-blue-500" : "bg-gray-900"
        } text-white text-md px-3 py-2 rounded hover:bg-gray-500`}
        onClick={() => handleClick("finaid")}
      >
        Financial Aid Resources
      </Link>
    </div>
  );
};

export default ApplicantNav;
