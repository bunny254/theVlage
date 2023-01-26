import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Admin from '../../../src/components/authenticate/vlageAdmin'
import { GetCookie } from '../../../actions/Auth'
import DashboardLayout from '../../../src/adminDashboard/layout'
import Pagination from '../../../src/components/Pagination'
import ModalComp from '../../../src/components/Modal'
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import { TransferListing } from '../../../actions/Admin'



const Listings = () => {


    const [pagination, setPagination] = useState({
        data: [],
        total: 0,
        per_page: 0,
        current_page: 1,
        error: ''
    })
    const [user, setUser] = useState([])
    const [landlord, setLandlord] = useState({})
    const [property, setProperty] = useState({})
    const { data, total, per_page, current_page, error } = pagination
    const [openTransfer, setOpenTransfer] = useState(false)
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



                }
                else {
                    setPagination({ error: 'something went wrong' })

                }

            })


    }
    const transferConfirm = item => () => {
        setOpenTransfer(true)
        setProperty(item)
        // let answer = window.confirm(`Are you sure you want to delete Property ${title}?`)
        // if (answer) {
        //     deleteProperty(id)
        // }
    }
    const transferProperty = propertyid => () => {

        const token = GetCookie('token')
        const payload = {
            customer: landlord.value
        }


        TransferListing(token, propertyid, payload).then(data => {

            if (data.name != 'Error') {

                setReload(true)
                setUser([])
                window.location.reload(true);


            } else {
                if (data.response.data.message) {
                    let err = data.response.data.message;

                    alert(err)



                } else {

                    alert("Something Went wrong try again")



                }
            }
        })
    }
    useEffect(() => {
        makelistingrequest(1)


    }, [reload])
    useEffect(() => {

        loadOptions()
        handleOptions()
    }, [data])


    const handlePageChange = (pgNumber) => {
        makelistingrequest(pgNumber)
    }
    const loadOptions = async () => {
        await axios.get(`https://backend.thevlage.com/api/admin/landlords`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                if (response.name != "Error") {
                    setUser(response.data)



                }
                else {
                    setPagination({ error: 'something went wrong' })

                }

            })

    }
    const handleOptions = () => {
        const options = []
        const peeps = new Object()
        user.forEach(i => {

            let boing = {
                value: i.id,
                label: i.email
            }
            options.push(boing)

        });

        return options




    }
    const animatedComponents = makeAnimated();

    return (
        <Admin>
            <DashboardLayout>
                <main className="flex">
                    <section className="flex-grow px-6 ">
                        {/* <p className="text-xs">
                            300+Stays htmlFor dates between -{range}- for location {location}
                        </p>
                        <h1 className="text-3xl font-semibold mt-2 mb-6">
                            <p>Stays in {location}</p>
                        </h1> */}

                        <div className="flex flex-col">
                            {
                                data.length > 0 ? console.log('success') : <p>NO listings </p>
                            }
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cover Image</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>


                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">

                                                    {
                                                        data?.map(item => (
                                                            <tr>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="flex items-center">
                                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                                            {/* <img className="rounded-lg h-10 w-10  " src={item.cover_image} /> */}

                                                                        </div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-2 py-4 whitespace-nowrap">
                                                                    <div className="ml-1">
                                                                        <div className="text-sm font-medium text-gray-900">{item.name} </div>
                                                                        <div className="text-sm text-gray-500">{item.building_type}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-2 py-4 whitespace-nowrap">
                                                                    <div className="ml-1">
                                                                        <div className="text-sm font-medium text-gray-900">{item.owner.first_name} {item.owner.surname}</div>
                                                                        <div className="text-sm text-gray-500">{item.owner.email}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-2 py-4 whitespace-nowrap">
                                                                    <div className="ml-1">
                                                                        <div className="text-sm font-medium text-gray-900">{item.location}</div>
                                                                        {/* <div className="text-sm text-gray-500">{item.id_type}</div> */}

                                                                    </div>
                                                                </td>
                                                                <td className="px-3 py-4 whitespace-nowrap">
                                                                    <div className="ml-2">
                                                                        <div className="text-sm font-medium text-gray-900">{item.status}</div>
                                                                        {/* <div className="text-sm text-gray-500">{item.is_verified === true ? 'Verified' : 'Not Verified'}</div> */}

                                                                    </div>
                                                                </td>
                                                                <td className="px-3 py-4 whitespace-nowrap">
                                                                    <div className="ml-2">
                                                                        <button onClick={transferConfirm(item)} className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                                                                            Transfer
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
                <Pagination
                    data={total}
                    pageLimit={5}
                    handlePageChange={handlePageChange}
                    currentPage={current_page}
                    dataLimit={per_page}

                />
                <ModalComp
                    visible={openTransfer}
                    close={() => { setOpenTransfer(false) }}
                    title='Transfer Property'
                    deny_name='Cancel'
                    conf_name='Transfer'
                    handleConfirm={transferProperty(property.id)}
                    handleDeny={() => { setOpenTransfer(false) }}
                >
                    <div className="w-full mb-5 ">
                        <form className='flex flex-col relative '>
                            <div className="mb-6">
                                <label htmlFor="roles" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Owner</label>
                                <Select
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    onChange={opt => setLandlord(opt)}
                                    options={handleOptions()} />
                                {/* <AsyncSelect
                                    cacheOptions
                                    loadOptions={handleOptions}

                                /> */}

                            </div>
                            {/* <div className="mb-6">
                                <label htmlFor="roles" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Role</label>
                                <Select
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    onChange={opt => setRoles({ ...roles, opt })}
                                    options={userroles} />
                            </div> */}
                        </form>

                    </div>


                </ModalComp>

            </DashboardLayout >


        </Admin>
    )
}

export default Listings

