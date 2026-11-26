'use client';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import BookDemoModal from './BookDemo';
import { motion, useScroll, useSpring } from 'framer-motion';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-violet-100 selection:text-violet-500 bg-white font-sans overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[2000] bg-violet-500"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="max-w-[850px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12 border-b border-slate-100 pb-12">
              <h1 className="text-[32px] md:text-[48px] font-bold text-[#121519] mb-4 leading-tight tracking-tight">
                {title}
              </h1>
              <p className="text-[14px] font-bold text-violet-500 uppercase tracking-widest">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <div className="prose prose-slate max-w-none prose-headings:text-[#121519] prose-headings:font-bold prose-p:text-[#576071] prose-p:leading-relaxed prose-p:text-[18px] prose-li:text-[#576071] prose-li:text-[18px] prose-strong:text-[#121519] prose-strong:font-bold">
              {children}
            </div>
          </motion.div>
        </div>
      </main>

      <BookDemoModal />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
