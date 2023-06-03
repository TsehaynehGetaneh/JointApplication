import React from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

interface ButtonProps {
  children: React.ReactNode;
  showArrowDown: boolean;
  onClick: (id: string) => void;
  id: string;
}

const Button: React.FC<ButtonProps> = ({ children, showArrowDown, onClick, id }) => (
  <button onClick={() => onClick(id)} className="border-t border-blue-300 py-4 w-full flex items-center justify-between">
    {children}
    {showArrowDown ? (
      <IoIosArrowDown className="text-blue-600" />
    ) : (
      <IoIosArrowForward className="text-blue-600" />
    )}
  </button>
);

export default Button;
