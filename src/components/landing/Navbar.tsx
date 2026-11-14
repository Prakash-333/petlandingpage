'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ShoppingCart, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';

export default function Navbar() {
  const { t } = useTranslation();
  const { openBookDemoModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Handle home section manually since it's at the very top
      if (currentScrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Center of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['why-now', 'solution', 'how-it-works', 'contact'];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  interface NavLink {
    name: string;
    href: string;
    onClick?: () => void;
  }

  const navLinks = [
    { name: t('navbar.home'), href: '/', id: 'home' },
    { name: t('navbar.whyNow'), href: '/#why-now', id: 'why-now' },
    { name: t('navbar.solution'), href: '/#solution', id: 'solution' },
    { name: t('navbar.howItWorks'), href: '/#how-it-works', id: 'how-it-works' },
    { name: t('navbar.contact'), href: '/#contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        suppressHydrationWarning
        className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-lg border-b border-[#FFC814]/20 py-2 shadow-sm'
          : 'bg-white py-3.5'
          }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex justify-between items-center" suppressHydrationWarning>

          <div className="flex items-center gap-6">
            {/* Navbar brand (Logo) */}
            <Link href="/" className="flex items-center gap-3 group pe-2">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-violet-50 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-6deg] shadow-sm border border-violet-100">
                <Image
                  src="/paw-purple.svg"
                  alt="GreenLane Paw Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="text-2xl md:text-[26px] font-black tracking-tight flex items-center gap-1 font-heading">
                <span className="text-slate-900">GreenLane</span>
                <span className="text-violet-600 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">AI</span>
              </span>
            </Link>

            {/* Desktop Nav - Tightened spacing to prevent wrapping */}
            <div className="hidden lg:flex items-center" suppressHydrationWarning>
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`text-[17px] font-bold transition-colors flex items-center gap-1.5 px-4 py-[10px] tracking-tight whitespace-nowrap ${activeSection === link.id ? 'text-violet-600' : 'text-slate-600 hover:text-violet-600'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher - Always visible to the left of secondary actions */}
            <LanguageSwitcher />

            {/* Desktop Only Book Demo button */}
            <button
              onClick={openBookDemoModal}
              className="hidden sm:flex items-center justify-center gap-2 bg-[#FFC814] text-emerald-950 px-5 h-[40px] rounded-xl text-[15px] font-bold hover:bg-[#FFC814]/90 transition-all active:scale-[0.98] shadow-sm whitespace-nowrap"
            >
              {t('navbar.bookDemo')}
            </button>

            {/* Mobile menu toggler */}
            <button
              className="lg:hidden p-2 text-slate-900 ml-1 sm:ml-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[2000] p-8 lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center p-1.5 border border-violet-100">
                  <Image
                    src="/paw-purple.svg"
                    alt="GreenLane Paw Logo"
                    width={38}
                    height={38}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-2xl font-black tracking-tight flex items-center gap-1 font-heading">
                  <span className="text-slate-900">GreenLane</span>
                  <span className="text-violet-600">AI</span>
                </span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} strokeWidth={2.5} className="text-slate-900" />
              </button>
            </div>

            <div className="flex flex-col gap-5 overflow-y-auto pb-8" suppressHydrationWarning>
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveSection(link.id);
                  }}
                  className={`text-left text-2xl font-bold transition-colors ${activeSection === link.id ? 'text-emerald-600' : 'text-slate-900'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBookDemoModal();
                  }}
                  className="bg-[#FFC814] text-emerald-950 p-4 rounded-xl text-center font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#FFC814]/90 transition-all shadow-lg"
                >
                  {t('navbar.bookDemo')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
