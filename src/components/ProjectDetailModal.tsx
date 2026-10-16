import React, { useState } from 'react';
import { Project } from '../types';
import { X, Calendar, MapPin, Camera, Video, Film, CheckCircle2, Play, Pause } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onBookAppointment: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onBookAppointment,
}) => {
  const [isPlayingReel, setIsPlayingReel] = useState(false);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-emerald-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-100 bg-emerald-50/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C59B27]">
              <span>{project.categoryLabel}</span>
              <span>·</span>
              <span className="text-emerald-900 font-bold">{project.year}</span>
            </div>
            <h3 id="project-modal-title" className="text-xl font-bold text-emerald-950">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-emerald-950 rounded-lg hover:bg-emerald-100/60 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual or Simulated Reel */}
          <div className="relative rounded-xl overflow-hidden bg-emerald-50 aspect-video max-h-[50vh] border border-emerald-100 group">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isPlayingReel ? 'scale-105 filter brightness-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Reel playback simulation overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setIsPlayingReel(!isPlayingReel)}
                className="px-5 py-3 rounded-full bg-emerald-950/85 hover:bg-[#D4AF37] hover:text-emerald-950 border border-emerald-700/60 text-white flex items-center gap-3 backdrop-blur-md transition-all shadow-xl group-hover:scale-105"
                aria-label={isPlayingReel ? 'Pause 4K Master Reel' : 'Play 4K Master Reel'}
              >
                {isPlayingReel ? (
                  <>
                    <Pause className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Simulated 4K Master Playing</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-current text-[#D4AF37]" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Play 4K Director Cut Teaser</span>
                  </>
                )}
              </button>
            </div>

            {/* Bottom tag strip */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
              <span className="flex items-center gap-1.5 bg-emerald-950/80 px-3 py-1 rounded backdrop-blur-sm border border-emerald-800">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {project.location}
              </span>
              <span className="bg-emerald-950/80 px-3 py-1 rounded backdrop-blur-sm border border-emerald-800 font-mono text-emerald-200">
                Client: {project.client}
              </span>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C59B27] mb-2 font-mono">
                  Executive Brief & Visual Narrative
                </h4>
                <p className="text-zinc-700 text-base leading-relaxed">
                  {project.fullDesc}
                </p>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C59B27] mb-3 font-mono">
                  Scope & Produced Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.deliverables.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 text-xs text-emerald-950 bg-emerald-50/70 p-3 rounded-lg border border-emerald-100 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              {project.testimonial && (
                <div className="p-5 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-2">
                  <p className="text-zinc-700 text-sm italic leading-relaxed">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="text-xs text-[#C59B27] font-bold">
                    {project.testimonial.author} · <span className="text-zinc-500 font-normal">{project.testimonial.role}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Technical Specification Box */}
            <div className="space-y-4">
              <div className="p-5 bg-emerald-50/70 rounded-xl border border-emerald-100 space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-2 font-mono">
                  <Film className="w-4 h-4 text-[#C59B27]" /> Production Rig Spec
                </h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-emerald-800 block uppercase font-mono text-[10px] font-semibold">Camera System</span>
                    <span className="text-emerald-950 font-bold">{project.equipment.camera}</span>
                  </div>
                  <div>
                    <span className="text-emerald-800 block uppercase font-mono text-[10px] font-semibold">Cine Glass & Focal</span>
                    <span className="text-emerald-950 font-bold">{project.equipment.lenses}</span>
                  </div>
                  <div>
                    <span className="text-emerald-800 block uppercase font-mono text-[10px] font-semibold">Lighting Design</span>
                    <span className="text-emerald-950 font-bold">{project.equipment.lighting}</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking Bridge */}
              <div className="p-5 bg-emerald-900 rounded-xl text-center space-y-3 shadow-md text-white">
                <h5 className="text-sm font-bold text-white">
                  Planning a Similar Production?
                </h5>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Discuss concept, crew availability, and custom rate cards with our team.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookAppointment();
                  }}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-md bg-[#D4AF37] text-emerald-950 hover:bg-[#E2BE4A] transition-colors shadow-sm"
                >
                  Book Production Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-emerald-100 bg-emerald-50/50 flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-mono">
            FLY Archive #{project.id.toUpperCase()}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-emerald-900 hover:text-emerald-950 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
