
import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { AcademicCapIcon, SparklesIcon, CheckBadgeIcon } from './Icons';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Education & Certifications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Education</h3>
            <div className="space-y-8">
              {EDUCATION.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-full flex items-center justify-center">
                    <AcademicCapIcon className="w-7 h-7 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{item.degree}</h4>
                    <p className="font-semibold text-light-text dark:text-dark-text">{item.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.duration} &bull; {item.location}</p>
                    <ul className="space-y-1 mt-2">
                      {item.points.map((point, i) => (
                         <li key={i} className="flex items-start text-sm">
                            <SparklesIcon className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Certifications</h3>
             <div className="space-y-4">
                {CERTIFICATIONS.map((cert, index) => (
                   <div key={index} className="bg-light-card/50 dark:bg-dark-card/50 p-4 rounded-lg flex items-center space-x-4 shadow-sm">
                     <CheckBadgeIcon className="w-8 h-8 text-green-500 flex-shrink-0" />
                     <div>
                       <p className="font-semibold text-light-text dark:text-dark-text">{cert.name}</p>
                       <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                     </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
