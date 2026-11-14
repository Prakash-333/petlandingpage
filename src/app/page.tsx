'use client';
import React, { useState } from 'react';
import Navbar from '@/components/petcare/Navbar';
import Hero from '@/components/petcare/Hero';
import Services from '@/components/petcare/Services';
import About from '@/components/petcare/About';
import Testimonials from '@/components/petcare/Testimonials';
import Footer from '@/components/petcare/Footer';
import BookingModal from '@/components/petcare/BookingModal';
import LoginModal from '@/components/petcare/LoginModal';

export default function PetCareLandingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Pet Sitting');

  const handleOpenBooking = (service?: string) => {
    if (service) setSelectedService(service);
    setBookingOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#faeedd] selection:text-[#111827]">
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenLogin={() => setLoginOpen(true)} 
      />

      <main>
        <Hero 
          onExploreServices={handleExploreServices} 
        />
        <Services />
        <About onLearnMore={handleLearnMore} />
        <Testimonials />
      </main>

      <Footer />

      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)} 
        initialService={selectedService}
      />

      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
      />
    </div>
  );
}
