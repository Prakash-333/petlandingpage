'use client';
import React from 'react';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake, 
  Stethoscope, 
  FlaskConical, 
  Network 
} from 'lucide-react';

interface VeterinaryCareProps {
  onOpenDemo?: () => void;
}

export default function VeterinaryCare({ onOpenDemo }: VeterinaryCareProps) {
  const checkmarks = [
    'Secure messaging & teleconsultations',
    'AI-assisted clinical insights',
    'Shared health records',
    'Better collaboration across care teams',
  ];

  const ecosystemAudience = [
    {
      title: 'Pet Owners',
      desc: 'Manage your pet\'s health with ease',
      icon: HeartHandshake,
      color: 'bg-purple-100/70 text-purple-700',
    },
    {
      title: 'Veterinary Clinics',
      desc: 'Work smarter, deliver better care',
      icon: Stethoscope,
      color: 'bg-sky-100/70 text-sky-700',
    },
    {
      title: 'Labs & Pharmacies',
      desc: 'Faster diagnostics and treatment',
      icon: FlaskConical,
      color: 'bg-teal-100/70 text-teal-700',
    },
    {
      title: 'Pet Care Networks',
      desc: 'Connected, collaborative, proactive',
      icon: Network,
      color: 'bg-emerald-100/70 text-emerald-700',
    },
  ];

  return (
    <section id="veterinary" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Description & Value Props */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-[11px] font-bold tracking-wider text-emerald-700 uppercase block">
              Veterinary Care
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f2a24] leading-tight">
              Professional care, simplified
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Connect with trusted veterinary professionals and clinics. Enable better communication, faster decisions and improved outcomes for every pet.
            </p>

            <div className="space-y-3 pt-2">
              {checkmarks.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#064e3b] hover:text-emerald-600 transition-colors group"
              >
                For Veterinary Clinics
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Center Column: Vet Exam Photo */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 w-full max-w-[340px] aspect-[4/3] flex items-center justify-center bg-gray-50">
              <Image
                src="/petcare/vet-exam-hd.png"
                alt="Veterinarian examining golden retriever dog"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Built for the entire pet care ecosystem */}
          <div className="lg:col-span-4">
            <div className="bg-[#f8faf9] border border-gray-100/90 rounded-2xl p-6 shadow-sm space-y-5">
              <h3 className="text-sm sm:text-base font-bold text-gray-900">
                Built for the entire<br />
                pet care ecosystem.
              </h3>

              <div className="space-y-3.5">
                {ecosystemAudience.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-900 leading-none mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-gray-500 leading-tight">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

