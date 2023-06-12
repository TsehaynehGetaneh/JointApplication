import Image from "next/image";
import Link from "next/link";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Plan: React.FC = () => {
  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center">
            {/* Image and Text Section */}
            <div className="relative w-full h-screen">
                <div className="relative w-full h-full">
                    <Image
                    src="/img/plan/students.jpg"
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
                        Plan for college
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6 w-full sm:w-1/2 md:w-1/3">
                        It’s never too early — or too late — to start planning. Our college planning tools will guide you through every step of the college application and admissions process.
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-white my-20"></div>

        {/* Why college matters section */}
        <div className="flex flex-col items-center justify-center py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mr-10">
                    <Image
                        src="/img/plan/AAU.jpg"
                        alt="Your Image"
                        layout="responsive"
                        width={500}
                        height={300}
                    />
                </div>
                <div className="w-full md:w-1/2 px-8">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                        Invest in your future
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-12">
                        We know it can seem overwhelming, but you’re not the first to question if you’ll find the right college, succeed and get the career you want. You might even be wondering if college is worth it. At least that one’s easy: The answer is always “yes.”
                    </p>
                    <Link
                        href="/plan/why-college-matters"
                        className="bg-[#0b6dbd] text-white py-4 px-6 rounded-full font-semibold shadow-lg hover:opacity-90"
                        >
                            Learn why College matters
                    </Link>
                </div>
            </div>
        </div>

        {/* How to pay for college section  */}
        <div className="flex flex-col items-center justify-center py-20">
            <div className="container mx-auto flex flex-col  md:flex-row items-center">
                <div className="w-full md:w-2/3 px-8">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                        Making college affordable
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-12">
                        The price tag can be the most daunting part of your journey to college, but there are more options out there than you might know. Our planning tools can help you find them and understand how college can be made more affordable.
                    </p>
                    <Link
                        href="/plan/paying-for-college"
                        className="bg-[#0b6dbd] text-white py-4 px-6 rounded-full font-semibold shadow-lg hover:opacity-90"
                    >
                        Learn how to pay for college
                    </Link>
                </div>
                <div className="w-full md:w-1/3 ml-10 mt-8 md:mt-0">
                    <Image
                        src="/img/plan/AAU2.jpg"
                        alt="Your Image"
                        layout="responsive"
                        width={500}
                        height={300}
                    />
                </div>
            </div>
        </div>

        {/* Get into college section */}
        <div className=" bg-[#006494] text-white flex flex-col items-center justify-center py-20 mt-40">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-2/3 px-8">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                        Your path to college
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-12">
                        No matter where you are in the process, you’re already on the path to college. Take a moment to celebrate that. It means you already have the ability to learn, the desire to explore, the persistence to grow, the determination to focus, and the motivation to apply.
                    </p>
                    <Link
                        href="/plan/your-path-to-college"
                        className="bg-gray-300 text-black py-4 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-400"
                    >
                        Learn how to get into college
                    </Link>
                </div>
            </div>
        </div>

        {/* Ready to apply section */}
        <div className="flex flex-col items-center justify-center py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mr-10">
                    <Image
                        src="/img/plan/AAU3.jpg"
                        alt="Your Image"
                        layout="responsive"
                        width={500}
                        height={300}
                    />
                </div>
                <div className="w-full md:w-1/2 px-8">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                        Ready to apply?
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-12">
                        You're ready to start your journey, and we'll be with you every step of they way. Here's what you need to get started on your application. We've put together a step-by-step guide to help make it as easy as possible.
                    </p>
                    <Link
                        href="/apply"
                        className="bg-[#0b6dbd] text-white py-4 px-6 rounded-full font-semibold shadow-lg hover:opacity-90"
                        >
                            Learn how to apply to college
                    </Link>
                </div>
            </div>
        </div>

        {/* Footer section */}
        <Footer />
    </div>
  );
};

export default Plan;
