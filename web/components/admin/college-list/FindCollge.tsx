import SearchButton from "@/components/common/SearchButton";

interface FindCollegeProps {
  onSearchValueChange: (value: string) => void;
}

const FindCollege: React.FC<FindCollegeProps> = ({ onSearchValueChange }) => {
  return (
    <div className="flex flex-col">
      {/* Search section */}
      <div className="w-full pt-40 bg-gray-300 flex-grow">
        <div className="container mx-auto px-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
            Explore Collges on
            <span className="text-blue-600"> #JointApplication</span>
          </h1>
          <SearchButton onSearchValueChange={onSearchValueChange} />
        </div>
      </div>
    </div>
  );
};

export default FindCollege;
