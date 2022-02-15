import React from 'react';

import { CapaianCapaian, Footer, Header, Medsos, Profil, Target } from './containers'
import { Navbar } from './components'
import { motion } from 'framer-motion';

import './App.css';

const variants = {
  hidden: {opacity: 0, x: 0, y: 20},
  enter: {opacity: 1, x: 0, y: 0},
  exit: {opacity: 0, x: 0, y: 20}
}

const App = () => (
  <motion.div className="App" initial='hidden' animate='enter' exit='exit' variants={variants} transition={{duration: 0.8, type: 'easeInOut'}} style={{position: 'relative'}} >
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Profil />
    <CapaianCapaian />
    <Target />
    <Medsos />
    <Footer />
  </motion.div>
);

export default App;
