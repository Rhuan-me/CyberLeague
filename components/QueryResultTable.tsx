import React from 'react';

interface QueryResultTableProps {
  headers: string[];
  data: any[];
}

const QueryResultTable: React.FC<QueryResultTableProps> = ({ headers, data }) => {
  if (data.length === 0) {
    return <p className="text-gray-500 text-center">Nenhum resultado encontrado para esta consulta.</p>;
  }

  const keys = headers.map(header => {
      const key = Object.keys(data[0]).find(k => k.toLowerCase() === header.toLowerCase().replace(/ /g, '_').replace('(%)',''));
      return key || '';
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-300 uppercase bg-gray-900/50">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-[#0A0918] border-b border-gray-800 hover:bg-gray-900/30">
              {keys.map((key, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                  {typeof row[key] === 'number' ? row[key].toLocaleString('pt-BR') : row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryResultTable;
