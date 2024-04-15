import React from 'react';
import './styles.css';
import mapImage from './mapImage.jpg';

const Map = () => {
    return (
        <div className="map-container">
            <div className="map-box">
                <img src={mapImage} alt="Map" className="map-image" />
            </div>
        </div>
    );
};

export default Map;
