

    import React from 'react';
    import './map.css';
    import mapboxgl from 'mapbox-gl';
    import 'mapbox-gl/dist/mapbox-gl.css';
    import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
    import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
    import MapGL, {GeolocateControl } from 'react-map-gl'
    
    mapboxgl.accessToken = "pk.eyJ1Ijoic2FpbGFqYTAzIiwiYSI6ImNrd3N1a2ZpNjFhODIycHFvYXk5N3ZzcG4ifQ.WLiSwJt_Y0vaO5X2wVcKLg";
    
    class Map extends React.Component {
    
      componentDidMount() {
    
        // Creates new map instance
        const map = new mapboxgl.Map({
          container: this.mapWrapper,
          style: 'mapbox://styles/mapbox/streets-v10',
          center: [77.53484,12.93419],
          zoom: 13
        });
    
        // Creates new directions control instance
        const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: 'metric',
          profile: 'mapbox/driving',
        });
    
        // Integrates directions control with map
        map.addControl(directions, 'top-left');
      }
    
      render() {
        return (
          // Populates map by referencing map's container property
          <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
        );
      }
    }
    
    export default Map;