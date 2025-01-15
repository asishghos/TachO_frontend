import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Industries',
      links: ['Banking', 'Healthcare', 'Manufacturing', 'Retail', 'Technology', 'Insurance']
    },
    {
      title: 'Services',
      links: ['Cloud Solutions', 'AI & Analytics', 'Consulting', 'Digital Transformation', 'Cybersecurity']
    },
    {
      title: 'Products & Platforms',
      links: ['Enterprise Suite', 'Cloud Platform', 'Analytics Tools', 'Security Solutions']
    },
    {
      title: 'Insights',
      links: ['Research', 'Case Studies', 'Blog', 'Events', 'Newsroom']
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-400 hover:text-blue-400">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-white mb-4">Follow us for the latest updates</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <Link to="/careers" className="inline-block">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">Join our team.</h3>
                  <p className="text-gray-400 mb-4">Realize your potential.</p>
                  <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
                    Explore Careers
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © 2024 TechNova. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="#" className="hover:text-blue-400">Privacy Notice</Link>
              <Link to="#" className="hover:text-blue-400">Cookie Policy</Link>
              <Link to="#" className="hover:text-blue-400">Terms of Use</Link>
              <Link to="#" className="hover:text-blue-400">Security Policy</Link>
              <Link to="#" className="hover:text-blue-400">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };