import { HomeIcon, MenuAlt1Icon, PlusCircleIcon, StarIcon, XIcon } from "@heroicons/react/outline"
import { useState } from "react"
import Admin from './authenticate/hostAdmin'
const DashboardPageHeader = (props) => {
    const [isOpen, setisOpen] = useState(true)
    const { navlinks, children } = props
    return (

        <div className="overflow-x-hidden h-screen flex">
            <header className="fixed z-50 h-16 w-full bg-blue-900 shadow flex items-center justify-between">
                <div className="flex items-center h-full">
                    <div className="flex items-center text-center h-full w-30 p-5 ">
                        {/* <span className="w-full text-white text-sm uppercase font-extrabold">WEBARTISAN.BE</span> */}
                        <MenuAlt1Icon onClick={() => setisOpen(true)} className={`h-10 text-gray-300 animate-bounce ${isOpen ? 'hidden' : ''}`} />
                        <XIcon onClick={() => setisOpen(false)} className={`h-10 text-gray-300 animate-pulse ${isOpen ? '' : 'hidden'}`} />
                    </div>
                    <div className="flex items-center p-7 flex-grow">
                        <h1>Dashboard</h1>
                    </div>
                </div>
                <div className="flex items-center h-full text-sm">
                    <div className="flex items-center h-full">
                        {/* <a href="#" className="flex items-center text-white h-full px-4">Support</a> */}
                        <div className="group relative h-full">
                            <a href="/host" className="text-white flex items-center h-full bg-grey-darkest px-4">
                                Back to Main Menu
                            </a>
                            {/* <div className="hidden group-hover:block absolute pin-r top-full w-48 bg-black">
                                    <a href="#" className="block text-left py-3 px-3 text-white hover:text-blue-dark text-xs">
                                        My Account
                                    </a>
                                    <a href="#" className="block text-left py-3 px-3 text-white hover:text-blue-dark text-xs">
                                        Edit Account
                                    </a>
                                    <a href="#" className="block text-left py-3 px-3 text-white hover:text-blue-dark text-xs">
                                        Logout
                                    </a>
                                </div> */}
                        </div>
                    </div>
                </div>
            </header>
            <aside className={`flex-shrink-0 border-t-4 border-gray-400 z-7 shadow-xl  scrollbar-hide h-screen bottom-0 mb-0 w-64 max-h-full bg-blue-900 flex flex-col transition-all duration-300 ${isOpen ? 'fixed' : '-ml-64'}`}>
                <nav className="mt-20 px-6 py-4 flex flex-col text-white font-medium">
                    {
                        navlinks.map(menui => (


                            <a key={menui.title} href={menui.link} className="px-4 py-2 hover:border-gray-400 hover:bg-gray-100 hover:opacity-[0.7] rounded-md hover:shadow-lg  cursor-pointer hover:text-gray-800 flex items-center mb-6  ">
                                <span>{menui.icon}</span>
                                {menui.title}
                            </a>
                            // <MenuItem
                            //     key={menui.title}
                            //     title={menui.title}
                            //     link={menui.link}
                            //     icon={menui.icon}
                            //     description={menui.description}
                            // />
                        ))
                    }
                </nav>


                {/* <nav className="mt-20 px-6 py-4 flex flex-col text-white font-medium">
                        <a href="/host/create/new-listing" className="px-4 py-2 hover:border-gray-400 hover:bg-gray-100 hover:opacity-[0.7] rounded-md hover:shadow-lg  cursor-pointer hover:text-gray-800 flex items-center mb-6  ">
                            <span><PlusCircleIcon className="h-5 mr-2" /></span>New Listing
                        </a>
                        <a href="/host/listings/view-listings" className="px-4 py-2 hover:border-l-4 hover:border-gray-400 hover:bg-gray-100 hover:opacity-[0.7] rounded-md  cursor-pointer hover:text-gray-800 flex mb-6 items-center"><span><HomeIcon className="h-5 mr-2" /></span>My Listings</a>
                        <a href="#" className="px-4 py-2 hover:border-l-4 hover:border-gray-400 hover:bg-gray-100 hover:opacity-[0.7] rounded-md  cursor-pointer hover:text-gray-800 flex mb-6 items-center"><span><StarIcon className="h-5 mr-2" /></span>My Reviews</a>

                    </nav> */}
            </aside>
            <div className={`${isOpen ? 'ml-[15rem]' : ''}`}>
                {children}
            </div>



        </div >

    )
}

export default DashboardPageHeader
