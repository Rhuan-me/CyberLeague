export type Page = 'home' | 'valorant' | 'league' | 'tft' | 'lor' | 'queries';

export interface PlayerTournamentStats {
  tournamentId: number;
  tournamentName: string;
  year: number;
  wins: number;
  losses: number;
  kills: number;
  assists: number;
}

export interface Player {
  id: number;
  name:string;
  nickname: string;
  stats?: PlayerTournamentStats[];
}

export interface Team {
  id: number;
  name: string;
  logoUrl: string;
  players: Player[];
}

export interface Game {
  id: Exclude<Page, 'home' | 'queries'>;
  name: string;
  year: number;
  logoUrl: string;
  bgUrl: string;
}

export interface Review {
  user: string;
  stars: number;
  comment: string;
}

export interface TournamentSponsorship {
    sponsorName: string;
    investment: number;
}

export interface TeamPlacement {
    teamId: number;
    placement: number;
}

export interface Tournament {
  id: number;
  name: string;
  year: number;
  imageUrl: string;
  reviews: Review[];
  averageRating: number;
  gameId: 'league' | 'valorant' | 'tft' | 'lor';
  startDate: string;
  sponsorships?: TournamentSponsorship[];
  placements?: TeamPlacement[];
  prizePool?: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface GameData {
  id: Exclude<Page, 'home' | 'queries'>;
  name: string;
  teams: Team[];
  tournaments: Tournament[];
  faqs: FaqItem[];
  bgUrl: string;
}

export interface Match {
    id: number;
    name: string;
    date: string;
    tournamentName: string;
    gameName: 'Valorant' | 'League of Legends' | 'MSI';
    team1: Team;
    team2: Team;
    winnerId: number;
}