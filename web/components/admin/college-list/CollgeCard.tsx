import { University } from '@/types/university';
import Image from 'next/image';
import Link from 'next/link';
import { useDeleteCollegeMutation } from '@/store/college/college-api';

interface CollegeCardProps {
  college: University;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college }) => {
  const [deleteCollege] = useDeleteCollegeMutation();

  const handleDelete = async () => {
    try {
      await deleteCollege(college._id).unwrap();
    } catch (error) {
      console.error("Error occurred while deleting college:", error);
    }
  };

  return (
    <div
      className={`border border-gray-300 bg-white shadow-md rounded-md h-[350px] w-[250px] text-black flex flex-col gap-10 cursor-pointer transition transform hover:scale-105 hover:z-10 `}
      style={{ position: 'relative' }}
    >
      <Link href={`/explore/${college._id}`} style={{ height: '60%' }}>
        <Image
          width={350}
          height={350}
          src={college.images.campusGate.url}
          alt={college.name}
          objectFit="fill"
          objectPosition="center"
        />
      </Link>
      <div className="px-4">
        <h3 className="text-lg font-semibold mb-1 hover:underline transition ease-in-out hover:translate-x-1">
          {college.name}
        </h3>
        <p className="text-sm text-gray-500">{college.address}</p>
      </div>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded-md absolute bottom-2 right-2"
        onClick={handleDelete}
      >
            Delete
      </button>
    </div>
  );
};

export default CollegeCard;