import Head from 'next/head'
import Banner from '../src/components/Banner'
import axios from 'axios';
import MediumCard from '../src/components/Medium';
import LargeCard from '../src/components/LargeCard';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Nav/Navbar';
import { useRouter } from 'next/router';

export default function Home({ cardData }) {
  const router = useRouter();
  return (
    <div className="">
      <Head>
        <title>The Vlage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Navbar />
      <Banner />



      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex  rounded-lg  p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow">

                    <h1 className="text-gray-900 text-lg title-font font-medium mb-3">Our vision</h1>
                    <p className="leading-relaxed text-base">Redefining modern living in Africa through innovative technology.</p>
                    <p className="leading-relaxed text-base">Book your affordable coliving housing today.</p>




                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex  rounded-lg  p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Our goals</h2>
                    <ul>
                      <li className="leading-relaxed text-base">Affordable housing throughout African Urban centers</li>
                      <li className="leading-relaxed text-base">Coliving accomodation</li>

                    </ul>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">


            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>

                  <h2 className="title-font font-medium text-3xl text-gray-900">5</h2>
                  <p className="leading-relaxed">Succesful Bookings</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">3</h2>
                  <p className="leading-relaxed">Users</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">59</h2>
                  <p className="leading-relaxed">Properties</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">5</h2>
                  <p className="leading-relaxed">Counties</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="text-gray-600 body-font">
          <div className=" px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-left title-font mb-4 text-gray-900">Living with us is just a few clicks away.</h1>
            </div>
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">

              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>

              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Signup</h2>
                  <p className="leading-relaxed">Create an account.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                2
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Find a location</h2>
                  <p className="leading-relaxed">Pick a place of your liking.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                3
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Reserve a Listing</h2>
                  <p className="leading-relaxed">Its yours for the staying.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                4
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Welcome to the Vlage</h2>
                  <p className="leading-relaxed">Move in.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">How long we’ve been in business
            </h2>
            <div className="md:w-3/5 md:pl-6">
              <p className="leading-relaxed text-base">
                The Vlage was founded in 2018 and is headquartered in Nairobi Kenya. The company was co-founded by Isaac Kamau, Christine Mutisya, Pauline Gitau and Bonface Nyalwal..

              </p>

            </div>
          </div>
        </section> */}
        {/* <section className="pt-6"> */}
        {/* <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2> */}
        {/* Pull static sever data */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
              exploreData?.map(item => (
                <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
              ))
            }
          </div> */}
        {/* </section> */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Featured Properties</h2>
          <div
            onClick={
              () => {
                router.push({
                  pathname: '/view-listings',

                })
              }}
            className="flex flex-row items-start justify-end">
            {/* <h2 className="text-xl text-right text-blue-800 font-medium">See all {cardData.data.length} properties </h2><span><ArrowCircleRightIcon className='h-7 hover:text-blue-700 active:animate-ping active:text-red-700 cursor-pointer' /></span> */}
          </div>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {
              cardData.data.slice(0, 8).map((i) => (
                // medium card
                <a key={i.id} href={`/properties/${i.id}`}>
                  <MediumCard
                    key={i.id}
                    img={i.cover_image}
                    stayType={i.stay_type}
                    bedrooms={i.bedrooms}
                    bathrooms={i.bathrooms}
                    title={i.name}
                  />
                </a>
              ))
              // console.log(cardData.data)
            }
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="Host with us"
          description="Partner with us "
          buttonText="Be a host"
        />
      </main>




      <Footer />
    </div>
  )
}
export async function getStaticProps() {

  try {

    const cardData = await axios.get('https://backend.thevlage.com/api/pub/properties',)
      .then(
        response => {
          return response.data
        }

      );
    return {
      props: {
        cardData
      }
    }
  } catch (error) {
    (err) => {
      console.log(err);
    }

  }

}
