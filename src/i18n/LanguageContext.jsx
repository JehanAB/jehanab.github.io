import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { translations } from './translations.js';

const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem('lang') || 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  const t = useCallback((key) => translations[lang][key] ?? key, [lang]);

  // Helper for data objects shaped like { en: '...', ar: '...' }
  const pick = useCallback((field) => (field ? field[lang] ?? field.en : ''), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
