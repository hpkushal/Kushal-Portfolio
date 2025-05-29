import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import MobileNavigation from './components/MobileNavigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import NotFound from './components/NotFound';

// Case Study Pages
import AIPrototypingFramework from './pages/projects/AIPrototypingFramework';
import MultiBrandLaunch from './pages/projects/MultiBrandLaunch';
import PerformanceMarketingOptimization from './pages/projects/PerformanceMarketingOptimization';
import LoyaltyProgramPlatform from './pages/projects/LoyaltyProgramPlatform';
import ABTestingFramework from './pages/projects/ABTestingFramework';
import HealthcarePlatform from './pages/projects/HealthcarePlatform';
import MarketingAutomation from './pages/projects/MarketingAutomation';
import APIIntegrationSuite from './pages/projects/APIIntegrationSuite';

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
          <Route path="/projects" element={<Projects />} />
          
          {/* Case Study Routes */}
          <Route path="/projects/ai-prototyping-framework" element={<AIPrototypingFramework />} />
          <Route path="/projects/multi-brand-launch" element={<MultiBrandLaunch />} />
          <Route path="/projects/performance-marketing-optimization" element={<PerformanceMarketingOptimization />} />
          <Route path="/projects/loyalty-program-platform" element={<LoyaltyProgramPlatform />} />
          <Route path="/projects/ab-testing-framework" element={<ABTestingFramework />} />
          <Route path="/projects/healthcare-platform" element={<HealthcarePlatform />} />
          <Route path="/projects/marketing-automation" element={<MarketingAutomation />} />
          <Route path="/projects/api-integration-suite" element={<APIIntegrationSuite />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <MobileFooter />
      </div>
    </Router>
  );
}

export default App;
