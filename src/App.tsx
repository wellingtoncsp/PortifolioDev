import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
<<<<<<< HEAD
import Footer from './components/Footer';
=======
>>>>>>> 2b524c9947ad5c1d411bbac59927419c0cd4d165
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
<<<<<<< HEAD
        <Footer />
=======
>>>>>>> 2b524c9947ad5c1d411bbac59927419c0cd4d165
      </div>
    </div>
  );
}

export default App;