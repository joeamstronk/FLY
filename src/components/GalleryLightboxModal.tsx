import React from 'react';
import { GalleryItem } from '../types';
import { X, Aperture, Clock, Sliders, Maximize2 } from 'lucide-react';

interface GalleryLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onBookAppointment: () => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  item,
  onClose,
  onBookAppointment,
}) => {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-emerald-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-100 bg-emerald-50/70">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B27] font-mono">
              {item.category} Frame
            </span>
            <h3 id="gallery-modal-title" className="text-lg font-bold text-emerald-950">
              {item.title}
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

        {/* Modal body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="relative rounded-xl overflow-hidden bg-emerald-950/5 aspect-video max-h-[55vh] flex items-center justify-center border border-emerald-100">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C59B27] font-mono">
                Visual Concept & Notes
              </h4>
              <p className="text-zinc-700 text-sm leading-relaxed">
                {item.description}
              </p>
              <p className="text-emerald-800 text-xs italic font-medium">
                {item.subtitle}
              </p>
            </div>

            {/* Technical EXIF data */}
            <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100 space-y-3">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5 font-mono">
                <Sliders className="w-3.5 h-3.5 text-[#C59B27]" /> Technical Capture Log
              </h5>
              <div className="space-y-2 text-xs font-mono tabular-nums text-zinc-600">
                <div className="flex justify-between border-b border-emerald-100 pb-1">
                  <span>Shutter:</span>
                  <span className="text-emerald-950 font-bold">{item.exif.shutter}</span>
                </div>
                <div className="flex justify-between border-b border-emerald-100 pb-1">
                  <span>Aperture:</span>
                  <span className="text-emerald-950 font-bold">{item.exif.aperture}</span>
                </div>
                <div className="flex justify-between border-b border-emerald-100 pb-1">
                  <span>ISO Sens.:</span>
                  <span className="text-emerald-950 font-bold">{item.exif.iso}</span>
                </div>
                <div className="flex justify-between">
                  <span>Optics / Focal:</span>
                  <span className="text-emerald-950 font-bold">{item.exif.focal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-emerald-100 bg-emerald-50/50 flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-mono">
            FLY — fill your moment Archival Frame
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-emerald-900 hover:text-emerald-950 transition-colors"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                onClose();
                onBookAppointment();
              }}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md bg-[#D4AF37] text-emerald-950 hover:bg-[#E2BE4A] transition-colors shadow-sm"
            >
              Inquire Similar Shoot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
