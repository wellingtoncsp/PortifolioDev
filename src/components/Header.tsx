import React from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Code } from 'lucide-react';
import { Theme, Language } from '../types';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">DevPortfolio</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {t('nav.about')}
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {t('nav.projects')}
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {t('nav.contact')}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector
              currentLanguage={i18n.language}
              onLanguageChange={changeLanguage}
            />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;