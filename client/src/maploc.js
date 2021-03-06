import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
//import config from '../config'
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN='pk.eyJ1Ijoic2FpbGFqYTAzIiwiYSI6ImNrd3N1a2ZpNjFhODIycHFvYXk5N3ZzcG4ifQ.WLiSwJt_Y0vaO5X2wVcKLg'

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Maploc = () => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })

  return (
    <div style={{ margin: '0 auto'}}>
             <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click the Geolocator to Find Your Location</h1>

      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
       >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
         />
       </MapGL>
      </div>
     )
    }

    export default Maploc