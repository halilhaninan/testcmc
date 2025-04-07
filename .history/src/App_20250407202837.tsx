import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import GlobalStats from './components/ui/GlobalStats';
import TrendingSection from './components/ui/TrendingSection';
import FilterTabs from './components/ui/FilterTabs';
import CryptoTable from './components/ui/CryptoTable';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <GlobalStats />
        <TrendingSection />
        <div className="container mx-auto px-4 py-4">
          <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
            <FilterTabs />
            <CryptoTable />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
