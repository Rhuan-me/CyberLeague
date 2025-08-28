import React, { useState } from 'react';
import { GameData, Page, Team, Game, Tournament, Player } from '../types';
import FaqItemComponent from './FaqItem';
import TeamModal from './TeamModal';
import TournamentModal from './TournamentModal';
import PlayerModal from './PlayerModal';

interface GamePageProps {
  gameData: GameData;
  allGames: Game[];
  onGameSelect: (page: Page) => void;
}

const GamePage: React.FC<GamePageProps> = ({ gameData, allGames, onGameSelect }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<{player: Player, team: Team} | null>(null);


  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleSelectPlayer = (player: Player, team: Team) => {
    setSelectedTeam(null); // Close team modal
    setSelectedPlayer({ player, team });
  };
  
  return (
    <div className="bg-[#010010] text-white">
      {/* Hero Section */}
      <section
        className="min-h-[70vh] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `linear-gradient(rgba(1, 0, 16, 0.7), rgba(1, 0, 16, 1)), url(${gameData.bgUrl})` }}
      >
        <div className="text-center pt-24">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wider mb-8">Jogos Disponíveis</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {allGames.map(game => {
              const isActive = game.id === gameData.id;
              return (
                <button 
                    key={game.id}
                    onClick={() => onGameSelect(game.id)}
                    className={
                      `font-bold py-3 px-10 rounded-sm uppercase tracking-widest transition-all duration-300 ` +
                      (isActive 
                        ? 'bg-white text-black' 
                        : 'border-2 border-white/50 text-white/80 hover:bg-white hover:text-black hover:border-white')
                    }>
                    {game.name}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      {gameData.teams.length > 0 && (
        <section className="py-20 bg-[#0A0918]">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold uppercase mb-12 tracking-wider">Equipes</h2>
                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...gameData.teams, ...gameData.teams].map((team, index) => (
                            <button 
                                key={`${team.id}-${index}`} 
                                className="flex-shrink-0 mx-4 w-40 h-28 flex items-center justify-center border border-gray-700/50 p-4 rounded-lg bg-gray-900/40 hover:bg-purple-900/50 hover:border-purple-600 transition-colors duration-300"
                                onClick={() => setSelectedTeam(team)}
                                aria-label={`Ver detalhes da equipe ${team.name}`}
                            >
                                <img src={team.logoUrl} alt={team.name} className="max-w-full max-h-full object-contain" />
                            </button>
                        ))}
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0A0918] to-transparent"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0A0918] to-transparent"></div>
                </div>
            </div>
            <style>{`
            @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 45s linear infinite;
            }
            `}</style>
        </section>
      )}

      {/* Tournaments Section */}
      <section className="py-20 bg-[#010010]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold uppercase mb-12 tracking-wider">Torneios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {gameData.tournaments.map((tournament) => (
              <button 
                key={tournament.id} 
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-900 border border-purple-800/30 text-left"
                onClick={() => setSelectedTournament(tournament)}
                aria-label={`Ver avaliações do torneio ${tournament.name}`}
              >
                <img src={tournament.imageUrl} alt={tournament.name} className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">{tournament.name}</h3>
                  <p className="text-gray-400">{tournament.year}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0A0918]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center uppercase mb-12 tracking-wider">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {gameData.faqs.map((faq) => (
              <FaqItemComponent
                key={faq.id}
                faq={faq}
                isOpen={activeFaq === faq.id}
                onToggle={() => toggleFaq(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedTeam && (
        <TeamModal 
          team={selectedTeam} 
          onClose={() => setSelectedTeam(null)}
          onSelectPlayer={(player) => handleSelectPlayer(player, selectedTeam)}
        />
      )}
      {selectedTournament && (
        <TournamentModal tournament={selectedTournament} onClose={() => setSelectedTournament(null)} />
      )}
      {selectedPlayer && (
        <PlayerModal 
            player={selectedPlayer.player}
            team={selectedPlayer.team}
            onClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
};

export default GamePage;