import React, { useState } from "react"
import DashboardPageHeader from "../../../src/components/DashboardPageHeader"
import { HomeIcon, CheckCircleIcon, UsersIcon, ChatAlt2Icon, CreditCardIcon, SpeakerphoneIcon, BookmarkIcon, QuestionMarkCircleIcon, ShieldCheckIcon, LockClosedIcon } from '@heroicons/react/outline';
import { GetCookie, UpdatePassword } from "../../../actions/Auth";
import DashboardLayout from "../../../src/adminDashboard/layout";
import Admin from "../../../src/components/authenticate/vlageAdmin";

const security = () => {
    const [passData, setPassData] = useState({
        current_password: '',
        new_password: '',
        confpassword: '',
        errors: '',
        loading: false,
        success: ''

    })
    const { current_password, new_password, confpassword, errors, loading, success } = passData
    const handleChange = name => e => {

        setPassData({ ...passData, errors: '', [name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const passwordData = { current_password, new_password }
        if (new_password !== confpassword) {
            setPassData({ ...passData, errors: "Passwords don't match" })

        }
        else {
            const token = GetCookie('token')
            setPassData({ ...passData, loading: true })

            console.log(passwordData);

            await UpdatePassword(passwordData, token)
                .then(response => {
                    if (response.name != "Error") {
                        // alert(data.error)
                        setPassData({ loading: false, success: 'Password changed' })


                    }
                    else if (response.response.data.error) {
                        // alert(JSON.stringify(response.response.data.error))

                        const error = response.response.data.error
                        setPassData({ ...passData, loading: false, errors: error })
                        // console.log(JSON.stringify(response.response.data));

                        // alert(response.error)
                    }
                    else {
                        setPassData({ loading: false, errors: 'something went wrong. Try again' })
                    }
                })

        }
    }

    return (
        <Admin>
            <DashboardLayout>
                <section className="text-gray-600 body-font">

                    {/* <div className="     mt-10 md:mt-0 relative z-10 "> */}

                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="w-full md:ml-auto bg-white shadow-md rounded-lg p-8 flex flex-col md:items-center mb-16 md:mb-0 items-center text-left">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Login and Security
                                <br className="hidden lg:inline-block" />
                            </h1>
                            <p className="mb-8 leading-relaxed">Change password</p>
                            <div className={`${loading ? "relative flex bg-blue-100 rounded-lg p-3 text-sm text-blue-700" : "hidden"}`} role="alert">
                                <span className="flex-grow font-medium">Loading....</span>

                            </div>
                            <div className={`${errors ? "relative flex bg-red-100 rounded-lg p-3 text-sm text-red-700" : "hidden"}`} role="alert">
                                <span className="flex-grow font-medium">Error!</span> {errors}.
                                <button
                                    onClick={() => {
                                        setPassData({ ...passData, errors: '' })
                                    }}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                    data-modal-toggle="default-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div>
                                <div className="relative my-2">
                                    <label htmlFor="current_password" className="leading-7 text-sm text-gray-600">Current Password</label>
                                    <input type="password" value={current_password} onChange={handleChange('current_password')} id="current_password" name="current_password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative my-2">
                                    <label htmlFor="new_password" className="leading-7 text-sm text-gray-600">New Password</label>
                                    <input type="password" value={new_password} onChange={handleChange('new_password')} id="new_password" name="new_password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative my-2">
                                    <label htmlFor="confpassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                                    <input type="password" value={confpassword} onChange={handleChange('confpassword')} id="confpassword" name="confpassword" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                            </div>

                            <div className="flex justify-center relative my-2">
                                <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Update password</button>
                            </div>
                        </div>
                        {/* <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div> */}
                    </div>
                </section>
            </DashboardLayout>
        </Admin>

    )
}

export default security
