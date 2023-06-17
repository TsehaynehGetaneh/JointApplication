import { University } from '@/types/university';
import Image from "next/image";
import Link from 'next/link';

interface CollgeDetailProps {
  college: University; 
}

const CollgeDetail: React.FC<CollgeDetailProps> = ({ college }) => {
    

  return (
    <div>
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-full h-screen text-black">
                <div className="relative w-full h-full">
                    <Image
                    src={college.images.insideCampus.url }
                    alt="Your Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="w-full h-full"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                </div>
                <div className="w-full absolute top-0 left-0 flex flex-col items-start justify-center h-full p-8 text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 w-full sm:w-1/2">
                        {college.name}
                    </h1>
                    <Link
                    href="/support/recommender-guide"
                    className="bg-white text-black py-4 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-300"
                    >
                    Apply now
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CollgeDetail;