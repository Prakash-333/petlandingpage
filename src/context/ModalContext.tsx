'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isBookDemoModalOpen: boolean;
  openBookDemoModal: () => void;
  closeBookDemoModal: () => void;
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isBookDemoModalOpen, setIsBookDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openBookDemoModal = () => setIsBookDemoModalOpen(true);
  const closeBookDemoModal = () => setIsBookDemoModalOpen(false);
  
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <ModalContext.Provider value={{ 
      isBookDemoModalOpen, 
      openBookDemoModal, 
      closeBookDemoModal,
      isContactModalOpen,
      openContactModal,
      closeContactModal
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
