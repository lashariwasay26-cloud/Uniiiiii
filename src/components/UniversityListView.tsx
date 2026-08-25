import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Filter,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  DollarSign,
  Award,
  Globe,
  X,
  BookOpen,
  ArrowRight,
  Bookmark,
  ExternalLink,
  ChevronDown,
  RotateCcw,
  Check,
  Database,
  RefreshCw,
  Copy,
  Info
} from 'lucide-react';
import { FEATURED_UNIVERSITIES, UniversityTrackItem } from '../data/scholarshipTracksData';
import { UniversityProfile } from './UniversityProfile';
import {
  fetchUniversityScholarshipsFromSupabase,
  isSupabaseConfigured,
  SUPABASE_SQL_SCHEMA
} from '../lib/supabase';

interface UniversityListViewProps {
  onBackToTracks: () => void;
}

export const UniversityListView: React.FC<UniversityListViewProps> = ({ onBackToTracks }) => {
  // Master universities state (defaults to featured, updated dynamically from Supabase if connected)
  const [universities, setUniversities] = useState<UniversityTrackItem[]>(FEATURED_UNIVERSITIES);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [isSupabaseLive, setIsSupabaseLive] = useState<boolean>(false);
  const [showSqlModal, setShowSqlModal] = useState<boolean>(false);
  const [copiedSql, setCopiedSql] = useState<boolean>(false);

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAidType, setSelectedAidType] = useState<string>('all');
  const [fullRideOnly, setFullRideOnly] = useState<boolean>(false);
  const [selectedSat, setSelectedSat] = useState<string>('all');
  const [selectedIelts, setSelectedIelts] = useState<string>('all');
  const [selectedTuition, setSelectedTuition] = useState<string>('all');
  const [selectedDegree, setSelectedDegree] = useState<string>('all');
  
  // Bookmarking state
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  // Active University Profile State
  const [activeModalUni, setActiveModalUni] = useState<UniversityTrackItem | null>(null);

  // Scroll Position Preservation Refs
  const scrollPosRef = useRef<number>(0);
  const lastSelectedUniIdRef = useRef<string | null>(null);

  const handleSelectUniversity = (uni: UniversityTrackItem) => {
    scrollPosRef.current = window.scrollY || document.documentElement.scrollTop || 0;
    lastSelectedUniIdRef.current = uni.id;
    setActiveModalUni(uni);
  };

  // Scroll to top when UniversityListView mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Restore scroll position or scroll to the university card when returning from profile view
  useEffect(() => {
    if (!activeModalUni && lastSelectedUniIdRef.current) {
      const targetId = lastSelectedUniIdRef.current;
      const targetPos = scrollPosRef.current;

      const timer = setTimeout(() => {
        const cardEl = document.getElementById(`uni-card-${targetId}`);
        if (cardEl) {
          cardEl.scrollIntoView({ block: 'center', behavior: 'instant' });
        } else {
          window.scrollTo({ top: targetPos, left: 0, behavior: 'instant' });
        }
      }, 30);

      return () => clearTimeout(timer);
    }
  }, [activeModalUni]);

  // Fetch real-time / dynamic data from Supabase on mount
  useEffect(() => {
    let isMounted = true;
    async function loadSupabaseData() {
      if (!isSupabaseConfigured()) {
        setIsSupabaseLive(false);
        return;
      }

      setIsSyncing(true);
      const { data, error } = await fetchUniversityScholarshipsFromSupabase();
      if (isMounted) {
        setIsSyncing(false);
        if (!error && data && data.length > 0) {
          setUniversities(data);
          setIsSupabaseLive(true);
        } else {
          setIsSupabaseLive(false);
        }
      }
    }

    loadSupabaseData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleManualSync = async () => {
    if (!isSupabaseConfigured()) {
      setShowSqlModal(true);
      return;
    }
    setIsSyncing(true);
    const { data, error } = await fetchUniversityScholarshipsFromSupabase();
    setIsSyncing(false);
    if (!error && data && data.length > 0) {
      setUniversities(data);
      setIsSupabaseLive(true);
    }
  };

  const copySqlToClipboard = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  // Toggle bookmark
  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Reset filters
  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedAidType('all');
    setFullRideOnly(false);
    setSelectedSat('all');
    setSelectedIelts('all');
    setSelectedTuition('all');
    setSelectedDegree('all');
  };

  const isAnyFilterActive =
    searchQuery.trim() !== '' ||
    selectedAidType !== 'all' ||
    fullRideOnly ||
    selectedSat !== 'all' ||
    selectedIelts !== 'all' ||
    selectedTuition !== 'all' ||
    selectedDegree !== 'all';

  // Filter logic
  const filteredUniversities = useMemo(() => {
    return universities.filter((uni) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = uni.universityName.toLowerCase().includes(q);
        const matchesCountry = uni.country.toLowerCase().includes(q);
        const matchesLocation = uni.location.toLowerCase().includes(q);
        const matchesTitle = uni.scholarshipTitle.toLowerCase().includes(q);
        const matchesTags = uni.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesName && !matchesCountry && !matchesLocation && !matchesTitle && !matchesTags) {
          return false;
        }
      }

      // 2. Full Ride Filter
      if (fullRideOnly && !uni.hasFullRide) {
        return false;
      }

      // 3. Aid Type Filter
      if (selectedAidType !== 'all') {
        if (selectedAidType === 'need-blind' && uni.financialAidType !== 'Need-Blind') return false;
        if (selectedAidType === 'merit' && uni.financialAidType !== 'Merit-Based' && uni.financialAidType !== 'Partial Merit') return false;
        if (selectedAidType === 'tuition-waiver' && uni.financialAidType !== 'Tuition Waiver') return false;
      }

      // 4. SAT Filter
      if (selectedSat !== 'all') {
        if (selectedSat === 'optional' && uni.satRequirementCategory !== 'Optional') return false;
        if (selectedSat === '1300' && (uni.satRequirementCategory === 'Optional')) return false;
        if (selectedSat === '1400' && (uni.satRequirementCategory === '1500' || uni.satRequirementCategory === '1400')) {
          // keep
        } else if (selectedSat === '1400') {
          return false;
        }
        if (selectedSat === '1500' && uni.satRequirementCategory !== '1500') return false;
      }

      // 5. IELTS Filter
      if (selectedIelts !== 'all') {
        if (selectedIelts === '6.5' && (uni.ieltsCategory === '7.0' || uni.ieltsCategory === '7.5')) return false;
        if (selectedIelts === '7.0' && uni.ieltsCategory === '7.5') return false;
        if (selectedIelts === '7.5' && uni.ieltsCategory !== '7.5') return false;
      }

      // 6. Tuition Fee Filter
      if (selectedTuition !== 'all') {
        if (selectedTuition === 'low' && uni.tuitionAmountNumeric > 5000) return false;
        if (selectedTuition === 'mid' && uni.tuitionAmountNumeric > 35000) return false;
        if (selectedTuition === 'high' && uni.tuitionAmountNumeric <= 35000) return false;
      }

      // 7. Degree Level Filter
      if (selectedDegree !== 'all') {
        if (selectedDegree === 'undergraduate' && !uni.degreesOffered.includes('Undergraduate')) return false;
        if (selectedDegree === 'graduate' && !uni.degreesOffered.includes('Graduate') && !uni.degreesOffered.includes('Masters')) return false;
        if (selectedDegree === 'phd' && !uni.degreesOffered.includes('PhD')) return false;
      }

      return true;
    });
  }, [searchQuery, selectedAidType, fullRideOnly, selectedSat, selectedIelts, selectedTuition, selectedDegree]);

  if (activeModalUni) {
    return (
      <UniversityProfile
        university={activeModalUni}
        onBack={() => setActiveModalUni(null)}
      />
    );
  }

  return (
    <div className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Header & Back Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <button
              onClick={onBackToTracks}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              ← Back to Track Options
            </button>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
            <span>University Track Directory</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Explore world-renowned institutions, admission acceptance rates, financial aid policies, and test requirements.
          </p>
        </div>

        {isAnyFilterActive && (
          <button
            onClick={resetAllFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200/80 hover:bg-rose-100 text-xs font-bold transition-all cursor-pointer shrink-0 self-start sm:self-center"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>

      {/* SEARCH AND FILTERS BAR */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-8 space-y-5">
        
        {/* Search Input Box */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by university name (e.g. Harvard, Oxford, Stanford), country, or program..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-200 text-slate-500 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2 border-t border-slate-100">
          
          {/* Filter 1: Full Ride Toggle */}
          <button
            onClick={() => setFullRideOnly(!fullRideOnly)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              fullRideOnly
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className="flex items-center gap-1.5 truncate">
              <Award className="w-3.5 h-3.5" />
              Full Ride Only
            </span>
            {fullRideOnly && <Check className="w-3.5 h-3.5 ml-1" />}
          </button>

          {/* Filter 2: Financial Aid Type */}
          <div>
            <select
              value={selectedAidType}
              onChange={(e) => setSelectedAidType(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">Aid Type: All</option>
              <option value="need-blind">Need-Blind</option>
              <option value="merit">Merit-Based</option>
              <option value="tuition-waiver">Tuition Waiver</option>
            </select>
          </div>

          {/* Filter 3: SAT Score Requirement */}
          <div>
            <select
              value={selectedSat}
              onChange={(e) => setSelectedSat(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">SAT: All Requirements</option>
              <option value="optional">Test Optional</option>
              <option value="1400">SAT 1400+</option>
              <option value="1500">SAT 1500+</option>
            </select>
          </div>

          {/* Filter 4: IELTS Score */}
          <div>
            <select
              value={selectedIelts}
              onChange={(e) => setSelectedIelts(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">IELTS: All Scores</option>
              <option value="6.5">IELTS 6.5 Max</option>
              <option value="7.0">IELTS 7.0 Max</option>
              <option value="7.5">IELTS 7.5 Required</option>
            </select>
          </div>

          {/* Filter 5: Tuition Fee */}
          <div>
            <select
              value={selectedTuition}
              onChange={(e) => setSelectedTuition(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">Tuition: All Fees</option>
              <option value="low">Low Fee / Free (&lt; $5k/yr)</option>
              <option value="mid">Mid Tuition (&lt; $35k/yr)</option>
              <option value="high">High Tuition ($35k+/yr)</option>
            </select>
          </div>

          {/* Filter 6: Degree Level */}
          <div>
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">Degree: All Levels</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate / Masters</option>
              <option value="phd">PhD / Doctorate</option>
            </select>
          </div>

        </div>
      </div>

      {/* UNIVERSITIES LIST GRID */}
      {filteredUniversities.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8">
          <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900">No Universities Found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try resetting or loosening your search filters to view available university tracks.
          </p>
          <button
            onClick={resetAllFilters}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredUniversities.map((uni) => {
            const isBookmarked = bookmarkedIds.has(uni.id);

            return (
              <motion.div
                key={uni.id}
                id={`uni-card-${uni.id}`}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                onClick={() => handleSelectUniversity(uni)}
                className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all flex flex-col justify-between relative group cursor-pointer"
              >
                {/* Top Row: Logo, Name & Location */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      {/* Logo Badge */}
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xs sm:text-sm tracking-tighter shadow-sm shrink-0 bg-gradient-to-br text-white ${uni.logoBg}`}>
                        {uni.logoText}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight leading-snug">
                            {uni.universityName}
                          </h2>
                          <span className="text-base" title={uni.country}>
                            {uni.flag}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-slate-500 mt-0.5 flex items-center gap-1.5 flex-wrap">
                          <Globe className="w-3.5 h-3.5 text-slate-400" />
                          <span>{uni.location}</span>
                          {uni.foundingYear && (
                            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                              Estd. {uni.foundingYear}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Bookmark Button */}
                    <button
                      onClick={(e) => toggleBookmark(uni.id, e)}
                      className={`p-2 rounded-xl border transition-all cursor-pointer ${
                        isBookmarked
                          ? 'bg-amber-50 border-amber-300 text-amber-600'
                          : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                      }`}
                      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark University'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                    </button>
                  </div>

                  {/* Primary Key Metrics Row */}
                  <div className="grid grid-cols-2 gap-2 my-4 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Acceptance Rate
                      </span>
                      <span className="font-extrabold text-slate-900 text-sm">
                        {uni.acceptanceRate}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Annual Tuition Fee
                      </span>
                      <span className="font-extrabold text-slate-900 text-sm">
                        {uni.tuitionFee}
                      </span>
                    </div>
                  </div>

                  {/* High Visibility Badges Row */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {/* Full Ride Badge */}
                    {uni.hasFullRide ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[11px] border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Full Ride Available
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 font-bold text-[11px] border border-amber-200">
                        Partial Aid / Waiver
                      </span>
                    )}

                    {/* Financial Aid Type */}
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[11px] border border-indigo-100">
                      <Sparkles className="w-3 h-3 text-indigo-500" />
                      {uni.financialAidType}
                    </span>

                    {/* Degrees Tags */}
                    {uni.degreesOffered.map((deg) => (
                      <span
                        key={deg}
                        className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-[11px]"
                      >
                        {deg}
                      </span>
                    ))}
                  </div>

                  {/* Requirements Quick Summary */}
                  <div className="text-xs text-slate-600 space-y-1 mb-4">
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-400">SAT Requirement:</span>
                      <span className="font-bold text-slate-800">{uni.minSat}</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-400">IELTS Requirement:</span>
                      <span className="font-bold text-slate-800">{uni.minIelts}</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-400">Min Academic GPA:</span>
                      <span className="font-bold text-slate-800">{uni.minGpa}</span>
                    </div>
                  </div>

                  {/* Scholarship Description Snippet */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-5">
                    {uni.description}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    Deadline: {uni.deadline.split('/')[0]}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectUniversity(uni);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-950 text-white group-hover:bg-slate-800 text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    <span>View University Details</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* DETAIL MODAL FOR UNIVERSITY */}
      <AnimatePresence>
        {activeModalUni && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalUni(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-sm tracking-tighter shadow-md shrink-0 bg-gradient-to-br text-white ${activeModalUni.logoBg}`}>
                  {activeModalUni.logoText}
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 block">
                    {activeModalUni.ranking}
                  </span>
                  <h2 className="text-2xl font-black text-slate-950">
                    {activeModalUni.universityName} {activeModalUni.flag}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {activeModalUni.location} {activeModalUni.foundingYear ? `• Established ${activeModalUni.foundingYear}` : ''}
                  </p>
                </div>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Acceptance Rate</span>
                  <span className="font-black text-slate-900 text-sm">{activeModalUni.acceptanceRate}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Annual Tuition</span>
                  <span className="font-black text-slate-900 text-sm">{activeModalUni.tuitionFee}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Full Ride Status</span>
                  <span className="font-black text-emerald-700 text-sm">
                    {activeModalUni.hasFullRide ? 'Full Ride Available' : 'Partial Aid Only'}
                  </span>
                </div>
              </div>

              {/* Scholarship Initiative Header */}
              <div className="mb-5">
                <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                  Primary Scholarship & Financial Aid Program
                </h3>
                <p className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 inline-block">
                  {activeModalUni.scholarshipTitle} ({activeModalUni.amountValue})
                </p>
              </div>

              {/* Requirements & Deadlines */}
              <div className="space-y-3 text-xs mb-6 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">SAT Requirement:</span>
                  <span className="font-bold text-slate-900">{activeModalUni.minSat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">IELTS Requirement:</span>
                  <span className="font-bold text-slate-900">{activeModalUni.minIelts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Min Target GPA:</span>
                  <span className="font-bold text-slate-900">{activeModalUni.minGpa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Application Deadline:</span>
                  <span className="font-bold text-rose-600">{activeModalUni.deadline}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
                  Program Details & Coverage
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeModalUni.description}
                </p>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveModalUni(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`https://google.com/search?q=${encodeURIComponent(activeModalUni.universityName + ' financial aid scholarships')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <span>Official University Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
