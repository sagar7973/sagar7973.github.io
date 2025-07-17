import React from 'react';
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className="flex items-center space-x-4 p-4 bg-light-card/50 dark:bg-dark-card/50 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-transparent hover:border-accent">
      <div className="text-primary dark:text-accent">
        <Icon className="w-8 h-8" />
      </div>
      <span className="font-medium text-light-text dark:text-dark-text">{skill.name}</span>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-light-bg dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TECHNICAL_SKILLS.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SOFT_SKILLS.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;