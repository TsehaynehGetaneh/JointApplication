import Image from "next/image";
import Link from "next/link";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import PhaseCardList from "./PhaseCardList";

const Application: React.FC = () => {
  return (
    <div>
      {/* Navbar section */}
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        {/* Image and Text Section */}
        <div className="relative w-full h-screen">
          <div className="relative w-full h-full">
            <Image
              src="/img/home/home-img5.jpg"
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
              Apply to College
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-xl mb-6 w-full sm:w-1/2 md:w-1/3">
              Whether you're applying to college for the first time or need college application information,
              here’s how to get started on your college application.
            </p>
            <Link
              href="/create-account"
              className="bg-white text-black py-4 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-300"
            >
              Apply now
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white my-20"></div>

      {/* Phases section */}
      <PhaseCardList />

      {/* Last section */}
      <div className="p-4 w-full md:w-1/2 bg-white mx-3 mt-10 mb-20">
        <p className="text-xl mb-8 font-bold">
          Now that you know what to expect from the process, if you are ready to apply start the application.
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:gap-10">
          <Link
            href="/create-account"
            className="bg-gray-300 text-black py-4 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-400"
          >
            Start Your Application
          </Link>
          <Link
            href="/explore"
            className="bg-gray-300 text-black py-4 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-400"
          >
            Explore Colleges
          </Link>
        </div>
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Application;
