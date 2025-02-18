import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import imgAdv from '../img/adv.jpg'

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 1,
      titleKey: 'projects.items.wisewallet.title',
      descriptionKey: 'projects.items.wisewallet.description',
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1000',
      github: 'https://github.com/wellingtoncsp/wisewallet',
      live: 'https://wisewallet.netlify.app/',
      technologies: ['React', 'TypeScript', 'Firebase', 'TailwindCSS', 'ReCharts']
    },
    {
      id: 2,
      titleKey: 'projects.items.wisepark.title',
      descriptionKey: 'projects.items.wisepark.description',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1000',
      github: 'https://github.com/wellingtoncsp/WisePark',
      live: 'https://wisepark.netlify.app/',
      technologies: ['React', 'TypeScript', 'Firebase' ,'React Router','Tailwind CSS']
    },
    {
      id: 3,
      titleKey: 'projects.items.advogada.title',
      descriptionKey: 'projects.items.advogada.description',
      image: imgAdv,
      github: 'https://github.com/wellingtoncsp/flaviarabeloadv',
      live: 'https://flaviarabelo.netlify.app/',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS']
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