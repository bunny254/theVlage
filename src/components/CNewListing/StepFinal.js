import { LocationMarkerIcon } from "@heroicons/react/outline"
import NewListingQs from "../NewListingQs"
const StepFinal = (props) => {
    const { data, back, submit } = props;





    return (
        <NewListingQs title="Check out your listing!It will be published after24 hours" >
            <div className="px-5 ">

                <div className="relative flex-col overflow-y-hidden ">
                    <div className={`${data.errors ? "relative flex bg-red-100 rounded-lg p-3 text-sm text-red-700" : "hidden"}`} role="alert">
                        <span className="flex-grow font-medium">Error!</span> {data.errors}.
                    </div>
                    <table className="min-w-full ">
                        <thead>
                            <tr className="bg-white border-b">
                                <th className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">Title</th>
                                <th className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">Value</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Building Type</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.building_type}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Listing Type</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.listing_type}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Property Name</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.property_name}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Unit Size</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.unit_size}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Stay Type</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.stay_type}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Furnished</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.is_furnished}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Currency</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.currency}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Rent Cost</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.rent_cost}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Unit Cost</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.utilities_cost}</td>
                            </tr>


                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Available From</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{new Date(data.available_from).toDateString()}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Bedrooms</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.bedrooms}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Bathrooms</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.bathrooms}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Amenities</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.amenities}</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Services</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{data.services}</td>
                            </tr>
                        </tbody>


                    </table>

                </div>
                <div className="flex justify-between  ">
                    <button onClick={back} className="text-white ml-5 flex-grow bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>

                    <button onClick={submit} className="text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>

                </div>


            </div>



        </NewListingQs>
    )
}

export default StepFinal
