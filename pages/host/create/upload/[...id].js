import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import DashboardPageHeader from "../../../../src/components/DashboardPageHeader";
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles

import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import NewListingQs from "../../../../src/components/NewListingQs";
import { UploadListingPics } from "../../../../actions/Listing";
import { HomeIcon, OfficeBuildingIcon, PlusCircleIcon, UsersIcon } from "@heroicons/react/outline";

import { GetCookie } from "../../../../actions/Auth";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginFileValidateSize, FilePondPluginImagePreview, FilePondPluginFileValidateType)



const Upload = () => {

    const [images, setimages] = useState([])
    const [errors, setErrors] = useState('')
    const [success, setsuccess] = useState(false)
    const router = useRouter()
    const [items, setItems] = useState([]);


    const handleFiles = (fileItems) => {
        const filer = fileItems.map(fileItem => fileItem.file)
        // handleChange(filer)
        setimages({
            images: filer
        })
    }
    const handleSubmit = async () => {
        console.log(images);
        if (images.images.length < 5) {
            setErrors('Upload failed. Upload at least five images')
            setimages({ ...images })

        } else {
            const formData = new FormData()
            const dt = null
            // console.log(images);
            Object.keys(images).map(d => {

                let data = images[d];
                dt = data
                // console.log(data);
                // formData.append(d, data);


            });

            console.log(dt);
            for (let i = 0; i < dt.length; i++) {
                formData.append('images[]', dt[i])
            }
            // formData.append('images[]', dt)

            // let fd = { 'images': dt }
            // console.log(fd);
            // formData.append('images', dt);
            // console.log(formData.values());
            for (var pair of formData.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }
            // for (var value of formData.values()) {
            //     console.log(value);
            // }

            const { id } = router.query
            console.log(id[0]);
            const token = GetCookie('token')
            await UploadListingPics(formData, token, id[0])
                .then(response => {
                    if (response.name != "Error") {
                        // alert(res.data.message)
                        setimages([])
                        setsuccess(true)
                        setErrors('')
                        router.push('/host/listings/view-listings')

                    }
                    else {
                        console.log(response);
                        // if (response.response.data.message) {
                        //     let err = response.response.data.message;
                        //     Object.values(err).map(i => (
                        //         setErrors({ errors: err })
                        //         // console.log(i)
                        //     ))
                        //     setsuccess(false)
                        //     alert(err)
                        //     setimages(...images)

                        // } else {

                        //     setErrors({ errors: "Something Went wrong try again" })
                        //     setsuccess(false)
                        //     setimages(...images)
                        //     // console.log(i)


                        // }



                    }
                }

                )



        }




    }
    const navlinks = [
        {
            icon: <PlusCircleIcon className="h-7 w-7 m-4" />,
            title: 'New Listing',
            link: '/host/create/new-listing',

        },


        {
            icon: <HomeIcon className="h-7 w-7 m-4" />,
            title: 'Listings',
            link: '/host/listings/view-listings',

        },






    ];
    return (
        <DashboardPageHeader navlinks={navlinks} >
            <NewListingQs title="Next, let's add some photos of your place">
                <div className={`${errors ? "relative flex bg-red-100 rounded-lg p-3 text-sm text-red-700" : "hidden"}`} role="alert">
                    <span className="flex-grow font-medium">Error!</span> {errors}.
                </div>
                <div className={`${success ? "relative flex bg-green-100 rounded-lg p-3 text-sm text-green-700" : "hidden"}`} role="alert">
                    <span className="flex-grow font-medium">Success!</span>
                </div>



                <FilePond
                    files={images}
                    allowFileSizeValidation={true}
                    maxFileSize={'5MB'}
                    acceptedFileTypes={['image/png', 'image/jpeg']}
                    onupdatefiles={handleFiles}
                    allowMultiple={true}
                    className="flex-grow bg-blue-900 mt-5 h-[25rem] w-full"
                    storeAsFile={true}
                    maxFiles={5}
                    name="images"
                    checkValidity={true}
                    credits={false}
                    labelIdle='Add at most 5 photos   <span className ="filepond--label-action">Browse</span>'
                />
                <div className="mb-[10rem] border-t-2 border-gray-600 mt-2 pt-4 flex justify-between  top-0 ">
                    <button onClick={e => setimages([])} className="text-white ml-5 flex-grow bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Clear</button>

                    <button onClick={handleSubmit} className={`${images.length != 0 ? "text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" : "cursor-not-allowed rounded text-lg text-white ml-5 flex-grow opacity-50 bg-indigo-800"}`}>Upload</button>

                </div>

            </NewListingQs>

        </DashboardPageHeader>
    )
}

export default Upload
