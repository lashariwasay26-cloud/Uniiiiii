import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="app-navbar" className="sticky top-0 z-50 bg-[#f6f8fc]/90 backdrop-blur-md border-b border-slate-200/50 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo matching image: Dark 'U' box + Uni Route text */}
        <div
          id="nav-brand-logo"
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl bg-slate-950 text-white font-extrabold text-xl flex items-center justify-center shadow-md">
            U
          </div>
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-950">
            Uni Route
          </span>
        </div>

        {/* Hamburger Menu Button (Matching Image Exactly) */}
        <button
          id="btn-hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-colors"
          title="Menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Simple drawer/menu placeholder if clicked */}
      {isMenuOpen && (
        <div className="bg-white border-b border-slate-200/80 shadow-lg px-6 py-4 text-center text-xs font-semibold text-slate-600">
          Uni Route Education Gateway — Single-Page Dashboard
        </div>
      )}
    </header>
  );
};


