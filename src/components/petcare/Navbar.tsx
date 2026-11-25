'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'For Veterinary Clinics', href: '#veterinary' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo matching the reference design */}
          <Link href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/brand-logo.png"
                alt="GreenLane Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex items-baseline">
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-[#0f2a24]">GreenLane</span>
              <span className="font-semibold text-xl sm:text-2xl tracking-tight text-[#10b981] ml-0.5">Pet</span>
            </div>
          </Link>

          {/* Desktop Nav Links (High-contrast dark color) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative py-1 text-[#0f2a24] hover:text-[#059669] ${
                  idx === 0
                    ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0f2a24]'
                    : ''
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] active:scale-95 transition-all duration-150 rounded-full shadow-sm hover:shadow-md hover:shadow-emerald-950/20"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-[#0f2a24] hover:text-[#059669] hover:bg-emerald-50/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo?.();
              }}
              className="w-full text-center px-5 py-3 text-sm font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] rounded-full shadow-sm"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
