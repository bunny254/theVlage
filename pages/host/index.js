import React, { useEffect } from 'react'
import Link from 'next/link'
import DashHeader from '../../src/components/DashHeader'
import MenuBuilder from '../../src/components/MainMenu/menuBuilder'
import Admin from '../../src/components/authenticate/hostAdmin'
import { HomeIcon, CheckCircleIcon, UsersIcon, ChatAlt2Icon, CreditCardIcon, SpeakerphoneIcon, BookmarkIcon, QuestionMarkCircleIcon, ShieldCheckIcon } from '@heroicons/react/outline';
import { GetCookie } from '../../actions/Auth'



function AdminIndex() {
    const menu = [
        {
            icon: <CheckCircleIcon className="h-7 w-7 m-4" />,
            title: 'Verify',
            link: '/Verify',
            description: 'Verify your account',
        },

        {
            icon: <HomeIcon className="h-7 w-7 m-4" />,
            title: 'Listings',
            link: '/host/create/new-listing/',
            description: 'Manage your Listings',
        },
        {
            icon: <UsersIcon className="h-7 w-7 m-4" />,
            title: 'Bookings',
            link: '/host/bookings/',
            description: 'Check out booking requests',
        },
        {
            icon: <ShieldCheckIcon className="h-7 w-7 m-4" />,
            title: 'Login and Security',
            link: '/host/account/security',
            description: 'Update your password and secure your account',
        },
        // {
        //     icon: <CreditCardIcon className="h-7 w-7 m-4" />,
        //     title: 'Financials',
        //     link: '/Financials',
        //     description: 'Check out booking requests',
        // },
        // {
        //     icon: <ChatAlt2Icon className="h-7 w-7 m-4" />,
        //     title: 'Messages',
        //     link: '/Inbox',
        //     description: 'Inbox',
        // },
        // {
        //     icon: <SpeakerphoneIcon className="h-7 w-7 m-4" />,
        //     title: 'Promote',
        //     link: '/promote',
        //     description: 'shout out your listing'
        // },
        // {
        //     icon: <BookmarkIcon className="h-7 w-7 m-4" />,
        //     title: 'favorites',
        //     link: '/favorites',
        //     description: 'saved properties'
        // },
        // {
        //     icon: <QuestionMarkCircleIcon className="h-7 w-7 m-4" />,
        //     title: 'FAQ',
        //     link: '/faqs',
        //     description: 'frequently asked questions'
        // }


    ];
    useEffect(() => {
        const user = GetCookie('user')
        const userObj = JSON.parse(user)
        const verified = userObj.is_verified
        if (verified === false) {
            window.location = '/host/Verify'
        }


    }, [])
    return (
        <div>
            <Admin>
                <DashHeader />
                <MenuBuilder menu={menu} />
            </Admin>
        </div>
    )
}

export default AdminIndex
