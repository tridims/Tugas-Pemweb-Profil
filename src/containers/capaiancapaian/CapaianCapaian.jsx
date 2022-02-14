import React from 'react';
import TextPlaceholder from  '../../components/textPlaceholder/TextPlaceholder';
import './capaiancapaian.css';

const dataCapaian = [
    {
        title: 'Lahir di dunia.',
        text: 'Bangga dan bersyukur atas kesempatan yang diberikan oleh Allah untuk bisa hidup di dunia ini.'
    },
    {
        title: 'Masuk SMP dan SMA favorit di kota.',
        text: 'Disini saya bisa masuk di SMP dan SMA Negeri favorit di kota tempat saya tinggal.'
    },
    {
        title: 'Lulus dengan nilai yang lumayan.',
        text: 'Saya sejak SD sampai SMA alhamdulillah bisa lulus dengan nilai rapor yang cukup memuaskan.'
    },
    {
        title: 'Berhasil masuk UB jurusan dan prodi Teknik Informatika',
        text: 'Saya sejak kecil sudah suka main komputer dan elektronik, dan diakhir pendidikan SMA ingin untuk melanjutkan studi di bidang komputer. Disini saya menetapkan tujuan saya di Jurusan Teknik Informatika Universitas Brawijaya Malang.'
    }
]

const CapaianCapaian = () => (
    <div className='capaian section__padding' id='capaian'>
        <div className='capaian-heading'>
            <h1 className='gradient__text'>Capaian Saya Yang Kurang Lebih Bisa Saya Banggakan.</h1>
            <p>Bingung juga mau diisi apa.</p>
        </div>

        <div className='capaian-container'>
            {dataCapaian.map((item, index) => (
                <TextPlaceholder title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
);

export default CapaianCapaian;