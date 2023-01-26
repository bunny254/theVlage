import Head from 'next/head'
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Nav/Navbardark';
import Script from 'next/script'
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
export default function Partners() {


    return (
        <div className="">

            <Navbar />
            {/* <Header /> */}


            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section class="text-gray-600 body-font pb-14 mb-2">
                    <div class="container mx-auto flex px-4 py-24 md:flex-row flex-col md:items-center">
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <p class="mb-8 leading-relaxed">Simple Onboarding Process
                            </p>
                            <h1 class="sm:text-lg md:text-6xl  mb-4 font-extrabold text-blue-900">
                                Partner with us by listing your property for coliving

                            </h1>


                        </div>
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img class="object-cover object-center rounded h-[30rem] w-[30rem]" alt="hero" src="images/hero.jpg" />
                        </div>
                    </div>

                </section>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap">
                        <div class="flex flex-wrap w-full">
                            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Compensation</h2>
                                        <p class="leading-relaxed">
                                            The Vlage partners with landlords to list their private or shared spaces, market  them, handle booking, collect payments and remit them to their designated banks or mobile accounts.The Vlage deducts 10% commission for every successful booking.Payments to landlords are made every 72 hours or every Monday of the week or upon agreeable terms.

                                        </p>
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Pricing</h2>
                                        <p class="leading-relaxed">.The Vlage deducts 10% commission for every successful booking.Payments to landlords are made every 72 hours or every Monday of the week or upon agreable terms.
                                            The terms and conditions can be found (add the link to the T&C)
                                        </p>
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <circle cx="12" cy="5" r="3"></circle>
                                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Bookings and listing</h2>
                                        <p class="leading-relaxed">
                                            Our dashboard is simple to use and helps you with tracking booking dates, reservations, financials, tenant approval and declining of a booking, and monthly general performance of the properties.
                                            Our listing process is easy to understand, first sign up, then list your property by filling in the details as requested, upload a cover photo for your listing, submit and once approved you can complete uploading other pictures of the listing.

                                        </p>
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Vetting</h2>
                                        <p class="leading-relaxed">We vet both landlords and tenants through our third part KYC identifiers. We prioritize vetting properties too and make sure that the listings are accurately represented on our platform. </p>
                                    </div>
                                </div>
                                <div class="flex relative">
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">How you get paid</h2>
                                        <p class="leading-relaxed">For a landlord to sign up it is free of charge.

                                            Our platform is a marketing tool for landlords and we only charge 10% commission for every successful booking through our platform while the landlord receives 90% of the total paid amount.
                                            We transfer payment  to landlords via the given bank details shared upon signup.

                                            Depending on the customer type payments to landlords are made monthly or after 72 hours for short term successful booking

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://img.freepik.com/free-photo/business-strategy-concept-grey-white-wall-side-view-man-putting-fingers-step-stairs_176474-6584.jpg?t=st=1647606903~exp=1647607503~hmac=68a95b83dbc22e0bc39fd1f4d1d8fe085923c2000a1d66bcd91b04925b80363a&w=1060" alt="step" />
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

