import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

import axios from "axios"
import Map from "../src/components/Map"

import InfoCard from "../src/components/InfoCard"
import { HomeIcon, PlusCircleIcon } from "@heroicons/react/outline";
import Navbar from "../src/components/Nav/Navbar";


const VListings = () => {

    const router = useRouter()

    const [pagination, setPagination] = useState({
        data: null,
        total: null,
        per_page: null,
        current_page: null,
        error: ''
    })

    const { data, total, per_page, current_page, error } = pagination
    const [reload, setReload] = useState(false)

    const makelistingrequest = async (pagenumber) => {

        await axios.get(`https://backend.thevlage.com/api/pub/properties?page=${pagenumber}`,
        )
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
        makelistingrequest()

    }, [reload])


    // const { location, startDate, endDate, guests } = router.query

    // const sDate = format(new Date(startDate), "dd MMMM yy")
    // const eDate = format(new Date(endDate), "dd MMMM yy")
    // const range = `${sDate} - ${eDate}`

    return (
        <div className="h-screen">
            <Navbar />

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
            <ul class="relative px-16 flex mt-2 py-4">
                {/* <li>
                        <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li> */}
                <li>
                    <a href="#" onClick={() => { makelistingrequest(1) }} class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                    <a href="#" onClick={() => { makelistingrequest(2) }} class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                    <a href="#" onClick={() => { makelistingrequest(3) }} aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                    <a href="#" onClick={() => { makelistingrequest(4) }} class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>

                {/* <li>
                        <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li> */}
            </ul>

        </div>
    )
}

export default VListings


