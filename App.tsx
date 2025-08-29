import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import QueriesPage from './components/QueriesPage';
import { valorantData, leagueOfLegendsData, tftData, lorData, games } from './data/db';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'valorant':
        return <GamePage gameData={valorantData} allGames={games} onGameSelect={setCurrentPage} />;
      case 'league':
        return <GamePage gameData={leagueOfLegendsData} allGames={games} onGameSelect={setCurrentPage} />;
      case 'tft':
        return <GamePage gameData={tftData} allGames={games} onGameSelect={setCurrentPage} />;
      case 'lor':
        return <GamePage gameData={lorData} allGames={games} onGameSelect={setCurrentPage} />;
      case 'queries':
        return <QueriesPage />;
      case 'home':
      default:
        return <HomePage onGameSelect={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-[#010010] min-h-screen text-gray-200 overflow-x-hidden">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;