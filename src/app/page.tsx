'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  Sparkles,
  Bot,
  Network,
  ArrowRight,
  Menu,
  Heart,
  Stethoscope,
  Play,
  ShieldCheck,
  BellRing,
  HeartPulse,
  CalendarCheck2,
  ShoppingBag,
  Home,
  HeartHandshake,
  Scissors,
  Footprints,
  GraduationCap,
  Soup,
  Users,
  AlertTriangle,
  ChevronRight,
  CalendarPlus,
  Scale,
  Wifi,
  BatteryFull,
  RotateCcw,
  ArrowUpRight,
  Syringe,
  Utensils,
  ShieldAlert,
  Globe,
  CheckCircle2,
  Check,
  Coins,
  Terminal,
  X,
  Webhook,
  FileHeart,
  Siren,
  PawPrint,
  Award,
  PhoneCall,
  ChevronUp
} from 'lucide-react';

export default function GreenLaneLandingPage() {
  // Navigation & Modals
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoModalRole, setDemoModalRole] = useState('parent');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [integrationModalOpen, setIntegrationModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);

  // Hero state
  const [currentAudience, setCurrentAudience] = useState<'parent' | 'clinic'>('parent');

  // Pillars state
  const [activePillarId, setActivePillarId] = useState('healthcare');
  const [pillarScopeFilter, setPillarScopeFilter] = useState<'all' | 'day_one' | 'ecosystem'>('all');

  // AI Assistant Chat state
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; tag?: string; isHtml?: boolean }>>([
    {
      sender: 'ai',
      text: 'Hi! I’m <strong>Luna</strong>, synced with <strong>Max’s (Golden Retriever, 29 kg)</strong> health profile. I monitor symptoms, calculate diet portions, and alert your vet when needed. Tap a scenario below to test my triage capabilities:',
      isHtml: true,
      tag: 'Luna AI'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Ecosystem node state
  const [selectedEcoNode, setSelectedEcoNode] = useState('clinics');

  // Workflow state
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);
  const [activeWorkflowRegion, setActiveWorkflowRegion] = useState('be_eu');

  // Pricing state
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [pricingCurrency, setPricingCurrency] = useState('EUR_BE');

  // Demo Form state
  const [demoTrack, setDemoTrack] = useState('clinic');
  const [demoRegion, setDemoRegion] = useState('Belgium / EU (EN/FR/NL · GDPR)');
  const [demoPlan, setDemoPlan] = useState('Clinic AI Starter');
  const [demoFormat, setDemoFormat] = useState('15-min Live AI Walkthrough');
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoFormData, setDemoFormData] = useState({ name: '', email: '', org: '' });

  // Custom Dropdowns state & refs
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [planDropdownOpen, setPlanDropdownOpen] = useState(false);
  const regionDropdownRef = useRef<HTMLDivElement>(null);
  const planDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (regionDropdownRef.current && !regionDropdownRef.current.contains(event.target as Node)) {
        setRegionDropdownOpen(false);
      }
      if (planDropdownRef.current && !planDropdownRef.current.contains(event.target as Node)) {
        setPlanDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Analytics event log
  const [analyticsEvents, setAnalyticsEvents] = useState<Array<{ eventName: string; timestamp: string; payload: any }>>([
    {
      eventName: 'landing_page_viewed',
      timestamp: new Date().toISOString(),
      payload: { defaultAudience: 'parent', activePillar: 'healthcare', defaultRegion: 'be_eu', defaultCurrency: 'EUR_BE' }
    }
  ]);

  const trackEvent = (eventName: string, payload: any = {}) => {
    const item = { eventName, timestamp: new Date().toISOString(), payload };
    setAnalyticsEvents(prev => [...prev, item]);
    if (typeof window !== 'undefined') {
      (window as any).GreenLaneAnalytics?.track?.(eventName, payload);
    }
  };

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  // Data definitions
  const pillarsData = [
    { id: 'healthcare', name: 'Healthcare', scope: 'day_one', scopeLabel: 'Day-One Core', icon: Stethoscope, color: 'text-violet-700 bg-violet-50 border-violet-200/80', title: 'AI Predictive Healthcare & Triage', badge: '24/7 AI Clinical Sync', desc: '24/7 AI symptom checker with red-flag emergency detection, automated vaccination alerts, and clinician-ready pre-visit summaries.' },
    { id: 'grooming', name: 'Grooming', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: Scissors, color: 'text-purple-700 bg-purple-50 border-purple-200/80', title: 'AI Coat Health & Smart Grooming Match', badge: 'Ecosystem AI Service', desc: 'AI coat and skin analysis that predicts grooming intervals by breed and season, automatically booking with verified partner groomers.' },
    { id: 'walking', name: 'Walking', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: PawPrint, color: 'text-sky-700 bg-sky-50 border-sky-200/80', title: 'AI Activity Tracking & Walker Dispatch', badge: 'Ecosystem AI Service', desc: 'AI-calculated daily exercise targets based on breed, age, and weight, linked with verified local dog walkers and live GPS tracking.' },
    { id: 'training', name: 'Training', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: Award, color: 'text-amber-700 bg-amber-50 border-amber-200/80', title: 'AI Behavioral Coach & Training Routines', badge: 'Ecosystem AI Care', desc: 'Personalized, step-by-step obedience and behavior modification plans tailored by AI to your pet’s specific breed traits and age milestones.' },
    { id: 'boarding', name: 'Boarding', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: Home, color: 'text-teal-700 bg-teal-50 border-teal-200/80', title: 'AI Care Handover & Verified Boarding', badge: 'Ecosystem AI Service', desc: 'Generates an instant, comprehensive AI care brief (exact feeding portions, medications, emergency vet contacts) for trusted boarding hosts.' },
    { id: 'nutrition', name: 'Nutrition', scope: 'day_one', scopeLabel: 'Day-One Core', icon: Utensils, color: 'text-violet-700 bg-violet-50 border-violet-200/80', title: 'Precision AI Nutrition & Calorie Calculator', badge: 'Day-1 Guidance + Partners', desc: 'Calculates exact daily calorie requirements, flags food allergies and ingredient sensitivities, and compares vet-approved therapeutic diets.' },
    { id: 'products', name: 'Products', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: ShoppingBag, color: 'text-rose-700 bg-rose-50 border-rose-200/80', title: 'AI-Curated Essentials & Smart Refills', badge: 'Connected AI Brands', desc: 'AI predicts when food, flea/tick preventatives, and prescription supplements run low, ordering vet-approved refills before you run out.' },
    { id: 'community', name: 'Community', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: Users, color: 'text-indigo-700 bg-indigo-50 border-indigo-200/80', title: 'AI Lost-Pet Radar & Community Health Circles', badge: 'Connected AI Network', desc: 'Instant neighborhood AI lost-pet alerts with photo matching, localized seasonal health alerts (fleas, heat, kennel cough), and verified breed circles.' }
  ];

  const filteredPillars = pillarScopeFilter === 'all'
    ? pillarsData
    : pillarsData.filter(p => p.scope === pillarScopeFilter);

  const selectedPillar = pillarsData.find(p => p.id === activePillarId) || pillarsData[0];

  const scenarioData: Record<string, { prompt: string; reply: string; tag: string }> = {
    chocolate: {
      prompt: 'Red-Flag Check: Max (29 kg) just ate ~40g of 70% dark chocolate!',
      reply: '<strong>⚠️ AI RED-FLAG TRIAGE: URGENT ESCALATION</strong><br/>• <strong>AI Toxicity Calculation:</strong> 40g of 70% dark chocolate contains ~320mg theobromine (11.0 mg/kg for 29kg Max). While below lethal toxicity, this triggers mild-to-moderate cardiotoxic risks (vomiting, restlessness, elevated heart rate).<br/>• <strong>AI Safety Rule:</strong> Never attempt home remedies without clinical oversight.<br/>• <strong>Action Taken:</strong> Generated a pre-visit clinical summary and located <strong>GreenLane Emergency Clinic (2.4 km away)</strong>. Contact your vet immediately.',
      tag: 'Red-Flag Escalation · Contact Vet Now'
    },
    routine: {
      prompt: 'Everyday Care: Book Max’s annual DHPP booster and coat grooming.',
      reply: '<strong>✅ AI Everyday Care Coordination Ready</strong><br/>• <strong>Day-One AI Health Core:</strong> Cross-referenced Max’s vaccination timeline. His DHPP booster is due. AI has prepared his medical record summary and held an appointment slot for <strong>Saturday, Nov 22 at 10:00 AM</strong> at GreenLane Vet Clinic.<br/>• <strong>Connected Ecosystem:</strong> Paired with an optimal de-shedding coat grooming session nearby at <strong>11:30 AM</strong> to minimize your travel.<br/><em>Clinical reminder: Vaccination scheduling is automated by AI; your licensed vet administers the vaccine and exam.</em>',
      tag: 'Everyday Care · Day-1 + Ecosystem'
    },
    renal: {
      prompt: 'Compare renal support diets compatible with Max’s chicken sensitivity.',
      reply: '<strong>🥗 AI Precision Nutrition Analysis</strong><br/>Screened 140+ veterinary diets against Max’s profile (29 kg, adult Golden Retriever, confirmed chicken allergy):<br/>1. <strong>Royal Canin Renal Support S:</strong> Uses hydrolyzed soy protein (zero chicken antigens), controlled phosphorus (0.3%), high energy density.<br/>2. <strong>Hill’s Prescription Diet k/d (Egg &amp; Rice formula):</strong> Chicken-free protein source, enriched with Omega-3 EPA/DHA for kidney perfusion.<br/>• <strong>AI Recommendation:</strong> Daily caloric target calculated at <strong>1,420 kcal/day</strong>. Pre-visit nutrition note prepared for your vet’s final sign-off.',
      tag: 'Everyday Diet Info · Vet Approval Required'
    }
  };

  const handleTriggerScenario = (key: string) => {
    const sc = scenarioData[key];
    if (!sc) return;
    trackEvent('ai_scenario_triggered', { scenario: key });
    setChatMessages(prev => [...prev, { sender: 'user', text: sc.prompt }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [...prev, { sender: 'ai', text: sc.reply, tag: sc.tag, isHtml: true }]);
    }, 700);
  };

  const handleCustomChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const query = chatInput.trim();
    setChatInput('');
    trackEvent('ai_chat_sent', { query });
    setChatMessages(prev => [...prev, { sender: 'user', text: query }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const q = query.toLowerCase();
      let replyText = 'I’ve cross-checked **Max’s** health profile! Would you like me to run an **AI symptom triage**, schedule his **DHPP booster**, or compare **nutrition plans**?';
      let tagText = 'Smart Companion';
      if (q.includes('chocolate') || q.includes('toxic')) {
        replyText = scenarioData.chocolate.reply;
        tagText = scenarioData.chocolate.tag;
      } else if (q.includes('booster') || q.includes('groom')) {
        replyText = scenarioData.routine.reply;
        tagText = scenarioData.routine.tag;
      } else if (q.includes('renal') || q.includes('diet')) {
        replyText = scenarioData.renal.reply;
        tagText = scenarioData.renal.tag;
      }
      setChatMessages(prev => [...prev, { sender: 'ai', text: replyText, tag: tagText, isHtml: true }]);
    }, 700);
  };

  const handleResetChat = () => {
    setChatMessages([{
      sender: 'ai',
      text: 'Hi! I’m <strong>Luna</strong>, synced with <strong>Max’s (Golden Retriever, 29 kg)</strong> health profile. I monitor symptoms, calculate diet portions, and alert your vet when needed. Tap a scenario below to test my triage capabilities:',
      isHtml: true,
      tag: 'Luna AI'
    }]);
  };

  const ecosystemNodesInfo: Record<string, { tag: string; text: string }> = {
    clinics: { tag: 'Veterinary Clinic', text: 'AI triage, PIMS & reminders.' },
    services: { tag: 'Pet Care Services', text: 'AI-powered booking that automatically shares vaccine status, behavior notes, and feeding routines with verified groomers, walkers, and sitters.' },
    brands: { tag: 'Curated Pet Brands', text: 'AI-driven recommendations for therapeutic nutrition and preventive care (Royal Canin, Zoetis, Boehringer Ingelheim) tailored to your pet’s health profile.' },
    community: { tag: 'Pet Community & Safety', text: 'AI-powered neighborhood health radar (tracking local tick and kennel cough alerts) and instant community lost-pet broadcast.' },
    welfare: { tag: 'Shelters & Animal Welfare', text: 'AI-assisted pet matching to reduce adoption returns, with instant digital medical record transfer from shelter to new pet parent.' },
    hardware: { tag: 'Smart Wearables & IoT', text: 'Live data sync from GPS collars, smart feeders, and activity monitors directly into GreenLane AI to track sleep, rest, and activity patterns.' },
  };

  const workflowRegions: Record<string, { label: string; badgeText: string; extraDeliverable: string }> = {
    be_eu: { label: 'Belgium / EU', badgeText: 'Trilingual AI triage (EN/FR/NL), EU data residency & PIMS/CRM webhook sync. Verified under EU GDPR standards.', extraDeliverable: 'EU GDPR data processing record & EN/FR/NL pet-parent triage prompts verified' },
    bg_eu: { label: 'Bulgaria / EU Health', badgeText: 'EU digital health alignment, BG/EN bilingual care flows & multi-clinic readiness across Bulgaria and the EU.', extraDeliverable: 'BG/EN clinic reminder templates & EU cross-border record export enabled' },
    in_highvol: { label: 'India / High-Volume', badgeText: 'High-throughput queue triage, rapid automated reminder bursts & multi-branch clinic routing for high-volume practices.', extraDeliverable: 'High-volume appointment queue rules & instant slot-fill alerts calibrated' },
    global: { label: 'Global Standard', badgeText: 'ISO-27001 security baseline, multi-currency billing (EUR/INR/USD) & flexible API/webhook integration hooks.', extraDeliverable: 'Webhook signing secret, CRM lead mapping & role permissions confirmed' },
  };

  const workflowSteps = [
    {
      step: 1,
      windowLabel: 'Days 1–3 · Phase 01',
      tabTitle: 'PIMS & Health Data Sync',
      tabSub: 'Connect clinic calendar & pet histories',
      title: 'PIMS & Health Data Sync',
      summary: 'Connect your clinic calendar, practice management software (PIMS), and patient histories so the AI starts with complete, verified clinical context.',
      clinicAction: 'Sync appointment slots, practitioner hours, vaccine schedules, and CRM/webhook endpoints without disrupting live consultations.',
      providerAction: 'Import grooming/boarding capacity, breed/coat duration rules, and safety waivers into one live schedule.',
      parentAction: 'Create a unified pet profile with past vaccines, weight history, and active diet or allergy notes.',
      deliverables: ['Appointment calendar & service catalog connected', 'Historical vaccine & care records imported cleanly'],
    },
    {
      step: 2,
      windowLabel: 'Days 4–7 · Phase 02',
      tabTitle: 'AI Triage & Guardrail Setup',
      tabSub: 'Configure triage logic & routing',
      title: 'AI Triage & Guardrail Calibration',
      summary: 'Customize symptom intake questions, emergency escalation rules, and automated appointment slots to match your practice\'s clinical protocols.',
      clinicAction: 'Define urgent vs. routine triage flags, pre-visit intake checklists, and automated slot confirmation rules.',
      providerAction: 'Set service add-ons, deposit/cancellation policies, and smart buffer times between appointments.',
      parentAction: 'Test one-tap symptom triage, multi-service booking, and nutrition comparison with clear vet guardrails.',
      deliverables: ['Triage urgency thresholds & veterinary disclaimers active', 'Automated booking & reminder message templates approved'],
    },
    {
      step: 3,
      windowLabel: 'Days 8–11 · Phase 03',
      tabTitle: 'Clinical Pilot & Staff Testing',
      tabSub: 'Shadow-test on real workflows',
      title: 'Clinical Pilot & Staff Testing',
      summary: 'Veterinary staff and receptionists test AI pre-visit intake briefs on live sample cases, refining automated communications and appointment handoffs.',
      clinicAction: 'Veterinarians and receptionists review AI pre-visit summaries and verify CRM/webhook event delivery.',
      providerAction: 'Walkers, groomers, and boarding hosts validate live booking handoffs and pet care notes.',
      parentAction: 'Pilot caregivers share feedback on reminder timing, chat clarity, and health timeline accuracy.',
      deliverables: ['Staff & clinical leads complete 30-min walkthrough', 'Sandbox/pilot bookings & webhook payloads verified'],
    },
    {
      step: 4,
      windowLabel: 'Days 12–14 · Phase 04',
      tabTitle: 'Full Go-Live & Practice Analytics',
      tabSub: 'Full rollout & ROI tracking',
      title: 'Full Go-Live & Practice Analytics',
      summary: 'Launch automated 24/7 pet-parent triage, smart appointment reminders, and live dashboard tracking admin hours saved and no-show reduction.',
      clinicAction: 'Monitor weekly admin hours saved, intake completion rates, and automated recall conversions.',
      providerAction: 'Track repeat bookings, smart product/diet refills, and partner ecosystem referrals.',
      parentAction: 'Enjoy continuous health reminders, instant care history, and seamless service booking.',
      deliverables: ['Full production rollout live across target locations', 'Weekly ROI, reminder & analytics dashboard active'],
    },
  ];

  const currentStepObj = workflowSteps.find(s => s.step === activeWorkflowStep) || workflowSteps[0];
  const currentRegionObj = workflowRegions[activeWorkflowRegion] || workflowRegions.be_eu;

  const pricingTable: Record<string, any> = {
    EUR_BE: { plusAnnual: '€3.90 / mo', plusMonthly: '€4.90 / mo', starterAnnual: '€119', starterMonthly: '€149', proAnnual: '€319', proMonthly: '€399', subStarter: '1 clinic or care location', subPro: 'Multi-site clinics & PMS/CRM webhooks.' },
    EUR_BG: { plusAnnual: '€3.50 / mo', plusMonthly: '€4.50 / mo', starterAnnual: '€99', starterMonthly: '€125', proAnnual: '€269', proMonthly: '€339', subStarter: '1 clinic or studio', subPro: 'Multi-location groups & custom triage.' },
    INR: { plusAnnual: '₹199 / mo', plusMonthly: '₹249 / mo', starterAnnual: '₹5,999', starterMonthly: '₹7,499', proAnnual: '₹15,999', proMonthly: '₹19,999', subStarter: 'High-volume clinic or care studio', subPro: 'Multi-branch networks & custom workflows.' },
    USD: { plusAnnual: '$4.50 / mo', plusMonthly: '$5.90 / mo', starterAnnual: '$129', starterMonthly: '$159', proAnnual: '$349', proMonthly: '$439', subStarter: '1 clinic or care location', subPro: 'Multi-site groups & CRM/PMS webhooks.' },
  };

  const currentPricing = pricingTable[pricingCurrency] || pricingTable.EUR_BE;
  const isAnnual = billingCycle === 'annual';

  const handleOpenDemoModal = (role: string = 'parent') => {
    setDemoModalRole(role);
    setDemoSuccess(false);
    setDemoModalOpen(true);
    trackEvent('demo_modal_opened', { role });
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('demo_onboarding_completed', {
      ...demoFormData,
      track: demoTrack,
      region: demoRegion,
      plan: demoPlan,
      format: demoFormat,
      billingCycle,
      currency: pricingCurrency
    });
    setDemoSubmitted(true);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans antialiased selection:bg-violet-900 selection:text-white">
      {/* 1. STICKY TOP NAVIGATION BAR */}
      <header id="navbar" className="sticky top-0 z-50 w-full transition-all duration-300 bg-white/85 backdrop-blur-md border-b border-violet-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-4">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src="/brand-logo.png"
                  alt="GreenLane Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#0F172A]">
                GreenLane<span className="text-violet-600">Pet</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-7 text-xs xl:text-sm font-medium text-slate-600 whitespace-nowrap shrink min-w-0">
              <a href="#home" className="inline-flex items-center text-violet-900 font-semibold border-b-2 border-amber-500 py-1 transition-colors">
                Home
              </a>
              <a href="#ai-features" className="inline-flex items-center hover:text-violet-900 transition-colors py-1 border-b-2 border-transparent">
                AI Features
              </a>

              {/* Ecosystem Dropdown */}
              <div className="relative group">
                <button type="button" className="inline-flex items-center gap-1 hover:text-violet-900 transition-colors py-1 border-b-2 border-transparent">
                  <span>AI Ecosystem</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-violet-700 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-72 rounded-2xl bg-white shadow-card border border-slate-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                  <a href="#pillars" className="flex items-start gap-3 p-3 rounded-xl hover:bg-violet-50/80 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">Day-One AI Core vs. Ecosystem</p>
                      <p className="text-xs text-slate-500">Live triage &amp; intake vs. connected partner care</p>
                    </div>
                  </a>
                  <a href="#ai-assistant" className="flex items-start gap-3 p-3 rounded-xl hover:bg-amber-50/80 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">24/7 AI Triage &amp; Guardrails</p>
                      <p className="text-xs text-slate-500">Everyday guidance vs. urgent vet escalation</p>
                    </div>
                  </a>
                  <a href="#connected-ecosystem" className="flex items-start gap-3 p-3 rounded-xl hover:bg-violet-50/80 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">Connected Partner Network</p>
                      <p className="text-xs text-slate-500">Clinics, smart hardware, diets &amp; welfare</p>
                    </div>
                  </a>
                </div>
              </div>

              <a href="#workflow" className="inline-flex items-center hover:text-violet-900 transition-colors py-1 border-b-2 border-transparent">
                14-Day AI Rollout
              </a>
              <a href="#pricing" className="inline-flex items-center hover:text-violet-900 transition-colors py-1 border-b-2 border-transparent">
                Plans &amp; Pricing
              </a>
              <a href="#demo" className="inline-flex items-center hover:text-violet-900 transition-colors py-1 border-b-2 border-transparent">
                Book AI Demo
              </a>
            </nav>

            {/* Right CTA */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <button
                onClick={() => handleOpenDemoModal('parent')}
                className="hidden 2xl:inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80 text-xs font-semibold px-3.5 py-2 rounded-full transition-all active:scale-95 whitespace-nowrap shrink-0"
              >
                <span>Try Free AI Triage</span>
              </button>

              <button
                onClick={() => handleOpenDemoModal('clinic')}
                className="hidden sm:inline-flex items-center gap-1.5 bg-violet-900 hover:bg-violet-800 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 whitespace-nowrap shrink-0"
              >
                <span className="hidden xl:inline">Book Clinic AI Demo</span>
                <span className="xl:hidden">Book Demo</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-violet-900 transition-colors focus:outline-none shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-3 pb-8 space-y-1.5 shadow-2xl max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain animate-in slide-in-from-top-2 duration-200">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="block px-4 py-2.5 rounded-xl bg-violet-50 text-violet-900 font-bold text-sm">Home</a>
            <a href="#ai-features" onClick={(e) => scrollToSection(e, 'ai-features')} className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm">AI Features</a>
            <a href="#pillars" onClick={(e) => scrollToSection(e, 'pillars')} className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm">8 AI Care Pillars</a>
            <a href="#ai-assistant" onClick={(e) => scrollToSection(e, 'ai-assistant')} className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm">AI Pet Assistant</a>
            <a href="#workflow" onClick={(e) => scrollToSection(e, 'workflow')} className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm">14-Day AI Rollout</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm">Plans &amp; Pricing</a>
            <a href="#demo" onClick={(e) => scrollToSection(e, 'demo')} className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm">Book AI Demo</a>
            <div className="pt-3 flex flex-col sm:flex-row gap-2.5 pb-2">
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); handleOpenDemoModal('clinic'); }}
                className="w-full flex items-center justify-center gap-2 bg-violet-900 hover:bg-violet-800 text-white font-semibold py-3 px-4 rounded-full text-sm shadow-sm transition-all active:scale-98"
              >
                <span>Book Clinic AI Demo</span>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
              </button>
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); handleOpenDemoModal('parent'); }}
                className="w-full flex items-center justify-center bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 font-semibold py-3 px-4 rounded-full text-sm transition-all active:scale-98"
              >
                Try Free AI Triage
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative hero-gradient pt-8 pb-24 lg:pt-14 lg:pb-32 overflow-hidden">
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-200/25 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 text-left space-y-6">
              {/* Dual-Audience Switcher Pill */}
              <div className="inline-flex items-center p-1 rounded-full bg-white/95 border border-violet-900/10 shadow-soft max-w-full">
                <button
                  type="button"
                  onClick={() => { setCurrentAudience('parent'); trackEvent('hero_audience_switched', { audience: 'parent' }); }}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${currentAudience === 'parent' ? 'bg-violet-900 text-white shadow-xs' : 'text-slate-600 hover:text-violet-900'
                    }`}
                >
                  <Heart className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>For Pet Parents</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setCurrentAudience('clinic'); trackEvent('hero_audience_switched', { audience: 'clinic' }); }}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${currentAudience === 'clinic' ? 'bg-violet-900 text-white shadow-xs' : 'text-slate-600 hover:text-violet-900'
                    }`}
                >
                  <Stethoscope className="w-3.5 h-3.5 text-violet-700 shrink-0" />
                  <span className="hidden sm:inline">For Vet Clinics &amp; Partners</span>
                  <span className="sm:hidden">For Vet Clinics</span>
                </button>
              </div>

              {/* Dynamic Headline */}
              {currentAudience === 'parent' ? (
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.55rem] leading-[1.12] tracking-tight text-[#0F172A] transition-all duration-300">
                  One AI-Powered<br />
                  Health Ecosystem<br />
                  for{' '}
                  <span className="bg-gradient-to-r from-amber-500 via-amber-500 to-violet-600 bg-clip-text text-transparent">Every Pet</span>
                </h1>
              ) : (
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.55rem] leading-[1.12] tracking-tight text-[#0F172A] transition-all duration-300">
                  AI Pre-Visit Triage &amp;<br />
                  Calm Practice Flow<br />
                  for{' '}
                  <span className="bg-gradient-to-r from-amber-500 via-amber-500 to-violet-600 bg-clip-text text-transparent">Modern Clinics</span>
                </h1>
              )}

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {currentAudience === 'parent'
                  ? '24/7 AI symptom triage, smart health and vaccine reminders, and connected clinic & pet-service workflows—giving pet parents calm confidence and every pet proactive, intelligent care.'
                  : 'AI-generated pre-visit clinical briefs, automated appointment reminders, and connected care workflows that reduce front-desk admin by 40% while keeping licensed vets in full clinical control.'}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={() => {
                    if (currentAudience === 'clinic') handleOpenDemoModal('clinic');
                    else document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="inline-flex items-center gap-2.5 bg-violet-900 hover:bg-violet-800 text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-violet-900/20 hover:shadow-xl transition-all active:scale-95"
                >
                  <span>{currentAudience === 'parent' ? 'Try 24/7 AI Assistant' : 'Book Clinic AI Demo'}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>

                <button
                  onClick={() => {
                    if (currentAudience === 'clinic') {
                      setCurrentAudience('parent');
                      document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                      setCurrentAudience('clinic');
                      document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="inline-flex items-center gap-2.5 bg-amber-50 hover:bg-amber-100 text-amber-950 font-semibold px-6 py-3.5 rounded-full border border-amber-300/80 shadow-2xs transition-all active:scale-95"
                >
                  <Stethoscope className="w-4 h-4 text-amber-600" />
                  <span>{currentAudience === 'parent' ? 'For Clinics & Partners' : 'For Pet Parents'}</span>
                </button>
              </div>

              {/* Trust Metrics */}
              <div className="pt-3 flex flex-nowrap items-center justify-start gap-2.5 sm:gap-3.5 text-xs sm:text-[15px] lg:text-[16px] text-slate-600 border-t border-slate-200/60 font-medium whitespace-nowrap overflow-hidden -ml-0.5">
                {currentAudience === 'parent' ? (
                  <>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-violet-600 shrink-0" />
                      <span>AI Supports—Never Replaces Vets</span>
                    </div>
                    <span className="text-slate-300 shrink-0">·</span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <BellRing className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0" />
                      <span>Day-1 AI Health &amp; Vaccine Sync</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-violet-600 shrink-0" />
                      <span>AI Pre-Visit Clinical Briefs</span>
                    </div>
                    <span className="text-slate-300 shrink-0">·</span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <BellRing className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0" />
                      <span>-40% Front-Desk Admin Load</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Column: Visual Stage */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] rounded-full orbit-ring"></div>
                  <div className="absolute w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] rounded-full border border-amber-400/30"></div>
                </div>

                <div className="relative z-10 rounded-[2rem] overflow-hidden bg-gradient-to-b from-violet-100/70 via-[#FFFBF5] to-amber-50/80 p-3 sm:p-4 shadow-card border border-white">
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-gradient-to-br from-violet-50 via-[#FFFBF5] to-amber-100/80 flex items-center justify-center">
                    {/* SVG Retriever & Cat */}
                    <svg
                      id="heroPetComposition"
                      className="w-full h-full object-cover"
                      viewBox="0 0 800 600"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Golden retriever and tabby cat in Violet and Amber lighting"
                    >
                      <defs>
                        <radialGradient id="studioAura" cx="52%" cy="42%" r="58%">
                          <stop offset="0%" stopColor="#FFFBF5"></stop>
                          <stop offset="52%" stopColor="#F5F3FF" stopOpacity="0.92"></stop>
                          <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0.75"></stop>
                        </radialGradient>
                        <radialGradient id="amberWarmth" cx="72%" cy="55%" r="42%">
                          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.22"></stop>
                          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"></stop>
                        </radialGradient>
                        <linearGradient id="violetRug" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#EDE9FE" stopOpacity="0.75"></stop>
                          <stop offset="50%" stopColor="#FFFBF5"></stop>
                          <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.7"></stop>
                        </linearGradient>
                        <linearGradient id="goldenFur" x1="25%" y1="15%" x2="65%" y2="85%">
                          <stop offset="0%" stopColor="#FBBF24"></stop>
                          <stop offset="55%" stopColor="#D97706"></stop>
                          <stop offset="100%" stopColor="#92400E"></stop>
                        </linearGradient>
                        <linearGradient id="goldenLight" x1="30%" y1="10%" x2="60%" y2="65%">
                          <stop offset="0%" stopColor="#FEF3C7"></stop>
                          <stop offset="65%" stopColor="#F59E0B"></stop>
                          <stop offset="100%" stopColor="#B45309"></stop>
                        </linearGradient>
                        <linearGradient id="tabbyFur" x1="45%" y1="25%" x2="80%" y2="85%">
                          <stop offset="0%" stopColor="#E5E7EB"></stop>
                          <stop offset="50%" stopColor="#9CA3AF"></stop>
                          <stop offset="100%" stopColor="#4B5563"></stop>
                        </linearGradient>
                        <linearGradient id="tabbyWarm" x1="40%" y1="30%" x2="78%" y2="85%">
                          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.45"></stop>
                          <stop offset="100%" stopColor="#78350F" stopOpacity="0.22"></stop>
                        </linearGradient>
                        <filter id="softDrop" x="-15%" y="-15%" width="130%" height="130%">
                          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#9333EA" floodOpacity="0.14"></feDropShadow>
                        </filter>
                      </defs>

                      <rect width="800" height="600" fill="url(#studioAura)"></rect>
                      <rect width="800" height="600" fill="url(#amberWarmth)"></rect>

                      <g fill="#9333EA" opacity="0.07">
                        <path d="M65 110 C120 75, 175 105, 185 160 C130 175, 80 155, 65 110 Z"></path>
                        <path d="M735 95 C680 65, 625 95, 615 150 C670 165, 720 140, 735 95 Z"></path>
                        <path d="M710 215 C748 195, 775 220, 772 258 C735 262, 712 245, 710 215 Z"></path>
                      </g>

                      <ellipse cx="415" cy="508" rx="285" ry="44" fill="url(#violetRug)" stroke="#9333EA" strokeOpacity="0.08" strokeWidth="2"></ellipse>
                      <ellipse cx="415" cy="508" rx="235" ry="26" fill="none" stroke="#F59E0B" strokeOpacity="0.22" strokeWidth="1.5" strokeDasharray="6 6"></ellipse>

                      {/* Golden Retriever */}
                      <g filter="url(#softDrop)">
                        <ellipse cx="275" cy="442" rx="92" ry="58" fill="url(#goldenFur)"></ellipse>
                        <path d="M235 320 C295 305, 375 325, 398 395 C412 442, 392 492, 345 502 L225 502 C192 495, 188 455, 205 410 Z" fill="url(#goldenFur)"></path>
                        <path d="M312 342 C345 352, 368 388, 364 438 C345 452, 315 446, 298 418 C288 390, 294 358, 312 342 Z" fill="url(#goldenLight)"></path>
                        <g fill="url(#goldenLight)">
                          <path d="M275 462 C292 462, 306 474, 306 492 C306 502, 294 507, 276 507 C258 507, 250 499, 252 486 C254 472, 262 462, 275 462 Z"></path>
                          <path d="M336 466 C355 466, 370 478, 370 496 C370 506, 356 511, 336 511 C318 511, 310 502, 312 489 C314 475, 323 466, 336 466 Z"></path>
                        </g>
                        <path d="M254 316 Q315 338 372 315" stroke="#9333EA" strokeWidth="11" strokeLinecap="round"></path>
                        <path d="M254 316 Q315 338 372 315" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 8" opacity="0.65"></path>
                        <circle cx="332" cy="336" r="10" fill="#F59E0B" stroke="#FFFBF5" strokeWidth="2.5"></circle>
                        <circle cx="332" cy="336" r="3" fill="#9333EA"></circle>
                        <path d="M246 185 C215 195, 202 248, 214 295 C220 315, 238 312, 246 286 C254 256, 258 215, 246 185 Z" fill="#B45309"></path>
                        <path d="M364 185 C395 195, 408 248, 396 295 C390 315, 372 312, 364 286 C356 256, 352 215, 364 185 Z" fill="#B45309"></path>
                        <path d="M244 184 C268 158, 342 158, 366 184 C382 204, 380 256, 362 288 C344 318, 266 318, 248 288 C230 256, 228 204, 244 184 Z" fill="url(#goldenLight)"></path>
                        <circle cx="277" cy="222" r="10.5" fill="#1E1B18"></circle>
                        <circle cx="274" cy="218.5" r="3.5" fill="#FFFFFF"></circle>
                        <circle cx="333" cy="222" r="10.5" fill="#1E1B18"></circle>
                        <circle cx="330" cy="218.5" r="3.5" fill="#FFFFFF"></circle>
                        <ellipse cx="305" cy="254" rx="34" ry="25" fill="#FEF3C7" opacity="0.75"></ellipse>
                        <path d="M291 244 C291 237, 319 237, 319 244 C319 252, 311 258, 305 258 C299 258, 291 252, 291 244 Z" fill="#1E293B"></path>
                        <path d="M283 266 Q294 277 305 267 Q316 277 327 266" stroke="#451A03" strokeWidth="2.6" strokeLinecap="round" fill="none"></path>
                        <path d="M296 270 C296 286, 314 286, 314 270 Z" fill="#FB7185"></path>
                      </g>

                      {/* Tabby Cat */}
                      <g filter="url(#softDrop)">
                        <path d="M565 468 C618 468, 636 425, 616 392 C604 374, 586 382, 594 400 C600 414, 592 445, 558 448 Z" fill="url(#tabbyFur)"></path>
                        <path d="M448 358 C488 350, 542 368, 558 422 C568 456, 555 492, 524 498 L442 498 C416 492, 412 456, 424 414 Z" fill="url(#tabbyFur)"></path>
                        <path d="M448 358 C488 350, 542 368, 558 422 C568 456, 555 492, 524 498 L442 498 C416 492, 412 456, 424 414 Z" fill="url(#tabbyWarm)"></path>
                        <path d="M466 368 C484 374, 496 402, 492 435 C478 442, 458 436, 452 412 C448 392, 454 376, 466 368 Z" fill="#FFFBF5"></path>
                        <ellipse cx="464" cy="488" rx="18" ry="12" fill="#FFFBF5"></ellipse>
                        <ellipse cx="508" cy="489" rx="18" ry="12" fill="#FFFBF5"></ellipse>
                        <path d="M438 255 L428 202 L474 236 Z" fill="url(#tabbyFur)"></path>
                        <path d="M538 255 L548 202 L502 236 Z" fill="url(#tabbyFur)"></path>
                        <path d="M432 256 C452 232, 524 232, 544 256 C558 274, 554 318, 534 342 C514 366, 462 366, 442 342 C422 318, 418 274, 432 256 Z" fill="url(#tabbyFur)"></path>
                        <ellipse cx="464" cy="288" rx="11.5" ry="12.5" fill="#F59E0B"></ellipse>
                        <ellipse cx="464" cy="288" rx="4" ry="10.5" fill="#0F172A"></ellipse>
                        <ellipse cx="512" cy="288" rx="11.5" ry="12.5" fill="#F59E0B"></ellipse>
                        <ellipse cx="512" cy="288" rx="4" ry="10.5" fill="#0F172A"></ellipse>
                        <ellipse cx="474" cy="316" rx="14" ry="10" fill="#FFFBF5" opacity="0.85"></ellipse>
                        <ellipse cx="502" cy="316" rx="14" ry="10" fill="#FFFBF5" opacity="0.85"></ellipse>
                        <path d="M482 306 L494 306 L488 313 Z" fill="#F472B6"></path>
                      </g>

                      <path d="M362 162 Q435 125 512 178" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5 5" opacity="0.45" fill="none"></path>
                      <circle cx="436" cy="147" r="5" fill="#F59E0B" opacity="0.75"></circle>
                    </svg>

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-violet-950/35 to-transparent pointer-events-none"></div>

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto glass-node rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-sm">
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600"></span>
                      </span>
                      <div className="flex flex-col justify-center text-left pt-2.5">
                        <p className="font-bold text-xs text-[#0F172A] leading-none mb-1.5">AI Wellness Sync Active</p>
                        <p className="text-[11px] text-slate-500 leading-none">Vitals, Diet &amp; Vaccine Schedule Optimal</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="hidden sm:flex glass-node rounded-2xl px-3.5 py-2.5 items-center gap-2.5 absolute -top-5 right-4 z-20 animate-float shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-violet-900 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex flex-col justify-center text-left pt-2.5">
                    <div className="flex items-center gap-1.5 leading-none mb-1.5">
                      <span className="font-display font-bold text-sm text-[#0F172A]">GreenLane Pet AI</span>
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-700 rounded-md">LIVE</span>
                    </div>
                    <p className="text-[11px] font-medium text-violet-700 leading-none">Intelligent Companion &amp; Clinical Co-Pilot</p>
                  </div>
                </div>

                <div className="glass-node rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 absolute -top-4 left-2 sm:-left-5 z-20 animate-float-delayed shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 border border-violet-100">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center text-left pt-2.5">
                    <p className="text-[11px] text-slate-500 font-medium leading-none mb-1.5">Resting Vitals</p>
                    <p className="text-xs font-bold text-[#0F172A] leading-none whitespace-nowrap">
                      AI Baseline 78 BPM · <span className="text-violet-600 font-semibold">Normal</span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex glass-node rounded-2xl px-3.5 py-2.5 items-center gap-2.5 absolute top-1/2 -left-7 -translate-y-1/2 z-20 animate-float-slow shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/70">
                    <CalendarCheck2 className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center text-left pt-2.5">
                    <p className="text-[11px] text-slate-500 font-medium leading-none mb-1.5">Smart AI Reminder</p>
                    <p className="text-xs font-bold text-[#0F172A] leading-none whitespace-nowrap">Booster Due in 5d</p>
                  </div>
                </div>

                <div className="hidden sm:flex glass-node rounded-2xl px-3.5 py-2.5 items-center gap-2.5 absolute top-1/3 -right-5 z-20 animate-float shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/70">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center text-left pt-2.5">
                    <p className="text-[11px] text-slate-500 font-medium leading-none mb-1.5">AI Auto-Refill</p>
                    <p className="text-xs font-bold text-[#0F172A] leading-none whitespace-nowrap">Joint &amp; Coat Diet Refill Calculated</p>
                  </div>
                </div>

                <div className="hidden sm:flex glass-node rounded-2xl px-3.5 py-2.5 items-center gap-2.5 absolute -bottom-5 right-3 sm:-right-4 z-20 animate-float-delayed shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center shrink-0 border border-violet-100">
                    <Home className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center text-left pt-2.5">
                    <p className="text-[11px] text-slate-500 font-medium leading-none mb-1.5">Verified Stays</p>
                    <p className="text-xs font-bold text-[#0F172A] leading-none whitespace-nowrap">3 AI-Screened Boarding Hosts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DAY-ONE CORE VS. CONNECTED ECOSYSTEM + 8 PILLARS */}
      <section id="pillars" className="relative z-20 -mt-10 sm:-mt-14 pb-4 sm:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-card border border-slate-100 p-5 sm:p-6">
            {/* Header: Title, Description & Filter Tabs */}
            <div className="pb-5 mb-5 border-b border-slate-100 space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-base sm:text-lg lg:text-[20px] font-bold uppercase tracking-wider text-amber-700">
                    Scope Clarity · Day-One AI Core vs. Connected AI Ecosystem
                  </p>
                  <p className="text-sm sm:text-base lg:text-[17px] text-slate-700 mt-1 leading-relaxed">
                    Day-One AI Core powers real-time triage, preventative health reminders &amp; clinic intake immediately; Connected AI Ecosystem links specialized care, smart hardware &amp; trusted partners.
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 shrink-0 self-start lg:self-center">
                  <button
                    type="button"
                    onClick={() => setPillarScopeFilter('all')}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${pillarScopeFilter === 'all'
                      ? 'bg-white text-violet-950 shadow-xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    <span>All</span>
                    <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-extrabold ${pillarScopeFilter === 'all' ? 'bg-violet-100 text-violet-800' : 'bg-slate-200/70 text-slate-600'
                      }`}>
                      8
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPillarScopeFilter('day_one')}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${pillarScopeFilter === 'day_one'
                      ? 'bg-violet-900 text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-violet-900'
                      }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                    <span>Day-One Core</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPillarScopeFilter('ecosystem')}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${pillarScopeFilter === 'ecosystem'
                      ? 'bg-amber-400 text-slate-950 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-amber-800'
                      }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>AI Ecosystem</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
              {filteredPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                const isActive = pillar.id === activePillarId;
                const isDayOne = pillar.scope === 'day_one';
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => { setActivePillarId(pillar.id); trackEvent('care_pillar_selected', { pillar: pillar.id }); }}
                    className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-xl transition-all duration-200 border-2 relative ${isActive
                      ? 'bg-violet-900 text-white border-violet-950 shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-[#FFFBF5] text-slate-700 border-slate-300 hover:border-amber-400 hover:shadow-xs'
                      }`}
                  >
                    <span className={`text-[12px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 ${isActive
                      ? 'bg-amber-400 text-violet-950'
                      : isDayOne
                        ? 'bg-violet-50 text-violet-800'
                        : 'bg-amber-50 text-amber-800'
                      }`}>
                      {isDayOne ? 'Day 1' : 'Network'}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-1.5 transition-colors border ${isActive
                      ? 'bg-amber-400 text-violet-950 border-amber-300 shadow-xs'
                      : pillar.color
                      }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[12px] font-bold tracking-tight">{pillar.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Preview Drawer */}
            <div className="mt-6 border-2 border-slate-300 px-5 sm:px-7 py-6 rounded-2xl bg-[#FAF9F6] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300">
              <div className="flex items-start sm:items-center gap-4 pt-1 sm:pt-2">
                <div className="w-14 h-14 rounded-2xl bg-violet-900 text-amber-400 flex items-center justify-center shrink-0 shadow-sm mt-1 sm:mt-0">
                  {React.createElement(selectedPillar.icon, { className: 'w-7 h-7' })}
                </div>
                <div className="pt-1 sm:pt-2 space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-display font-bold text-lg sm:text-xl text-[#0F172A]">{selectedPillar.title}</span>
                    <span className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-2xs ${selectedPillar.scope === 'day_one' ? 'bg-violet-900 text-amber-300' : 'bg-amber-500 text-slate-950'
                      }`}>
                      {selectedPillar.scopeLabel}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 shadow-2xs">
                      {selectedPillar.badge}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
                    {selectedPillar.desc}
                  </p>
                </div>
              </div>
              <a
                href="#ai-assistant"
                className="inline-flex items-center gap-2 text-sm font-bold text-violet-900 hover:text-white hover:bg-violet-900 bg-white px-6 py-3 rounded-full border-2 border-violet-300 shadow-sm shrink-0 transition-all hover:border-violet-900 active:scale-95"
              >
                <span>Ask AI About This</span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI PET ASSISTANT INTERACTIVE SECTION */}
      <section id="ai-assistant" className="pt-4 sm:pt-6 pb-8 sm:pb-12 bg-[#FFFBF5]/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Everyday Guidance vs Urgent Vet Escalation */}
          <div className="mb-8 lg:mb-10 rounded-2xl bg-white border border-amber-200/80 shadow-soft p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-5 flex items-start gap-3.5 p-3.5 rounded-xl bg-violet-50/80 border border-violet-200/60">
              <div className="w-10 h-10 rounded-xl bg-violet-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base lg:text-[18px] font-bold text-violet-950 leading-none mb-1">
                  Everyday Guidance (AI Companion)
                </p>
                <p className="text-xs sm:text-sm lg:text-[16px] text-slate-600 leading-snug">
                  Vaccine schedules, routine prep, nutrition comparisons, and pre-visit notes to organize care smoothly.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-start gap-3.5 p-3.5 rounded-xl bg-amber-50/90 border border-amber-300/80">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base lg:text-[18px] font-bold text-amber-950 whitespace-nowrap leading-none mb-1">
                  Urgent Vet Escalation (Red-Flag)
                </p>
                <p className="text-xs sm:text-sm lg:text-[16px] text-slate-700 leading-snug">
                  Difficulty breathing, collapse, active seizures, uncontrolled bleeding, or suspected toxin ingestion requires immediate vet care.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-2.5 h-full">
              <button
                type="button"
                onClick={() => handleTriggerScenario('chocolate')}
                className="w-full inline-flex items-center justify-center gap-1.5 text-center text-xs font-bold bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-sm"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                <span className="whitespace-nowrap">Test Red-Flag Check</span>
              </button>
              <button
                type="button"
                onClick={() => handleOpenDemoModal('clinic')}
                className="w-full inline-flex items-center justify-center gap-1.5 text-center text-xs font-bold bg-violet-900 hover:bg-violet-800 active:scale-95 text-white px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-sm"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="whitespace-nowrap">Contact Vet / Clinic</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Left 4 cols */}
            <div className="lg:col-span-4 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-700">
                <span className="w-6 h-0.5 bg-amber-500 rounded-full"></span>
                <span>AI PET ASSISTANT &amp; CLINICAL CO-PILOT</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#0F172A] leading-tight">
                Your Pet’s<br />
                <span className="text-violet-950">24/7 AI Health Companion</span>
              </h2>

              <p className="text-slate-700 text-base lg:text-[18px] leading-relaxed">
                Get instant emergency triage with veterinary guardrails, orchestrate multi-service care schedules, and compare prescription nutrition—all through a single proactive AI conversation.
              </p>

              <div className="space-y-3 pt-1">
                <p className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">
                  Test Real-World AI Scenarios:
                </p>

                <button
                  onClick={() => handleTriggerScenario('chocolate')}
                  className="w-full text-left flex items-center gap-3 p-3.5 rounded-xl bg-white hover:bg-amber-50/80 border border-slate-200/90 hover:border-amber-400 shadow-2xs transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1 flex flex-col justify-center pt-1.5">
                    <p className="text-sm lg:text-[16px] font-bold text-[#0F172A] truncate leading-none mb-1.5">Emergency Triage: Ate dark chocolate</p>
                    <p className="text-xs sm:text-[13px] text-slate-500 truncate leading-none">Instant toxicity calculator &amp; urgent vet slot</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0" />
                </button>

                <button
                  onClick={() => handleTriggerScenario('routine')}
                  className="w-full text-left flex items-center gap-3 p-3.5 rounded-xl bg-white hover:bg-violet-50/80 border border-slate-200/90 hover:border-violet-400 shadow-2xs transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-800 flex items-center justify-center shrink-0 group-hover:bg-violet-900 group-hover:text-amber-400 transition-colors">
                    <CalendarPlus className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1 flex flex-col justify-center pt-1.5">
                    <p className="text-sm lg:text-[16px] font-bold text-[#0F172A] truncate leading-none mb-1.5">Routine Care: Annual booster &amp; grooming</p>
                    <p className="text-xs sm:text-[13px] text-slate-500 truncate leading-none">Smart calendar sync + bundled service booking</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-700 shrink-0" />
                </button>
              </div>
            </div>

            {/* Center: Phone Mockup */}
            <div className="lg:col-span-4 flex justify-center relative">
              <div className="w-full max-w-[335px] bg-[#0F172A] rounded-[2.5rem] p-1.5 shadow-2xl border-[1.5px] border-slate-800 relative transform lg:-rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="w-24 h-4 bg-[#0F172A] rounded-b-xl mx-auto absolute top-1.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
                </div>

                <div className="bg-white rounded-[2.25rem] overflow-hidden flex flex-col h-[560px] border border-slate-100">
                  {/* Status Bar */}
                  <div className="px-6 pt-3 pb-1 flex items-center justify-between text-[11px] font-semibold text-[#0F172A]">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="w-3.5 h-3.5" />
                      <BatteryFull className="w-4 h-4 text-violet-600" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="px-4 py-2.5 border-b border-slate-100 bg-[#FFFBF5]/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shrink-0 bg-white border border-slate-200/80 shadow-2xs p-0.5">
                          <Image
                            src="/brand-logo.png"
                            alt="GreenLane Logo"
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="font-display font-bold text-xs text-[#0F172A] m-0 mb-0 leading-tight">
                            Luna <span className="text-violet-600">AI</span>
                          </p>
                          <p className="text-[10px] text-violet-600 font-medium flex items-center gap-1 m-0 mb-0 mt-0.5 leading-tight">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0"></span>
                            <span>AI Clinical &amp; Care Sync</span>
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handleResetChat}
                        title="Reset Chat"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-violet-800 hover:bg-violet-50 transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between bg-white border border-violet-200/70 rounded-full px-3 py-1 text-[10px]">
                      <span className="font-bold text-[#0F172A] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        Max · Golden Retriever, 3y (29 kg)
                      </span>
                      <span className="text-violet-700 font-semibold">Synced</span>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div ref={chatScrollRef} className="flex-1 p-3.5 overflow-y-auto chat-scroll space-y-3 bg-gradient-to-b from-white to-[#FFFBF5]/40">
                    {chatMessages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'items-start gap-2'}`}>
                        {msg.sender === 'ai' && (
                          <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center shrink-0 bg-white border border-violet-200/80 shadow-2xs p-0.5">
                            <Image
                              src="/brand-logo.png"
                              alt="Luna AI"
                              width={26}
                              height={26}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <div className={`text-sm rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-2xs ${msg.sender === 'user'
                          ? 'bg-violet-900 text-white rounded-tr-none max-w-[84%]'
                          : 'bg-violet-50/95 border border-violet-100 text-[#0F172A] rounded-tl-none max-w-[86%] space-y-1.5'
                          }`}>
                          {msg.tag && (
                            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md">
                              {msg.tag}
                            </span>
                          )}
                          {msg.isHtml ? (
                            <div className="space-y-1" dangerouslySetInnerHTML={{ __html: msg.text }} />
                          ) : (
                            <p className="m-0 mb-0">{msg.text}</p>
                          )}
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex items-start gap-2">
                        <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center shrink-0 bg-white border border-violet-200/80 shadow-2xs p-0.5">
                          <Image
                            src="/brand-logo.png"
                            alt="Luna AI"
                            width={26}
                            height={26}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="bg-violet-50 border border-violet-100 text-violet-800 text-sm rounded-2xl rounded-tl-none px-3.5 py-2.5 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                          <span className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input Form */}
                  <form onSubmit={handleCustomChat} className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask anything about Max..."
                      className="flex-1 text-xs bg-slate-100/90 focus:bg-white text-[#0F172A] placeholder-slate-400 px-3.5 py-2.5 rounded-full border border-transparent focus:border-violet-600 focus:outline-none transition-all"
                    />
                    <button
                      type="submit"
                      className="w-9 h-9 rounded-full bg-violet-900 hover:bg-violet-800 text-amber-400 flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-90"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right 4 cols */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative rounded-2xl bg-gradient-to-br from-amber-50 via-[#FFFBF5] to-violet-50/70 border border-amber-200/60 p-4 sm:p-5 shadow-soft overflow-hidden">
                <h3 className="font-display font-bold text-base sm:text-lg lg:text-[20px] text-[#0F172A] mb-3">
                  Day-One AI Core vs. Connected Ecosystem
                </h3>

                <div className="space-y-3 relative z-10 text-xs">
                  <div className="rounded-xl bg-white/90 border border-violet-200/80 p-3 sm:p-3.5 space-y-2">
                    <p className="font-extrabold uppercase tracking-wider text-xs sm:text-[13px] text-violet-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-violet-600"></span>
                      Live on Day One (Core)
                    </p>
                    <ul className="space-y-1.5 text-slate-700 font-medium text-xs sm:text-[13px] lg:text-[14px]">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-violet-700 shrink-0" />
                        <span>24/7 AI Companion &amp; Emergency Triage Guardrails</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-violet-700 shrink-0" />
                        <span>Digital Health Passports, Vaccine Reminders &amp; Booking</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-white/90 border border-amber-200/80 p-3 sm:p-3.5 space-y-2">
                    <p className="font-extrabold uppercase tracking-wider text-xs sm:text-[13px] text-amber-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      Connected Ecosystem Network
                    </p>
                    <ul className="space-y-1.5 text-slate-700 font-medium text-xs sm:text-[13px] lg:text-[14px]">
                      <li className="flex items-center gap-2">
                        <Network className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>AI Grooming, Walking, Training &amp; Boarding</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Network className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>Prescription Nutrition &amp; Smart Wearables Telemetry</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Health Timeline Preview */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-4 sm:p-5 shadow-soft">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse"></span>
                    <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-[#0F172A]">AI Health Timeline · Max</span>
                  </div>
                  <span className="text-xs font-semibold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full">Day-1 AI Core Sync</span>
                </div>

                <div className="rounded-xl border border-slate-200/80 divide-y divide-slate-100 overflow-hidden bg-white">
                  <div className="flex items-center justify-between p-3 bg-amber-50/40 hover:bg-amber-50/70 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <Syringe className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col justify-center text-left">
                        <p className="text-xs sm:text-sm font-bold text-[#0F172A] leading-none mb-1">DHPP Annual Booster</p>
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-none">GreenLane Vet Center · Auto-held</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-md">In 5 days</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-violet-50/30 hover:bg-violet-50/60 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center shrink-0">
                        <Utensils className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col justify-center text-left">
                        <p className="text-xs sm:text-sm font-bold text-[#0F172A] leading-none mb-1">Royal Canin Joint Care Refill</p>
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-none">Connected Partner Diet · 29 kg</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-violet-800 bg-violet-100/80 px-2.5 py-1 rounded-md">Nov 28</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4B. AI PLATFORM FEATURES & CONNECTED ECOSYSTEM */}
      <section id="ai-features" className="pt-8 sm:pt-12 pb-8 sm:pb-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-700">BALANCED FOR BOTH SIDES</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#9333EA] mt-2">
              Built for Pet Parents &amp; Veterinary Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            <div className="rounded-xl bg-white border-2 border-slate-300 p-4 sm:p-5 flex flex-col h-full shadow-sm hover:shadow-md hover:border-violet-400 transition-all">
              <div className="flex items-center">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-900 text-amber-300">
                  Pet Parents · Day-One AI
                </span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#0F172A] mt-1.5 mb-0 leading-tight">
                24/7 AI Health &amp; Triage
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-normal mt-1 mb-0">
                Instant symptom checks, personalized diet calculations, and automatic booster alerts with clear emergency guardrails.
              </p>
            </div>

            <div className="rounded-xl bg-white border-2 border-slate-300 p-4 sm:p-5 flex flex-col h-full shadow-sm hover:shadow-md hover:border-violet-400 transition-all">
              <div className="flex items-center">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-900 text-amber-300">
                  Clinics · Day-One AI
                </span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#0F172A] mt-1.5 mb-0 leading-tight">
                AI Clinical Pre-Intake
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-normal mt-1 mb-0">
                Structured symptom summaries, timeline exports, and automated reminders that slash front-desk telephone load by 40%.
              </p>
            </div>

            <div className="rounded-xl bg-white border-2 border-slate-300 p-4 sm:p-5 flex flex-col h-full shadow-sm hover:shadow-md hover:border-violet-400 transition-all">
              <div className="flex items-center">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-900 text-amber-300">
                  Ecosystem · Connected AI
                </span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#0F172A] mt-1.5 mb-0 leading-tight">
                Smart Services &amp; Telemetry
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-normal mt-1 mb-0">
                AI-orchestrated grooming, training, walking schedules, and live collar/feeder health telemetry consolidated in one feed.
              </p>
            </div>

            <div className="rounded-xl bg-white border-2 border-slate-300 p-4 sm:p-5 flex flex-col h-full shadow-sm hover:shadow-md hover:border-violet-400 transition-all">
              <div className="flex items-center">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-900 text-amber-300">
                  Partners · Connected AI
                </span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#0F172A] mt-1.5 mb-0 leading-tight">
                Precision Nutrition Sync
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-normal mt-1 mb-0">
                Direct integration with veterinary prescription diets, pharmaceutical reminders, and verified animal welfare networks.
              </p>
            </div>
          </div>

          {/* Connected Ecosystem Nodes & Partners */}
          <div id="connected-ecosystem" className="mt-12 rounded-xl bg-[#FFFBF5] border-2 border-slate-300 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-violet-900">Connected AI Ecosystem &amp; Trusted Partners</span>
                <p className="text-sm sm:text-base text-slate-700 mt-1 max-w-2xl leading-relaxed">
                  <strong className="text-[#0F172A]">{ecosystemNodesInfo[selectedEcoNode].tag}:</strong>{' '}
                  {ecosystemNodesInfo[selectedEcoNode].text}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border-2 border-slate-300 shadow-2xs hover:border-violet-300 hover:shadow-xs transition-all">
                  <span className="w-2 h-2 rounded-full bg-[#E2001A] shrink-0"></span>
                  <span className="font-display font-black text-xs sm:text-sm tracking-wider text-[#D3122A]">ROYAL CANIN</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border-2 border-slate-300 shadow-2xs hover:border-violet-300 hover:shadow-xs transition-all">
                  <span className="w-2 h-2 rounded-full bg-[#F36C21] shrink-0"></span>
                  <span className="font-display font-black text-xs sm:text-sm tracking-tight text-[#0F172A]">zoetis</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border-2 border-slate-300 shadow-2xs hover:border-violet-300 hover:shadow-xs transition-all">
                  <span className="w-2 h-2 rounded-full bg-[#00857C] shrink-0"></span>
                  <span className="font-display font-bold text-xs sm:text-sm tracking-tight text-[#0F172A]">Boehringer Ingelheim</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6">
              {[
                { key: 'clinics', label: 'Veterinary Clinic', sub: 'Day-1 Core + Sync' },
                { key: 'services', label: 'Pet Services', sub: 'Groom, walk & stay' },
                { key: 'brands', label: 'Pet Brands', sub: 'Diets & essentials' },
                { key: 'community', label: 'Community', sub: 'Local care circles' },
                { key: 'welfare', label: 'Animal Welfare', sub: 'Shelters & adoption' },
                { key: 'hardware', label: 'Smart Hardware', sub: 'Collars & feeders' }
              ].map(node => (
                <button
                  key={node.key}
                  type="button"
                  onClick={() => { setSelectedEcoNode(node.key); trackEvent('ecosystem_node_selected', { node: node.key }); }}
                  className={`p-3 sm:p-3.5 rounded-xl text-center flex flex-col items-center justify-center transition-all min-h-[86px] ${
                    selectedEcoNode === node.key
                      ? 'bg-violet-50/60 border-2 border-violet-600 shadow-xs'
                      : 'bg-white border-2 border-slate-300 hover:border-violet-300 hover:shadow-xs'
                  }`}
                >
                  <p className="text-[14px] sm:text-[15px] font-bold text-[#0F172A] leading-tight m-0 mb-0">{node.label}</p>
                  <p className={`text-xs sm:text-[13px] mt-1.5 leading-tight m-0 mb-0 ${
                    selectedEcoNode === node.key ? 'text-violet-700 font-semibold' : 'text-slate-500'
                  }`}>
                    {node.sub}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 14-DAY WORKFLOW & ONBOARDING */}
      <section id="workflow" className="pt-6 sm:pt-8 pb-8 sm:pb-10 bg-[#FAF9F6] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading & Description with Rollout Highlights on Right */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-700">
                <span className="w-6 h-0.5 bg-amber-500 rounded-full"></span>
                <span>HOW IT WORKS IN 14 DAYS</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#0F172A] leading-tight">
                14-Day Structured AI<br />
                <span className="text-violet-800">Rollout Workflow</span>
              </h2>
              <p className="text-base lg:text-[18px] text-slate-700 leading-relaxed">
                Follow each stage from data onboarding and AI triage customization to clinical validation and live analytics across clinics, care partners, and pet parents.
              </p>
            </div>

            {/* Right Side: Key Rollout Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 shrink-0 lg:max-w-md w-full">
              <div className="rounded-xl bg-white border-2 border-slate-300 p-4 sm:p-5 shadow-sm flex flex-col items-center justify-center text-center hover:border-violet-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-800 flex items-center justify-center mb-2.5 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-violet-700" />
                </div>
                <p className="text-sm font-bold text-[#0F172A] leading-snug">Zero Live Disruption</p>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">2-way PIMS sync without downtime during clinic hours</p>
              </div>

              <div className="rounded-xl bg-white border-2 border-slate-300 p-4 sm:p-5 shadow-sm flex flex-col items-center justify-center text-center hover:border-violet-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-2.5 shadow-2xs">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-sm font-bold text-[#0F172A] leading-snug">Shadow-Tested Pilot</p>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Vets validate pre-intake before pet parents interact</p>
              </div>
            </div>
          </div>

          {/* 4 Step Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {workflowSteps.map(s => {
              const active = s.step === activeWorkflowStep;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => { setActiveWorkflowStep(s.step); trackEvent('workflow_step_selected', { step: s.step }); }}
                  className={`text-center flex flex-col items-center justify-center p-4.5 rounded-xl border-2 transition-all ${
                    active
                      ? 'bg-violet-900 text-white border-violet-700 shadow-lg ring-2 ring-violet-500/30'
                      : 'bg-white hover:bg-slate-50 text-[#0F172A] border-slate-300 shadow-sm hover:border-violet-400 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold leading-tight">
                    <span className={active ? 'text-amber-300' : 'text-amber-700'}>STEP 0{s.step}</span>
                    <span className={active ? 'text-violet-200/80' : 'text-slate-400'}>·</span>
                    <span className={active ? 'text-violet-200' : 'text-slate-500'}>{s.windowLabel.split('·')[0].trim()}</span>
                  </div>
                  <p className="font-display font-bold text-sm sm:text-base leading-tight mt-1">{s.tabTitle}</p>
                  <p className={`text-xs sm:text-[13px] leading-tight mt-0.5 ${active ? 'text-violet-100/80' : 'text-slate-500'}`}>{s.tabSub}</p>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="rounded-2xl bg-white border-2 border-slate-300 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="space-y-4">
              {/* Header Bar: Phase Label on Left, Region Switcher on Right */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/70">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-violet-900 text-amber-300 shadow-2xs">
                    {currentStepObj.windowLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
                    {currentRegionObj.label}
                  </span>
                </div>

                <div className="inline-flex items-center p-1 rounded-full bg-[#FAF9F6] border border-slate-300 shadow-2xs overflow-x-auto max-w-full">
                  {[
                    { key: 'be_eu', label: 'Belgium / EU' },
                    { key: 'bg_eu', label: 'Bulgaria / EU' },
                    { key: 'in_highvol', label: 'India High-Vol' },
                    { key: 'global', label: 'Global' }
                  ].map(reg => (
                    <button
                      key={reg.key}
                      type="button"
                      onClick={() => { setActiveWorkflowRegion(reg.key); trackEvent('workflow_region_selected', { region: reg.key }); }}
                      className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                        activeWorkflowRegion === reg.key
                          ? 'bg-violet-900 text-white shadow-xs'
                          : 'text-slate-600 hover:text-violet-900 hover:bg-white'
                      }`}
                    >
                      {reg.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[28px] text-[#0F172A] mb-0">{currentStepObj.title}</h3>
                <p className="text-base lg:text-[17px] text-slate-700 mt-2 mb-0 leading-relaxed">{currentStepObj.summary}</p>
              </div>

              <div className="rounded-xl bg-[#FAF9F6] border-2 border-violet-200 px-4 py-3 text-sm sm:text-[15px] font-medium text-slate-700 flex items-center gap-2.5 shadow-2xs">
                <Globe className="w-4 h-4 text-violet-700 shrink-0" />
                <span>{currentRegionObj.badgeText}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-[#FAF9F6] border-2 border-slate-300 p-4 sm:p-5 space-y-2 shadow-sm hover:border-violet-400 hover:bg-white transition-all">
                <p className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-violet-900 m-0 mb-0">Vet Clinics</p>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed m-0 mb-0">{currentStepObj.clinicAction}</p>
              </div>
              <div className="rounded-xl bg-[#FAF9F6] border-2 border-slate-300 p-4 sm:p-5 space-y-2 shadow-sm hover:border-amber-400 hover:bg-white transition-all">
                <p className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-amber-700 m-0 mb-0">Care &amp; Brand Partners</p>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed m-0 mb-0">{currentStepObj.providerAction}</p>
              </div>
              <div className="rounded-xl bg-[#FAF9F6] border-2 border-slate-300 p-4 sm:p-5 space-y-2 shadow-sm hover:border-purple-400 hover:bg-white transition-all">
                <p className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-violet-800 m-0 mb-0">Pet Parents</p>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed m-0 mb-0">{currentStepObj.parentAction}</p>
              </div>
            </div>

            {/* Stage Deliverables & Readiness - Brought Down */}
            <div className="rounded-xl bg-[#FAF9F6] border-2 border-slate-300 p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <p className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-violet-900 m-0 mb-0">Stage Deliverables &amp; Readiness</p>
                <span className="text-xs sm:text-sm text-slate-500 font-medium">Phase 0{currentStepObj.step} Verified Milestones</span>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm sm:text-[15px] text-slate-700">
                {[...currentStepObj.deliverables, currentRegionObj.extraDeliverable].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white border border-slate-300/80 rounded-lg p-3 sm:p-3.5 shadow-2xs">
                    <CheckCircle2 className="w-4.5 h-4.5 text-violet-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-sm sm:text-base text-slate-700 font-semibold">Ready to map this stage to your team?</span>
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-violet-900 hover:bg-violet-800 text-white text-sm sm:text-base font-bold px-7 py-3 rounded-full transition-colors shrink-0 shadow-sm"
                >
                  <span>Configure in Demo</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section id="pricing" className="pt-6 sm:pt-8 pb-8 sm:pb-12 bg-[#FFFBF5]/70 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-700">
              <span className="w-6 h-0.5 bg-amber-500 rounded-full"></span>
              <span>TRANSPARENT AI ECOSYSTEM PRICING</span>
              <span className="w-6 h-0.5 bg-amber-500 rounded-full"></span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#0F172A] leading-tight">
              Plans That Scale With<br />
              <span className="text-violet-800">Every Pet &amp; Practice</span>
            </h2>
            <p className="text-slate-700 text-base lg:text-[18px] leading-relaxed">
              Start free as a pet parent, launch automated care for a single clinic or studio, or deploy multi-site AI workflows with live CRM &amp; PMS webhooks.
            </p>

            <div className="pt-3 flex items-center justify-center">
              <div className="inline-flex items-center p-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${!isAnnual ? 'bg-violet-900 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-violet-900'
                    }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${isAnnual ? 'bg-violet-900 text-white shadow-xs' : 'text-slate-600 hover:text-violet-900'
                    }`}
                >
                  <span>Annual</span>
                  <span className="text-[10px] font-extrabold bg-amber-400 text-violet-950 px-2 py-0.5 rounded-full">Save 20%</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {/* Tier 1 */}
            <div className="rounded-3xl bg-white border-2 border-slate-300 hover:border-violet-700/60 p-7 sm:p-8 shadow-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="flex flex-col flex-1">
                <div className="h-[185px] lg:h-[205px] flex flex-col justify-start">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-800 bg-violet-50 px-3 py-1 rounded-full">
                      For Pet Parents
                    </span>
                    <span className="text-xs font-semibold text-amber-700">Free Base + Optional Pass</span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl lg:text-[26px] text-[#0F172A] leading-tight">GreenLane AI Plus</h3>
                  <p className="text-xs sm:text-sm font-bold text-amber-700 mt-1">For Pet Parents &amp; Families</p>
                  <p className="text-sm lg:text-[15px] text-slate-600 mt-2 leading-relaxed">
                    Free digital pet passport, vaccine reminders and AI triage with continuous health tracking, priority slots, and smart refills.
                  </p>
                </div>

                <div className="mt-6 h-[56px] pb-3 border-b border-slate-100 flex flex-col justify-center">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A]">Free</span>
                    <span className="text-xs font-semibold text-slate-500">/ base profile</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-3.5 text-xs sm:text-sm lg:text-[15px] text-slate-700 flex-1">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>Unlimited pet profiles, digital health history &amp; automated vaccine reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>24/7 AI symptom triage, toxicity checker &amp; food safety assistant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>Plus: Priority clinic slot holding, multi-service bookings &amp; auto-refill delivery alerts</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setDemoTrack('parent');
                    setDemoPlan('GreenLane AI Plus (Pet Parents)');
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="w-full py-3.5 px-6 rounded-full bg-violet-50 hover:bg-violet-100 active:scale-95 text-violet-950 font-bold text-sm lg:text-base border border-violet-200 transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Free AI Pet Profile</span>
                  <ArrowRight className="w-4 h-4 text-violet-800" />
                </button>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="rounded-3xl bg-violet-950 text-white border-2 border-amber-400/80 p-7 sm:p-8 shadow-card flex flex-col justify-between relative">
              <div className="absolute -top-3.5 right-6 bg-amber-400 text-violet-950 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                Most Popular for Clinics &amp; Studios
              </div>

              <div className="flex flex-col flex-1">
                <div className="h-[185px] lg:h-[205px] flex flex-col justify-start">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-violet-900 px-3 py-1 rounded-full">
                      Clinics, Groomers &amp; Trainers
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl lg:text-[26px] text-white leading-tight">Clinic AI Starter</h3>
                  <p className="text-xs sm:text-sm font-bold text-amber-300 mt-1">Single Clinic or Care Studio</p>
                  <p className="text-sm lg:text-[15px] text-violet-100/90 mt-2 leading-relaxed">
                    Built for independent clinics, salons, and care studios automating reminders, AI pre-visit intake, and seamless bookings.
                  </p>
                </div>

                <div className="mt-6 h-[56px] pb-3 border-b border-violet-800/80 flex flex-col justify-center">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-amber-400">
                      {isAnnual ? currentPricing.starterAnnual : currentPricing.starterMonthly}
                    </span>
                    <span className="text-xs sm:text-sm text-violet-200">{isAnnual ? '/ mo billed annually' : '/ mo billed monthly'}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-3.5 text-xs sm:text-sm lg:text-[15px] text-violet-50 flex-1">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>AI pre-visit clinical triage briefs &amp; digital pet health timeline sync</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>Automated multi-channel vaccine, wellness &amp; grooming rebooking reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>14-day guided AI onboarding + no-show reduction &amp; retention analytics</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setDemoTrack('clinic');
                    setDemoPlan('Clinic AI Starter');
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="w-full py-3.5 px-6 rounded-full bg-amber-400 hover:bg-amber-300 active:scale-95 text-violet-950 font-extrabold text-sm lg:text-base shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Clinic AI Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="rounded-3xl bg-white border-2 border-slate-300 hover:border-violet-700/60 p-7 sm:p-8 shadow-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="flex flex-col flex-1">
                <div className="h-[185px] lg:h-[205px] flex flex-col justify-start">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full">
                      Multi-Site &amp; Enterprise
                    </span>
                    <span className="text-xs font-semibold text-violet-800">Custom Workflows</span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl lg:text-[26px] text-[#0F172A] leading-tight">Practice AI Pro</h3>
                  <p className="text-xs sm:text-sm font-bold text-violet-700 mt-1">Multi-Location &amp; Hospital Networks</p>
                  <p className="text-sm lg:text-[15px] text-slate-600 mt-2 leading-relaxed">
                    For veterinary clinic groups, hospital networks, and pet brands requiring custom AI triage protocols and workflows.
                  </p>
                </div>

                <div className="mt-6 h-[56px] pb-3 border-b border-slate-100 flex flex-col justify-center">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A]">
                      {isAnnual ? currentPricing.proAnnual : currentPricing.proMonthly}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500">/ mo starting · billed annually</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-3.5 text-xs sm:text-sm lg:text-[15px] text-slate-700 flex-1">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>Custom AI triage protocols, brand nutrition engines &amp; multi-language packs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>Real-time PMS/CRM webhook integrations, EMR sync &amp; custom analytics streams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>Dedicated AI implementation engineer, staff training workshops &amp; 99.9% uptime SLA</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setDemoTrack('partner');
                    setDemoPlan('Practice AI Pro (Multi-Location & Hospital Networks)');
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="w-full py-3.5 px-6 rounded-full bg-violet-900 hover:bg-violet-800 active:scale-95 text-white font-bold text-sm lg:text-base shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Enterprise AI Onboarding</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DEMO & ONBOARDING FLOW */}
      <section id="demo" className="pt-8 sm:pt-12 pb-6 sm:pb-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-700">
                  <span className="w-6 h-0.5 bg-amber-500 rounded-full"></span>
                  <span>LIVE DEMO &amp; ONBOARDING</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#0F172A] leading-tight">
                  Configure Your{' '}
                  <span className="text-violet-800">AI Rollout</span> in 3 Steps
                </h2>
                <p className="text-base lg:text-[18px] text-slate-700 leading-relaxed">
                  Choose your track, region, and demo format. Submissions log directly to{' '}
                  <code className="text-xs sm:text-sm bg-slate-100 px-1.5 py-0.5 rounded text-violet-900 font-mono">window.GreenLaneAnalytics</code>{' '}
                  and any configured CRM/webhook endpoint.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-violet-900 text-white shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-amber-400 text-violet-950 font-extrabold text-sm flex items-center justify-center shrink-0">1</span>
                  <div className="flex flex-col justify-center text-left pt-1">
                    <p className="text-sm sm:text-base font-bold leading-snug mb-1">Track, Region &amp; Plan</p>
                    <p className="text-xs sm:text-sm text-violet-200 leading-snug">
                      {demoTrack === 'clinic' ? 'Veterinary Clinic' : demoTrack === 'partner' ? 'Service Partner' : 'Pet Parent'} · {demoRegion.split('(')[0].trim()} · {demoPlan}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FFFBF5] border border-slate-200/80 text-[#0F172A]">
                  <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-extrabold text-sm flex items-center justify-center shrink-0">2</span>
                  <div className="flex flex-col justify-center text-left pt-1">
                    <p className="text-sm sm:text-base font-bold leading-snug mb-1">Demo Format &amp; Focus</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-snug">{demoFormat}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FFFBF5] border border-slate-200/80 text-[#0F172A]">
                  <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-extrabold text-sm flex items-center justify-center shrink-0">3</span>
                  <div className="flex flex-col justify-center text-left pt-1">
                    <p className="text-sm sm:text-base font-bold leading-snug mb-1">Contact &amp; Launch Checklist</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-snug">Instant confirmation + CRM/webhook dispatch</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#FFFBF5] border border-amber-200/70 p-5 space-y-3">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-violet-900">What Happens After You Submit</p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-violet-700 shrink-0" />
                    <span>Event <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-xs">demo_onboarding_completed</code> dispatched</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Region-matched compliance pack unlocked</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-violet-700 shrink-0" />
                    <span>Direct inspection available inside the footer Analytics Console</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#FFFBF5] via-white to-violet-50/60 border border-slate-200/90 sm:border-2 sm:border-slate-300 shadow-card p-6 sm:p-8 lg:p-10">
              {!demoSubmitted ? (
                <form onSubmit={handleDemoSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-violet-900">Step 1 · Select Your Track</label>
                      <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900">Plan: {demoPlan}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { key: 'clinic', title: 'Veterinary Clinic', sub: 'AI triage, PIMS & reminders' },
                        { key: 'partner', title: 'Service / Brand Partner', sub: 'Grooming, boarding, diets' },
                        { key: 'parent', title: 'Pet Parent Access', sub: '24/7 AI chat & records' },
                      ].map(t => (
                        <button
                          key={t.key}
                          type="button"
                          onClick={() => setDemoTrack(t.key)}
                          className={`px-3.5 pt-4 pb-3 rounded-xl text-left transition-all flex flex-col justify-center ${demoTrack === t.key
                            ? 'border sm:border-2 border-violet-900 bg-violet-900 text-white'
                            : 'border border-slate-200 sm:border-2 sm:border-slate-300 bg-white hover:border-amber-400 text-[#0F172A]'
                            }`}
                        >
                          <div className="pt-1">
                            <p className="text-xs sm:text-sm font-extrabold leading-snug mb-1">{t.title}</p>
                            <p className={`text-[13px] leading-snug ${demoTrack === t.key ? 'text-violet-200' : 'text-slate-600'}`}>{t.sub}</p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      {/* Region & Language Pack Custom Dropdown */}
                      <div ref={regionDropdownRef} className="relative">
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                          <Globe className="w-4 h-4 text-violet-700" />
                          <span>Region &amp; Language Pack</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            setRegionDropdownOpen(!regionDropdownOpen);
                            setPlanDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between pl-3.5 pr-3 py-2.5 rounded-xl border border-slate-200 sm:border-2 sm:border-slate-300 bg-white text-xs sm:text-sm font-semibold text-[#0F172A] shadow-2xs transition-all text-left ${regionDropdownOpen
                            ? 'border-violet-700 ring-2 ring-violet-800/10'
                            : 'hover:border-violet-600'
                            }`}
                        >
                          <span className="truncate">{demoRegion}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-violet-800 shrink-0 transition-transform duration-200 ${regionDropdownOpen ? 'rotate-180' : ''
                              }`}
                          />
                        </button>

                        {regionDropdownOpen && (
                          <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-1.5 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                            {[
                              {
                                value: 'Belgium / EU (EN/FR/NL · GDPR)',
                                title: 'Belgium / EU',
                                desc: 'Trilingual AI triage (EN/FR/NL) · GDPR verified',
                                badge: 'GDPR'
                              },
                              {
                                value: 'Bulgaria / EU Digital Health (BG/EN)',
                                title: 'Bulgaria / EU Digital Health',
                                desc: 'EU Pet Passport sync · BG/EN multilingual triage',
                                badge: 'EU Health'
                              },
                              {
                                value: 'India / High-Volume Care (EN/HI)',
                                title: 'India / High-Volume Care',
                                desc: 'WhatsApp triage, UPI integration & rabies protocols',
                                badge: 'High-Vol'
                              },
                              {
                                value: 'Global Standard (EN · ISO-27001)',
                                title: 'Global Standard',
                                desc: 'Universal triage workflows & ISO-27001 security',
                                badge: 'Global'
                              }
                            ].map((opt) => {
                              const isSelected = demoRegion === opt.value;
                              return (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => {
                                    setDemoRegion(opt.value);
                                    setRegionDropdownOpen(false);
                                  }}
                                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start justify-between gap-2 ${isSelected
                                    ? 'bg-violet-50 text-violet-950 font-bold'
                                    : 'hover:bg-slate-50 text-slate-800'
                                    }`}
                                >
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                      <p className="text-xs sm:text-sm font-bold text-[#0F172A]">{opt.title}</p>
                                      <span className="text-[10px] sm:text-[11px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-violet-100 text-violet-800">
                                        {opt.badge}
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-500 truncate mt-0.5">{opt.desc}</p>
                                  </div>
                                  {isSelected && <Check className="w-4 h-4 text-violet-700 shrink-0 mt-0.5" />}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* Target Plan Custom Dropdown */}
                      <div ref={planDropdownRef} className="relative">
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          <span>Target Plan</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            setPlanDropdownOpen(!planDropdownOpen);
                            setRegionDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between pl-3.5 pr-3 py-2.5 rounded-xl border border-slate-200 sm:border-2 sm:border-slate-300 bg-white text-xs sm:text-sm font-semibold text-[#0F172A] shadow-2xs transition-all text-left ${planDropdownOpen
                            ? 'border-violet-700 ring-2 ring-violet-800/10'
                            : 'hover:border-violet-600'
                            }`}
                        >
                          <span className="truncate">{demoPlan}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-violet-800 shrink-0 transition-transform duration-200 ${planDropdownOpen ? 'rotate-180' : ''
                              }`}
                          />
                        </button>

                        {planDropdownOpen && (
                          <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-1.5 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                            {[
                              {
                                value: 'GreenLane AI Plus (Pet Parents)',
                                title: 'GreenLane AI Plus',
                                desc: 'Digital pet passport, vaccine reminders & 24/7 triage',
                                badge: 'Free / Pass'
                              },
                              {
                                value: 'Clinic AI Starter',
                                title: 'Clinic AI Starter',
                                desc: 'AI pre-visit intake, calendar sync & retention analytics',
                                badge: 'Most Popular'
                              },
                              {
                                value: 'Practice AI Pro (Multi-Location & Hospital Networks)',
                                title: 'Practice AI Pro',
                                desc: 'Multi-location networks, PMS/CRM webhooks & SLA',
                                badge: 'Enterprise'
                              }
                            ].map((opt) => {
                              const isSelected = demoPlan === opt.value;
                              return (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => {
                                    setDemoPlan(opt.value);
                                    setPlanDropdownOpen(false);
                                  }}
                                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start justify-between gap-2 ${isSelected
                                    ? 'bg-amber-50 text-amber-950 font-bold'
                                    : 'hover:bg-slate-50 text-slate-800'
                                    }`}
                                >
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                      <p className="text-xs sm:text-sm font-bold text-[#0F172A]">{opt.title}</p>
                                      <span className="text-[10px] sm:text-[11px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">
                                        {opt.badge}
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-500 truncate mt-0.5">{opt.desc}</p>
                                  </div>
                                  {isSelected && <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-200/80 sm:border-slate-300/80">
                    <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-violet-900">Step 2 · Preferred Demo Format</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { label: '15-min Live AI Walkthrough', sub: 'AI triage, booking & timeline' },
                        { label: 'Sandbox Pilot Setup', sub: 'Test AI workflows & webhooks' },
                        { label: 'Custom Clinic Workflow Audit', sub: '14-day AI rollout & ROI plan' }
                      ].map(f => (
                        <button
                          key={f.label}
                          type="button"
                          onClick={() => setDemoFormat(f.label)}
                          className={`px-3.5 pt-4 pb-3 rounded-xl text-left transition-all flex flex-col justify-center ${demoFormat === f.label
                            ? 'border sm:border-2 border-amber-500 bg-amber-50/80'
                            : 'border border-slate-200 sm:border-2 sm:border-slate-300 bg-white hover:border-amber-400'
                            }`}
                        >
                          <div className="pt-1">
                            <p className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-snug mb-1">{f.label}</p>
                            <p className="text-[13px] text-slate-600 leading-snug">{f.sub}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-slate-200/80 sm:border-slate-300/80">
                    <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-violet-900">Step 3 · Your Details</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={demoFormData.name}
                          onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                          placeholder="Dr. Camille Laurent"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 sm:border-slate-300 bg-white text-sm focus:border-violet-700 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={demoFormData.email}
                          onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                          placeholder="camille@clinic-example.be"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 sm:border-slate-300 bg-white text-sm focus:border-violet-700 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">Clinic, Brand, or Pet Name (Optional)</label>
                      <input
                        type="text"
                        value={demoFormData.org}
                        onChange={(e) => setDemoFormData({ ...demoFormData, org: e.target.value })}
                        placeholder="Wavre Vet &amp; Wellness / Max (3y Golden Retriever)"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 sm:border-slate-300 bg-white text-sm focus:border-violet-700 focus:outline-none"
                      />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2.5 bg-violet-900 hover:bg-violet-800 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-violet-900/15 transition-all active:scale-95"
                      >
                        <span>Contact</span>
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="rounded-2xl bg-white border border-violet-200 p-6 space-y-4 shadow-soft">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-violet-100 text-violet-800 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-xl text-[#0F172A]">Onboarding Request Logged</h3>
                        <p className="text-xs text-slate-600">
                          {demoFormData.name} ({demoFormData.email}) · {demoTrack} · {demoPlan}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setDemoSubmitted(false)}
                      className="text-xs font-bold text-violet-900 hover:underline shrink-0"
                    >
                      Edit / New Request
                    </button>
                  </div>

                  <div className="rounded-xl bg-[#FFFBF5] border border-amber-200/70 p-4 space-y-2">
                    <p className="text-xs font-bold text-[#0F172A]">Immediate Next-Steps Checklist:</p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-violet-700 shrink-0 mt-0.5" />
                        <span>Region &amp; compliance pack prepared for {demoRegion}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-violet-700 shrink-0 mt-0.5" />
                        <span>Scheduled format: {demoFormat}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-violet-700 shrink-0 mt-0.5" />
                        <span>Event dispatched to GreenLane Analytics console</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="pt-2 sm:pt-4 pb-12 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-violet-100/90 via-violet-50 to-amber-50/90 border border-violet-200/60 shadow-card">
            <svg className="absolute inset-0 w-full h-full object-cover pointer-events-none" viewBox="0 0 1200 320" preserveAspectRatio="none" aria-hidden="true">
              <g fill="#9333EA" opacity="0.08">
                <rect x="860" y="90" width="28" height="160" rx="2"></rect>
                <rect x="895" y="65" width="35" height="185" rx="2"></rect>
                <rect x="938" y="105" width="24" height="145" rx="2"></rect>
                <rect x="970" y="50" width="40" height="200" rx="2"></rect>
                <rect x="1018" y="85" width="30" height="165" rx="2"></rect>
                <rect x="1055" y="110" width="36" height="140" rx="2"></rect>
              </g>
              <path d="M0,250 Q320,170 650,235 T1200,180 L1200,320 L0,320 Z" fill="#A78BFA" opacity="0.16"></path>
              <path d="M0,285 Q450,235 820,255 T1200,220 L1200,320 L0,320 Z" fill="#9333EA" opacity="0.22"></path>
            </svg>

            <div className="relative z-10 px-6 py-12 sm:px-12 lg:px-16 lg:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-4">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-violet-900 bg-white/85 px-3.5 py-1.5 rounded-full shadow-2xs">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Start Free Today · Powered by GreenLane AI</span>
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#0F172A] leading-tight">
                  One AI-Powered Ecosystem for Every Pet. One Calm Workflow for Care Teams.
                </h2>
                <p className="text-base lg:text-[18px] text-slate-700 leading-relaxed">
                  Join thousands of pet parents, veterinary clinics, and care specialists across Belgium, Bulgaria, India, and globally who trust GreenLane AI for smarter, proactive pet care.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleOpenDemoModal('parent')}
                    className="inline-flex items-center gap-2.5 bg-violet-900 hover:bg-violet-800 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-violet-900/20 transition-all active:scale-95"
                  >
                    <span>Try Free AI Triage</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                  <button
                    onClick={() => handleOpenDemoModal('clinic')}
                    className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-violet-950 font-bold text-sm sm:text-base px-6 py-3.5 rounded-full border border-violet-900/15 transition-all active:scale-95"
                  >
                    <span>Book Clinic AI Demo</span>
                  </button>
                </div>
              </div>

              {/* Silhouette */}
              <div className="self-end md:self-center shrink-0 pr-2 sm:pr-8">
                <svg className="w-48 sm:w-60 h-auto text-violet-900" viewBox="0 0 260 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Person walking dog silhouette">
                  <circle cx="35" cy="108" r="16" fill="#8B5CF6" opacity="0.35"></circle>
                  <rect x="33" y="120" width="4" height="18" fill="#9333EA" opacity="0.4"></rect>
                  <circle cx="232" cy="102" r="18" fill="#8B5CF6" opacity="0.3"></circle>
                  <rect x="230" y="116" width="4" height="22" fill="#9333EA" opacity="0.4"></rect>
                  <circle cx="105" cy="34" r="10" fill="#9333EA"></circle>
                  <path d="M97 48 C97 45, 114 45, 116 50 L124 76 L136 88 C138 90, 135 93, 132 91 L117 79 L114 96 L124 134 C125 137, 120 138, 118 135 L107 102 L95 135 C94 138, 89 137, 90 134 L100 92 L96 66 L87 82 C85 85, 81 83, 83 80 L94 52 Z" fill="#9333EA"></path>
                  <path d="M135 89 Q158 106 177 104" stroke="#9333EA" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M174 103 C176 96, 183 94, 187 98 L192 103 L210 103 C215 103, 219 100, 222 96 C224 94, 226 96, 224 99 C221 104, 218 107, 215 109 L218 133 C218 135, 214 136, 213 133 L209 116 L193 116 L189 133 C188 136, 184 135, 185 132 L188 113 L181 109 C176 109, 173 106, 174 103 Z" fill="#9333EA"></path>
                  <path d="M179 97 L175 104 L181 103 Z" fill="#9333EA"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer id="footer" className="bg-[#0B132B] text-white pt-14 pb-12 relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-slate-800/80">
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-4 space-y-4">
              <a href="#" className="inline-block group">
                <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Image
                    src="/brand-logo.png"
                    alt="GreenLane Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                AI platform for the connected healthcare ecosystem. Connecting patients, providers, workflows and intelligent systems to help healthcare organizations operate smarter.
              </p>
            </div>

            {/* Column 2: Socials */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-bold text-base text-white">Socials</h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="#footer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#182338] hover:bg-[#22304d] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#footer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#182338] hover:bg-[#22304d] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#footer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-[#182338] hover:bg-[#22304d] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 3: Platform */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-bold text-base text-white">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#home" className="hover:text-violet-400 transition-colors">Why GreenLane</a></li>
                <li><a href="#scope-clarity" className="hover:text-violet-400 transition-colors">Problem</a></li>
                <li><a href="#triage-demo" className="hover:text-violet-400 transition-colors">Solution</a></li>
                <li><a href="#connected-ecosystem" className="hover:text-violet-400 transition-colors">Capabilities</a></li>
                <li><a href="#workflow" className="hover:text-violet-400 transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-violet-400 transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="lg:col-span-1 space-y-3">
              <h4 className="font-bold text-base text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#footer" className="hover:text-violet-400 transition-colors">GDPR Compliance</a></li>
                <li><a href="#footer" className="hover:text-violet-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#footer" className="hover:text-violet-400 transition-colors">Terms of Service</a></li>
                <li><a href="#footer" className="hover:text-violet-400 transition-colors">Cookie Settings</a></li>
              </ul>
            </div>

            {/* Column 5: Support */}
            <div className="lg:col-span-1 space-y-3">
              <h4 className="font-bold text-base text-white">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#demo" className="hover:text-violet-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 6: Stay Connected */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-bold text-base text-white">Stay Connected</h4>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-2.5">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#182338] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white font-bold text-sm tracking-wider uppercase transition-colors shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 text-center text-xs text-slate-500">
            <p>
              © 2026 GreenLane Pet. All rights reserved.
            </p>
          </div>
        </div>

        {/* Scroll-to-Top Yellow Button */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <ChevronUp className="w-6 h-6 stroke-[2.5]" />
        </button>
      </footer>

      {/* MODAL 1: DEMO MODAL */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {!demoSuccess ? (
              <div>
                <div className="w-12 h-12 rounded-2xl bg-violet-900 text-amber-400 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-[#0F172A]">Experience GreenLane Pet AI</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Request early access for your pet family or book a live clinic &amp; partner ecosystem demo.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); setDemoSuccess(true); }} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                    <input type="text" required placeholder="Alex Morgan" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-violet-700 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Work or Personal Email</label>
                    <input type="email" required placeholder="alex@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-violet-700 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">I am joining as a...</label>
                    <select
                      value={demoModalRole}
                      onChange={(e) => setDemoModalRole(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:border-violet-700 focus:outline-none"
                    >
                      <option value="parent">Pet Parent (Dogs, Cats &amp; More — Early Access)</option>
                      <option value="clinic">Veterinary Clinic / Hospital (Practice AI Demo)</option>
                      <option value="services">Grooming, Boarding &amp; Pet Services</option>
                      <option value="partner">Pet Brand / Smart Hardware Partner</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-violet-900 hover:bg-violet-800 text-white font-semibold py-3 rounded-full shadow-md transition-all flex items-center justify-center gap-2">
                    <span>Confirm Request</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-[#0F172A]">You're on the Priority List!</h3>
                <p className="text-sm text-slate-600">
                  Thank you for joining GreenLanePet. Our team has received your request.
                </p>
                <button onClick={() => setDemoModalOpen(false)} className="bg-violet-900 text-white text-sm font-semibold px-6 py-2.5 rounded-full">
                  Back to Ecosystem
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: VIDEO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/75 backdrop-blur-xs">
          <div className="bg-violet-950 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-violet-800 relative">
            <div className="px-6 py-4 flex items-center justify-between border-b border-violet-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="font-display font-bold text-sm text-white">GreenLane Pet AI — 60-Second Ecosystem Tour</span>
              </div>
              <button onClick={() => setVideoModalOpen(false)} className="w-8 h-8 rounded-full bg-violet-900 hover:bg-violet-800 text-violet-200 flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 bg-gradient-to-br from-violet-950 via-violet-900 to-[#0F172A] text-white space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-violet-700/60 aspect-video bg-[#0F172A] flex flex-col justify-between p-5">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
                    AI TELEMETRY ENGINE v2.6
                  </span>
                  <span className="text-xs font-mono text-violet-300">00:24 / 01:00</span>
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 my-auto">
                  <div className="bg-[#0F172A]/80 backdrop-blur-md border border-violet-500/30 rounded-xl p-3">
                    <p className="text-[11px] text-amber-400 font-bold">01. UNDERSTAND</p>
                    <p className="text-xs text-slate-200 mt-1">AI analyzes breed, wearable vitals &amp; diet logs in real time.</p>
                  </div>
                  <div className="bg-[#0F172A]/80 backdrop-blur-md border border-violet-500/30 rounded-xl p-3">
                    <p className="text-[11px] text-amber-400 font-bold">02. CONNECT</p>
                    <p className="text-xs text-slate-200 mt-1">Sync with vetted clinics, groomers &amp; sitters.</p>
                  </div>
                  <div className="bg-[#0F172A]/80 backdrop-blur-md border border-violet-500/30 rounded-xl p-3">
                    <p className="text-[11px] text-amber-400 font-bold">03. CARE</p>
                    <p className="text-xs text-slate-200 mt-1">Automated prescriptions, vaccine reminders &amp; triage.</p>
                  </div>
                </div>

                <div className="relative z-10 space-y-1.5">
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-2/5 h-full bg-gradient-to-r from-amber-400 to-violet-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-violet-200">Ready to test the AI Assistant yourself?</p>
                <button
                  onClick={() => {
                    setVideoModalOpen(false);
                    document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="bg-amber-500 hover:bg-amber-400 text-violet-950 font-bold text-xs px-5 py-2.5 rounded-full transition-colors"
                >
                  Launch Interactive AI Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: INTEGRATION CONSOLE */}
      {integrationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative space-y-5 max-h-[90vh] flex flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-violet-800 bg-violet-50 px-2.5 py-0.5 rounded-full mb-1">
                  <Webhook className="w-3.5 h-3.5 text-amber-600" />
                  <span>Backend &amp; Analytics Hooks</span>
                </div>
                <h3 className="font-display font-extrabold text-xl text-[#0F172A]">GreenLane Analytics &amp; CRM Event Stream</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Inspect live events dispatched across user actions.
                </p>
              </div>
              <button
                onClick={() => setIntegrationModalOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#0F172A]">Captured Events ({analyticsEvents.length})</span>
              <button
                type="button"
                onClick={() => setAnalyticsEvents([])}
                className="text-slate-500 hover:text-violet-900 font-semibold"
              >
                Clear Log
              </button>
            </div>

            <div className="flex-1 overflow-y-auto chat-scroll bg-slate-950 text-violet-100 rounded-2xl p-4 font-mono text-[11px] space-y-2.5 min-h-[220px]">
              {analyticsEvents.slice().reverse().map((ev, i) => (
                <div key={i} className="rounded-xl bg-slate-900/90 border border-slate-800 p-3 space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-bold text-amber-400">{ev.eventName}</span>
                    <span className="text-slate-400">{ev.timestamp}</span>
                  </div>
                  <pre className="text-[10px] text-violet-200/90 overflow-x-auto whitespace-pre-wrap">
                    {JSON.stringify(ev.payload, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}