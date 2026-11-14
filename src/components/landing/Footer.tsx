'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from '../Icons';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';
import { useCookieConsent } from '@/context/CookieContext';

export default function Footer() {
  const { t } = useTranslation();
  const { openSettings } = useCookieConsent();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setError(null);

    const payload = {
      email,
      source: 'Newsletter Subscription',
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://n8nprod.digimabbleai.com/webhook/landing-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    } catch (err) {
      console.error('Subscription error:', err);
      setError('Something went wrong. Please try again.');
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-10 pb-4 md:pt-12 md:pb-4">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 pt-0 md:pt-2 lg:pt-3 xl:pt-4">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-6 lg:gap-x-12 items-start pb-4">
          
          {/* Left Section: Brand & Tagline */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-start md:order-1 lg:order-none">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/10 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-6deg] border border-white/20">
                <Image
                  src="/paw-purple.svg"
                  alt="GreenLane Paw Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain brightness-125"
                />
              </div>
              <span className="text-2xl font-black tracking-tight flex items-center gap-1 font-heading">
                <span className="text-white">GreenLane</span>
                <span className="text-violet-400">AI</span>
              </span>
            </Link>
            
            <p className="text-[16px] text-white/70 leading-relaxed max-w-[350px] whitespace-pre-line">
              {t('footer.tagline')}
            </p>

            {/* Certification & Compliance Badges */}
            <div className="flex flex-row items-center gap-3 mt-4.5">
              <div className="max-w-[76px] sm:max-w-[80px] hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer" title="GDPR & EU Data Protection Assured">
                <img 
                  src="/gdpr-badge.jpg" 
                  alt="GDPR EU Compliance" 
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Middle Section: Navigation Columns */}
          <div className="col-span-12 lg:col-span-6 md:order-3 lg:order-none">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 sm:gap-x-12">
              <div className="mb-4 md:mb-0">
                <h4 className="text-[20px] font-bold text-white pb-1 lg:pb-2 mb-2">{t('footer.socials') || 'Socials'}</h4>
                <div className="flex gap-2.5 pt-1">
                  {[
                    { Icon: Facebook, label: 'Facebook', href: '#' },
                    { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/digimabbleproduct/' },
                    { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/digimabble/' }
                  ].map((social, i) => (
                    <Link 
                      key={i} 
                      href={social.href} 
                      target={social.href !== '#' ? '_blank' : undefined}
                      rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-emerald-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                      aria-label={social.label}
                    >
                      <social.Icon size={20} />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <h4 className="text-[20px] font-bold text-white pb-1 lg:pb-2 mb-2">{t('footer.platform')}</h4>
                <ul className="flex flex-col space-y-1">
                  {[
                    { label: t('footer.links.whyGreenLane') || 'Why GreenLane', id: 'why-now' },
                    { label: t('footer.links.problem') || 'Problem', id: 'problem' },
                    { label: t('footer.links.solution') || 'Solution', id: 'solution' },
                    { label: t('footer.links.capabilities') || 'Capabilities', id: 'features' },
                    { label: t('footer.links.howItWorks') || 'How It Works', id: 'how-it-works' }
                  ].map(link => (
                    <li key={link.id}>
                      <Link href={`/#${link.id}`} className="text-[17px] font-normal text-white/70 hover:text-emerald-400 transition-colors py-1 block">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 md:mb-0">
                <h4 className="text-[20px] font-bold text-white pb-1 lg:pb-2 mb-2">{t('footer.legal')}</h4>
                <ul className="flex flex-col space-y-1">
                  {[
                    { label: t('footer.gdpr') || 'GDPR & Data Protection', href: '/gdpr-compliance' },
                    { label: t('footer.privacy') || 'Privacy Policy', href: '/privacy-policy' },
                    { label: t('footer.terms') || 'Terms of Use', href: '/terms-and-conditions' }
                  ].map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[17px] font-normal text-white/70 hover:text-emerald-400 transition-colors py-1 block">{link.label}</Link>
                    </li>
                  ))}
                  <li>
                    <button 
                      onClick={openSettings}
                      className="text-[17px] font-normal text-white/70 hover:text-emerald-400 transition-colors py-1 block text-left cursor-pointer"
                    >
                      {t('footer.cookieSettings') || 'Cookie Settings'}
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[20px] font-bold text-white pb-2 mb-0 lg:mb-1">{t('footer.support')}</h4>
                <ul className="flex flex-col space-y-1 mt-1">
                  {[
                    { label: 'Contact', href: '/#contact' }
                  ].map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[17px] font-normal text-white/70 hover:text-emerald-400 transition-colors py-1 block">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section: Newsletter */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-start md:order-2 lg:order-none">
            <h4 className="text-[20px] font-bold text-white pb-1 lg:pb-2 mb-2">
              {t('footer.newsletterTitle') || 'Stay up to date'}
            </h4>
            <form onSubmit={handleSubscribe} className="w-full max-w-[300px] flex flex-col gap-3 mt-1.5">
              <input
                type="email"
                required
                disabled={isSubmitting}
                placeholder={t('footer.newsletterPlaceholder') || 'Enter your email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-[17px] focus:outline-none focus:bg-white/20 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder-white/50 h-[48px] disabled:opacity-70"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[48px] flex items-center justify-center bg-emerald-500 border border-transparent rounded-md text-[14px] font-bold text-white tracking-wider uppercase hover:bg-emerald-400 active:scale-[0.98] transition-all duration-300 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>SUBSCRIBING...</span>
                  </div>
                ) : (
                  t('footer.newsletterButton') || 'SUBSCRIBE TO THE NEWSLETTER'
                )}
              </button>

              {/* Dynamic Feedback Message */}
              {subscribed && (
                <p className="text-[13px] text-emerald-600 font-semibold mt-0.5 transition-all duration-300">
                  ✓ Thank you for subscribing!
                </p>
              )}
              {error && (
                <p className="text-[13px] text-red-500 font-medium mt-0.5 transition-all duration-300">
                  ⚠ {error}
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 mt-12 text-center w-full">
          <p className="text-[15px] text-white/50 mb-0">
            <span>{t('footer.copyright')}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
