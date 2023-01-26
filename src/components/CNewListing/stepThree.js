import { LocationMarkerIcon } from "@heroicons/react/outline"
import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import { useEffect, useState, useCallback, useRef } from "react";
import NewListingQs from "../NewListingQs"
const StepThree = (props) => {
    const { data, handleChange, next, back } = props;
    const queryParams = {
        country: 'ke'
    }
    const [searchParam, setSearchParam] = useState('')



    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',

        latitude: -1.286389,
        longitude: 36.817223,
        zoom: 8
    })
    const onSelected = (viewport, item) => {
        setViewport({ ...viewport, latitude: item.geometry.coordinates[1], longitude: item.geometry.coordinates[0], zoom: 15 })
        handleChange(item)
        setSearchParam(item.place_name)

    }
    const mapRef = useRef();
    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );
    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
            const geocoderDefaultOverrides = { transitionDuration: 1000 };

            return handleViewportChange({
                ...newViewport,
                ...geocoderDefaultOverrides
            });
        },
        [handleViewportChange]
    );
    // const onSelected = (viewport, item) => {
    //     setViewport({
    //         viewport
    //     })
    // }
    // const params = {
    //     country: "ke"
    // }
    return (
        <NewListingQs title="Where's your place located?" >

            <section class="text-gray-600 body-font relative">
                <div class="h-[30rem] mt-10 w-full absolute inset-0 flex  bg-gray-300">
                    {/* <Map  /> */}
                    <ReactMapGL
                        ref={mapRef}
                        mapStyle='mapbox://styles/mapbox/streets-v11'
                        mapboxApiAccessToken={process.env.mapbox_key}
                        {...viewport}
                        onViewportChange={handleViewportChange}
                    >

                    </ReactMapGL>
                </div>
                <div class="container px-5 py-24 mx-auto flex">
                    <div class=" bg-white p-3 flex flex-col md:ml-auto w-full  relative z-10 shadow-2xl">
                        <div className="relative flex  mb-2">
                            <div className="flex p-1">
                                <LocationMarkerIcon className="h-7 w-7 m-2" />
                            </div>
                            <div className="flex-grow mt-2">
                                <Geocoder

                                    mapboxApiAccessToken={process.env.mapbox_key}
                                    mapRef={mapRef}
                                    className="w-full bg-white rounded-full  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    onViewportChange={handleGeocoderViewportChange}
                                    viewport={viewport}
                                    updateInputOnSelect={true}
                                    hideOnSelect={true}
                                    onSelected={onSelected}
                                    queryParams={queryParams}
                                    position="top-left"
                                />
                                {/* <input placeholder="Enter your address" type="text" id="location" name="location" onChange={handleChange('location')} value={data.location} className="w-full bg-white rounded-full  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> */}

                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-[15rem] flex justify-between  top-2/3 ">
                    <button onClick={back} className="text-white ml-5 flex-grow bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>

                    <button onClick={next} className="text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>

                </div>
            </section>


        </NewListingQs>
    )
}

export default StepThree
