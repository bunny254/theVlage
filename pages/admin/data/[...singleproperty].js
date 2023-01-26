import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import DashboardPageHeader from "../../../src/components/DashboardPageHeader"
import axios from 'axios'
import { HomeIcon, OfficeBuildingIcon, PlusCircleIcon, UsersIcon } from "@heroicons/react/outline";
import { id } from 'date-fns/locale';
import ProductFeed from '../../../src/components/ProductFeed';
import Admin from '../../../src/components/authenticate/vlageAdmin';
import DashboardLayout from '../../../src/adminDashboard/layout';



const SingleProperty = ({ propertyresults }) => {
    console.log({ propertyresults });
    const amenities = propertyresults.amenities.split(',')
    console.log(amenities);
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

    return (
        <Admin>

            <DashboardLayout>
                <div className="container flex-col items-center mx-auto flex px-10">
                    <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
                        <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20"></div>
                        <div className="relative flex flex-row">
                            <div className="relative first-letter:flex flex-row mt-7 md:w-2/3">

                                <Carousel
                                    autoPlay
                                    infiniteLoop
                                    showStatus={false}
                                    showIndicators={false}
                                    showThumbs={false}
                                    interval={5000}
                                >

                                    <div className="h-[18rem] justify-start w-full rounded-lg px-10 relative mb-4">
                                        <img alt="gallery" className="w-full rounded-lg shadow-lg object-cover h-full object-left flex relative inset-0" src={propertyresults.cover_image} />

                                    </div>



                                    <div className="h-[18rem] justify-start w-full rounded-lg px-10 relative mb-4">
                                        <img src={propertyresults.cover_image} className="w-full rounded-lg shadow-lg object-cover h-full object-left flex relative inset-0" alt="" loading="lazy" />
                                    </div>
                                    {
                                        propertyresults.images?.map(item => (
                                            // console.log(item)
                                            <div className="h-[18rem] justify-start w-full rounded-lg px-10 relative mb-4">
                                                <img src={item.url} className="w-full rounded-lg shadow-lg object-cover h-full object-left flex relative inset-0" alt="" loading="lazy" />
                                            </div>

                                        ))
                                    }
                                    {/* <div>
                            <img src="https://links.papareact.com/gi1" alt="" loading="lazy" />
                        </div>
                        <div>
                            <img src="https://links.papareact.com/gi1" alt="" loading="lazy" />
                        </div> */}

                                </Carousel>
                            </div>
                            {/* <ProductFeed products={propertyresults.images} /> */}
                        </div>


                    </div>
                    <div className=" mx-auto flex px-2 flex-col items-start w-full">
                        <div className="border-b " />
                        <section className="text-gray-600 py-5 body-font">
                            <div className="text-left ml-8 py-4 relative z-10 w-full">
                                <h2 className="text-2xl text-gray-900 font-semibold text-left leading-3 mb-2">{propertyresults.name}</h2>
                                <p className="leading-2 font-light text-xl py-2 text-gray-600">{propertyresults.location}</p>
                                <p className="text-indigo-800 font-medium text-3xl inline-flex">
                                    {propertyresults.currency}
                                    {propertyresults.rent_cost}
                                    / <span className="text-gray-400 pl-2"> Month</span>


                                </p>
                            </div>
                            <div className="container border-t px-5 py-5 mx-auto flex flex-wrap items-center">
                                <div className="grid md:grid-cols-5 m-2 grid-cols-2  gap-x-6 gap-y-4">
                                    <div className="pr-5">
                                        <h2 className="text-sm text-gray-400 font-light leading-2 text-left">
                                            Stay Type
                                        </h2>
                                        <p className="text-lg text-gray-800 text-left font-medium">
                                            {propertyresults.stay_type}
                                        </p>


                                    </div>
                                    <div>
                                        <h2 className="text-sm text-gray-400 font-light leading-2 text-left">
                                            Building type
                                        </h2>
                                        <p className="text-lg text-gray-800 text-left font-medium">
                                            {propertyresults.building_type}
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-sm text-gray-400 font-light leading-2 text-left">
                                            Available from
                                        </h2>
                                        <p className="text-lg text-gray-800 text-left font-medium">
                                            {new Date(propertyresults.available_from).toDateString()}
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-sm text-gray-400 font-light leading-2 text-left">
                                            Furnished
                                        </h2>
                                        <p className="text-lg text-gray-800 text-left font-medium">
                                            {propertyresults.is_furnished ? 'Yes' : 'No'}
                                        </p>

                                    </div>
                                    <div>
                                        <h2 className="text-sm text-gray-400 font-light leading-2 text-left">
                                            We are offering
                                        </h2>
                                        <p className="text-lg text-gray-800 text-left font-medium">
                                            {propertyresults.listing_type}
                                        </p>
                                    </div>

                                </div>


                                {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-gray-900">{propertyresults.description}</h1>
                            <h2>Amenities</h2>
                            <p className="leading-relaxed mt-4">{propertyresults.amenities}</p>
                        </div> */}
                                {/* <div className="border-b border-gray-600 m-4 " /> */}

                            </div>
                            <div className="border-b mb-4 " />
                            <div className="flex flex-col my-4 justify-center">
                                <h4 className="text-2xl text-gray-500 font-semibold text-left leading-3 mb-4">
                                    Description
                                </h4>
                                <div className="text-2xl text-gray-900 font-semibold text-left leading-3 mb-2">
                                    <p className="leading-2 font-light text-xl py-2 text-gray-600">{propertyresults.description}</p>

                                </div>
                            </div>
                            <div className="border-b mb-4 " />
                            <div className="flex flex-col my-4 justify-center">
                                <h4 className="text-2xl text-gray-500 font-semibold text-left leading-3 mb-4">
                                    Amenities
                                </h4>
                                <div className="">
                                    <div className="grid md:grid-cols-3 grid-cols-2  gap-x-6 gap-y-3">
                                        {amenities?.map(amenity => (
                                            <p className="flex items-center text-gray-600 mb-2">
                                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0C3A69] text-white rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{amenity}
                                            </p>
                                        ))}

                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>

                </div>





            </DashboardLayout>
        </Admin>
    )
}

export default SingleProperty
export async function getServerSideProps(context) {
    // const token = getCookie('token')
    // const router = useRouter()
    const prid = context.params.singleproperty;
    const { cookies } = context.req
    const propertyresults = await axios.get(`https://backend.thevlage.com/api/properties/${prid}`,
        {
            headers: {
                Authorization: `Bearer ${cookies.token}`
            }
        }
    )
        .then(
            response => {
                return response.data
            }
        )
        .catch(err => {
            if (err.response) {
                // client received an error response (5xx, 4xx)

                return err.response.data
            } else if (err.request) {
                // client never received a response, or request never left
                console.log('weuh');
                return err.request.data
            } else {
                // anything else
                return false

            }
        });
    return {
        props: {
            propertyresults
        }
    }
}


