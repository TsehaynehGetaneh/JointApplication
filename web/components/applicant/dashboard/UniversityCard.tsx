import Link from "next/link";
import Image from "next/image";
import { FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import { MdEdit, MdNoEncryptionGmailerrorred } from 'react-icons/md';
import { UniversityCardProps } from "@/types/university";
import { useRemoveCollegeMutation } from "@/store/my-college/my-college-api";
import { useState } from "react";
import router from "next/router";

const UniversityCard: React.FC<UniversityCardProps> = ({collegeId,collegeName, altText, imageSrc}) => {
 
    const [removeCollege]=useRemoveCollegeMutation()

    const handleRemoveCollge=async()=>{
        try {
        await
         removeCollege({collegeId})
            
        } catch (error) {
            console.error(error)
        }
    }

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
                        <Link href={`explore/${collegeId}`} className="group">
                            <FaInfoCircle className="text-gray-700 hover:text-gray-900 text-lg cursor-pointer border-b-0 
                            border-transparent" />
                            <span className="bg-gray-900 mt-2 text-white hidden group-hover:block border-gray-600 border 
                            rounded-md px-2 py-1 absolute z-10 left-1/2 transform -translate-x-1/2 tooltip whitespace-nowrap">
                                University info
                            </span>
                        </Link>
                        <Link href="#" className="group " onClick={handleRemoveCollge} data-testid="remove-college">
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
        </div>
    );
}

export default UniversityCard;
