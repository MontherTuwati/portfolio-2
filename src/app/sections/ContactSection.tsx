'use client';
import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const encodedBody = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:monthertuwati@gmail.com?subject=New Contact Form Submission&body=${encodedBody}`;

    window.location.href = mailtoLink;
  };

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/cv/Monther_CV.pdf';
    link.download = 'Monther_Tuwati_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-20 mb-20">
      {/* Section Title */}
      <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold leading-none mb-8 md:mb-16">
        <span className="text-white">LET&apos;S WORK</span>
        <br />
        <span className="text-gray-600">TOGETHER</span>
      </h1>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Contact Form */}
        <div className="flex-1 lg:flex-[2]">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-3">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-3">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your@email.com"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-white text-sm font-medium mb-3">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={8}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 bg-orange-500 text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column - Contact Info Card */}
        <div className="flex-1 lg:flex-[1] lg:max-w-sm">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 h-fit">
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-envelope text-white text-sm"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Email</p>
                  <p className="text-white font-medium text-sm">monthertuwati@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white text-sm"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Location</p>
                  <p className="text-white font-medium text-sm">Ottawa, ON, Canada</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-clock text-white text-sm"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Response Time</p>
                  <p className="text-white font-medium text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <button
              onClick={handleDownloadResume}
              className="w-full px-4 py-4 bg-transparent border-2 border-orange-500 text-orange-500 font-bold text-base rounded-lg hover:bg-orange-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center space-x-2"
            >
              <i className="fas fa-download text-sm"></i>
              <span>Download Resume</span>
            </button>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-xs mb-3">Follow me</p>
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/monthertuwati" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <i className="fab fa-github text-white text-sm"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/monthertuwati/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <i className="fab fa-linkedin text-white text-sm"></i>
                </a>
                <a 
                  href="mailto:monthertuwati@gmail.com" 
                  className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <i className="fas fa-envelope text-white text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
