'use client';
import React, { ReactNode } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { CookieProvider } from '@/context/CookieContext';
import { ModalProvider } from '@/context/ModalContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CookieProvider>
      <LanguageProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </LanguageProvider>
    </CookieProvider>
  );
}
