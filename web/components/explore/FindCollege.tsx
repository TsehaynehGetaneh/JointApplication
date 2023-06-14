import Image from "next/image";
import Link from "next/link";
import SearchButton from "../common/SearchButton";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const FindCollege: React.FC = () => {
  return (
    <div className="flex flex-col">
        <Navbar />

        {/* Search section */}
        <div className="w-full pt-40 bg-gray-300 flex-grow ">
            <div className="container mx-auto px-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
                    Explore more than 50 colleges on
                    <span className="text-blue-600"> #JointApplication</span>
                </h1>
                <SearchButton />
            </div>
        </div>
    </div>
  );
};

export default FindCollege;