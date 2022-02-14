import React from 'react';
import './medsos.css';
import MedsosCard from '../../components/medsosCard/MedsosCard';

const Header = () => (
    <div className='medsos section__padding' id='medsos'>
        <h1 className='gradient__text'>Cek Media Sosial Saya</h1>

        <div className='medsos-content'>
            <MedsosCard namaMedsos='Instagram' />
            <MedsosCard namaMedsos='Linkedin' />
            <MedsosCard namaMedsos='Github' />
            <MedsosCard namaMedsos='Kaggle' />
        </div>
    </div>
);

export default Header;