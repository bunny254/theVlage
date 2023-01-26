import { HomeIcon, OfficeBuildingIcon } from "@heroicons/react/outline"
import NewListingQs from "../NewListingQs"
const StepOne = (props) => {
    const { data, handleChange, next } = props;
    return (
        <NewListingQs title="What Kind of place will you host?" >
            <div className="custom-radio ">
                <label htmlFor='rad1' className="custom-radio-cont my-4">
                    <input type="radio" onClick={handleChange('building_type')} className=" checked:text-black m-5" name="buildingtype" value="Apartment" id="rad1" />

                    <label htmlFor='rad1' className="w-16 h-16 bg-blue-300 text-yellow-400  object-cover object-center flex-shrink-0 rounded-full mr-4">
                        <OfficeBuildingIcon className="h-7 w-7 m-4" />
                    </label>

                    {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/> */}
                    <label htmlFor='rad1' className="flex-grow">

                        <h2 className="text-gray-300 title-font font-semibold ">Apartment</h2>
                        {/* <p className="text-gray-200 font-thin ">{description}</p> */}
                    </label>

                </label>
                <label htmlFor='rad2' className="custom-radio-cont my-4">
                    <input type="radio" onChange={handleChange('building_type')} name="buildingtype" value="House" id="rad2" />
                    <label htmlFor='rad2' className="w-16 h-16 bg-blue-300 text-yellow-400 object-cover object-center flex-shrink-0 rounded-full mr-4">
                        <HomeIcon className="h-7 w-7 m-4" />
                    </label>
                    {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/> */}
                    <label htmlFor='rad2' className="flex-grow">
                        <h2 className="text-gray-300 title-font font-semibold ">House</h2>
                        {/* <p className="text-gray-200 font-thin ">{description}</p> */}
                    </label>
                </label>
                <div className="mt-[15rem] flex justify-between  top-2/3 ">

                    <button onClick={next} className="text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>

                </div>
            </div>
        </NewListingQs>
    )
}

export default StepOne
