'use client';

import React from 'react';
import Link from 'next/link';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/monthertuwati', icon: 'fab fa-github' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/monthertuwati/', icon: 'fab fa-linkedin' },
      { name: 'Email', href: 'mailto:monthertuwati@gmail.com', icon: 'fas fa-envelope' }
    ]
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo/mt-logo.svg" 
                  alt="Monther Tuwati Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Monther Tuwati</h3>
                <p className="text-gray-400 text-sm">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Passionate about creating intuitive and engaging user experiences. 
              Specialize in transforming ideas into beautifully crafted products.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Connect</h4>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                >
                  <i className={`${social.icon} text-gray-400 group-hover:text-white text-lg`}></i>
                </a>
              ))}
            </div>
            <div className="pt-4">
              <a
                href="mailto:monthertuwati@gmail.com"
                className="text-orange-500 hover:text-orange-400 transition-colors duration-200 text-sm font-medium"
              >
                monthertuwati@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-orange-400 text-sm">
              © {currentYear} Monther Tuwati. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
