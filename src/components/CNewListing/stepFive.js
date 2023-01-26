import React, { useState, useEffect } from "react";
import { LocationMarkerIcon } from "@heroicons/react/outline"
import NewListingQs from "../NewListingQs"
import Select from "react-select";
import makeAnimated from 'react-select/animated';
const StepFive = (props) => {
    const { data, handleChange, next, back } = props;
    const [amenities, setAmenities] = useState([]);
    const [service, setServices] = useState([])
    useEffect(() => {
        handleChange(service, amenities)


    }, [service, amenities])

    const options = [
        { value: 'Air Conditioning', label: 'Air Conditioning' },
        { value: 'Dishwasher', label: 'Dishwasher' },
        { value: 'Washing Machine', label: 'Washing Machine' },
        { value: 'Entertainment System', label: 'Entertainment System' },
        { value: 'Toiletries', label: 'Toiletries' },
        { value: 'Internet', label: 'Internet' },
        { value: 'Parking', label: 'Parking' },
        { value: 'Pool', label: 'Pool' },
        { value: 'Lift', label: 'Lift' },
        { value: 'Kids Playground', label: 'Kids Playground' },
        { value: 'Gym', label: 'Gym' },
        { value: 'Smoke Alarms', label: 'Smoke Alarms' },
        { value: 'Security Cameras', label: 'Security Cameras' },

    ]
    const services = [
        { value: 'Cleaning', label: 'Cleaning' },
        { value: 'Security', label: 'Security' },
        { value: 'Catering', label: 'Catering' },


    ]
    const animatedComponents = makeAnimated();
    return (
        <NewListingQs title="Let guests know what your place has to offer" >
            <div className="mt-2 mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="amenities">
                        Amenities
                    </label>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        onChange={opt => setAmenities({ ...amenities, opt })}
                        options={options} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="services">
                        Services
                    </label>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        onChange={opt => setServices({ ...service, opt })}
                        options={services} />
                </div>

                {/* <div className="p-4">
                    <div className="flex items-center mr-4 mb-2">
                        <input type="checkbox" onChange={handleChange} id="A3-yes" name="A3-confirmation" value="tv" className="relative h-8 w-8" />

                        <label htmlFor="A3-yes" className="font-semibold text-gray-600 flex ml-10 relative">TV</label>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center mr-4 mb-2">
                        <input type="checkbox" onChange={handleChange} id="A3-yes" name="A3-confirmation" value="AirConditioning" className="relative h-8 w-8" />

                        <label htmlFor="A3-yes" className="font-semibold text-gray-600 flex ml-10 relative">Air Conditioning</label>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center mr-4 mb-2">
                        <input type="checkbox" onChange={handleChange} id="A3-yes" name="A3-confirmation" value="Wifi" className="relative h-8 w-8" />

                        <label htmlFor="A3-yes" className="font-semibold text-gray-600 flex ml-10 relative">Wifi</label>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center mr-4 mb-2">
                        <input type="checkbox" onChange={handleChange} id="A3-yes" name="A3-confirmation" value="Washer" className="relative h-8 w-8" />

                        <label htmlFor="A3-yes" className="font-semibold text-gray-600 flex ml-10 relative">Washer</label>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center mr-4 mb-2">
                        <input type="checkbox" onChange={handleChange} id="A3-yes" name="A3-confirmation" value="Parking" className="relative h-8 w-8" />

                        <label htmlFor="A3-yes" className="font-semibold text-gray-600 flex ml-10 relative">Parking</label>
                    </div>
                </div> */}

                <div className="mt-[15rem] flex justify-between  top-2/3 ">
                    <button onClick={back} className="text-white ml-5 flex-grow bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>

                    <button onClick={next} className="text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>

                </div>

            </div>
        </NewListingQs>
    )
}

export default StepFive
