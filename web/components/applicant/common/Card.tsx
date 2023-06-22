import React, { useState, useEffect } from 'react';
import { FaTimesCircle, FaPlusCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { University } from '@/types/university';
import { useAddCollegeMutation, useRemoveCollegeMutation } from '@/store/my-college/my-college-api';

interface CardProps {
  college: University;
}

const Card: React.FC<CardProps> = ({ college }) => {
  const [buttonsState, setButtonsState] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const savedButtonsState = localStorage.getItem('buttonsState');
    if (savedButtonsState) {
      setButtonsState(JSON.parse(savedButtonsState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('buttonsState', JSON.stringify(buttonsState));
  }, [buttonsState]);

  const handleClick = (id: string) => {
    setButtonsState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const showButtons = buttonsState[college._id];

  const [addCollege, addCollegeResult] = useAddCollegeMutation();
  const [removeCollege, removeCollegeResult] = useRemoveCollegeMutation();

  useEffect(() => {
    if (addCollegeResult.isSuccess) {
      setButtonsState((prevState) => ({
        ...prevState,
        [college._id]: true,
      }));
    }
  }, [addCollegeResult.isSuccess, college._id]);

  useEffect(() => {
    if (removeCollegeResult.isSuccess) {
      setButtonsState((prevState) => ({
        ...prevState,
        [college._id]: false,
      }));
    }
  }, [removeCollegeResult.isSuccess, college._id]);

  const handleAddCollege = async (collegeId: string) => {
    try {
      await addCollege({ collegeId });
    } catch (error) {
      console.error('Error adding college:', error);
    }
  };

  const handleRemoveCollege = async (collegeId: string) => {
    try {
      await removeCollege({ collegeId });
    } catch (error) {
      console.error('Error removing college:', error);
    }
  };

  return (
    <div className="relative border bg-gray-200 gap-2 flex md:flex-row flex-col my-5 ml-4 mr-4 border-r-2">
      {/* Logo */}
      <Image
        className="border-r-2"
        height={250}
        width={100}
        alt="college-logo"
        src={college.images.logo.url}
      />
      {/* Name */}
      <div className="flex justify-between w-full items-center text-gray-500">
        <div className="flex flex-col gap-2">
          <Link href={`/explore/${college._id}`} className="text-xl hover:underline text-blue-700 font-bold">
            {college.name}
          </Link>
          <p>{college.address}</p>
        </div>
        {/* Buttons */}
        {!showButtons ? (
          <div>
            <button
              className="rounded-full border-2 text-blue-700 border-blue-700 bg-white px-2 over:scale-y-120 hover:shadow-xl"
              onClick={() => handleAddCollege(college._id)}
              disabled={addCollegeResult.isLoading}
            >
              <span className="flex gap-2 items-center">
                <FaPlusCircle />
                Add
              </span>
            </button>
          </div>
        ) : (
          <div>
            <button
              className="rounded-full border-2 text-blue-700 border-blue-700 bg-white px-2 over:scale-y-120 hover:shadow-xl"
              onClick={() => handleRemoveCollege(college._id)}
              disabled={removeCollegeResult.isLoading}
            >
              <span className="flex gap-2 items-center">
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

export default Card;
