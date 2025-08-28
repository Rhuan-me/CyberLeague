import React from 'react';
import { Player, Team } from '../types';

interface PlayerModalProps {
  player: Player;
  team: Team;
  onClose: () => void;
}

const PlayerModal: React.FC<PlayerModalProps> = ({ player, team, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-[60] flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="player-modal-title"
    >
      <div 
        className="bg-[#0A0918] border border-purple-800/50 rounded-lg shadow-2xl w-full max-w-2xl transform animate-slide-up max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 flex items-center space-x-6 bg-gray-900/50 rounded-t-lg">
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center p-2 border-2 border-gray-700 flex-shrink-0">
                <img src={team.logoUrl} alt={`${team.name} logo`} className="max-w-full max-h-full object-contain" />
            </div>
            <div>
                <h2 id="player-modal-title" className="text-3xl font-bold text-white">{player.nickname}</h2>
                <p className="text-gray-400 text-lg">{player.name}</p>
            </div>
        </div>
        
        <div className="p-8 pt-6 overflow-y-auto">
          <h3 className="text-xl font-semibold text-purple-400 mb-4 border-b-2 border-purple-400/30 pb-2">Estatísticas por Torneio</h3>
          <div className="space-y-4 pr-2">
              {player.stats && player.stats.length > 0 ? (
                player.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-900/70 p-4 rounded-lg">
                        <p className="font-bold text-lg text-gray-200">{stat.tournamentName} <span className="text-gray-500 font-normal text-sm">{stat.year}</span></p>
                        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                            <div className="bg-gray-800/50 p-2 rounded-md">
                                <p className="text-xs text-gray-400 uppercase">Vitórias</p>
                                <p className="text-xl font-bold text-green-400">{stat.wins}</p>
                            </div>
                            <div className="bg-gray-800/50 p-2 rounded-md">
                                <p className="text-xs text-gray-400 uppercase">Derrotas</p>
                                <p className="text-xl font-bold text-red-400">{stat.losses}</p>
                            </div>
                            <div className="bg-gray-800/50 p-2 rounded-md">
                                <p className="text-xs text-gray-400 uppercase">Abates</p>
                                <p className="text-xl font-bold text-gray-300">{stat.kills}</p>
                            </div>
                             <div className="bg-gray-800/50 p-2 rounded-md">
                                <p className="text-xs text-gray-400 uppercase">Assistências</p>
                                <p className="text-xl font-bold text-gray-300">{stat.assists}</p>
                            </div>
                        </div>
                    </div>
                ))
              ) : (
                <div className="text-gray-500 text-center p-4">Nenhuma estatística disponível para este jogador.</div>
              )}
          </div>
        </div>

        <div className="p-6 pt-0 mt-auto">
          <button 
            onClick={onClose}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-md uppercase text-sm tracking-wider transition-colors duration-300"
            aria-label="Fechar modal"
          >
            Fechar
          </button>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default PlayerModal;
