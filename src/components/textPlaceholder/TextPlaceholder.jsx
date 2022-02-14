import React from 'react';
import './text.css';

const Capaian = ({ title, text }) => (
    <div className='placeholder-container'>
        <div className='placeholder-container-title'>
            <div />
            <h1>{title}</h1>
        </div>

        <div className='placeholder-container-text'>
            <p>{text}</p>
        </div>
    </div>
);

export default Capaian;