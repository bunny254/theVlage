import React, { useState, useEffect } from 'react'
import Verification from '../../src/components/authenticate/verification'
import Admin from '../../src/components/authenticate/hostAdmin'
import DashboardPageHeader from "../../src/components/DashboardPageHeader"
import { VerificationCode, GetCookie, ResendVerificationCode } from '../../actions/Auth'
import { LockClosedIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/outline'

const Verify = () => {
    const navlinks = [
        {
            icon: <LockClosedIcon className="h-7 w-7 m-4" />,
            title: 'Passwords',
            link: '/host/account/security',

        },


        {
            icon: <ShieldCheckIcon className="h-7 w-7 m-4" />,
            title: 'Verification',
            link: '/host/Verify',

        },




    ];
    const [loading, setloading] = useState(false)
    const [verif, setVerif] = useState(false)
    const [userD, setUserD] = useState({})
    const [vcode, setvcode] = useState(0)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        let verifieduser = JSON.parse(localStorage.getItem('user'))
        let verifiedstate = localStorage.getItem('verified')
        setUserD(verifieduser)
        // console.log(verifiedstate);
        if (verifieduser.is_verified === true || verifiedstate === 'true') {

            setVerif(true)
        } else {
            setVerif(false)
        }
        // return () => {
        //     setVerif(false)
        // }
    }, [success])

    const Verifunc = () => {
        let code = vcode.toString()
        let data = { "otp_code": code }
        const token = GetCookie('token')


        VerificationCode(data, token)
            .then(response => {
                // console.log(JSON.stringify(response.name));
                if (response.name != "Error") {
                    // alert(data.error)
                    let succs = response.data.message

                    setSuccess(succs)
                    let location = "/client";
                    localStorage.setItem('verified', 'true')
                    // SetLocalStorage('verified', 'true')
                    // localStorage.
                    // if (localStorage.previousPath) location = localStorage.previousPath;
                    window.location = location;
                    // setValues({ authStatus: 2 });
                }
                else {
                    //error handfling
                    console.log(response.response.data);

                    if (response.response.data.error) {
                        let err = response.response.data.error
                        setError(err)


                    }
                    else {
                        setError('Something Went wrong try again')
                    }
                    //     Object.values(err).map(i => (
                    //         setValues({ ...values, errors: i })
                    //         // console.log(i)
                    //     ))

                    // } else {

                    //     setValues({ ...values, errors: "Something Went wrong try again" })
                    //     // console.log(i)


                    // }
                    // let err = response.response.data.errors;
                    // // console.log(typeof err)
                    // Object.values(err).map(i => (
                    //     setValues({ ...values, errors: i })
                    //     // console.log(i)
                    // ))



                }
            })




    }
    const Resendfunc = () => {

        const token = GetCookie('token')
        const data = {}
        ResendVerificationCode(data, token)
            .then(response => {
                if (response.name != "Error") {
                    let succs = response.data.message
                    setSuccess(succs)

                }
                else {

                    console.log(response.response.data);

                    if (response.response.data.error) {
                        let err = response.response.data.error
                        setError(err)


                    }
                    else {
                        setError('Something Went wrong try again')
                    }

                }
            })

    }



    return (
        <Admin>
            <DashboardPageHeader navlinks={navlinks}>
                <div className="relative flex flex-col mt-14 p-2">
                    <div className={`${error ? "relative flex bg-red-100 rounded-lg mt-3 p-3 text-sm text-red-700" : "hidden"}`} role="alert">
                        <span className="pr-3 font-medium">Error!</span> {error}.
                    </div>
                    <div className={`${success ? "relative flex bg-green-100  rounded-lg mt-8 p-3 text-sm text-green-700" : "hidden"}`} role="alert">
                        <span className="pr-3 font-medium">Success!</span> {success}.
                    </div>
                    <div className={`${verif ? "hidden" : "flex flex-col "}`}>
                        <div className=" text-center w-full mb-20">
                            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">Please verify your account</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                Great! You're almost there. Before you can book with us, you'll need to verify your account. Check your email for the verification code.
                                We've sent a verification email to <span className=' font-semibold'>{userD.email}</span>
                            </p>
                        </div>
                        <Verification
                            length={6}
                            label="Enter Verification code"
                            loading={loading}
                            onComplete={code => {
                                setloading(true);
                                setvcode(code)
                                setTimeout(() => setloading(false), 10000)
                            }}
                        />
                        <div className="flex flex-col mx-[10rem] pt-5">
                            <button onClick={Verifunc} className="bg-indigo-700 w-full rounded p-2 text-lg font-semibold text-gray-100 hover:bg-indigo-500 ml-3">Verify</button>
                            <span onClick={Resendfunc} className="text-base text-right cursor-pointer pt-2 text-indigo-800">Resend Code</span>
                        </div>

                    </div>
                    <div className={`${verif ? "relative flex m-5 bg-green-100 rounded" : "hidden"}`}>
                        <p className="font-semibold text-lg p-2 text-green-600">User is verified</p>
                    </div>
                </div>
            </DashboardPageHeader>
        </Admin>
    )
}

export default Verify
