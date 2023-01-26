import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Admin from '../../../src/components/authenticate/vlageAdmin'
import { GetCookie } from '../../../actions/Auth'
import { RevokeUser } from '../../../actions/Admin'
import DashboardLayout from '../../../src/adminDashboard/layout'
import ModalComp from '../../../src/components/Modal'



const Users = ({ landlordresults }) => {

    const [reload, setReload] = useState(false)
    const [user, setUser] = useState({})
    const [openModal, setModalState] = useState(false)
    // useEffect(() => {
    //     if (true) { window.location.reload(false); }

    // }, [reload])
    const revokeConfirm = item => () => {
        setModalState(true)
        setUser(item)
        // let answer = window.confirm(`Are you sure you want to delete Property ${title}?`)
        // if (answer) {
        //     deleteProperty(id)
        // }
    }
    const revokeUser = userid => () => {

        const token = GetCookie('token')
        RevokeUser(token, userid).then(data => {
            // console.log(JSON.stringify(data.response))
            if (data.name != 'Error') {
                // console.log('yeah', data);
                setReload(true)
                setUser({})

            } else {
                if (data.response.data.message) {
                    let err = data.response.data.message;

                    alert(err)
                    // console.log(i)


                } else {

                    alert("Something Went wrong try again")
                    // console.log(i)


                }
            }
        })
    }

    return (
        <Admin>
            <DashboardLayout>
                <main className="flex">
                    <section className="flex-grow pt-14 px-6 ">
                        {/* <p className="text-xs">
                            300+Stays for dates between -{range}- for location {location}
                        </p>
                        <h1 className="text-3xl font-semibold mt-2 mb-6">
                            <p>Stays in {location}</p>
                        </h1> */}

                        <div className="flex flex-col">
                            {
                                landlordresults.length > 0 ? console.log(landlordresults) : <p>No Landlords </p>
                            }
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className='flex justify-end pb-4'>
                                            <a href="/admin/data/landlords">View Landlords</a>
                                        </div>
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Identification</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>


                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">

                                                    {
                                                        landlordresults?.map(item => (
                                                            <tr>
                                                                <td className="px-2 py-4 whitespace-nowrap">
                                                                    <div className="ml-1">
                                                                        <div className="text-sm font-medium text-gray-900">{item.surname} {item.first_name}</div>
                                                                        <div className="text-sm text-gray-500">{item.last_name}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-2 py-4 whitespace-nowrap">
                                                                    <div className="ml-1">
                                                                        <div className="text-sm font-medium text-gray-900">{item.email}</div>
                                                                        <div className="text-sm text-gray-500">{item.phone_number}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-2 py-4 whitespace-nowrap">
                                                                    <div className="ml-1">
                                                                        <div className="text-sm font-medium text-gray-900">{item.id_number}</div>
                                                                        <div className="text-sm text-gray-500">{item.id_type}</div>

                                                                    </div>
                                                                </td>
                                                                <td className="px-3 py-4 whitespace-nowrap">
                                                                    <div className="ml-2">
                                                                        <div className="text-sm font-medium text-gray-900">{item.roles}</div>
                                                                        <div className="text-sm text-gray-500">{item.is_verified === true ? 'Verified' : 'Not Verified'}</div>

                                                                    </div>
                                                                </td>

                                                                <td className="px-3 py-4 whitespace-nowrap">
                                                                    <div className="ml-2">
                                                                        <button onClick={revokeConfirm(item)} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                                            Suspend
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
                    title='Revoke User'
                    deny_name='Cancel'
                    conf_name='Revoke'
                    handleConfirm={revokeUser(user.id)}
                    handleDeny={() => { setModalState(false) }}

                >
                    <div className="w-[100rem] mb-5">
                        <div className="flex relative flex-row">
                            Are you sure you want to revoke user {user.first_name} {user.surname}
                        </div>

                    </div>


                </ModalComp>

            </DashboardLayout >


        </Admin>
    )
}

export default Users

export async function getServerSideProps(context) {
    const { req, res } = context
    const { cookies } = req
    const landlordresults = await axios.get(`https://backend.thevlage.com/api/admin/clients`,
        {
            headers: {
                Authorization: `Bearer ${cookies.token}`
            }
        })
        .then(
            response => {
                return response.data
            }
        )
        .catch(err => console.log(err));
    return {
        props: {
            landlordresults
        }
    }
}
