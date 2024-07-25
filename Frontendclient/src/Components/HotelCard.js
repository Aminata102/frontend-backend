// HotelCard.js

import React from 'react';


function HotelCard({ name, location, description, image }) {
    return (
        <div className="hotel-card">
            <h3>{name}</h3>
            <p><strong>Location:</strong> {location}</p>
            <img src={process.env.PUBLIC_URL + image} alt={name} />
            <p>{description}</p>
        </div>
    );
}

export default HotelCard;