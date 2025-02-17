import React from 'react';

interface SkillIconProps {
  name: string;
  imageUrl: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ imageUrl, name }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md text-center transition-all hover:scale-105 hover:shadow-lg">
      <img 
        src={imageUrl} 
        alt={name}
        className="h-16 w-16 mx-auto mb-3 object-contain"
      />
      <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
    </div>
  );
};

export default SkillIcon;