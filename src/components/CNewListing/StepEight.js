import React, { useCallback } from 'react';
import NewListingQs from "../NewListingQs"
import DropzoneComp from '../Dropzone';
const StepEight = (props) => {
    const { data, handleChange, next, back } = props;
    return (
        <NewListingQs title="Now, let's describe your place" >
            <div class="px-5 py-24 mx-auto">
                <div class=" bg-white  p-3  m-5  md:ml-auto w-full  relative ">
                    <div className="relative    mb-2">
                        <label htmlFor="description" className="text-md  py-2 px-3 font-medium text-gray-900 block ">Create your description</label>


                        <div className="flex justify-between flex-grow mt-2">

                            <textarea placeholder="description" type="text" id="description" name="description" onChange={handleChange('description')} value={data.description} className="w-full bg-white   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                        </div>

                    </div>
                </div>
                <div className="mb-2 flex justify-between  top-0 ">
                    <button onClick={back} className="text-white ml-5 flex-grow bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>

                    <button onClick={next} className="text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>

                </div>



            </div>
        </NewListingQs>
    )
}

export default StepEight
