import { University } from '@/types/university';
import Image from 'next/image';
import Link from 'next/link';

interface CollegeCardProps {
    college: University;
}
  
const CollegeCard:React.FC<CollegeCardProps>= ({ college })=>{
    return (
        <Link href={`/explore/${college._id}`} className="border border-gray-300 bg-white shadow-md rounded-md h-[350px] w-[250px] text-black  flex flex-col gap-10 cursor-pointer transition transform hover:scale-105 hover:z-10">
            <div className="flex" style={{ height: '60%' }}>
                <Image
                    width={350}
                    height={350}
                    src={college.images.campusGate.url}
                    alt={college.name}
                    objectFit="fill"
                    objectPosition="center"
                />
            </div>
            <div className="px-4">
                <h3 className="text-lg font-semibold mb-1 hover:underline transition ease-in-out hover:translate-x-1">
                    {college.name}
                </h3>
                <p className="text-sm text-gray-500">{college.address}</p>
            </div>
        </Link>
    );
}

export default CollegeCard;
