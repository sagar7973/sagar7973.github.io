
import React from 'react';
import { PROFILE } from '../constants';
import { LinkedInIcon, GithubIcon, MailIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
