import { useRouter } from 'next/router'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import BookingCard from '../../src/components/BookingCard'
import Navbar from '../../src/components/Nav/Navbardark';
import { GetCookie } from '../../actions/Auth';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import UserContext from '../../contexts/UserContext';

function pid({ listingresults }) {
    let contextType = UserContext
    const router = useRouter()
    const { pid } = router.query
    console.log(listingresults);
    const user = GetCookie('user')
    let user_client = {
        email: "test@email.com",
        first_name: "John",
        gender: "Male",
        id: "-",
        id_number: null,
        id_type: null,
        is_verified: true,
        last_name: "Unknown",
        phone_number: "1111111116",
        roles: ["client"],
        surname: "Doe"
    }
    if (user !== undefined) {
        user_client = JSON.parse(user)
    }

    const amenities = listingresults.amenities.split(',')



    return (
        <>
            <Navbar />
            <main className="max-w-7xl flex flex-col mx-1 px-8 sm:px-16">
                <section>
                    <div className="flex mt-2 pt-2">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                                    Home
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <a href="#" className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Properties</a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium">{listingresults.name}</span>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>
                <div className="flex md:flex-row flex-col">
                    <div className="md:w-4/6 w-full flex flex-col">
                        <section className="text-gray-600 body-font">
                            <div className="md:flex mt-7 md:w-2/3">
                                <Carousel
                                    showArrows={true}
                                    showThumbs={false}
                                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                        hasPrev && (
                                            <button
                                                type="button"
                                                onClick={onClickHandler}
                                                title={label}
                                                className=""
                                                style={{
                                                    position: "absolute",
                                                    top: "10rem",
                                                    bottom: "auto",
                                                    padding: ".2rem",
                                                    margin: "3rem",
                                                    color: '#0065c3',
                                                    zIndex: 2,
                                                    fontWeight: '700',
                                                    borderRadius: "5px",
                                                    backgroundColor: "#e1e1e1",
                                                }}
                                            >
                                                <ChevronLeftIcon className='h-8 w-8 text-[#0065c3]' />
                                            </button>
                                        )
                                    }
                                    renderArrowNext={(onClickHandler, hasNext, label) =>
                                        hasNext && (
                                            <button
                                                type="button"
                                                onClick={onClickHandler}
                                                title={label}
                                                style={{
                                                    position: "absolute",
                                                    top: "10rem",
                                                    bottom: "auto",
                                                    padding: ".2rem",
                                                    left: '40rem',
                                                    margin: "3rem",
                                                    color: '#0065c3',
                                                    zIndex: 2,
                                                    fontWeight: '700',
                                                    borderRadius: "5px",
                                                    backgroundColor: "#e1e1e1",
                                                }}
                                            >
                                                <ChevronRightIcon className='h-8 w-8 text-[#0065c3]' />
                                            </button>
                                        )
                                    }
                                >

                                    {
                                        listingresults.images.map((i) => (
                                            // medium card
                                            <div key={i.url} className="h-[30rem] justify-start items-center w-[50rem] rounded-lg relative mb-4">
                                                <img alt="gallery" className="rounded-lg  object-cover h-full object-left flex relative inset-0" src={i.url} />
                                            </div>


                                        ))
                                        // console.log(cardData.data)
                                    }
                                    <div className="h-[30rem] justify-start items-center w-[50rem] rounded-lg relative mb-4">
                                        <img alt="gallery" className="rounded-lg object-cover h-full object-left flex relative inset-0" src={listingresults.cover_image} />

                                    </div>
                                </Carousel>




                            </div>
                        </section>



                        {/* <section>

                            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 py-3 -ml-3">
                                {
                                    listingresults.images.map((i) => (
                                        // medium card
                                        <img alt="gallery" className="w-[10rem] rounded-lg shadow-lg object-cover h-[10rem] object-left flex relative inset-0" src={i.url} />



                                    ))
                                    // console.log(cardData.data)
                                }
                            </div>
                        </section> */}
                        <div className="border-b " />
                        <section className="text-gray-600 py-5 body-font">
                            <div className="text-left ml-8 py-4 relative z-10 w-full">
                                <h2 className="text-2xl text-gray-900 font-semibold text-left leading-3 mb-2">{listingresults.name}</h2>
                                <p className="leading-2 font-light text-xl py-2 text-gray-600">{listingresults.location}</p>
                                <p className="text-indigo-800 font-medium text-3xl inline-flex">
                                    {listingresults.currency}
                                    {listingresults.rent_cost}
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
                                            {listingresults.stay_type}
                                        </p>


                                    </div>
                                    <div>
                                        <h2 className="text-sm text-gray-400 font-light leading-2 text-left">
                                            Building type
                                        </h2>
                                        <p className="text-lg text-gray-800 text-left font-medium">
                                            {listingresults.building_type}
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-sm text-gray-400 font-light leading-2 text-left">
                                            Available from
                                        </h2>
                                        <p className="text-lg text-gray-800 text-left font-medium">
                                            {new Date(listingresults.available_from).toGMTString()}
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-sm text-gray-400 font-light leading-2 text-left">
                                            Furnished
                                        </h2>
                                        <p className="text-lg text-gray-800 text-left font-medium">
                                            {listingresults.is_furnished ? 'Yes' : 'No'}
                                        </p>

                                    </div>
                                    <div>
                                        <h2 className="text-sm text-gray-400 font-light leading-2 text-left">
                                            We are offering
                                        </h2>
                                        <p className="text-lg text-gray-800 text-left font-medium">
                                            {listingresults.listing_type}
                                        </p>
                                    </div>

                                </div>


                                {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-gray-900">{listingresults.description}</h1>
                            <h2>Amenities</h2>
                            <p className="leading-relaxed mt-4">{listingresults.amenities}</p>
                        </div> */}
                                {/* <div className="border-b border-gray-600 m-4 " /> */}

                            </div>
                            <div className="border-b mb-4 " />
                            <div className="flex flex-col my-4 justify-center">
                                <h4 className="text-2xl text-gray-500 font-semibold text-left leading-3 mb-4">
                                    Description
                                </h4>
                                <div className="text-2xl text-gray-900 font-semibold text-left leading-3 mb-2">
                                    <p className="leading-2 font-light text-xl py-2 text-gray-600">{listingresults.description}</p>

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
                                            <p key={amenity} className="flex items-center text-gray-600 mb-2">
                                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0C3A69] text-white rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{amenity}
                                            </p>
                                        ))}

                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col my-4 justify-center">
                                <h4 className="text-2xl text-gray-500 font-semibold text-left leading-3 mb-4">
                                    Services
                                </h4>
                                <div className="">
                                    <div className="grid md:grid-cols-3 grid-cols-2  gap-x-6 gap-y-3">


                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="md:w-2/6 w-full pt-6 md:pl-12 items-start justify-start flex flex-col">
                        {/* {console.log(contextType)} */}
                        <UserContext.Provider value={user_client}>
                            <BookingCard proid={pid} title={listingresults.name} stype={listingresults.stay_type} btype={listingresults.building_type} currency={listingresults.currency} depo={listingresults.deposit_months} bedrooms={listingresults.bedrooms} utilities={listingresults.utilities_cost} dailyR={listingresults.daily_rates} rent={listingresults.rent_cost} />
                        </UserContext.Provider>
                    </div>
                </div>

            </main>

        </>
    )

}

export default pid
export async function getServerSideProps(context) {
    // const token = getCookie('token')
    // const router = useRouter()
    const prid = context.params.pid;
    const { cookies } = context.req
    // let user = null
    // if (cookies.user !== undefined) {
    //     user = cookies.user

    // }

    const searchresults = await fetch('https://links.papareact.com/isz')
        .then(res => res.json())
    const listingresults = await axios.get(`https://backend.thevlage.com/api/pub/properties/${prid}`,
    )
        .then(
            response => {
                return response.data
            }
        )
        .catch(err => console.log(err));
    return {
        props: {
            searchresults, listingresults
        }
    }
}
