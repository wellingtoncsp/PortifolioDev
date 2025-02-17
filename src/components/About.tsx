import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail } from 'lucide-react';
import SkillsList from './skills/SkillsList';
import fotoPerfil from '../img/perfil2.png';
const About: React.FC = () => {
  const { t } = useTranslation();

  const description = t('about.description').split('\n\n\n');

  return (
    <section id="about" className="relative pt-24 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Efeito de fundo decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent dark:from-blue-400/10"></div>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-64 w-64 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%) scale(${Math.random() + 0.5})`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <div className="relative group">
              <img
                //src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                src={fotoPerfil}
                alt="Profile"
                className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Wellington Carlos
            </h1>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              {description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed transition-all hover:text-gray-800 dark:hover:text-white">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a
                href="https://github.com/wellingtoncsp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/wellington-porto1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:wellingtoncsp25@gmail.com"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('about.skills')}
          </h2>
          <SkillsList />
        </div>
      </div>
    </section>
  );
};

export default About;