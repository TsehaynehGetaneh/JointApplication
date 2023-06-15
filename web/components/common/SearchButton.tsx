import { FaSearch, FaTimes } from "react-icons/fa";
import { useState } from "react";

interface SearchButtonProps {
  onSearchValueChange: (value: string) => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onSearchValueChange }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchValueChange(value);
  };

  const handleClear = () => {
    setSearchValue("");
    onSearchValueChange("");
  };

  return (
    <div className="flex items-center justify-center mb-12">
      <div className="relative w-4/5">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter college name"
          value={searchValue}
          onChange={handleChange}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch />
        </div>
        {searchValue && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={handleClear}
          >
            <FaTimes />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchButton;
