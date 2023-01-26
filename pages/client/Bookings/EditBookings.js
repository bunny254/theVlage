import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Admin from '../../../src/components/authenticate/clientAdmin'
import { GetCookie } from '../../../actions/Auth'
import DashboardLayout from '../../../src/clientDashboard/layout'
import Pagination from '../../../src/components/Pagination'
import ModalComp from '../../../src/components/Modal'
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import { DeleteBooking, RestoreBooking } from '../../../actions/Booking'



const EditBookings = () => {


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
    const [openEdit, setOpenEdit] = useState(false)
    const [openRestore, setOpenRestore] = useState(false)
    const [reload, setReload] = useState(false)
    const token = GetCookie('token')
    useEffect(() => {
        const user = GetCookie('user')
        const userObj = JSON.parse(user)
        const verified = userObj.is_verified
        if (verified === false) {
            window.location = '/client/Verify'
        }


    }, [])
    const makelistingrequest = async (pagenumber) => {

        await axios.get(`https://backend.thevlage.com/api/client/bookings?page=${pagenumber}`,
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
    const editConfirm = item => () => {
        setOpenEdit(true)
        setProperty(item)
        // let answer = window.confirm(`Are you sure you want to delete Property ${title}?`)
        // if (answer) {
        //     deleteProperty(id)
        // }
    }
    const restoreConfirm = item => () => {
        setOpenRestore(true)
        setProperty(item)
        // let answer = window.confirm(`Are you sure you want to delete Property ${title}?`)
        // if (answer) {
        //     deleteProperty(id)
        // }
    }
    const deleteBooking = propertyid => () => {


        const token = GetCookie('token')


        DeleteBooking(propertyid, token).then(data => {

            if (data.name != 'Error') {

                setReload(true)
                setProperty([])
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
    const restoreBooking = propertyid => () => {


        const token = GetCookie('token')


        RestoreBooking(propertyid, token).then(data => {

            if (data.name != 'Error') {

                setReload(true)
                setProperty([])
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
    // useEffect(() => {

    //     loadOptions()
    //     handleOptions()
    // }, [data])


    const handlePageChange = (pgNumber) => {
        makelistingrequest(pgNumber)
    }
    const checkStatus = (item) => {
        if (item.is_trashed === true) {
            return <div className="text-sm font-medium text-gray-900">Booking Cancelled</div>
        } else if (item.admin_confirmed === true) {
            if (item.landlord_confirmed) {
                return <div className="text-sm font-medium text-gray-900">Booking Approved</div>
            }
            else {
                return <div className="text-sm font-medium text-gray-900">Pending Host Approval</div>
            }
        }
        else if (item.admin_confirmed === false) {
            return <div className="text-sm font-medium text-gray-900">Pending Vlage Approval</div>
        }

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
                                data.length > 0 ? console.log('success') : <p>NO Bookings </p>
                            }
                            {console.log(data)}
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property Details</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking Details</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>


                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">

                                                    {
                                                        data?.map(item => (
                                                            <tr>
                                                                <td className="px-2 py-4 whitespace-nowrap">
                                                                    <div className="ml-1">
                                                                        <div className="text-sm font-medium text-gray-900">{item.property.name} </div>
                                                                        <div className="text-sm text-gray-500">{item.property.listing_type}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-2 py-4 whitespace-nowrap">
                                                                    <div className="ml-1">
                                                                        <div className="text-sm font-medium text-gray-900">{item.property.location} </div>
                                                                        <div className="text-sm text-gray-500">{item.building_type}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-2 py-4 whitespace-nowrap">
                                                                    <div className="ml-1">
                                                                        <div className="text-sm font-medium text-gray-900">{new Date(item.date_booked).toDateString()}</div>
                                                                        <div className="text-sm text-gray-500">{item.stay_duration} Days</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-2 py-4 whitespace-nowrap">
                                                                    <div className="ml-1">
                                                                        <div className="text-sm font-medium text-gray-900">Check in {new Date(item.check_in).toDateString()}</div>
                                                                        <div className="text-sm text-gray-500">Check Out {new Date(item.check_out).toDateString()}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-3 py-4 whitespace-nowrap">
                                                                    <div className="ml-2">
                                                                        {checkStatus(item)}

                                                                        {/* <div className="text-sm font-medium text-gray-900">{item.admin_confirmed === true ? 'Pending Host Approval' : 'Pending Vlage Approval'}</div> */}
                                                                        {/* <div className="text-sm text-gray-500"></div> */}

                                                                    </div>
                                                                </td>
                                                                <td className="px-3 py-4 whitespace-nowrap">
                                                                    <div className="ml-2">
                                                                        <button onClick={editConfirm(item)} disabled={item.is_trashed} className={item.is_trashed ? "hidden" : "bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"}>
                                                                            Delete
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className="px-3 py-4 whitespace-nowrap">
                                                                    <div className="ml-2">
                                                                        <button onClick={restoreConfirm(item)} disabled={item.is_trashed ? true : false} className={item.is_trashed ? "bg-yellow-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" : 'hidden'}>
                                                                            Restore
                                                                        </button>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                        ))
                                                    }
                                                </tbody>
                                                {console.log(data)}

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
                    visible={openEdit}
                    close={() => { setOpenEdit(false) }}
                    title='Delete Booking'
                    deny_name='Cancel'
                    conf_name='Delete'
                    handleConfirm={deleteBooking(property.id)}
                    handleDeny={() => { setOpenEdit(false) }}
                >
                    <div className="w-full mb-5 ">
                        <div className="flex relative flex-row">
                            Are you sure you want to cancel reservation
                        </div>

                    </div>


                </ModalComp>
                <ModalComp
                    visible={openRestore}
                    close={() => { setOpenRestore(false) }}
                    title='Delete Booking'
                    deny_name='Cancel'
                    conf_name='Restore'
                    handleConfirm={restoreBooking(property.id)}
                    handleDeny={() => { setOpenRestore(false) }}
                >
                    <div className="w-full mb-5 ">
                        <div className="flex relative flex-row">
                            Are you sure you want to restore reservation
                        </div>

                    </div>


                </ModalComp>
                <Pagination
                    data={total}
                    pageLimit={5}
                    handlePageChange={handlePageChange}
                    currentPage={current_page}
                    dataLimit={per_page}

                />


            </DashboardLayout >


        </Admin>
    )
}

export default EditBookings

