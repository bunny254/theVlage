import React from 'react';
import { useRouter } from 'next/router'


export default function MenuItem({ icon, title, link, description }) {
    const router = useRouter();
    return (
        <>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-[20rem]" >
                <div onClick={() => router.push(`${link}`)} className="h-full flex items-center cursor-pointer border-gray-200 border bg-blue-900 p-4 rounded-xl hover:opacity-90 transition duration-200 ease-out hover:shadow-2xl">
                    <div className="w-16 h-16 bg-blue-300 text-yellow-400 object-cover object-center flex-shrink-0 rounded-full mr-4">
                        {icon}
                    </div>
                    {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/> */}
                    <div className="flex-grow">
                        <h2 className="text-gray-300 title-font font-semibold ">{title}</h2>
                        <p className="text-gray-200 font-thin ">{description}</p>
                    </div>
                </div>
            </div>
            {/* <div className='grid grid-cols-2 m-5 p-8 rounded-xl text-left bg-blue-900 cursor-pointer w-[200] hover:shadow-md '>
                <a href={link}>
                    <div className="flex">
                        <div className='relative flex h-8 mr-2 my-auto text-yellow-500 items-center py-2 '>
                            {icon}
                        </div>

                        <div className="relative items-center space-x-4 text-gray-300">
                            <span className=' font-bold p-2 m-2   '>{title}</span>
                            <p className="content-nav text-sm ">{description}</p>

                        </div>
                    </div>


                </a>
            </div> */}
        </>
    )
}


