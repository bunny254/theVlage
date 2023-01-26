import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

import CDashboardLayout from "../../../src/components/CDashboardLayout"
import DashboardLayout from "../../../src/clientDashboard/layout"
import axios from "axios"
// import Map from "../src/components/Map"
import { format } from "date-fns"
import InfoCard from "../../../src/components/InfoCard"
import DashboardPageHeader from "../../../src/components/DashboardPageHeader"

import { HomeIcon, PlusCircleIcon, FolderRemoveIcon } from "@heroicons/react/outline"
import { GetCookie } from "../../../actions/Auth"



const Bookings = ({ bookingresults }) => {
    console.log(bookingresults);
    useEffect(() => {
        const user = GetCookie('user')
        const userObj = JSON.parse(user)
        const verified = userObj.is_verified
        if (verified === false) {
            window.location = '/client/Verify'
        }


    }, [])

    const router = useRouter()
    const routes = [
        {
            icon: <PlusCircleIcon className="h-7 w-7 m-4" />,
            title: 'New Listing',
            link: '/host/create/new-listing'
        },
        {
            link: '/client/Bookings/NewBookings', // the url
            icon: <HomeIcon className="h-7 w-7 m-4" />, // the component being exported from icons/index.js
            title: 'Bookings', // name that appear in Sidebar
        },
        {
            link: '/#',
            icon: <FolderRemoveIcon className="h-7 w-7 m-4" />,
            title: 'Reviews',
        },

        // {
        //     icon: 'PagesIcon',
        //     name: 'Pages',
        //     routes: [
        //         // submenu
        //         {
        //             path: '/login',
        //             name: 'Login',
        //         },
        //         {
        //             path: '/create-account',
        //             name: 'Create account',
        //         },
        //         {
        //             path: '/forgot-password',
        //             name: 'Forgot password',
        //         },
        //         {
        //             path: '/app/404',
        //             name: '404',
        //         },
        //         {
        //             path: '/app/blank',
        //             name: 'Blank',
        //         },
        //     ],
        // },
    ]

    // const { location, startDate, endDate, guests } = router.query

    // const sDate = format(new Date(startDate), "dd MMMM yy")
    // const eDate = format(new Date(endDate), "dd MMMM yy")
    // const range = `${sDate} - ${eDate}`

    return (
        <div className="h-screen">
            < DashboardLayout >
                <main className="flex flex-col mb-14">
                    <div className='flex mx-6 justify-end relative'>


                        <span className="text-lg pt-[3rem]">
                            <a href="/client/Bookings/EditBookings">Edit Bookings</a>
                        </span>


                    </div>
                    <section className="flex-grow pt-14 px-6 ">
                        {/* <p className="text-xs">
                            300+Stays for dates between -{range}- for location {location}
                        </p>
                        <h1 className="text-3xl font-semibold mt-2 mb-6">
                            <p>Stays in {location}</p>
                        </h1> */}

                        <div className="flex flex-col">
                            {
                                bookingresults?.map(item => (
                                    // console.log(item)
                                    <InfoCard key={item.id} id={item.property.id} img={item.property.cover_image} location={item.property.location} title={item.property.name} description={item.property.description} />
                                ))
                            }
                        </div>

                    </section>
                    {/* <section className="hidden xl:inline-flex xl:min-w-[600px]">
                        <Map searchResults={searchresults} />
                    </section> */}
                </main>
            </DashboardLayout>

        </div>
    )
}

export default Bookings

export async function getServerSideProps(context) {
    const { req, res } = context
    const { cookies } = req
    console.log(cookies);


    const bookingresults = await axios.get(`https://backend.thevlage.com/api/client/bookings`,
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
        .catch(err => {
            return null
        });
    return {
        props: {
            bookingresults
        }
    }
}
