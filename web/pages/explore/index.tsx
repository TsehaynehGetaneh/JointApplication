import ImageCard from '@/components/colleges&universities/ImageCard'
import Left from '@/components/find-college/Left'
import { log } from 'console';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


interface University {
	_id: string;
	name: string;
	phone: number;
	email: string;
	address: string;
	links: string;
	deadlines: {
		_id: string,
		term: string,
		level: string,
		deadline: Date
	};
	image?: string;
}

function Explore() {
	const [universitiesData, setuniversitiesData] = useState<University[]>([]);
	const router=useRouter()


	useEffect(() => {
		fetchData();
	}, []);


	async function fetchData() {
		try {
			const response = await fetch('http://localhost:9000/api/v1/universities');
			const universitiesData = await response.json();
			setuniversitiesData(universitiesData);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}


	return (

		<div className='flex flex-col bg-gray-100'>
			<div className=" bg-[#5acccc] w-full h-28 flex items-center">
				<h3 className="text-bold text-3xl text-black ml-2">Explore Universities</h3>
			</div>
			<div className="flex-col md:flex-row flex  ">
				<Left />
				<div className="flex flex-col w-full">
					<div className="w-full h-[140px] bg-gray-200"> </div>
					<div className="flex justify-between items-center m-6 ">
						<div className="xl:text-3xl text-sm text-bold ">
							{universitiesData.length} Universities Found
						</div>
						<div className="flex items-center space-x-2 ">
							<span className="mr-2">Sort by</span>
							<select className="border border-gray-300 rounded px-2 py-1">
								<option value="college_name_asc">University name, A to Z</option>
								<option value="college_name_asc">University name, Z to A</option>

							</select>
						</div>
					</div>
					<div className="flex gap-2 ml-6 flex-wrap justify-center items-center ">
						{/* college card */}
						{universitiesData.map(university => (
							<ImageCard
								imageUrl="https://th.bing.com/th/id/R.46e6f26dcd40efb195f9463197f84a93?rik=HBX%2bEqjVzojxDg&pid=ImgRaw&r=0"
								collegeName={university.name}
								location={university.address}
								id={university._id}
								onClick={() => router.push(`/detail/${university._id}`)}
							/>
						))}
						<div className="container mx-auto py-10 bg-[#5acccc]">
							<h1 className="text-3xl font-bold text-center mb-10">
								How much does it cost to apply to college?
							</h1>
							<p className="text-lg mb-6">
								While some colleges may charge an application fee, others have no fee to
								apply. And, many will waive their fees under certain circumstances,
								including financial need, veteran status, and more. You may qualify for
								an application fee waiver. Ask the colleges you're applying to about any
								college-specific waivers they offer, and be sure to check out the Common
								App fee waiver in the Profile section of the application.
							</p>
							<p className="text-lg">
								Learn more about fee waivers at
								<a
									href="https://www.commonapp.org/apply/fee-waivers/"
									className="text-blue-600 hover:underline"
								>https://www.commonapp.org/apply/fee-waivers/</a
								>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Explore


