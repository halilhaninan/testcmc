import React from 'react';
import { trendingCoins, trendingDexPairs } from '../../data/mockData';
import { formatCurrencyWithDecimals, getPercentClass } from '../../utils/formatters';

const TrendingSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Trending Coins Card */}
        <div className="w-full md:w-1/2 bg-white border border-gray-200 rounded-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Trending Coins</h2>
            <a href="#" className="text-blue-600 text-sm hover:underline">More &gt;</a>
          </div>

          <div className="divide-y divide-gray-100">
            {trendingCoins.map((coin, index) => (
              <div key={coin.id} className="py-3 flex items-center">
                <div className="w-6 text-gray-500 text-sm">{index + 1}</div>
                <div className="w-8 h-8 mx-2">
                  <img src={coin.logo} alt={coin.name} className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium">{coin.name}</span>
                    <span className="text-gray-500 text-sm ml-2">{coin.symbol}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium">{formatCurrencyWithDecimals(coin.price)}</span>
                  <span className={`text-xs ${getPercentClass(coin.percentChange24h)}`}>
                    {coin.percentChange24h > 0 ? '+' : ''}
                    {coin.percentChange24h.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending on DexScan Card */}
        <div className="w-full md:w-1/2 bg-white border border-gray-200 rounded-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Trending on DexScan</h2>
            <a href="#" className="text-blue-600 text-sm hover:underline">More &gt;</a>
          </div>

          <div className="divide-y divide-gray-100">
            {trendingDexPairs.map((pair, index) => (
              <div key={pair.id} className="py-3 flex items-center">
                <div className="w-6 text-gray-500 text-sm">{index + 1}</div>
                <div className="w-10 h-8 mx-2 relative">
                  <img src={pair.token1Logo} alt="Token 1" className="w-6 h-6 absolute top-0 left-0" />
                  <img src={pair.token2Logo} alt="Token 2" className="w-6 h-6 absolute bottom-0 right-0" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-sm">{pair.name}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium">{formatCurrencyWithDecimals(pair.price)}</span>
                  <span className={`text-xs ${getPercentClass(pair.percentChange24h)}`}>
                    {pair.percentChange24h > 0 ? '+' : ''}
                    {pair.percentChange24h.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
