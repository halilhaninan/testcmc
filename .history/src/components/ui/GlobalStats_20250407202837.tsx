import React from 'react';
import { globalStats } from '../../data/mockData';
import { formatNumber, formatCurrency, getPercentClass } from '../../utils/formatters';

const GlobalStats: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Today's Cryptocurrency Prices by Market Cap</h1>

      <div className="text-sm text-gray-600 mb-6">
        <p>
          The global crypto market cap is {formatCurrency(globalStats.totalMarketCap)},
          a <span className={getPercentClass(globalStats.totalMarketCapChange24h)}>
            {globalStats.totalMarketCapChange24h > 0 ? '+' : ''}
            {globalStats.totalMarketCapChange24h.toFixed(2)}%
          </span> increase over the last day.
        </p>
        <p className="mt-2">
          The total crypto market volume over the last 24 hours is {formatCurrency(globalStats.total24hVolume)},
          which makes a <span className={getPercentClass(globalStats.total24hVolumeChange)}>
            {globalStats.total24hVolumeChange > 0 ? '+' : ''}
            {globalStats.total24hVolumeChange.toFixed(2)}%
          </span> decrease. The total volume in DeFi is currently $6.19B, 8.71% of the total crypto market 24-hour volume.
          The volume of all stable coins is now $67.51B, which is 94.98% of the total crypto market 24-hour volume.
        </p>
        <p className="mt-2">
          Bitcoins dominance is currently {globalStats.btcDominance}%, a decrease of 0.20% over the day.
        </p>
        <button className="text-blue-600 mt-2">Read More</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Market Cap Card */}
        <div className="bg-white border border-gray-200 rounded-md p-4 flex flex-col">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Market Cap</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold">{formatCurrency(globalStats.totalMarketCap)}</span>
            <span className={`ml-2 text-sm ${getPercentClass(globalStats.totalMarketCapChange24h)}`}>
              {globalStats.totalMarketCapChange24h > 0 ? '+' : ''}
              {globalStats.totalMarketCapChange24h.toFixed(2)}%
            </span>
          </div>
        </div>

        {/* Fear & Greed Card */}
        <div className="bg-white border border-gray-200 rounded-md p-4 flex flex-col">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Fear & Greed</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-orange-500">{globalStats.fearAndGreedIndex}</span>
            <span className="ml-2 text-sm text-orange-500">{globalStats.fearAndGreedLabel}</span>
          </div>
          <div className="mt-2 bg-gray-200 h-2 rounded-full w-full">
            <div
              className="bg-orange-500 h-2 rounded-full"
              style={{ width: `${globalStats.fearAndGreedIndex}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span>Fear</span>
            <span>Greed</span>
          </div>
        </div>

        {/* CMC100 Card */}
        <div className="bg-white border border-gray-200 rounded-md p-4 flex flex-col">
          <h3 className="text-sm font-medium text-gray-500 mb-2">CMC100</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold">$165.83</span>
            <span className="ml-2 text-sm text-green-500">+1.17%</span>
          </div>
        </div>

        {/* Altcoin Season Card */}
        <div className="bg-white border border-gray-200 rounded-md p-4 flex flex-col">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Altcoin Season</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold">21/100</span>
          </div>
          <div className="mt-2 bg-gray-200 h-2 rounded-full w-full">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '21%' }}></div>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span>Bitcoin</span>
            <span>Altcoin</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalStats;
