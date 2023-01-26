import { useEffect, useState } from 'react'
import { TrashIcon, StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GetCookie } from '../../actions/Auth'
import { TrashListings, ApproveListing } from '../../actions/Admin'
import ModalComp from './Modal'
import { ThumbUpIcon } from '@heroicons/react/solid'

const AdminInfoCard = (props) => {
    const { id, img, location, currency, cost, bedrooms, bathrooms, title, status } = props
    const router = useRouter();
    const [openModal, setModalState] = useState(false)
    const [openAppModal, setOpenAppModal] = useState(false)
    const [removed, setRemoved] = useState(false)
    const [approved, setApproved] = useState(false)
    useEffect(() => {
        if (removed) { window.location.reload(false); }

    }, [removed])
    useEffect(() => {
        if (approved) { window.location.reload(false); }

    }, [approved])
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
    const approveConfirm = () => {
        setOpenAppModal(true)

    }
    const approveProperty = propertyid => () => {
        // console.log('delete', propertyid)
        console.log(propertyid.id);
        let propid = propertyid.id
        const token = GetCookie('token')
        ApproveListing(token, propid).then(data => {
            // console.log());
            if (data.name != 'Error') {
                // console.log('yeah', data);
                setApproved(true)

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
        <>
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center ">
                    <div className="max-w-sm w-[20rem] h-[25rem] my-10  py-6 px-3">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                            <div className="relative flex items-end justify-end bg-gray-200 py-1 border-b border-gray-300 px-2">
                                {status != 'approved' && (
                                    <span>



                                        <ThumbUpIcon onClick={approveConfirm} className='h-7 hover:text-yellow-300 active:animate-ping active:text-red-700 cursor-pointer   pr-2' />

                                    </span>)}
                                <TrashIcon onClick={deleteConfirm} className="h-7  hover:text-yellow-300 active:animate-ping active:text-red-700 cursor-pointer " />
                            </div>
                            <div
                                onClick={
                                    () => {
                                        router.push({
                                            pathname: '/admin/data/[id]',
                                            query: { 'id': id },
                                        })
                                    }
                                }
                                className="bg-cover bg-center h-[15rem] w-[20rem]" style={{ backgroundImage: `url(${img})` }}>
                                <div className="flex justify-end">
                                    <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                                    </svg>

                                </div>
                            </div>
                            <div className="p-4">
                                <p className="tracking-wide text-sm font-bold text-gray-700">{title}</p>
                                <p className="text-gray-700">{location}</p>
                                <p className="text-xl text-gray-900">{currency}{cost}</p>

                            </div>
                            <div className="flex p-4 py-6 border-t border-gray-300 text-gray-700">
                                <div className="flex-1 inline-flex items-center">
                                    <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                                    </svg>
                                    <p><span className="text-gray-900 font-bold">{bedrooms}</span> Bedrooms</p>
                                </div>
                                <div className="flex-1 inline-flex items-center">
                                    <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
                                    </svg>
                                    <p><span className="text-gray-900 font-bold">{bathrooms}</span> Bathrooms</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <ModalComp
                visible={openModal}
                close={() => { setModalState(false) }}
                title='Delete Property'
                deny_name='Cancel'
                conf_name='Delete'
                handleConfirm={deleteProperty({ id })}
                handleDeny={() => { setModalState(false) }}

            >
                <div className="mb-5">
                    <div className="flex relative flex-row">
                        Are you sure you want to delete Property called {title}
                    </div>

                </div>


            </ModalComp>
            <ModalComp
                visible={openAppModal}
                close={() => { setOpenAppModal(false) }}
                title='Publish property'
                deny_name='Cancel'
                conf_name='Publish'
                handleConfirm={approveProperty({ id })}
                handleDeny={() => { setOpenAppModal(false) }}

            >
                <div className="mb-5">
                    <div className="flex relative flex-row">
                        Are you sure you want to publish Property called {title}
                    </div>

                </div>


            </ModalComp>

        </>
    )
}

export default AdminInfoCard
