import React from 'react';
import { Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-pink-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Alicia Manyeka
              </span>
            </div>
            <span className="text-gray-600">|</span>
            <p className="text-gray-600">© 2024 Alicia Dev. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <span className="text-gray-500 font-medium">Resources</span>
            <span className="text-gray-500 font-medium">Legal</span>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-pink-600 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-pink-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-pink-600 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Made with Bolt */}
        <div className="mt-8 pt-8 border-t border-pink-100 text-center">
          <p className="text-gray-500 text-sm">
            Made with <span className="text-pink-500">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;