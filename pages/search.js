import { useRouter } from "next/router"
import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import Map from "../src/components/Map"
import Pub from '../actions/Public'
import { format } from "date-fns"
import axios from "axios"
import InfoCard from "../src/components/InfoCard"
const Search = ({ searchresults, listingresults }) => {
    const router = useRouter()
    const { location, from, guests } = router.query

    const sDate = format(new Date(from), "dd MMMM yy")



    return (
        <div className="h-screen">
            <Header placeholder={`${location} | ${sDate} | ${guests} guests `} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        {listingresults.length} Stays are available on -{sDate}- for location {location}
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        <p>Stays in {location}</p>
                    </h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="btn-major">
                            Cancel
                        </p>
                        <p className="btn-major">
                            Type of Place
                        </p>
                        <p className="btn-major">
                            Price
                        </p>
                        <p className="btn-major">
                            Rooms and Beds
                        </p>
                    </div>
                    <div className="flex flex-col">
                        {
                            listingresults?.map(item => (
                                // console.log(item.id)
                                <InfoCard key={item.id} id={item.id} img={item.cover_image} location={item.location} title={item.name} description={item.description} price={item.rent_cost} />
                            ))
                        }
                    </div>
                </section>
                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map searchResults={listingresults} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {

    const query = context.query
    console.log(query);
    const searchresults = await fetch('https://links.papareact.com/isz')
        .then(res => res.json())
    const listingresults = await Pub.get('/pub/properties', {
        params: query,

    })
        .then(
            response => {
                return response.data.data
            }
        )
        .catch(err => console.log(err));
    return {
        props: {
            searchresults, listingresults
        }
    }
}
