import React from 'react';
import { cryptocurrencies } from '../../data/mockData';
import {
  formatCurrency,
  formatCurrencyWithDecimals,
  formatNumber,
  formatSupply,
  getPercentClass
} from '../../utils/formatters';

const CryptoTable: React.FC = () => {
  return (
    <div className="container mx-auto px-4 overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="border-b border-gray-200 text-gray-500 text-xs">
            <th className="py-3 px-4 text-left">#</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-right">Price</th>
            <th className="py-3 px-4 text-right">1h %</th>
            <th className="py-3 px-4 text-right">24h %</th>
            <th className="py-3 px-4 text-right">7d %</th>
            <th className="py-3 px-4 text-right">Market Cap</th>
            <th className="py-3 px-4 text-right">Volume(24h)</th>
            <th className="py-3 px-4 text-right">Circulating Supply</th>
            <th className="py-3 px-4 text-right">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {cryptocurrencies.map((crypto) => (
            <tr key={crypto.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-4 px-4 text-left text-gray-500">{crypto.rank}</td>
              <td className="py-4 px-4 text-left">
                <div className="flex items-center">
                  <img src={crypto.logo} alt={crypto.name} className="w-6 h-6 mr-3" />
                  <div>
                    <div className="font-medium">{crypto.name}</div>
                    <div className="text-gray-500 text-xs">{crypto.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-right font-medium">
                {formatCurrencyWithDecimals(crypto.price)}
              </td>
              <td className={`py-4 px-4 text-right text-sm ${getPercentClass(crypto.percentChange1h)}`}>
                {crypto.percentChange1h > 0 ? '+' : ''}
                {crypto.percentChange1h.toFixed(2)}%
              </td>
              <td className={`py-4 px-4 text-right text-sm ${getPercentClass(crypto.percentChange24h)}`}>
                {crypto.percentChange24h > 0 ? '+' : ''}
                {crypto.percentChange24h.toFixed(2)}%
              </td>
              <td className={`py-4 px-4 text-right text-sm ${getPercentClass(crypto.percentChange7d)}`}>
                {crypto.percentChange7d > 0 ? '+' : ''}
                {crypto.percentChange7d.toFixed(2)}%
              </td>
              <td className="py-4 px-4 text-right font-medium">
                {formatCurrency(crypto.marketCap)}
              </td>
              <td className="py-4 px-4 text-right">
                <div>{formatCurrency(crypto.volume24h)}</div>
                <div className="text-gray-500 text-xs">{formatNumber(crypto.volume24h / crypto.price)} {crypto.symbol}</div>
              </td>
              <td className="py-4 px-4 text-right">
                <div>{formatSupply(crypto.circulatingSupply, crypto.symbol)}</div>
              </td>
              <td className="py-4 px-4 w-24">
                <img
                  src={crypto.sparkline}
                  alt={`${crypto.name} 7d chart`}
                  className="w-full h-10"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center my-8">
        <nav className="inline-flex">
          <button className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border-t border-b border-gray-300 bg-blue-50 text-blue-600 font-medium">
            1
          </button>
          <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            4
          </button>
          <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            5
          </button>
          <button className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default CryptoTable;
