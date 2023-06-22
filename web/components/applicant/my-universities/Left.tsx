import { useState } from 'react';

type ButtonItem = {
  label: string;
  onClick?: () => void;
};

type LeftProps = {
  label: string;
  buttons: ButtonItem[];
};

const Left: React.FC<LeftProps> = ({ label, buttons }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (label: string): void => {
    setActiveButton(activeButton === label ? null : label);
  };

  return (
    <div className="mb-1">
      <button
        className="bg-gray-600 mb-1 px-4 py-2 w-[200px] text-white border-0 border-transparent hover:border-l-4 hover:border-l-blue-600 shadow hover:bg-gray-800 focus:outline-none focus:bg-blue-600"
        onClick={() => handleClick(label)}
      >
        {label}
      </button>
      {activeButton === label && (
        <div className="flex flex-col space-y-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className="bg-gray-600 w-[200px] px-4 py-2 text-white border-0 
                border-transparent hover:border-l-4 hover:border-l-blue-600 shadow 
                hover:bg-gray-800 focus:outline-none focus:bg-blue-600"
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Left;
