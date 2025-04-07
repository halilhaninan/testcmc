import React from "react";
import { cryptocurrencies } from "../../data/mockData";
import {
  formatCurrency,
  formatCurrencyWithDecimals,
  formatNumber,
  formatSupply,
  getPercentClass,
} from "../../utils/formatters";

const CryptoTable: React.FC = () => {
  return (
    <div className="container mx-auto overflow-x-auto px-4">
      {/* Filters and Categories */}
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
        <div className="flex flex-wrap gap-2">
          <button className="rounded-md bg-blue-600 px-3 py-1 text-white">All Crypto</button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            NFTs
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Categories
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Token unlocks
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Rehypo
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Binance Alpha
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Memes
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            SOL
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            DOT
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            BNB
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            USA
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            AI
          </button>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Top
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Trending
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            New
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Gainers
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Most Visited
          </button>
        </div>
      </div>

      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr className="border-b border-gray-200 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-right">Price</th>
            <th className="px-4 py-3 text-right">1h %</th>
            <th className="px-4 py-3 text-right">24h %</th>
            <th className="px-4 py-3 text-right">7d %</th>
            <th className="px-4 py-3 text-right">Market Cap</th>
            <th className="px-4 py-3 text-right">Volume(24h)</th>
            <th className="px-4 py-3 text-right">Circulating Supply</th>
            <th className="px-4 py-3 text-right">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {cryptocurrencies.map((crypto) => (
            <tr
              key={crypto.id}
              className="border-b border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <td className="px-4 py-4 text-left text-gray-500 dark:text-gray-400">
                {crypto.rank}
              </td>
              <td className="px-4 py-4 text-left">
                <div className="flex items-center">
                  <img src={crypto.logo} alt={crypto.name} className="mr-3 h-6 w-6" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{crypto.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{crypto.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-right font-medium text-gray-900 dark:text-white">
                {formatCurrencyWithDecimals(crypto.price)}
              </td>
              <td
                className={`px-4 py-4 text-right text-sm ${getPercentClass(crypto.percentChange1h)}`}
              >
                {crypto.percentChange1h > 0 ? "+" : ""}
                {crypto.percentChange1h.toFixed(2)}%
              </td>
              <td
                className={`px-4 py-4 text-right text-sm ${getPercentClass(crypto.percentChange24h)}`}
              >
                {crypto.percentChange24h > 0 ? "+" : ""}
                {crypto.percentChange24h.toFixed(2)}%
              </td>
              <td
                className={`px-4 py-4 text-right text-sm ${getPercentClass(crypto.percentChange7d)}`}
              >
                {crypto.percentChange7d > 0 ? "+" : ""}
                {crypto.percentChange7d.toFixed(2)}%
              </td>
              <td className="px-4 py-4 text-right font-medium text-gray-900 dark:text-white">
                {formatCurrency(crypto.marketCap)}
              </td>
              <td className="px-4 py-4 text-right">
                <div className="text-gray-900 dark:text-white">
                  {formatCurrency(crypto.volume24h)}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {formatNumber(crypto.volume24h / crypto.price)} {crypto.symbol}
                </div>
              </td>
              <td className="px-4 py-4 text-right">
                <div className="text-gray-900 dark:text-white">
                  {formatSupply(crypto.circulatingSupply, crypto.symbol)}
                </div>
              </td>
              <td className="w-24 px-4 py-4">
                <img
                  src={crypto.sparkline}
                  alt={`${crypto.name} 7d chart`}
                  className="h-10 w-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="my-8 flex justify-center">
        <nav className="inline-flex">
          <button className="rounded-l-md border border-gray-300 bg-white px-3 py-1 text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
            Previous
          </button>
          <button className="border-b border-t border-gray-300 bg-blue-50 px-3 py-1 font-medium text-blue-600 dark:border-gray-600 dark:bg-blue-900 dark:text-blue-300">
            1
          </button>
          <button className="border-b border-t border-gray-300 bg-white px-3 py-1 text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
            2
          </button>
          <button className="border-b border-t border-gray-300 bg-white px-3 py-1 text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
            3
          </button>
          <button className="border-b border-t border-gray-300 bg-white px-3 py-1 text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
            4
          </button>
          <button className="border-b border-t border-gray-300 bg-white px-3 py-1 text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
            5
          </button>
          <button className="rounded-r-md border border-gray-300 bg-white px-3 py-1 text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default CryptoTable;
