import React from 'react';
import './medsos.css';

// TODO : input link ke medsosCards
const MedsosCard = ({ namaMedsos }) => (
    <div className='medsos__card'>
        <div className='medsos__card-content'>
            <p>Social Media</p>
            <h3>{namaMedsos}</h3>
        </div>
        <div className='medsos__card-btn'>
            <button type='button'>Buka</button>
        </div>
    </div>
);

export default MedsosCard;