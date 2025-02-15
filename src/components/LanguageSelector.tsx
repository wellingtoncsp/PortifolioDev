import React from 'react';
import { Language } from '../types';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'pt-BR', flag: '🇧🇷', label: 'Português' },
    { code: 'en', flag: '🇺🇸', label: 'English' },
    { code: 'es', flag: '🇪🇸', label: 'Español' },
  ];

  return (
    <select
      onChange={(e) => onLanguageChange(e.target.value as Language)}
      value={currentLanguage}
      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md px-2 py-1"
    >
      {languages.map(({ code, flag, label }) => (
        <option key={code} value={code}>
          {flag} {label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;