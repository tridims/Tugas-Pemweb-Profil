import React from 'react';
import TextPlaceholder from '../../components/textPlaceholder/TextPlaceholder';
import './profil.css';

const Profil = () => (
    <div className='profil section__margin' id='profil'>
        <div className='profil-heading'>
            <h1 className='gradient__text'>Beberapa Hal Tentang Saya</h1>
            <p>Dimas Tri Mustakim</p>
        </div>

        <div className='profil-feature'>
            <TextPlaceholder title='Profil Singkat' text='Saya sekarang sedang menempuh pendidikan di Universitas Brawijaya Malang jurusan Teknik Informatika. Saya sudah suka main komputer sejak kecil. Cita-cita saya adalah bisa menjadi Software Engineer.' />
        </div>

        <div className='profil-container'>
            <TextPlaceholder title='Hobby' text='Main Game' />
            <TextPlaceholder title='Ketertarikan' text='Komputer dan Teknologi' />
            <TextPlaceholder title='Cita-Cita' text='Software Engineer' />
        </div>
    </div>
);

export default Profil;