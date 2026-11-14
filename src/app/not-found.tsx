'use client';
import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import BookDemoModal from '@/components/landing/BookDemo';
import ContactModal from '@/components/landing/ContactModal';
import { motion } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';

export default function NotFound() {
  const { t, locale } = useTranslation();

  // Basic translations since this is a global 404 page
  // We provide fallbacks in case the keys are not added to the translations file
  const getText = (key: string, fallback: string) => {
    try {
      const val = key.split('.').reduce((o, i) => o[i], t as any);
      return val || fallback;
    } catch (e) {
      return fallback;
    }
  };

  const title = locale === 'fr' ? 'Page non trouvée' : 
                locale === 'nl' ? 'Pagina niet gevonden' : 
                locale === 'pl' ? 'Strona nie znaleziona' :
                locale === 'es' ? 'Página no encontrada' : 'Page not found';
                
  const description = locale === 'fr' ? "La page que vous recherchez a peut-être été supprimée, a changé de nom ou est temporairement indisponible." : 
                      locale === 'nl' ? "De pagina die u zoekt is mogelijk verwijderd, van naam veranderd of tijdelijk niet beschikbaar." : 
                      locale === 'pl' ? "Strona, której szukasz, mogła zostać usunięta, zmieniła nazwę lub jest tymczasowo niedostępna." :
                      locale === 'es' ? "Es posible que la página que busca se haya eliminado, haya cambiado de nombre o no esté disponible temporalmente." : 
                      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.";

  const goBack = locale === 'fr' ? 'Retour' : 
                 locale === 'nl' ? 'Ga terug' : 
                 locale === 'pl' ? 'Wróć' :
                 locale === 'es' ? 'Regresar' : 'Go Back';

  const backHome = locale === 'fr' ? 'Retour à l\'accueil' : 
                   locale === 'nl' ? 'Terug naar Home' : 
                   locale === 'pl' ? 'Wróć na stronę główną' :
                   locale === 'es' ? 'Volver a inicio' : 'Back to Home';

  return (
    <div className="relative selection:bg-emerald-100 selection:text-emerald-500 bg-white font-sans overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6 relative z-10">
        <div className="absolute inset-0 bg-[#FFF0B3]/30 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-emerald-100 text-emerald-600 mb-8 shadow-sm">
              <span className="text-4xl font-bold font-manrope">404</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {title}
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => window.history.back()}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-slate-600 font-bold hover:bg-slate-50 transition-all border border-slate-200 w-full sm:w-auto"
              >
                <ArrowLeft size={18} />
                <span>{goBack}</span>
              </button>
              
              <Link 
                href="/"
                className="flex items-center justify-center gap-2 bg-[#FFC814] text-emerald-950 px-6 py-3.5 rounded-xl font-bold hover:bg-[#FFC814]/90 transition-all shadow-sm w-full sm:w-auto"
              >
                <Home size={18} />
                <span>{backHome}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <BookDemoModal />
      <ContactModal />
      <Footer />
    </div>
  );
}
