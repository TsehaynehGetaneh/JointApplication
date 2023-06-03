'use client'

import Link from "next/link";
import React, {  ReactNode, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';



interface LeftProps{
    Children:ReactNode;
    title:string;
}



const Left:React.FC<LeftProps>=({Children,title})=> {
    const [showButtons, setShowButtons] = useState<{ Left: boolean }>({ Left: false })
    const [showForm, setShowForm] = useState(false);

    const handleClick = (id: keyof typeof showButtons) => {
        setShowButtons(prevState => (
            { ...prevState, [id]: !prevState[id] }
        ));
    };



    return (
        <div className="bg-gray-200 mr-5 ml-5 w-[1000px] border border-gray-500 min-h-[500px] text-gray-800">
            <div className="m-10">
                <div className="bg-white w-full border border-b-2 rounded-md">
                    <div className="flex gap-4 ">
                        <div className="flex flex-col gap-2 h-full bg-gray-300 w-[250px] ">
                            <div className="bg-blue-600 px-3 py-1  text-white text-xl">Common App</div>
                            <Link href='/common/profile' className="relative border-l-blue-600 border-l-[7px] text-left px-9 py-2 bg-gray-400 hover:bg-gray-600"  >
                                Profile
                            </Link>
                            <Link href='/common/family' className="relative border-l-blue-600 border-l-[7px] text-left px-9 py-2 bg-gray-400 hover:bg-gray-600"  >
                                Family
                            </Link>
                            <Link href='/common/education' className="relative border-l-blue-600 border-l-[7px] text-left px-9 py-2 bg-gray-400 hover:bg-gray-600"  >
                                Education
                            </Link>
                            <Link href='/common/testing' className="relative border-l-blue-600 border-l-[7px] text-left px-9 py-2 bg-gray-400 hover:bg-gray-600"  >
                                Testing
                            </Link>
                            <Link href='/common/activities' className="relative border-l-blue-600 border-l-[7px] text-left px-9 py-2 bg-gray-400 hover:bg-gray-600"  >
                                Activities
                            </Link>
                            <Link href='/common/writing' className="relative border-l-blue-600 border-l-[7px] text-left px-9 py-2 bg-gray-400 hover:bg-gray-600"  >
                                Writing
                            </Link>
                            <Link href='/' className="relative border-l-blue-600 border-l-[7px] text-left px-9 py-2 bg-gray-400 hover:bg-gray-600"  >
                                Courses & Grades
                                <p className="text-sm">{0} college(s) require</p>
                            </Link>
                        </div>
                        <div className="" >
                            <div className="flex justify-between p-6 border-b-2 ">
                                <h3 className="text-gray-900 text-2xl">{title}</h3>
                                <button className="text-gray-600 rounded-full px-3 py-1 border-2 border-gray-600 transform ease-in-out hover:border-gray-900 hover:shadow-lg hover:text-gray-900 hover:scale-110">Preview</button>
                            </div>
                            <button className="w-full bg-blue-600 px-2 py-2 text-white">
                                <Link onClick={() => setShowForm(!showForm)} href={`/common/${title}`} className="text-md font-bold mb-6 underline">{title}</Link>
                                {showForm ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </button>
                            {/* //other components rendered here */}
                            {Children} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Left;




