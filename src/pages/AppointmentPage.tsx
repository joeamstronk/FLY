import React, { useState, useEffect } from 'react';
import { Page, AppointmentBooking } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  Home,
  Lightbulb,
  FileText,
  User,
  Mail,
  Phone,
  CheckCircle2,
  CalendarCheck,
  Download,
  Trash2,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
} from 'lucide-react';

interface AppointmentPageProps {
  onNavigate: (page: Page) => void;
}

const STORAGE_KEY = 'fly_cinema_appointments_v1';

export const AppointmentPage: React.FC<AppointmentPageProps> = ({ onNavigate }) => {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:00 AM (Golden Morning)');
  const [property, setProperty] = useState('Luxury Architectural Residence');
  const [concept, setConcept] = useState('Twilight Architectural & Drone Cinema');
  const [note, setNote] = useState('');
  const [estimatedDuration, setEstimatedDuration] = useState('Full Day Production (8h - 10h)');

  // App state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successBooking, setSuccessBooking] = useState<AppointmentBooking | null>(null);
  const [pastBookings, setPastBookings] = useState<AppointmentBooking[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Load bookings from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPastBookings(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  const timeSlots = [
    '06:30 AM (Dawn & Sunrise Light)',
    '09:00 AM (Golden Morning)',
    '01:00 PM (Midday Interior & Studio)',
    '04:30 PM (Golden Hour)',
    '06:45 PM (Twilight Blue Hour)',
    '08:30 PM (Night & Controlled Tungsten)',
  ];

  const propertyOptions = [
    'Luxury Architectural Residence / Villa',
    'Commercial Soundstage / Studio Stage 4',
    'Automotive Track / Brutalist Compound',
    'Corporate Headquarters / Penthouse',
    'Hospitality / Boutique Hotel Resort',
    'Natural Outdoor Landscape / Coastal Cliff',
  ];

  const conceptOptions = [
    'Twilight Architectural & Drone Cinema',
    'Commercial Hypercar / Brand Campaign',
    'Haute Couture / High-Fashion Editorial',
    'Macro Product / Industrial Design Stills',
    'Documentary Interview & Executive Stills',
    'Bespoke Multi-Day Custom Production',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid corporate or personal email.');
      return;
    }
    if (!address.trim()) {
      setErrorMessage('Please specify the location or property address.');
      return;
    }
    if (!date) {
      setErrorMessage('Please pick your desired production or consultation date.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newBooking: AppointmentBooking = {
        id: `FLY-${Math.floor(100000 + Math.random() * 900000)}`,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || 'Not provided',
        address: address.trim(),
        dateTime: `${date} at ${timeSlot}`,
        property,
        concept,
        note: note.trim() || 'No additional notes provided',
        createdAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        status: 'Confirmed',
        estimatedDuration,
      };

      const updated = [newBooking, ...pastBookings];
      setPastBookings(updated);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }

      setSuccessBooking(newBooking);
      setIsSubmitting(false);

      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setDate('');
      setNote('');

      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 600);
  };

  const handleDeleteBooking = (id: string) => {
    const updated = pastBookings.filter((b) => b.id !== id);
    setPastBookings(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    if (successBooking?.id === id) {
      setSuccessBooking(null);
    }
  };

  const handleDownloadICS = (booking: AppointmentBooking) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//FLY - fill your moment//Production Booking//EN
BEGIN:VEVENT
UID:${booking.id}@fly-fillyourmoment.studio
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:FLY Production Shoot: ${booking.concept}
DESCRIPTION:Client: ${booking.name}\\nConcept: ${booking.concept}\\nProperty: ${booking.property}\\nLocation: ${booking.address}\\nNotes: ${booking.note || 'None'}
LOCATION:${booking.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `FLY-Shoot-${booking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 pb-24 bg-white">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C59B27] font-semibold">
          <Calendar className="w-3.5 h-3.5" />
          <span>Production Consultation & Commissioning · FLY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 leading-[1.1] text-balance">
          Book an Appointment
        </h1>
        <p className="text-base sm:text-lg text-emerald-900/80 leading-relaxed">
          Reserve studio stage time, on-location cinematography, or architectural documentation. Our executive producer will review your vision and confirm crew availability within 24 hours.
        </p>
      </div>

      {/* Main Grid: Form Left, Booking Preview & Details Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form: All requested fields on clean white card */}
        <div className="lg:col-span-7 bg-white border border-emerald-100 rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="border-b border-emerald-100 pb-4">
            <h2 className="text-xl font-bold text-emerald-950">
              Appointment Inquiry Form
            </h2>
            <p className="text-xs text-emerald-800/80 mt-1">
              All production scopes are treated with strict confidentiality (NDA compatible).
            </p>
          </div>

          {errorMessage && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 font-medium">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C59B27]" />
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Helena Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-950 placeholder-emerald-800/40 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-xs"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-950 placeholder-emerald-800/40 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-xs"
                />
              </div>
            </div>

            {/* Phone & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  Direct Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 019-2834"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-950 placeholder-emerald-800/40 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-xs"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  Estimated Duration
                </label>
                <select
                  value={estimatedDuration}
                  onChange={(e) => setEstimatedDuration(e.target.value)}
                  className="w-full bg-white border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-950 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-xs"
                >
                  <option value="Half Day Session (4h)">Half Day Session (4h)</option>
                  <option value="Full Day Production (8h - 10h)">Full Day Production (8h - 10h)</option>
                  <option value="Multi-Day Campaign (2 - 5 Days)">Multi-Day Campaign (2 - 5 Days)</option>
                  <option value="Preliminary Creative Consultation (1h)">Preliminary Creative Consultation (1h)</option>
                </select>
              </div>
            </div>

            {/* 2. Address / Location */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
                Shooting Address or Location *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 1042 Ocean View Bluff, Malibu, CA or FLY Studio Stage 4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-white border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-950 placeholder-emerald-800/40 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-xs"
              />
              <span className="text-[11px] text-zinc-500 block">
                Provide the physical property address, or enter "FLY Studio LA / London" for soundstage hire.
              </span>
            </div>

            {/* 3. Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                  Preferred Shoot Date *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min="2026-01-01"
                  className="w-full bg-white border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-950 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-xs"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                  Lighting / Time Slot *
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-white border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-950 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-xs"
                >
                  {timeSlots.map((ts, idx) => (
                    <option key={idx} value={ts}>
                      {ts}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 4. Property Type */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#C59B27]" />
                Property / Production Setting *
              </label>
              <select
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                className="w-full bg-white border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-950 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-xs"
              >
                {propertyOptions.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* 5. Concept */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-[#C59B27]" />
                Concept & Visual Direction *
              </label>
              <select
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
                className="w-full bg-white border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-950 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-xs"
              >
                {conceptOptions.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* 6. Leave Note */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-700" />
                Leave Note / Specific Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Include moodboard references, specific camera packages, talent details, or access logistics..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-white border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-950 placeholder-emerald-800/40 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors resize-none shadow-xs"
              />
            </div>

            {/* Submit Button in Gold */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-md bg-[#D4AF37] hover:bg-[#E2BE4A] text-emerald-950 text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <span>Recording Appointment...</span>
                ) : (
                  <>
                    <CalendarCheck className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Active Confirmation & Studio Standards */}
        <div className="lg:col-span-5 space-y-8">
          {/* Success Banner if just submitted */}
          {successBooking && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-4 animate-in fade-in duration-300 shadow-md">
              <div className="flex items-center gap-2 text-[#C59B27] text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Appointment Confirmed</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-950">
                Booking Reference: {successBooking.id}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Thank you, <strong className="text-emerald-950">{successBooking.name}</strong>. Our production producer has received your request for <strong className="text-emerald-950">{successBooking.concept}</strong>.
              </p>

              <div className="p-4 bg-white rounded-lg border border-emerald-100 space-y-2 text-xs shadow-xs">
                <div className="flex justify-between text-zinc-600">
                  <span>Scheduled Date:</span>
                  <span className="text-emerald-950 font-mono font-bold">{successBooking.dateTime}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Property:</span>
                  <span className="text-emerald-950 font-medium">{successBooking.property}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Location:</span>
                  <span className="text-emerald-950">{successBooking.address}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleDownloadICS(successBooking)}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-md bg-emerald-900 hover:bg-emerald-800 text-white flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Download .ICS Calendar Event</span>
                </button>
              </div>
            </div>
          )}

          {/* Studio Guarantee & Booking Standards */}
          <div className="bg-white border border-emerald-100 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C59B27]" />
              <span>Studio Production Guarantee</span>
            </h3>

            <div className="space-y-4 text-xs text-zinc-600">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 text-[#C59B27] font-mono text-[10px] font-bold">
                  01
                </div>
                <div>
                  <strong className="text-emerald-950 block">Dedicated Director of Photography</strong>
                  Every commission is led by a named senior director or principal photographer with master optics.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 text-[#C59B27] font-mono text-[10px] font-bold">
                  02
                </div>
                <div>
                  <strong className="text-emerald-950 block">Full Equipment Redundancy</strong>
                  Dual camera bodies, backup lenses, on-site generator power, and instant RAID storage backup.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 text-[#C59B27] font-mono text-[10px] font-bold">
                  03
                </div>
                <div>
                  <strong className="text-emerald-950 block">Rapid Archival Turnaround</strong>
                  High-res contact sheets in 48 hours; master 16-bit color graded deliverables within 10 business days.
                </div>
              </div>
            </div>
          </div>

          {/* Past Bookings from Local Storage on Clean White */}
          {pastBookings.length > 0 && (
            <div className="bg-white border border-emerald-100 rounded-2xl p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-950 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#C59B27]" />
                  Your Active Bookings ({pastBookings.length})
                </h4>
              </div>

              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                {pastBookings.map((b) => (
                  <div
                    key={b.id}
                    className="p-3.5 rounded-lg bg-emerald-50/50 border border-emerald-100 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-950 font-mono">
                        {b.id}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-emerald-900 font-bold bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                          {b.status}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleDeleteBooking(b.id)}
                          className="text-zinc-400 hover:text-red-500 p-1 transition-colors"
                          title="Cancel/Remove booking"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-emerald-950 font-medium">
                      {b.concept}
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      {b.dateTime} · {b.property}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
