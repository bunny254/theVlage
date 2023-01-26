import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin from '../../src/components/authenticate/vlageAdmin'
import { HomeIcon, CheckCircleIcon, UsersIcon, ChatAlt2Icon, CreditCardIcon, SpeakerphoneIcon, BookmarkIcon, QuestionMarkCircleIcon, ShieldCheckIcon } from '@heroicons/react/outline';
import DashboardLayout from '../../src/adminDashboard/layout';
import Content from './content';
import { GetCookie } from '../../actions/Auth';
function AdminIndex() {

    const [hostD, setHosts] = useState([])
    const [clientsD, setClients] = useState([])
    const [listingD, setListings] = useState([])

    const token = GetCookie('token')

    useEffect(() => {
        getValues()
    }, [])

    const getValues = async () => {
        await axios.get(`https://backend.thevlage.com/api/admin/landlords`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(
                response => {
                    setHosts(response.data)
                }
            )
            .catch(err => console.log(err));
        await axios.get(`https://backend.thevlage.com/api/admin/clients`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(
                response => {
                    setClients(response.data)
                }
            )
            .catch(err => console.log(err));
        await axios.get(`https://backend.thevlage.com/api/properties`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(
                response => {

                    setListings(response.data.meta)

                }
            )
            .catch(err => console.log(err));
    }

    const menu = [


        {
            icon: <HomeIcon className="h-7 w-7 m-4" />,
            title: 'Listings',
            link: '/admin/create/new-listing/',
            description: 'Manage all Listings',
        },
        {
            icon: <UsersIcon className="h-7 w-7 m-4" />,
            title: 'Users',
            link: '/Users',
            description: 'Manage all users',
        },
        {
            icon: <ShieldCheckIcon className="h-7 w-7 m-4" />,
            title: 'Login and Security',
            link: '/host/account/security',
            description: 'Update your password and secure your account',
        },
        {
            icon: <CreditCardIcon className="h-7 w-7 m-4" />,
            title: 'Financials',
            link: '/Financials',
            description: 'Check out booking requests',
        },
        {
            icon: <ChatAlt2Icon className="h-7 w-7 m-4" />,
            title: 'Messages',
            link: '/Inbox',
            description: 'Inbox',
        },




    ];
    return (
        <Admin>
            <DashboardLayout>


                <Content listings={listingD} hosts={hostD} tents={clientsD} />
                {/* <DashHeader />
                <MenuBuilder menu={menu} /> */}

            </DashboardLayout>
        </Admin>



    )
}

export default AdminIndex
