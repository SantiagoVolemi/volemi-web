import React from 'react';
import FloatingHeader from './components/sections/FloatingHeader';
import HeroCarousel from './components/sections/HeroCarousel';
import PartnersCarousel from './components/sections/PartnersCarousel';
import Webinars from './components/sections/Webinars';

function App() {
  return (
    <div className="App">
      <FloatingHeader />
      <HeroCarousel />
      <PartnersCarousel />
      <Webinars />
    </div>
  );
}

export default App;


