import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { FaInfoCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdEdit, MdOutlineFactCheck } from 'react-icons/md';

type UniversityCardProps = {
    id:string;
    showDetails: boolean;
    toggleDetails: () => void;
    optional: boolean;
    imageSrc: string;
    altText: string;
    collegeName:string;
    admissionPlan:string;
}

const UniversityCard: React.FC<UniversityCardProps> = ({id,collegeName, altText, imageSrc, showDetails, toggleDetails, optional }) => {
    const [showApplicationStatus, setShowApplicationStatus] = useState(false);
    const [showWritingRequirements, setShowWritingRequirements] = useState(false);

    const toggleApplicationStatus = () => {
        setShowApplicationStatus(!showApplicationStatus);
    };

    const toggleWritingRequirements = () => {
        setShowWritingRequirements(!showWritingRequirements);
    };

    return (
        <div>
            <div className="relative border bg-gray-200 gap-2 flex my-4 mx-6 sm:mx-8 md:mx-10 lg:mx-12 border-r-2">
                <Image
                    className="border-r-2"
                    height={250}
                    width={100}
                    alt={altText}
                    src={imageSrc}
                />
                <div className="absolute right-0 top-3">
                    <div className="flex gap-3">
                        <Link href="#" className="group">
                            <FaInfoCircle className="text-gray-700 hover:text-gray-900 text-lg cursor-pointer border-b-0 
                            border-transparent" />
                            <span className="bg-gray-900 mt-2 text-white hidden group-hover:block border-gray-600 border 
                            rounded-md px-2 py-1 absolute z-10 left-1/2 transform -translate-x-1/2 tooltip whitespace-nowrap">
                                University info
                            </span>
                        </Link>
                        <Link href="#" className="group">
                            <FaTimesCircle className="text-gray-700 hover:text-red-600 text-lg cursor-pointer border-b-0 
                            border-transparent" />
                            <span className="bg-gray-900 mt-2 text-white hidden group-hover:block border-gray-600 border 
                            rounded-md px-2 py-1 absolute z-10 -left-1/2 transform translate-x-1/2 tooltip">
                                Remove
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-content-end">
                    <div className="flex flex-col gap-2">
                        <Link href={`${collegeName}`} className="text-lg sm:text-xl hover:underline text-blue-700 font-bold">
                            {collegeName}
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
                <div className="bg-gray-200 p-2 text-gray-950">
                    <p className="font-bold">Application Status</p>
                    <ul className="list-none mt-2">
                        <li>
                            <MdEdit className="inline text-lg text-indigo-700" />{' '}
                            <a href="#" className="text-blue-600 hover:underline">
                                JointApplication App – In progress
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
                                JointApplication App Personal Essay - Optional
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
                        <li>University Questions</li>
                        <div className="relative">
                            <FaExclamationCircle className="text-red-700 text-lg hover:opacity-50" />
                            <span className="bg-gray-900 mt-2 text-white group-hover:block border-gray-600 border rounded-md 
                            px-2 py-1 absolute z-10 -left-1/2 transform translate-x-1/2 tooltip">
                                Required
                            </span>
                        </div>
                        {showApplicationStatus && (
                            <ul className="list-none mt-2">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">
                                        Additional Details
                                    </a>
                                </li>
                            </ul>
                        )}
                        <li>Writing Supplement</li>
                        {showWritingRequirements && (
                            <ul className="list-none mt-2">
                                <li>This University does not use a writing supplement for any additional writing requirements.</li>
                            </ul>
                        )}
                    </ul>
                    {showDetails && (
                        <div>
                            <button onClick={toggleApplicationStatus} className="mt-4 underline text-blue-600">
                                {showApplicationStatus ? 'Hide' : 'Show'} Application Status
                            </button>
                            <button onClick={toggleWritingRequirements} className="mt-4 underline text-blue-600">
                                {showWritingRequirements ? 'Hide' : 'Show'} Writing Requirements
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default UniversityCard;
