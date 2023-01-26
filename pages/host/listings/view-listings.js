import React, { useEffect, useState } from "react"
import DashboardPageHeader from "../../../src/components/DashboardPageHeader"
import { GetCookie } from '../../../actions/Auth'
import axios from "axios"

import InfoCard from "../../../src/components/AdminInfoCard"
import { HomeIcon, PencilAltIcon, PlusCircleIcon } from "@heroicons/react/outline";
import Pagintion from '../../../src/components/Pagination'

const ViewListing = () => {


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

    const [pagination, setPagination] = useState({
        data: [],
        total: 0,
        per_page: 0,
        current_page: 1,
        error: ''
    })

    const { data, total, per_page, current_page, error } = pagination
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


    // const { location, startDate, endDate, guests } = router.query

    // const sDate = format(new Date(startDate), "dd MMMM yy")
    // const eDate = format(new Date(endDate), "dd MMMM yy")
    // const range = `${sDate} - ${eDate}`

    return (
        <div className="h-screen">
            <DashboardPageHeader navlinks={navlinks} >
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
                                data?.map(item => (
                                    // console.log(item)
                                    <InfoCard key={item.id} id={item.id} img={item.cover_image} location={item.location} title={item.name} description={item.description} />
                                ))
                            }
                        </div>

                    </section>
                    {/* <section className="hidden xl:inline-flex xl:min-w-[600px]">
                        <Map searchResults={searchresults} />
                    </section> */}
                </main>

                <Pagintion
                    data={total}
                    pageLimit={5}
                    handlePageChange={handlePageChange}
                    currentPage={current_page}
                    dataLimit={per_page}

                />
            </DashboardPageHeader >

        </div>
    )
}

export default ViewListing

