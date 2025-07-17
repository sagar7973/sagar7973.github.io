import React, { useState } from 'react';
import { SPORTS_ACTIVITIES } from '../constants';
import type { SportActivity } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const SportCard: React.FC<{ activity: SportActivity }> = ({ activity }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? activity.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === activity.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="relative h-56">
        <img 
          src={activity.images[currentIndex]} 
          alt={`${activity.name} ${currentIndex + 1}`} 
          className="w-full h-full object-cover transition-opacity duration-300" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

        {activity.images.length > 1 && (
          <>
            <button 
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity z-10"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button 
              onClick={goToNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity z-10"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
              {activity.images.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'}`}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-primary dark:text-accent">{activity.name}</h3>
        <p className="text-light-text dark:text-gray-300">{activity.description}</p>
      </div>
    </div>
  );
};

const Sports: React.FC = () => {
  return (
    <section id="sports" className="py-20 lg:py-32 bg-light-bg dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Beyond The Keyboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPORTS_ACTIVITIES.map((activity, index) => (
            <SportCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sports;