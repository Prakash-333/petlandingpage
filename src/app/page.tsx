'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  Siren
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
      text: 'Hi! I’m <strong>GreenLane AI</strong>, synced with <strong>Max’s (Golden Retriever, 29 kg)</strong> health profile. I monitor symptoms, calculate diet portions, and alert your vet when needed. Tap a scenario below to test my triage capabilities:',
      isHtml: true,
      tag: 'GreenLane AI'
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
    { id: 'healthcare', name: 'Healthcare', scope: 'day_one', scopeLabel: 'Day-One Core', icon: HeartHandshake, title: 'AI Predictive Healthcare & Triage', badge: '24/7 AI Clinical Sync', desc: '24/7 AI symptom checker with red-flag emergency detection, automated vaccination alerts, and clinician-ready pre-visit summaries.' },
    { id: 'grooming', name: 'Grooming', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: Scissors, title: 'AI Coat Health & Smart Grooming Match', badge: 'Ecosystem AI Service', desc: 'AI coat and skin analysis that predicts grooming intervals by breed and season, automatically booking with verified partner groomers.' },
    { id: 'walking', name: 'Walking', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: Footprints, title: 'AI Activity Tracking & Walker Dispatch', badge: 'Ecosystem AI Service', desc: 'AI-calculated daily exercise targets based on breed, age, and weight, linked with verified local dog walkers and live GPS tracking.' },
    { id: 'training', name: 'Training', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: GraduationCap, title: 'AI Behavioral Coach & Training Routines', badge: 'Ecosystem AI Care', desc: 'Personalized, step-by-step obedience and behavior modification plans tailored by AI to your pet’s specific breed traits and age milestones.' },
    { id: 'boarding', name: 'Boarding', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: Home, title: 'AI Care Handover & Verified Boarding', badge: 'Ecosystem AI Service', desc: 'Generates an instant, comprehensive AI care brief (exact feeding portions, medications, emergency vet contacts) for trusted boarding hosts.' },
    { id: 'nutrition', name: 'Nutrition', scope: 'day_one', scopeLabel: 'Day-One Core', icon: Soup, title: 'Precision AI Nutrition & Calorie Calculator', badge: 'Day-1 Guidance + Partners', desc: 'Calculates exact daily calorie requirements, flags food allergies and ingredient sensitivities, and compares vet-approved therapeutic diets.' },
    { id: 'products', name: 'Products', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: ShoppingBag, title: 'AI-Curated Essentials & Smart Refills', badge: 'Connected AI Brands', desc: 'AI predicts when food, flea/tick preventatives, and prescription supplements run low, ordering vet-approved refills before you run out.' },
    { id: 'community', name: 'Community', scope: 'ecosystem', scopeLabel: 'Connected Ecosystem', icon: Users, title: 'AI Lost-Pet Radar & Community Health Circles', badge: 'Connected AI Network', desc: 'Instant neighborhood AI lost-pet alerts with photo matching, localized seasonal health alerts (fleas, heat, kennel cough), and verified breed circles.' }
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
      text: 'Hi! I’m <strong>GreenLane AI</strong>, synced with <strong>Max’s (Golden Retriever, 29 kg)</strong> health profile. I monitor symptoms, calculate diet portions, and alert your vet when needed. Tap a scenario below to test my triage capabilities:',
      isHtml: true,
      tag: 'GreenLane AI'
    }]);
  };

  const ecosystemNodesInfo: Record<string, { tag: string; text: string }> = {
    clinics: { tag: 'Veterinary Clinics', text: 'Two-way PIMS sync with automated AI intake summaries, digital prescription tracking, and post-visit follow-up reminders.' },
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
    EUR_BE: { plusAnnual: '€3.90 / mo', plusMonthly: '€4.90 / mo', starterAnnual: '€119', starterMonthly: '€149', proAnnual: '€319', proMonthly: '€399', subStarter: '1 clinic or care location · AI intake, reminders & booking.', subPro: 'Multi-site clinics, PMS/CRM webhooks & dedicated onboarding.' },
    EUR_BG: { plusAnnual: '€3.50 / mo', plusMonthly: '€4.50 / mo', starterAnnual: '€99', starterMonthly: '€125', proAnnual: '€269', proMonthly: '€339', subStarter: '1 clinic or studio · EU digital health & automated reminders.', subPro: 'Multi-location groups, custom triage & webhook sync.' },
    INR: { plusAnnual: '₹199 / mo', plusMonthly: '₹249 / mo', starterAnnual: '₹5,999', starterMonthly: '₹7,499', proAnnual: '₹15,999', proMonthly: '₹19,999', subStarter: 'High-volume clinic or care studio · Queue triage & reminders.', subPro: 'Multi-branch networks, custom workflows & priority onboarding.' },
    USD: { plusAnnual: '$4.50 / mo', plusMonthly: '$5.90 / mo', starterAnnual: '$129', starterMonthly: '$159', proAnnual: '$349', proMonthly: '$439', subStarter: '1 clinic or care location · AI triage, intake & booking.', subPro: 'Multi-site groups, CRM/PMS webhooks & dedicated SLA.' },
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

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans antialiased selection:bg-emerald-900 selection:text-white">
      {/* 0. TOP ANNOUNCEMENT BAR */}
      <div className="bg-emerald-950 text-emerald-200 text-xs py-2 px-4 text-center border-b border-emerald-800/60 font-medium flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
        <span>⚡ Powered by GreenLane Pet AI · Now expanding across Belgium, Bulgaria &amp; India · Early access &amp; clinic demo slots open</span>
      </div>

      {/* 1. STICKY TOP NAVIGATION BAR */}
      <header id="navbar" className="sticky top-0 z-50 w-full transition-all duration-300 bg-white/85 backdrop-blur-md border-b border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 flex items-center justify-center text-white shadow-sm group-hover:bg-emerald-800 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 13.5c-2.33 0-4.31 1.46-5.11 3.5-.42 1.07.37 2.25 1.52 2.25h7.18c1.15 0 1.94-1.18 1.52-2.25-.8-2.04-2.78-3.5-5.11-3.5zm-5.5-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3.5-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3.5 3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-[#0F172A]">
                GreenLane<span className="text-emerald-600">Pet</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#home" className="text-emerald-900 font-semibold border-b-2 border-amber-500 pb-1">Home</a>
              <a href="#ai-features" className="hover:text-emerald-900 transition-colors">AI Features</a>

              {/* Ecosystem Dropdown */}
              <div className="relative group">
                <button type="button" className="flex items-center gap-1 hover:text-emerald-900 transition-colors py-2">
                  <span>AI Ecosystem</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-1 w-72 rounded-2xl bg-white shadow-card border border-slate-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  <a href="#pillars" className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/80 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
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
                  <a href="#connected-ecosystem" className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/80 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">Connected Partner Network</p>
                      <p className="text-xs text-slate-500">Clinics, smart hardware, diets &amp; welfare</p>
                    </div>
                  </a>
                </div>
              </div>

              <a href="#workflow" className="hover:text-emerald-900 transition-colors">14-Day AI Rollout</a>
              <a href="#pricing" className="hover:text-emerald-900 transition-colors">Plans &amp; Pricing</a>
              <a href="#demo" className="hover:text-emerald-900 transition-colors">Book AI Demo</a>
            </nav>

            {/* Right CTA */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => handleOpenDemoModal('parent')}
                className="hidden sm:inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80 text-sm font-semibold px-4 py-2.5 rounded-full transition-all active:scale-95"
              >
                <span>Try Free AI Triage</span>
              </button>

              <button
                onClick={() => handleOpenDemoModal('clinic')}
                className="inline-flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <span>Book Clinic AI Demo</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-900 font-semibold">Home</a>
            <a href="#pillars" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">8 AI Care Pillars</a>
            <a href="#ai-assistant" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">AI Pet Assistant</a>
            <a href="#ai-features" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">AI Platform Features</a>
            <a href="#workflow" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">14-Day AI Rollout</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">Plans &amp; Pricing</a>
            <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">Book AI Demo</a>
            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); handleOpenDemoModal('parent'); }}
                className="w-full flex items-center justify-center bg-amber-100 text-amber-900 font-semibold py-3 rounded-full text-sm"
              >
                Try Free AI Triage
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); handleOpenDemoModal('clinic'); }}
                className="w-full flex items-center justify-center gap-1.5 bg-emerald-900 text-white font-semibold py-3 rounded-full text-sm"
              >
                <span>Book Clinic AI Demo</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative hero-gradient pt-8 pb-24 lg:pt-14 lg:pb-32 overflow-hidden">
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-200/25 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 text-left space-y-6">
              {/* Dual-Audience Switcher Pill */}
              <div className="inline-flex items-center p-1 rounded-full bg-white/95 border border-emerald-900/10 shadow-soft">
                <button
                  type="button"
                  onClick={() => { setCurrentAudience('parent'); trackEvent('hero_audience_switched', { audience: 'parent' }); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${currentAudience === 'parent' ? 'bg-emerald-900 text-white shadow-xs' : 'text-slate-600 hover:text-emerald-900'
                    }`}
                >
                  <Heart className="w-3.5 h-3.5 text-amber-400" />
                  <span>For Pet Parents</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setCurrentAudience('clinic'); trackEvent('hero_audience_switched', { audience: 'clinic' }); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${currentAudience === 'clinic' ? 'bg-emerald-900 text-white shadow-xs' : 'text-slate-600 hover:text-emerald-900'
                    }`}
                >
                  <Stethoscope className="w-3.5 h-3.5 text-emerald-700" />
                  <span>For Vet Clinics &amp; Partners</span>
                </button>
              </div>

              {/* Dynamic Headline */}
              {currentAudience === 'parent' ? (
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.55rem] leading-[1.12] tracking-tight text-[#0F172A] transition-all duration-300">
                  One AI-Powered<br />
                  Health Ecosystem<br />
                  for{' '}
                  <span className="bg-gradient-to-r from-amber-500 via-amber-500 to-emerald-600 bg-clip-text text-transparent">Every Pet</span>
                </h1>
              ) : (
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.55rem] leading-[1.12] tracking-tight text-[#0F172A] transition-all duration-300">
                  AI Pre-Visit Triage &amp;<br />
                  Calm Practice Flow<br />
                  for{' '}
                  <span className="bg-gradient-to-r from-amber-500 via-amber-500 to-emerald-600 bg-clip-text text-transparent">Modern Clinics</span>
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
                  className="inline-flex items-center gap-2.5 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-emerald-900/20 hover:shadow-xl transition-all active:scale-95"
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

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#FFFBF5] text-[#0F172A] font-semibold px-4 py-3.5 rounded-full border border-slate-200/90 shadow-2xs hover:border-amber-300 transition-all active:scale-95 group"
                >
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </span>
                  <span className="text-sm">60s AI Tour</span>
                </button>
              </div>

              {/* Trust Metrics */}
              <div className="pt-3 flex flex-wrap items-center gap-5 text-xs sm:text-sm text-slate-500 border-t border-slate-200/60 max-w-xl">
                {currentAudience === 'parent' ? (
                  <>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>AI Supports—Never Replaces Vets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BellRing className="w-4 h-4 text-amber-500" />
                      <span>Day-1 AI Health &amp; Vaccine Sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Network className="w-4 h-4 text-emerald-600" />
                      <span>Connected Care &amp; Clinic Network</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>AI Pre-Visit Clinical Briefs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BellRing className="w-4 h-4 text-amber-500" />
                      <span>-40% Front-Desk Admin Load</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Network className="w-4 h-4 text-emerald-600" />
                      <span>GDPR, DPDP &amp; Vet Guardrails</span>
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

                <div className="relative z-10 rounded-[2rem] overflow-hidden bg-gradient-to-b from-emerald-100/70 via-[#FFFBF5] to-amber-50/80 p-3 sm:p-4 shadow-card border border-white">
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-gradient-to-br from-emerald-50 via-[#FFFBF5] to-amber-100/80 flex items-center justify-center">
                    {/* SVG Retriever & Cat */}
                    <svg
                      id="heroPetComposition"
                      className="w-full h-full object-cover"
                      viewBox="0 0 800 600"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Golden retriever and tabby cat in Emerald and Amber lighting"
                    >
                      <defs>
                        <radialGradient id="studioAura" cx="52%" cy="42%" r="58%">
                          <stop offset="0%" stopColor="#FFFBF5"></stop>
                          <stop offset="52%" stopColor="#ECFDF5" stopOpacity="0.92"></stop>
                          <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0.75"></stop>
                        </radialGradient>
                        <radialGradient id="amberWarmth" cx="72%" cy="55%" r="42%">
                          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.22"></stop>
                          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"></stop>
                        </radialGradient>
                        <linearGradient id="emeraldRug" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#D1FAE5" stopOpacity="0.75"></stop>
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
                          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#064E3B" floodOpacity="0.14"></feDropShadow>
                        </filter>
                      </defs>

                      <rect width="800" height="600" fill="url(#studioAura)"></rect>
                      <rect width="800" height="600" fill="url(#amberWarmth)"></rect>

                      <g fill="#064E3B" opacity="0.07">
                        <path d="M65 110 C120 75, 175 105, 185 160 C130 175, 80 155, 65 110 Z"></path>
                        <path d="M735 95 C680 65, 625 95, 615 150 C670 165, 720 140, 735 95 Z"></path>
                        <path d="M710 215 C748 195, 775 220, 772 258 C735 262, 712 245, 710 215 Z"></path>
                      </g>

                      <ellipse cx="415" cy="508" rx="285" ry="44" fill="url(#emeraldRug)" stroke="#064E3B" strokeOpacity="0.08" strokeWidth="2"></ellipse>
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
                        <path d="M254 316 Q315 338 372 315" stroke="#064E3B" strokeWidth="11" strokeLinecap="round"></path>
                        <path d="M254 316 Q315 338 372 315" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 8" opacity="0.65"></path>
                        <circle cx="332" cy="336" r="10" fill="#F59E0B" stroke="#FFFBF5" strokeWidth="2.5"></circle>
                        <circle cx="332" cy="336" r="3" fill="#064E3B"></circle>
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

                      <path d="M362 162 Q435 125 512 178" stroke="#059669" strokeWidth="2" strokeDasharray="5 5" opacity="0.45" fill="none"></path>
                      <circle cx="436" cy="147" r="5" fill="#F59E0B" opacity="0.75"></circle>
                    </svg>

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-emerald-950/35 to-transparent pointer-events-none"></div>

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto glass-node rounded-2xl px-3.5 py-2 flex items-center justify-center gap-3">
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                      </span>
                      <div className="text-xs text-center flex flex-col justify-center">
                        <p className="font-bold text-[#0F172A]">AI Wellness Sync Active</p>
                        <p className="text-[11px] text-slate-500">Vitals, Diet &amp; Vaccine Schedule Optimal</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="hidden sm:flex glass-node rounded-2xl px-4 py-3 items-center justify-center gap-3 absolute -top-5 right-4 z-20 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex flex-col justify-center text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="font-display font-bold text-sm text-[#0F172A]">GreenLane Pet AI</span>
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-700 rounded-md">LIVE</span>
                    </div>
                    <p className="text-[11px] font-medium text-emerald-700">Intelligent Companion &amp; Clinical Co-Pilot</p>
                  </div>
                </div>

                <div className="glass-node rounded-2xl p-3 flex items-center justify-center gap-2.5 absolute -top-4 left-2 sm:-left-5 z-20 animate-float-delayed">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center text-center">
                    <p className="text-[11px] text-slate-500 font-medium">Resting Vitals</p>
                    <p className="text-xs font-bold text-[#0F172A]">AI Baseline 78 BPM · <span className="text-emerald-600">Normal</span></p>
                  </div>
                </div>

                <div className="hidden sm:flex glass-node rounded-2xl p-3 items-center justify-center gap-2.5 absolute top-1/2 -left-7 -translate-y-1/2 z-20 animate-float-slow">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/70">
                    <CalendarCheck2 className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center text-center">
                    <p className="text-[11px] text-slate-500 font-medium">Smart AI Reminder</p>
                    <p className="text-xs font-bold text-[#0F172A]">Booster Due in 5d</p>
                  </div>
                </div>

                <div className="hidden sm:flex glass-node rounded-2xl p-3 items-center justify-center gap-2.5 absolute top-1/3 -right-5 z-20 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/70">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center text-center">
                    <p className="text-[11px] text-slate-500 font-medium">AI Auto-Refill</p>
                    <p className="text-xs font-bold text-[#0F172A]">Joint &amp; Coat Diet Refill Calculated</p>
                  </div>
                </div>

                <div className="glass-node rounded-2xl p-3 flex items-center justify-center gap-2.5 absolute -bottom-5 right-3 sm:-right-4 z-20 animate-float-delayed">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Home className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center text-center">
                    <p className="text-[11px] text-slate-500 font-medium">Verified Stays</p>
                    <p className="text-xs font-bold text-[#0F172A]">3 AI-Screened Boarding Hosts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DAY-ONE CORE VS. CONNECTED ECOSYSTEM + 8 PILLARS */}
      <section id="pillars" className="relative z-20 -mt-10 sm:-mt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-card border border-slate-100 p-4 sm:p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                  Scope Clarity · Day-One AI Core vs. Connected AI Ecosystem
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  <strong>Day-One AI Core</strong> powers real-time triage, preventative health reminders &amp; clinic intake immediately;
                  <strong>Connected AI Ecosystem</strong> links specialized care, smart hardware &amp; trusted partners.
                </p>
              </div>
              <div className="inline-flex items-center p-1 rounded-full bg-[#FFFBF5] border border-slate-200/90 shrink-0 self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => setPillarScopeFilter('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${pillarScopeFilter === 'all' ? 'bg-emerald-900 text-white' : 'text-slate-600 hover:text-emerald-900'
                    }`}
                >
                  All (8 Pillars)
                </button>
                <button
                  type="button"
                  onClick={() => setPillarScopeFilter('day_one')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${pillarScopeFilter === 'day_one' ? 'bg-emerald-900 text-white font-bold' : 'text-slate-600 hover:text-emerald-900'
                    }`}
                >
                  Day-One AI Core
                </button>
                <button
                  type="button"
                  onClick={() => setPillarScopeFilter('ecosystem')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${pillarScopeFilter === 'ecosystem' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-600 hover:text-amber-800'
                    }`}
                >
                  Connected AI Ecosystem
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {filteredPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                const isActive = pillar.id === activePillarId;
                const isDayOne = pillar.scope === 'day_one';
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => { setActivePillarId(pillar.id); trackEvent('care_pillar_selected', { pillar: pillar.id }); }}
                    className={`flex flex-col items-center justify-center py-3 px-2 rounded-2xl transition-all duration-200 border relative ${isActive ? 'bg-emerald-900 text-white border-emerald-900 shadow-md scale-[1.02]' : 'bg-white hover:bg-[#FFFBF5] text-slate-700 border-slate-100 hover:border-amber-200'
                      }`}
                  >
                    <span className={`text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-full mb-1.5 ${isActive ? 'bg-amber-400 text-emerald-950' : isDayOne ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'
                      }`}>
                      {isDayOne ? 'Day 1' : 'Network'}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1.5 ${isActive ? 'bg-amber-500 text-emerald-950' : 'bg-emerald-50 text-emerald-700'
                      }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold tracking-tight">{pillar.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Preview Drawer */}
            <div className="mt-4 pt-4 border-t border-slate-100 px-3 sm:px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#FFFBF5] via-white to-emerald-50/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-300">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-900 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                  {React.createElement(selectedPillar.icon, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display font-bold text-base text-[#0F172A]">{selectedPillar.title}</span>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${selectedPillar.scope === 'day_one' ? 'bg-emerald-900 text-amber-300' : 'bg-amber-500 text-slate-950'
                      }`}>
                      {selectedPillar.scopeLabel}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      {selectedPillar.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    {selectedPillar.desc}
                  </p>
                </div>
              </div>
              <a
                href="#ai-assistant"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-700 bg-white px-4 py-2.5 rounded-full border border-emerald-200/80 shadow-2xs shrink-0 transition-all hover:border-amber-400"
              >
                <span>Ask AI About This</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI PET ASSISTANT INTERACTIVE SECTION */}
      <section id="ai-assistant" className="py-16 lg:py-24 bg-[#FFFBF5]/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Everyday Guidance vs Urgent Vet Escalation */}
          <div className="mb-10 rounded-2xl bg-white border border-amber-200/80 shadow-soft p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-5 flex items-start gap-3 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/60">
              <div className="w-8 h-8 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-900">
                  Everyday Guidance (AI Companion)
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Vaccine schedules, routine prep, nutrition comparisons, and pre-visit notes to organize care smoothly.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-start gap-3 p-3 rounded-xl bg-amber-50/90 border border-amber-300/80">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                <Siren className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-950">
                  Urgent Red-Flag Escalation (Licensed Vet)
                </p>
                <p className="text-xs text-slate-700 mt-0.5">
                  Difficulty breathing, collapse, active seizures, uncontrolled bleeding, or suspected toxin ingestion requires immediate vet care.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-stretch justify-between gap-2">
              <button
                type="button"
                onClick={() => handleTriggerScenario('chocolate')}
                className="flex-1 text-center text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-2.5 rounded-xl transition-colors shadow-2xs"
              >
                Test Red-Flag Check
              </button>
              <button
                type="button"
                onClick={() => handleOpenDemoModal('clinic')}
                className="flex-1 text-center text-xs font-bold bg-emerald-900 hover:bg-emerald-800 text-white px-3 py-2 rounded-xl transition-colors"
              >
                Contact Vet / Clinic
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left 4 cols */}
            <div className="lg:col-span-4 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-600">
                <span className="w-6 h-0.5 bg-amber-500 rounded-full"></span>
                <span>AI PET ASSISTANT &amp; CLINICAL CO-PILOT</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] leading-tight">
                Your Pet’s<br />
                24/7 AI Health Companion
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Get instant emergency triage with veterinary guardrails, orchestrate multi-service care schedules, and compare prescription nutrition—all through a single proactive AI conversation.
              </p>

              <div className="space-y-2.5 pt-1">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Test Real-World AI Scenarios:
                </p>

                <button
                  onClick={() => handleTriggerScenario('chocolate')}
                  className="w-full text-left flex items-center gap-3 p-3 rounded-2xl bg-white hover:bg-amber-50/80 border border-slate-200/90 hover:border-amber-400 shadow-2xs transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-[#0F172A] truncate">Emergency Triage: Ate dark chocolate</p>
                    <p className="text-[11px] text-slate-500 truncate">Instant toxicity calculator &amp; urgent vet slot</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600" />
                </button>

                <button
                  onClick={() => handleTriggerScenario('routine')}
                  className="w-full text-left flex items-center gap-3 p-3 rounded-2xl bg-white hover:bg-emerald-50/80 border border-slate-200/90 hover:border-emerald-400 shadow-2xs transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-900 group-hover:text-amber-400 transition-colors">
                    <CalendarPlus className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-[#0F172A] truncate">Routine Care: Annual booster &amp; grooming</p>
                    <p className="text-[11px] text-slate-500 truncate">Smart calendar sync + bundled service booking</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
                </button>

                <button
                  onClick={() => handleTriggerScenario('renal')}
                  className="w-full text-left flex items-center gap-3 p-3 rounded-2xl bg-white hover:bg-amber-50/80 border border-slate-200/90 hover:border-amber-400 shadow-2xs transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-[#0F172A] truncate">Smart Diet: Renal nutrition comparison</p>
                    <p className="text-[11px] text-slate-500 truncate">AI-matched prescription &amp; partner food options</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600" />
                </button>
              </div>
            </div>

            {/* Center: Phone Mockup */}
            <div className="lg:col-span-4 flex justify-center relative">
              <div className="w-full max-w-[335px] bg-[#0F172A] rounded-[2.75rem] p-3 shadow-2xl border-[3px] border-slate-800 relative transform lg:-rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="w-28 h-5 bg-[#0F172A] rounded-b-2xl mx-auto absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-10 h-1 bg-slate-700 rounded-full"></div>
                </div>

                <div className="bg-white rounded-[2.15rem] overflow-hidden flex flex-col h-[560px] border border-slate-100">
                  {/* Status Bar */}
                  <div className="px-6 pt-3 pb-1 flex items-center justify-between text-[11px] font-semibold text-[#0F172A]">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="w-3.5 h-3.5" />
                      <BatteryFull className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="px-4 py-2.5 border-b border-slate-100 bg-[#FFFBF5]/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-display font-bold text-xs text-[#0F172A]">
                            GreenLane <span className="text-emerald-600">Pet</span>
                          </p>
                          <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            AI Clinical &amp; Care Sync
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handleResetChat}
                        title="Reset Chat"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between bg-white border border-emerald-200/70 rounded-full px-3 py-1 text-[10px]">
                      <span className="font-bold text-[#0F172A] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        Max · Golden Retriever, 3y (29 kg)
                      </span>
                      <span className="text-emerald-700 font-semibold">Synced</span>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div ref={chatScrollRef} className="flex-1 p-3.5 overflow-y-auto chat-scroll space-y-3 bg-gradient-to-b from-white to-[#FFFBF5]/40">
                    {chatMessages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'items-start gap-2'}`}>
                        {msg.sender === 'ai' && (
                          <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-xs font-bold border border-amber-200">
                            AI
                          </div>
                        )}
                        <div className={`text-xs rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-2xs ${msg.sender === 'user'
                          ? 'bg-emerald-900 text-white rounded-tr-none max-w-[84%]'
                          : 'bg-emerald-50/95 border border-emerald-100 text-[#0F172A] rounded-tl-none max-w-[86%] space-y-1.5'
                          }`}>
                          {msg.tag && (
                            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md">
                              {msg.tag}
                            </span>
                          )}
                          {msg.isHtml ? (
                            <div className="space-y-1" dangerouslySetInnerHTML={{ __html: msg.text }} />
                          ) : (
                            <p>{msg.text}</p>
                          )}
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex items-start gap-2">
                        <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-xs font-bold border border-amber-200">
                          AI
                        </div>
                        <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs rounded-2xl rounded-tl-none px-3.5 py-2.5 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
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
                      className="flex-1 text-xs bg-slate-100/90 focus:bg-white text-[#0F172A] placeholder-slate-400 px-3.5 py-2.5 rounded-full border border-transparent focus:border-emerald-600 focus:outline-none transition-all"
                    />
                    <button
                      type="submit"
                      className="w-9 h-9 rounded-full bg-emerald-900 hover:bg-emerald-800 text-amber-400 flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-90"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>

                  <div className="px-3.5 py-2 bg-amber-50/95 border-t border-amber-200/80 flex items-center justify-between gap-2 text-[10px] text-amber-950">
                    <p className="leading-tight">
                      <strong>Boundary:</strong> AI guidance supports—never replaces—a licensed veterinarian. Red flags need immediate vet care.
                    </p>
                    <button
                      type="button"
                      onClick={() => handleOpenDemoModal('clinic')}
                      className="shrink-0 font-bold text-emerald-900 underline hover:text-emerald-700"
                    >
                      Urgent Vet
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 cols */}
            <div className="lg:col-span-4 space-y-5">
              <div className="relative rounded-3xl bg-gradient-to-br from-amber-50 via-[#FFFBF5] to-emerald-50/70 border border-amber-200/60 p-6 sm:p-7 shadow-soft overflow-hidden">
                <h3 className="font-display font-bold text-xl text-[#0F172A] mb-4">
                  Day-One AI Core vs. Connected Ecosystem
                </h3>

                <div className="space-y-4 relative z-10 text-xs">
                  <div className="rounded-2xl bg-white/90 border border-emerald-200/80 p-3.5 space-y-2">
                    <p className="font-extrabold uppercase tracking-wider text-[10px] text-emerald-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      Live on Day One (Core)
                    </p>
                    <ul className="space-y-1.5 text-slate-700 font-medium">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>24/7 AI Pet Companion &amp; Emergency Triage Guardrails</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>Digital Health Passports, Vaccine Reminders &amp; Smart Booking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>AI Pre-Visit Clinical Briefs &amp; Practice Flow Automation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-white/90 border border-amber-200/80 p-3.5 space-y-2">
                    <p className="font-extrabold uppercase tracking-wider text-[10px] text-amber-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      Connected Ecosystem Network
                    </p>
                    <ul className="space-y-1.5 text-slate-700 font-medium">
                      <li className="flex items-center gap-2">
                        <Network className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>AI Grooming, Walking, Training &amp; Boarding Dispatch</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Network className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Prescription Nutrition, Smart Wearables &amp; Welfare Telemetry</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Network className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Connected Global Partners (Royal Canin, Zoetis, Boehringer)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Health Timeline Preview */}
              <div className="rounded-3xl bg-white border border-slate-200/80 p-5 shadow-soft">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-[#0F172A]">AI Health Timeline · Max</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">Day-1 AI Core Sync</span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60">
                    <div className="flex items-center gap-2.5">
                      <Syringe className="w-4 h-4 text-amber-600 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-[#0F172A]">DHPP Annual Booster</p>
                        <p className="text-[10px] text-slate-500">GreenLane Vet Center · Auto-held</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-amber-700">In 5 days</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
                    <div className="flex items-center gap-2.5">
                      <Utensils className="w-4 h-4 text-emerald-700 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-[#0F172A]">Royal Canin Joint Care Refill</p>
                        <p className="text-[10px] text-slate-500">Connected Partner Diet · 29 kg</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800">Nov 28</span>
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-start justify-between gap-2 text-[11px] text-slate-600 leading-snug">
                  <div className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p>
                      <strong>AI vs. Vet Boundary:</strong> AI guidance supports—never replaces—a licensed veterinarian. Seek immediate vet care for sudden collapse, breathing distress, or poisoning.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenDemoModal('clinic')}
                    className="shrink-0 font-bold text-emerald-900 hover:underline"
                  >
                    Vet Help
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4B. AI PLATFORM FEATURES & CONNECTED ECOSYSTEM */}
      <section id="ai-features" className="py-16 lg:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">BALANCED FOR BOTH SIDES</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] mt-1">
                Built for Pet Parents &amp;{' '}
                <span className="text-emerald-800">Veterinary Teams</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              Pet parents get organized care and calm answers; clinics and partners get structured intake, fewer missed visits, and connected care flows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl bg-[#FFFBF5]/80 border border-slate-200/80 p-5 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-900 text-amber-300">Pet Parents · Day-One AI</span>
              <h3 className="font-display font-bold text-base text-[#0F172A] pt-1">24/7 AI Triage &amp; Health Tracking</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instant symptom checks, personalized diet calculations, and automatic booster alerts with clear emergency guardrails.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FFFBF5]/80 border border-slate-200/80 p-5 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-900 text-amber-300">Clinics · Day-One AI</span>
              <h3 className="font-display font-bold text-base text-[#0F172A] pt-1">AI Pre-Visit Clinical Intake</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured symptom summaries, timeline exports, and automated reminders that slash front-desk telephone load by 40%.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FFFBF5]/80 border border-slate-200/80 p-5 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">Ecosystem · Connected AI</span>
              <h3 className="font-display font-bold text-base text-[#0F172A] pt-1">Services &amp; Smart Hardware Telemetry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                AI-orchestrated grooming, training, walking schedules, and live collar/feeder health telemetry consolidated in one feed.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FFFBF5]/80 border border-slate-200/80 p-5 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">Partners · Connected AI</span>
              <h3 className="font-display font-bold text-base text-[#0F172A] pt-1">Precision Nutrition &amp; Care Sync</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct integration with veterinary prescription diets, pharmaceutical reminders, and verified animal welfare networks.
              </p>
            </div>
          </div>

          {/* Connected Ecosystem Nodes & Partners */}
          <div id="connected-ecosystem" className="mt-12 rounded-3xl bg-[#FFFBF5]/70 border border-emerald-900/10 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/70">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-900">Connected AI Ecosystem &amp; Trusted Partners</span>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  <strong className="text-[#0F172A]">{ecosystemNodesInfo[selectedEcoNode].tag}:</strong>{' '}
                  {ecosystemNodesInfo[selectedEcoNode].text}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-display font-extrabold text-slate-700 shrink-0">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80">ROYAL CANIN</span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80">zoetis</span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80">Boehringer Ingelheim</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6">
              {[
                { key: 'clinics', label: 'Veterinary Clinics', sub: 'Day-1 Core + Sync' },
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
                  className={`p-3.5 rounded-2xl bg-white text-left transition-all ${selectedEcoNode === node.key ? 'border-2 border-emerald-600' : 'border border-slate-100 hover:border-amber-400'
                    }`}
                >
                  <p className="text-xs font-bold text-[#0F172A]">{node.label}</p>
                  <p className={`text-[10px] mt-0.5 ${selectedEcoNode === node.key ? 'text-emerald-700 font-semibold' : 'text-slate-500'}`}>{node.sub}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 14-DAY WORKFLOW & ONBOARDING */}
      <section id="workflow" className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-600">
                <span className="w-6 h-0.5 bg-amber-500 rounded-full"></span>
                <span>HOW IT WORKS IN 14 DAYS</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A]">
                14-Day Structured AI{' '}
                <span className="text-emerald-800">Rollout Workflow</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                Follow each stage from data onboarding and AI triage customization to clinical validation and live analytics across clinics, care partners, and pet parents.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
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
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-colors ${activeWorkflowRegion === reg.key
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-200/80'
                    : 'bg-[#FFFBF5] text-slate-700 border border-slate-200 hover:bg-amber-50'
                    }`}
                >
                  {reg.label}
                </button>
              ))}
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
                  className={`text-left p-4 rounded-2xl border transition-all ${active ? 'bg-emerald-900 text-white border-emerald-900 shadow-md' : 'bg-[#FFFBF5]/80 hover:bg-[#FFFBF5] text-[#0F172A] border-slate-200/80'
                    }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                    <span className={active ? 'text-amber-300' : 'text-amber-700'}>STEP 0{s.step}</span>
                    <span className={active ? 'text-emerald-200' : 'text-slate-500'}>{s.windowLabel.split('·')[0].trim()}</span>
                  </div>
                  <p className="font-display font-bold text-sm">{s.tabTitle}</p>
                  <p className={`text-[11px] mt-0.5 ${active ? 'text-emerald-100/80' : 'text-slate-500'}`}>{s.tabSub}</p>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="rounded-3xl bg-gradient-to-br from-[#FFFBF5] via-white to-emerald-50/60 border border-slate-200/90 p-6 sm:p-8 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-900 text-amber-300">
                  {currentStepObj.windowLabel}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                  {currentRegionObj.label}
                </span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#0F172A]">{currentStepObj.title}</h3>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{currentStepObj.summary}</p>
              </div>

              <div className="rounded-2xl bg-white border border-emerald-200/70 px-4 py-3 text-xs font-medium text-slate-700 flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{currentRegionObj.badgeText}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="rounded-2xl bg-white border border-slate-200/80 p-4 space-y-1.5">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-900">Vet Clinics</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{currentStepObj.clinicAction}</p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200/80 p-4 space-y-1.5">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">Care &amp; Brand Partners</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{currentStepObj.providerAction}</p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200/80 p-4 space-y-1.5">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">Pet Parents</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{currentStepObj.parentAction}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200/80 p-6 space-y-5">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 mb-3">Stage Deliverables &amp; Readiness</p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {[...currentStepObj.deliverables, currentRegionObj.extraDeliverable].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500">Ready to map this stage to your team?</span>
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shrink-0"
                >
                  <span>Configure in Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section id="pricing" className="py-20 lg:py-24 bg-[#FFFBF5]/70 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-600">
              <span className="w-6 h-0.5 bg-amber-500 rounded-full"></span>
              <span>TRANSPARENT AI ECOSYSTEM PRICING</span>
              <span className="w-6 h-0.5 bg-amber-500 rounded-full"></span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A]">
              Plans That Scale With{' '}
              <span className="text-emerald-800">Every Pet &amp; Practice</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Start free as a pet parent, launch automated care for a single clinic or studio, or deploy multi-site AI workflows with live CRM &amp; PMS webhooks.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center p-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${!isAnnual ? 'bg-emerald-900 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-emerald-900'
                    }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${isAnnual ? 'bg-emerald-900 text-white shadow-xs' : 'text-slate-600 hover:text-emerald-900'
                    }`}
                >
                  <span>Annual</span>
                  <span className="text-[10px] font-extrabold bg-amber-400 text-emerald-950 px-2 py-0.5 rounded-full">Save 20%</span>
                </button>
              </div>

              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 shadow-2xs">
                <Coins className="w-4 h-4 text-amber-500" />
                <select
                  value={pricingCurrency}
                  onChange={(e) => setPricingCurrency(e.target.value)}
                  className="text-xs sm:text-sm font-bold text-[#0F172A] bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value="EUR_BE">EUR (€) · Belgium &amp; EU</option>
                  <option value="EUR_BG">EUR (€) / BGN · Bulgaria &amp; EU</option>
                  <option value="INR">INR (₹) · India</option>
                  <option value="USD">USD ($) · Global</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {/* Tier 1 */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                    For Pet Parents
                  </span>
                  <span className="text-xs font-semibold text-amber-700">Free Base + Optional Pass</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-[#0F172A]">GreenLane AI Plus (Pet Parents)</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                  Free base digital pet passport, vaccine reminders, and AI triage guidance—upgrade to Plus for 24/7 continuous health tracking, priority slots &amp; smart refills.
                </p>

                <div className="mt-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A]">Free</span>
                    <span className="text-xs font-semibold text-slate-500">/ base profile</span>
                  </div>
                  <p className="text-xs font-bold text-amber-700 mt-2">
                    Plus Care Pass: <span className="text-[#0F172A]">{isAnnual ? currentPricing.plusAnnual : currentPricing.plusMonthly}</span>
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Unlimited pet profiles, digital health history &amp; automated vaccine reminders</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>24/7 AI symptom triage, toxicity checker &amp; food safety assistant</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
                  className="w-full py-3.5 px-6 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-950 font-bold text-sm border border-emerald-200 transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Free AI Pet Profile</span>
                  <ArrowRight className="w-4 h-4 text-emerald-800" />
                </button>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="rounded-3xl bg-emerald-950 text-white border-2 border-amber-400/80 p-7 sm:p-8 shadow-card flex flex-col justify-between relative">
              <div className="absolute -top-3.5 right-6 bg-amber-400 text-emerald-950 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                Most Popular for Clinics &amp; Studios
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-900 px-3 py-1 rounded-full">
                    Clinics, Groomers &amp; Trainers
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-white">Clinic AI Starter</h3>
                <p className="text-xs sm:text-sm text-emerald-100/85 mt-1.5">
                  Built for independent vet clinics, grooming salons, and care studios automating reminders, AI pre-visit intake, and seamless bookings.
                </p>

                <div className="mt-6 pb-6 border-b border-emerald-800/80">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-amber-400">
                      {isAnnual ? currentPricing.starterAnnual : currentPricing.starterMonthly}
                    </span>
                    <span className="text-xs text-emerald-200">{isAnnual ? '/ mo billed annually' : '/ mo billed monthly'}</span>
                  </div>
                  <p className="text-xs text-emerald-300/80 mt-1.5">{currentPricing.subStarter}</p>
                </div>

                <ul className="mt-6 space-y-3 text-xs sm:text-sm text-emerald-50">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>AI pre-visit clinical triage briefs &amp; digital pet health timeline sync</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Automated multi-channel vaccine, wellness &amp; grooming rebooking reminders</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
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
                  className="w-full py-3.5 px-6 rounded-full bg-amber-400 hover:bg-amber-300 text-emerald-950 font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Clinic AI Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full">
                    Multi-Site &amp; Enterprise
                  </span>
                  <span className="text-xs font-semibold text-emerald-800">Custom Workflows</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-[#0F172A]">Practice AI Pro (Multi-Location &amp; Hospital Networks)</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                  For veterinary clinic groups, hospital networks, and pet brands requiring custom AI triage protocols, PMS/CRM webhooks, and SLA support.
                </p>

                <div className="mt-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A]">
                      {isAnnual ? currentPricing.proAnnual : currentPricing.proMonthly}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">/ mo starting · billed annually</span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-700 mt-1.5">{currentPricing.subPro}</p>
                </div>

                <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Custom AI triage protocols, brand nutrition engines &amp; multi-language packs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Real-time PMS/CRM webhook integrations, EMR sync &amp; custom analytics streams</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
                  className="w-full py-3.5 px-6 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
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
      <section id="demo" className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-600">
                  <span className="w-6 h-0.5 bg-amber-500 rounded-full"></span>
                  <span>LIVE DEMO &amp; ONBOARDING</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] leading-tight">
                  Configure Your{' '}
                  <span className="text-emerald-800">AI Rollout</span> in 3 Steps
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Choose your track, region, and demo format. Submissions log directly to{' '}
                  <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-emerald-900">window.GreenLaneAnalytics</code>{' '}
                  and any configured CRM/webhook endpoint.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-emerald-900 text-white shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-amber-400 text-emerald-950 font-extrabold text-xs flex items-center justify-center shrink-0">1</span>
                  <div>
                    <p className="text-xs font-bold">Track, Region &amp; Plan</p>
                    <p className="text-[11px] text-emerald-200">
                      {demoTrack === 'clinic' ? 'Veterinary Clinic' : demoTrack === 'partner' ? 'Service Partner' : 'Pet Parent'} · {demoRegion.split('(')[0].trim()} · {demoPlan}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FFFBF5] border border-slate-200/80 text-[#0F172A]">
                  <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs flex items-center justify-center shrink-0">2</span>
                  <div>
                    <p className="text-xs font-bold">Demo Format &amp; Focus</p>
                    <p className="text-[11px] text-slate-500">{demoFormat}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FFFBF5] border border-slate-200/80 text-[#0F172A]">
                  <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs flex items-center justify-center shrink-0">3</span>
                  <div>
                    <p className="text-xs font-bold">Contact &amp; Launch Checklist</p>
                    <p className="text-[11px] text-slate-500">Instant confirmation + CRM/webhook dispatch</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#FFFBF5] border border-amber-200/70 p-5 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">What Happens After You Submit</p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Event <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200">demo_onboarding_completed</code> dispatched</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Region-matched compliance pack unlocked</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Direct inspection available inside the footer Analytics Console</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#FFFBF5] via-white to-emerald-50/60 border border-slate-200/90 shadow-card p-6 sm:p-8 lg:p-10">
              {!demoSubmitted ? (
                <form onSubmit={handleDemoSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-emerald-900">Step 1 · Select Your Track</label>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900">Plan: {demoPlan}</span>
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
                          className={`p-3.5 rounded-2xl text-left transition-all ${demoTrack === t.key
                            ? 'border-2 border-emerald-900 bg-emerald-900 text-white'
                            : 'border border-slate-200 bg-white hover:border-amber-400 text-[#0F172A]'
                            }`}
                        >
                          <p className="text-xs font-extrabold">{t.title}</p>
                          <p className={`text-[11px] mt-0.5 ${demoTrack === t.key ? 'text-emerald-200' : 'text-slate-500'}`}>{t.sub}</p>
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Region &amp; Language Pack</label>
                        <select
                          value={demoRegion}
                          onChange={(e) => setDemoRegion(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-medium text-[#0F172A] focus:border-emerald-700 focus:outline-none"
                        >
                          <option value="Belgium / EU (EN/FR/NL · GDPR)">Belgium / EU (EN/FR/NL · GDPR)</option>
                          <option value="Bulgaria / EU Digital Health (BG/EN)">Bulgaria / EU Digital Health (BG/EN)</option>
                          <option value="India / High-Volume Care (EN/HI)">India / High-Volume Care (EN/HI)</option>
                          <option value="Global Standard (EN · ISO-27001)">Global Standard (EN · ISO-27001)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Target Plan</label>
                        <select
                          value={demoPlan}
                          onChange={(e) => setDemoPlan(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-medium text-[#0F172A] focus:border-emerald-700 focus:outline-none"
                        >
                          <option value="GreenLane AI Plus (Pet Parents)">GreenLane AI Plus (Pet Parents)</option>
                          <option value="Clinic AI Starter">Clinic AI Starter</option>
                          <option value="Practice AI Pro (Multi-Location &amp; Hospital Networks)">Practice AI Pro (Multi-Location &amp; Hospital Networks)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-200/70">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-emerald-900">Step 2 · Preferred Demo Format</label>
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
                          className={`p-3 rounded-2xl text-left transition-all ${demoFormat === f.label
                            ? 'border-2 border-amber-500 bg-amber-50/80'
                            : 'border border-slate-200 bg-white hover:border-amber-400'
                            }`}
                        >
                          <p className="text-xs font-extrabold text-[#0F172A]">{f.label}</p>
                          <p className="text-[11px] text-slate-600 mt-0.5">{f.sub}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-slate-200/70">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-emerald-900">Step 3 · Your Details</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={demoFormData.name}
                          onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                          placeholder="Dr. Camille Laurent"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:border-emerald-700 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={demoFormData.email}
                          onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                          placeholder="camille@clinic-example.be"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:border-emerald-700 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Clinic, Brand, or Pet Name (Optional)</label>
                      <input
                        type="text"
                        value={demoFormData.org}
                        onChange={(e) => setDemoFormData({ ...demoFormData, org: e.target.value })}
                        placeholder="Wavre Vet &amp; Wellness / Max (3y Golden Retriever)"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:border-emerald-700 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2.5 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-emerald-900/15 transition-all active:scale-95"
                      >
                        <span>Launch AI Demo &amp; Onboarding Request</span>
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setIntegrationModalOpen(true)}
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-700 underline"
                      >
                        <Terminal className="w-3.5 h-3.5 text-amber-600" />
                        <span>Inspect Analytics Payload</span>
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="rounded-2xl bg-white border border-emerald-200 p-6 space-y-4 shadow-soft">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
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
                      className="text-xs font-bold text-emerald-900 hover:underline shrink-0"
                    >
                      Edit / New Request
                    </button>
                  </div>

                  <div className="rounded-xl bg-[#FFFBF5] border border-amber-200/70 p-4 space-y-2">
                    <p className="text-xs font-bold text-[#0F172A]">Immediate Next-Steps Checklist:</p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>Region &amp; compliance pack prepared for {demoRegion}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>Scheduled format: {demoFormat}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
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
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-emerald-100/90 via-emerald-50 to-amber-50/90 border border-emerald-200/60 shadow-card">
            <svg className="absolute inset-0 w-full h-full object-cover pointer-events-none" viewBox="0 0 1200 320" preserveAspectRatio="none" aria-hidden="true">
              <g fill="#064E3B" opacity="0.08">
                <rect x="860" y="90" width="28" height="160" rx="2"></rect>
                <rect x="895" y="65" width="35" height="185" rx="2"></rect>
                <rect x="938" y="105" width="24" height="145" rx="2"></rect>
                <rect x="970" y="50" width="40" height="200" rx="2"></rect>
                <rect x="1018" y="85" width="30" height="165" rx="2"></rect>
                <rect x="1055" y="110" width="36" height="140" rx="2"></rect>
              </g>
              <path d="M0,250 Q320,170 650,235 T1200,180 L1200,320 L0,320 Z" fill="#10B981" opacity="0.16"></path>
              <path d="M0,285 Q450,235 820,255 T1200,220 L1200,320 L0,320 Z" fill="#064E3B" opacity="0.22"></path>
            </svg>

            <div className="relative z-10 px-6 py-12 sm:px-12 lg:px-16 lg:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl space-y-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900 bg-white/80 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Start Free Today · Powered by GreenLane AI</span>
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0F172A]">
                  One AI-Powered Ecosystem for Every Pet. One Calm Workflow for Care Teams.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Join thousands of pet parents, veterinary clinics, and care specialists across Belgium, Bulgaria, India, and globally who trust GreenLane AI for smarter, proactive pet care.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleOpenDemoModal('parent')}
                    className="inline-flex items-center gap-2.5 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-emerald-900/20 transition-all active:scale-95"
                  >
                    <span>Try Free AI Triage</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                  <button
                    onClick={() => handleOpenDemoModal('clinic')}
                    className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-emerald-950 font-semibold px-6 py-3.5 rounded-full border border-emerald-900/15 transition-all active:scale-95"
                  >
                    <span>Book Clinic AI Demo</span>
                  </button>
                </div>
              </div>

              {/* Silhouette */}
              <div className="self-end md:self-center shrink-0 pr-2 sm:pr-8">
                <svg className="w-48 sm:w-60 h-auto text-emerald-900" viewBox="0 0 260 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Person walking dog silhouette">
                  <circle cx="35" cy="108" r="16" fill="#059669" opacity="0.35"></circle>
                  <rect x="33" y="120" width="4" height="18" fill="#064E3B" opacity="0.4"></rect>
                  <circle cx="232" cy="102" r="18" fill="#059669" opacity="0.3"></circle>
                  <rect x="230" y="116" width="4" height="22" fill="#064E3B" opacity="0.4"></rect>
                  <circle cx="105" cy="34" r="10" fill="#064E3B"></circle>
                  <path d="M97 48 C97 45, 114 45, 116 50 L124 76 L136 88 C138 90, 135 93, 132 91 L117 79 L114 96 L124 134 C125 137, 120 138, 118 135 L107 102 L95 135 C94 138, 89 137, 90 134 L100 92 L96 66 L87 82 C85 85, 81 83, 83 80 L94 52 Z" fill="#064E3B"></path>
                  <path d="M135 89 Q158 106 177 104" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M174 103 C176 96, 183 94, 187 98 L192 103 L210 103 C215 103, 219 100, 222 96 C224 94, 226 96, 224 99 C221 104, 218 107, 215 109 L218 133 C218 135, 214 136, 213 133 L209 116 L193 116 L189 133 C188 136, 184 135, 185 132 L188 113 L181 109 C176 109, 173 106, 174 103 Z" fill="#064E3B"></path>
                  <path d="M179 97 L175 104 L181 103 Z" fill="#047857"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer id="footer" className="bg-emerald-950 text-white pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-emerald-800/60">
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-emerald-950 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  GreenLane<span className="text-amber-400">Pet</span>
                </span>
              </a>
              <p className="text-xs text-emerald-200/80 tracking-wide">
                Intelligent Health. Proactive Care. Connected Services. Thriving Community.
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-emerald-100/80">
              <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              <a href="#ai-features" className="hover:text-amber-400 transition-colors">AI Features</a>
              <a href="#connected-ecosystem" className="hover:text-amber-400 transition-colors">AI Ecosystem</a>
              <a href="#workflow" className="hover:text-amber-400 transition-colors">14-Day AI Rollout</a>
              <a href="#pricing" className="hover:text-amber-400 transition-colors">Plans &amp; Pricing</a>
              <button onClick={() => handleOpenDemoModal('clinic')} className="hover:text-amber-400 transition-colors">Book AI Demo</button>
            </nav>

            <div className="flex items-center gap-3">
              <a href="#footer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-emerald-900/90 hover:bg-amber-500 text-white hover:text-emerald-950 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#footer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-emerald-900/90 hover:bg-amber-500 text-white hover:text-emerald-950 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#footer" aria-label="Twitter / X" className="w-9 h-9 rounded-full bg-emerald-900/90 hover:bg-amber-500 text-white hover:text-emerald-950 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#footer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-emerald-900/90 hover:bg-amber-500 text-white hover:text-emerald-950 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
            <p>
              © 2026 GreenLane Pet. All rights reserved. · AI guidance supports—but does not replace—licensed veterinary care.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a href="#footer" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#footer" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#footer" className="hover:text-white transition-colors">Veterinary Compliance</a>
              <button
                type="button"
                onClick={() => setIntegrationModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Analytics &amp; CRM Console ({analyticsEvents.length})</span>
              </button>
            </div>
          </div>
        </div>
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
                <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-amber-400 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-[#0F172A]">Experience GreenLane Pet AI</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Request early access for your pet family or book a live clinic &amp; partner ecosystem demo.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); setDemoSuccess(true); }} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                    <input type="text" required placeholder="Alex Morgan" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-emerald-700 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Work or Personal Email</label>
                    <input type="email" required placeholder="alex@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-emerald-700 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">I am joining as a...</label>
                    <select
                      value={demoModalRole}
                      onChange={(e) => setDemoModalRole(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:border-emerald-700 focus:outline-none"
                    >
                      <option value="parent">Pet Parent (Dogs, Cats &amp; More — Early Access)</option>
                      <option value="clinic">Veterinary Clinic / Hospital (Practice AI Demo)</option>
                      <option value="services">Grooming, Boarding &amp; Pet Services</option>
                      <option value="partner">Pet Brand / Smart Hardware Partner</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-semibold py-3 rounded-full shadow-md transition-all flex items-center justify-center gap-2">
                    <span>Confirm Request</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-[#0F172A]">You're on the Priority List!</h3>
                <p className="text-sm text-slate-600">
                  Thank you for joining GreenLanePet. Our team has received your request.
                </p>
                <button onClick={() => setDemoModalOpen(false)} className="bg-emerald-900 text-white text-sm font-semibold px-6 py-2.5 rounded-full">
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
          <div className="bg-emerald-950 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-emerald-800 relative">
            <div className="px-6 py-4 flex items-center justify-between border-b border-emerald-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="font-display font-bold text-sm text-white">GreenLane Pet AI — 60-Second Ecosystem Tour</span>
              </div>
              <button onClick={() => setVideoModalOpen(false)} className="w-8 h-8 rounded-full bg-emerald-900 hover:bg-emerald-800 text-emerald-200 flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 bg-gradient-to-br from-emerald-950 via-emerald-900 to-[#0F172A] text-white space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-emerald-700/60 aspect-video bg-[#0F172A] flex flex-col justify-between p-5">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
                    AI TELEMETRY ENGINE v2.6
                  </span>
                  <span className="text-xs font-mono text-emerald-300">00:24 / 01:00</span>
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 my-auto">
                  <div className="bg-[#0F172A]/80 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3">
                    <p className="text-[11px] text-amber-400 font-bold">01. UNDERSTAND</p>
                    <p className="text-xs text-slate-200 mt-1">AI analyzes breed, wearable vitals &amp; diet logs in real time.</p>
                  </div>
                  <div className="bg-[#0F172A]/80 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3">
                    <p className="text-[11px] text-amber-400 font-bold">02. CONNECT</p>
                    <p className="text-xs text-slate-200 mt-1">Sync with vetted clinics, groomers &amp; sitters.</p>
                  </div>
                  <div className="bg-[#0F172A]/80 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3">
                    <p className="text-[11px] text-amber-400 font-bold">03. CARE</p>
                    <p className="text-xs text-slate-200 mt-1">Automated prescriptions, vaccine reminders &amp; triage.</p>
                  </div>
                </div>

                <div className="relative z-10 space-y-1.5">
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-2/5 h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-emerald-200">Ready to test the AI Assistant yourself?</p>
                <button
                  onClick={() => {
                    setVideoModalOpen(false);
                    document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs px-5 py-2.5 rounded-full transition-colors"
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
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1">
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
                className="text-slate-500 hover:text-emerald-900 font-semibold"
              >
                Clear Log
              </button>
            </div>

            <div className="flex-1 overflow-y-auto chat-scroll bg-slate-950 text-emerald-100 rounded-2xl p-4 font-mono text-[11px] space-y-2.5 min-h-[220px]">
              {analyticsEvents.slice().reverse().map((ev, i) => (
                <div key={i} className="rounded-xl bg-slate-900/90 border border-slate-800 p-3 space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-bold text-amber-400">{ev.eventName}</span>
                    <span className="text-slate-400">{ev.timestamp}</span>
                  </div>
                  <pre className="text-[10px] text-emerald-200/90 overflow-x-auto whitespace-pre-wrap">
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