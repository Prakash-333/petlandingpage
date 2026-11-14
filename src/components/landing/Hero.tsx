import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';
import HeroCarousel from './HeroCarousel';

export default function Hero() {
  const { t } = useTranslation();
    const { openBookDemoModal, openContactModal } = useModal();

  return (
    <section id="home" className="relative pt-12 md:pt-20 overflow-hidden">
      {/* Background container */}
      <div className="absolute top-0 left-0 w-full" style={{ height: '79%' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-600">
        </div>

        {/* Bottom Curve SVG */}
        <div className="absolute left-0 bottom-0 w-full overflow-hidden -mb-1" style={{ paddingBottom: '6.2%', color: 'var(--background)' }}>
          <svg className="absolute left-0 bottom-0 w-full h-full" viewBox="0 0 3000 185.4" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"></path>
          </svg>
        </div>
      </div>

      {/* Swoosh SVG Background Effect */}
      <svg className="absolute right-0 z-[2] mt-4 mt-sm-5 pointer-events-none" width="836" height="755" fill="none" stroke="white" strokeMiterlimit="10" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.253 754.495c-18.309-66.796-31.642-139.581-6.067-203.929 33.531-84.307 126.54-131.543 216.622-142.348 90.082-10.831 180.803 7.052 271.284 13.945s187.376.931 261.969-50.776C868.476 299.694 902.433 159.981 995.762 75.54 1073.58 5.151 1191.04-18.081 1289.8 17.446M89.774 754.494c-17.324-63.177-29.938-132.049-5.748-192.911 31.722-79.756 119.701-124.438 204.913-134.657 85.239-10.246 171.036 6.68 256.621 13.2s177.263.878 247.812-48.035c97.852-67.835 129.947-199.99 218.248-279.853 73.61-66.584 184.74-88.565 278.15-54.954M158.305 754.496c-16.313-59.585-28.235-124.492-5.402-181.894 29.912-75.206 112.862-117.333 193.231-126.966 80.368-9.661 161.269 6.307 241.983 12.427 80.715 6.148 167.151.825 233.655-45.293 92.264-63.949 122.522-188.574 205.768-263.886 69.4-62.805 174.17-83.509 262.26-51.814M226.834 754.495c-15.328-55.965-26.532-116.96-5.083-170.876 28.103-70.655 106.023-110.228 181.521-119.276 75.499-9.074 151.503 5.908 227.321 11.683s157.011.772 219.497-42.553c86.675-60.09 115.097-177.157 193.31-247.891 65.2-59 163.64-78.453 246.37-48.674M295.359 754.495c-14.344-52.372-24.802-109.429-4.763-159.859 26.266-66.104 99.183-103.122 169.812-111.584 70.628-8.489 141.736 5.535 212.657 10.937s146.899.719 205.366-39.811c81.087-56.205 107.699-165.741 180.859-231.925 60.99-55.193 153.1-73.396 230.48-45.533" strokeOpacity=".12"></path>
      </svg>

      <div className="max-w-[1800px] mx-auto px-4 md:px-8 relative z-[5] pt-12 mt-6 lg:mt-12" data-bs-theme="dark">
        <div className="flex justify-center text-center pt-md-2 pt-lg-0 pt-xl-2 pb-12 mb-md-2">
          <div className="w-full max-w-[1400px]">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex bg-emerald-50 text-emerald-800 text-[13px] px-4 py-1.5 rounded-full mb-6 font-bold uppercase tracking-wider shadow-lg shadow-emerald-900/20"
            >
              {t('hero.badge')}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white mb-4 sm:mb-6 mx-auto tracking-[-0.02em] w-full"
              style={{
                fontSize: 'clamp(32px, 6.5vw, 54px)',
                fontWeight: 600,
                lineHeight: 1.15,
                maxWidth: '1200px'
              }}
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 pb-3 mb-4 font-medium mx-auto w-full max-w-[1300px]"
              style={{ fontSize: 'clamp(16px, 1.8vw, 22px)', lineHeight: 1.5 }}
            >
              {t('hero.description1')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-white/95 pb-3 mb-4 font-medium mx-auto max-w-[950px]"
              style={{ fontSize: 'clamp(16px, 1.5vw, 18px)', lineHeight: 1.6 }}
            >
              {t('hero.description2')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="text-[#FFC814] pb-3 mb-8 md:mb-10 font-bold mx-auto max-w-[950px]"
              style={{ fontSize: 'clamp(17px, 1.6vw, 19px)', lineHeight: 1.6 }}
            >
              {t('hero.highlight')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <button
                onClick={openBookDemoModal}
                className="bg-[#FFC814] text-emerald-950 px-10 py-5 rounded-xl font-bold text-[17px] hover:bg-[#FFC814]/90 transition-all shadow-2xl shadow-[#FFC814]/30 w-full sm:w-auto"
              >
                {t('hero.bookDemo')}
              </button>
              <button 
                onClick={openContactModal}
                className="bg-emerald-700 text-white border border-emerald-600 px-10 py-5 rounded-xl font-bold text-[17px] hover:bg-emerald-800 hover:border-emerald-700 transition-all shadow-xl shadow-emerald-700/20 w-full sm:w-auto"
              >
                {t('hero.talkToSales')}
              </button>
            </motion.div>
 
            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-4 border-t border-white/10"
            >
              {(t('hero.trustBar') as string[]).map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-white text-[12px] md:text-[14px] font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC814]"></div>
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dashboard Preview - Static Device Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-[#121519] rounded-[2rem] p-2 mx-auto relative mb-12 md:mb-20 ring-1 ring-white/10 shadow-2xl"
          style={{ maxWidth: '1150px' }}
        >
          <HeroCarousel />
          
          {/* Subtle Device Shine */}
          <div className="absolute inset-0 rounded-[2rem] border border-white/5 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
// end of line //