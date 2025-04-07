import React from "react";
import { globalStats } from "../../data/mockData";
import { useTheme } from "../../context/ThemeContext";

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm transition-colors duration-200 dark:bg-gray-800">
      {/* Top Bar with Stats */}
      <div className="hidden border-b border-gray-100 px-4 py-1 text-xs text-gray-500 md:block">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex space-x-6">
            <div>
              Cryptos: <span className="text-blue-600">12.93M</span>
            </div>
            <div>
              Exchanges: <span className="text-blue-600">812</span>
            </div>
            <div>
              Market Cap:{" "}
              <span className="text-blue-600">
                ${(globalStats.totalMarketCap / 1e12).toFixed(2)}T
              </span>
              <span
                className={`ml-1 ${globalStats.totalMarketCapChange24h >= 0 ? "text-green-500" : "text-red-500"}`}
              >
                {globalStats.totalMarketCapChange24h > 0 ? "+" : ""}
                {globalStats.totalMarketCapChange24h.toFixed(2)}%
              </span>
            </div>
            <div>
              24h Vol:{" "}
              <span className="text-blue-600">
                ${(globalStats.total24hVolume / 1e9).toFixed(2)}B
              </span>
              <span
                className={`ml-1 ${globalStats.total24hVolumeChange >= 0 ? "text-green-500" : "text-red-500"}`}
              >
                {globalStats.total24hVolumeChange > 0 ? "+" : ""}
                {globalStats.total24hVolumeChange.toFixed(2)}%
              </span>
            </div>
            <div>
              Dominance:{" "}
              <span className="text-blue-600">
                BTC: {globalStats.btcDominance}% ETH: {globalStats.ethDominance}%
              </span>
            </div>
            <div>
              ETH Gas: <span className="text-blue-600">0.47 Gwei</span>
            </div>
            <div>
              Fear & Greed:
              <span className="ml-1 text-orange-500">{globalStats.fearAndGreedIndex}/100</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="transition-colors hover:text-blue-600">Get listed</button>
            <button className="transition-colors hover:text-blue-600">API</button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Main Nav */}
          <div className="flex items-center">
            <div className="mr-10">
              <a href="/" className="flex items-center">
                <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  ></path>
                  <path
                    d="M7.5 12.5L10.5 15.5L16.5 9.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-800">CoinMarketCap</span>
              </a>
            </div>

            {/* Main Navigation Items */}
            <nav className="hidden space-x-6 lg:flex">
              <div className="group relative cursor-pointer">
                <span className="font-medium">Cryptocurrencies</span>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full"></div>
              </div>
              <div className="group relative cursor-pointer">
                <span>Exchanges</span>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full"></div>
              </div>
              <div className="group relative cursor-pointer">
                <span>Community</span>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full"></div>
              </div>
              <div className="group relative cursor-pointer">
                <span>Products</span>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full"></div>
              </div>
              <div className="group relative cursor-pointer">
                <span>Learn</span>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full"></div>
              </div>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="rounded-md bg-gray-100 px-3 py-2 pl-9 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <div className="hidden items-center space-x-2 md:flex">
              <button className="text-sm text-gray-500 hover:text-blue-600">Portfolio</button>
              <button className="text-sm text-gray-500 hover:text-blue-600">Watchlist</button>
            </div>

            <button className="hidden rounded-md bg-blue-600 px-4 py-1.5 text-sm text-white hover:bg-blue-700 md:block">
              Log In
            </button>

            <button className="block lg:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>

            <button
              onClick={toggleTheme}
              className="rounded-lg bg-gray-100 p-2 text-gray-800 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
