
import React from 'react';
import { Page } from '../types';
import { CyberLeagueLogo, TwitterIcon, DiscordIcon } from './icons';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0A0918] py-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
             <CyberLeagueLogo className="h-12 w-12 text-white" />
          </div>
        </div>
        <p className="text-gray-300 mb-4 text-lg">Nos Contate</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon className="h-7 w-7" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><DiscordIcon className="h-7 w-7" /></a>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Cyber League. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
