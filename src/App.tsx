import React from 'react';
import FloatingHeader from './components/sections/FloatingHeader';
import HeroCarousel from './components/sections/HeroCarousel';
import PartnersCarousel from './components/sections/PartnersCarousel';

function App() {
  return (
    <div className="App">
      <FloatingHeader />
      <HeroCarousel />
      <PartnersCarousel />
    </div>
  );
}

export default App;


