'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieContextType {
  preferences: CookiePreferences;
  hasConsented: boolean;
  showSettings: boolean;
  setPreferences: (prefs: CookiePreferences) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  isLoaded: boolean;
}

const COOKIE_CONSENT_KEY = 'greenlane_cookie_consent';

const defaultPreferences: CookiePreferences = {
  essential: true, // Always true
  analytics: false,
  marketing: false,
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferencesState] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent);
        setPreferencesState(parsed);
        setHasConsented(true);
      } catch (e) {
        console.error('Failed to parse cookie consent', e);
      }
    }
    setIsLoaded(true);
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const prefsToSave = { ...prefs, essential: true };
    setPreferencesState(prefsToSave);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefsToSave));
    setHasConsented(true);
    setShowSettings(false);

    // Trigger custom event for external scripts to listen to
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: prefsToSave }));
  };

  const acceptAll = () => {
    savePreferences({ essential: true, analytics: true, marketing: true });
  };

  const rejectAll = () => {
    savePreferences({ essential: true, analytics: false, marketing: false });
  };

  const openSettings = () => setShowSettings(true);
  const closeSettings = () => setShowSettings(false);

  // Always render the Provider so that children can access the context,
  // even before hydration is complete.

  return (
    <CookieContext.Provider
      value={{
        preferences,
        hasConsented,
        showSettings,
        setPreferences: savePreferences,
        acceptAll,
        rejectAll,
        openSettings,
        closeSettings,
        isLoaded,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
}
