import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { NewsPage } from './pages/NewsPage';
import { AppointmentPage } from './pages/AppointmentPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'about', 'work', 'news', 'appointment'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-emerald-950">
      {/* Top Bar with One-row Three-zone Contract */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main View Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'work' && <WorkPage onNavigate={handleNavigate} />}
        {currentPage === 'news' && <NewsPage onNavigate={handleNavigate} />}
        {currentPage === 'appointment' && <AppointmentPage onNavigate={handleNavigate} />}
      </main>

      {/* Studio Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
