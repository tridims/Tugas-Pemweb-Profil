import React from 'react';
import './medsos.css';
import { motion } from 'framer-motion';

const MedsosCard = ({ namaMedsos, username, linkSosmed }) => (

    <motion.div className='medsos__card' whileHover={{scale: 1.1}} >
        <div className='medsos__card-content'>
            <p>Social Media</p>
            <h3>{namaMedsos}</h3>
        </div>
        <div className='medsos__card-btn'>
        <a href={linkSosmed}>
            <button type='button' >{username}</button>
        </a>
        </div>
    </motion.div>
    
);

export default MedsosCard;