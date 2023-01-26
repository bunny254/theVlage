import React, { useEffect } from 'react'
import CAdmin from "../../src/components/authenticate/clientAdmin"
import DashHeader from "../../src/components/DashHeader"
import DashboardLayout from "../../src/clientDashboard/layout";
import Content from './content';
import MenuBuilder from "../../src/components/MainMenu/menuBuilder";
import { HomeIcon, CheckCircleIcon, UsersIcon, ChatAlt2Icon, CreditCardIcon, SpeakerphoneIcon, BookmarkIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { GetCookie } from '../../actions/Auth';

const ClientIndex = () => {
    const menu = [
        {
            icon: <CheckCircleIcon className="h-7 w-7 m-4" />,
            title: 'Verify',
            link: '/client/Verify',
            description: 'Verify your account',
        },

        {
            icon: <HomeIcon className="h-7 w-7 m-4" />,
            title: 'Bookings',
            link: '/client/Bookings',
            description: 'Manage your Bookings',
        },



        {
            icon: <QuestionMarkCircleIcon className="h-7 w-7 m-4" />,
            title: 'FAQ',
            link: '/faqs',
            description: 'frequently asked questions'
        }


    ];




    // console.log(verified);
    useEffect(() => {
        const user = GetCookie('user')
        const userObj = JSON.parse(user)
        const verified = userObj.is_verified
        if (verified === false) {
            window.location = '/client/Verify'
        }


    }, [])


    return (
        <div>
            <CAdmin>
                <DashboardLayout>


                    <Content />
                    {/* <DashHeader />
                <MenuBuilder menu={menu} /> */}

                </DashboardLayout>
                {/* <DashHeader />

                <MenuBuilder menu={menu} /> */}

            </CAdmin>

        </div>
    )
}

export default ClientIndex
