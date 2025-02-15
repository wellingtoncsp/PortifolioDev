import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail } from 'lucide-react';
import SkillsList from './skills/SkillsList';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="pt-24 pb-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <img
              //src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
              src="/src/img/perfil2.png"

              alt="Profile"
              className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Wellington Carlos
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('about.description')}
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/wellingtoncsp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/wellington-porto1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:wellingtoncsp25@gmail.com"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t('about.skills')}
          </h2>
          <SkillsList />
        </div>
      </div>
    </section>
  );
};

export default About;