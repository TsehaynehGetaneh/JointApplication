'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FcHome } from 'react-icons/fc'
import { BiMinus } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'


const College: React.FC = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="relative">
      {/* College background image */}
      <div className="relative">
      <div className="absolute inset-0">
        <Image
          src="https://th.bing.com/th/id/OIP.MSsF3WNxvYHyRjLirXVG3gHaE8?w=266&h=180&c=7&r=0&o=5&pid=1.7"
          alt="college name"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 opacity-75"></div>
      </div>
      {/* College content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 border-b-2 h-[550px] ">
        <div className=" pt-32 pb-48 flex flex-col">
          <h1 className="text-4xl font-extrabold tracking-tight text-white
           sm:text-5xl md:text-6xl ">
            Hawassa University
          </h1>
          <div className="rounded-full md:w-[250px] shadow mt-8 py-6 border border-transparent text-base 
            font-medium text-center text-black bg-white hover:bg-gray-200 md:py-3 md:text-lg md:px-10">
            <Link
              href="#"
              className=""
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      </div>
      <div className="relative flex space-x-12 pl-8 w-full bg-[#e9ecef] py-2 text-lg text-gray-800 items-center">
        <Link href={'/'} className='cursor-pointer'>
          <FcHome />
        </Link>
        <Link href={'/explore'} className='cursor-pointer'>Explore
          <span><IoIosArrowForward className='inline cursor-pointer' />
          </span></Link>
        <p>Hawassa University</p>
      </div>
      {/* Additional section */}
      <div className="relative py-16">
        <div className="max-w-7xl px-1 sm:px-6 lg:px-8">
          <p className="mt-4 max-w-2xl text-gray-700">
            Established in 1872, as the first University College in Wales,
            Aberystwyth University is one of the UK’s most important institutions.
            Our reputation for research power, teaching excellence, graduate employability
            and our unbelievable location are what set us apart from other universities.
          </p>
          {showMore && <> <p className="mt-4 max-w-7xl text-gray-700">
            Aberystwyth is a vibrant and welcoming university town in a stunning location on
            the west coast of the UK. It is both at the heart of Wales and home to a rich variety of cultures,
            people and entertainment. It is home to the impressive National Library of Wales: one of few places to
            contain a copy of every book ever printed in the UK.
            For international students, we offer generous Scholarships covering the cost of your accommodation, as well
            as free gym membership, visa and immigration advice, careers support and transport to Aberystwyth upon arrival to the UK.
          </p>
            <p className="text-bold text-xl mt-4">
              Applications are typically processed within 4 weeks of receiving them.
            </p>
          </>}
          <div className="mt-8 cursor-pointer">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-base font-medium  text-green-600 hover:text-green-500"
            >
              {showMore ? <span> Read less <BiMinus className='inline text-2xl' /></span> :
                <span> Read more <BsPlus className='inline text-2xl' /></span>
              }
            </button >
          </div>
        </div>
      </div>
      <div className='mx-8 relative max-w-7xl flex gap-4'>
        {/* tags */}
        <div>
          <div className="relative flex gap-3 flex-wrap">
            <button className="rounded-full bg-[#b6d961] p-2">
              Accepts first-year applications
            </button>
            <button className="rounded-full bg-[#b6d961] p-2">
              United Kingdom
            </button>
            <button className="rounded-full bg-[#b6d961] p-2">
              Public
            </button>
            <button className="rounded-full bg-[#b6d961] p-2">
              Rular
            </button>
            <button className="rounded-full bg-[#b6d961] p-2">
              Medium (2,001 to 14,999)
            </button>
            <button className="rounded-full bg-[#b6d961] p-2">
              Co-Ed
            </button>
            <button className="rounded-full bg-[#b6d961] p-2">
              Religious Affiliation
            </button>
            <button className="rounded-full bg-[#b6d961] p-2">
              Offers aid for international students
            </button>
            <button className="rounded-full bg-[#b6d961] p-2">
              Charges no application fee - First Year
            </button>
            <button className="rounded-full bg-[#b6d961] p-2">
              Test Optional/Flexible - First Year
            </button>
          </div>
          <div className="my-8 relative max-w-2xl">
            <Image
              src={'https://i.pinimg.com/originals/1e/49/5d/1e495d865c921ec714a6292880d7a338.jpg'}
              alt='country'
              width={600}
              height={500}
            />
          </div>
          <h1 className="text-bold text-2xl mb-4">Academic Programs</h1>
          <ul className="relative grid grid-cols-2 gap-3">
            <li className="list-disc list-inside text-blue-500">Research</li>
            <li className="list-disc list-inside text-blue-500">Science</li>
            <li className="list-disc list-inside text-blue-500">Technology</li>
            <li className="list-disc list-inside text-blue-500">Liberal Arts</li>
            <li className="list-disc list-inside text-blue-500">Business</li>
            <li className="list-disc list-inside text-blue-500">Education</li>
            <li className="list-disc list-inside text-blue-500">Art & Design</li>
            <li className="list-disc list-inside text-blue-500">Economics</li>
            <li className="list-disc list-inside text-blue-500">Finance/Accounting</li>
            <li className="list-disc list-inside text-blue-500">Government/Political Science</li>
            <li className="list-disc list-inside text-blue-500">Health Science</li>
            <li className="list-disc list-inside text-blue-500">Performing Arts</li>
            <li className="list-disc list-inside text-blue-500">Social Science</li>
            <li className="list-disc list-inside text-blue-500">Visual Arts</li>
          </ul>

          <h2 className='text-bold text-2xl mt-10'>Student experience</h2>
          <ul className="relative grid grid-cols-2 gap-3">
            <li className="list-disc list-inside text-blue-500">Athletics</li>
            <li className="list-disc list-inside text-blue-500">Co-op/Internship Opportunities</li>
            <li className="list-disc list-inside text-blue-500">Disability Services</li>
            <li className="list-disc list-inside text-blue-500">Intramural/Club Sports</li>
            <li className="list-disc list-inside text-blue-500">On-Campus Housing</li>
            <li className="list-disc list-inside text-blue-500">Religious Affiliation</li>
          </ul>
          <div className="text-bold mt-8 text-2xl">Application information</div>
          <p className="text-gray-500 py-4 text-2xl text-semibold border-b-2 border-blue-400 "> Find out about requirements, fees, and deadlines</p>
          <div className='text-gray-500 text-xl text-semibold border-b-2 border-blue-400 py-4'>
            <h1 className='text-lg cursor-pointer' onClick={() => setShowMore(!showMore)}>First-year</h1>
            {showMore && <p className="mt-5"> For those wishing to study at Aberystwyth you should meet some set entry requirements.
              If you are applying from outside the USA, please find additional entry requirements on the Your Country page. </p>}
          </div>

          <h3 className='text-2xl mb-4'>Additional Information</h3>
          <p className="text-gray-500 text-2xl text-semibold mb-4">Please note if you are an EU student and started your course in 2020-21 or earlier, you will continue to pay the same fees as home students for the duration of your course and existing rules around financial support and home fees will still apply.</p>
          <p className="text-2xl font-semibold mb-4">Visit us</p>
<ul className="mt-4 list-disc list-inside">
  <li className="mb-2">We encourage all students to visit us if they can by attending one of our Open Days.</li>
  <li className="mb-2">
    That said, we understand that it is quite a journey to visit us at Aberystwyth, and we host a variety of online events such as our Online Open Day and a Virtual Tour.
  </li>
  <li className="mb-2">
    If you wish to visit us in-person outside of our scheduled open days, please contact the international office to help cater a personalized itinerary for you.
  </li>
</ul>
<div className="border-l-3 border-l-blue-500 pl-10 mt-4">
  <p>
    Aberystwyth University was one of the top contenders even before I came to see it,
    and now it is my home away from home. The university staff are amazing and helpful,
    coursework is very interesting, and the town itself offers everything you need.
  </p>
  <p className="mt-2">Helene Husebo, 2nd Year Student, Psychology</p>
</div>

        </div>
        <div className="">
          <div className="my-8 relative flex justify-center h-[220px] w-[350px] shadow-md items-center bg-white">
            <Image
              src={'https://i.pinimg.com/originals/1e/49/5d/1e495d865c921ec714a6292880d7a338.jpg'}
              alt='country'
              width={200}
              height={200}
            />
          </div>
          <div className="rounded-full md:w-[250px] shadow mt-8 py-6 border border-transparent text-base 
            font-medium text-center text-white bg-blue-600 hover:bg-blue-500 md:py-3 md:text-lg md:px-10">
            <Link
              href="#"
              className=""
            >
              Apply Now
            </Link>
          </div>
          <div className="mt-10">
            <p className="text-bold text-2xl">Admissions office</p>
            <div className="my-8 relative">
              <Image
                src={'https://i.pinimg.com/originals/1e/49/5d/1e495d865c921ec714a6292880d7a338.jpg'}
                alt='country'
                width={200}
                height={200}
              />
            </div>
          </div>
          <p className="text-gray-700">Address</p>
          <p className="text-xl">
            Undergraduate Admissions Office, Cledwyn Building
            Aberystwyth SY23 3DD, United Kingdom (UK)
          </p>
          <p className="text-gray-700">Email</p>
          <Link href={'/'} className="text-xl">
          ug-admissions@aber.ac.uk
          </Link>
        </div>
      </div>
    </section>
  )
}

export default College
