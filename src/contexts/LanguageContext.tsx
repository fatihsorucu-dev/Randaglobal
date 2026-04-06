import React, { createContext, useContext, useState, useEffect } from 'react';

interface LocaleMeta {
  title: string;
  short: string;
  icon: string;
}

interface LocaleData {
  meta: LocaleMeta;
  [key: string]: any;
}

interface LanguageContextType {
  currentLocale: string;
  locales: Record<string, LocaleData>;
  t: (path: string, options?: { returnObjects?: boolean }) => any;
  setLocale: (locale: string) => void;
  meta: LocaleMeta;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState('en');
  const [locales, setLocales] = useState<Record<string, LocaleData>>({});

  useEffect(() => {
    // Dynamically import all JSON files from the locales folder
    const localeFiles = (import.meta as any).glob('../locales/*.json', { eager: true });
    const loadedLocales: Record<string, LocaleData> = {};

    for (const path in localeFiles) {
      const localeName = path.split('/').pop()?.replace('.json', '') || '';
      loadedLocales[localeName] = (localeFiles[path] as any).default || localeFiles[path];
    }

    setLocales(loadedLocales);
    
    // Default to 'en' if available, otherwise the first one found
    if (!loadedLocales['en'] && Object.keys(loadedLocales).length > 0) {
      setCurrentLocale(Object.keys(loadedLocales)[0]);
    }
  }, []);

  const setLocale = (locale: string) => {
    if (locales[locale]) {
      setCurrentLocale(locale);
      localStorage.setItem('preferred_language', locale);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('preferred_language');
    if (saved && locales[saved]) {
      setCurrentLocale(saved);
    }
  }, [locales]);

  const t = (path: string, options?: { returnObjects?: boolean }) => {
    const keys = path.split('.');
    let result = locales[currentLocale] as any;
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return path; // Fallback to path if not found
      }
    }
    
    if (options?.returnObjects) {
      return result;
    }
    
    return typeof result === 'string' ? result : path;
  };

  const meta = locales[currentLocale]?.meta || { title: 'English', short: 'EN', icon: '' };

  return (
    <LanguageContext.Provider value={{ currentLocale, locales, t, setLocale, meta }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
