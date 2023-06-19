import { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchBar: React.FC = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleClearSearch = () => {
    setShowSearch(false);
  };

  return (
    <div className="relative">
      {!showSearch ? (
        <FiSearch
          size={20}
          className="cursor-pointer"
          onClick={handleSearchClick}
        />
      ) : (
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border border-gray-300 rounded-full"
          />
          <FiX
            size={18}
            className="cursor-pointer ml-2"
            onClick={handleClearSearch}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
