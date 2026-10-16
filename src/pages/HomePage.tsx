import React, { useState } from 'react';
import { Page, GalleryItem } from '../types';
import { ASSETS, CLIENT_LOGOS, GALLERY_ROWS } from '../data/mockData';
import { GalleryLightboxModal } from '../components/GalleryLightboxModal';
import { ArrowRight, Calendar, Sparkles, ChevronRight, Maximize2, ShieldCheck, Film, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Calculate years served dynamically or explicitly from 2009
  const currentYear = 2026;
  const startYear = 2009;
  const yearsServed = currentYear - startYear; // 17 years

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background photo with measured contrast scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.hero}
            alt="FLY - fill your moment high-end production soundstage"
            className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          {/* Measured gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center sm:text-left flex flex-col justify-center min-h-[75vh]">
          <div className="max-w-3xl space-y-6">
            {/* Quiet gold kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              <span>Established 2009</span>
              <span aria-hidden="true">·</span>
              <span>FLY — fill your moment</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              We sculpt light into unforgettable cinema and enduring still imagery.
            </h1>

            {/* Opening Subtitle */}
            <p className="text-lg sm:text-xl text-emerald-100/90 font-light leading-relaxed max-w-2xl text-balance">
              Award-winning photography & videography house partnering with visionary architects, global luxury brands, and creative directors to craft iconic visual narratives.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  onNavigate('appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-md bg-[#D4AF37] text-emerald-950 hover:bg-[#E2BE4A] transition-all duration-200 shadow-xl shadow-[#D4AF37]/25 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onNavigate('work');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-widest rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md transition-colors duration-200"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Subtle bottom scroll prompt */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-200/80">
          <span>Scroll to Discover</span>
        </div>
      </section>

      {/* 2. TWO-COLUMN SECTION: LEFT BIG TEXT INTRO & RIGHT SHORT DESCRIPTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-emerald-100 pt-16">
          {/* Left Column: Big text intro */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C59B27]">
              01 · The Creative Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-950 leading-[1.15] text-balance">
              We do not simply record moments. We engineer visual identities that command global attention.
            </h2>
          </div>

          {/* Right Column: Short description */}
          <div className="lg:col-span-5 space-y-6 lg:pt-4 text-zinc-600 text-base sm:text-lg leading-relaxed">
            <p>
              Founded in 2009 in a converted industrial warehouse loft, FLY — fill your moment has evolved into an internationally acclaimed creative photography and videography studio. We unite large-format anamorphic motion, medium-format editorial still life, and bespoke 16-bit color science.
            </p>
            <p className="text-sm text-zinc-500">
              From high-tension automotive commercials to tranquil architectural twilight surveys, every frame is sculpted with rigorous compositional math, proprietary optics, and organic light.
            </p>
            <div>
              <button
                type="button"
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <span>Read Our Milestones & Origins</span>
                <ChevronRight className="w-4 h-4 text-[#C59B27]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR-COLUMN SECTION: 2009, CLIENT COUNT, PROJECTS COMPLETED, YEARS SERVED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50/70 rounded-2xl border border-emerald-100 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 lg:divide-x divide-emerald-200/80">
            {/* Stat 1: Started serving from 2009 */}
            <div className="pt-6 sm:pt-0 lg:px-6 first:pl-0 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-800/80 block font-semibold">
                Heritage Inception
              </span>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 tabular-nums">
                2009
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-snug">
                Serving visionary clients continuously since 2009 with analog and digital mastery.
              </p>
            </div>

            {/* Stat 2: Count clients */}
            <div className="pt-6 sm:pt-0 lg:px-6 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-800/80 block font-semibold">
                Client Roster
              </span>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#C59B27] tabular-nums">
                850+
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-snug">
                Global brand directors, architectural firms, and editorial publications served.
              </p>
            </div>

            {/* Stat 3: Projects completed */}
            <div className="pt-6 sm:pt-0 lg:px-6 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-800/80 block font-semibold">
                Deliverables Archive
              </span>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 tabular-nums">
                1,420+
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-snug">
                Completed commercial films, spatial photography suites, and national campaigns.
              </p>
            </div>

            {/* Stat 4: How many years already served */}
            <div className="pt-6 sm:pt-0 lg:px-6 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-800/80 block font-semibold">
                Continuous Service
              </span>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#C59B27] tabular-nums">
                {yearsServed}+
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-snug">
                Years of dedicated studio excellence, unbroken creative continuity, and trusted craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENT LOGO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-800/80 font-semibold">
            Selected Patrons & Commissioning Partners
          </span>
          <h3 className="text-xl font-bold text-emerald-950">
            Trusted by the world's most exacting design and commercial leaders
          </h3>
        </div>

        {/* Clean client logos grid on white */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50/50 hover:shadow-md transition-all flex flex-col items-center justify-center text-center space-y-1.5"
            >
              <span className="text-base sm:text-lg font-bold tracking-widest uppercase text-emerald-950 group-hover:text-emerald-700 transition-colors">
                {client.name}
              </span>
              <span className="text-[11px] text-zinc-500 font-mono">
                {client.descriptor}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GALLERY SECTION IN 3 ROWS WITH PICTURE & SHORT DESCRIPTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-emerald-100 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C59B27]">
              Curated Production Archive
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
              Selected Frames in 3 Curated Series
            </h2>
            <p className="text-sm text-zinc-600 max-w-xl">
              A 3-row journey through our motion captures, architectural twilight studies, and haute couture editorial monographs.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              onNavigate('work');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 hover:text-emerald-700 transition-colors"
          >
            <span>View Full Filterable Portfolio</span>
            <ArrowRight className="w-4 h-4 text-[#C59B27]" />
          </button>
        </div>

        {/* 3 Distinct Thematic Gallery Rows */}
        <div className="space-y-16">
          {GALLERY_ROWS.map((row, rowIdx) => (
            <div key={rowIdx} className="space-y-6">
              {/* Row Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-l-3 border-[#D4AF37] pl-4">
                <h3 className="text-xl font-bold text-emerald-950">
                  {row.rowTitle}
                </h3>
                <p className="text-xs text-zinc-500 max-w-md">
                  {row.rowDescription}
                </p>
              </div>

              {/* 3 Cards for this row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {row.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedGalleryItem(item)}
                    className="group cursor-pointer rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col shadow-sm hover:shadow-xl"
                  >
                    {/* Image frame */}
                    <div className="relative aspect-[4/3] bg-emerald-50 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                      {/* Top right quick zoom affordance */}
                      <div className="absolute top-3 right-3 p-2 rounded-md bg-white/90 text-emerald-900 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-xs">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>

                      {/* Category Tag */}
                      <div className="absolute bottom-3 left-3 text-[11px] font-mono text-emerald-950 bg-white/90 px-2 py-0.5 rounded backdrop-blur-sm border border-emerald-100 font-semibold shadow-xs">
                        {item.category}
                      </div>
                    </div>

                    {/* Card Content with picture & short description */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <h4 className="text-base font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-emerald-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                        <span>{item.exif.focal}</span>
                        <span className="text-emerald-800 font-sans font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                          View Frame Specs &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onBookAppointment={() => {
          setSelectedGalleryItem(null);
          onNavigate('appointment');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
};
