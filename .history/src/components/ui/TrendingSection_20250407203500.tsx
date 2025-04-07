import React from "react";
import { trendingCoins, trendingDexPairs } from "../../data/mockData";
import { formatCurrencyWithDecimals, getPercentClass } from "../../utils/formatters";

const TrendingSection: React.FC = () => {
  return (
    <section className="container mx-auto mb-8 px-4">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Trending Coins Card */}
        <div className="w-full rounded-md border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 md:w-1/2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Trending Coins</h2>
            <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
              More &gt;
            </a>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {trendingCoins.map((coin, index) => (
              <div key={coin.id} className="flex items-center py-3">
                <div className="w-6 text-sm text-gray-500 dark:text-gray-400">{index + 1}</div>
                <div className="mx-2 h-8 w-8">
                  <img src={coin.logo} alt={coin.name} className="h-full w-full" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 dark:text-white">{coin.name}</span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      {coin.symbol}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {formatCurrencyWithDecimals(coin.price)}
                  </span>
                  <span className={`text-xs ${getPercentClass(coin.percentChange24h)}`}>
                    {coin.percentChange24h > 0 ? "+" : ""}
                    {coin.percentChange24h.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending on DexScan Card */}
        <div className="w-full rounded-md border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 md:w-1/2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Trending on DexScan</h2>
            <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
              More &gt;
            </a>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {trendingDexPairs.map((pair, index) => (
              <div key={pair.id} className="flex items-center py-3">
                <div className="w-6 text-sm text-gray-500 dark:text-gray-400">{index + 1}</div>
                <div className="relative mx-2 h-8 w-10">
                  <img
                    src={pair.token1Logo}
                    alt="Token 1"
                    className="absolute left-0 top-0 h-6 w-6"
                  />
                  <img
                    src={pair.token2Logo}
                    alt="Token 2"
                    className="absolute bottom-0 right-0 h-6 w-6"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {pair.name}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {formatCurrencyWithDecimals(pair.price)}
                  </span>
                  <span className={`text-xs ${getPercentClass(pair.percentChange24h)}`}>
                    {pair.percentChange24h > 0 ? "+" : ""}
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
