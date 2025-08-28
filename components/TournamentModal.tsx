import React from 'react';
import { Tournament } from '../types';
import { StarIcon } from './icons';

interface TournamentModalProps {
  tournament: Tournament;
  onClose: () => void;
}

const StarRating: React.FC<{ rating: number, className?: string }> = ({ rating, className }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<StarIcon key={i} variant="filled" className={className} />);
        } else if (i - 0.5 <= rating) {
            stars.push(<StarIcon key={i} variant="half" className={className} />);
        } else {
            stars.push(<StarIcon key={i} variant="empty" className={className} />);
        }
    }
    return <div className="flex">{stars}</div>;
};

const TournamentModal: React.FC<TournamentModalProps> = ({ tournament, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tournament-modal-title"
    >
      <div 
        className="bg-[#0A0918] border border-purple-800/50 rounded-lg shadow-2xl w-full max-w-2xl transform animate-slide-up max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48">
            <img src={tournament.imageUrl} alt={tournament.name} className="w-full h-full object-cover rounded-t-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <h2 id="tournament-modal-title" className="absolute bottom-4 left-4 text-3xl font-bold uppercase tracking-wider text-white">{tournament.name}</h2>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="flex items-center mb-6">
              <StarRating rating={tournament.averageRating} className="w-7 h-7 text-yellow-400" />
              <span className="ml-3 text-2xl font-bold text-gray-200">{tournament.averageRating.toFixed(1)}</span>
              <span className="ml-2 text-sm text-gray-400">({tournament.reviews.length} avaliações)</span>
          </div>
          
          <div className="w-full">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 border-b-2 border-purple-400/30 pb-2">Avaliações</h3>
            <div className="space-y-4 max-h-64 pr-2 overflow-y-auto">
              {tournament.reviews.length > 0 ? tournament.reviews.map((review, index) => (
                <div key={index} className="bg-gray-900/60 p-4 rounded-md">
                  <div className="flex items-center mb-2">
                     <StarRating rating={review.stars} className="w-4 h-4 text-yellow-500"/>
                     <span className="ml-3 font-bold text-gray-300">{review.user}</span>
                  </div>
                  <p className="text-gray-400 italic">"{review.comment}"</p>
                </div>
              )) : (
                <div className="text-gray-500 text-center p-4">Nenhuma avaliação para este torneio.</div>
              )}
            </div>
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

export default TournamentModal;
