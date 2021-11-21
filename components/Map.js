import getCenter from 'geolib/es/getCenter';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup }
    // ,{ Marker, Popup } 
    from 'react-map-gl';
const Map = ({currentPosts, priceCost}) => {

    const [selectedLocation, setSelectedLocation] = useState({})
      // transform searchResult object into another one {latitude:, longitude} object
    const coordinates = currentPosts.map(item => ({
        longitude: parseFloat(item.long),
        latitude: parseFloat(item.lat),
        })
    )
   
    // on the map we wanna be at the center around all thoses result
    const center = getCenter(coordinates)

    
    // put props into the map
    const [viewport, setViewport] = useState({
        width:'100%',
        height:'100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 10
    });

    return (
          
        <ReactMapGL
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle='mapbox://styles/asmatar/ckvuwwtir3eh515p6oka618vj'
        mapboxApiAccessToken={process.env.mapbox_key}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
        { priceCost === '10' || !priceCost ? (
            currentPosts.map(result=>( 
                <div key={result.id}>         
                <Marker
                        longitude={parseFloat(result.long)}
                        latitude={parseFloat(result.lat)}
                        offsetLeft={-20}
                        offsettop={-10}
                    > 
                    <p onClick={()=>setSelectedLocation(result)} className='cursor-pointer font-bold animate-bounce py-1 px-2 bg-white rounded-full' aria-label='push-pin'>{result.price}$</p>
                    {
                    parseFloat(selectedLocation.long) === parseFloat(result.long) 
                    ? (
                        <Popup 
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true} 
                        latitude={parseFloat(result.lat)}
                        longitude={parseFloat(result.long)}
                        className='w-72'
                        >
                        {result.title}
                          
                        </Popup>
                        ):(
                        false
                        )
                    }
                    </Marker>
                </div>
            )) 
        ):(
            currentPosts.filter((item) => parseInt(priceCost) >= item.price).map(result=>( 
                <div key={result.id}>         
                <Marker
                        longitude={parseFloat(result.long)}
                        latitude={parseFloat(result.lat)}
                        offsetLeft={-20}
                        offsettop={-10}
                    > 
                    <p onClick={()=>setSelectedLocation(result)} className='cursor-pointer font-bold animate-bounce py-1 px-2 bg-white rounded-full' aria-label='push-pin'>{result.price}$</p>
                    {
                    parseFloat(selectedLocation.long) === parseFloat(result.long) 
                    ? (
                        <Popup 
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true} 
                        latitude={parseFloat(result.lat)}
                        longitude={parseFloat(result.long)}
                        className='w-72'
                        >
                        {result.title}
                          
                        </Popup>
                        ):(
                        false
                        )
                    }
                    </Marker>
                </div>
            )) 
        )
        }
        </ReactMapGL>
    )
}

export default Map
