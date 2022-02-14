import React from 'react';
import './header.css';
import foto from '../../assets/foto.png';

const Header = () => (
    <div className='header section__padding' id="home">
        <div className='header-content'>
            <h1 className='gradient__text'>Dimas Tri Mustakim</h1>
            <p>Hello everyone, my name is Dimas Tri Mustakim. I am a Computer Science student in Brawijaya University in Malang. I live and born Batu City, at 31 December 2001. My hobby is reading, watching videos, and tech related stuff.</p>
        </div>

        <div className='header-image'>
            <img src={foto} alt='foto' />
        </div>
    </div>
);

export default Header;