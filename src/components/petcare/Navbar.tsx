'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { User, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenLogin: () => void;
}

export default function Navbar({ onOpenBooking, onOpenLogin }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fdf9f8]/95 backdrop-blur-md transition-all">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110">
            <img 
              src="/petcare/paw-black.svg" 
              alt="PetCare Paw" 
              className="w-7 h-7 object-contain"
            />
          </div>
          <span className="text-[22px] md:text-[24px] font-extrabold tracking-tight text-[#111827] font-sans">
            PetCare
          </span>
        </Link>

        {/* Center Navigation Links (Pill Style) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`text-[15px] font-medium transition-all px-4 py-1.5 rounded-full ${
                  isActive
                    ? 'bg-[#faeedd] text-[#111827] font-semibold shadow-xs'
                    : 'text-[#4b5563] hover:text-[#111827] hover:bg-[#faf6f0]'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={onOpenLogin}
            className="flex items-center gap-1.5 text-[15px] font-semibold text-[#111827] hover:text-[#e5a663] transition-colors"
          >
            <User size={18} strokeWidth={2.2} />
            <span>Login</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-[#111827] hover:bg-black text-white text-[14.5px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md active:scale-95 group"
          >
            <span>Book Now</span>
            <ArrowRight size={16} strokeWidth={2.2} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111827] hover:bg-[#faf6f0] rounded-xl transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#f3ede4] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-[16px] px-4 py-2.5 rounded-xl font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-[#faeedd] text-[#111827] font-semibold'
                    : 'text-[#4b5563] hover:bg-[#faf6f0]'
                }`}
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#f3ede4] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-[15px] font-semibold text-[#111827] bg-[#faf6f0] rounded-xl"
              >
                <User size={18} />
                <span>Login</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 text-[15px] font-semibold text-white bg-[#111827] rounded-full shadow-md"
              >
                <span>Book Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

