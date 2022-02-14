import React from 'react';
import './target.css';
import foto from '../../assets/foto.png';

const Target = () => (
    <div className='target section__padding' id='target'>
        <div className='target-image'>
            <img src={foto} alt='foto' />
        </div>

        <div className='target-content'>
            <h1 className='gradient__text'>Target jangka pendek yang ingin saya capai</h1>
            <ul>
                <li>Mendapat pengalaman serta skill/kemampuan baik hardskill maupun softskill di universitas.</li>
                <li>Mendapat kesempatan magang/kampus merdeka/PKL yang bagus dan mendapat pengalaman</li>
                <li>Lulus dengan nilai dan waktu yang memuaskan.</li>
            </ul>
        </div>
    </div>
);

export default Target;