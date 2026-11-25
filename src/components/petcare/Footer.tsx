'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'For Veterinary Clinics', href: '#veterinary' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <footer className="bg-[#043326] text-white py-8 lg:py-10 border-t border-[#03291f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Row - Single Bar Matching Reference */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">

          {/* Logo & Tagline - All Font in Pure White */}
          <Link href="#home" className="flex items-center gap-3 group">
            {/* White Circular Badge */}
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-1 shadow-sm group-hover:scale-105 transition-transform">
              <Image
                src="/brand-logo.png"
                alt="GreenLane Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-lg tracking-tight text-white">GreenLane</span>
                <span className="font-bold text-lg tracking-tight text-white">Pet</span>
              </div>
              <p className="text-xs text-white font-normal leading-none mt-0.5">
                AI for Healthier Pets
              </p>
            </div>
          </Link>

          {/* Navigation Links - All in Pure White */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-white">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-white/80 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Partner Tagline - All in Pure White */}
          <div className="flex flex-col items-center lg:items-end gap-2 text-white">
            <div className="flex items-center gap-3 text-white">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full border border-white/60 hover:bg-white hover:text-[#043326] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full border border-white/60 hover:bg-white hover:text-[#043326] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77A26.54 26.54 0 0 0 2 12a26.54 26.54 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.54 26.54 0 0 0 22 12a26.54 26.54 0 0 0-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full border border-white/60 hover:bg-white hover:text-[#043326] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>

            <p className="text-xs text-white font-medium">
              Part of GreenLane AI | A DigiMabble product
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
