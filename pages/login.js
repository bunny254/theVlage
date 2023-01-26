import React, { useState } from 'react'
import Router from 'next/router'
import { Signin, Signup, Authenticate, Reset, IsAuth, SetLocalStorage } from '../actions/Auth'
import { EyeIcon, EyeOffIcon, LockClosedIcon, MailIcon, PhoneIcon, ScaleIcon, UserGroupIcon, UserIcon, IdentificationIcon } from '@heroicons/react/solid';
import Modal from '../src/components/Modal'



const Auth = () => {

    const [isContainerActive, setIsContainerActive] = React.useState(true);
    const [isPasswordHidden, setIsPasswordHidden] = React.useState(true)
    const signUpButton = () => {
        setIsContainerActive(false);
        setValues({ ...values, errors: '' })
    };
    const signInButton = () => {
        setIsContainerActive(true);
        setValues({ ...values, errors: '' })
    };
    const eyeIcon = () => {
        if (isPasswordHidden) {
            setIsPasswordHidden(false)
        }
        else {
            setIsPasswordHidden(true)
        }

    }
    const [values, setValues] = React.useState({
        first_name: "",
        last_name: "",
        surname: "",
        id_number: "",
        id_type: "",
        gender: '',
        email: '',
        phone_number: "",
        password: '',
        conf_password: '',
        role: '',
        errors: '',
        loading: false,
        authStatus: 0,
        message: '',
        showForm: true
    })
    const { first_name, last_name, surname, id_number, id_type, conf_password, email, phone_number, password, gender, role, errors, loading, message, authStatus, showForm } = values
    const [openModal, setModalState] = useState(false)
    const [modalsec, setmodalsec] = useState(false)
    const [emailReset, setEmailReset] = useState({
        errorReset: ''
    })
    const [loadings, setLoadings] = useState(false)
    const { errorReset } = emailReset
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    // let history = useHistory();

    React.useEffect(() => {


        if (IsAuth()) {
            Router.push(`/`)

        }
    })
    React.useEffect(() => {
        if (!errors) {
            console.log(errors);
        }
        else {
            console.log(errors)
        }

    }, [errors])
    const handleSubmit = async (e) => {
        // history = useHistory();
        e.preventDefault()
        setValues({ ...values, authStatus: 1 })
        const user = { email, password }
        console.log(user)

        await Signin(user)
            .then(response => {
                if (response.name != "Error") {
                    //save user token to cookies 
                    //save user info to local storage
                    // alert("sign in Succesful")
                    // setValues({ authStatus: 2 });
                    // console.log(response.data);
                    Authenticate(response.data, () => {
                        if (IsAuth) {
                            setValues({ authStatus: 2 });
                            let location = "/";
                            let verified = response.data.user.is_verified
                            let usertype = response.data.user.roles
                            if (verified === true) { SetLocalStorage('verified', 'true') }
                            else {
                                location = `${usertype.includes('host') ? "/host/Verify" : "/client/Verify"}`
                            }
                            // if (localStorage.previousPath) location = localStorage.previousPath;
                            window.location = location;

                        }

                    })
                }
                else {
                    //error handfling
                    // console.log(response.response.data);
                    if (response.response.data.error) {
                        let err = response.response.data.error;

                        setValues({ ...values, errors: err })
                        // console.log(i)


                    } else {

                        setValues({ ...values, errors: "Something Went wrong try again" })
                        // console.log(i)


                    }
                    // let err = response.response.data.errors;
                    // // console.log(typeof err)
                    // Object.values(err).map(i => (
                    //     setValues({ ...values, errors: i })
                    //     // console.log(i)
                    // ))



                }
            })
    }
    function checkPasswordValidation(password) {
        const isWhitespace = /^(?=.*\s)/;
        if (isWhitespace.test(password)) {
            setValues({ ...values, errors: "Password must not contain Whitespaces." })
        }


        const isContainsUppercase = /^(?=.*[A-Z])/;
        if (!isContainsUppercase.test(password)) {
            setValues({ ...values, errors: "Password must have at least one Uppercase Character." })
        }


        const isContainsLowercase = /^(?=.*[a-z])/;
        if (!isContainsLowercase.test(password)) {
            setValues({ ...values, errors: "Password must have at least one Lowercase Character." })

        }


        const isContainsNumber = /^(?=.*[0-9])/;
        if (!isContainsNumber.test(password)) {
            setValues({ ...values, errors: "Password must contain at least one Digit." })
        }


        const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
        if (!isContainsSymbol.test(password)) {
            setValues({ ...values, errors: "Password must contain at least one Special Symbol." })

        }


        const isValidLength = /^.{10,16}$/;
        if (!isValidLength.test(password)) {
            setValues({ ...values, errors: "Password must be 10-16 Characters Long." })

        }
        if (!password === conf_password) {
            setValues({ ...values, errors: "Password mismatch." })
        }
    }
    const handleSignupSubmit = async (e) => {
        // history = useHistory();
        e.preventDefault()

        checkPasswordValidation(password)
        if (!errors) {
            setValues({ ...values, authStatus: 1 })
        }
        else {
            console.log(errors);
        }


        const user = { email, surname, last_name, first_name, id_type, id_number, phone_number, password, gender, role }
        console.log(user)



        await Signup(user)
            .then(response => {
                // console.log(JSON.stringify(response.name));
                if (response.name != "Error") {
                    // alert(data.error)
                    alert("sign up Succesful")
                    let location = "/login";
                    // if (localStorage.previousPath) location = localStorage.previousPath;
                    window.location = location;
                    setValues({ authStatus: 2 });
                }
                else {
                    //error handfling
                    if (response.response.data.errors) {
                        let err = response.response.data.errors;
                        Object.values(err).map(i => (
                            setValues({ ...values, errors: i })
                            // console.log(i)
                        ))

                    } else if (response.response.status === 412) {
                        setValues({ ...values, errors: "ID Verification failed check ID Field" })
                    }
                    else {


                        setValues({ ...values, errors: "Something Went wrong try again" })
                        // console.log(i)


                    }
                    // let err = response.response.data.errors;
                    // // console.log(typeof err)
                    // Object.values(err).map(i => (
                    //     setValues({ ...values, errors: i })
                    //     // console.log(i)
                    // ))



                }
            })
    }
    const handlePasswordReset = async (e) => {
        e.preventDefault()
        const userReset = { email }
        console.log(userReset)
        setLoadings(true)
        await Reset(userReset)
            .then(response => {
                if (response.name != "Error") {
                    // alert(data.error)
                    setLoadings(false)
                    setModalState(false)
                    setmodalsec(true)
                }
                else if (response.response.data.error) {
                    // alert(JSON.stringify(response.response.data.error))
                    setLoadings(false)
                    const error = response.response.data.error
                    setEmailReset({ errorReset: error })
                    // console.log(JSON.stringify(response.response.data));

                    // alert(response.error)
                }




            })

    }
    const handleChange = name => e => {

        setValues({ ...values, errors: false, [name]: e.target.value })
    }





    return (
        <>
            <div className={`contaainer ${isContainerActive ? "" : " sign-up-mode"}`}>
                <div className="container__forms">
                    <div className="fooorm">
                        <form className="foorm form__sign-in">
                            <h2 className=" text-2xl text-gray-700 mb-3">Welcome back user, Login</h2>
                            <div className={`${errors ? "relative flex bg-red-100 rounded-lg p-3 text-sm text-red-700" : "hidden"}`} role="alert">
                                <span className="flex-grow font-medium">Error!</span> {errors}.
                            </div>
                            <div className={`${authStatus === 2 ? "relative flex bg-green-100 rounded-lg p-3 text-sm text-green-700" : "hidden"}`} role="alert">
                                <span className="flex-grow font-medium">Success!</span> Welcome.
                            </div>
                            <div className="relative flex items-center w-full max-w-[30rem] h-12 m-3 rounded-full p-2 bg-gray-100">
                                <UserIcon className="h-6 w-6 rounded-full text-gray-400 m-2" />
                                <input className=" text-[1.2rem] cursor-pointer  placeholder-gray-400 bg-transparent outline-none flex-grow font-normal rounded-full p-[0.5rem]" value={email} onChange={handleChange('email')} type="email" placeholder="Email" required />
                            </div>
                            <div className="relative flex items-center w-full max-w-[30rem] h-12 m-3 rounded-full p-2 bg-gray-100">
                                <LockClosedIcon className="h-6 w-6 rounded-full text-gray-400 m-2" />
                                <input type={`${isPasswordHidden ? "password" : "text"}`} className=" text-[1.2rem] cursor-pointer  placeholder-gray-400 bg-transparent outline-none flex-grow font-normal rounded-full p-[0.5rem]" value={password} onChange={handleChange('password')} placeholder="Password" required />
                                <EyeIcon onClick={eyeIcon} className={`${isPasswordHidden ? "h-6 w-6 rounded-full text-gray-400 m-2" : "hidden"}`} />
                                <EyeOffIcon onClick={eyeIcon} className={`${isPasswordHidden ? "hidden" : "h-6 w-6 rounded-full text-gray-400 m-2"}`} />
                            </div>
                            <div className="relative flex p-2 m-2 items-center">
                                <div className="left-0">
                                    <input className="form__submit" type="submit" onClick={handleSubmit} value="Login" />
                                </div>
                                <div className="ml-5 text-right">
                                    <a className="no-underline" onClick={() => setModalState(true)}>Forgot password?</a>
                                </div>

                            </div>
                            <div className="ui horizontal divider">
                                Or
                            </div>
                            <p className=" text-lg p-2 mb-1">Sign in with social platforms</p>
                            <div className="flex justify-center">
                                <a href="#" className="no-underline form__social-icons">
                                    <i className="large facebook f icon"></i>
                                </a>
                                <a href="#" className=" no-underline form__social-icons">
                                    <i className="large twitter icon"></i>
                                </a>
                                <a href="#" className="no-underline form__social-icons">
                                    <i className="large google icon"></i>
                                </a>
                                <a href="#" className="no-underline form__social-icons">
                                    <i className="large linkedin icon"></i>
                                </a>
                            </div>
                        </form>
                        <form className="foorm form__sign-up" onSubmit={handleSignupSubmit}>
                            <h2 className=" text-2xl text-gray-700 mb-3">Welcome User, Sign Up</h2>
                            <div className={`${errors ? "relative flex bg-red-100 rounded-lg p-3 text-sm text-red-700" : "hidden"}`} role="alert">
                                <span className="flex-grow font-medium">Error!</span> {errors}.
                            </div>
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-1/3">
                                    <div className="relative w-full max-w-[30rem] flex items-center h-12 m-3 rounded-full p-[0.3rem] bg-gray-100">
                                        <UserIcon className="hidden md:flex h-6 w-6 rounded-full text-gray-400 m-2" />
                                        <input type="text" className=" cursor-pointer  placeholder-gray-400 bg-transparent outline-none flex-grow font-normal rounded-full ml-[0.1rem]" placeholder="Surname" htmlFor="surname" value={surname} onChange={handleChange('surname')} required />
                                    </div>
                                </div>
                                <div class="p-2 w-1/3">
                                    <div className="relative w-full max-w-[30rem] flex items-center h-12 m-3 rounded-full p-[0.3rem] bg-gray-100">
                                        <UserIcon className="hidden md:flex h-6 w-6 rounded-full text-gray-400 m-2" />
                                        <input type="text" className=" cursor-pointer  placeholder-gray-400 bg-transparent outline-none flex-grow  rounded-full ml-[0.2rem]" placeholder="First name" htmlFor="firstname" value={first_name} onChange={handleChange('first_name')} required />
                                    </div>
                                </div>
                                <div class="p-2 w-1/3">
                                    <div className="relative w-full max-w-[30rem] flex items-center h-12 m-3 rounded-full p-[0.3rem] bg-gray-100">
                                        <UserIcon className="hidden md:flex h-6 w-6 rounded-full text-gray-400 m-2" />
                                        <input type="text" className=" cursor-pointer  placeholder-gray-400 bg-transparent outline-none font-normal rounded-full ml-[0.2rem]" placeholder="Last name" value={last_name} onChange={handleChange('last_name')} required />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative w-full max-w-[30rem] flex items-center h-12 m-3 rounded-full p-[0.3rem] bg-gray-100">
                                        <IdentificationIcon className="hidden md:flex h-6 w-6 rounded-full text-gray-400 m-2" />
                                        <select
                                            placeholder="ID Type"
                                            className="  cursor-pointer  placeholder-gray-400 bg-transparent outline-none font-normal rounded-full ml-[0.2rem]"
                                            onChange={e => {
                                                setValues({ ...values, id_type: e.target.value })
                                            }}
                                        >
                                            <option value="" disabled selected >ID Type</option>
                                            <option value="NATIONAL_ID">National ID</option>
                                            <option value="PASSPORT">Passport</option>
                                            <option value="ALIEN_CARD">Alien card</option>

                                        </select>

                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative flex items-center w-full max-w-[30rem] h-12 m-3 rounded-full p-2 bg-gray-100">
                                        <IdentificationIcon className="h-6 w-6 rounded-full text-gray-400 m-2" />
                                        <input type="text" className=" cursor-pointer  placeholder-gray-400 bg-transparent outline-none font-normal rounded-full ml-[0.2rem]" placeholder="ID Number" value={id_number} onChange={handleChange('id_number')} required />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative w-full max-w-[30rem] flex items-center h-12 m-3 rounded-full p-[0.3rem] bg-gray-100">
                                        <MailIcon className="hidden md:flex h-6 w-6 rounded-full text-gray-400" />
                                        <input type="email" className=" cursor-pointer  placeholder-gray-400 bg-transparent outline-none flex-grow font-normal rounded-full ml-[0.2rem]" placeholder="Email" value={email} onChange={handleChange('email')} required />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative w-full max-w-[30rem] flex items-center h-12 m-3 rounded-full p-[0.3rem] bg-gray-100">
                                        <PhoneIcon className="hidden md:flex h-6 w-6 rounded-full text-gray-400 m-2" />
                                        <input type="tel" maxLength={10} minLength={10} htmlFor="phone_number" placeholder="Phone Number" pattern="[0-9]{10}" value={phone_number} className="  cursor-pointer  placeholder-gray-400 bg-transparent outline-none font-normal rounded-full ml-[0.2rem]" onChange={handleChange('phone_number')} required />
                                    </div>
                                </div>
                            </div>




                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">

                                    <div className="relative flex items-center w-full max-w-[30rem] h-12 m-3 rounded-full p-2 bg-gray-100">
                                        <LockClosedIcon className="h-6 w-6 rounded-full text-gray-400 m-2" />
                                        <input type={`${isPasswordHidden ? "password" : "text"}`} className=" text-[1.2rem] cursor-pointer  placeholder-gray-400 bg-transparent outline-none flex-grow font-normal rounded-full p-[0.5rem]" value={password} onChange={handleChange('password')} placeholder="Password" required />
                                        <EyeIcon onClick={eyeIcon} className={`${isPasswordHidden ? "h-6 w-6 rounded-full text-gray-400 m-2" : "hidden"}`} />
                                        <EyeOffIcon onClick={eyeIcon} className={`${isPasswordHidden ? "hidden" : "h-6 w-6 rounded-full text-gray-400 m-2"}`} />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative flex items-center w-full max-w-[30rem] h-12 m-3 rounded-full p-2 bg-gray-100">
                                        <LockClosedIcon className="h-6 w-6 rounded-full text-gray-400 m-2" />
                                        <input type={`${isPasswordHidden ? "password" : "text"}`} className=" text-[1.2rem] cursor-pointer  placeholder-gray-400 bg-transparent outline-none flex-grow font-normal rounded-full p-[0.5rem]" value={conf_password} onChange={handleChange('conf_password')} placeholder="Confirm Password" required />
                                        <EyeIcon onClick={eyeIcon} className={`${isPasswordHidden ? "h-6 w-6 rounded-full text-gray-400 m-2" : "hidden"}`} />
                                        <EyeOffIcon onClick={eyeIcon} className={`${isPasswordHidden ? "hidden" : "h-6 w-6 rounded-full text-gray-400 m-2"}`} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative flex items-center w-full max-w-[30rem] h-12 m-3 rounded-full p-2 bg-gray-100">
                                        <UserGroupIcon className="h-6 w-6 rounded-full text-gray-400 m-2" />
                                        <select
                                            placeholder="gender"
                                            className=" text-[1.2rem] cursor-pointer  placeholder-gray-400 bg-transparent outline-none flex-grow font-normal rounded-full p-[0.5rem]"
                                            onChange={e => {
                                                setValues({ ...values, gender: e.target.value })
                                            }}
                                        >
                                            <option value="" disabled selected >Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>

                                        </select>
                                        {/* <i className={`icon ${isPasswordHidden ? "eye" : "eye slash"}`} onClick={eyeIcon} ></i> */}

                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative flex items-center w-full max-w-[30rem] h-12 m-3 rounded-full p-2 bg-gray-100">
                                        <ScaleIcon className="h-6 w-6 rounded-full text-gray-400 m-2" />
                                        <select
                                            placeholder="Role"
                                            className=" text-[1.2rem] cursor-pointer  placeholder-gray-400 bg-transparent outline-none flex-grow font-normal rounded-full p-[0.5rem]"
                                            onChange={e => {
                                                setValues({ ...values, role: e.target.value })
                                            }}
                                        >
                                            <option value="" disabled selected>Role</option>
                                            <option value="landlord">Home Owner</option>
                                            <option value="client">Occupant</option>

                                        </select>
                                        {/* <i className={`icon ${isPasswordHidden ? "eye" : "eye slash"}`} onClick={eyeIcon} ></i> */}

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center">
                                <input type="checkbox" name="" id="" />
                                <span>I agree to </span>
                            </div>
                            <div class="flex mt-6">
                                <label class="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={isChecked}
                                        onChange={handleOnChange} />
                                    <span class="ml-2">I agree to the <a href="https://thevlage.fra1.digitaloceanspaces.com/TERMS%20AND%20CONDITIONS%20-%20THE%20VLAGE%20Final.pdf" className='underline' target="_blank" rel="noopener noreferrer">Terms and conditions</a></span>
                                </label>
                            </div>
                            <input className={isChecked ? 'form__submit' : 'bg-blue-800 text-white font-bold py-2 px-4 rounded-full m-3 opacity-50 cursor-not-allowed'} disabled={isChecked ? false : true} type="submit" value="Sign Up" />

                            <p className="form__social-text">Or Sign up with social platforms</p>
                            <div className="form__social-media">
                                <a href="#" className="no-underline form__social-icons">
                                    <i className="large facebook f icon"></i>
                                </a>
                                <a href="#" className="no-underline form__social-icons">
                                    <i className="large twitter icon"></i>
                                </a>
                                <a href="#" className="no-underline form__social-icons">
                                    <i className="large google icon"></i>
                                </a>
                                <a href="#" className="no-underline form__social-icons">
                                    <i className="large linkedin icon"></i>
                                </a>
                            </div>
                        </form>



                    </div>
                </div>
                <div className="container__panels">
                    <div className="panel panel__left">
                        <div className="panel__content">
                            <h3 className="panel__title">New here ?</h3>
                            <p className="panel__paragraph">
                                Greetings and Salutations!
                                Let's get you squared away with a new account
                            </p>
                            <button className="btn btn-transparent" onClick={signUpButton} id="sign-up-btn">
                                Sign Up
                            </button>
                        </div>
                        <img className="panel__image" src={'/images/login-three.png'} alt="" />
                    </div>
                    <div className="panel panel__right">
                        <div className="panel__content">
                            <h3 className="panel__title">One of us ?</h3>
                            <p className="panel__paragraph">
                                Do you have an account? You may have already registered with us before.
                            </p>
                            <button className="btn btn-transparent" onClick={signInButton} id="sign-in-btn">
                                Sign In
                            </button>
                        </div>
                        <img className="panel__image" src={'/images/registration.png'} alt="" />
                    </div>
                </div>
            </div>
            <Modal
                visible={openModal}
                close={() => { setModalState(false) }}
                title='Reset password'
            >
                <div className=" mb-5">


                    <div className="flex flex-row">
                        <p className="text-base leading-relaxed text-gray-500">
                            Enter the email associated with your account and we'll send an email with instructions to reset your password
                        </p>

                    </div>
                    <div className={`${loadings ? "relative flex bg-blue-100 rounded-lg p-3 text-sm text-blue-700" : "hidden"}`} role="alert">
                        <span className="flex-grow font-medium">Loading....</span>

                    </div>
                    <div className={`${errorReset ? "relative flex bg-red-100 rounded-lg p-3 text-sm text-red-700" : "hidden"}`} role="alert">
                        <span className="flex-grow font-medium">Error!</span> {errorReset}.
                        <button
                            onClick={() => {
                                setEmailReset({ errorReset: '' })
                            }}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-toggle="default-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    {!loadings && (
                        <>
                            <div className="relative my-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Address</label>
                                <input type="text" value={email} onChange={handleChange('email')} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="flex relative flex-grow flex-row">

                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded text-lg px-5 py-2.5 text-center mr-3 mb-3 w-full" onClick={handlePasswordReset} >Send</button>


                            </div>
                        </>

                    )
                    }
                </div>


            </Modal>
            <Modal
                visible={modalsec}
                close={() => { setmodalsec(false) }}
                title='Check Your Email'
            >
                <div className=" mb-5 p-4">


                    <div className="xl:w-1/2 lg:w-3/4 w-full py-4 mx-auto text-center">
                        <div className="rounded-full bg-blue-300 mb-5 inline-block p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" w-8 h-8 text-blue-800 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                            </svg>
                        </div>

                        <p className="text-base leading-relaxed text-gray-500">
                            We have sent password recovery instructions to your email
                        </p>

                    </div>

                    <div className="flex relative flex-grow flex-row">

                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded text-lg px-5 py-2.5 text-center w-full" >Send</button>


                    </div>
                </div>


            </Modal>


        </>
    )
}
export default Auth