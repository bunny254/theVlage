import { CalendarIcon, CubeTransparentIcon, HomeIcon, OfficeBuildingIcon, UsersIcon } from "@heroicons/react/outline"
import NewListingQs from "../NewListingQs"
import { useState, useEffect } from "react";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
const StepStays = (props) => {
    const { data, handleChange, handleDate, next, back } = props;
    const [dates, setDate] = useState(null);
    useEffect(() => {
        if (dates) {
            console.log(dates);
        }

    }, [dates])
    return (
        <NewListingQs title="How long should the guests stay?" >
            <div className="mt-2">
                <div className="relative custom-radio text-gray-100">
                    <div className="custom-radio-cont my-1 relative">
                        <label htmlFor="adate" className="px-3">
                            Available From:
                        </label>
                        <input placeholder="Availabe From" type="date" id="adate" name="adate" onChange={handleChange('available_from')} value={data.available_from} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />


                    </div>
                </div>
                <div className="relative custom-radio">
                    <label htmlFor='rad6' className="custom-radio-cont my-1">
                        <input type="radio" onClick={handleChange('stay_type')} name="listingtype" value="short-stay" id="rad6" />

                        <label htmlFor='rad6' className="w-16 h-16 bg-blue-300 text-yellow-400 object-cover object-center flex-shrink-0 rounded-full mr-4">
                            <CalendarIcon className="h-7 w-7 m-4" />
                        </label>

                        {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/> */}
                        <label htmlFor='rad6' className="flex-grow">

                            <h2 className="text-gray-300 title-font font-semibold ">Less than a month</h2>
                            {/* <p className="text-gray-200 font-thin ">{description}</p> */}
                        </label>

                    </label>
                    <label htmlFor='rad4' className="custom-radio-cont my-1">
                        <input type="radio" onChange={handleChange('stay_type')} name="listingtype" value="long-stay" id="rad4" />
                        <label htmlFor='rad4' className="w-16 h-16 bg-blue-300 text-yellow-400 object-cover object-center flex-shrink-0 rounded-full mr-4">
                            <CalendarIcon className="h-7 w-7 m-4" />
                        </label>
                        {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/> */}
                        <label htmlFor='rad4' className="flex-grow">
                            <h2 className="text-gray-300 title-font font-semibold ">Two Months or More</h2>
                            {/* <p className="text-gray-200 font-thin ">{description}</p> */}
                        </label>
                    </label>
                    <label htmlFor='rad5' className="custom-radio-cont my-1">
                        <input type="radio" onChange={handleChange('stay_type')} name="listingtype" value="flex-stay" id="rad5" />
                        <label htmlFor='rad5' className="w-16 h-16 bg-blue-300 text-yellow-400 object-cover object-center flex-shrink-0 rounded-full mr-4">
                            <CalendarIcon className="h-7 w-7 m-4" />
                        </label>
                        {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/> */}
                        <label htmlFor='rad5' className="flex-grow">
                            <h2 className="text-gray-300 title-font font-semibold ">Both</h2>
                            {/* <p className="text-gray-200 font-thin ">{description}</p> */}
                        </label>
                    </label>


                    <div className="mt-[10rem] md:mt-[10rem] flex justify-between  top-2/3 ">
                        <button onClick={back} className="text-white ml-5 flex-grow bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>

                        <button onClick={next} className="text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>

                    </div>
                </div>
            </div>


        </NewListingQs>
    )
}

export default StepStays
