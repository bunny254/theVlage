import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Admin from '../../../src/components/authenticate/vlageAdmin'
import { GetCookie } from '../../../actions/Auth'
import DashboardLayout from '../../../src/adminDashboard/layout'
import ModalComp from '../../../src/components/Modal'
import { RevokeUser, UpdateRoles } from '../../../actions/Admin'
import Select from "react-select";
import makeAnimated from 'react-select/animated';



const HomeOwners = ({ landlordresults }) => {
    const [reload, setReload] = useState(false)
    const [user, setUser] = useState({})
    const [roles, setRoles] = useState([])
    const [openModal, setModalState] = useState(false)
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

    const [openUpgrade, setOpenUpgrade] = useState(false)
    const upgradeConfirm = item => () => {
        setOpenUpgrade(true)
        setUser(item)
        // let answer = window.confirm(`Are you sure you want to delete Property ${title}?`)
        // if (answer) {
        //     deleteProperty(id)
        // }
    }

    const upgradeUser = userid => () => {

        const token = GetCookie('token')

        let rles = { role: '' }
        Object.values(roles).map((item, i) => {
            rles = { role: item.value }

        })


        UpdateRoles(token, userid, rles).then(data => {
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
    const userroles = [
        { value: 'admin', label: 'admin' },
        { value: 'landlord', label: 'landlord' },
        { value: 'client', label: 'client' },
    ]
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
                                landlordresults.length > 0 ? console.log(landlordresults) : <p>No Landlords </p>
                            }
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                                                                        <button onClick={upgradeConfirm(item)} className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                                                                            Edit
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className="px-3 py-4 whitespace-nowrap">
                                                                    <div className="ml-2">
                                                                        <button onClick={revokeConfirm(item)} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                                            Revoke
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
                    visible={openUpgrade}
                    close={() => { setOpenUpgrade(false) }}
                    title='Upgrade User Role'
                    deny_name='Cancel'
                    conf_name='Upgrade'
                    handleConfirm={upgradeUser(user.id)}
                    handleDeny={() => { setOpenUpgrade(false) }}

                >
                    <div className="w-full mb-5 ">
                        <form className='flex flex-col relative '>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User email</label>
                                <input type="email" id="email" value={user.email} className="bg-gray-50 disabled border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="roles" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Role</label>
                                <Select
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    onChange={opt => setRoles({ ...roles, opt })}
                                    options={userroles} />
                            </div>
                        </form>

                    </div>


                </ModalComp>
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

export default HomeOwners

export async function getServerSideProps(context) {
    const { req, res } = context
    const { cookies } = req
    const landlordresults = await axios.get(`https://backend.thevlage.com/api/admin/landlords`,
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
