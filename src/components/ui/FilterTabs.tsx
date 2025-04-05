import React, { useState } from 'react';

const FilterTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('top');

  const tabs = [
    { id: 'top', label: 'Top' },
    { id: 'trending', label: 'Trending' },
    { id: 'new', label: 'New' },
    { id: 'gainers', label: 'Gainers' },
    { id: 'mostVisited', label: 'Most Visited' }
  ];

  return (
    <div className="border-b border-gray-200 mb-4">
      <div className="container mx-auto px-4">
        {/* Main Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar space-x-1 text-sm">
          <button className="px-4 py-2 font-semibold text-gray-900 border-b-2 border-blue-600">
            All Crypto
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
            NFTs
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
            Categories
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
            Token unlocks
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
            Rehypo
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
            Binance Alpha
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
            Memes
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
            SOL
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
            DOT
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
            BNB
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
            USA
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
            AI
          </button>
        </div>

        {/* Subcategory Tabs */}
        <div className="flex space-x-4 mt-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`pb-4 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-between items-center py-4">
          <div className="flex space-x-2">
            <button className="py-1.5 px-3 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
              <span>Filters</span>
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="py-1.5 px-3 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
              Columns
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
