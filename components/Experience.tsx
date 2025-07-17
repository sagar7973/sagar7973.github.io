
import React from 'react';
import { EXPERIENCES } from '../constants';
import { BriefcaseIcon, CheckCircleIcon } from './Icons';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Work Experience</h2>
        <div className="relative border-l-2 border-primary/30 dark:border-accent/30 ml-6">
          {EXPERIENCES.map((item, index) => (
            <div key={index} className="mb-12 pl-12">
              <div className="absolute -left-5 -top-1.5 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-8 ring-light-bg dark:ring-dark-bg">
                <BriefcaseIcon className="w-5 h-5 text-white" />
              </div>
              <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-primary dark:text-accent">{item.position}</h3>
                <p className="font-semibold text-light-text dark:text-dark-text">{item.company} &bull; {item.location}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.duration}</p>
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-light-text dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
