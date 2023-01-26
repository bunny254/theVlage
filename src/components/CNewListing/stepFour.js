import { LocationMarkerIcon } from "@heroicons/react/outline"
import NewListingQs from "../NewListingQs"
const StepFour = (props) => {
    const { data, handleChange, next, back } = props;
    return (
        <NewListingQs title="How many guests would you like to welcome?" >
            <div className="container px-5 py-24 mx-auto">
                <div className=" bg-white rounded-full p-3 flex m-5  md:ml-auto w-full  relative z-10 shadow-2xl">
                    <div className="relative flex  mb-2">

                        <div className="flex justify-between flex-grow mt-2">
                            <label htmlFor="bedrooms" className="text-md  py-2 px-3 font-medium text-gray-900 block ">Bedrooms</label>

                            <input placeholder="Bedrooms" type="number" min={1} id="bedrooms" name="bedrooms" onChange={handleChange('bedrooms')} value={data.bedrooms} className="w-full bg-white rounded-full  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                        </div>

                    </div>
                </div>
                <div className=" bg-white rounded-full p-3 flex m-5   md:ml-auto w-full  relative z-10 shadow-2xl">
                    <div className="relative flex  mb-2">

                        <div className="flex justify-between flex-grow mt-2">
                            <label htmlFor="bedrooms" className="text-md  py-2 px-3 font-medium text-gray-900 block ">Bathrooms</label>

                            <input placeholder="Bathrooms" type="number" min={1} id="bathrooms" name="bathrooms" onChange={handleChange('bathrooms')} value={data.bathrooms} className="w-full bg-white rounded-full flex-grow  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                        </div>

                    </div>
                </div>
                <div className=" bg-white rounded-full p-3 flex m-5   md:ml-auto w-full  relative z-10 shadow-2xl">
                    <div className="relative flex  mb-2">

                        <div className="flex justify-between flex-grow mt-2">
                            <label htmlFor="unitSize" className="text-md  py-2 px-3 font-medium text-gray-900 block ">Measurements</label>

                            <input placeholder="Measurements in Square Metres" type="number" min={1} id="bathrooms" name="bathrooms" onChange={handleChange('unit_size')} value={data.unit_size} className="w-full bg-white rounded-full flex-grow  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                        </div>

                    </div>
                </div>
                <div className="mt-[7rem] flex justify-between  top-2/3 ">
                    <button onClick={back} className="text-white ml-5 flex-grow bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>

                    <button onClick={next} className="text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>

                </div>

            </div>
        </NewListingQs>
    )
}

export default StepFour
