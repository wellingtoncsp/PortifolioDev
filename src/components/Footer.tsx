import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/wellingtoncsp',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://www.linkedin.com/in/wellington-porto1/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      url: 'mailto:wellingtoncsp25@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-2 justify-center md:justify-start mb-4">
              <Code className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-white">Wellington Carlos</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 group"
                  title={link.label}
                >
                  {link.icon}
                  <span className="absolute bg-gray-900 text-white px-2 py-1 rounded text-sm -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Contato</h3>
            <p className="text-gray-400">
              <a 
                href="mailto:wellingtoncsp25@gmail.com" 
                className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
              >
                wellingtoncsp25@gmail.com
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4 text-white">Links Rápidos</h3>
            <div className="space-y-2">
              {['about', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2"
                >
                  {t(`nav.${section}`)}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="flex items-center justify-center gap-2 text-gray-400">
            <span>Desenvolvido com</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <Code className="h-4 w-4 text-blue-500" />
            <Coffee className="h-4 w-4 text-yellow-500" />
          </p>
          <p className="mt-2 text-gray-500">
            © {currentYear} Wellington Carlos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 