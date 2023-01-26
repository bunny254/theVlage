import { HomeIcon, MenuAlt1Icon, PlusCircleIcon, StarIcon, XIcon } from "@heroicons/react/outline"

import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/solid"
const CDashboardLayout = (props) => {
    const [isOpen, setisOpen] = useState(true)
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)

    function handleDropdownMenuClick() {
        setIsDropdownMenuOpen(!isDropdownMenuOpen)
    }
    const { children, routes } = props
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
                            <a href="/client" className="text-white flex items-center h-full bg-grey-darkest px-4">
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
            {
                isOpen &&
                <aside className="z-30 flex-shrink-0 h-[100vh] hidden w-64 overflow-y-auto bg-blue-800  lg:block">
                    <div className="py-4 text-gray-200  ">
                        <a className="ml-6 text-lg font-bold text-gray-800 " href="#">
                            Dashboard
                        </a>
                        <ul className="mt-6">
                            {routes.map((route) =>
                                route.routes ? (
                                    <li className="relative px-6 py-3" key={route.name}>
                                        <button
                                            className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150  "
                                            onClick={handleDropdownMenuClick}
                                            aria-haspopup="true"
                                        >
                                            <span className="inline-flex items-center">
                                                {/* <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} /> */}
                                                <span className="ml-4">{route.name}</span>
                                            </span>
                                            <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
                                        </button>
                                        {
                                            isDropdownMenuOpen && <div>
                                                <ul
                                                    className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-100 rounded-md shadow-inner bg-blue-700  "
                                                    aria-label="submenu"
                                                >
                                                    {route.routes.map((r) => (
                                                        <li
                                                            className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                                            key={r.name}
                                                        >
                                                            <a className="w-full" href={r.path}>
                                                                {r.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>}
                                    </li>
                                ) : (

                                    <li className="relative px-6 py-3" key={route.name}>
                                        <div className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ">

                                            <span className="ml-4">{route.name}</span>
                                        </div>
                                        {/* <NavLink
                                            exact
                                            to={route.path}
                                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                            activeClassName="text-gray-800 dark:text-gray-100"
                                        >
                                            <Route path={route.path} exact={route.exact}>
                                                <span
                                                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                                                    aria-hidden="true"
                                                ></span>
                                            </Route>
                                            <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                                            <span className="ml-4">{route.name}</span>
                                        </NavLink> */}
                                    </li>
                                )
                            )}


                        </ul>
                    </div>
                </aside>
            }
            {isOpen &&
                <aside className="fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-blue-800 dark:bg-gray-800 lg:hidden">
                    <div className="py-4 text-gray-200  ">
                        <a className="ml-6 text-lg font-bold text-gray-800 " href="#">
                            Dashboard
                        </a>
                        <ul className="mt-6">
                            {routes.map((route) =>
                                route.routes ? (
                                    <li className="relative px-6 py-3" key={route.name}>
                                        <button
                                            className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150  "
                                            onClick={handleDropdownMenuClick}
                                            aria-haspopup="true"
                                        >
                                            <span className="inline-flex items-center">
                                                {/* <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} /> */}
                                                <span className="ml-4">{route.name}</span>
                                            </span>
                                            <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
                                        </button>
                                        {
                                            isDropdownMenuOpen && <div>
                                                <ul
                                                    className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-100 rounded-md shadow-inner bg-blue-700  "
                                                    aria-label="submenu"
                                                >
                                                    {route.routes.map((r) => (
                                                        <li
                                                            className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                                            key={r.name}
                                                        >
                                                            <a className="w-full" href={r.path}>
                                                                {r.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>}
                                    </li>
                                ) : (

                                    <li className="relative px-6 py-3" key={route.name}>
                                        <div className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ">

                                            <span className="ml-4">{route.name}</span>
                                        </div>
                                        {/* <NavLink
                                            exact
                                            to={route.path}
                                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                            activeClassName="text-gray-800 dark:text-gray-100"
                                        >
                                            <Route path={route.path} exact={route.exact}>
                                                <span
                                                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                                                    aria-hidden="true"
                                                ></span>
                                            </Route>
                                            <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                                            <span className="ml-4">{route.name}</span>
                                        </NavLink> */}
                                    </li>
                                )
                            )}


                        </ul>
                    </div>
                </aside>
            }
            {children}

        </div>
    )
}

export default CDashboardLayout
