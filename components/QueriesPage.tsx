import React, { useState, useMemo } from 'react';
import { runQuery, queries } from '../data/queries';
import QueryResultTable from './QueryResultTable';
import QueryImage from '../images/consulta.png';

const QueriesPage: React.FC = () => {
    const [selectedQuery, setSelectedQuery] = useState<string>('');
    const [results, setResults] = useState<{ headers: string[], data: any[] } | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleQueryChange = (queryId: string) => {
        setSelectedQuery(queryId);
        if (!queryId) {
            setResults(null);
            return;
        }

        setIsLoading(true);
        // Simulate async data fetching
        setTimeout(() => {
            const queryResult = runQuery(queryId);
            setResults(queryResult);
            setIsLoading(false);
        }, 500);
    };
    
    return (
        <div className="bg-[#010010] text-white min-h-screen">
            <section
                className="min-h-[50vh] bg-cover bg-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `linear-gradient(rgba(1, 0, 16, 0.7), rgba(1, 0, 16, 1)), url(${QueryImage})` }}
            >
                <div className="text-center pt-24">
                    <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wider mb-8">Consultas</h1>
                    <p className="text-lg text-gray-400 max-w-2xl">
                        Selecione uma das consultas predefinidas para explorar os dados da Cyber League.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-[#0A0918]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="mb-8">
                        <label htmlFor="query-select" className="block text-sm font-medium text-gray-400 mb-2">Selecione a Consulta</label>
                        <select
                            id="query-select"
                            value={selectedQuery}
                            onChange={(e) => handleQueryChange(e.target.value)}
                            className="w-full bg-[#010010] border border-purple-800/50 text-white rounded-lg p-3 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="">-- Escolha uma consulta --</option>
                            {queries.map(q => (
                                <option key={q.id} value={q.id}>{q.id}. {q.description}</option>
                            ))}
                        </select>
                    </div>

                    <div className="bg-[#010010] p-6 rounded-lg border border-gray-800 min-h-[300px]">
                        {isLoading ? (
                            <div className="flex justify-center items-center h-full">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
                            </div>
                        ) : results ? (
                            <QueryResultTable headers={results.headers} data={results.data} />
                        ) : (
                            <div className="flex justify-center items-center h-full">
                                <p className="text-gray-500">Os resultados da sua consulta aparecerão aqui.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QueriesPage;
