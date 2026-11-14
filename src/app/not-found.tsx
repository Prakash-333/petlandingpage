import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdf9f8] flex flex-col items-center justify-center text-center px-6">
      <div className="w-16 h-16 rounded-full bg-[#faeedd] flex items-center justify-center mb-6 shadow-xs">
        <img src="/petcare/paw-black.svg" alt="PetCare" className="w-8 h-8" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-black text-[#111827] tracking-tight">404 — Page Not Found</h1>
      <p className="mt-3.5 text-[#6b7280] text-base max-w-md leading-relaxed">
        Oops! Looks like this page wandered off like an adventurous puppy. Let&apos;s get you back home!
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex items-center gap-2 bg-[#111827] hover:bg-black text-white font-semibold text-[15px] px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-md"
      >
        Back to Home
      </Link>
    </div>
  );
}
