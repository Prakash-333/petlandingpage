import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function HowItWorks() {
  const { t, locale } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const translatedSteps = (t('howItWorks.steps') as { title: string, desc: string }[]).map((step, i) => ({
    ...step,
    id: `step-${i + 1}`
  }));

  const closeVideo = () => setIsVideoOpen(false);

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Top Row: 2 Stacked Small Cards (Left) + 1 Large Card (Right) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
            
            {/* Steps 1 & 2 */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {translatedSteps.slice(0, 2).map((card, i) => (
                <motion.div 
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-[#f6f9fc] p-6 sm:p-10 md:p-12 rounded-[2.5rem] border border-slate-100 flex flex-col justify-start hover:shadow-lg transition-all duration-300 h-full"
                >
                  <h3 className="text-[20px] font-bold text-[#121519] mb-4 tracking-tight leading-tight">{card.title}</h3>
                  <p className="text-[#576071] text-[15px] md:text-[18px] font-medium leading-relaxed mb-0">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Large Green Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 sm:col-span-2 lg:col-span-8 order-1 lg:order-2 bg-emerald-600 rounded-[3rem] overflow-hidden relative flex flex-col justify-between min-h-[520px] sm:min-h-[500px] md:min-h-[500px]"
            >
              {/* Light green branding glows removed for solid color */}

              <AnimatePresence mode="wait">
                {isVideoOpen ? (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full bg-black flex items-center justify-center"
                  >
                    <video
                      key={locale}
                      autoPlay
                      playsInline
                      className="h-full w-auto max-w-full"
                      onEnded={() => setIsVideoOpen(false)}
                    >
                      <source src={locale === 'fr' ? "/landing_video_fr.mp4" : "/landing_video.mp4"} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Optional close button inside box */}
                    <button 
                      onClick={() => setIsVideoOpen(false)}
                      className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    >
                      <X size={20} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col md:flex-row items-center md:items-start justify-between h-full pt-12 md:pt-20 px-6 md:px-16"
                  >
                    <div className="text-center md:text-left mb-10 md:mb-0 md:pr-12">
                      <h2 className="text-[34px] md:text-[46px] font-bold text-white mb-8 md:mb-12 leading-tight">
                        {t('howItWorks.title')}
                      </h2>
                      <button 
                        onClick={() => setIsVideoOpen(true)}
                        className="w-20 h-20 md:w-24 md:h-24 bg-[#FFC814] rounded-full flex items-center justify-center text-emerald-950 shadow-2xl hover:scale-105 transition-transform mx-auto md:mx-0 group"
                      >
                        <Play size={32} fill="currentColor" strokeWidth={2.5} className="ml-1 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                    <div className="w-full max-w-[480px] md:max-w-[580px] lg:max-w-[640px] mt-auto -mb-4 px-4 md:px-0 md:mb-0 md:absolute md:-bottom-18 md:right-8 lg:right-12 z-10">
                      <img 
                        src="/Gemini_Generated_Image_yf71k6yf71k6yf71-removebg-preview.png" 
                        alt="Dashboard Visual" 
                        className="w-full h-auto block"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Bottom Row: 4 Small Cards */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 order-3">
            {translatedSteps.slice(2).map((card, i) => (
              <motion.div 
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="bg-[#f6f9fc] p-6 sm:p-10 md:p-12 rounded-[2.5rem] border border-slate-100 flex flex-col justify-start hover:shadow-lg transition-all duration-300 h-full"
              >
                <h3 className="text-[20px] font-bold text-[#121519] mb-4 tracking-tight leading-tight">{card.title}</h3>
                <p className="text-[#576071] text-[15px] md:text-[18px] font-medium leading-relaxed mb-0">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
