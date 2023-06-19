import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

interface LinkItem {
  text: string;
  href: string;
}

interface DropdownProps {
  links: LinkItem[];
  buttonText: string;
}

const Dropdown: React.FC<DropdownProps> = ({ links, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuTimeout, setMenuTimeout] = useState<number | undefined>(undefined);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
    clearTimeout(menuTimeout);
  };

  // dropdown delay time default added
  const handleMouseLeave = () => {
    clearTimeout(menuTimeout);

    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 300);

    setMenuTimeout(timeout as unknown as number);
  };


  const handleItemClick = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-lg hover:text-blue-800 hover:underline focus:outline-none flex items-center">
        <span>{buttonText}</span>
        <FiChevronDown
          className={`ml-1 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow mt-2">
          <ul className="py-2 text-sm text-gray-700">
            {links.map((link: LinkItem) => (
              <li key={link.href}>
                <Link href={link.href} passHref className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleItemClick}>
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