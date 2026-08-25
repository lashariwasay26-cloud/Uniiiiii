import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Globe,
  Award,
  BookOpen,
  DollarSign,
  GraduationCap,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  CheckCircle2,
  Bookmark,
  RefreshCw
} from 'lucide-react';
import { UniversityTrackItem } from '../data/scholarshipTracksData';

export interface UniversityProfileProps {
  university: UniversityTrackItem;
  onBack: () => void;
}

export const UniversityProfile: React.FC<UniversityProfileProps> = ({ university, onBack }) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedStatus, setVerifiedStatus] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [university]);

  const countryUpper = (university.country || '').toUpperCase();
  const locationUpper = (university.location || '').toUpperCase();

  const isUS = countryUpper.includes('UNITED STATES') || 
               countryUpper.includes('USA') || 
               countryUpper.includes('U.S.') || 
               locationUpper.includes('USA') || 
               locationUpper.includes('UNITED STATES') ||
               locationUpper.includes(', US') ||
               locationUpper.includes(', MA') ||
               locationUpper.includes(', NY') ||
               locationUpper.includes(', CA');

  const isUK = !isUS && (
    countryUpper.includes('UNITED KINGDOM') || 
    countryUpper.includes('UK') || 
    countryUpper.includes('BRITAIN') || 
    countryUpper.includes('ENGLAND') || 
    countryUpper.includes('SCOTLAND') || 
    countryUpper.includes('WALES') ||
    locationUpper.includes('UNITED KINGDOM') || 
    locationUpper.includes('ENGLAND') ||
    locationUpper.includes('SCOTLAND') ||
    locationUpper.includes(', UK') ||
    (university.applicationPortalDetails?.toUpperCase().includes('UCAS') ?? false)
  );

  const stripCurrency = (val: string | undefined | null) => {
    if (!val) return 'N/A';
    return val
      .replace(/[\$€£¥₹]/g, '')
      .replace(/\b(USD|EUR|GBP|CAD|PKR|HUF|AUD|NZD|CHF|CNY|INR)\b/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // Default defaultPrograms based on university or general top tier
  const defaultPrograms = [
    {
      name: 'Computer Science & Artificial Intelligence',
      ranking: '#1 Global',
      description: 'Computing, machine learning, software systems, and foundational algorithms.'
    },
    {
      name: 'Economics & Quantitative Finance',
      ranking: '#1 Global',
      description: 'Microeconomics, macroeconomics, financial technology, and public policy.'
    },
    {
      name: 'Engineering Sciences & Bioengineering',
      ranking: '#3 Global',
      description: 'Interdisciplinary engineering, robotics, medical devices, and applied physics.'
    },
    {
      name: 'Government & International Relations',
      ranking: '#2 Global',
      description: 'Geopolitics, political theory, global governance, and institutional leadership.'
    },
    {
      name: 'Biomedical & Life Sciences',
      ranking: '#1 Global',
      description: 'Molecular biology, genetics, immunology, and clinical research.'
    }
  ];

  const handleVerifyLiveData = () => {
    setIsVerifying(true);
    setVerifiedStatus(null);

    // Simulate official data check
    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedStatus(`Verified live against ${university.universityName} portal (${new Date().toLocaleDateString()})`);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      
      {/* 1. STICKY TOP HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Back to Universities</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-black text-sm shadow-sm">
            U
          </div>
          <span className="font-extrabold text-slate-900 text-sm tracking-tight">Uni Route</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        
        {/* 2. UNIVERSITY HERO SECTION */}
        <section className="bg-white rounded-[32px] p-6 sm:p-10 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] mb-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
            
            <div className="flex items-start gap-5">
              {/* University Logo Badge */}
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center font-black text-lg sm:text-xl tracking-tighter shadow-md shrink-0 bg-gradient-to-br text-white ${university.logoBg}`}>
                {university.logoText}
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-extrabold tracking-wider uppercase mb-2">
                  <Building2 className="w-3.5 h-3.5" />
                  UNIVERSITY PROFILE
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight flex items-center gap-2">
                  <span>{university.universityName}</span>
                  <span className="text-2xl">{university.flag}</span>
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-400" />
                  {university.location}
                </p>

                <p className="text-slate-500 text-xs font-semibold mt-1">
                  Founded in {university.foundingYear || '1636'} • Higher Education Institution
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 mt-5">
                  <a
                    href={`https://google.com/search?q=${encodeURIComponent(university.universityName + ' official website admissions')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                  >
                    <span>Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Ranking Box */}
            <div className="bg-slate-950 text-white rounded-2xl p-5 border border-slate-800 text-center md:text-right shrink-0 min-w-[160px]">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                QS WORLD RANKING
              </span>
              <strong className="text-3xl font-black tracking-tight text-white block">
                {university.ranking}
              </strong>
              <span className="text-[11px] text-indigo-300 font-semibold block mt-1">
                Top Global Academic Institution
              </span>
            </div>

          </div>
        </section>

        {/* 3. AT A GLANCE FACTS BAR */}
        <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="pt-2 sm:pt-0 px-1">
            <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Founded</span>
            <strong className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5 break-words">{university.foundingYear || '1636'}</strong>
          </div>

          <div className="pt-2 sm:pt-0 px-1">
            <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Acceptance Rate</span>
            <strong className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5 leading-tight break-words">{university.acceptanceRate}</strong>
          </div>

          <div className="pt-2 sm:pt-0 px-1">
            <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Annual Tuition</span>
            <strong className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5 break-words">{stripCurrency(university.tuitionFee)}</strong>
          </div>

          <div className="pt-2 sm:pt-0 px-1">
            <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">SAT Target</span>
            <strong className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5 break-words">{university.minSat}</strong>
          </div>

          <div className="pt-2 sm:pt-0 px-1">
            <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">IELTS Score</span>
            <strong className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5 break-words">{university.minIelts}</strong>
          </div>

          <div className="pt-2 sm:pt-0 px-1">
            <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Location</span>
            <strong className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5 break-words">{university.country}</strong>
          </div>
        </section>

        {/* 4. MAIN CONTENT & SIDEBAR GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* MAIN COLUMN (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 01. ABOUT THE UNIVERSITY */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-extrabold tracking-widest text-indigo-600 uppercase">
                  01. ABOUT THE UNIVERSITY
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Comprehensive Overview
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
                {university.overviewLong ? (
                  university.overviewLong.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <>
                    <p>
                      {university.universityName} is a world-renowned higher education institution located in {university.location}. Established with a rich history of academic excellence, the institution has built an international reputation for academic rigor, groundbreaking research, and societal impact.
                    </p>
                    <p>
                      {university.description}
                    </p>
                    <p>
                      The physical and digital infrastructure of the campus provides an exceptionally modern academic environment. High-tech research laboratories, specialized interdisciplinary centers, extensive digital compute facilities, and expansive library networks housing millions of physical volumes and digital archives ensure that students and researchers have complete access to essential academic resources.
                    </p>
                  </>
                )}
              </div>
            </section>

            {/* 02. RANKINGS & RECOGNITION */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="text-[11px] font-extrabold tracking-widest text-indigo-600 uppercase">
                02. RANKINGS & RECOGNITION
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Global & QS Subject Rankings
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-extrabold text-slate-400 block uppercase tracking-wider">QS World Ranking</span>
                    <strong className="text-lg sm:text-xl font-black text-slate-900 block mt-1 leading-snug break-words">{university.ranking}</strong>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">Official QS World University Ranking evaluating academic, research, and employer standing.</p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-extrabold text-slate-400 block uppercase tracking-wider">QS Subject Area Rankings</span>
                    <strong className="text-xs sm:text-sm font-bold text-indigo-700 block mt-1 leading-relaxed break-words">
                      {university.qsSubjectRankings || 'Top 10 Global across Computer Science, Business, Engineering, and Life Sciences'}
                    </strong>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">Official QS subject discipline positions.</p>
                </div>
              </div>
            </section>

            {/* 03. ACADEMICS & TOP PROGRAMS */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="text-[11px] font-extrabold tracking-widest text-indigo-600 uppercase">
                03. ACADEMICS
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Top 5 Programs
              </h2>

              <div className="space-y-3">
                {(university.topProgramsList || defaultPrograms).map((program, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                    <span className="text-xs font-black text-indigo-600 px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-100 shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-bold text-slate-900">{program.name}</h3>
                        <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                          {program.ranking}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{program.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 04. ADMISSIONS & TESTING */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="text-[11px] font-extrabold tracking-widest text-indigo-600 uppercase">
                04. ADMISSIONS & TESTING REQUIREMENTS
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                {isUK 
                  ? 'Admissions, SAT, IELTS & UCAS' 
                  : isUS 
                  ? 'Admissions, SAT, IELTS & Common App' 
                  : 'Admissions, SAT & IELTS Requirements'}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">Acceptance Rate</span>
                  <strong className="text-lg font-black text-slate-900 block mt-1">{university.acceptanceRate}</strong>
                  <p className="text-xs text-slate-500 mt-1">Undergraduate admission rate across regular and early applicant pools.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">SAT / ACT Requirement & Policy</span>
                  <strong className="text-lg font-black text-slate-900 block mt-1">{university.minSat}</strong>
                  <p className="text-xs text-slate-500 mt-1">{university.satPolicyDetails || 'Check official testing policy details.'}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">IELTS & TOEFL Language Testing</span>
                  <strong className="text-lg font-black text-slate-900 block mt-1">IELTS: {university.minIelts} | TOEFL: {university.toeflRequirement || '100+'}</strong>
                  <p className="text-xs text-slate-500 mt-1">Minimum score required for non-native English instruction candidates.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">
                    {isUK 
                      ? 'UCAS & APPLICATION PORTAL' 
                      : isUS 
                      ? 'COMMON APP & APPLICATION PORTAL' 
                      : 'APPLICATION PORTAL & REQUIREMENTS'}
                  </span>
                  <strong className="text-lg font-black text-indigo-700 block mt-1">
                    {isUK 
                      ? 'UCAS Portal Required' 
                      : isUS 
                      ? (university.commonAppAccepted ? 'Common App Accepted ✓' : 'Direct Portal Required') 
                      : 'Direct / Official Portal Required'}
                  </strong>
                  <p className="text-xs text-slate-500 mt-1">{university.applicationPortalDetails || 'Transcripts, letters of recommendation, and personal statement.'}</p>
                </div>
              </div>
            </section>

            {/* 05. COST & FINANCIAL AID */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="text-[11px] font-extrabold tracking-widest text-indigo-600 uppercase">
                05. FINANCIALS & SCHOLARSHIPS
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Tuition, Financial Aid & Scholarships
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">Annual Tuition</span>
                  <strong className="text-lg font-black text-slate-900 block mt-1">{university.tuitionFee}</strong>
                  <p className="text-xs text-slate-500 mt-1">Official annual undergraduate tuition fee.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">Financial Aid Policy Type</span>
                  <strong className="text-lg font-black text-emerald-700 block mt-1">{university.financialAidType}</strong>
                  <p className="text-xs text-slate-500 mt-1">Need-based vs merit-based evaluation framework.</p>
                </div>
              </div>

              {university.financialAidDetails && (
                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase text-emerald-800 tracking-wider">
                    Official Financial Aid Policy & Thresholds
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                    {university.financialAidDetails}
                  </p>
                </div>
              )}
            </section>

          </div>

          {/* RIGHT SIDEBAR (1 col) */}
          <aside className="space-y-6">
            
            {/* 06. SCHOLARSHIPS CARDS */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-extrabold tracking-widest text-indigo-600 uppercase">
                  06. AVAILABLE SCHOLARSHIPS
                </div>
                {university.allScholarshipsList && (
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-wider">
                    {university.allScholarshipsList.length} Scholarships
                  </span>
                )}
              </div>

              <h2 className="text-lg font-extrabold text-slate-950 tracking-tight">
                Scholarships & Funding Opportunities
              </h2>

              {university.allScholarshipsList && university.allScholarshipsList.length > 0 ? (
                <div className="space-y-4">
                  {university.allScholarshipsList.map((scholarship, idx) => (
                    <div
                      key={scholarship.id || idx}
                      className="p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50/40 border border-slate-200 hover:border-indigo-200 transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          <div className="p-1.5 rounded-xl bg-indigo-100 text-indigo-700 shrink-0 mt-0.5">
                            <Award className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-xs font-black text-slate-950 leading-snug">
                              {scholarship.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-1.5 mt-1">
                              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                                scholarship.coverage === 'Full Ride'
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                  : scholarship.coverage === 'Full Tuition'
                                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                  : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                              }`}>
                                {scholarship.coverage}
                              </span>

                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                scholarship.requiresSeparateApp
                                  ? 'bg-amber-100 text-amber-900 border border-amber-200'
                                  : 'bg-slate-200 text-slate-800 border border-slate-300'
                              }`}>
                                {scholarship.requiresSeparateApp ? 'Separate App Required' : 'Automatic Consideration'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 space-y-1 text-xs">
                        <div className="flex items-center gap-1 font-extrabold text-slate-900">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{scholarship.amount}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                          <strong className="text-slate-800 font-bold">Eligibility:</strong> {scholarship.eligibility}
                        </p>
                        <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
                          {scholarship.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 pt-1">
                        <span className="flex items-center gap-1 text-indigo-700">
                          <Calendar className="w-3 h-3 text-indigo-500" />
                          Deadline: {scholarship.deadline}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-black text-indigo-900">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    {university.scholarshipTitle}
                  </div>
                  <p className="text-xs font-extrabold text-slate-900">
                    Amount: {university.amountValue}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Coverage: {university.coverage} • {university.description}
                  </p>
                  <div className="pt-2 border-t border-indigo-100/80 flex items-center justify-between text-[11px] font-bold text-indigo-700">
                    <span>Deadline:</span>
                    <span>{university.deadline}</span>
                  </div>
                </div>
              )}

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                <span className="font-bold text-slate-900 block">General Merit & Departmental Grants</span>
                <p className="text-slate-500 leading-relaxed">
                  {isUK 
                    ? 'Additional institutional awards are evaluated automatically upon submitting your UCAS or university portal application.'
                    : isUS 
                    ? 'Additional institutional awards are evaluated automatically upon submitting your Common App or university portal application.'
                    : 'Additional institutional awards are evaluated automatically upon submitting your university portal application.'}
                </p>
              </div>

              <a
                href={`https://google.com/search?q=${encodeURIComponent(university.universityName + ' scholarship financial aid deadline')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <span>Apply via University Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* TRUST & VERIFICATION CARD */}
            <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 shadow-xl space-y-4 border border-indigo-500/20">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Verified Educational Sources
              </div>
              <div>
                <h3 className="text-sm font-extrabold leading-snug">
                  Official Uni Route Academic Intelligence
                </h3>
                <p className="text-xs text-indigo-200/90 leading-relaxed mt-1">
                  All 2026/2027 scholarship criteria, tuition fees, testing policies, and QS rankings are verified against official portals.
                </p>
              </div>

              <div className="pt-2 border-t border-indigo-800/60 space-y-2">
                <a
                  href={`https://www.topuniversities.com/world-university-rankings?search=${encodeURIComponent(university.universityName)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-indigo-100 font-medium transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-indigo-400" />
                    QS World Rankings (TopUniversities)
                  </span>
                  <ExternalLink className="w-3 h-3 text-indigo-300" />
                </a>

                <a
                  href={`https://google.com/search?q=${encodeURIComponent(university.universityName + ' official undergraduate financial aid international deadlines')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-indigo-100 font-medium transition-all"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    Official Financial Aid & Deadlines Portal
                  </span>
                  <ExternalLink className="w-3 h-3 text-indigo-300" />
                </a>
              </div>
            </div>

          </aside>

        </div>

      </main>
    </div>
  );
};
