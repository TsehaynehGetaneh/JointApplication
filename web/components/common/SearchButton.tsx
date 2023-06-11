import { FaSearch } from "react-icons/fa";

const SearchButton: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-4/5">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter college name"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchButton;
