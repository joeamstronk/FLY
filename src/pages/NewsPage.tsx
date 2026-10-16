import React, { useState } from 'react';
import { Page, NewsArticle } from '../types';
import { NEWS_ARTICLES } from '../data/mockData';
import { Search, Calendar, Clock, ArrowRight, X, BookOpen, Share2 } from 'lucide-react';

interface NewsPageProps {
  onNavigate: (page: Page) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<NewsArticle | null>(null);

  const categories = [
    'all',
    'Behind The Scenes',
    'Gear & Tech',
    'Studio News',
    'Industry Insights',
  ];

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesCat =
      selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredArticle = NEWS_ARTICLES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 pb-24 bg-white">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C59B27] font-semibold">
          <span>Journal & Field Reports</span>
          <span aria-hidden="true">·</span>
          <span>FLY — fill your moment</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 leading-[1.1] text-balance">
          News, Optics & Behind the Lens
        </h1>
        <p className="text-base sm:text-lg text-emerald-900/80 leading-relaxed">
          Dispatches from our soundstages, lighting experiments, architectural twilight expeditions, and cinematography awards.
        </p>
      </div>

      {/* Featured Lead Story on White with Emerald Accents */}
      {featuredArticle && selectedCategory === 'all' && !searchQuery && (
        <div
          onClick={() => setReadingArticle(featuredArticle)}
          className="group cursor-pointer rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-xl"
        >
          <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px] bg-emerald-50">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute top-4 left-4 text-xs font-mono text-emerald-950 bg-white/95 px-3 py-1 rounded backdrop-blur-md border border-emerald-100 font-semibold shadow-xs">
              Featured Story · {featuredArticle.category}
            </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
                <span>{featuredArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors leading-snug">
                {featuredArticle.title}
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-emerald-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-950 block">
                  {featuredArticle.author.name}
                </span>
                <span className="text-[11px] text-zinc-500">
                  {featuredArticle.author.role}
                </span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 group-hover:text-emerald-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 text-[#C59B27]" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-emerald-100">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-900/80 hover:bg-emerald-100/70 border border-emerald-200'
              }`}
            >
              {cat === 'all' ? 'All Articles' : cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700" />
          <input
            type="text"
            placeholder="Search news, gear & insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-emerald-200 rounded-lg pl-9 pr-3 py-2 text-xs text-emerald-950 placeholder-emerald-800/40 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-xs"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => setReadingArticle(article)}
            className="group cursor-pointer rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-1 shadow-xs hover:shadow-md"
          >
            <div className="space-y-4">
              <div className="relative aspect-[16/9] bg-emerald-50 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 text-[11px] font-mono text-emerald-950 bg-white/95 px-2.5 py-0.5 rounded backdrop-blur-sm border border-emerald-100 font-semibold shadow-xs">
                  {article.category}
                </div>
              </div>

              <div className="px-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-4 mt-4 border-t border-emerald-100 flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-medium">
                By {article.author.name}
              </span>
              <span className="text-emerald-900 group-hover:text-emerald-700 font-bold uppercase tracking-wider inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read</span>
                <span className="text-[#C59B27]">&rarr;</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal in Clean White with Emerald Details */}
      {readingArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-emerald-950/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setReadingArticle(null)}
        >
          <div
            className="w-full max-w-3xl bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-100 bg-emerald-50/70">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C59B27] font-semibold">
                FLY Journal · {readingArticle.category}
              </span>
              <button
                onClick={() => setReadingArticle(null)}
                className="p-1.5 text-zinc-400 hover:text-emerald-950 rounded-lg hover:bg-emerald-100/60 transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
                  <span>{readingArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{readingArticle.readTime}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-emerald-950 leading-tight">
                  {readingArticle.title}
                </h1>
                <div className="pt-1 text-xs text-zinc-500 font-medium">
                  By {readingArticle.author.name}, {readingArticle.author.role}
                </div>
              </div>

              {/* Cover */}
              <div className="rounded-xl overflow-hidden aspect-video bg-emerald-50 border border-emerald-100 shadow-xs">
                <img
                  src={readingArticle.image}
                  alt={readingArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Prose paragraphs */}
              <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
                {readingArticle.content.map((p, idx) => (
                  <p key={idx} className="first:text-lg first:font-medium first:text-emerald-950">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-emerald-100 bg-emerald-50/50 flex items-center justify-between">
              <span className="text-xs text-emerald-800 font-medium">
                Published by FLY Editorial Board
              </span>
              <button
                onClick={() => setReadingArticle(null)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md bg-emerald-900 text-white hover:bg-emerald-800 transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
