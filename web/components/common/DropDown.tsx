import { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

interface LinkItem {
  text: string;
  href: string;
}

interface DropdownProps {
  links: LinkItem[];
  buttonText: string;
  href: string;
}

const Dropdown: React.FC<DropdownProps> = ({ links, buttonText, href }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="text-lg hover:text-blue-800 hover:underline focus:outline-none flex items-center"
        onClick={toggleDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>{buttonText}</span>
        <FiChevronDown
          className={`ml-1 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      {isOpen && (
        <div
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow mt-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-2 text-sm text-gray-700">
            {links.map((link: LinkItem) => (
              <li key={link.href}>
                <Link href={link.href} passHref className="block px-4 py-2 hover:bg-gray-100">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
