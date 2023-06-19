import Image from "next/image";
import Link from "next/link";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Support: React.FC = () => {
  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center">
            {/* Image and Text Section */}
            <div className="relative w-full h-screen text-black">
                <div className="relative w-full h-full">
                    <Image
                    src="/img/support/support.jpg"
                    alt="Your Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="w-full h-full"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                </div>
                <div className="w-full absolute top-0 left-0 flex flex-col items-start justify-center h-full p-8 text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 w-full sm:w-1/2">
                        Support and Counseling
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6 w-full sm:w-1/2 md:w-1/3">
                        This year, you’ll support many students applying to college. You have their backs. That’s why we have yours.
                    </p>
                    <Link
                    href="/support/recommender-guide"
                    className="bg-white text-black py-4 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-300"
                    >
                    Visit our support guide
                    </Link>
                </div>
            </div>
        </div>

        <div className="bg-white my-20"></div>

        {/* visit news and updates section */}
        <div className=" text-black bg-gray-100 flex flex-col items-center justify-center py-20 mt-40 mb-40">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-2/3 px-8">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                        News and Updates
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-12">
                        Stay informed and updated about our university and the application process. That’s why we post the latest news and updates on our blog regularly. You can find useful tips, important deadlines, success stories and more on our blog. Don’t miss any of our posts by visiting our blog often.
                    </p>
                    <Link
                        href="/support/blog"
                        className="bg-gray-300 text-black py-4 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-400"
                    >
                        Visit our news and updates
                    </Link>
                </div>
            </div>
        </div>

        {/* Footer section */}
        <Footer />
    </div>
  );
};

export default Support;