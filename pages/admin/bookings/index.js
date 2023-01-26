import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Admin from '../../../src/components/authenticate/vlageAdmin'
import { ApproveBooking } from '../../../actions/Booking'
import { GetCookie } from '../../../actions/Auth'
import DashboardLayout from '../../../src/adminDashboard/layout'



const Bookings = ({ bookingsresults }) => {
    const [approved, setApproved] = useState(false)
    const ConfirmBooking = bookingid => () => {
        // console.log('delete', propertyid)

        const token = GetCookie('token')

        ApproveBooking(bookingid, token).then(data => {
            // console.log());
            if (data.name != 'Error') {
                // console.log('yeah', data);
                setApproved(true)

            } else {
                if (data.response.data.error) {
                    let err = data.response.data.error;

                    alert(err)
                    // console.log(i)


                } else {

                    alert("Something Went wrong try again")
                    // console.log(i)


                }
            }
        })
    }
    useEffect(() => {
        if (approved) { window.location.reload(false); }

    }, [approved])


    return (
        <Admin>
            <DashboardLayout>
                <main className="flex">
                    <section className="flex-grow px-6 ">
                        {/* <p className="text-xs">
                            300+Stays for dates between -{range}- for location {location}
                        </p>
                        <h1 className="text-3xl font-semibold mt-2 mb-6">
                            <p>Stays in {location}</p>
                        </h1> */}

                        <div className="flex flex-col">
                            {
                                bookingsresults.length > 0 ? console.log(bookingsresults) : <p>No bookings </p>
                            }
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                                        <th scope="col" className="relative px-6 py-3">
                                                            <span className="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">

                                                    {
                                                        bookingsresults?.map(item => (
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="ml-4">
                                                                        <div className="text-sm font-medium text-gray-900">{item.customer.surname} {item.customer.first_name}</div>
                                                                        <div className="text-sm text-gray-500">{item.customer.email}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="ml-4">
                                                                        <div className="text-sm font-medium text-gray-900">{item.property.name}</div>
                                                                        <div className="text-sm text-gray-500">{item.property.location}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="ml-4">
                                                                        <div className="text-sm font-medium text-gray-900">{new Date(item.check_in).toDateString()}</div>
                                                                        <div className="text-sm text-gray-500">{item.stay_duration} Days</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="ml-4">
                                                                        <div className="text-sm font-medium text-gray-900">{item.status}</div>
                                                                        <div className="text-sm text-gray-500">{item.is_confirmed == 0 ? 'Not Approved' : 'Approved'}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="ml-4">
                                                                        <button onClick={ConfirmBooking(item.id)} className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                                            Approve
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="ml-4">
                                                                        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                                            Reject
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

            </DashboardLayout >


        </Admin>
    )
}

export default Bookings

export async function getServerSideProps(context) {
    const { req, res } = context
    const { cookies } = req
    const bookingsresults = await axios.get(`https://backend.thevlage.com/api/bookings`,
        {
            headers: {
                Authorization: `Bearer ${cookies.token}`
            }
        })
        .then(
            response => {
                return response.data.data
            }
        )
        .catch(err => console.log(err));
    return {
        props: {
            bookingsresults
        }
    }
}
