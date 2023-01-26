import { CubeTransparentIcon, HomeIcon, OfficeBuildingIcon, UsersIcon } from "@heroicons/react/outline"
import NewListingQs from "../NewListingQs"
const StepTwo = (props) => {
    const { data, handleChange, next, back } = props;
    return (
        <NewListingQs title="What kind of space will guests have?" >
            <div className="custom-radio">
                <label htmlFor='rad3' className="custom-radio-cont my-4">
                    <input type="radio" onClick={handleChange('listing_type')} name="listingtype" value="entire_place" id="rad3" />

                    <label htmlFor='rad3' className="w-16 h-16 bg-blue-300 text-yellow-400 object-cover object-center flex-shrink-0 rounded-full mr-4">
                        <HomeIcon className="h-7 w-7 m-4" />
                    </label>

                    {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/> */}
                    <label htmlFor='rad3' className="flex-grow">

                        <h2 className="text-gray-300 title-font font-semibold ">An Entire Place</h2>
                        {/* <p className="text-gray-200 font-thin ">{description}</p> */}
                    </label>

                </label>
                <label htmlFor='rad4' className="custom-radio-cont my-4">
                    <input type="radio" onChange={handleChange('listing_type')} name="listingtype" value="private-room" id="rad4" />
                    <label htmlFor='rad4' className="w-16 h-16 bg-blue-300 text-yellow-400 object-cover object-center flex-shrink-0 rounded-full mr-4">
                        <CubeTransparentIcon className="h-7 w-7 m-4" />
                    </label>
                    {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/> */}
                    <label htmlFor='rad4' className="flex-grow">
                        <h2 className="text-gray-300 title-font font-semibold ">A Private Room</h2>
                        {/* <p className="text-gray-200 font-thin ">{description}</p> */}
                    </label>
                </label>
                <label htmlFor='rad5' className="custom-radio-cont my-4">
                    <input type="radio" onChange={handleChange('listing_type')} name="listingtype" value="shared-room" id="rad5" />
                    <label htmlFor='rad5' className="w-16 h-16 bg-blue-300 text-yellow-400 object-cover object-center flex-shrink-0 rounded-full mr-4">
                        <UsersIcon className="h-7 w-7 m-4" />
                    </label>
                    {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/> */}
                    <label htmlFor='rad5' className="flex-grow">
                        <h2 className="text-gray-300 title-font font-semibold ">A shared room</h2>
                        {/* <p className="text-gray-200 font-thin ">{description}</p> */}
                    </label>
                </label>
                <div className="relative mt-[18rem] md:mt-[15rem] flex justify-between  top-2/3 ">
                    <button onClick={back} className="text-white ml-5 flex-grow bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>

                    <button onClick={next} className="text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>

                </div>
            </div>
        </NewListingQs>
    )
}

export default StepTwo
