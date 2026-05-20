import React, { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Language = "NL" | "EN" | "DE";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine language based on URL path
  const language: Language = location.pathname.startsWith("/en") 
    ? "EN" 
    : location.pathname.startsWith("/de") 
      ? "DE" 
      : "NL";

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    if (lang === "NL") {
      navigate("/");
    } else {
      navigate(`/${lang.toLowerCase()}`);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
