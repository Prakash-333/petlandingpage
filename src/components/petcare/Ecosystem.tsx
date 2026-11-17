'use client';
import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  CalendarDays, 
  ClipboardList, 
  Pill, 
  Activity, 
  ArrowRight 
} from 'lucide-react';

interface EcosystemProps {
  onExploreFeatures?: () => void;
}

export default function Ecosystem({ onExploreFeatures }: EcosystemProps) {
  const features = [
    {
      title: 'AI Health Assistant',
      description: 'Get instant answers, care advice and personalised recommendations.',
      icon: Sparkles,
      cardBg: 'bg-[#faf5ff] border-purple-100/70',
      iconBg: 'bg-[#f3e8ff] text-[#9333ea] border-purple-200/60',
    },
    {
      title: 'Pet Messaging',
      description: 'Secure chat with your vet, care team or clinic.',
      icon: MessageSquare,
      cardBg: 'bg-[#f0f9ff] border-sky-100/70',
      iconBg: 'bg-[#e0f2fe] text-[#0284c7] border-sky-200/60',
    },
    {
      title: 'Appointments',
      description: 'Book, reschedule and manage appointments with ease.',
      icon: CalendarDays,
      cardBg: 'bg-[#fff7ed] border-orange-100/70',
      iconBg: 'bg-[#ffedd5] text-[#ea580c] border-orange-200/60',
    },
    {
      title: 'Health Records',
      description: 'Vaccinations, medical history, prescriptions and documents — all in one place.',
      icon: ClipboardList,
      cardBg: 'bg-[#f0fdf4] border-emerald-100/70',
      iconBg: 'bg-[#dcfce7] text-[#059669] border-emerald-200/60',
    },
    {
      title: 'Medication Reminders',
      description: 'Never miss a dose. Automatic reminders for your pet\'s medication.',
      icon: Pill,
      cardBg: 'bg-[#fdf2f8] border-pink-100/70',
      iconBg: 'bg-[#fce7f3] text-[#db2777] border-pink-200/60',
    },
    {
      title: 'Health Insights',
      description: 'Track wellness, get alerts and stay ahead of potential issues.',
      icon: Activity,
      cardBg: 'bg-[#f5f3ff] border-indigo-100/70',
      iconBg: 'bg-[#ede9fe] text-[#7c3aed] border-indigo-200/60',
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Side: Headline, Description & Explore Features Button */}
          <div className="lg:col-span-4 space-y-5">
            {/* 1. Green color tag */}
            <span className="text-xs font-bold tracking-wider text-[#059669] uppercase block mb-1">
              The GreenLane Pet Platform
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f2a24] leading-tight">
              A connected ecosystem<br />
              for pet health and wellbeing.
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              From everyday care to advanced treatment, GreenLane Pet brings together AI, veterinary expertise and digital tools — all in one intelligent platform.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreFeatures}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] active:scale-95 transition-all duration-150 rounded-full shadow-sm group"
              >
                Explore Features
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Side: 6 Category Boxes Grid (3 columns x 2 rows) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`p-5 rounded-2xl border ${item.cardBg} transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[160px] group`}
                  >
                    <div>
                      {/* 2. Custom App Icon Badge */}
                      <div className={`w-10 h-10 rounded-xl ${item.iconBg} border flex items-center justify-center mb-3.5 shadow-xs group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1.5 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
