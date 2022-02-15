import React from 'react';
import './header.css';
import foto from '../../assets/foto.png';

const Header = () => (
    <div className='header section__padding' id="home">
        <div className='header-content'>
            <h1 className='gradient__text'>Dimas Tri Mustakim</h1>
            <p>Halo semua! Perkenalkan aku Dimas Tri Mustakim. Saya merupakan seorang mahasiswa Program Studi Teknik Informatika Fakultas Ilmu Komputer Universitas Brawijaya. Saya tinggal di Kota Batu, Jawa Timur. Umur saya sekarang 20 tahun.</p>
        </div>

        <div className='header-image'>
            <img src={foto} alt='foto' />
        </div>
    </div>
);

export default Header;