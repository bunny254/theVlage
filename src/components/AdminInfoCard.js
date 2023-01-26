import { useEffect, useState } from 'react'
import { TrashIcon, StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GetCookie } from '../../actions/Auth'
import { TrashListings } from '../../actions/Listing'
import ModalComp from './Modal'

const AdminInfoCard = (props) => {
    const { id, img, location, title, description } = props
    const router = useRouter();
    const [openModal, setModalState] = useState(false)
    const [removed, setRemoved] = useState(false)

    useEffect(() => {
        if (removed) { window.location.reload(false); }

    }, [removed])
    const deleteConfirm = () => {
        setModalState(true)
        // let answer = window.confirm(`Are you sure you want to delete Property ${title}?`)
        // if (answer) {
        //     deleteProperty(id)
        // }
    }
    const deleteProperty = propertyid => () => {
        // console.log('delete', propertyid)
        console.log(propertyid.id);
        let propid = propertyid.id
        const token = GetCookie('token')
        TrashListings(token, propid).then(data => {
            // console.log());
            if (data.name != 'Error') {
                // console.log('yeah', data);
                setRemoved(true)

            } else {
                if (data.response.data.error) {
                    let err = data.response.data.error;

                    alert(err)
                    // console.log(i)


                } else {

                    alert("Something Went wrong try again")
                    // console.log(i)


                }
            }
        })
    }
    return (
        <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={img} layout="fill" className="rounded-2xl" objectFit="cover" />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <TrashIcon onClick={deleteConfirm} className="h-7 hover:text-yellow-300 active:animate-ping active:text-red-700 cursor-pointer mr-3" />
                </div>
                <h4 className="text-xl">
                    {title}
                </h4>
                <div className="border-b w-10 pt-2" />
                <p className="hidden pt-2 text-sm flex-grow text-gray-500">
                    {description}
                </p>
                <div className="md:hidden flex flex-row h-[5rem] pb-2">
                    <p className="pt-2 overflow-clip overflow-hidden text-sm flex-grow text-gray-500">
                        {description}
                    </p>
                </div>

                <div className="flex justify-between pt-5 items-end">
                    <div className="relative flex w-10">
                        {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3">View</button> */}

                    </div>
                    <div className="flex">
                        <button
                            onClick={
                                () => {
                                    router.push({
                                        pathname: '/host/listings/[id]',
                                        query: { 'id': id },
                                    })
                                }
                            }
                            type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3">


                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View
                        </button>

                    </div>
                </div>


            </div>
            <ModalComp
                visible={openModal}
                close={() => { setModalState(false) }}

            >
                <div className="w-[100rem] mb-5">
                    <div className="flex relative flex-row">
                        Are you sure you want to delete Property called {title}
                    </div>
                    <div className="flex relative flex-row">
                        <div className="floated right column">
                            <button onClick={deleteProperty({ id })} className="ui inverted violet button" >Yes</button>
                            <button onClick={() => { setModalState(false) }} className="ui tertiary red button"> No </button>
                        </div>
                    </div>
                </div>


            </ModalComp>
        </div>
    )
}

export default AdminInfoCard
