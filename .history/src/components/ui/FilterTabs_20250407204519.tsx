import React, { useState } from "react";

const FilterTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("top");

  const tabs = [
    { id: "top", label: "Top" },
    { id: "trending", label: "Trending" },
    { id: "new", label: "New" },
    { id: "gainers", label: "Gainers" },
    { id: "mostVisited", label: "Most Visited" },
  ];

  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        {/* Main Category Tabs */}
        <div className="no-scrollbar flex space-x-1 overflow-x-auto text-sm">
          <button className="border-b-2 border-blue-600 px-4 py-2 font-semibold text-gray-900 dark:text-white">
            All Crypto
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400">
            NFTs
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400">
            Categories
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400">
            Token unlocks
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400">
            Rehypo
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400">
            Binance Alpha
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400">
            Memes
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400">
            SOL
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400">
            DOT
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400">
            BNB
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400">
            USA
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400">
            AI
          </button>
        </div>

        {/* Subcategory Tabs */}
        <div className="mt-4 flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`relative pb-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
                  : "text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-blue-400"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-between py-4">
          <div className="flex space-x-2">
            <button className="flex items-center rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
              <span>Filters</span>
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
              Columns
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
