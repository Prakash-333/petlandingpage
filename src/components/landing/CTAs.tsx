import { motion } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';

export default function CTAs() {
  const { t } = useTranslation();
    const { openBookDemoModal, openContactModal } = useModal();

  return (
    <section id="cta" className="py-12 md:py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="bg-[#121519] rounded-[2rem] md:rounded-[3rem] relative overflow-hidden py-10 md:py-16 px-5 sm:px-16 text-center">
          {/* Decorative SVG Background Lines */}
          <svg className="absolute start-0 bottom-0 pointer-events-none opacity-20" width="713" height="410" viewBox="0 0 713 410" fill="none" stroke="white" strokeOpacity="0.5" xmlns="http://www.w3.org/2000/svg">
            <path d="M682.907 484.533C695.503 444.57 705.228 400.872 691.238 361.386C672.894 309.65 617.745 278.967 563.532 270.375C509.32 261.768 454.065 270.505 399.207 272.603C344.348 274.702 285.906 268.882 241.992 235.917C181.111 190.21 163.777 104.969 109.285 51.7863C63.8512 7.45308 -6.63234 -9.27787 -67.1491 9.9424"></path>
            <path d="M641.482 482.967C653.4 445.169 662.6 403.82 649.367 366.472C632.013 317.53 579.846 288.506 528.564 280.379C477.267 272.236 425.011 280.507 373.121 282.492C321.231 284.477 265.935 278.97 224.403 247.786C166.796 204.54 150.415 123.91 98.8593 73.6098C55.8807 31.6733 -10.8023 15.8433 -68.0415 34.0275"></path>
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-7xl w-full mx-auto"
          >
            <h2 className="text-[30px] md:text-[42px] font-semibold text-white mb-6 leading-tight tracking-tight">
              {t('ctas.title')}
            </h2>
            <div className="flex justify-center w-full mb-10">
              <ul className="space-y-4 text-left max-w-4xl mx-auto px-4">
                {(t('ctas.subtitle') as string).split('\n').map((line, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0 bg-emerald-500/20 p-1.5 rounded-full">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#FFC814] text-[18px] md:text-[22px] font-bold mb-10 max-w-4xl mx-auto tracking-wide">
              {t('ctas.tagline')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button 
                onClick={openBookDemoModal}
                className="bg-[#FFC814] text-emerald-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#FFC814]/90 transition-all shadow-xl shadow-[#FFC814]/20 w-full sm:w-auto"
              >
                {t('ctas.bookDemo')}
              </button>
              <button 
                onClick={openContactModal}
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto"
              >
                {t('ctas.talkToTeam')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
