import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import WhatIDoSection from './components/WhatIDoSection';
import LatestContentSection from './components/LatestContentSection';
import GetInTouchSection from './components/GetInTouchSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Navigation />
        <HeroSection />
        <WhatIDoSection />
        <LatestContentSection />
        <GetInTouchSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
