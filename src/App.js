import React from 'react';

import { CapaianCapaian, Footer, Header, Medsos, Profil, Target } from './containers'
import { Navbar } from './components'

import './App.css';

const App = () => (
  <div className="App">
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Profil />
    <CapaianCapaian />
    <Target />
    <Medsos />
    <Footer />
  </div>
);

export default App;
