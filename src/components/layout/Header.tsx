import React from 'react';
import { globalStats } from '../../data/mockData';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      {/* Top Bar with Stats */}
      <div className="border-b border-gray-100 py-1 px-4 text-xs text-gray-500 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <div>Cryptos: <span className="text-blue-600">12.93M</span></div>
            <div>Exchanges: <span className="text-blue-600">812</span></div>
            <div>
              Market Cap: <span className="text-blue-600">${(globalStats.totalMarketCap / 1e12).toFixed(2)}T</span>
              <span className={`ml-1 ${globalStats.totalMarketCapChange24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {globalStats.totalMarketCapChange24h > 0 ? '+' : ''}{globalStats.totalMarketCapChange24h.toFixed(2)}%
              </span>
            </div>
            <div>
              24h Vol: <span className="text-blue-600">${(globalStats.total24hVolume / 1e9).toFixed(2)}B</span>
              <span className={`ml-1 ${globalStats.total24hVolumeChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {globalStats.total24hVolumeChange > 0 ? '+' : ''}{globalStats.total24hVolumeChange.toFixed(2)}%
              </span>
            </div>
            <div>
              Dominance: <span className="text-blue-600">BTC: {globalStats.btcDominance}% ETH: {globalStats.ethDominance}%</span>
            </div>
            <div>
              ETH Gas: <span className="text-blue-600">0.47 Gwei</span>
            </div>
            <div>
              Fear & Greed:
              <span className="ml-1 text-orange-500">{globalStats.fearAndGreedIndex}/100</span>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="hover:text-blue-600 transition-colors">Get listed</button>
            <button className="hover:text-blue-600 transition-colors">API</button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto py-3 px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Main Nav */}
          <div className="flex items-center">
            <div className="mr-10">
              <a href="/" className="flex items-center">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="0.5"></path>
                  <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-800">CoinMarketCap</span>
              </a>
            </div>

            {/* Main Navigation Items */}
            <nav className="hidden lg:flex space-x-6">
              <div className="relative group cursor-pointer">
                <span className="font-medium">Cryptocurrencies</span>
                <div className="absolute w-0 h-0.5 bg-blue-600 bottom-0 left-0 group-hover:w-full transition-all duration-200"></div>
              </div>
              <div className="relative group cursor-pointer">
                <span>Exchanges</span>
                <div className="absolute w-0 h-0.5 bg-blue-600 bottom-0 left-0 group-hover:w-full transition-all duration-200"></div>
              </div>
              <div className="relative group cursor-pointer">
                <span>Community</span>
                <div className="absolute w-0 h-0.5 bg-blue-600 bottom-0 left-0 group-hover:w-full transition-all duration-200"></div>
              </div>
              <div className="relative group cursor-pointer">
                <span>Products</span>
                <div className="absolute w-0 h-0.5 bg-blue-600 bottom-0 left-0 group-hover:w-full transition-all duration-200"></div>
              </div>
              <div className="relative group cursor-pointer">
                <span>Learn</span>
                <div className="absolute w-0 h-0.5 bg-blue-600 bottom-0 left-0 group-hover:w-full transition-all duration-200"></div>
              </div>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 rounded-md py-2 px-3 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <button className="text-sm text-gray-500 hover:text-blue-600">Portfolio</button>
              <button className="text-sm text-gray-500 hover:text-blue-600">Watchlist</button>
            </div>

            <button className="bg-blue-600 text-white py-1.5 px-4 rounded-md hover:bg-blue-700 text-sm hidden md:block">
              Log In
            </button>

            <button className="block lg:hidden">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
