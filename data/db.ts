import { Game, GameData, Player, Team, Match, Review, Tournament, PlayerTournamentStats } from '../types';

// Player Tournament Stats from PDF
const allPlayerStats: (Omit<PlayerTournamentStats, 'tournamentName' | 'year'> & { playerId: number })[] = [
    // Worlds 2023 (torneio_id = 1)
    { playerId: 5, tournamentId: 1, wins: 15, losses: 4, kills: 120, assists: 250 },
    { playerId: 6, tournamentId: 1, wins: 16, losses: 2, kills: 135, assists: 210 },
    { playerId: 9, tournamentId: 1, wins: 12, losses: 5, kills: 110, assists: 190 },
    { playerId: 4, tournamentId: 1, wins: 10, losses: 6, kills: 95, assists: 150 },
    { playerId: 3, tournamentId: 1, wins: 10, losses: 5, kills: 90, assists: 180 }, // Jensen (LoL)
    { playerId: 2, tournamentId: 1, wins: 3, losses: 4, kills: 45, assists: 80 }, // Karioka (LoL)
    { playerId: 1, tournamentId: 1, wins: 2, losses: 4, kills: 55, assists: 70 }, // brTT (LoL)

    // Valorant Champions 2023 (torneio_id = 2)
    { playerId: 1, tournamentId: 2, wins: 10, losses: 1, kills: 200, assists: 80 }, // brTT (Valorant)
    { playerId: 3, tournamentId: 2, wins: 8, losses: 3, kills: 180, assists: 75 }, // Jensen (Valorant)
    { playerId: 4, tournamentId: 2, wins: 7, losses: 3, kills: 150, assists: 60 }, // Caps (Valorant)
    { playerId: 2, tournamentId: 2, wins: 6, losses: 4, kills: 130, assists: 55 }, // Karioka (Valorant)
    { playerId: 3, tournamentId: 2, wins: 11, losses: 4, kills: 195, assists: 95 }, // Jensen (Valorant additional)

    // MSI 2022 (torneio_id = 3)
    { playerId: 5, tournamentId: 3, wins: 14, losses: 2, kills: 105, assists: 220 },
    { playerId: 8, tournamentId: 3, wins: 9, losses: 5, kills: 88, assists: 140 },
    { playerId: 10, tournamentId: 3, wins: 13, losses: 3, kills: 115, assists: 195 },
    { playerId: 7, tournamentId: 3, wins: 8, losses: 5, kills: 75, assists: 110 }, // Fudge (MSI)

    // VCT Masters Tokyo 2023 (torneio_id = 4)
    { playerId: 7, tournamentId: 4, wins: 9, losses: 4, kills: 190, assists: 85 }, // Fudge (VCT)
    { playerId: 1, tournamentId: 4, wins: 8, losses: 4, kills: 185, assists: 70 }, // brTT (VCT)
    { playerId: 11, tournamentId: 4, wins: 7, losses: 4, kills: 160, assists: 65 }, // Saken (VCT)
    { playerId: 2, tournamentId: 4, wins: 5, losses: 4, kills: 140, assists: 45 }, // Karioka (VCT)

    // TFT Worlds 2024 (torneio_id = 5)
    { playerId: 8, tournamentId: 7, wins: 12, losses: 6, kills: 0, assists: 0 }, // Humanoid (TFT)
    { playerId: 11, tournamentId: 7, wins: 11, losses: 7, kills: 0, assists: 0 }, // Saken (TFT)
    { playerId: 12, tournamentId: 7, wins: 10, losses: 8, kills: 0, assists: 0 }, // electroNic (TFT)
    { playerId: 4, tournamentId: 7, wins: 9, losses: 8, kills: 0, assists: 0 }, // Caps (TFT)
];


// Source of truth for players from PDF
// Source of truth for players from PDF, now with more complete rosters
export const allPlayers: (Omit<Player, 'stats'> & { teamId: number })[] = [
  // LOUD (5 players) - teamId 2
  { id: 1, name: 'Felipe Gonçalves', nickname: 'brTT', teamId: 2 },
  { id: 13, name: 'Erick Santos', nickname: 'aspas', teamId: 2 },
  { id: 14, name: 'Matias Delipetro', nickname: 'Saadhak', teamId: 2 },
  { id: 15, name: 'Cauan Pereira', nickname: 'cauanzin', teamId: 2 },
  { id: 16, name: 'Felipe Basso', nickname: 'Less', teamId: 2 },

  // FURIA (3 players) - teamId 3
  { id: 2, name: 'Matheus Lima', nickname: 'Karioka', teamId: 3 },
  { id: 17, name: 'Gabriel Akemi', nickname: 'qck', teamId: 3 },
  { id: 18, name: 'Agustin Ibarra', nickname: 'nzr', teamId: 3 },
  
  // Team Liquid (5 players) - teamId 4
  { id: 3, name: 'Nicolaj Jensen', nickname: 'Jensen', teamId: 4 },
  { id: 19, name: 'Elias Lipp', nickname: 'Jamppi', teamId: 4 },
  { id: 20, name: 'Dom Sulcas', nickname: 'soulcas', teamId: 4 },
  { id: 21, name: 'Adil Benrlitom', nickname: 'ScreaM', teamId: 4 },
  { id: 22, name: 'Nabil Khermez', nickname: 'Nivera', teamId: 4 },
  
  // G2 Esports (5 players) - teamId 5
  { id: 4, name: 'Rasmus Winther', nickname: 'Caps', teamId: 5 },
  { id: 23, name: 'Sergen Çelik', nickname: 'BrokenBlade', teamId: 5 },
  { id: 24, name: 'Marcin Jankowski', nickname: 'Jankos', teamId: 5 },
  { id: 25, name: 'Victor Chou', nickname: 'Flakked', teamId: 5 },
  { id: 26, name: 'Raphaël Crabbé', nickname: 'Targamas', teamId: 5 },
  
  // T1 (5 players) - teamId 6
  { id: 5, name: 'Lee Sang-hyeok', nickname: 'Faker', teamId: 6 },
  { id: 27, name: 'Choi Woo-je', nickname: 'Zeus', teamId: 6 },
  { id: 28, name: 'Moon Hyeon-jun', nickname: 'Oner', teamId: 6 },
  { id: 29, name: 'Lee Min-hyeong', nickname: 'Gumayusi', teamId: 6 },
  { id: 30, name: 'Ryu Min-seok', nickname: 'Keria', teamId: 6 },
  
  // Other players from original list (now part of smaller teams)
  { id: 6, name: 'Zhao LiJie', nickname: 'Scout', teamId: 7 }, // EDG (1 player)
  { id: 7, name: 'Ibrahim Allami', nickname: 'Fudge', teamId: 8 }, // C9 (1 player)
  { id: 8, name: 'Marek Brázda', nickname: 'Humanoid', teamId: 9 }, // Fnatic (1 player)
  { id: 9, name: 'Kim Geon-woo', nickname: 'Deft', teamId: 10 }, // DRX (1 player)
  { id: 10, name: 'Li Yuan-Hao', nickname: 'Xiaohu', teamId: 11 }, // RNG (1 player)
  { id: 11, name: 'Lucas Fayard', nickname: 'Saken', teamId: 12 }, // Karmine Corp (1 player)
  { id: 12, name: 'Denys Kostin', nickname: 'electroNic', teamId: 13 }, // NaVi (1 player)
];

const allTournamentsBase: (Omit<Tournament, 'reviews' | 'averageRating' | 'sponsorships' | 'placements' | 'prizePool'> & { prizePool?: number })[] = [
    // LoL
    { id: 1, name: 'Worlds', year: 2023, prizePool: 2225000, imageUrl: '/images/Worlds2023.png', gameId: 'league', startDate: '2023-10-01' },
    { id: 3, name: 'MSI', year: 2022, prizePool: 250000, imageUrl: '/images/Msi2023.png', gameId: 'league', startDate: '2022-05-10' },
    // Valorant
    { id: 2, name: 'Champions', year: 2023, prizePool: 2250000, imageUrl: '/images/ChampionsValorant2023.jpg', gameId: 'valorant', startDate: '2023-08-06' },
    { id: 4, name: 'Masters Tokyo', year: 2023, prizePool: 1000000, imageUrl: '/images/VCT_Masters_Tokyo_allmode.png', gameId: 'valorant', startDate: '2023-06-11' },
    { id: 5, name: 'VCT', year: 2024, prizePool: 500000, imageUrl: '/images/vctlogo.png', gameId: 'valorant', startDate: '2024-07-15' },
    { id: 6, name: 'Game Changers', year: 2024, prizePool: 500000, imageUrl: '/images/gamechangers.jpg', gameId: 'valorant', startDate: '2024-08-10' },
    // TFT
    { id: 7, name: 'TFT Worlds', year: 2024, prizePool: 456000, imageUrl: '/images/tftworlds.jpg', gameId: 'tft', startDate: '2024-09-20' },
    // LOR
    { id: 8, name: 'LoR Worlds', year: 2024, prizePool: 200000, imageUrl: '/images/lor-worlds.jpg', gameId: 'lor', startDate: '2024-10-01' },
];

const getPlayersForTeam = (teamId: number): Player[] => {
  return allPlayers
    .filter(p => p.teamId === teamId)
    .map(({ teamId, ...playerData }) => {
        const stats: PlayerTournamentStats[] = allPlayerStats
            .filter(s => s.playerId === playerData.id)
            .map(s => {
                const tournamentInfo = allTournamentsBase.find(t => t.id === s.tournamentId);
                return {
                    ...s,
                    tournamentName: tournamentInfo?.name || 'Unknown Tournament',
                    year: tournamentInfo?.year || 0,
                }
            });
        return {
            ...playerData,
            stats,
        };
    });
};

// Source of truth for all teams from PDF
export const allTeams: Omit<Team, 'players'>[] = [
    { id: 2, name: 'LOUD', logoUrl: '/images/Loud.png' },
    { id: 3, name: 'FURIA', logoUrl: '/images/Furia.png' },
    { id: 4, name: 'Team Liquid', logoUrl: '/images/Liquid.png' },
    { id: 5, name: 'G2 Esports', logoUrl: '/images/G2.png' },
    { id: 6, name: 'T1', logoUrl: '/images/T1.png' },
    { id: 7, name: 'Edward Gaming', logoUrl: '/images/EDG.png' },
    { id: 8, name: 'Cloud9', logoUrl: '/images/Cloud9_full_lightmode.png' },
    { id: 9, name: 'Fnatic', logoUrl: '/images/Esports_organization_Fnatic_logo.svg.png' },
    { id: 10, name: 'DRX', logoUrl: '/images/DRX_logo_2023.png' },
    { id: 11, name: 'Royal Never Give Up', logoUrl: '/images/RNG_logo.svg.png' },
    { id: 12, name: 'Karmine Corp', logoUrl: '/images/Karmine_Corp_allmode.png' },
    { id: 13, name: 'Natus Vincere', logoUrl: '/images/Natus_Vincere_logo.png' },
    { id: 14, name: 'Sentinels', logoUrl: '/images/sentinels.jpg' },
];

export const buildTeam = (id: number): Team => {
    const teamData = allTeams.find(t => t.id === id);
    if (!teamData) throw new Error(`Team with id ${id} not found.`);
    return {
        ...teamData,
        players: getPlayersForTeam(id)
    }
}

const tournamentReviews: { [key: number]: Review[] } = {
    1: [
        { user: 'fan_do_faker', stars: 5, comment: 'A final foi incrível, muita emoção! Melhor Worlds de todos os tempos.' },
        { user: 'cblol_lover', stars: 4, comment: 'Ótima produção, mas queria ver mais times do Brasil indo longe.' },
        { user: 'lol_enthusiast', stars: 5, comment: 'Que torneio épico! As partidas foram todas de alto nível.' },
        { user: 'esports_fan', stars: 4, comment: 'Adorei a organização, mas o horário das finais poderia ser melhor.' },
    ],
    2: [
        { user: 'valorant_pro', stars: 5, comment: 'Que campeonato! As jogadas foram de outro nível e a torcida deu um show.' },
        { user: 'loud_supporter', stars: 5, comment: 'LOUD campeão! Que orgulho do Brasil no cenário internacional!' },
        { user: 'tactical_fps', stars: 4, comment: 'Excelente nível técnico, mas algumas partidas foram muito longas.' },
    ],
    3: [
        { user: 'msi_watcher', stars: 4, comment: 'MSI sempre entrega! Ótima competição entre as regiões.' },
        { user: 'international_fan', stars: 5, comment: 'Adorei ver os confrontos entre diferentes estilos de jogo.' },
    ],
    4: [
        { user: 'masters_fan', stars: 5, comment: 'Masters Tokyo foi incrível! A produção japonesa foi perfeita.' },
        { user: 'valorant_viewer', stars: 4, comment: 'Ótimo torneio, mas senti falta de mais times brasileiros.' },
    ],
    5: [
        { user: 'vct_follower', stars: 4, comment: 'VCT sempre mantém o alto nível competitivo.' },
        { user: 'regional_fan', stars: 5, comment: 'Adorei acompanhar o desenvolvimento dos times regionais.' },
    ],
    6: [
        { user: 'gc_supporter', stars: 5, comment: 'Game Changers é fundamental para a diversidade no cenário!' },
        { user: 'inclusion_advocate', stars: 5, comment: 'Que iniciativa incrível! Mais representatividade no esports.' },
    ],
    7: [
        { user: 'tft_player', stars: 4, comment: 'TFT Worlds mostrou estratégias incríveis!' },
        { user: 'autochess_fan', stars: 5, comment: 'Que nível de jogo! Os melhores jogadores do mundo reunidos.' },
    ]
};

// Data from Patrocinio_Torneio
const tournamentSponsorshipsData = {
    1: [{ sponsorName: 'Red Bull', investment: 500000 }, { sponsorName: 'Nike', investment: 300000 }],
    2: [{ sponsorName: 'Samsung', investment: 400000 }],
    3: [{ sponsorName: 'BMW', investment: 200000 }],
    4: [{ sponsorName: 'Red Bull', investment: 350000 }],
    5: [{ sponsorName: 'Logitech', investment: 250000 }, { sponsorName: 'Intel', investment: 200000 }],
    6: [{ sponsorName: 'Verizon', investment: 180000 }],
    7: [{ sponsorName: 'Nike', investment: 150000 }],
};

// Data from Participacao_Torneio
const tournamentPlacementsData = {
    1: [ // Worlds 2023
        { teamId: 7, placement: 1 }, { teamId: 6, placement: 2 }, { teamId: 5, placement: 3 },
        { teamId: 4, placement: 5 }, { teamId: 3, placement: 7 }, { teamId: 2, placement: 8 },
    ],
    2: [ // Valorant Champions 2023
        { teamId: 2, placement: 1 }, { teamId: 4, placement: 2 }, { teamId: 5, placement: 3 },
        { teamId: 3, placement: 4 },
    ],
    3: [ // MSI 2022
        { teamId: 6, placement: 1 }, { teamId: 11, placement: 2 }, { teamId: 9, placement: 3 },
        { teamId: 8, placement: 4 },
    ],
    4: [ // Masters Tokyo 2023
        { teamId: 9, placement: 1 }, { teamId: 2, placement: 2 }, { teamId: 14, placement: 3 },
        { teamId: 4, placement: 4 },
    ],
    5: [ // VCT 2024
        { teamId: 14, placement: 1 }, { teamId: 3, placement: 2 }, { teamId: 2, placement: 3 },
        { teamId: 8, placement: 4 },
    ],
    6: [ // Game Changers 2024
        { teamId: 5, placement: 1 }, { teamId: 9, placement: 2 }, { teamId: 4, placement: 3 },
    ],
    7: [ // TFT Worlds 2024
        { teamId: 9, placement: 1 }, { teamId: 12, placement: 2 }, { teamId: 5, placement: 3 },
        { teamId: 13, placement: 4 },
    ],
};


export const buildTournament = (id: number): Tournament => {
    const tourneyData = allTournamentsBase.find(t => t.id === id);
    if (!tourneyData) throw new Error(`Tournament with id ${id} not found.`);

    const reviews = tournamentReviews[id] || [];
    const averageRating = reviews.length > 0
        ? reviews.reduce((acc, r) => acc + r.stars, 0) / reviews.length
        : 0;

    return {
        ...tourneyData,
        reviews,
        averageRating: parseFloat(averageRating.toFixed(1)),
        sponsorships: tournamentSponsorshipsData[id] || [],
        placements: tournamentPlacementsData[id] || [],
    }
}

export const allFullTournaments: Tournament[] = allTournamentsBase.map(t => buildTournament(t.id));
export const allFullTeams: Team[] = allTeams.map(t => buildTeam(t.id));


export const games: Game[] = [
  {
    id: 'valorant',
    name: 'Valorant',
    year: 2020,
    logoUrl: '/images/logovalo.jpg',
    bgUrl: '/images/ValorantFundo.jpg',
  },
  {
    id: 'league',
    name: 'League Of Legends',
    year: 2009,
    logoUrl: '/images/LoLsymbol.png',
    bgUrl: '/images/lolfundo.jpg',
  },
  {
    id: 'tft',
    name: 'Teamfight Tactics',
    year: 2019,
    logoUrl: '/images/TFTLogo.jpg',
    bgUrl: '/images/TFTFundo.jpg',
  },
  {
    id: 'lor',
    name: 'Legends of Runeterra',
    year: 2020,
    logoUrl: '/images/lor-logo.png',
    bgUrl: '/images/lor-fundo.jpg',
  },
];

// Fix: Explicitly type the array before sorting to prevent TypeScript from incorrectly inferring 'gameName' as a generic string.
const recentMatchesData: Match[] = [
    {
        id: 1,
        name: 'Grande Final',
        date: '2023-11-19T13:00:00Z',
        tournamentName: 'Worlds 2023',
        gameName: 'League of Legends',
        team1: buildTeam(7), // EDG
        team2: buildTeam(6), // T1
        winnerId: 7
    },
    {
        id: 2,
        name: 'Grande Final',
        date: '2023-08-26T18:00:00Z',
        tournamentName: 'Valorant Champions 2023',
        gameName: 'Valorant',
        team1: buildTeam(2), // LOUD
        team2: buildTeam(4), // Liquid
        winnerId: 2
    },
    {
        id: 3,
        name: 'Semifinal 1',
        date: '2022-05-28T12:00:00Z',
        tournamentName: 'MSI 2022',
        gameName: 'League of Legends',
        team1: buildTeam(6), // T1
        team2: buildTeam(9), // Fnatic
        winnerId: 6
    }
];

export const recentMatches: Match[] = recentMatchesData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


// --- GAME SPECIFIC DATA ---

export const valorantData: GameData = {
  id: 'valorant',
  name: 'Valorant',
  bgUrl: '/images/ValorantFundo.jpg',
  teams: [
    buildTeam(2), // LOUD
    buildTeam(3), // FURIA
    buildTeam(14), // Sentinels
    buildTeam(5), // G2
    buildTeam(9), // Fnatic
    buildTeam(4), // Team Liquid
    buildTeam(8), // Cloud9
  ],
  tournaments: [
    buildTournament(5), // VCT
    buildTournament(6), // GC
    buildTournament(4), // Masters
    buildTournament(2), // Champions
  ],
  faqs: [
    { id: 1, question: 'O que é o VCT e como os times se classificam?', answer: 'O Valorant Champions Tour (VCT) é o circuito competitivo global de Valorant. As equipes se classificam através de ligas regionais (Américas, EMEA, Pacífico) e eventos Masters para ganhar uma vaga no Champions, o campeonato mundial.' },
    { id: 2, question: 'Como acompanhar os resultados ao vivo dos campeonatos?', answer: 'Os resultados podem ser acompanhados através das transmissões oficiais na Twitch e YouTube, além de sites especializados em e-sports que fornecem placares em tempo real.' },
    { id: 3, question: 'Como saber o desempenho do meu time favorito no Champions?', answer: 'Você pode verificar as estatísticas detalhadas de cada partida, incluindo K/D/A, pontuação de combate e outras métricas nos principais portais de notícias de e-sports.' },
    { id: 4, question: 'Como funciona o sistema de ranqueamento no Valorant?', answer: 'O sistema de ranqueamento, ou Radiant, é baseado em vitórias e derrotas, com o desempenho individual influenciando a quantidade de RR (Rank Rating) ganho ou perdido. O objetivo é subir pelos elos, de Ferro a Radiante.' },
  ],
};

export const leagueOfLegendsData: GameData = {
  id: 'league',
  name: 'League of Legends',
  bgUrl: '/images/lolfundo.jpg',
  teams: [
    buildTeam(6), // T1
    buildTeam(5), // G2 Esports
    buildTeam(9), // Fnatic
    buildTeam(10), // DRX
    buildTeam(4), // Team Liquid
    buildTeam(8), // Cloud9
    buildTeam(7), // Edward Gaming
    buildTeam(11), // RNG
    buildTeam(12), // Karmine Corp
    buildTeam(13), // NaVi
    buildTeam(2), // LOUD
    buildTeam(3), // FURIA
  ],
  tournaments: [
    buildTournament(1), // Worlds
    buildTournament(3), // MSI
  ],
  faqs: [
    { id: 1, question: 'O que é o Worlds e como os times se classificam?', answer: 'O Campeonato Mundial de League of Legends (Worlds) é o torneio anual que coroa o melhor time do mundo. As equipes se classificam com base em seu desempenho em suas respectivas ligas regionais (LCK, LPL, LEC, LCS, etc.) ao longo do ano.' },
    { id: 2, question: 'Como saber o desempenho do meu time favorito no MSI ou Worlds?', answer: 'As estatísticas de jogadores e equipes, como KDA, participação em abates e controle de objetivos, estão disponíveis em sites de estatísticas de e-sports e são frequentemente discutidas durante as transmissões oficiais.' },
    { id: 3, question: 'Como funcionam os Splits e Playoffs do LoL?', answer: 'Cada ano competitivo é dividido em "Splits" (ex: Spring e Summer). Durante um split, as equipes jogam uma temporada regular, e as melhores avançam para os Playoffs, um torneio de eliminação para determinar o campeão do split e vagas em eventos internacionais.' },
    { id: 4, question: 'Como acompanhar os resultados ao vivo dos campeonatos?', answer: 'As partidas são transmitidas ao vivo nos canais oficiais de League of Legends Esports no YouTube e Twitch. Além disso, vários sites e aplicativos fornecem atualizações de placar e estatísticas em tempo real.' },
  ],
};

export const tftData: GameData = {
  id: 'tft',
  name: 'Teamfight Tactics',
  bgUrl: '/images/TFTFundo.jpg',
  teams: [
    buildTeam(9), // Fnatic (Humanoid)
    buildTeam(12), // Karmine Corp (Saken)
    buildTeam(5), // G2 (Caps)
    buildTeam(13), // NaVi (electroNic)
  ],
  tournaments: [
    buildTournament(7)
  ],
  faqs: [
    { id: 1, question: 'O que é o Mundial de TFT?', answer: 'O Campeonato Mundial de Teamfight Tactics reúne os melhores jogadores de todo o mundo que se classificaram através de suas respectivas competições regionais para competir pelo título de Campeão Mundial.' },
    { id: 2, question: 'Como funciona a progressão no TFT?', answer: 'Os jogadores progridem através de um sistema de ranqueadas, ganhando Pontos de Liga (PDL) por terminar nas primeiras posições de uma partida. Os elos são semelhantes aos de League of Legends, indo de Ferro a Desafiante.' },
  ],
};

export const lorData: GameData = {
    id: 'lor',
    name: 'Legends of Runeterra',
    bgUrl: '/images/lor-fundo.jpg',
    teams: [],
    tournaments: [
        buildTournament(8),
    ],
    faqs: [
      { id: 1, question: 'Como funcionam os torneios sazonais?', answer: 'Os Torneios Sazonais são eventos competitivos abertos onde os jogadores podem se qualificar através do desempenho nas ranqueadas ou em torneios de última chance para competir por prêmios e um lugar no Mundial.' },
      { id: 2, question: 'O que é o Mundial de Legends of Runeterra?', answer: 'É o auge do jogo competitivo de LoR, onde os melhores jogadores de todo o mundo, qualificados através de torneios sazonais e pontos, competem pelo título mundial.' },
    ],
};