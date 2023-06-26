import Image from "next/image";
import Link from "next/link";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Plan: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex relative flex-col items-center justify-center">
        {/* Image and Text Section */}
        <div className="relative w-full h-screen">
          <div className="relative w-full h-full">
            <Image
              src="/img/plan/why.jpg"
              alt="Your Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
          </div>
          <div className="w-full   absolute top-0 left-0 flex flex-col items-start justify-center h-full p-8 text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-4 w-full sm:w-1/2">
              Why university matters
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white my-20"></div>

      {/* Why college matters section */}
      <div className="flex flex-col items-center justify-center py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 px-8">
            <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-medium mb-2">
              University is worth it,
            </h1>
            <p className="text-2xl whitespace-nowrap sm:text-2xl md:text-4xl lg:text-5xl font-medium mb-8">
              because you are worth it.
            </p>

            <p className="text-lg whitespace-nowrap sm:text-xl md:text-2xl lg:text-2xl mb-6 w-full sm:w-1/2 md:w-1/3">
              University isn’t just a place to learn. It’s where you’ll find a <br /> community filled with new people and have new <br /> experiences. It’s where you’ll <br /> make friends for life and  learn important lessons about yourself.<br />  It&apos;s where you&apos;ll go to reach new heights.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-5 bg-gray-200 mx-10">
        <div className="w-96 h-96">
          <Image
            src="/img/plan/public-examination-preparation-concept.jpg"
            alt="support"
            layout="responsive"
            width={500}
            height={600}
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col p-4 space-y-5 leading-7" >
          <h1 className="font-bold text-4xl">
            How will you reach higher this year?
          </h1>
          <div className="font-medium">
            College is about defying expectations, breaking the mold, and finding yourself. In short, it’s the most valuable investment you can make for your future — both financially and personally.
          </div>
          <div className="font-medium mt-4">
            Your journey is just beginning, and you&apos;ll have support from us all along the way. Let&apos;s see how far you can go.
          </div>
        </div>
      </div>


      <div className="flex flex-col mx-[14rem] justify-center space-y-10 mt-10 leading-7">
        <h1 className="text-2xl font-medium text-black mb-4">You have curiosity. Explore it.</h1>
        <p className="text-gray-700 ">
          This is your opportunity to take what you’re already interested in and pursue it at a deeper level. Enroll in classes <br /> and sign up for activities that excite you, without the structured limitations of high school. Meet people from <br /> various backgrounds and cultures who have interests similar to — and different from — your own. They might <br /> even introduce you to new interests you didn’t know you had.
        </p>

        <h1 className="text-2xl font-medium text-black mt-8">You have a purpose. Become it.</h1>
        <p className="text-gray-700 ">
          The future may seem uncertain, but college will help you discover the career path that matches your interests and motivates you to become the best version of yourself. You’ll learn to be more independent and gain the skills and knowledge you need to prepare you for the future. Meet mentors and fellow student leaders who inspire you to contribute and give back to your community and to the world.
        </p>

        <h1 className="text-2xl font-medium text-black mt-8">You have potential. Exceed it.</h1>
        <p className="text-gray-700 ">
          Whatever your goals — getting a degree, owning a home, traveling the world — you can attain them. They require dedication and focus, but also financial stability. Here’s how a college degree can help over a lifetime:
        </p>

        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-10">
          <li>Someone with a high school diploma can expect to earn approximately 1,000,000 Ethiopian Birr.</li>
          <li>A worker with some college but no degree earns around 1,200,000 Ethiopian Birr.</li>
          <li>An Associate’s degree-holder earns about 1,500,000 Ethiopian Birr.</li>
          <li>A worker with a Bachelor’s degree will earn roughly 2,000,000 Ethiopian Birr.</li>
          <li>Graduate degrees provide for even higher earnings:</li>
          <li>A Master’s degree-holder earns around 2,500,000 Ethiopian Birr.</li>
          <li>A Doctoral degree-holder earns approximately 3,500,000 Ethiopian Birr.</li>
          <li>A Professional degree-holder earns about 4,000,000 Ethiopian Birr.</li>
        </ul>
      </div>


      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Plan;
