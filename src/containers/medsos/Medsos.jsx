import React from 'react';
import './medsos.css';
import MedsosCard from '../../components/medsosCard/MedsosCard';

const Header = () => (
    <div className='medsos section__padding' id='medsos'>
        <h1 className='gradient__text'>Cek Media Sosial Saya</h1>

        <div className='medsos-content'>
            <MedsosCard namaMedsos='Instagram' username='dimst_31' linkSosmed='https://www.instagram.com/dimst_31/' />
            <MedsosCard namaMedsos='Linkedin' username='Dimas Tri Mustakim' linkSosmed='https://www.linkedin.com/in/dimastrim' />
            <MedsosCard namaMedsos='Github' username='Dimas Tri' linkSosmed='https://github.com/tridims' />
            <MedsosCard namaMedsos='Kaggle' username='Dimas Tri Mustakim' linkSosmed='https://www.kaggle.com/dimastri' />
        </div>
    </div>
);

export default Header;