import React from 'react';
import { Page } from '../types';
import { Camera, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-emerald-950 border-t-2 border-[#D4AF37] text-emerald-100/80 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-sm bg-emerald-900 border border-emerald-800 flex items-center justify-center text-[#D4AF37]">
                <Camera className="w-4 h-4" />
              </div>
              <span className="font-bold tracking-tight text-base uppercase">
                FLY <span className="text-[#D4AF37] font-normal lowercase tracking-normal text-xs sm:text-sm pl-1">— fill your moment</span>
              </span>
            </div>
            <p className="text-emerald-100/80 text-sm leading-relaxed max-w-sm">
              FLY — fill your moment. Crafting iconic commercial cinematography, high-fashion editorials, and architectural monographs since 2009. We turn spatial physics and organic light into timeless visual memory.
            </p>
            <div className="pt-2 text-xs text-emerald-300/70 font-mono">
              <span>Member of ICG Local 600 · APA · Cannes Corporate Gold Laureate</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Exploration
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  About & Milestones
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('work');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Case Studies & Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('news');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  News & Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('appointment');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#D4AF37] hover:text-[#E2BE4A] font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  Book Appointment <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Disciplines
            </h4>
            <ul className="space-y-2 text-sm text-emerald-200/80">
              <li>Automotive & Brand Motion</li>
              <li>Architectural & Interior Stills</li>
              <li>High-Fashion & Haute Couture</li>
              <li>Heavy-Lift Aerial Cinematography</li>
              <li>Virtual Production & 16-Bit ACES</li>
            </ul>
          </div>

          {/* Studios / Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Global Stages
            </h4>
            <div className="space-y-2 text-xs text-emerald-200/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                <span>Stage 4, 1420 Alameda St, Los Angeles, CA 90021</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                <span>Unit 7 Bermondsey St, London SE1 3UW</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-white">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>inquiries@fly-fillyourmoment.studio</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>+1 (213) 584-9020</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hairline & copyright */}
        <div className="mt-12 pt-8 border-t border-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <div>
            © 2009–2026 FLY - fill your moment. All rights reserved. Registered trademark.
          </div>
          <div className="flex items-center gap-6">
            <span>Ethics & Sustainability</span>
            <span>Drone FAA Part 107 Lic.</span>
            <span>Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
