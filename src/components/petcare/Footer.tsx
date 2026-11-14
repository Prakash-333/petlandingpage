'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Instagram, Facebook, Linkedin } from '@/components/Icons';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#faf8f5] border-t border-[#f3ede4] pt-16 pb-12 text-[#111827]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#ece4d8]">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="#home" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110">
                <img 
                  src="/petcare/paw-black.svg" 
                  alt="PetCare Paw" 
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="text-[24px] font-extrabold tracking-tight text-[#111827] font-sans">
                PetCare
              </span>
            </Link>

            <p className="text-[#6b7280] text-[15px] leading-relaxed max-w-[380px] mb-6">
              Providing loving, professional pet care services tailored to your furry family members. Safe, reliable, and always from the heart.
            </p>

            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#4b5563] hover:text-[#111827] hover:border-[#111827] hover:shadow-xs transition-all"
                >
                  <item.Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-[16px] font-bold text-[#111827] mb-4 tracking-tight">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-[14.5px] text-[#4b5563]">
              <li>
                <a href="#home" className="hover:text-[#111827] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#111827] transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#111827] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#111827] transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#111827] transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Channels (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-[16px] font-bold text-[#111827] mb-4 tracking-tight">
              Get in Touch
            </h4>
            
            <ul className="flex flex-col gap-3 text-[14px] text-[#4b5563]">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#fcedd8] flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-[#111827]" />
                </div>
                <a href="mailto:info@digimabble.com" className="hover:text-[#111827] font-medium transition-colors">
                  info@digimabble.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#fcedd8] flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-[#111827]" />
                </div>
                <a href="tel:+32467859960" className="hover:text-[#111827] font-medium transition-colors">
                  +32 467 85 99 60
                </a>
              </li>

              <li className="flex items-start gap-3 mt-1">
                <div className="w-8 h-8 rounded-full bg-[#fcedd8] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={15} className="text-[#111827]" />
                </div>
                <span className="text-[13.5px] text-[#6b7280] leading-snug">
                  Avenue Eiffel 8, 1300 Wavre, Belgium
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Centered Copyright */}
        <div className="pt-8 flex items-center justify-center text-center text-[13.5px] text-[#6b7280]">
          <p>© 2026 PetCare Inc. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
