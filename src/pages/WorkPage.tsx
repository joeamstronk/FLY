import React, { useState } from 'react';
import { Page, Project } from '../types';
import { PROJECTS } from '../data/mockData';
import { ProjectDetailModal } from '../components/ProjectDetailModal';
import { Filter, ArrowUpRight, Play, Eye, Sparkles } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: Page) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'commercial', label: 'Commercial & Motion' },
    { id: 'architecture', label: 'Architecture & Property' },
    { id: 'fashion', label: 'Fashion & Editorial' },
    { id: 'film', label: 'Motion & Film' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 pb-24 bg-white">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C59B27] font-semibold">
          <span>Case Study Portfolio</span>
          <span aria-hidden="true">·</span>
          <span>FLY — fill your moment</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 leading-[1.1] text-balance">
          Our Best Case Studies & Visual Works
        </h1>
        <p className="text-base sm:text-lg text-emerald-900/80 leading-relaxed">
          Deep-dive monographs into our commissioned commercial films, spatial architectural documentation, and haute couture editorial narratives.
        </p>
      </div>

      {/* Filterable Category Tabs (Interactive buttons with majority green theme) */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-emerald-50/80 rounded-xl border border-emerald-100 w-fit">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] ${
                isActive
                  ? 'bg-emerald-900 text-white shadow-sm font-bold'
                  : 'text-emerald-900/80 hover:text-emerald-950 hover:bg-emerald-100/60'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Case Studies Grid on Clean White */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl"
          >
            {/* Visual Header */}
            <div className="relative aspect-[16/10] bg-emerald-50 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* View Overlay Button in Gold */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-emerald-950/30 backdrop-blur-[2px]">
                <div className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-emerald-950 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl scale-95 group-hover:scale-100 transition-transform">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Case Study</span>
                </div>
              </div>

              {/* Unboxed Metadata in corner */}
              <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-emerald-950 bg-white/95 px-3 py-1 rounded backdrop-blur-md border border-emerald-100 font-semibold shadow-xs">
                <span>{project.categoryLabel}</span>
                <span aria-hidden="true" className="text-emerald-400">·</span>
                <span className="text-[#C59B27] font-bold">{project.year}</span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-mono text-emerald-800 font-semibold">
                  Commission: {project.client}
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {/* Deliverables snippet & Link */}
              <div className="pt-4 border-t border-emerald-100 flex items-center justify-between text-xs">
                <span className="text-emerald-800 font-mono font-medium">
                  {project.deliverables.length} Deliverables Mastered
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-900 group-hover:text-emerald-700 font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C59B27]" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Detailed Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookAppointment={() => {
          setSelectedProject(null);
          onNavigate('appointment');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
};
