import React, { useState } from 'react';
import { Page } from '../types';
import { Calendar, Menu, X, Camera } from 'lucide-react';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'news', label: 'News' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-emerald-100 transition-all duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
          aria-label="FLY - fill your moment Home"
        >
          <div className="w-8 h-8 rounded-sm bg-emerald-900 border border-emerald-800 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform shadow-xs">
            <Camera className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-emerald-950 uppercase whitespace-nowrap">
            FLY <span className="text-emerald-700 font-normal lowercase tracking-normal text-xs sm:text-sm pl-1">— fill your moment</span>
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] ${
                  isActive
                    ? 'text-emerald-950 font-bold'
                    : 'text-emerald-800/80 hover:text-emerald-950'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action Button (Book Appointment) */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavClick('appointment')}
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
              currentPage === 'appointment'
                ? 'bg-emerald-900 text-white shadow-md shadow-emerald-900/20 font-bold'
                : 'bg-emerald-900 text-white hover:bg-emerald-800 shadow-sm'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-emerald-900 hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-emerald-100 bg-white px-6 py-5 space-y-4 animate-in fade-in duration-150 shadow-md">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base py-2 transition-colors ${
                  currentPage === link.id
                    ? 'text-emerald-950 font-bold'
                    : 'text-emerald-800 hover:text-emerald-950'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('appointment')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider rounded-md bg-emerald-900 text-white hover:bg-emerald-800 transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
