import React from 'react';
import { Page, Team } from '../types';
import { CyberLeagueLogo } from './icons';
import { games, recentMatches } from '../data/db';
import brandImage from '../images/imagem_fundo.jpg';


interface HomePageProps {
  onGameSelect: (page: Page) => void;
}

const MatchCard: React.FC<{ match: typeof recentMatches[0] }> = ({ match }) => {
  const winner = match.winnerId === match.team1.id ? match.team1 : match.team2;
  return (
    <div className="order-1 bg-gray-900 bg-opacity-50 rounded-lg shadow-xl w-5/12 px-6 py-4 backdrop-blur-sm border border-purple-600/30">
      <p className="text-sm text-purple-400 mb-1">{new Date(match.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <h3 className="mb-2 font-bold text-white text-lg">{match.name}</h3>
      <p className="text-sm text-gray-400 mb-4">{match.tournamentName}</p>
      <div className="flex items-center justify-between">
        <div className={`flex flex-col items-center ${match.winnerId === match.team1.id ? 'opacity-100' : 'opacity-50'}`}>
          <img src={match.team1.logoUrl} alt={match.team1.name} className="h-12 w-12 object-contain mb-1" />
          <span className="text-xs font-semibold">{match.team1.name}</span>
        </div>
        <span className="text-gray-500 font-bold text-xl">VS</span>
        <div className={`flex flex-col items-center ${match.winnerId === match.team2.id ? 'opacity-100' : 'opacity-50'}`}>
          <img src={match.team2.logoUrl} alt={match.team2.name} className="h-12 w-12 object-contain mb-1" />
          <span className="text-xs font-semibold">{match.team2.name}</span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-700/50 text-center">
        <p className="text-sm text-gray-300">Vencedor: <span className="font-bold text-green-400">{winner.name}</span></p>
      </div>
    </div>
  );
};

const HomePage: React.FC<HomePageProps> = ({ onGameSelect }) => {
  return (
    <div className="bg-[#010010]">
      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(1, 0, 16, 0.7), rgba(1, 0, 16, 1)), url(${brandImage})` }}>
        <div className="text-center">
          <CyberLeagueLogo className="h-24 w-24 md:h-32 md:w-32 mx-auto mb-6" />
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-wider uppercase" style={{ textShadow: '0 0 15px rgba(138, 43, 226, 0.7)' }}>
            Cyber League
          </h1>
          <div className="mt-8 space-x-4">
            <button className="bg-white text-black font-bold py-3 px-8 rounded-sm uppercase tracking-widest hover:bg-gray-300 transition-all duration-300">
              Sobre
            </button>
            <button 
              onClick={() => document.getElementById('jogos')?.scrollIntoView({ behavior: 'smooth' })} 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              Jogos
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#010010]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <CyberLeagueLogo className="h-16 w-16 text-white"/>
          </div>
          <h2 className="text-4xl font-bold uppercase mb-4 tracking-wider">Sobre</h2>
          <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
            Cyber League é a principal plataforma para entusiastas de e-sports, oferecendo uma experiência imersiva no mundo dos jogos competitivos. Acompanhe seus times e jogadores favoritos, participe de torneios exclusivos e conecte-se com uma comunidade global de fãs. Nossa missão é elevar o e-sport a um novo patamar de profissionalismo e entretenimento.
          </p>
        </div>
      </section>

      {/* Recent Matches Section */}
      <section 
        className="py-24 bg-cover bg-fixed"
        style={{ backgroundImage: `linear-gradient(rgba(1, 0, 16, 0.85), rgba(1, 0, 16, 0.85)), url(https://picsum.photos/1920/1080?grayscale&blur=1)`}}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center uppercase mb-16 tracking-wider">Partidas Recentes</h2>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-purple-700 h-full border" style={{ left: '50%' }}></div>
            {recentMatches.map((match, index) => (
              <div key={match.id} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-purple-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white"></h1>
                </div>
                <MatchCard match={match} />
              </div>
            ))}
            <div className="mx-auto w-full flex justify-center mt-8">
              <div className="z-20 flex items-center order-1 bg-purple-800 shadow-xl w-16 h-16 rounded-full animate-pulse">
                <CyberLeagueLogo className="mx-auto w-8 h-8"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="jogos" className="py-24 bg-[#0A0918]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold uppercase mb-12 tracking-wider">Jogos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game) => (
              <div key={game.id} className="group relative overflow-hidden rounded-lg cursor-pointer" onClick={() => onGameSelect(game.id)}>
                <img src={game.logoUrl} alt={game.name} className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{game.name}</h3>
                  <p className="text-gray-300">{game.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;