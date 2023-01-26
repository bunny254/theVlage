import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { SearchIcon, UserCircleIcon, UsersIcon, MenuIcon, HomeIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';
function Header({ placeholder }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [userInform, setuserInform] = useState(false)
    const [guests, setGuests] = useState(1)
    const [scrolled, setScrolled] = useState(false);
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const router = useRouter()
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'))
        if (userData && userData.is_verified) {
            return () => {
                setuserInform(true)
            }

        }
        else {
            return () => {
                setuserInform(false)
            }
        }

    }, [])
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 70) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    const handleChange = e => {

        setSearchTerm(e.target.value)
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)

    }
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
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    return (
        <header className={`sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5  md:px-10`}>
            <div onClick={() => router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src={'/logo.svg'}
                    layout='fill'
                    priority={true}
                    objectFit="contain"
                    objectPosition="left" />
            </div>
            <div className='flex items-center px-2 border-2 rounded-full py-2 md:shadow-sm '>

                {/* <p className="p-4 ">Home </p>
                <p className="p-4 ">About</p>
                <p className="p-4 ">Properties</p>
                <p className="p-4 ">Login</p> */}
                <input type="text" value={searchTerm} onChange={handleChange} className="pl-5 mr-2 text-sm text-gray-600 overflow-hidden placeholder-gray-400 bg-transparent outline-none" placeholder={placeholder || "Start your search"} />
                <SearchIcon className="hidden sm:inline-flex h-8 bg-blue-900 p-2 cursor-pointer rounded-full md:mx-2 text-yellow-400" />
            </div>
            <div className="flex items-center justify-end text-gray-500 space-x-4">
                {/* {if (userInform === 'Verified') {
                    re
                } else {
                    
                }} */}


                <a href='/host' className="md:inline cursor-pointer p-2">Become a host</a>
                {/* <HomeIcon className='h-6 cursor-pointer' /> */}
                <div className="hidden md:flex items-center space-x-2 border-2 p-3 rounded-full cursor-pointer">
                    {/* {userInform?.other_names[0]} */}
                    <MenuIcon className="h-6" />

                    <UserCircleIcon className="h-6" />

                </div>
            </div>
            {searchTerm && (
                <div className="flex flex-col rounded-lg col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#e9a839']}
                        onChange={handleSelect} />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <UsersIcon className="h-5" />
                        <input type="number" value={guests} onChange={e => { setGuests(e.target.value) }} className="w-12 pl-2 outline-none text-lg text-blue-600" min={1} id="" />
                    </div>
                    <div className="flex ">
                        <button className="text-gray-500 flex-grow" onClick={() => { setSearchTerm('') }}>Cancel</button>
                        <button className="text-blue-900 flex-grow" onClick={searchLocation}>  Search </button></div>
                </div>
            )}


        </header>
    )
}

export default Header
