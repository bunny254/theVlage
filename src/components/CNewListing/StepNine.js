import React, { useState } from 'react';
import NewListingQs from "../NewListingQs"
import DropzoneComp from '../Dropzone';
const StepNine = (props) => {
    const { data, handleChange, next, back } = props;
    const [tooltipStatus, setTooltipStatus] = useState(0);
    const paymentType = (item) => {
        if (item.stay_type === 'flex-stay') {
            return (
                <div>
                    <div className=" bg-white rounded-full flex m-5  md:ml-auto w-full  relative z-10 shadow-2xl">
                        <div className="relative mb-2">

                            <div className="flex justify-end items-center mt-2">

                                <label htmlFor="utilitiesC" className=" text-base  py-2 mx-4 font-medium text-gray-900 block ">Utilities Cost</label>

                                <input placeholder="" type="number" min={1} id="utilitiesC" name="utilitiesC" onChange={handleChange('utilities_cost')} value={data.utilities_cost} className="w-[7rem] mx-3 bg-white rounded-full text-center flex-grow  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                <div className="relative mt-15 mr-5 md:mt-0 md:mr-0" onTouchStart={() => setTooltipStatus(1)} onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
                                    <div className="mr-2 md:mr-0 cursor-pointer">
                                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={12} y1={8} x2="12.01" y2={8} />
                                            <polyline points="11 12 12 12 12 16 13 16" />
                                        </svg>
                                    </div>
                                    {tooltipStatus == 1 && (
                                        <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out right-0 md:left-0 md:ml-8 shadow-lg bg-white p-4 rounded">
                                            <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="text-sm font-bold text-gray-800 pb-1">Utilities cost</p>
                                            <p className="text-xs leading-4 text-gray-600 pb-3">Cost of services as well as utilities such as electricity and water.</p>

                                        </div>
                                    )}{" "}
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className=" bg-white rounded-full flex m-5  md:ml-auto w-full  relative z-10 shadow-2xl">
                        <div className="relative mb-2">

                            <div className="flex justify-evenly items-center mt-2">

                                <label htmlFor="dailyR" className="text-md  py-2 px-3 font-medium text-gray-900 block ">Daily Rates</label>

                                <input placeholder="" type="number" min={1} id="dailyR" name="dailyR" onChange={handleChange('daily_rate')} value={data.daily_rate} className="w-[7rem] mx-3 bg-white rounded-full flex-grow  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                <div className="relative mt-15 mr-5 md:mt-0" onTouchStart={() => setTooltipStatus(2)} onMouseEnter={() => setTooltipStatus(2)} onMouseLeave={() => setTooltipStatus(0)}>
                                    <div className="mr-2 cursor-pointer">
                                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={12} y1={8} x2="12.01" y2={8} />
                                            <polyline points="11 12 12 12 12 16 13 16" />
                                        </svg>
                                    </div>
                                    {tooltipStatus == 2 && (
                                        <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out right-0 md:left-0 md:ml-8 shadow-lg bg-white p-4 rounded">
                                            <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="text-sm font-bold text-gray-800 pb-1">Daily Rates</p>
                                            <p className="text-xs leading-4 text-gray-600 pb-3">Daily amount for short term stays.</p>

                                        </div>
                                    )}{" "}
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className=" bg-white rounded-full flex m-5  md:ml-auto w-full  relative z-10 shadow-2xl">
                        <div className="relative mb-2">

                            <div className="flex justify-evenly items-center mt-2">

                                <label htmlFor="rentalC" className="text-md  py-2 px-3 font-medium text-gray-900 block ">Monthly Rental Cost</label>

                                <input placeholder="" type="number" min={1} id="rentalC" name="rentalC" onChange={handleChange('rent_cost')} value={data.rent_cost} className=" w-[7rem] mx-3 bg-white rounded-full flex-grow  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                <div className="relative mt-15 mr-5 md:mt-0" onTouchStart={() => setTooltipStatus(3)} onMouseEnter={() => setTooltipStatus(3)} onMouseLeave={() => setTooltipStatus(0)}>
                                    <div className="mr-2 cursor-pointer">
                                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={12} y1={8} x2="12.01" y2={8} />
                                            <polyline points="11 12 12 12 12 16 13 16" />
                                        </svg>
                                    </div>
                                    {tooltipStatus == 3 && (
                                        <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out right-0 md:left-0 md:ml-8 shadow-lg bg-white p-4 rounded">
                                            <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="text-sm font-bold text-gray-800 pb-1">Monthly Rent</p>
                                            <p className="text-xs leading-4 text-gray-600 pb-3">Input monthly lease amount.</p>

                                        </div>
                                    )}{" "}
                                </div>

                            </div>

                        </div>
                    </div>



                    <div className=" bg-white rounded-full p-3 flex m-5 md:ml-auto w-full  relative z-10 shadow-2xl">
                        <div className="relative mb-2">

                            <div className="flex justify-evenly items-center mt-2">
                                <label htmlFor="deposit" className="text-md  py-2 px-3 font-medium text-gray-900 block ">Deposit frequency</label>

                                <input type="number" min={1} max={5} id="deposit" name="deposit" onChange={handleChange('deposit_months')} value={data.deposit_months} className="w-[7rem] mx-5 bg-white rounded-full flex-grow  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <div className="relative mt-15 mr-5 md:mt-0" onTouchStart={() => setTooltipStatus(4)} onMouseEnter={() => setTooltipStatus(4)} onMouseLeave={() => setTooltipStatus(0)}>
                                    <div className="mr-2 cursor-pointer">
                                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={12} y1={8} x2="12.01" y2={8} />
                                            <polyline points="11 12 12 12 12 16 13 16" />
                                        </svg>
                                    </div>
                                    {tooltipStatus == 4 && (
                                        <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out right-0 md:left-0 md:ml-8 shadow-lg bg-white p-4 rounded">
                                            <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="text-sm font-bold text-gray-800 pb-1">Deposit Frequency</p>
                                            <p className="text-xs leading-4 text-gray-600 pb-3">Number of months that make up deposit for long term stays. (months  * monthly rent = deposit)</p>

                                        </div>
                                    )}{" "}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
        } else if (item.stay_type === 'long-stay') {
            return (
                <div>
                    <div className=" bg-white rounded-full flex m-5  md:ml-auto w-full  relative z-10 shadow-2xl">
                        <div className="relative mb-2">

                            <div className="flex justify-end items-center mt-2">

                                <label htmlFor="utilitiesC" className=" text-base  py-2 mx-4 font-medium text-gray-900 block ">Utilities Cost</label>

                                <input placeholder="" type="number" min={1} id="utilitiesC" name="utilitiesC" onChange={handleChange('utilities_cost')} value={data.utilities_cost} className="w-[7rem] mx-3 bg-white rounded-full text-center flex-grow  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                <div className="relative mt-15 mr-5 md:mt-0 md:mr-0" onTouchStart={() => setTooltipStatus(1)} onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
                                    <div className="mr-2 md:mr-0 cursor-pointer">
                                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={12} y1={8} x2="12.01" y2={8} />
                                            <polyline points="11 12 12 12 12 16 13 16" />
                                        </svg>
                                    </div>
                                    {tooltipStatus == 1 && (
                                        <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out right-0 md:left-0 md:ml-8 shadow-lg bg-white p-4 rounded">
                                            <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="text-sm font-bold text-gray-800 pb-1">Utilities cost</p>
                                            <p className="text-xs leading-4 text-gray-600 pb-3">Cost of services as well as utilities such as electricity and water.</p>

                                        </div>
                                    )}{" "}
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className=" bg-white rounded-full flex m-5  md:ml-auto w-full  relative z-10 shadow-2xl">
                        <div className="relative mb-2">

                            <div className="flex justify-evenly items-center mt-2">

                                <label htmlFor="rentalC" className="text-md  py-2 px-3 font-medium text-gray-900 block ">Monthly Rental Cost</label>

                                <input placeholder="" type="number" min={1} id="rentalC" name="rentalC" onChange={handleChange('rent_cost')} value={data.rent_cost} className=" w-[7rem] mx-3 bg-white rounded-full flex-grow  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                <div className="relative mt-15 mr-5 md:mt-0" onTouchStart={() => setTooltipStatus(3)} onMouseEnter={() => setTooltipStatus(3)} onMouseLeave={() => setTooltipStatus(0)}>
                                    <div className="mr-2 cursor-pointer">
                                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={12} y1={8} x2="12.01" y2={8} />
                                            <polyline points="11 12 12 12 12 16 13 16" />
                                        </svg>
                                    </div>
                                    {tooltipStatus == 3 && (
                                        <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out right-0 md:left-0 md:ml-8 shadow-lg bg-white p-4 rounded">
                                            <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="text-sm font-bold text-gray-800 pb-1">Monthly Rent</p>
                                            <p className="text-xs leading-4 text-gray-600 pb-3">Input monthly lease amount.</p>

                                        </div>
                                    )}{" "}
                                </div>

                            </div>

                        </div>
                    </div>



                    <div className=" bg-white rounded-full p-3 flex m-5 md:ml-auto w-full  relative z-10 shadow-2xl">
                        <div className="relative mb-2">

                            <div className="flex justify-evenly items-center mt-2">
                                <label htmlFor="deposit" className="text-md  py-2 px-3 font-medium text-gray-900 block ">Deposit frequency</label>

                                <input type="number" min={1} max={5} id="deposit" name="deposit" onChange={handleChange('deposit_months')} value={data.deposit_months} className="w-[7rem] mx-5 bg-white rounded-full flex-grow  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <div className="relative mt-15 mr-5 md:mt-0" onTouchStart={() => setTooltipStatus(4)} onMouseEnter={() => setTooltipStatus(4)} onMouseLeave={() => setTooltipStatus(0)}>
                                    <div className="mr-2 cursor-pointer">
                                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={12} y1={8} x2="12.01" y2={8} />
                                            <polyline points="11 12 12 12 12 16 13 16" />
                                        </svg>
                                    </div>
                                    {tooltipStatus == 4 && (
                                        <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out right-0 md:left-0 md:ml-8 shadow-lg bg-white p-4 rounded">
                                            <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="text-sm font-bold text-gray-800 pb-1">Deposit Frequency</p>
                                            <p className="text-xs leading-4 text-gray-600 pb-3">Number of months that make up deposit for long term stays. (months  * monthly rent = deposit)</p>

                                        </div>
                                    )}{" "}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className=" bg-white rounded-full flex m-5  md:ml-auto w-full  relative z-10 shadow-2xl">
                        <div className="relative mb-2">

                            <div className="flex justify-end items-center mt-2">

                                <label htmlFor="utilitiesC" className=" text-base  py-2 mx-4 font-medium text-gray-900 block ">Utilities Cost</label>

                                <input placeholder="" type="number" min={1} id="utilitiesC" name="utilitiesC" onChange={handleChange('utilities_cost')} value={data.utilities_cost} className="w-[7rem] mx-3 bg-white rounded-full text-center flex-grow  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                <div className="relative mt-15 mr-5 md:mt-0 md:mr-0" onTouchStart={() => setTooltipStatus(1)} onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
                                    <div className="mr-2 md:mr-0 cursor-pointer">
                                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={12} y1={8} x2="12.01" y2={8} />
                                            <polyline points="11 12 12 12 12 16 13 16" />
                                        </svg>
                                    </div>
                                    {tooltipStatus == 1 && (
                                        <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out right-0 md:left-0 md:ml-8 shadow-lg bg-white p-4 rounded">
                                            <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="text-sm font-bold text-gray-800 pb-1">Utilities cost</p>
                                            <p className="text-xs leading-4 text-gray-600 pb-3">Cost of services as well as utilities such as electricity and water.</p>

                                        </div>
                                    )}{" "}
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className=" bg-white rounded-full flex m-5  md:ml-auto w-full  relative z-10 shadow-2xl">
                        <div className="relative mb-2">

                            <div className="flex justify-evenly items-center mt-2">

                                <label htmlFor="dailyR" className="text-md  py-2 px-3 font-medium text-gray-900 block ">Daily Rates</label>

                                <input placeholder="" type="number" min={1} id="dailyR" name="dailyR" onChange={handleChange('daily_rate')} value={data.daily_rate} className="w-[7rem] mx-3 bg-white rounded-full flex-grow  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                <div className="relative mt-15 mr-5 md:mt-0" onTouchStart={() => setTooltipStatus(2)} onMouseEnter={() => setTooltipStatus(2)} onMouseLeave={() => setTooltipStatus(0)}>
                                    <div className="mr-2 cursor-pointer">
                                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={12} y1={8} x2="12.01" y2={8} />
                                            <polyline points="11 12 12 12 12 16 13 16" />
                                        </svg>
                                    </div>
                                    {tooltipStatus == 2 && (
                                        <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out right-0 md:left-0 md:ml-8 shadow-lg bg-white p-4 rounded">
                                            <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="text-sm font-bold text-gray-800 pb-1">Daily Rates</p>
                                            <p className="text-xs leading-4 text-gray-600 pb-3">Daily amount for short term stays.</p>

                                        </div>
                                    )}{" "}
                                </div>

                            </div>

                        </div>
                    </div>





                </div>
            )
        }
    }
    return (
        <NewListingQs title="set your price" >
            <div className="container ">

                <div className=" bg-white rounded-full p-3 flex m-3 md:ml-auto w-full  relative z-10 shadow-2xl">
                    <div className="relative flex ">

                        <div className="flex justify-between flex-grow mt-2">
                            <label htmlFor="bedrooms" className="text-md  py-2 px-3 font-medium text-gray-900 block ">Select your currency</label>

                            <select
                                onChange={handleChange("currency")}
                                value={data.currency}
                                className="select">
                                <option value="" >Currency</option>
                                <option value="USD">USD</option>
                                <option value="KSH">KSH</option>

                            </select>
                        </div>

                    </div>
                </div>

                {
                    paymentType(data)
                }
                <div className="mb-2 flex justify-between  top-0 ">
                    <button onClick={back} className="text-white ml-5 flex-grow bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>

                    <button onClick={next} className="text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Review Your Listing</button>

                </div>



            </div>
        </NewListingQs>
    )
}

export default StepNine
