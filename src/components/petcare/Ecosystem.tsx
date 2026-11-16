'use client';
import React from 'react';
import { 
  Bot, 
  MessageSquare, 
  Calendar, 
  FileText, 
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
      icon: Bot,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
      badgeBg: 'bg-purple-100/50',
    },
    {
      title: 'Pet Messaging',
      description: 'Secure chat with your vet, care team or clinic.',
      icon: MessageSquare,
      color: 'bg-sky-50 text-sky-600 border-sky-100',
      badgeBg: 'bg-sky-100/50',
    },
    {
      title: 'Appointments',
      description: 'Book, reschedule and manage appointments with ease.',
      icon: Calendar,
      color: 'bg-orange-50 text-orange-600 border-orange-100',
      badgeBg: 'bg-orange-100/50',
    },
    {
      title: 'Health Records',
      description: 'Vaccinations, medical history, prescriptions and documents — all in one place.',
      icon: FileText,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      badgeBg: 'bg-emerald-100/50',
    },
    {
      title: 'Medication Reminders',
      description: 'Never miss a dose. Automatic reminders for your pet\'s medication.',
      icon: Pill,
      color: 'bg-pink-50 text-pink-600 border-pink-100',
      badgeBg: 'bg-pink-100/50',
    },
    {
      title: 'Health Insights',
      description: 'Track wellness, get alerts and stay ahead of potential issues.',
      icon: Activity,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      badgeBg: 'bg-indigo-100/50',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-bold tracking-wider text-emerald-700 uppercase block mb-2">
            The GreenLane Pet Platform
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f2a24] mb-4">
            A connected ecosystem<br />
            for pet health and wellbeing.
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mb-6">
            From everyday care to advanced treatment, GreenLane Pet brings together AI, veterinary expertise and digital tools — all in one intelligent platform.
          </p>

          <button
            onClick={onExploreFeatures}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] active:scale-95 transition-all duration-150 rounded-full shadow-sm group"
          >
            Explore Features
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-[#fcfdfd] hover:bg-white p-7 rounded-2xl border border-gray-100/90 hover:border-emerald-200/70 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-200"
              >
                {/* Icon badge */}
                <div className={`w-11 h-11 rounded-xl ${item.color} border flex items-center justify-center mb-5 transition-transform group-hover:scale-105`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

