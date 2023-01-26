import { HomeIcon, PencilAltIcon, PlusCircleIcon, UsersIcon } from '@heroicons/react/outline'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DashboardPageHeader from '../../../src/components/DashboardPageHeader'
import Admin from '../../../src/components/authenticate/hostAdmin'
import { GetCookie } from '../../../actions/Auth'
import Pagintion from '../../../src/components/Pagination'
import ModalComp from '../../../src/components/Modal'
import Select from "react-select";
import makeAnimated from 'react-select/animated';

const EditListing = () => {
    const [pagination, setPagination] = useState({
        data: [],
        total: 0,
        per_page: 0,
        current_page: 1,
        pages: 0,
        error: ''
    })
    const [formData, setFormData] = useState({


        location: "",
        longitude: 0,
        latitude: 0,
        "rent_cost": 0,
        "daily_rate": 0,
        "utilities_cost": 0,
        deposit_months: 0,
        "currency": "",




        "errors": '',
        success: false,
        loading: false
    });

    const animatedComponents = makeAnimated();
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
    const { data, total, per_page, current_page, error } = pagination
    const [openModal, setModalState] = useState(false)
    const [property, setProperty] = useState({})
    const [amenities, setAmenities] = useState([]);
    const [service, setServices] = useState([])
    const editConfirm = item => () => {
        setModalState(true)
        setProperty(item)
        // let answer = window.confirm(`Are you sure you want to delete Property ${title}?`)
        // if (answer) {
        //     deleteProperty(id)
        // }
    }
    const [reload, setReload] = useState(false)
    const token = GetCookie('token')
    const makelistingrequest = async (pagenumber) => {

        await axios.get(`https://backend.thevlage.com/api/properties?page=${pagenumber}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                if (response.name != "Error") {
                    setPagination({ data: response.data.data, current_page: response.data.meta.current_page, total: response.data.meta.total, per_page: response.data.meta.per_page })
                    setReload(true)
                    console.log(pagination)

                }
                else {
                    setPagination({ error: 'something went wrong' })

                }

            })


    }
    useEffect(() => {
        makelistingrequest(1)

    }, [reload])
    const handlePageChange = (pgNumber) => {
        makelistingrequest(pgNumber)
    }








    const navlinks = [
        {
            icon: <PlusCircleIcon className="h-7 w-7 m-4" />,
            title: 'New Listing',
            link: '/host/create/new-listing',

        },


        {
            icon: <HomeIcon className="h-7 w-7 m-4" />,
            title: 'My Listings',
            link: '/host/listings/view-listings',

        },
        {
            icon: <PencilAltIcon className="h-7 w-7 m-4" />,
            title: 'Edit Listings',
            link: '/host/listings/edit-listing',

        },






    ];

    return (
        <Admin>
            <DashboardPageHeader navlinks={navlinks} >
                <main className="flex flex-col mt-2">
                    <section className="flex-grow pt-14 px-6 ">


                        <div className="flex flex-col">
                            {
                                data.length > 0 ? console.log(data) : <p>No listings </p>
                            }
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available from</th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>

                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">

                                                    {
                                                        data?.map(item => (
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="ml-4">
                                                                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                                                        <div className="text-sm text-gray-500">{item.building_type}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="ml-4">
                                                                        <div className="text-sm font-medium text-gray-900">{item.location}</div>
                                                                        {/* <div className="text-sm text-gray-500">{item.location}</div> */}

                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="ml-4">
                                                                        <div className="text-sm font-medium text-gray-900">{new Date(item.available_from).toDateString()}</div>
                                                                        <div className="text-sm text-gray-500">{item.stay_type} Days</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="ml-4">
                                                                        <div className="text-sm font-medium text-gray-900">{item.status}</div>
                                                                        {/* <div className="text-sm text-gray-500">{item.is_confirmed == 0 ? 'Not Approved' : 'Approved'}</div> */}

                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="ml-4">
                                                                        <button onClick={editConfirm(item)} className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                                            Edit
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    {/* <section className="hidden xl:inline-flex xl:min-w-[600px]">
                        <Map searchResults={searchresults} />
                    </section> */}
                </main>
                <ModalComp
                    visible={openModal}
                    close={() => { setModalState(false) }}
                    title='Edit Listing'
                    deny_name='Cancel'
                    conf_name='Revoke'
                // handleConfirm={revokeUser(user.id)}
                // handleDeny={() => { setModalState(false) }}

                >
                    <div className="mb-5">
                        <div className="flex mx-auto w-[] relative flex-col">

                            <form>

                                <div className="grid xl:grid-cols-3 xl:gap-4">
                                    <div className="relative z-0 mb-6 w-full group">
                                        <select
                                            // value={this.state.searchParams.stay_type}
                                            // onChange={
                                            //     (e) => {
                                            //         this.setState({ searchParams: { ...this.state.searchParams, stay_type: e.target.value } })

                                            //     }
                                            // }
                                            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            id="building_type">
                                            <option value="">...</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="House">House</option>

                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>

                                        <label for="building_type" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Building type</label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <select
                                            // value={this.state.searchParams.stay_type}
                                            // onChange={
                                            //     (e) => {
                                            //         this.setState({ searchParams: { ...this.state.searchParams, stay_type: e.target.value } })

                                            //     }
                                            // }
                                            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            id="listing_type">
                                            <option value="">...</option>
                                            <option value="private-room">Private Room</option>
                                            <option value="shared-room">Shared Room</option>
                                            <option value="entire_place">Entire Place</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                        <label for="listing_type" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Space offered</label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <select
                                            // value={this.state.searchParams.stay_type}
                                            // onChange={
                                            //     (e) => {
                                            //         this.setState({ searchParams: { ...this.state.searchParams, stay_type: e.target.value } })

                                            //     }
                                            // }
                                            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            id="stay_type">
                                            <option value="">...</option>
                                            <option value="short-stay">Short term</option>
                                            <option value="long-stay">Long Term</option>
                                            <option value="flex-stay">Both</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                        <label for="stay_type" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Duration of stay</label>
                                    </div>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="date" name="floating_date" id="floating_date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                    <label for="floating_date" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available From</label>
                                </div>

                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text" name="property_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="property_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Name</label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <div className="mt-1">
                                        <textarea id="about" name="about" rows="3" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="About your listing..."></textarea>
                                    </div>
                                    <label for="about" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Description</label>
                                </div>


                                <div className="grid xl:grid-cols-3 xl:gap-4">
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="number" min={10} name="bedrooms" id="bedrooms" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                        <label for="bedrooms" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No. of bedrooms</label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="number" min={10} name="bathrooms" id="bathrooms" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                        <label for="bathrooms" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No. of showers</label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="number" min={10} name="unit-size" id="unit-size" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                        <label for="unit-size" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Unit Size(in square metres)</label>
                                    </div>
                                </div>
                                <div className="grid xl:grid-cols-3 xl:gap-4">
                                    <div className="relative z-0 mb-6 w-full group">
                                        <select
                                            // value={this.state.searchParams.stay_type}
                                            // onChange={
                                            //     (e) => {
                                            //         this.setState({ searchParams: { ...this.state.searchParams, stay_type: e.target.value } })

                                            //     }
                                            // }
                                            className="block pt-8 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            id="furnished">
                                            <option value="">...</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>

                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>

                                        <label for="furnished" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">is furnished?</label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <label className="block text-gray-700 text-sm font-semibold " htmlFor="amenities">
                                            Amenities
                                        </label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            onChange={opt => setAmenities({ ...amenities, opt })}
                                            options={options} />

                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <label className="block text-gray-700 text-sm font-semibold " htmlFor="services">
                                            Services
                                        </label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            onChange={opt => setServices({ ...service, opt })}
                                            options={services} />

                                    </div>
                                </div>


                            </form>

                        </div>

                    </div>


                </ModalComp>
                <Pagintion
                    data={total}
                    pageLimit={5}
                    handlePageChange={handlePageChange}
                    currentPage={current_page}
                    dataLimit={per_page}

                />


            </DashboardPageHeader >


        </Admin>
    )
}

export default EditListing

