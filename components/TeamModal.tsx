import React from 'react';
import { Player, Team } from '../types';

interface TeamModalProps {
  team: Team;
  onClose: () => void;
  onSelectPlayer: (player: Player) => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ team, onClose, onSelectPlayer }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-modal-title"
    >
      <div 
        className="bg-[#0A0918] border border-purple-800/50 rounded-lg shadow-2xl w-full max-w-md p-8 text-white transform animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-4 bg-gray-900/50 rounded-full flex items-center justify-center p-2 border-2 border-gray-700">
            <img src={team.logoUrl} alt={`${team.name} logo`} className="max-w-full max-h-full object-contain" />
          </div>
          <h2 id="team-modal-title" className="text-3xl font-bold uppercase tracking-wider mb-6">{team.name}</h2>
          
          <div className="w-full">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 border-b-2 border-purple-400/30 pb-2">Jogadores</h3>
            <ul className="space-y-3 text-left">
              {team.players.length > 0 ? team.players.map(player => (
                <li key={player.id}>
                  <button 
                    onClick={() => onSelectPlayer(player)}
                    className="w-full bg-gray-900/60 p-3 rounded-md flex items-center text-left hover:bg-purple-900/50 transition-colors duration-200"
                    aria-label={`Ver estatísticas de ${player.nickname}`}
                  >
                    <span className="text-lg font-bold text-gray-300 w-2/5">{player.nickname}</span>
                    <span className="text-gray-400">{player.name}</span>
                  </button>
                </li>
              )) : (
                <li className="text-gray-500 text-center p-3">Nenhum jogador listado.</li>
              )}
            </ul>
          </div>

          <button 
            onClick={onClose}
            className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-md uppercase text-sm tracking-wider transition-colors duration-300"
            aria-label="Fechar modal">
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

export default TeamModal;