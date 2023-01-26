import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import ModalComp from "../../../src/components/Modal"
import DashboardLayout from "../../../src/adminDashboard/layout"
import DashboardPageHeader from "../../../src/components/DashboardPageHeader"
import { GetCookie } from '../../../actions/Auth'
import axios from "axios"
import Pagination from "../../../src/components/Pagination"
// import Map from "../src/components/Map"
import { format } from "date-fns"
import InfoCard from "../../../src/components/AdInfoCard"
import { HomeIcon, OfficeBuildingIcon, PlusCircleIcon, UsersIcon } from "@heroicons/react/outline";



const AdminListings = ({ listingresults, listingdata }) => {
    const token = GetCookie('token')

    const router = useRouter()
    const navlinks = [
        {
            icon: <PlusCircleIcon className="h-7 w-7 m-4" />,
            title: 'New Listing',
            link: '/admin/create/new-listing',

        },


        {
            icon: <HomeIcon className="h-7 w-7 m-4" />,
            title: 'Listings',
            link: '/admin/data/view-listings',

        },

        {
            icon: <UsersIcon className="h-7 w-7 m-4" />,
            title: 'Landlords',
            link: '/admin/data/landlords',

        },







    ];
    const [pagination, setPagination] = useState({
        data: [],
        total: 0,
        per_page: 0,
        current_page: 1,
        pages: 0,
        error: ''
    })

    const { data, total, per_page, current_page, error } = pagination
    const [reload, setReload] = useState(false)
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
            <DashboardLayout>
                <main className="flex flex-col mb-14">
                    <div className='flex mx-6 justify-between relative'>
                        <span>
                            <p className="text-lg pt-[3rem]">
                                {/* {console.log(listingdata)} */}
                                {listingdata.total} properties
                            </p>
                        </span>
                        <span className="text-lg pt-[3rem]">
                            <a href="/admin/data/Listings">Transfer Listings</a>
                        </span>


                    </div>

                    <section className="relative flex flex-grow px-6 ">



                        <div className="flex flex-wrap">
                            {
                                data?.map(item => (
                                    // console.log(item)
                                    <InfoCard key={item.id} id={item.id} img={item.cover_image} currency={item.currency} cost={item.rent_cost} bedrooms={item.bedrooms} bathrooms={item.bathrooms} location={item.location} title={item.name} status={item.status} description={item.description} />
                                ))
                            }
                            {/* {console.log(listingresults)} */}
                        </div>

                    </section>

                    {/* <section className="hidden xl:inline-flex xl:min-w-[600px]">
                        <Map AdminListingsResults={AdminListingsresults} />
                    </section> */}
                </main>
                <Pagination
                    data={total}
                    pageLimit={5}
                    handlePageChange={handlePageChange}
                    currentPage={current_page}
                    dataLimit={per_page}

                />

            </DashboardLayout >

        </div>
    )
}

export default AdminListings

export async function getServerSideProps(context) {
    const { req, res } = context
    const { cookies } = req
    console.log(cookies);


    const listingresults = await axios.get(`https://backend.thevlage.com/api/properties`,
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
    const listingdata = await axios.get(`https://backend.thevlage.com/api/properties`,
        {
            headers: {
                Authorization: `Bearer ${cookies.token}`
            }
        })
        .then(
            response => {
                return response.data.meta
            }
        )
        .catch(err => console.log(err));

    return {
        props: {
            listingresults, listingdata

        }
    }
}
