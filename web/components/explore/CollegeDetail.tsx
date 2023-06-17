import { University } from '@/types/university';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { FiHome } from 'react-icons/fi';

interface CollgeDetailProps {
  college: University; 
}

const CollgeDetail: React.FC<CollgeDetailProps> = ({ college }) => {
  const [showFullAbout, setShowFullAbout] = useState(false);

  const toggleAboutSection = () => {
    setShowFullAbout(!showFullAbout);
  };

  return (
    <div className="min-h-screen">
      <div className="relative">
        {/* Image Section */}
        <div className="relative w-screen h-screen opacity-100">
          <Image
            src={college.images.insideCampus.url}
            alt="Your Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full"
          />
        </div>
        {/* Text Section */}
        <div className="absolute top-0 left-0 flex flex-col items-start justify-center h-full p-8 text-white lg:w-1/2">
          <h1 className="text-4xl text-[#00a6fb] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12">
            {college.name}
          </h1>
          <Link href="/sign-in" className="bg-white text-black py-4 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-300">
            Apply now
          </Link>
        </div>
      </div>

      {/* University Information Section */}
      <div className="grid grid-cols-12 gap-8 px-8 bg-white text-black mb-8">
        <div className="col-span-7">
          {/* Back to home and explore section */}
          <div className="flex items-center justify-start p-4 gap-5 font-bold text-3xl text-blue-600">
            <Link href="/">
              <FiHome className="mr-2" />
            </Link>
            <Link href="/explore" className="flex items-center">
              <span className="mr-2">Explore</span>
            </Link>
            <h1>{college.name}</h1>
          </div>
          <p className={`text-lg ${showFullAbout ? '' : 'overflow-hidden line-clamp-3'} w-60%`}>
            {college.additionalInfo}
          </p>
          {!showFullAbout && (
            <button
              onClick={toggleAboutSection}
              className="text-[#00a6fb] mt-2 cursor-pointer focus:outline-none"
            >
              Read More +
            </button>
          )}
        </div>
        <div className="col-span-5 flex items-center justify-end pr-40">
          <div className="w-32 h-32">
            <Image
              src={college.images.logo.url}
              alt="College Logo"
              layout="responsive"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>

      {/* Academic Programs Section */}
      <div className="grid grid-cols-6 gap-4 px-8 bg-white text-black mb-8">
        <div className="col-span-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Academic Programs</h2>
          <ul>
            {college.academicPrograms.map((program, index) => (
              <li key={index} className="list-disc ml-6">
                {program.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Section */}
      <div className="px-8 bg-white text-black">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Visit Us</h1>
        <p className="text-lg">
          We encourage all students to visit our official website to know more about us, please visit our{' '}
          <Link href={college.links} className="text-blue-600">
            #{college.name} website 
          </Link>
           .
        </p>
      </div>
    </div>
  );
};

export default CollgeDetail;
