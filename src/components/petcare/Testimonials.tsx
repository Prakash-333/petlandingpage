'use client';
import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 'priya',
      quote: '"Excellent service! My dog was so happy and well taken care of."',
      name: 'Priya S.',
      avatar: '/petcare/avatar-priya.png',
      rating: 5,
    },
    {
      id: 'arjun',
      quote: '"Very professional and caring team. Highly recommended!"',
      name: 'Arjun K.',
      avatar: '/petcare/avatar-arjun.png',
      rating: 5,
    },
    {
      id: 'meena',
      quote: '"Easy booking process and great support. Thank you!"',
      name: 'Meena R.',
      avatar: '/petcare/avatar-meena.png',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#f6ede3] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative">
        
        {/* Left Decorative Paw Stamp matching reference placement */}
        <div className="absolute left-4 sm:left-8 lg:left-10 top-12 sm:top-14 w-11 h-11 sm:w-12 sm:h-12 opacity-85 pointer-events-none transform -rotate-15 select-none">
          <img 
            src="/petcare/paw-stamp.svg" 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Decorative Paw Stamp matching reference placement */}
        <div className="absolute right-4 sm:right-8 lg:right-10 top-12 sm:top-14 w-11 h-11 sm:w-12 sm:h-12 opacity-85 pointer-events-none transform rotate-15 select-none">
          <img 
            src="/petcare/paw-stamp.svg" 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Header Block: Centered with decorative lines */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14 relative z-10">
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <span className="w-12 h-[1px] bg-[#d7c9b8]" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#73685a]">
              TESTIMONIALS
            </span>
            <span className="w-12 h-[1px] bg-[#d7c9b8]" />
          </div>

          <h2 className="text-3xl sm:text-[36px] font-extrabold text-[#111827] tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* 3 Testimonials Cards Grid: Pure white cards popping on the warm peach canvas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative z-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_8px_24px_rgba(160,120,80,0.06)] border border-[#ede3d5] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(160,120,80,0.1)] hover:-translate-y-1"
            >
              {/* Quote */}
              <p className="text-[#374151] text-[15px] sm:text-[15.5px] leading-relaxed font-normal mb-8">
                {item.quote}
              </p>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 pt-2">
                {/* Circular Portrait Avatar */}
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 bg-[#faeedd] border border-black/5">
                  <img
                    src={item.avatar}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Stars */}
                <div>
                  <h4 className="text-[14.5px] font-bold text-[#111827] leading-tight">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-0.5 mt-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className="fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots: 4 small round dots matching reference image */}
        <div className="flex items-center justify-center gap-2.5 mt-12 relative z-10">
          {[0, 1, 2, 3].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setActiveSlide(dotIndex)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                activeSlide === dotIndex
                  ? 'bg-[#18181b]'
                  : 'bg-[#d0c2b2] hover:bg-[#b5a593]'
              }`}
              aria-label={`Slide ${dotIndex + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}



