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
            <TextPlaceholder title='Profil Singkat' text='Saya sekarang sedang menempuh pendidikan di Universitas Brawijaya Malang jurusan Teknik Informatika. Alasan saya masuk jurusan itu adalah karena saya suka main komputer dan tertarik dengan hal-hal yang berbau teknologi. Cita-cita saya adalah bisa bekerja di dalam lingkungan teknologi. Untuk lebih jelasnya masih bingung juga, tapi antara Software Engineering dan Machine Learning Engineering.' />
        </div>

        <div className='profil-container'>
            <TextPlaceholder title='Hobby' text='Membaca, nonton video, otak atik komputer.' />
            <TextPlaceholder title='Ketertarikan' text='Komputer dan Teknologi, Open Source Software.' />
            <TextPlaceholder title='Cita-Cita' text='Software Engineer atau Machine Learning Engineer.' />
            <TextPlaceholder title='Organisasi' text='POROS FILKOM' />
            <TextPlaceholder title='Status' text='Single' />
        </div>
    </div>
);

export default Profil;