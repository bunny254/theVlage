import { useEffect, useState } from "react"
import { SearchIcon, UserCircleIcon, UsersIcon, MenuIcon, } from "@heroicons/react/solid";
import { DateRange } from 'react-date-range';
import { GetCookie, IsAuth } from "../../actions/Auth";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { NewBooking, payBooking } from "../../actions/Booking";
import { useFlutterwave } from 'flutterwave-react-v3';
import { CalculatorIcon, CalendarIcon } from "@heroicons/react/outline";
import UserContext from "../../contexts/UserContext";
import { getDate } from "date-fns";

const BookingCard = (props) => {
    const [guests, setGuests] = useState(1)
    const [success, setSuccess] = useState('')
    const [errors, setErrors] = useState('')
    const [dates, setDates] = useState(
        [{
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }]
    )
    const [userD, setUserD] = useState({})
    var user = {}
    let currency = ''
    let amnt = 0
    const rng = () => {
        let date1 = new Date(dates[0].startDate)
        let date2 = new Date(dates[0].endDate)


        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();

        // // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        return Difference_In_Days

    }
    if (rng() > 30) {
        amnt = Math.round(Math.round((props.rent + props.depo) * (rng() / 30)) * 1.015).toFixed(2)
    }
    else {
        amnt = Math.round(Math.round(((props.dailyR + props.utilities))) * rng() * 1.015).toFixed(2)
    }
    if (props.currency === 'KSH') {
        currency = 'KES'
    }
    else {
        currency = 'USD'
    }
    useEffect(() => {
        setUserD(user)


    }, [])


    const [bookingStatus, setBookingStatus] = useState(0)

    // const user = JSON.parse(localStorage.getItem('user'))
    const config = {
        public_key: 'FLWPUBK-7f383d55b7516e2b00bd090122abeb6c-X',
        tx_ref: new Date(),
        amount: amnt,
        currency: currency,
        payment_options: 'card,ussd',
        customer: {
            email: userD.email,
            phonenumber: userD.phone_number,
            name: userD.first_name + ' ' + userD.surname,
        },
        callback: async function (data) {
            console.log(data)
            await payBooking(data).then(
                response => {
                    console.log('payment', response);
                }
            )


        },
        customizations: {
            title: 'Booking',
            description: `Reservation for ${props.name} for Booking`,
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };
    const handleFlutterPayment = useFlutterwave(config)


    const Book = (price) => (e) => {
        let check_in_date = new Date(dates[0].startDate).toLocaleDateString('en-GB')
        let check_out_date = new Date(dates[0].endDate).toLocaleDateString('en-GB')
        let token = GetCookie('token')
        let propid = props.proid
        let number_of_guests = guests
        let rent_cost = props.rent
        let daily_rates = props.dailyR
        let amenities_cost = props.utilities
        let deposit_cost = 0
        if (rng() > 30) {
            deposit_cost = Math.round(rent_cost * props.depo)
        }
        const bdetails = { check_in_date, check_out_date, rent_cost, deposit_cost, amenities_cost, price, number_of_guests }

        console.table(bdetails);
        NewBooking(bdetails, token, propid)
            .then(response => {
                if (response.data.status === 201) {
                    setSuccess(response.data.message)
                    // console.log(response.data);
                    // console.log(response.data.property.id);
                    // setListingId(response.data.property.id);

                    setGuests(1)
                    setErrors('')
                    handleFlutterPayment({
                        callback: (response) => {
                            console.log(response);
                            // closePaymentModal() // this will close the modal programmatically
                        }
                    })


                    // router.push({
                    //     pathname: `/host/create/upload/${response.data.property.id}`,
                    //     query: { 'id': response.data.property.id }

                    // })
                    // console.log(listingId);
                }
                else if (response.response.status === 422) {
                    let err = response.response.data.errors;
                    Object.values(err).map(i => (
                        setErrors(i)
                        // console.log(i)
                    ))

                }
                else {
                    setErrors('something went wrong Try again')
                }
            })


    }
    const maxD = (date) => {
        const d = date
        if (props.stype === 'short-stay') {
            d.setDate(d.getDate() + 30)
            return d
        }

    }
    const minD = (date) => {
        const d = date
        if (props.stype === 'long-stay') {
            d.setDate(d.getDate() + 31)
            return d
        }

    }
    const checkLoginStatus = () => {

        if (IsAuth() && IsAuth().roles.includes('client')) {
            setBookingStatus(1)

        }
        else {
            setBookingStatus(0)
        }

    }
    useEffect(() => {
        checkLoginStatus()

    }, [])
    useEffect(() => {
        console.log(dates[0].startDate);
        console.log(dates);

    }, [dates])


    return (
        <>
            <div className="sticky rounded-lg flex flex-col">
                <div className="pl-1" >
                    <div className="relative border w-[20rem] flex flex-wrap mb-4">
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            minDate={minD(new Date(dates[0].startDate))}
                            maxDate={maxD(new Date(dates[0].startDate))}
                            startDatePlaceholder="Check in"
                            endDatePlaceholder="Check Out"
                        />

                        <UserContext.Consumer>
                            {value => {
                                user = value
                            }}
                        </UserContext.Consumer>




                        {/* <div className="w-1/2 border-l-2 ">
                            <div className="relative ">
                                <label htmlFor="email" className="font-semibold leading-7 p-4 text-sm text-gray-600">Check Out</label>
                                <input type="date" value={endDate} id="chkout" name="chkout" placeholder="Checkout" className="w-full bg-gray-100 bg-opacity-50 rounded  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div> */}
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="price" className="leading-7 text-sm text-gray-600">Guests</label>
                        <input type="number" id="price" name="price" min={1} max={props.bedrooms} value={guests} onChange={(e) => { setGuests(e.target.value) }} className="w-full bg-white rounded-full border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>

                <div className="pl-1">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:py-6 mb-6 lg:mb-0">
                            <div className="flex flex-col justify-start items-start">
                                <p className="text-md font-medium text-gray-800">House Details</p>
                                <div className="flex justify-between border-t w-full  py-2">
                                    <span className="text-gray-500">Property type</span>
                                    <span className="pl-8 text-left text-gray-900">{props.btype}</span>
                                </div>
                                <div className="flex justify-between w-full py-2">
                                    <span className="text-gray-500">Check in</span>
                                    <span className="pl-8 text-left flex items-center text-gray-900"><CalendarIcon className="h-5 w-5 m-2" />{dates[0].startDate.toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between w-full border-b mb-6 py-2">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="pl-8 text-right text-gray-900">{rng()} Days</span>
                                </div>
                                {rng() > 30 && <div className="flex justify-between w-full border-b mb-6 py-2">
                                    <span className="text-gray-500">{props.depo} month Deposit</span>
                                    <span className="pl-8 text-right text-gray-900">{props.currency}{Math.round(props.rent * props.depo)}</span>
                                </div>}


                            </div>
                        </div>
                    </div>
                </div>



                {dates[0].endDate && <div className="relative">
                    <div className="pl-1">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:py-6 mb-6 lg:mb-0">
                                <div className="flex flex-col justify-start items-start">
                                    <p className="text-md font-medium text-gray-800">Pricing Details</p>
                                    {rng() <= 30 && <div>
                                        <div className="flex justify-between border-t w-full  py-2">
                                            <span className="text-gray-500">Daily rates [plus utilities] x {Math.round(rng())}{' Night[s]'}</span>
                                            {console.log(props.rent + props.utilities)}
                                            <span className="pl-8 text-left text-gray-900">{props.currency}{' '}{Math.round(Math.round(((props.dailyR + props.utilities))) * rng())}</span>
                                        </div>
                                        <div className="flex justify-between w-full py-2">
                                            <span className="text-gray-500">Tax 1.5%</span>
                                            <span className="pl-8 text-left flex items-center text-gray-900">{props.currency}{' '}{(Math.round(((props.dailyR + props.utilities) * rng()) * 0.015)).toFixed(2)}</span>
                                        </div>

                                        <div className="flex justify-between w-full border-b mb-6 py-2">
                                            <span className="text-gray-500">Total</span>
                                            <span className="pl-8 text-right text-gray-900">{props.currency}{' '}{Math.round(((props.dailyR + props.utilities) * rng()) * 1.015)}</span>
                                        </div>




                                    </div>
                                    }
                                    {rng() > 30 && <div>
                                        <div className="flex justify-between border-t w-full  py-2">
                                            <span className="text-gray-500">Monthly rates [plus utilities and deposit]</span>
                                            <span className="pl-8 text-left text-gray-900">{props.currency}{' '}{Math.round(props.rent + props.utilities + (props.rent * props.depo))}</span>


                                        </div>
                                        <div className="flex justify-between w-full py-2">
                                            <span className="text-gray-500">Service Fee 11%</span>
                                            <span className="pl-8 text-left flex items-center text-gray-900">{props.currency}{' '}{Math.round((props.rent + props.utilities + (props.rent * props.depo)) * 0.015).toFixed(2)}</span>
                                        </div>

                                        <div className="flex justify-between w-full border-b mb-6 py-2">
                                            <span className="text-gray-500">Total</span>
                                            <span className="pl-8 text-right text-gray-900">{props.currency}{' '}{Math.round((props.rent + props.utilities + (props.rent * props.depo)) * 1.015).toFixed(2)}</span>
                                        </div>






                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>





                </div>}
                {bookingStatus ?
                    <button
                        onClick={Book(`${rng() <= 30 ? Math.round(Math.round(((props.rent + props.utilities) / (30))) * rng() * 1.1) : Math.round((props.rent + props.utilities + (props.rent * props.depo)) * 1.1).toFixed(2)}`)}
                        className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book now</button> :
                    <button disabled className="text-gray-300 bg-gray-600 border-0 py-2 px-8 focus:outline-none cursor-not-allowed rounded text-lg">Login to book</button>
                }
                <p className="text-xs text-gray-500 mt-3">Your reservation is yet to be processed.</p>
            </div>
        </>
    )
}

export default BookingCard
