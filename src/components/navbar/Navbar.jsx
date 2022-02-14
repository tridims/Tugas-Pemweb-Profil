import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    {/* Todo : get some logo */}
                    <img src={logo} alt='logo' />
                </div>

                <div className='navbar-links_container'>
                    <p><a href='#home'>Home</a></p>
                    <p><a href="#profil">Profil</a></p>
                    <p><a href="#capaian">Capaian</a></p>
                    <p><a href="#target">Target</a></p>
                    <p><a href="#medsos">Media Sosial</a></p>
                </div>
            </div>


            <div className="navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                <div className="navbar-menu_container scale-up-center">
                <div className="navbar-menu_container-links">
                    <p><a href="#profil">Profil</a></p>
                    <p><a href="#capaian">Capaian</a></p>
                    <p><a href="#target">Target</a></p>
                    <p><a href="#medsos">Medsos</a></p>
                </div>
                </div>
                )}
            </div>
        </div>
    )
};

export default Navbar;