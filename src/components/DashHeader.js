import Image from 'next/image'
import { useEffect, useState } from 'react'
import ModalComp from './Modal'
import { BellIcon, UserCircleIcon, PhoneIcon, MenuIcon, HomeIcon, LogoutIcon } from '@heroicons/react/outline'
function DashHeader() {

    const [openModal, setModalState] = useState(false)

    const [userData, setUserData] = useState("")
    useEffect(() => {
        if (localStorage.user) {
            const ud = JSON.parse(localStorage.user)
            setUserData(ud)
        }
        else {
            return false
        }
        // const ud = JSON.parse(localStorage.user)


    }, [])
    const logout = () => {
        let path = window.location.pathname;
        localStorage.clear();
        localStorage.previousPath = path;
        window.location = "/";
    };
    return (
        <header className="sticky top-0 z-50 grid grid-cols-4 rounded-b-xl bg-blue-900 shadow-md p-5 md:px-10">
            <div className='relative items-center h-15 cursor-pointer my-auto'>
                <UserCircleIcon className="h-12 rounded-full text-yellow-500 bg-blue-900" />
                <p className="font-semibold text-gray-100 text-lg">{userData.surname} {userData.other_names}</p>
                <p className="hidden md:inline-flex leading-normal font-normal text-gray-200 ">Manage your account settings and set e-mail preferences</p>
            </div>
            <div className=' items-center h-15 cursor-pointer my-auto rounded-full py-2 md:shadow-sm'>
                <PhoneIcon className="h-12 rounded-full text-yellow-500 bg-blue-900" />
                <p className="font-semibold text-gray-100 text-lg">Support</p>
                <p className="hidden md:inline-flex leading-normal font-normal text-gray-200 ">Need Assistance? Contact a Vlage Representative</p>
            </div>
            <div className='relative items-center h-15 cursor-pointer my-auto'>
                <BellIcon className="h-12 rounded-full text-yellow-500 bg-blue-900" />
                <p className="font-semibold text-gray-100 text-lg">Alerts</p>
                <p className="hidden md:inline-flex leading-normal font-normal text-gray-200 ">Check on your notifications as they appear</p>
            </div>
            <div onClick={(e) => { setModalState(true) }} className=' items-center h-15 cursor-pointer my-auto rounded-full py-2 md:shadow-sm'>
                <LogoutIcon onClick={(e) => { setModalState(true) }} className="h-12 rounded-full text-yellow-500 bg-blue-900" />
                <p className="font-semibold text-gray-100 text-lg">Logout</p>
                <p className="hidden md:inline-flex leading-normal font-normal text-gray-200 ">Back to homepage</p>
            </div>
            <ModalComp
                visible={openModal}
                close={() => { setModalState(false) }}
                title='Logout'
                deny_name='No'
                conf_name='Logout'
                handleConfirm={logout}
                handleDeny={() => { setModalState(false) }}
            >
                <div className="w-[100rem] mb-5">
                    <div className="flex relative ">
                        Are you sure you want to sign out?
                    </div>

                </div>


            </ModalComp>


        </header>
    )
}

export default DashHeader
