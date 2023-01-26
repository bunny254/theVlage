import React from 'react'
import { CalendarIcon, LocationMarkerIcon, UserGroupIcon } from '@heroicons/react/outline'

class Search extends React.Component {
    state = {
        searchParams: {
            location: '',
            from: '',
            stay_type: '',
            guests: 1
        },

    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmitForm(this.state.searchParams)
    }
    render() {
        return (
            <div className="relative w-[22rem] tablet:w-[36rem] md:w-[40rem]">


                <div className="mt-4 border-b border-gray-200 ">
                    <ul className="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li className="mr-1">
                            <a href="#" className="inline-block py-4 px-4 bg-[#fff] text-base font-semibold text-center text-blue-600 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">Book your stay</a>
                        </li>


                    </ul>
                </div>
                <div id="myTabContent">

                    <div className="p-4 flex flex-col justify-start bg-gray-50  " id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <form className='pl-5' onSubmit={this.onFormSubmit}>
                            <div className={`${this.props.errorMessage ? "relative flex bg-red-100 rounded-lg p-3 text-sm text-red-700" : "hidden"}`} role="alert">
                                <span className="flex-grow font-medium">Error!{this.props.errorMessage}.</span>
                                <span className="flex-grow justify-end text-right cursor-pointer text-base" onClick={this.props.closeMessage}>x</span>
                            </div>
                            <div className="relative px-5  z-0 mb-10 w-[18rem] tablet:w-[30rem] md:w-[36rem] ">
                                <input
                                    type="text"
                                    name="floating_location"
                                    value={this.state.searchParams.location}
                                    onChange={
                                        (e) => {
                                            this.setState({ searchParams: { ...this.state.searchParams, location: e.target.value } })

                                        }
                                    } className="block py-2.5 px-3 w-full text-base text-gray-900 bg-transparent z-2 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_location" className="absolute text-lg px-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    <LocationMarkerIcon className="hidden sm:inline-flex h-8 p-2 cursor-pointer md:mx-2 text-gray-900" />

                                    Search for city
                                </label>
                            </div>
                            <div className="relative px-5 z-0 mb-10 w-[18rem] tablet:w-[30rem] md:w-[36rem] ">
                                <input
                                    type="date"
                                    name="floating_date"
                                    value={this.state.searchParams.from}
                                    onChange={
                                        (e) => {
                                            this.setState({ searchParams: { ...this.state.searchParams, from: e.target.value } })

                                        }
                                    }
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent z-2 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_date" className="absolute text-lg px-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    <CalendarIcon className="hidden sm:inline-flex h-8 p-2 cursor-pointer md:mx-2 text-gray-900" />

                                    Check in date
                                </label>
                            </div>
                            <div className="relative px-5 z-0 mb-10 w-[18rem] tablet:w-[30rem] md:w-[36rem]">
                                <label className="absolute text-lg px-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Stay duration
                                </label>
                                <div className="relative">
                                    <select
                                        value={this.state.searchParams.stay_type}
                                        onChange={
                                            (e) => {
                                                this.setState({ searchParams: { ...this.state.searchParams, stay_type: e.target.value } })

                                            }
                                        }
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent z-2 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                                        <option value="">stay type</option>
                                        <option value="short-stay">Short term</option>
                                        <option value="long-stay">Long Term</option>
                                        <option value="flex-stay">Both</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-5 z-0 mb-10 w-[18rem] tablet:w-[30rem] md:w-[36rem] ">
                                <input
                                    type="number"
                                    name="floating_guests"
                                    value={this.state.searchParams.guests}
                                    onChange={
                                        (e) => {
                                            this.setState({ searchParams: { ...this.state.searchParams, guests: e.target.value } })

                                        }
                                    }

                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent z-2 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_guests" className="absolute text-lg px-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    <UserGroupIcon className="hidden sm:inline-flex h-8 p-2 cursor-pointer md:mx-2 text-gray-900" />

                                    Number of guests
                                </label>
                            </div>

                            <div className="relative px-5 z-0 mb-6 w-[18rem] tablet:w-[30rem] md:w-[36rem] group">
                                <input type="submit" value="Search" className="text-white w-full h-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-base px-5 py-2.5 text-center mr-2 mb-2" />

                            </div>


                        </form>
                    </div>

                </div>

            </div>
        )
    }
}

export default Search