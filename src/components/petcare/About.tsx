'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutProps {
  onLearnMore?: () => void;
}

export default function About({ onLearnMore }: AboutProps) {
  const features = [
    {
      id: 'trusted',
      title: 'Trusted & Reliable',
      description: "Your pet's safety is our priority.",
      icon: (
        <svg 
          className="w-5 h-5 text-[#111827]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
    },
    {
      id: 'loving',
      title: 'Loving Care',
      description: 'Because they deserve the best.',
      icon: (
        <svg 
          className="w-5 h-5 text-[#111827]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
    },
    {
      id: 'support',
      title: '24/7 Support',
      description: "We're always here to help.",
      icon: (
        /* Pure vector 24 icon with NO text node so '24' is never rendered/selected above the title */
        <svg 
          className="w-5 h-5 select-none" 
          viewBox="0 0 24 24" 
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9.5" stroke="#111827" strokeWidth="1.8" />
          <path d="M8.2 9.5c0-1.2.9-2 2.1-2 1.3 0 2.1.8 2.1 1.9 0 .9-.5 1.5-1.4 2.3l-1.5 1.3h3v1.4H7.8v-1.3l2.2-2c.7-.6 1.1-1.1 1.1-1.7 0-.5-.4-.8-.9-.8-.6 0-.9.3-1 .8L8.2 9.5z" fill="#111827" />
          <path d="M14.8 7.6h1.5v4.5h1.2v1.4h-1.2v1.9h-1.5v-1.9h-2.8v-1.3l2.8-4.6zm0 4.5V9.4l-1.8 2.7h1.8z" fill="#111827" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#fdfbf8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Column 1: Cute Fluffy Puppy with Decorative Rays matching reference tilted badge (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start pt-2">
            
            <div className="relative">
              {/* Playful Sunburst Rays top-left matching reference */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 w-11 h-11 pointer-events-none z-10 select-none">
                <img 
                  src="/petcare/sunburst-rays.svg" 
                  alt="" 
                  aria-hidden="true"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Asymmetrical Organic Rounded Container with counter-clockwise tilt matching reference image */}
              <div className="relative w-full sm:w-[370px] lg:w-[380px] h-[230px] sm:h-[240px] rounded-[32px_50px_26px_38px] overflow-hidden shadow-[0_10px_28px_rgba(0,0,0,0.05)] border border-[#ede7dd] transform -rotate-[2.5deg] transition-transform duration-300 hover:rotate-0">
                <img
                  src="/petcare/about-puppy-hd.jpg"
                  alt="Happy fluffy puppy smiling in green park"
                  className="w-full h-full object-cover object-[center_30%] select-none transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

          </div>

          {/* Columns 2 & 3: Middle Copy + Right Features (7 cols) aligned at top */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
            
            {/* Middle Column: Heading, Bio & Learn More Button */}
            <div className="flex flex-col justify-between py-1">
              <div>
                {/* Category Tag with Line */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#6b7280]">
                    ABOUT US
                  </span>
                  <span className="w-10 h-[1.5px] bg-[#d1d5db]" />
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-[32px] lg:text-[34px] font-extrabold text-[#111827] tracking-tight leading-[1.15]">
                  Care That Comes<br />from the Heart
                </h2>

                {/* Description */}
                <p className="mt-3.5 text-[#6b7280] text-[14px] leading-relaxed max-w-[320px]">
                  We&apos;re a passionate team of pet lovers, dedicated to providing the best care and attention for your pets.
                </p>
              </div>

              {/* Learn More Button */}
              <div className="mt-8">
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 bg-[#18181b] hover:bg-black text-white text-[13.5px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-md active:scale-95 group cursor-pointer shadow-2xs"
                >
                  <span>Learn More</span>
                  <ArrowRight size={15} strokeWidth={2.2} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Feature Pillars with Left Vertical Divider */}
            <div className="md:border-l md:border-[#e5e7eb] md:pl-8 lg:pl-10 flex flex-col justify-between gap-6 py-1">
              {features.map((item) => (
                <div key={item.id} className="flex items-start gap-4 group">
                  {/* Circular Soft Peach Badge */}
                  <div className="w-11 h-11 rounded-full bg-[#fcedd8] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 border border-[#f5dfc6]/60">
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div>
                    <h4 className="text-[15px] font-bold text-[#111827] tracking-tight leading-tight">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[13px] text-[#6b7280] leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

