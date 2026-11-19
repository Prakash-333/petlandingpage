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
      description: 'Instant AI guidance, symptom triage, and tailored care recommendations available anytime.',
      icon: Sparkles,
      cardBg: 'bg-[#faf5ff] border-purple-100/70',
      iconBg: 'bg-[#f3e8ff] text-[#9333ea] border-purple-200/60',
    },
    {
      title: 'Pet Messaging',
      description: 'AI-assisted communication connecting you directly with your vet clinic with smart message summaries.',
      icon: MessageSquare,
      cardBg: 'bg-[#f0f9ff] border-sky-100/70',
      iconBg: 'bg-[#e0f2fe] text-[#0284c7] border-sky-200/60',
    },
    {
      title: 'Appointments',
      description: 'Intelligent appointment scheduling that syncs with clinic availability and automates reminders.',
      icon: CalendarDays,
      cardBg: 'bg-[#fff7ed] border-orange-100/70',
      iconBg: 'bg-[#ffedd5] text-[#ea580c] border-orange-200/60',
    },
    {
      title: 'Health Records',
      description: 'AI-organized digital health memory unifying records, vaccine history, and diagnostic reports.',
      icon: ClipboardList,
      cardBg: 'bg-[#f0fdf4] border-emerald-100/70',
      iconBg: 'bg-[#dcfce7] text-[#059669] border-emerald-200/60',
    },
    {
      title: 'Medication Reminders',
      description: 'Smart dosage tracking and predictive reminder alerts so your pet\'s treatment stays on track.',
      icon: Pill,
      cardBg: 'bg-[#fdf2f8] border-pink-100/70',
      iconBg: 'bg-[#fce7f3] text-[#db2777] border-pink-200/60',
    },
    {
      title: 'Health Insights',
      description: 'Predictive wellness analytics that detect subtle health trends and alert you to potential issues early.',
      icon: Activity,
      cardBg: 'bg-[#f5f3ff] border-indigo-100/70',
      iconBg: 'bg-[#ede9fe] text-[#7c3aed] border-indigo-200/60',
    },
  ];

  return (
    <section id="features" className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2-Column Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Side: Headline, Description & Explore Features Button */}
          <div className="lg:col-span-4 space-y-5">
            {/* 1. Green color tag */}
            <span className="text-xs font-bold tracking-wider text-[#059669] uppercase block mb-1">
              THE INTELLIGENT CARE PLATFORM
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f2a24] leading-tight">
              An AI-driven platform<br />
              for pet wellbeing.
            </h2>

            <p className="text-sm text-gray-800 leading-relaxed max-w-md">
              From everyday symptom questions to continuous medical monitoring, GreenLane Pet combines clinical AI with veterinary expertise to deliver proactive, data-informed care.
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

                        <p className="text-[11px] sm:text-xs text-gray-700 font-medium leading-relaxed">
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
