'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do you screen and vet your pet sitters?',
      a: 'Every PetCare caregiver passes an intensive 7-step screening process: full national background checks, identity verification, in-person interviews, hands-on pet handling evaluations, and animal first aid certification.',
    },
    {
      q: 'Can I meet my pet sitter before the service begins?',
      a: 'Absolutely! We offer a complimentary in-person Meet & Greet prior to any scheduled sitting, boarding, or walking package so you and your pet can get completely comfortable with your caregiver.',
    },
    {
      q: 'What happens if my pet needs medical care in an emergency?',
      a: 'Your pet’s health is our top priority. We maintain 24/7 on-call access to our licensed veterinary network, hold your preferred vet’s contact on file, and cover all bookings under our comprehensive PetCare Safety Insurance.',
    },
    {
      q: 'How do I receive updates while I am away?',
      a: 'After every walk or sitting visit, you will receive real-time notifications via our mobile app containing GPS-tracked walk routes, potty & feeding logs, notes on your pet’s mood, and multiple high-resolution photos and videos.',
    },
    {
      q: 'What is your cancellation policy?',
      a: 'We understand plans change! We offer flexible cancellations: cancel up to 24 hours before standard walks and day visits for a 100% full refund with zero penalty fees.',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#faf8f5] border-t border-[#f3ede4]">
      <div className="max-w-[860px] mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-8 h-[1.5px] bg-[#d1d5db]" />
            <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#6b7280]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-8 h-[1.5px] bg-[#d1d5db]" />
          </div>
          <h2 className="text-3xl sm:text-[36px] font-extrabold text-[#111827] tracking-tight">
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p className="mt-2 text-[#6b7280] text-[15px]">
            Everything you need to know about our pet care services, sitters, and safety standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#f3ede4] rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs hover:border-[#e5d8c8]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-[16px] text-[#111827] hover:text-[#e5a663] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#faf8f5] flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#faeedd]' : ''}`}>
                    <ChevronDown size={18} className="text-[#111827]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[14.5px] text-[#6b7280] leading-relaxed border-t border-[#fcfaf7] animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

