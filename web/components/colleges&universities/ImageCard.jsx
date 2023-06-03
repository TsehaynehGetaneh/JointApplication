import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function ImageCard({ imageUrl, collegeName, location }) {
    return (
        <Link href={collegeName} className="border border-gray-300 shadow-md rounded-md h-[350px] w-[250px] text-black  flex flex-col gap-10 cursor-pointer">
            <div className="flex" style={{ height: '60%' }}>
                <Image
                    width={250}
                    height={300}
                    src={imageUrl}
                    alt={collegeName}
                    objectFit="fill"
                    objectPosition="center"
                />
            </div>
            <div className="px-4">
                <h3 className="text-lg font-semibold mb-1 hover:underline transition ease-in-out hover:translate-x-1">{collegeName}</h3>
                <p className="text-sm text-gray-500">{location}</p>
            </div>
        </Link>
    );
}



export default ImageCard