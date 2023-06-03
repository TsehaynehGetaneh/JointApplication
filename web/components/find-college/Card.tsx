import React, { useState } from 'react'
import { FaTimesCircle, FaPlusCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    id: string;
    src: string;
    title: string;
    location: string;
  }
  
const Card: React.FC<CardProps> = ({ id, src, location, title }) => {
    const [buttonsState, setButtonsState] = useState<{ [key: string]: boolean }>({});

    const handleClick = (id: string) => {
        setButtonsState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const showButtons = buttonsState[id];
    return (
        <div className="relative border bg-gray-200 gap-2 flex md:flex-row flex-col  my-5 ml-4 mr-4 border-r-2 ">
            {/* Logo */}
            <Image
                className="border-r-2"
                height={250}
                width={100}
                alt="college-logo"
                src={src}
            />
            {/* Name */}
            <div className="flex justify-between w-full items-center text-gray-500">
                <div className="flex flex-col gap-2">
                    <Link href={'/hawassa'} className="text-xl hover:underline text-blue-700 font-bold">{title}</Link>
                    <p>{location}</p>
                </div>
                {/* Buttons */}
                {showButtons ? (
                    <div>
                        <button className="rounded-full border-2 text-blue-700 border-blue-700 bg-white px-2 over:scale-y-120 hover:shadow-xl" onClick={() => handleClick(id)}>
                            <span className='flex gap-2 items-center '>
                                <FaPlusCircle />
                                Add
                            </span>
                        </button>
                    </div>
                ) : (
                    <div>
                        <button className="rounded-full border-2 text-blue-700 border-blue-700 bg-white px-2 over:scale-y-120 hover:shadow-xl" onClick={() => handleClick(id)}>
                            <span className='flex gap-2 items-center '>
                                <FaTimesCircle />
                                Remove
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card