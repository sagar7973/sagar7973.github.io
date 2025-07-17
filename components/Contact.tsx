
import React, { useState } from 'react';
import { PROFILE } from '../constants';
import { MailIcon, LinkedInIcon, GithubIcon } from './Icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is a mock submission handler. 
    // In a real app, you would integrate with an email service (e.g., EmailJS, Formspree).
    setStatus('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-light-bg dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-2xl">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-light-text dark:text-gray-300 mb-6">
              Feel free to reach out via email or connect with me on social platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center space-x-3 group">
                <MailIcon className="w-6 h-6 text-primary dark:text-accent" />
                <span className="text-light-text dark:text-dark-text group-hover:underline">{PROFILE.email}</span>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <LinkedInIcon className="w-6 h-6 text-primary dark:text-accent" />
                <span className="text-light-text dark:text-dark-text group-hover:underline">LinkedIn Profile</span>
              </a>
               <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <GithubIcon className="w-6 h-6 text-primary dark:text-accent" />
                <span className="text-light-text dark:text-dark-text group-hover:underline">GitHub Profile</span>
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-light-text dark:text-gray-300 mb-1">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 bg-light-bg dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:focus:ring-accent dark:focus:border-accent"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-light-text dark:text-gray-300 mb-1">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 bg-light-bg dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:focus:ring-accent dark:focus:border-accent"/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 bg-light-bg dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:focus:ring-accent dark:focus:border-accent"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 shadow-lg">
              Send Message
            </button>
            {status && <p className="mt-4 text-center text-green-600 dark:text-green-400">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
