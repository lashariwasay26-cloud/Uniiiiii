import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FloatingIconsGateway } from './components/FloatingIconsGateway';
import { ScholarshipPage } from './components/ScholarshipPage';
import { SatLandingView } from './components/SatLandingView';
import { SatIntroductionView } from './components/SatIntroductionView';
import { SatPreparationHub } from './components/hubs/SatPreparationHub';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingAssistantBubble } from './components/FloatingAssistantBubble';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'scholarship' | 'sat-landing' | 'sat-intro' | 'sat-learning'>('home');
  const [satCategory, setSatCategory] = useState<'reading' | 'writing' | 'math' | 'drills'>('reading');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#f6f8fc] text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white relative">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 pt-2 sm:pt-4">
        {currentView === 'home' && (
          <>
            <FloatingIconsGateway
              onOpenScholarships={() => setCurrentView('scholarship')}
              onOpenSatPrep={() => setCurrentView('sat-landing')}
            />
            <FaqSection />
          </>
        )}

        {currentView === 'scholarship' && (
          <ScholarshipPage onBackToHome={() => setCurrentView('home')} />
        )}

        {currentView === 'sat-landing' && (
          <SatLandingView
            onBackToHome={() => setCurrentView('home')}
            onSelectIntro={() => setCurrentView('sat-intro')}
            onSelectLearning={(category) => {
              if (category) setSatCategory(category);
              setCurrentView('sat-learning');
            }}
          />
        )}

        {currentView === 'sat-intro' && (
          <SatIntroductionView
            onBackToHome={() => setCurrentView('sat-landing')}
            onStartLearning={() => {
              setSatCategory('reading');
              setCurrentView('sat-learning');
            }}
          />
        )}

        {currentView === 'sat-learning' && (
          <SatPreparationHub
            initialCategory={satCategory}
            onBackToHome={() => setCurrentView('sat-landing')}
          />
        )}
      </main>

      {/* Floating Action Assistant Bubble */}
      <FloatingAssistantBubble onOpenScholarships={() => setCurrentView('scholarship')} />

      {/* Footer shown only on home */}
      {currentView === 'home' && <Footer />}
    </div>
  );
}




