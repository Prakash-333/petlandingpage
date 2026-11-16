'use client';
import React, { useState } from 'react';
import Navbar from '@/components/petcare/Navbar';
import Hero from '@/components/petcare/Hero';
import Ecosystem from '@/components/petcare/Ecosystem';
import AIAssistant from '@/components/petcare/AIAssistant';
import VeterinaryCare from '@/components/petcare/VeterinaryCare';
import StatsSection from '@/components/petcare/StatsSection';
import PreFooterCTA from '@/components/petcare/PreFooterCTA';
import Footer from '@/components/petcare/Footer';
import DemoModal from '@/components/petcare/DemoModal';

export default function GreenLaneLandingPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  const handleOpenDemo = () => {
    setDemoOpen(true);
  };

  const handleExploreFeatures = () => {
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    const el = document.getElementById('veterinary');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#ecfdf5] selection:text-[#064e3b]">
      {/* Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero 
          onOpenDemo={handleOpenDemo} 
          onExploreFeatures={handleExploreFeatures} 
        />

        {/* Section 2: Platform Ecosystem (6 Features) */}
        <Ecosystem 
          onExploreFeatures={handleExploreFeatures} 
        />

        {/* Section 3: AI Pet Health Assistant (Mobile Mockup & Chat) */}
        <AIAssistant 
          onBookAppointment={handleOpenDemo} 
        />

        {/* Section 4: Veterinary Care (Simplified Care & Ecosystem Pillars) */}
        <VeterinaryCare 
          onOpenDemo={handleOpenDemo} 
        />

        {/* Section 5: Stats & Impact */}
        <StatsSection />

        {/* Section 6: Pre-Footer CTA */}
        <PreFooterCTA 
          onOpenDemo={handleOpenDemo} 
          onLearnMore={handleLearnMore} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Demo Scheduling Modal */}
      <DemoModal 
        isOpen={demoOpen} 
        onClose={() => setDemoOpen(false)} 
      />
    </div>
  );
}
