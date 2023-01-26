import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from 'react-geocode';
import Autocomplete from 'react-google-autocomplete';
import NewListingQs from '../NewListingQs';
Geocode.setApiKey(process.env.google_key)


export const MyGoogleMap = (props) => {
    const { data, handleChange, next, back } = props;
    const [locDetails, setLocDetails] = useState({
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {},
    })
    const { showingInfoWindow, activeMarker, selectedPlace } = locDetails
    const [locationValues, setLocationValues] = useState({
        address: '',
        city: '',
        area: '',
        mapPosition: {
            lat: -1.2884,
            lng: 36.8233,
        },
        markerPosition: {
            lat: -1.2884,
            lng: 36.8233,
        }
    })
    const { address, city, area, zoom, mapPosition, markerPosition } = locationValues
    useEffect(() => {
        console.log(selectedPlace)
    }, [selectedPlace])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLocationValues({
                    mapPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    markerPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                },
                    () => {
                        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                            response => {
                                console.log(response)
                                const address = response.results[0].formatted_address,
                                    addressArray = response.results[0].address_components,
                                    city = getCity(addressArray),
                                    area = getArea(addressArray);
                                console.log('city', city, area);

                                setLocationValues({
                                    ...locationValues,
                                    address: (address) ? address : '',
                                    area: (area) ? area : '',
                                    city: (city) ? city : '',


                                })

                            },
                            error => {
                                console.error(error);
                            }
                        );

                    })
            });
        } else {
            console.error("Geolocation is not supported by this browser!");
        }
    }, [])

    useEffect(() => {
        handleChange(locationValues)
    }, [locationValues])



    const onMarkerClick = (props, marker, e) => {
        setLocDetails({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    const moveMarker = (props, marker, e) => {
        let newLat = e.latLng.lat()
        let newLng = e.latLng.lng()

        Geocode.fromLatLng(newLat, newLng)
            .then(response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = getCity(addressArray),
                    area = getArea(addressArray);
                setLocationValues({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',

                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                })

            },
                error => {
                    console.error(error);
                }

            )
    }
    const onClose = props => {
        if (showingInfoWindow) {
            setLocDetails({
                ...locDetails,
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    const getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };

    const getArea = (addressArray) => {
        let area = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };

    const onPlaceSelected = (place) => {
        console.log('plc', place);
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = getCity(addressArray),
            area = getArea(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();

        console.log('latvalue', latValue)
        console.log('lngValue', lngValue)

        // Set these values in the state.
        setLocationValues({
            address: (address) ? address : '',
            area: (area) ? area : '',
            city: (city) ? city : '',

            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };




    return (
        <NewListingQs title="Let guests know where your place is located" >
            <div className='mt-2'>
                <Autocomplete
                    style={{
                        width: '100%',
                        height: '40px',
                        paddingLeft: '16px',
                        marginTop: '',
                        marginBottom: '2rem'
                    }}
                    options={{
                        types: ["establishment", "geocode"],
                        componentRestrictions: { country: "ke" },
                    }}
                    onPlaceSelected={onPlaceSelected}

                />

                <Map

                    google={props.google}
                    style={{ width: '50rem', height: '30rem' }}
                    center={
                        {
                            lat: mapPosition.lat,
                            lng: mapPosition.lng
                        }
                    }
                    zoom={14}
                >

                    <Marker
                        onClick={onMarkerClick}
                        draggable={true}
                        onDragend={moveMarker}
                        position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
                    // name={'Kenyatta International Convention Centre'}
                    />
                    <InfoWindow
                        marker={activeMarker}
                        visible={showingInfoWindow}
                        onClose={onClose}
                    >
                        <div>
                            <h4>{address}</h4>
                        </div>
                    </InfoWindow>
                </Map>
                <div className="absolute h-[5rem] w-[15rem] pt-[32rem] z-10 flex items-start justify-between ">
                    <button onClick={back} className="text-white ml-5 flex-grow bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>

                    <button onClick={next} className="text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>

                </div>



            </div >
        </NewListingQs>
    );

}

export default GoogleApiWrapper({
    apiKey: process.env.google_key
})(MyGoogleMap);