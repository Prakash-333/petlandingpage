'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, TrendingUp, Clock, Calculator } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';

export default function OperationalImpact() {
  const { t } = useTranslation();
  const { openBookDemoModal } = useModal();

  const metrics = (t('operationalImpact.metrics') as {
    value: string;
    period?: string;
    title: string;
    desc: string;
  }[]) || [
    {
      value: '70–80%',
      title: 'Illustrative Automation Target',
      desc: 'A target range for eligible, repetitive communication tasks that can be automated within defined workflows.'
    },
    {
      value: '30–40%',
      title: 'Potential Administrative Workload Reduction',
      desc: 'An illustrative target for selected workflows, depending on operational processes, deployment and automation coverage.'
    },
    {
      value: '€900–€1,200',
      period: 'per Month',
      title: 'Illustrative Potential Cost Equivalent',
      desc: 'Calculated from an assumed €3,000 monthly administrative cost baseline and a 30–40% reduction in the relevant workload cost. This is not a guarantee of cash savings.'
    }
  ];

  const metricIcons = [
    <TrendingUp key="1" className="w-6 h-6 text-emerald-400" />,
    <Clock key="2" className="w-6 h-6 text-[#FFC814]" />,
    <Calculator key="3" className="w-6 h-6 text-emerald-400" />
  ];

  return (
    <section id="operational-impact" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
            <Sparkles size={13} className="text-emerald-400" />
            <span>{t('operationalImpact.eyebrow') || 'OPERATIONAL IMPACT'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            {t('operationalImpact.title') || 'Turn Repetitive Work Into More Time for Care'}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
            {t('operationalImpact.subtitle')}
          </p>
        </div>

        {/* Measure What Matters - Section Title */}
        <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight uppercase tracking-wider">
            {t('operationalImpact.sectionTitle') || 'Measure What Matters'}
          </h3>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.07] transition-all flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                    {metricIcons[i]}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/20">
                    Target
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    {metric.value}
                  </span>
                  {metric.period && (
                    <span className="text-sm font-semibold text-slate-400 ml-2">
                      {metric.period}
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-emerald-300 mb-3 leading-snug">
                  {metric.title}
                </h4>

                <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-medium">
                  {metric.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Built for Measurable Improvement block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto text-center mb-10"
        >
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
            {t('operationalImpact.improvementTitle') || 'Built for Measurable Improvement'}
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium mb-3">
            Every healthcare organization operates differently. Actual results depend on communication volume, workflow complexity, staffing costs, configuration and the proportion of tasks suitable for automation.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
            GreenLane AI aims to help organizations establish baseline performance, measure results during pilots and identify opportunities for continuous improvement.
          </p>
        </motion.div>

        {/* Tagline & CTA */}
        <div className="text-center pt-2">
          <p className="text-[#FFC814] text-lg sm:text-xl font-bold tracking-wide mb-6">
            {t('operationalImpact.tagline') || 'Start with a workflow. Measure the impact. Scale what works.'}
          </p>

          <button
            onClick={openBookDemoModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all shadow-lg shadow-emerald-500/20"
          >
            <span>{t('operationalImpact.ctaDemo') || 'Book a Live Demo'}</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
