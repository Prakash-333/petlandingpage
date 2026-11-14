'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';

export default function AppDownload() {
  const { t } = useTranslation();
  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          
          {/* Text Content - Left */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 lg:col-span-6"
          >
            <h2 className="text-[28px] md:text-[38px] font-bold text-[#121519] mb-6 leading-tight">
              {t('appDownload.title')}
            </h2>
            <p className="text-[#576071] text-[20px] leading-relaxed mb-12 font-medium">
              {t('appDownload.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-10 md:gap-16">
              {/* Editor's Choice */}
              <div>
                <h3 className="text-[21px] font-bold text-[#121519] mb-2">{t('appDownload.editorsChoice')}</h3>
                <p className="text-[17px] text-[#858c97] font-bold mb-6">{t('appDownload.editorsChoiceStats')}</p>
                <a href="#" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 py-3 px-8 rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-emerald-600/20 min-w-[178px] min-h-[56px]">
                  <img 
                    src="https://coderthemes.com/around-html/assets/img/market/appstore-light.svg" 
                    alt="App Store" 
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* App of the Day */}
              <div>
                <h3 className="text-[21px] font-bold text-[#121519] mb-2">{t('appDownload.appOfDay')}</h3>
                <p className="text-[17px] text-[#858c97] font-bold mb-6">{t('appDownload.appOfDayStats')}</p>
                <a href="#" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 py-3 px-8 rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-emerald-600/20 min-w-[178px] min-h-[56px]">
                  <img 
                    src="https://coderthemes.com/around-html/assets/img/market/googleplay-light.svg" 
                    alt="Google Play" 
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image - Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-5 lg:col-span-6 flex justify-center md:justify-end"
          >
            <div className="relative max-w-[280px]">
              <img 
                src="https://coderthemes.com/around-html/assets/img/landing/saas-1/cta/device-light.png" 
                alt="GreenLane Mobile App" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
