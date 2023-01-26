import React, { useState, useEffect } from 'react'
import Verification from '../src/components/authenticate/verification'
import Admin from '../src/components/authenticate/hostAdmin'
import NewListingQs from '../src/components/NewListingQs'
import DashboardPageHeader from '../src/components/DashboardPageHeader'
import { VerificationCode, GetCookie, SetLocalStorage } from '../actions/Auth'
import { ShieldCheckIcon } from '@heroicons/react/outline'

const Verify = () => {
    const [loading, setloading] = useState(false)
    const [verif, setVerif] = useState(false)
    const [vcode, setvcode] = useState(0)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

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
                    let location = "/host";
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

    useEffect(() => {
        let verifieduser = JSON.parse(localStorage.getItem('user'))
        let verifiedstate = localStorage.getItem('verified')
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
    const navlinks = [
        {
            icon: <ShieldCheckIcon className="h-7 w-7 m-4" />,
            title: 'Verify',
            link: '/Verify',

        },












    ];

    return (
        <Admin>
            <DashboardPageHeader navlinks={navlinks} >
                <NewListingQs title="Please Enter verification code sent on email">
                    <div className="relative">
                        <div className={`${error ? "relative flex bg-red-100 rounded-lg mt-3 p-3 text-sm text-red-700" : "hidden"}`} role="alert">
                            <span className="pr-3 font-medium">Error!</span> {error}.
                        </div>
                        <div className={`${success ? "relative flex bg-green-100 rounded-lg mt-3 p-3 text-sm text-green-700" : "hidden"}`} role="alert">
                            <span className="pr-3 font-medium">Success!</span> {success}.
                        </div>
                        <div className={`${verif ? "hidden" : ""}`}>
                            <Verification
                                length={6}
                                label="Verify"
                                loading={loading}
                                onComplete={code => {
                                    setloading(true);
                                    setvcode(code)
                                    setTimeout(() => setloading(false), 10000)
                                }}
                            />
                            <button onClick={Verifunc} className="bg-indigo-700 rounded p-2 w-full text-lg font-semibold text-gray-100 hover:bg-indigo-500 ml-3">Verify</button>

                        </div>
                        <div className={`${verif ? "relative flex m-5 bg-green-100 rounded" : "hidden"}`}>
                            <p className="font-semibold text-lg p-2 text-green-600">User is verified</p>
                        </div>
                    </div>


                </NewListingQs>
            </DashboardPageHeader>

        </Admin>
    )
}

export default Verify
