import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Theme } from './types';
import './i18n';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const { i18n } = useTranslation();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;