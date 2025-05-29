import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import MobileNavigation from './components/MobileNavigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div className="App">
        <Navigation />
        <MobileNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <MobileFooter />
      </div>
    </Router>
  );
}

export default App;
