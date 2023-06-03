import ImageCard from '@/components/colleges&universities/ImageCard'
import Left from '@/components/find-college/Left'
import React from 'react'

function Explore() {

	const universities = 45

	return (

		<div>
			<div className=" bg-[#5acccc] w-full h-28 flex items-center">
				<h3 className="text-bold text-3xl text-black ml-2">Explore colleges</h3>
			</div>
			<div className="flex-col md:flex-row flex  ">
				<Left />
				<div className="flex flex-col w-full">
					<div className="flex justify-between items-center m-6">
						<div className="xl:text-3xl text-sm text-bold ">
							{universities} Universities Found
						</div>
						<div className="flex items-center space-x-2 ">
							<span className="mr-2">Sort by</span>
							<select className="border border-gray-300 rounded px-2 py-1">
								<option value="college_name_asc">University name, A to Z</option>
								<option value="college_name_asc">University name, Z to A</option>

							</select>
						</div>
					</div>
					<div className="flex gap-2 ml-6 flex-wrap justify-center items-center">
						{/* college card */}
						<ImageCard
							imageUrl="https://th.bing.com/th/id/OIP.zNAZV-QcWXyjJIjwzL999QHaCf?w=276&h=117&c=7&r=0&o=5&pid=1.7"
							collegeName="Hawassa University"
							location="Hawassa, Sidama Region"
						/>
						<ImageCard
							imageUrl="https://th.bing.com/th/id/OIP.zNAZV-QcWXyjJIjwzL999QHaCf?w=276&h=117&c=7&r=0&o=5&pid=1.7"
							collegeName="Hawassa University"
							location="Hawassa, Sidama Region"
						/>
						{/* college card */} 
						<ImageCard
							imageUrl="https://th.bing.com/th/id/OIP.zNAZV-QcWXyjJIjwzL999QHaCf?w=276&h=117&c=7&r=0&o=5&pid=1.7"
							collegeName="Hawassa University"
							location="Hawassa, Sidama Region"
						/>
						<ImageCard
							imageUrl="https://th.bing.com/th/id/OIP.zNAZV-QcWXyjJIjwzL999QHaCf?w=276&h=117&c=7&r=0&o=5&pid=1.7"
							collegeName="Hawassa University"
							location="Hawassa, Sidama Region"
						/>
						<div className="container mx-auto py-10">
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