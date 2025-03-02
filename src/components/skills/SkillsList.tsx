import React from 'react';
import SkillIcon from './SkillIcon';

const skills = [
  {
    name: 'React',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
  },

  {
    name: 'TypeScript',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
  },
  {
    name: 'JavaScript',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
  },
  {
    name: 'Node.js',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Java',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
  },
  {
    name: 'C#',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg'
  },
  {
    name: 'Python',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
  },
  {
    name: 'Git',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
  },
  {
    name: 'Docker',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg'
  },
  {
    name: 'MongoDB',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
  },


  {
    name: 'PostgreSQL',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg'
  },



  {
    name: 'SQL',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'
  },
];

const SkillsList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <SkillIcon key={skill.name} {...skill} />
      ))}
    </div>
  );
};

export default SkillsList;