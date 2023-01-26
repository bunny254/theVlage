
import DashboardPageHeader from "../../../src/components/DashboardPageHeader"
import StepOne from "../../../src/components/CNewListing/stepOne";
import StepTwo from "../../../src/components/CNewListing/stepTwo";
import StepThree from "../../../src/components/CNewListing/stepThree";
import StepFour from "../../../src/components/CNewListing/stepFour";
import { HomeIcon, PencilAltIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import StepFive from "../../../src/components/CNewListing/stepFive";
import StepSix from "../../../src/components/CNewListing/StepSix";
import StepFinal from "../../../src/components/CNewListing/StepFinal";
import StepSeven from "../../../src/components/CNewListing/StepSeven";
import StepEight from "../../../src/components/CNewListing/StepEight";
import StepNine from "../../../src/components/CNewListing/StepNine";
import StepStays from "../../../src/components/CNewListing/stepStays";
import STepFurnished from "../../../src/components/CNewListing/stepFurnished";
import { CreateListing } from "../../../actions/Listing";
import { useRouter, withRouter } from "next/router";
import { GetCookie } from "../../../actions/Auth";
import StepLocation from "../../../src/components/CNewListing/StepLocation";
const NewListing = () => {
    const router = useRouter();
    const navlinks = [
        {
            icon: <PlusCircleIcon className="h-7 w-7 m-4" />,
            title: 'New Listing',
            link: '/host/create/new-listing',

        },


        {
            icon: <HomeIcon className="h-7 w-7 m-4" />,
            title: 'My Listings',
            link: '/host/listings/view-listings',

        },
        {
            icon: <PencilAltIcon className="h-7 w-7 m-4" />,
            title: 'Edit Listings',
            link: '/host/listings/edit-listing',

        },






    ];
    const [currentStep, setCurrentStep] = useState(1);
    const [listingId, setListingId] = useState("")
    const [formData, setFormData] = useState({
        building_type: '',
        listing_type: "",
        property_name: '',
        "description": "",
        "unit_size": "",
        stay_type: "",
        location: "",
        longitude: 0,
        latitude: 0,
        "is_furnished": 0,
        "rent_cost": 0,
        "daily_rate": 0,
        "utilities_cost": 0,
        deposit_months: 0,
        "currency": "",
        "available_from": "",
        "bedrooms": 0,
        "bathrooms": 0,
        "amenities": [],
        "services": [],
        "images": [],
        "cove_image": null,
        "errors": '',
        success: false,
        loading: false
    });


    const { listing_type, location, building_type, property_name, description, unit_size, cove_image, stay_type, is_furnished, utilities_cost, rent_cost, deposit_months, currency, available_from, bathrooms, bedrooms, amenities, services, latitude, longitude, loading, errors, success } = formData

    const handleChange = name => e => {

        setFormData({ ...formData, errors: '', [name]: e.target.value })
    }
    const handleDateChange = item => {
        let adate = new Date(item)
        console.log(adate.toISOString());

        setFormData({ ...formData, errors: '', available_from: adate })
    }
    const handlePlaceChange = item => {

        if (item.length !== 0) {
            setFormData({ ...formData, errors: '', property_name: item.address, location: item.address, longitude: item.markerPosition.lng, latitude: item.markerPosition.lat })
        }
        else {
            console.log(item);
        }
    }
    const handleFileChange = item => {

        // Update the state
        setFormData({ ...formData, errors: '', cove_image: item })
        // console.log(cover_image)
        // this.setState({ selectedFile: event.target.files[0] });

    };
    const handleSelectitems = (servics, amnitites) => {
        Object.values(servics).map((item, i) => {
            item.forEach(servce => {
                setFormData({ ...formData, services: [...services, servce.value] })
                // console.log(amenity.value);
            });
            // setFormData({ ...formData, services: item, })
        })
        Object.values(amnitites).map((item, i) => {
            item.forEach(amenity => {
                setFormData({ ...formData, amenities: [...amenities, amenity.value] })
                // console.log(amenity.value);
            });
            // setFormData({ ...formData, amenities: item, })
        })

    }
    // const onCheckboxClick = (e) => {
    //     const isChecked = e.target.checked;
    //     if (isChecked) {
    //         

    //     } else {
    //         const index = amenities.indexOf(e.target.value)
    //         amenities.splice(index, 1);
    //         setFormData({ ...formData, amenities: amenities })
    //         console.log(amenities);
    //     }
    // }
    const next = () => {
        setCurrentStep(currentStep + 1);
    };
    const back = () => {
        setCurrentStep(currentStep - 1);
    };
    const submit = async (e) => {
        e.preventDefault()
        // console.table({ listing_type, building_type, property_name, description, location, unit_size, stay_type, cover_image, is_furnished, utilities_cost, rent_cost, currency, bathrooms, bedrooms, amenities, available_from })
        setFormData({ ...formData, loading: true, errors: '' })
        // let date_new = new Date(available_from).toLocaleDateString()
        const cover_image = cove_image[0]
        const newListing = { listing_type, building_type, property_name, description, location, unit_size, stay_type, cover_image, is_furnished, utilities_cost, rent_cost, deposit_months, currency, bathrooms, bedrooms, amenities, services, latitude, longitude, available_from }
        console.log(newListing)
        const token = GetCookie('token')
        const postData = new FormData();
        Object.keys(newListing).map(d => {

            let data = newListing[d];
            postData.append(d, data);


        });


        await CreateListing(postData, token)
            .then(response => {
                // console.log(response.response.data);
                if (response.statusText === "Created") {
                    alert(response.data.message)
                    console.log(response.data);
                    console.log(response.data.property.id);
                    setListingId(response.data.property.id);
                    setFormData({
                        ...formData, errors: '', success: true,
                        "listing_type ": '',
                        "building_type": '',
                        "property_name": '',
                        "description": "",
                        "unit_size": "",
                        "stay_type": "",
                        "is_furnished": true,
                        "rent_cost": 0,
                        "utilities_cost": 0,
                        "currency": "",
                        "available_from": "",
                        "bedrooms": 0,
                        "bathrooms": 0,
                        "amenities": [],
                        "images": [],
                        "cover_image": null,
                        'errors': ''
                    })

                    console.log(listingId);
                    router.push({
                        pathname: `/host/create/upload/${response.data.property.id}`,
                        query: { 'id': response.data.property.id }

                    })
                    // console.log(listingId);
                }
                else if (response.response.status === 403) {

                    setFormData({ ...formData, errors: response.response.data.message })
                    console.log(errors);

                }
                else {
                    if (response) {
                        if (response.response.data.errors) {
                            let err = response.response.data.errors;
                            Object.values(err).map(i => (
                                setFormData({ ...formData, errors: i, success: false })
                                // console.log(i)
                            ))

                        } else {

                            setFormData({ ...formData, errors: "Something Went wrong try again" })
                            // console.log(i)


                        }
                    }

                    else {

                        setFormData({ ...formData, errors: "Something Went wrong try again" })
                        // console.log(i)


                    }




                }
            })

            .catch(err => {
                if (err.request?.status === 422) {

                    console.log(JSON.parse(err.request.response.errors))
                }
            });

    }
    switch (currentStep) {
        case 1:
            return (
                <DashboardPageHeader navlinks={navlinks}>

                    <StepOne
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                    />
                </DashboardPageHeader>

            );
        case 2:
            return (
                <DashboardPageHeader navlinks={navlinks}>
                    <StepTwo
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                </DashboardPageHeader>

            );
        case 3:
            return (
                <DashboardPageHeader navlinks={navlinks}>
                    <StepStays
                        data={formData}
                        handleChange={handleChange}
                        handleDate={handleDateChange}
                        next={next}
                        back={back}
                    />
                </DashboardPageHeader>

            );
        case 4:
            return (
                <DashboardPageHeader navlinks={navlinks}>
                    {
                        <StepLocation
                            data={formData}
                            handleChange={handlePlaceChange}
                            next={next}
                            back={back}
                        />
                    }
                </DashboardPageHeader>

            );
        case 5:
            return (
                <DashboardPageHeader navlinks={navlinks}>
                    <StepFour
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                </DashboardPageHeader>

            );
        case 6:
            return (
                <DashboardPageHeader navlinks={navlinks}>
                    <STepFurnished
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                </DashboardPageHeader>

            );
        case 7:
            return (
                <DashboardPageHeader navlinks={navlinks}>
                    <StepFive
                        data={formData}
                        handleChange={handleSelectitems}
                        next={next}
                        back={back}
                    />
                </DashboardPageHeader>

            );
        case 8:
            return (
                <DashboardPageHeader navlinks={navlinks}>
                    <StepSix
                        data={formData}
                        handleChange={handleFileChange}
                        next={next}
                        back={back}
                    />
                </DashboardPageHeader>

            );
        case 9:
            return (
                <DashboardPageHeader navlinks={navlinks}>
                    <StepSeven
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                </DashboardPageHeader>

            );
        case 10:
            return (
                <DashboardPageHeader navlinks={navlinks}>
                    <StepEight
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                </DashboardPageHeader>

            );
        case 11:
            return (
                <DashboardPageHeader navlinks={navlinks}>
                    <StepNine
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                </DashboardPageHeader>

            );
        default:
            return (
                <DashboardPageHeader navlinks={navlinks}>
                    <StepFinal
                        data={formData}
                        submit={submit}
                        back={back}
                    />
                </DashboardPageHeader>

            );
    }
}




export default NewListing
// NewListing.getLayout = function getLayout(page) {
//     return (
//         <DashboardPageHeader navlinks={navlinks}>
//             {page}
//         </DashboardPageHeader>
//     )
// }
