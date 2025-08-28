import React, { useState } from 'react';
import { Page } from '../types';
import { CyberLeagueLogo, TwitterIcon, DiscordIcon, TelegramIcon, CloseIcon } from './icons';
import { games } from '../data/db';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isGamesSubMenuOpen, setGamesSubMenuOpen] = useState(false);
  const [isTournamentsSubMenuOpen, setTournamentsSubMenuOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
    setGamesSubMenuOpen(false);
    setTournamentsSubMenuOpen(false);
  };

  const getLinkClass = (page: Page) => 
    `cursor-pointer hover:text-white transition-colors duration-300 ${currentPage === page ? 'text-white font-semibold' : 'text-gray-400'}`;

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Menu Trigger */}
          <button 
            className="flex items-center space-x-2 cursor-pointer group focus:outline-none" 
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <CyberLeagueLogo className="h-8 w-8 text-white group-hover:text-purple-400 transition-colors" />
            <span className="text-xl font-bold tracking-wider text-white group-hover:text-purple-400 transition-colors">CYBER LEAGUE</span>
          </button>
          
          {/* Social Icons always visible */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><DiscordIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><TelegramIcon /></a>
          </div>
        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#010010] bg-opacity-95 z-[100] p-8 flex flex-col animate-fade-in" role="dialog" aria-modal="true">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <CyberLeagueLogo className="h-8 w-8 text-white" />
              <span className="text-xl font-bold tracking-wider text-white">CYBER LEAGUE</span>
            </div>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <CloseIcon className="h-8 w-8 text-gray-400 hover:text-white"/>
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-grow space-y-8 text-center">
            <a onClick={() => handleNavigate('home')} className={`text-3xl uppercase tracking-widest ${getLinkClass('home')}`}>Home</a>
            
            <div>
              <a onClick={() => setGamesSubMenuOpen(!isGamesSubMenuOpen)} className={`text-3xl uppercase tracking-widest cursor-pointer hover:text-white transition-colors duration-300 flex items-center ${['valorant', 'league', 'tft'].includes(currentPage) ? 'text-white font-semibold' : 'text-gray-400'}`}>
                Jogos
                <svg className={`w-6 h-6 ml-2 transition-transform ${isGamesSubMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </a>
              {isGamesSubMenuOpen && (
                <div className="mt-4 space-y-4">
                  {games.map(game => (
                    <a key={game.id} onClick={() => handleNavigate(game.id)} className="block text-xl text-gray-400 hover:text-white cursor-pointer">{game.name}</a>
                  ))}
                </div>
              )}
            </div>

             <div>
              <a onClick={() => setTournamentsSubMenuOpen(!isTournamentsSubMenuOpen)} className="text-3xl uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 flex items-center cursor-pointer">
                Torneios
                <svg className={`w-6 h-6 ml-2 transition-transform ${isTournamentsSubMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </a>
              {isTournamentsSubMenuOpen && (
                <div className="mt-4 space-y-4">
                  <a onClick={() => handleNavigate('valorant')} className="block text-xl text-gray-400 hover:text-white cursor-pointer">Champions</a>
                  <a onClick={() => handleNavigate('league')} className="block text-xl text-gray-400 hover:text-white cursor-pointer">Worlds</a>
                  <a onClick={() => handleNavigate('valorant')} className="block text-xl text-gray-400 hover:text-white cursor-pointer">Masters</a>
                </div>
              )}
            </div>

            <a onClick={() => handleNavigate('queries')} className={`text-3xl uppercase tracking-widest ${getLinkClass('queries')}`}>Consultas</a>
          </nav>
        </div>
      )}
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </>
  );
};

export default Header;