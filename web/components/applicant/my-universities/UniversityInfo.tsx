import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

interface UniversityInfoProps {
  name: string;
  phone: string;
  email: string;
  address: string;
  logoSrc: string;
  websiteUrl: string;
  admissionsUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
  youtubeUrl: string;
  applicationDeadlines: { type: string; date: string }[];
  applicationFees: { type: string; amount: string }[];
  recommendations: string[];
  savesSchoolForms: boolean;
  additionalInformation: string;
  writingRequirement: boolean;
}

const UniversityInfo: React.FC<UniversityInfoProps> = ({
  name,
  phone,
  email,
  address,
  logoSrc,
  websiteUrl,
  admissionsUrl,
  facebookUrl,
  instagramUrl,
  twitterUrl,
  youtubeUrl,
  applicationDeadlines,
  applicationFees,
  recommendations,
  savesSchoolForms,
  additionalInformation,
  writingRequirement,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow text-gray-800">
      <h1 className="text-4xl font-bold border-b-2 pb-4">{name}</h1>
      <div className="flex items-center justify-between mt-4">
        <div className="my-4 flex flex-col space-y-2">
          <h2 className="text-lg font-semibold">Contact Info</h2>
          <div>
            <span className="">Phone: </span>
            <Link href={`/phone/${phone}`} className="text-blue-600 underline">
              {phone}
            </Link>
          </div>
          <div className="">
            <span>Email: </span>
            <Link href={`/email/${email}`} className="text-blue-600 underline">
              {email}
            </Link>
          </div>
          <p>{address}</p>
        </div>
        <div className="rounded-md p-2 border">
          <Image src={logoSrc} alt={`${name} logo`} className="" width={200} height={150} />
        </div>
      </div>

      <div className="my-4 flex space-x-5">
        <h2 className="font-semibold mr-2">Links:</h2>
        <p>
          <Link href={websiteUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            University Website
          </Link>
        </p>
        <p>
          <Link href={admissionsUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            Admissions Office
          </Link>
        </p>
      </div>

      <div className="my-4 flex space-x-5">
        <Link href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center underline">
          <FaFacebook className="mr-2 text-xl" />
        </Link>

        <Link href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center underline">
          <FaInstagram className="mr-2 text-xl" />
        </Link>

        <Link href={twitterUrl} target="_blank" rel="noopener noreferrer" className="flex items-center underline">
          <FaTwitter className="mr-2 text-xl" />
        </Link>

        <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center underline">
          <FaYoutube className="mr-2 text-xl" />
        </Link>
      </div>

      <div className="my-4 border bg-slate-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-950">Application Deadlines - Fall 2023</h2>
        {applicationDeadlines.map((deadline, index) => (
          <div key={index}>
            <h3 className="font-semibold">{deadline.type}</h3>
            <p>{deadline.date}</p>
          </div>
        ))}
      </div>

      <div className="my-4 flex flex-col space-y-2">
        <h2 className="text-lg font-semibold">Application Information</h2>
        <h3 className="font-semibold">Application Fees:</h3>
        {applicationFees.map((fee, index) => (
          <p key={index} className="ml-4">
            {fee.type} - {fee.amount}
          </p>
        ))}
        <h3 className="font-semibold">Recommendations:</h3>
        {recommendations.map((recommendation, index) => (
          <p key={index} className="ml-4">
            {recommendation}
          </p>
        ))}
        <h3 className="font-semibold">Saves school forms after matriculation:</h3>
        <p className="ml-4">{savesSchoolForms ? 'Yes' : 'No'}</p>
        <h3 className="font-semibold">Additional Information:</h3>
        <p className="ml-4">{additionalInformation}</p>
      </div>

      <div className="my-4">
        <h2 className="text-lg font-semibold">Writing Requirements</h2>
        {writingRequirement ? (
          <Link href="/joint-app/writing" className="text-blue-600 mt-2 underline font-semibold">
            Joint App Personal Essay:
          </Link>
        ) : (
          <p className="ml-4 mt-2">Not Required</p>
        )}
      </div>

      <div className="my-4">
        <button className="rounded-full border-2 border-red-500 px-10 py-2 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-1 hover:translate-y-1 hover:translate-x-1 hover:-gray-500">
          Remove
        </button>
      </div>
    </div>
  );
};

export default UniversityInfo;
