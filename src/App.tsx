import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import VisionMission from './pages/VisionMission';
import CoreValues from './pages/CoreValues';
import TargetMarket from './pages/TargetMarket';
import MarketingStrategy from './pages/MarketingStrategy';
import PricingStrategy from './pages/PricingStrategy';
import TechnologyUse from './pages/TechnologyUse';
import FinancialProjections from './pages/FinancialProjections';
import GrowthPlan from './pages/GrowthPlan';
import Owner from './pages/Owner';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/vision-mission" element={<VisionMission />} />
              <Route path="/core-values" element={<CoreValues />} />
              <Route path="/target-market" element={<TargetMarket />} />
              <Route path="/marketing-strategy" element={<MarketingStrategy />} />
              <Route path="/pricing-strategy" element={<PricingStrategy />} />
              <Route path="/technology-use" element={<TechnologyUse />} />
              <Route path="/financial-projections" element={<FinancialProjections />} />
              <Route path="/growth-plan" element={<GrowthPlan />} />
              <Route path="/owner" element={<Owner />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;