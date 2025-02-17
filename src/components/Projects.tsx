import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 1,
      titleKey: 'projects.items.ecommerce.title',
      descriptionKey: 'projects.items.ecommerce.description',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      titleKey: 'projects.items.taskManager.title',
      descriptionKey: 'projects.items.taskManager.description',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?fit=crop&w=800&q=80',
      github: 'https://github.com',
      technologies: ['React', 'Firebase', 'TypeScript']
    },
    {
      id: 3,
      titleKey: 'projects.items.weather.title',
      descriptionKey: 'projects.items.weather.description',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?fit=crop&w=800&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
      technologies: ['React', 'TypeScript', 'OpenWeather API']
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {t('projects.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={t(project.titleKey)}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(project.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(project.descriptionKey)}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="h-5 w-5" />
                    <span>{t('projects.viewGithub')}</span>
                  </a>
                  
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>{t('projects.viewLive')}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;