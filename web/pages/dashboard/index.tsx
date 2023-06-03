'use client'
import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react'
import { FaInfoCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdEdit, MdOutlineFactCheck } from 'react-icons/md';
import ApplicantNav from "@/components/ApplicantNav";

type ShowState = Record<string, boolean>

const Dashboard: React.FC<{}> = () => {

  const [showState, setShowState] = useState<ShowState>({})
  const [showDetails, setShowDetails] = useState(false)
  const [optional, setOptional] = useState(false)
  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }
  const toggleShow = (id: string) => {
    setShowState((prevStateShow) => ({
      ...prevStateShow, [id]: !prevStateShow[id]
    }))
  }


  return (
 
    <div className="flex min-h-screen flex-col items-center  p-4 sm:p-6 md:p-8 lg:p-12">
    <ApplicantNav />
    <div className="bg-gray-200 w-full sm:w-[90%] md:w-[80%] border border-gray-500 min-h-[500px]">
      <div className="m-4 sm:m-6 md:m-8 lg:m-10">
        <div className="bg-white w-full border border-b-2 rounded-md">
          <div className="flex justify-between p-4 sm:p-6 md:p-8 lg:p-10 border-b-2">
            <h3 className="text-gray-900 text-xl sm:text-2xl">Dashboard</h3>
            <button className="text-gray-600 rounded-full px-3 py-1 border-2 border-gray-600 transform ease-in-out hover:border-gray-900 hover:shadow-lg hover:text-gray-900 hover:scale-110">
              Application Requirements
            </button>
          </div>
          <div>
            <div className="relative border bg-gray-200 gap-2 flex my-4 mx-6 sm:mx-8 md:mx-10 lg:mx-12 border-r-2">
              <Image
                className="border-r-2"
                height={250}
                width={100}
                alt="college-logo"
                src="https://th.bing.com/th?q=Logo+of+Hawassa+University&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=ET&setlang=en&adlt=moderate&t=1&mw=247"
              />
              <div className="absolute right-0 top-3">
                <div className="flex gap-3">
                  <Link href="#" className="group">
                    <FaInfoCircle className="text-gray-700 hover:text-gray-900 text-lg cursor-pointer border-b-0 border-transparent" />
                    <span className="bg-gray-900 mt-2 text-white hidden group-hover:block border-gray-600 border rounded-md px-2 py-1 absolute z-10 left-1/2 transform -translate-x-1/2 tooltip whitespace-nowrap">
                      College info
                    </span>
                  </Link>
                  <Link href="#" className="group">
                    <FaTimesCircle className="text-gray-700 hover:text-red-600 text-lg cursor-pointer border-b-0 border-transparent" />
                    <span className="bg-gray-900 mt-2 text-white hidden group-hover:block border-gray-600 border rounded-md px-2 py-1 absolute z-10 -left-1/2 transform translate-x-1/2 tooltip">
                      Remove
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex justify-content-end">
                <div className="flex flex-col gap-2">
                  <Link href={'/hawassa'} className="text-lg sm:text-xl hover:underline text-blue-700 font-bold">
                    Hawassa University
                  </Link>
                  <Link href={'/'} className="underline text-blue-700 text-xs sm:text-sm">
                    Add your term or admission plan
                  </Link>
                  <span className="text-gray-900">
                    <MdEdit className="inline text-lg sm:text-xl" /> Application - In Progress
                  </span>
                </div>
              </div>
            </div>
            <button onClick={toggleDetails} className="w-full text-gray-900 bg-gray-300 p-2">
              {showDetails ? 'Hide details' : 'Show more details'}
              {showDetails ? <IoIosArrowUp className="text-blue-600" /> : <IoIosArrowDown className="text-blue-600" />}
            </button>
            {showDetails && (
              //  Add additional details here
              <div className="bg-gray-200 p-2 text-gray-950">
                <p className="font-bold">Application Status</p>
                <ul className="list-none mt-2">
                  <li>
                    <MdEdit className="inline text-lg text-indigo-700" />{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      Common App – In progress
                    </a>
                  </li>
                  <li>
                    <MdEdit className="inline text-lg text-indigo-700" />{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      Questions – In progress
                    </a>
                  </li>
                  <li>
                    <MdEdit className="inline text-lg text-indigo-700" />{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      Recommenders and FERPA – In progress
                    </a>
                  </li>
                </ul>
                <p className="font-bold mt-4">Writing Requirements</p>
                <ul className="list-none mt-2">
                  <li>
                    <Link href="/" className="underline text-indigo-800">
                      Common App Personal Essay - Optional
                    </Link>
                  </li>
                  <div className="relative group">
                    {optional ? (
                      <MdOutlineFactCheck className="text-yellow-700 text-lg hover:opacity-50" />
                    ) : (
                      <FaExclamationCircle className="text-red-700 text-lg hover:opacity-50" />
                    )}
                    <div className="has-tooltip">
                      <span className="tooltip hidden hover:block rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8">
                        {optional ? 'Optional' : 'Required'}
                      </span>
                    </div>
                  </div>
                  <li>College Questions</li>
                  <div className="relative">
                    <FaExclamationCircle className="text-red-700 text-lg hover:opacity-50" />
                    <span className="bg-gray-900 mt-2 text-white group-hover:block border-gray-600 border rounded-md px-2 py-1 absolute z-10 -left-1/2 transform translate-x-1/2 tooltip">
                      Required
                    </span>
                  </div>
                  <ul className="list-none mt-2">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Additional Details
                      </a>
                    </li>
                  </ul>
                  <li>Writing Supplement</li>
                  <ul className="list-none mt-2">
                    <li>This college does not use a writing supplement for any additional writing requirements.</li>
                  </ul>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Dashboard