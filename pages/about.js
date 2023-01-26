import Head from 'next/head'
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Nav/Navbardark';
import Script from 'next/script'
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
export default function About() {


    return (
        <div className="">
            <Head>
                <title>The Vlage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {/* <Header /> */}


            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section class="text-gray-600 body-font pb-14 mb-2">
                    <div class="container mx-auto flex px-4 py-24 md:flex-row flex-col md:items-center">
                        <div class="lg:flex-grow md:w-3/4 w-5/6 lg:pr-24 md:pr-16 flex flex-col md:items-start md:justify-center md:text-left mb-20  items-center text-center">
                            <p class="mb-8 leading-relaxed">About us
                            </p>
                            <h1 class="sm:text-lg md:text-6xl  mb-4 font-extrabold text-blue-900">
                                Vision: Redefining modern living in Africa through Innovative technology.

                            </h1>


                        </div>
                        <div class="md:w-1/4 ">
                            {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                        </div>
                    </div>
                </section>
                <section class="text-gray-600 body-font">
                    <div class="py-20 flex flex-col">
                        <div class="lg:w-4/6 mx-auto">

                            <div class="flex flex-col sm:flex-row mt-10">
                                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">

                                    <div class="flex flex-col items-center text-center justify-center">
                                        <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Goals</h2>
                                        <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                                    </div>
                                </div>
                                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p class="leading-relaxed text-lg mb-4">Affordable housing throughout African Urban centers</p>
                                    <p class="leading-relaxed text-lg mb-4">Coliving accommodation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class=" text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
                        </div>
                        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The Onset</h1>
                            <p class="mb-8 leading-relaxed text-lg">
                                The Vlage was founded in 2018 and is headquartered in Nairobi Kenya. We started our journey via the  Sheltertech Hackathon in 2018 where we have grown into a startup that offers affordable,safe, decent coliving spaces for young professionals in Africa. Young people through our platform will be able to search, book and pay for decent and affordable housing through our platform, making the search for housing hassle free and convenient across Africa.

                            </p>

                        </div>
                    </div>
                </section>
                <section class=" text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What you get</h1>
                            <p class="text-base mb-8 leading-relaxed">
                                By sharing common spaces and having a private room young professionals will be able to get top notch housing and services for an affordable price. By staying in our spaces our young professionals can save upto 30% of their accommodation cost were they to stay in traditional housing models where they rent out a whole apartment or house.

                            </p>


                            <p>

                                Our business model
                                The Vlage is a proptech company that partners with landlords, host roommates to provide access to private and shared living in African urban centers. We earn a commission from every successful booking of the properties listed on our platform.

                            </p>

                        </div>
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
                        </div>
                    </div>
                </section>
                <section class=" text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
                        </div>
                        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Perks of staying in our coliving spaces:</h1>
                            <ul className='text-base mb-8 leading-relaxed'>
                                <li>Affordability</li>
                                <li> Convenience</li>
                                <li>Access to third party services at a reduced cost</li>
                                <li> Seamless house searching and onboarding process</li>
                                <li>
                                    Community</li>
                            </ul>

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

            </main>
            <Footer />
        </div>
    )
}

