import { allFullTournaments, allFullTeams } from './db';

// FIX: The original `allPlayers` from `./db` did not include stats, causing errors.
// This creates a new `allPlayers` list from `allFullTeams` which contains the full player data, including stats.
const allPlayers = allFullTeams.flatMap(team => team.players);

const queriesList = [
    { id: '1', description: "Listar todos os torneios de 'League of Legends'." },
    { id: '2', description: "Top 5 jogadores com mais vitórias na temporada de 2023." },
    { id: '3', description: "Equipes que participaram do 'Worlds 2023'." },
    { id: '4', description: "Jogadores com a menor taxa de vitórias." },
    { id: '5', description: "Patrocinadores e valor investido no 'Worlds 2023'." },
    { id: '6', description: "Torneios nos últimos 6 meses e o total de patrocínio." },
    { id: '7', description: "Equipes com menos de 5 jogadores (para recrutamento)." },
    { id: '8', description: "Torneios que 'Faker' disputou em 2023." },
    { id: '9', description: "Torneios ordenados pela maior média de avaliação." },
    { id: '10', description: "Classificação final das equipes no 'Valorant Champions 2023'." }
];

// Query 1: List all 'League of Legends' tournaments.
const runQuery1 = () => {
    const headers = ["Nome do Torneio", "Ano", "Prêmio Total"];
    const data = allFullTournaments
        .filter(t => t.gameId === 'league')
        .map(t => ({
            nome_do_torneio: t.name,
            ano: t.year,
            premio_total: t.prizePool ? `$${t.prizePool.toLocaleString('en-US')}` : 'N/A'
        }));
    return { headers, data };
};

// Query 2: Top 5 players with most wins in 2023 season.
const runQuery2 = () => {
    const headers = ["Nome", "Nickname", "Total de Vitórias"];
    const playerWins = allPlayers.map(player => {
        const wins2023 = player.stats
            ?.filter(s => s.year === 2023)
            .reduce((acc, s) => acc + s.wins, 0) || 0;
        return {
            nome: player.name,
            nickname: player.nickname,
            total_de_vitorias: wins2023,
        };
    });
    const data = playerWins.sort((a, b) => b.total_de_vitorias - a.total_de_vitorias).slice(0, 5);
    return { headers, data };
};

// Query 3: Teams that participated in 'Worlds 2023'.
const runQuery3 = () => {
    const headers = ["Nome da Equipe"];
    const worlds = allFullTournaments.find(t => t.name === 'Worlds' && t.year === 2023);
    const data = worlds?.placements?.map(p => {
        const team = allFullTeams.find(t => t.id === p.teamId);
        return { nome_da_equipe: team?.name || 'Desconhecida' };
    }) || [];
    return { headers, data };
};

// Query 4: Players with the lowest win rate.
const runQuery4 = () => {
    const headers = ["Nome", "Nickname", "Taxa de Vitórias (%)"];
    const playerRates = allPlayers.map(player => {
        const total = player.stats?.reduce((acc, s) => ({
            wins: acc.wins + s.wins,
            losses: acc.losses + s.losses,
        }), { wins: 0, losses: 0 }) || { wins: 0, losses: 0 };
        
        const totalGames = total.wins + total.losses;
        const winRate = totalGames > 0 ? (total.wins / totalGames) * 100 : 0;
        
        return {
            nome: player.name,
            nickname: player.nickname,
            taxa_de_vitorias: parseFloat(winRate.toFixed(2)),
        };
    }).filter(p => (p.taxa_de_vitorias > 0)); // Filter out players with 0 games or 0 wins as per SQL logic
    
    const data = playerRates.sort((a, b) => a.taxa_de_vitorias - b.taxa_de_vitorias);
    return { headers, data };
};

// Query 5: Sponsors and their investment in 'Worlds 2023'.
const runQuery5 = () => {
    const headers = ["Patrocinador", "Valor Investido"];
    const worlds = allFullTournaments.find(t => t.name === 'Worlds' && t.year === 2023);
    const data = worlds?.sponsorships?.map(s => ({
        patrocinador: s.sponsorName,
        valor_investido: `$${s.investment.toLocaleString('en-US')}`
    })) || [];
    return { headers, data };
};

// Query 6: Tournaments in the last 6 months with total sponsorship value.
const runQuery6 = () => {
    const headers = ["Torneio", "Data de Início", "Total Patrocínios"];
    
    // To make the query stable over time, we'll treat the latest tournament date as "today".
    const latestDate = allFullTournaments.reduce((latest, t) => {
        const tDate = new Date(t.startDate);
        return tDate > latest ? tDate : latest;
    }, new Date(0));

    const sixMonthsAgo = new Date(latestDate);
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
    const data = allFullTournaments
        .filter(t => {
            const tournamentDate = new Date(t.startDate);
            return tournamentDate >= sixMonthsAgo && tournamentDate <= latestDate;
        })
        .map(t => ({
            torneio: t.name,
            data_de_inicio: new Date(t.startDate).toLocaleDateString('pt-BR'),
            total_patrocinios: t.sponsorships?.reduce((sum, s) => sum + s.investment, 0) || 0
        }))
        .sort((a, b) => b.total_patrocinios - a.total_patrocinios)
        .map(t => ({
            ...t,
            total_patrocinios: `$${t.total_patrocinios.toLocaleString('en-US')}`
        }));

    return { headers, data };
};

// Query 7: Teams with fewer than 5 players.
const runQuery7 = () => {
    const headers = ["Equipe", "Total de Jogadores"];
    const data = allFullTeams
        .filter(team => team.players.length < 5)
        .map(team => ({
            equipe: team.name,
            total_de_jogadores: team.players.length
        }));
    return { headers, data };
};

// Query 8: Tournaments 'Faker' played in 2023.
const runQuery8 = () => {
    const headers = ["Nome do Torneio"];
    const faker = allPlayers.find(p => p.nickname === 'Faker');
    const data = faker?.stats
        ?.filter(s => s.year === 2023)
        .map(s => ({ nome_do_torneio: s.tournamentName })) || [];
    return { headers, data };
};

// Query 9: Tournaments ordered by highest average rating.
const runQuery9 = () => {
    const headers = ["Torneio", "Média de Estrelas", "Total de Avaliações"];
    const data = allFullTournaments
        .filter(t => t.reviews.length > 0)
        .sort((a, b) => b.averageRating - a.averageRating)
        .map(t => ({
            torneio: t.name,
            media_de_estrelas: t.averageRating.toFixed(1),
            total_de_avaliacoes: t.reviews.length
        }));
    return { headers, data };
};

// Query 10: Final placements for 'Valorant Champions 2023'.
const runQuery10 = () => {
    const headers = ["Equipe", "Colocação Final"];
    const champs = allFullTournaments.find(t => t.name === 'Champions' && t.year === 2023);
    const data = champs?.placements
        ?.sort((a, b) => a.placement - b.placement)
        .map(p => {
            const team = allFullTeams.find(t => t.id === p.teamId);
            return {
                equipe: team?.name || 'Desconhecida',
                colocacao_final: `${p.placement}º`
            };
        }) || [];
    return { headers, data };
};


const queryFunctions: { [key: string]: () => { headers: string[], data: any[] } } = {
    '1': runQuery1, '2': runQuery2, '3': runQuery3, '4': runQuery4, '5': runQuery5,
    '6': runQuery6, '7': runQuery7, '8': runQuery8, '9': runQuery9, '10': runQuery10,
};

export const runQuery = (id: string) => {
    if (queryFunctions[id]) {
        return queryFunctions[id]();
    }
    return { headers: [], data: [] };
};

export const queries = queriesList;