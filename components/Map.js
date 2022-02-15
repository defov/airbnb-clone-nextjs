import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import { HomeIcon } from '@heroicons/react/solid'

const Map = ({ posts }) => {

    // Transform the search results objects into
    // { latitude: 52.516272, longitude: 13.377722 }
    const coordinates = posts.map(post => ({
        latitude: post.lat,
        longitude: post.long
    }))

    // The latitude and longitude of the center of all locations
    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })

    const [selectedLocation, setSelectedLocation] = useState({})

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/dtodorow/ckyymwzxp001c14pkw6w30ieb"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}    
            onViewportChange={(nextViewport) => setViewport(nextViewport)}    
        >
            {posts.map((post, index) => (
                <div key={index}>
                    <Marker
                        latitude={post.lat}
                        longitude={post.long}
                        offsetTop={0}
                        offsetLeft={-15}
                    >
                        <p 
                            className={`p-1 ${selectedLocation.lat === post.lat ? 'bg-white text-black border-black' : 'bg-black text-white border-white'} border rounded-full cursor-pointer`}
                            onClick={() => setSelectedLocation(post)}
                        >
                            <HomeIcon className='h-5' />
                        </p>
                    </Marker>

                    {/* The popup that should show if we click on a Marker */}
                    {selectedLocation.lat === post.lat && (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={post.lat}
                            longitude={post.long}
                        >
                            {post.title}
                        </Popup>
                    )}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
