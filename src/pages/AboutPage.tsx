import React, { useState } from 'react';
import { Page, TeamMember } from '../types';
import { ASSETS, MILESTONES, TEAM_MEMBERS } from '../data/mockData';
import { Calendar, Award, Camera, Film, Compass, CheckCircle2, ChevronRight, X } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 bg-white">
      {/* 1. Header & Introductory Photo Collage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C59B27] font-semibold">
            <span>Heritage & Studio Origins</span>
            <span aria-hidden="true">·</span>
            <span>FLY — fill your moment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 leading-[1.1] text-balance">
            Seventeen years of optical devotion, raw narrative, and architectural reverence.
          </h1>
          <p className="text-base sm:text-lg text-emerald-900/80 leading-relaxed">
            What began in 2009 as an experimental darkroom and 35mm film studio in Los Angeles has matured into FLY — fill your moment: an internationally commissioned commercial photography, videography, and architectural documentation house.
          </p>
        </div>

        {/* Curated Photo Collage on Clean White Background */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-100 min-h-[340px] md:min-h-[480px] shadow-md group">
            <img
              src={ASSETS.aboutSet}
              alt="FLY film set in active production"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block font-semibold">
                  Studio Soundstage 4 · Los Angeles
                </span>
                <h3 className="text-xl font-bold text-white">
                  Organic Directing & Real-Time Blocking
                </h3>
              </div>
              <span className="hidden sm:inline-block text-xs font-mono text-emerald-100 bg-emerald-950/80 px-3 py-1 rounded backdrop-blur-sm border border-emerald-800">
                ARRI Alexa 35 · 50mm Prime
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-100 flex-1 min-h-[200px] shadow-sm">
              <img
                src={ASSETS.hero}
                alt="Lighting rig and cinema optics"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-semibold text-white">Precision Tungsten Lighting Rig</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C59B27] font-semibold">Our Studio Manifesto</span>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed italic">
                  "Every frame must possess weight. We reject disposable visual trends in favor of timeless contrast, sculptural clarity, and tactile emotional resonance."
                </p>
              </div>
              <div className="pt-4 flex items-center gap-3 text-xs text-emerald-800 border-t border-emerald-200/80">
                <Award className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span className="font-semibold">ICG Local 600 · Cannes Corporate Gold</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Milestones Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3 border-b border-emerald-100 pb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C59B27] font-semibold">
            Heritage & Evolution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            Our Milestones: 2009 to Present
          </h2>
          <p className="text-sm text-emerald-900/70 max-w-2xl">
            Key chapters in our seventeen-year journey of craftsmanship, technical innovation, and global expansion.
          </p>
        </div>

        {/* Timeline Items on Clean White Background */}
        <div className="relative border-l-2 border-emerald-200 ml-4 sm:ml-8 space-y-10">
          {MILESTONES.map((milestone, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 group">
              {/* Year marker on timeline with Gold Accent */}
              <div className="absolute -left-[15px] top-1.5 w-7 h-7 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              </div>

              <div className="bg-white border border-emerald-100 rounded-xl p-6 sm:p-7 hover:border-emerald-300 hover:shadow-md transition-all space-y-3 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-[#C59B27] font-mono tabular-nums">
                      {milestone.year}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
                      {milestone.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
                  {milestone.title}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Team Profiles with Their Specialties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3 border-b border-emerald-100 pb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C59B27] font-semibold">
            Core Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            Our Team Profiles & Specialties
          </h2>
          <p className="text-sm text-emerald-900/70 max-w-2xl">
            Directors, medium-format photographers, drone commanders, and master colorists dedicated to every commission.
          </p>
        </div>

        {/* 3-in-a-row Grid for Team Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-emerald-100 rounded-xl p-6 sm:p-7 hover:border-emerald-300 flex flex-col justify-between space-y-6 transition-all hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-emerald-950">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#C59B27] font-bold">
                      {member.role}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-semibold tabular-nums">
                    {member.experienceYears} yrs exp.
                  </span>
                </div>

                {/* Specialty Box */}
                <div className="bg-emerald-50/70 p-3.5 rounded-lg border border-emerald-100 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-semibold block">
                    Discipline Specialty
                  </span>
                  <span className="text-xs font-bold text-emerald-950">
                    {member.specialty}
                  </span>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Gear & Signature */}
              <div className="pt-4 border-t border-emerald-100 space-y-3 text-xs">
                <div>
                  <span className="text-emerald-800 block font-mono text-[10px] uppercase font-semibold">
                    Signature Camera / Rig:
                  </span>
                  <span className="text-emerald-950 font-medium">
                    {member.gearPreference}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-950 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View Profile Details</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BEFORE FOOTER: BIG PHOTO LIKE HERO SECTION WITH BUTTON FOR APPOINTMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[580px] flex items-center justify-center border border-emerald-900 shadow-2xl">
          {/* Big Photo backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src={ASSETS.hero}
              alt="FLY Studio appointment soundstage"
              className="w-full h-full object-cover filter brightness-[0.70] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
            {/* Scrim with Green Tones */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/60 to-emerald-950/40" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              <Calendar className="w-3.5 h-3.5" />
              <span>Initiate Your Production Inquiry</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              Let's create imagery that endures far beyond the season.
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 font-light leading-relaxed max-w-2xl mx-auto text-balance">
              Whether you are launching a global commercial broadcast, documenting architectural masterpieces, or preparing a high-fashion editorial, our directors and crews are available worldwide.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  onNavigate('appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-md bg-[#D4AF37] text-emerald-950 hover:bg-[#E2BE4A] transition-all shadow-xl shadow-[#D4AF37]/25 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Now</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onNavigate('work');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-widest rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-colors"
              >
                <span>Browse Work Archive</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Member Details Modal in Clean White with Emerald & Gold */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="w-full max-w-lg bg-white border border-emerald-100 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#C59B27] font-semibold">
                  Leadership Profile
                </span>
                <h3 className="text-2xl font-bold text-emerald-950">
                  {selectedMember.name}
                </h3>
                <p className="text-xs text-emerald-800 font-semibold mt-1">
                  {selectedMember.role} · {selectedMember.experienceYears} Years Dedicated
                </p>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-1.5 text-zinc-400 hover:text-emerald-950 rounded-lg hover:bg-emerald-50 transition-colors"
                aria-label="Close profile modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-zinc-700 leading-relaxed">
              <p>{selectedMember.bio}</p>
              <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100 space-y-2.5">
                <div className="text-xs">
                  <span className="text-emerald-800 block uppercase font-mono text-[10px] font-semibold">Primary Specialty</span>
                  <span className="text-emerald-950 font-bold">{selectedMember.specialty}</span>
                </div>
                <div className="text-xs">
                  <span className="text-emerald-800 block uppercase font-mono text-[10px] font-semibold">Preferred Optics & Glass</span>
                  <span className="text-emerald-950 font-bold">{selectedMember.gearPreference}</span>
                </div>
                <div className="text-xs">
                  <span className="text-emerald-800 block uppercase font-mono text-[10px] font-semibold">Signature Campaign</span>
                  <span className="text-emerald-950 font-bold">{selectedMember.signatureWork}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-emerald-100">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-4 py-2.5 text-xs font-semibold text-emerald-900 hover:text-emerald-950 rounded-md hover:bg-emerald-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedMember(null);
                  onNavigate('appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md bg-emerald-900 text-white hover:bg-emerald-800 shadow-sm"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
