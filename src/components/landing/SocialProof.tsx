'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function SocialProof() {
  const clinicTypes = [
    { 
      id: 'medical',
      title: 'Medical Clinics', 
      desc: 'General practices and medical centers managing high patient volumes and complex coordination.',
      icon: 'https://coderthemes.com/around-html/assets/img/landing/saas-1/pricing/starter.svg'
    },
    { 
      id: 'dental',
      title: 'Dental Practices', 
      desc: 'Automate appointment scheduling, follow-ups, and patient communication workflows.',
      icon: 'https://coderthemes.com/around-html/assets/img/landing/saas-1/pricing/business.svg'
    },
    { 
      id: 'specialist',
      title: 'Specialist Centers', 
      desc: 'Tailored coordination for physiotherapy, dermatology, and multi-specialty healthcare networks.',
      icon: 'https://coderthemes.com/around-html/assets/img/landing/saas-1/pricing/premium.svg'
    }
  ];

  return (
    <section className="max-w-[1800px] mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[30px] md:text-[42px] font-bold text-[#121519] leading-tight text-center mx-auto max-w-4xl">
          Designed for Modern Healthcare Providers
        </h2>
        <p className="text-center text-[#576071] text-[20px] font-medium mt-4 mb-14 max-w-3xl mx-auto">
          GreenLane supports healthcare organizations managing high volumes of <br className="hidden md:block" /> patient communication and operational coordination.
        </p>
      </motion.div>

      <div className="mt-8">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {clinicTypes.map((item, i) => (
            <SwiperSlide key={i} className="h-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center h-full flex flex-col items-center px-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/5 flex items-center justify-center mb-6 overflow-hidden">
                   <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-10 h-10 object-contain"
                    style={{ filter: 'invert(51%) sepia(13%) saturate(1451%) hue-rotate(110deg) brightness(91%) contrast(83%)' }}
                  />
                </div>
                <h3 className="text-[20px] font-bold text-[#121519] mb-3">{item.title}</h3>
                <p className="text-[#576071] text-[20px] leading-relaxed mb-0 max-w-[280px]">
                  {item.desc}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
