import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Pub from '../../actions/Public'
import Search from './Search'
import Navbar from './Nav/Navbar';

function Banner() {

    const [error, setError] = useState('')

    const close = () => {

        setError('')

    }


    const onSubmitCallback = async (term) => {
        const response = await Pub.get('/pub/properties', {
            params: term,

        })
        console.log(response);

        if (response.data.data.length === 0) {
            setError('No listing found')


        } else {
            searchLocation(term)
        }




    }

    const searchLocation = (term) => {
        router.push({
            pathname: '/search',
            query: term

        })
    }
    const router = useRouter()

    return (
        <div className="top-0   ">

            <Image
                src={"/banner.jpg"}
                // objectFit="cover"
                layout="fill"
                objectFit="fit"
                quality={100}
                className="opacity-90 "
                priority={true}
            />
            <div className="container relative flex pl-[3rem] flex-col items-start justify-items-start">

                <div className="md:w-1/2 w-5/6">
                    <div className='relative  '>

                        <h1 className="text-[3rem] font-extrabold text-left  text-gray-50">Redefining modern living in Africa.</h1>
                        <p className="text-xl text-left leading-5 text-gray-200">Book your affordable coliving housing today.</p>

                    </div>
                </div>
                <div className="flex flex-row relative items-start py-5 mr-2">
                    <Search closeMessage={close} errorMessage={error} onSubmitForm={onSubmitCallback} />



                </div>
            </div>



        </div>

    )
}

export default Banner
