
import React from 'react';
import { PROJECTS } from '../constants';
import { GithubIcon, ArrowTopRightOnSquareIcon } from './Icons';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold mb-2 text-primary dark:text-accent">{project.title}</h3>
      <p className="text-light-text dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tools.map((tool, i) => (
          <span key={i} className="bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {tool}
          </span>
        ))}
      </div>
    </div>
    <div className="p-6 bg-light-bg/50 dark:bg-dark-bg/30 mt-auto flex justify-end space-x-4">
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">
          <GithubIcon className="w-6 h-6" />
        </a>
      )}
      {project.liveLink && (
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">
          <ArrowTopRightOnSquareIcon className="w-6 h-6" />
        </a>
      )}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-light-bg dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
