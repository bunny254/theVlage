import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import { LocationMarkerIcon } from '@heroicons/react/outline';
const Map = (props) => {
    console.log(props.searchResults);

    const [selectedLocation, setSelectedLocation] = useState({})

    //object transformation for lat-long obj
    const coordinates =
    {
        latitude: -1.286389,
        longitude: 36.817223,
    }
    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })
    return (
        <p></p>
        // <ReactMapGL
        //     mapStyle='mapbox://styles/tevin-obai/ckvx97c171kdp15sz7ojypls4'
        //     mapboxApiAccessToken={process.env.mapbox_key}
        //     {...viewport}
        //     onViewportChange={nextViewport => setViewport(nextViewport)}
        // >
        //     {listingresults.map(result => (
        //         <div key={result.long}>
        //             <Marker
        //                 longitude={result.long}
        //                 latitude={result.lat}
        //                 offsetLeft={-20}
        //                 offsetTop={-10}

        //             >
        //                 <LocationMarkerIcon role="img" aria-label="push-pin" onClick={() => setSelectedLocation(result)} className="h-5 text-yellow-400 cursor-pointer animate-bounce" />

        //             </Marker>
        //             {/* popup on marker click */}
        //             {selectedLocation.long === result.long ? (
        //                 <Popup
        //                     onClose={() => setSelectedLocation({})}
        //                     closeOnClick={true}
        //                     latitude={result.lat}
        //                     longitude={result.long}
        //                     className="popup"
        //                 >
        //                     {/* add customized div */}
        //                     <h5>{result.title}</h5>
        //                     <h4>{result.price}</h4>

        //                 </Popup>
        //             ) : (
        //                 false
        //             )}
        //         </div>
        //     ))}
        // </ReactMapGL>
    )
}

export default Map
