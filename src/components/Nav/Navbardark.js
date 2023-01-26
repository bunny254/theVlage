import { useEffect, useState } from "react"
import { SearchIcon, UserCircleIcon, ChevronDownIcon, UsersIcon, MenuIcon, LogoutIcon, TemplateIcon, } from "@heroicons/react/solid";
import Image from 'next/image'
import { IsAuth } from "../../../actions/Auth";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { useRouter } from 'next/router';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [open, setOpen] = useState(false);
    const [flyer, setFlyer] = useState(false);
    const [flyerTwo, setFlyerTwo] = useState(false);
    const [loginStatus, setLoginStatus] = useState(true)
    const [userType, setUserType] = useState(0)
    const [guests, setGuests] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)

    }
    const checkLoginStatus = () => {
        if (IsAuth() && IsAuth().roles.includes('landlord')) {
            setUserType(1)
            setLoginStatus(true)

        }
        else if (IsAuth() && IsAuth().roles.includes('client')) {
            setUserType(2)
            setLoginStatus(true)

        }
        else {
            setUserType(0)
            setLoginStatus(false)
        }

    }
    useEffect(() => {
        checkLoginStatus()

    }, [])
    const logout = () => {
        let path = window.location.pathname;
        localStorage.clear();
        localStorage.previousPath = path;
        window.location = "/";
    };
    const searchLocation = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchTerm,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guests
            }
        })
    }
    const router = useRouter()
    const handleChange = e => {

        setSearchTerm(e.target.value)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    if (typeof window !== "undefined") {
        // browser code
        window.addEventListener('scroll', changeNav)
    }

    return (
        <>
            {/* This example requires Tailwind CSS v2.0+ */}
            <div className={navbar ? " sticky top-0 z-50 shadow-md bg-white" : " sticky top-0 z-50 bg-blue-900 "}>
                <div className="max-w-7xl h-[7rem] mx-8 sm:px-6">
                    <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">

                            <div onClick={() => router.push('/')} className='cursor-pointer '>
                                <span className="sr-only">The Vlage</span>
                                <Image
                                    src={navbar ? '/logo.svg' : '/logo-white.svg'}
                                    layout='fixed'
                                    height={64}
                                    width={64}
                                    priority={true}
                                    objectFit="contain"
                                    objectPosition="left" />
                            </div>
                        </div>
                        {/* <div className='flex md:hidden items-center px-2 border-2 rounded-full py-2 md:shadow-sm '>


                            <input type="text" value={searchTerm} onChange={handleChange} className="pl-5 mr-2 text-sm text-gray-600 overflow-hidden placeholder-gray-400 bg-transparent outline-none" placeholder={"Start your search"} />
                            <SearchIcon className="hidden sm:inline-flex h-8 bg-blue-900 p-2 cursor-pointer rounded-full md:mx-2 text-yellow-400" />
                        </div> */}
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                {/* Heroicon name: outline/menu */}
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className={navbar ? "hidden md:flex pt-5 text-black space-x-10" : "hidden md:flex pt-5 text-gray-200 space-x-10"}>
                            {/* <a
                                href="#"
                                className="text-base font-medium  hover:text-gray-900"
                            >
                                Properties
                            </a> */}


                            <a
                                href="/about"
                                className="text-base font-medium  hover:text-gray-900"
                            >
                                About
                            </a>
                            <a
                                href="/our-partners"
                                className="text-base font-medium  hover:text-gray-900"
                            >
                                Our Partners
                            </a>
                            <a
                                href="/faq"
                                className="text-base font-medium  hover:text-gray-900"
                            >
                                FAQs
                            </a>
                            {/* <div className="relative ">

                                <button
                                    type="button"
                                    className="group  inline-flex items-center text-base font-medium  "
                                    onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
                                >
                                    <span className="">Info </span>

                                    <ChevronDownIcon
                                        className={
                                            flyerTwo === true
                                                ? "transform rotate-180 text-gray-200 group-hover:text-gray-500 transition ease-out duration-200"
                                                : ""
                                        } />


                                </button>
                                {" "}
                                <div
                                    onMouseLeave={() => setFlyerTwo(false)}
                                    className={
                                        flyerTwo
                                            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                            : " hidden"
                                    }
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            <a
                                                href="#"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >

                                                <svg
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                                    />
                                                </svg>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Help Center
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Get all of your questions answered in our forums or
                                                        contact support.
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >

                                                <svg
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Guides
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Learn how to maximize our platform to get the most
                                                        out of it.
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >

                                                <svg
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Events
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        See what meet-ups and other events we might be
                                                        planning near you.
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >

                                                <svg
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                    />
                                                </svg>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Security
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Understand how we take your privacy seriously.
                                                    </p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div> */}
                        </nav>

                        {!loginStatus && <div className={navbar ? "hidden md:flex items-center pt-5 text-black justify-end md:flex-1 lg:w-0 " : "hidden md:flex items-center pt-5 text-white justify-end md:flex-1 lg:w-0"}>
                            <a
                                href="/host"
                                className="whitespace-nowrap text-base px-2 font-medium  hover:text-gray-900"
                            >
                                Host with us
                            </a>
                            <a
                                href="/client"
                                className="whitespace-nowrap text-base px-2 font-medium  hover:text-gray-900"
                            >
                                Stay with us
                            </a>

                            {/* <a
                                href="#"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sign up
                            </a> */}
                        </div>}
                        {loginStatus &&
                            <div className="relative pl-10 justify-end">
                                <div className="flex-1">
                                    <button
                                        type="button"
                                        className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-3"
                                        onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
                                    >
                                        <div className="hidden justify-end  md:flex items-center space-x-2 border-2 p-3 rounded-full cursor-pointer">
                                            {/* {userInform?.other_names[0]} */}
                                            <MenuIcon className="h-6" />

                                            <UserCircleIcon className="h-6" />

                                        </div>
                                        <svg
                                            className={
                                                flyer === true
                                                    ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                                    : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            }
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>



                                <div
                                    onMouseLeave={() => setFlyer(false)}
                                    className={
                                        flyer
                                            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                            : " hidden"
                                    }
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            <a
                                                href="#"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >
                                                {/* Heroicon name: outline/chart-bar */}
                                                <svg
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                    />
                                                </svg>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Wishlist
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Review favorite properties
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href={userType === 1 ? "/host" : "/client"}
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >
                                                {/* Heroicon name: outline/cursor-click */}
                                                <TemplateIcon className="h-[1.5rem] text-indigo-600 w-[1.5rem]" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Dashboard
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Manage your transactions and account
                                                    </p>
                                                </div>
                                            </a>


                                            <a
                                                href="#"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >
                                                {/* Heroicon name: outline/shield-check */}
                                                <svg
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                    />
                                                </svg>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Terms & Conditions
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Review Policies and Terms and Conditions.
                                                    </p>
                                                </div>
                                            </a>
                                            <span
                                                href="#"
                                                onClick={logout}
                                                className="-m-3 p-3 flex items-start rounded-lg cursor-pointer hover:bg-gray-50"
                                            >
                                                {/* Heroicon name: outline/refresh */}
                                                <LogoutIcon className="h-[1.5rem] text-indigo-600 w-[1.5rem]" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Logout
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Sign out of your account
                                                    </p>
                                                </div>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        }


                    </div>

                </div>
                {searchTerm && (
                    <div className="md:hidden h-[25rem]  overflow-y-scroll rounded-lg col-span-3 mx-auto">
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={['#e9a839']}
                            className="flex flex-col  "
                            onChange={handleSelect} />
                        <div className="flex flex-row items-center border-b border-t-2 py-3 mb-4">
                            <h2 className="text-xl text-left pl-5 font-semibold">Number of Guests</h2>
                            <UsersIcon className="h-5 pl-2 pr-5" />
                            <input type="number" value={guests} onChange={e => { setGuests(e.target.value) }} className="w-12 mr-5 flex-grow text-center  text-lg text-blue-600" min={1} id="" />
                        </div>
                        <div className="flex flex-wrap justify-end rounded px-3 py-3 ">
                            <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3" onClick={() => { setSearchTerm('') }}>Cancel</button>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3" onClick={searchLocation}>  Search </button></div>
                    </div>
                )}
                {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

                <div
                    className={
                        open
                            ? "opacity-100 scale-100 transition ease-in-out duration-200 absolute top-0 inset-x-0 z-50 p-2 transform origin-top-right md:hidden"
                            : "hidden"
                    }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="/logo.svg"
                                        alt="The Vlage"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        {/* Heroicon name: outline/x */}
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/chart-bar */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Affordable Housing
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/cursor-click */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            For our partners
                                        </span>
                                    </a>



                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">


                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Help Center
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Guides
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Security
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Events
                                </a>
                            </div>
                            <div>
                                <a
                                    href="/host"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Be a host
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?
                                    <a href="/host" className="text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
