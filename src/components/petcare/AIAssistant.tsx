'use client';
import React from 'react';
import { 
  Check, 
  ArrowRight, 
  PawPrint, 
  Calendar, 
  ShieldCheck, 
  Pill,
  ChevronRight,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

interface AIAssistantProps {
  onBookAppointment?: () => void;
}

export default function AIAssistant({ onBookAppointment }: AIAssistantProps) {
  const checkmarks = [
    'Answer health questions in natural language',
    'Provide personalised care recommendations',
    'Remind about vaccinations, medication and check-ups',
    'Escalate to a vet when needed',
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f2f9f5] relative overflow-hidden border-t border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Mobile App Frame + Floating AI Chat Interaction */}
          <div className="lg:col-span-7 relative flex flex-col md:flex-row items-center justify-center gap-6">
            
            {/* Soft background glow */}
            <div className="absolute w-[380px] h-[380px] bg-emerald-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            {/* Smartphone Mockup */}
            <div className="w-[260px] sm:w-[280px] bg-white rounded-[40px] p-3.5 shadow-2xl border-[6px] border-gray-900/90 relative shrink-0">
              {/* Notch */}
              <div className="w-24 h-4 bg-gray-900 mx-auto rounded-b-xl mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-800"></div>
              </div>

              {/* Screen Content */}
              <div className="space-y-3 font-sans">
                {/* App Header */}
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-md bg-[#10b981] flex items-center justify-center text-white">
                      <span className="text-[10px] font-bold">G</span>
                    </div>
                    <span className="text-xs font-bold text-gray-900">GreenLane Pet</span>
                  </div>
                  <span className="text-[9px] font-semibold text-gray-400">11:14</span>
                </div>

                {/* Pet Profile Header */}
                <div className="flex items-center gap-2.5 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-base overflow-hidden border border-amber-200">
                    🐕
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Luna</h4>
                    <p className="text-[10px] text-gray-400">Golden Retriever • 3 years</p>
                  </div>
                </div>

                {/* Health Overview Card */}
                <div className="bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100/70">
                  <span className="block text-[9px] font-semibold text-emerald-800 uppercase tracking-wide">Health Overview</span>
                  <div className="flex items-center justify-between mt-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white border border-emerald-300 flex items-center justify-center text-[10px] font-bold text-emerald-700">
                        92
                      </div>
                      <span className="text-[11px] font-bold text-emerald-900">Excellent</span>
                    </div>
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>

                {/* Dashboard List items */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100/70 text-gray-700 transition-colors">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <div>
                        <span className="text-[10px] font-semibold block text-gray-800">Vaccinations</span>
                        <span className="text-[9px] text-emerald-600 font-medium">Up to date</span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100/70 text-gray-700 transition-colors">
                    <div className="flex items-center gap-2">
                      <Pill className="w-3.5 h-3.5 text-purple-600" />
                      <div>
                        <span className="text-[10px] font-semibold block text-gray-800">Medications</span>
                        <span className="text-[9px] text-gray-500">Next dose in 3 days</span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100/70 text-gray-700 transition-colors">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      <div>
                        <span className="text-[10px] font-semibold block text-gray-800">Appointments</span>
                        <span className="text-[9px] text-gray-500">Next visit: 12 Apr 2025</span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Chat Conversation Cards */}
            <div className="space-y-3.5 max-w-[320px] w-full">
              
              {/* Bot Message 1: Purple circle with Paw Print logo */}
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs shadow-xs">
                    <PawPrint className="w-3.5 h-3.5 fill-white text-white" />
                  </div>
                  <span className="text-xs font-bold text-gray-900">GreenLane AI</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Luna&apos;s last check-up was 6 months ago. Would you like to schedule a wellness check-up or discuss any concerns?
                </p>
                <button
                  onClick={onBookAppointment}
                  className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] rounded-xl transition-colors text-center shadow-xs"
                >
                  Book an appointment
                </button>
              </div>

              {/* User Reply Bubble: Centered and cleanly aligned */}
              <div className="flex justify-center sm:justify-end">
                <div className="bg-[#e7f7ee] border border-emerald-200/90 rounded-xl py-3 px-4 shadow-sm max-w-[270px] w-full flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold text-emerald-950 text-left leading-normal">
                    Book a wellness check-up for next week.
                  </p>
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* Bot Response Bubble: Sky-blue circle with Paw Print logo placed side-by-side */}
              <div className="bg-white rounded-xl p-3.5 sm:p-4 shadow-md border border-gray-100 max-w-[290px] w-full">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#38bdf8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <PawPrint className="w-3.5 h-3.5 fill-white text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-800 leading-relaxed font-normal">
                      Great! I&apos;ve found 3 available slots for next week. Which one works best for you?
                    </p>
                    <span className="text-[10px] text-gray-400 font-medium block mt-1">14:24</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: AI Assistant Copy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-wider text-[#059669] uppercase block">
              AI Pet Health Assistant
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f2a24]">
              Personalised care,<br />
              24/7.
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Our AI assistant helps pet owners with instant advice, health insights, appointment booking and more — anytime, anywhere.
            </p>

            {/* Checkmarks with Solid Green Ticks */}
            <div className="space-y-3.5 pt-2">
              {checkmarks.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#064e3b] hover:text-[#059669] transition-colors group"
              >
                See how it works
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
