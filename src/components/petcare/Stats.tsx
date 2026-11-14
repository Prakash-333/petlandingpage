'use client';
import React from 'react';

export default function Stats() {
  const stats = [
    { value: '15,000+', label: 'Happy Pets Cared For', sub: 'Across 18 cities' },
    { value: '99.8%', label: 'On-Time Care Guarantee', sub: 'GPS tracked check-ins' },
    { value: '120+', label: 'Certified Pet Sitters', sub: 'Vetted & background-checked' },
    { value: '4.9 / 5', label: 'Average Client Rating', sub: 'Based on 2,800+ reviews' },
  ];

  return (
    <section className="py-10 bg-[#faf8f5] border-y border-[#f3ede4]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#111827] tracking-tight">
                {stat.value}
              </span>
              <span className="text-[14.5px] font-bold text-[#111827] mt-1.5">
                {stat.label}
              </span>
              <span className="text-[12.5px] text-[#6b7280] mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

