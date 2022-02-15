import React from 'react';
import './medsos.css';

const MedsosCard = ({ namaMedsos, username, linkSosmed }) => (
    <div className='medsos__card'>
        <div className='medsos__card-content'>
            <p>Social Media</p>
            <h3>{namaMedsos}</h3>
        </div>
        <div className='medsos__card-btn'>
        <a href={linkSosmed}>
            <button type='button' >{username}</button>
        </a>
        </div>
    </div>
);

export default MedsosCard;