import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import GlobalStats from "./components/ui/GlobalStats";
import TrendingSection from "./components/ui/TrendingSection";
import FilterTabs from "./components/ui/FilterTabs";
import CryptoTable from "./components/ui/CryptoTable";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-gray-50 transition-colors duration-200 dark:bg-gray-900">
        <Header />
        <main className="flex-grow">
          <GlobalStats />
          <TrendingSection />
          <div className="container mx-auto px-4 py-4">
            <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-colors duration-200 dark:border-gray-700 dark:bg-gray-800">
              <FilterTabs />
              <CryptoTable />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
