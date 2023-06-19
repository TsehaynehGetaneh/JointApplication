import Image from "next/image";
import Link from "next/link";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import PlanCards from "./PlanCards";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        {/* Image and Text Section */}
        <div className="relative w-full h-screen">
          <div className="relative w-full h-full">
            <Image
              src="/img/home/home-img.jpg"
              alt="Your Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          </div>
          <div className="w-full absolute top-0 left-0 flex flex-col items-start justify-center h-full p-8 text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 w-full sm:w-1/2 md:w-1/3">
              Your future starts here
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-xl mb-6 w-full sm:w-1/2 md:w-1/3">
              Apply to college for the first time. Navigate your entire college application journey with JointApplication.
            </p>
            <Link
              href=""
              className="bg-white text-black py-4 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-300"
            >
              Start your application
            </Link>
          </div>
        </div>

        {/* Plan cards section */}
        <div className="w-full py-8 bg-[#dae3e6] mt-20">
          <PlanCards />
        </div>

        {/* Contact section */}
        <div className="bg-cyan-600 py-8 w-full mt-20">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-8 gap-12">
            <div className="w-full sm:w-1/2">
              <Image
                src="/img/home/home-img2.jpg"
                alt="Image"
                width={400}
                height={400}
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-12">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">Have a question?</h1>
              <Link
                href="/help"
                className="bg-white text-black py-4 px-10 rounded-full font-semibold shadow-lg hover:bg-gray-300 w-full sm:w-auto"
              >
                Contact our support team
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
