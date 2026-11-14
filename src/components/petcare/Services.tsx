'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: 'pet-sitting',
      title: 'Pet Sitting',
      description: "Keep your pet safe while you're away.",
      icon: (
        /* Bold solid black Paw print matching reference */
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#111827]">
          {/* Main Palm Pad */}
          <path d="M12 11c-2.6 0-4.6 2-4.6 4.1 0 2.1 2 4.1 4.6 4.1s4.6-2 4.6-4.1c0-2.1-2-4.1-4.6-4.1z" />
          {/* 4 Toe Pads */}
          <circle cx="6.2" cy="11.4" r="2.2" />
          <circle cx="9.9" cy="6.6" r="2.2" />
          <circle cx="14.1" cy="6.6" r="2.2" />
          <circle cx="17.8" cy="11.4" r="2.2" />
        </svg>
      ),
    },
    {
      id: 'dog-walking',
      title: 'Dog Walking',
      description: 'Daily walks for a healthy and happy pet.',
      icon: (
        /* Authentic walking dog silhouette matching original reference */
        <svg viewBox="0 0 28 28" className="w-8 h-8" fill="none">
          <path
            fill="#111827"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 21.8 3.5 C 22.8 3.5 23.8 4.2 24.2 5.2 C 24.6 6.2 25.4 6.8 26.5 7.2 C 27.2 7.4 27.8 8 27.8 8.8 C 27.8 9.5 27 10.2 25.8 10.4 C 24.8 10.5 24 10.2 23.2 9.6 L 22.8 11.2 C 22.8 12.2 23 13.2 23.4 14.5 L 24 23.5 C 24.1 24.3 23.5 25 22.7 25 C 21.9 25 21.3 24.4 21.2 23.6 L 20.6 17.5 L 19.5 22.8 C 19.3 23.5 18.6 24 17.9 24 C 17.1 24 16.5 23.3 16.6 22.5 L 17.2 16.5 C 16.2 16.5 15.2 16.2 14.2 15.6 L 13.4 23.5 C 13.3 24.3 12.6 25 11.8 25 C 11 25 10.4 24.4 10.5 23.6 L 11 17 L 9.2 23.2 C 8.9 23.9 8.1 24.3 7.4 24 C 6.7 23.7 6.3 22.9 6.6 22.2 L 8 16.5 C 7 15.2 6.5 13.8 6.6 12.2 C 5.5 11.2 4.2 9.8 4 8 C 3.8 6.8 4.8 6.2 5.8 6.8 C 6.8 7.4 7.2 8.8 7.8 10.5 C 10.2 10.2 13 10 16 9.8 L 17.5 8 C 18.5 6.8 20 6.2 21.5 6.2 L 21.8 3.5 Z"
          />
          {/* Subtle collar accent band */}
          <path d="M 18.8 10.5 L 22.5 12" stroke="#faeedd" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'boarding',
      title: 'Boarding',
      description: 'A cozy home away from home.',
      icon: (
        /* Bold cozy house with chimney and paw print inside matching reference */
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
          <path d="M2.5 10.5L12 2.5l9.5 8" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 5.5V3.2h-2.5v1.2" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          <path d="M4.5 9.5V20.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9.5" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Paw stamp inside the home */}
          <circle cx="12" cy="16.5" r="1.8" fill="#111827" />
          <circle cx="9.6" cy="14" r="0.9" fill="#111827" />
          <circle cx="11.2" cy="12.8" r="0.9" fill="#111827" />
          <circle cx="12.8" cy="12.8" r="0.9" fill="#111827" />
          <circle cx="14.4" cy="14" r="0.9" fill="#111827" />
        </svg>
      ),
    },
    {
      id: 'grooming',
      title: 'Grooming',
      description: 'Look good, feel great.',
      icon: (
        /* Bold upright styling scissors with pivot screw matching reference */
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
          <circle cx="6.5" cy="17.5" r="3.2" stroke="#111827" strokeWidth="2.2" />
          <circle cx="17.5" cy="17.5" r="3.2" stroke="#111827" strokeWidth="2.2" />
          <path d="M8.8 15.2L16.5 3.5" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M15.2 15.2L7.5 3.5" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12" cy="9.8" r="1.1" fill="#111827" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#fdfbf8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* 5-Column Grid: Left Text Block + 4 Cards perfectly aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Block: Heading & View All Services Button */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-between py-1 pr-2">
            <div>
              {/* Category Tag with Line */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#6b7280]">
                  OUR SERVICES
                </span>
                <span className="w-10 h-[1.5px] bg-[#d1d5db]" />
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-[32px] lg:text-[34px] font-extrabold text-[#111827] tracking-tight leading-[1.12]">
                What We Offer
              </h2>

              {/* Description */}
              <p className="mt-3 text-[#6b7280] text-[14px] leading-relaxed max-w-[210px]">
                Comprehensive care for your beloved pets.
              </p>
            </div>

            {/* View All Services Button */}
            <div className="mt-8 lg:mt-0">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#111827] bg-white border border-[#d1d5db] hover:border-[#111827] hover:bg-[#faf8f5] px-5 py-2.5 rounded-full transition-all duration-200 group cursor-pointer shadow-2xs"
              >
                <span>View All Services</span>
                <ArrowRight size={14} strokeWidth={2.2} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* 4 Cards: Centered, Clean, Identical to Reference - pure informational display */}
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#ede7dd] rounded-[24px] p-6 sm:p-7 flex flex-col items-center text-center justify-center min-h-[245px] sm:min-h-[265px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#dfd5c7] hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] hover:-translate-y-1 select-none group cursor-default"
            >
              {/* Circular Soft Peach Badge: Enlarged with generous breathing room */}
              <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-[#faeedd] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-108 group-hover:bg-[#fce5cd] shadow-2xs">
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#111827] tracking-tight">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="mt-2 text-[13px] text-[#6b7280] leading-snug max-w-[155px]">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}


