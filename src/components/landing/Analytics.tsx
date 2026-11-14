'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, TrendingDown } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function Analytics() {
  const { t } = useTranslation();
  const userCards = [
    { name: 'Marvina McKinney', trend: '+23%', isUp: true, avatar: 'M' },
    { name: 'Leslie Alexander', trend: '-32%', isUp: false, avatar: 'L' },
    { name: 'Cameron Williamson', trend: '+15%', isUp: true, avatar: 'C' },
    { name: 'Savannah Nguyen', trend: '+45%', isUp: true, avatar: 'S' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-[32px] md:text-[44px] font-bold text-slate-900 mb-4 tracking-tight">{t('analytics.title')}</h2>
          <p className="text-[20px] text-[#576071] font-medium max-w-2xl mx-auto">{t('analytics.subtitle')}</p>
        </div>

        {/* Top Part: Operational Stats */}
        <div className="relative h-[400px] mb-32 hidden md:block">
          {userCards.map((user, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="absolute bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-6 w-80"
              style={{ 
                top: `${i * 80}px`, 
                right: `${(3-i) * 60}px`,
                zIndex: 10 + i
              }}
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-600">
                {user.avatar}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900">{user.name}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t('analytics.patientStatus')}</p>
              </div>
              <div className="text-right">
                <div className={`flex items-center gap-1 text-xs font-bold ${user.isUp ? 'text-emerald-500' : 'text-slate-400'}`}>
                  {user.isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {user.isUp ? t('analytics.responded') : t('analytics.pending')}
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="absolute left-0 top-1/4 max-w-md">
             <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg mb-6">
                {t('analytics.badge')}
             </div>
             <h3 className="text-[26px] font-bold text-slate-900 mb-6">{t('analytics.title')}</h3>
             <p className="text-[#576071] text-[20px] font-medium leading-relaxed">
                {t('analytics.subtitle')}
             </p>
          </div>
        </div>

        {/* Bottom Part: KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
           <div className="md:col-span-4 space-y-12 order-2 md:order-1">
              <div className="bg-slate-50 p-10 rounded-card border border-slate-100 relative">
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{t('analytics.stats.automation')}</p>
                 <p className="text-[28px] font-black text-slate-900 mb-8">70–80%</p>
                 <div className="flex items-end gap-2 h-20">
                    {[30, 60, 40, 80, 50].map((h, i) => (
                      <div key={i} className="flex-1 bg-emerald-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                 </div>
              </div>
              <div className="bg-slate-50 p-10 rounded-card border border-slate-100">
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{t('analytics.stats.workload')}</p>
                 <p className="text-[28px] font-black text-slate-900 mb-8">30–40%</p>
                 <div className="h-20 w-full relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 200 60">
                       <path d="M0,50 Q50,10 100,40 T200,20" fill="none" stroke="#7c3aed" strokeWidth="3" />
                       <circle cx="200" cy="20" r="4" fill="#7c3aed" />
                    </svg>
                 </div>
              </div>
           </div>

           <div className="md:col-span-8 order-1 md:order-2">
              <div className="max-w-xl ml-auto">
                 <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg mb-6">
                    {t('analytics.benefitsBadge')}
                 </div>
                 <h3 className="text-[32px] font-bold text-slate-900 mb-10">{t('analytics.benefitsTitle')}</h3>
                 <div className="space-y-6">
                    {(t('analytics.benefits') as string[]).map((item, i) => (
                      <div key={i} className="flex gap-4 items-center font-bold text-slate-600 text-[14px]">
                         <CheckCircle2 className="text-emerald-500" size={20} />
                         {item}
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
