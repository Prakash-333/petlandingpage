import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Building2, Crown, CheckCircle2, PhoneCall } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';
import { downloadReceiptPDF } from '@/utils/downloadReceipt';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  desc: string;
  features: PricingFeature[];
  price: { monthly: string; annual: string };
  links?: { monthly: string; annual: string };
  nameColor: string;
  iconBg: string;
  icon: React.ReactNode;
  featured: boolean;
  cta?: string;
}

export default function Pricing() {
  const { t, locale } = useTranslation();
  const { openBookDemoModal } = useModal();
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const getTimezoneCountry = (): string | null => {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        if (tz.includes('Warsaw')) return 'PL';
        if (tz.includes('Kolkata') || tz.includes('Calcutta') || tz.includes('India') || new Date().getTimezoneOffset() === -330) return 'IN';
        if (tz.startsWith('Europe/')) return 'EU'; // Brussels, Paris, Berlin, etc. -> EUR
      } catch (e) {
        return null;
      }
      return null;
    };

    const tzCountry = getTimezoneCountry();
    if (tzCountry) {
      setCountryCode(tzCountry);
    }

    const fetchLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('Primary API failed');
        const data = await res.json();
        if (data?.country_code) {
          // If system timezone is set to Europe/Brussels etc., honor timezone for testing/user preference
          if (tzCountry && tzCountry !== 'IN' && data.country_code === 'IN') {
            return;
          }
          setCountryCode(data.country_code);
          return;
        }
      } catch (err) {
        try {
          const fallbackRes = await fetch('https://api.country.is/');
          if (fallbackRes.ok) {
            const fallbackData = await fallbackRes.json();
            if (fallbackData?.country) {
              if (tzCountry && tzCountry !== 'IN' && fallbackData.country === 'IN') {
                return;
              }
              setCountryCode(fallbackData.country);
            }
          }
        } catch (fallbackErr) {
          // Default to timezone or EUR
        }
      }
    };
    
    fetchLocation();
  }, []);

  // Automatically verify and download PDF receipt on return from Stripe checkout
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const paymentStatus = params.get('payment');
    const sessionId = params.get('session_id');

    if (paymentStatus === 'success' && sessionId) {
      const handleStripeSuccess = async () => {
        try {
          const res = await fetch('/api/stripe/verify-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ session_id: sessionId }),
          });

          const data = await res.json();
          if (res.ok && data.success && data.receiptData) {
            // Automatically download receipt PDF in browser
            await downloadReceiptPDF(data.receiptData);

            alert(
              `Payment Verified & Successful!\nReceipt / Invoice ID: ${data.receiptData.paymentId}\n\nYour official payment receipt has been downloaded automatically.`
            );

            // Clean query parameters from URL so refresh does not trigger repeated downloads
            const cleanUrl = window.location.pathname + window.location.hash;
            window.history.replaceState({}, document.title, cleanUrl);
          } else {
            console.error('Failed to verify Stripe session:', data.error);
          }
        } catch (err) {
          console.error('Error verifying Stripe session on return:', err);
        }
      };

      handleStripeSuccess();
    }
  }, []);

  const planConfigs = [
    {
      icon: <Zap size={24} className="text-emerald-600" />,
      iconBg: 'bg-emerald-100',
      nameColor: 'text-emerald-900',
      price: { monthly: '186', annual: '143' },
      links: {
        monthly: 'https://rzp.io/l/placeholder-eur-monthly',
        annual: 'https://rzp.io/l/placeholder-eur-annual'
      },
      featured: false,
    },
    {
      icon: <Building2 size={24} className="text-emerald-950" />,
      iconBg: 'bg-[#FFC814]',
      nameColor: 'text-emerald-900',
      price: { monthly: '289', annual: '223' },
      links: {
        monthly: 'https://rzp.io/l/placeholder-eur-pro-monthly',
        annual: 'https://rzp.io/l/placeholder-eur-pro-annual'
      },
      featured: true,
    },
    {
      icon: <Crown size={24} className="text-[#FFC814]" />,
      iconBg: 'bg-[#FFC814]/10',
      nameColor: 'text-emerald-900',
      price: { monthly: 'Custom', annual: 'Custom' },
      featured: false,
    }
  ];

  const translatedPlans: PricingPlan[] = (t('pricing.plans') as any[]).map((plan, i) => {
    return {
      ...plan,
      ...planConfigs[i],
      features: (plan.features as string[]).map((f: string) => ({ text: f, included: true }))
    } as PricingPlan;
  });

  const indiaPlanConfigs = [
    {
      icon: <Zap size={24} className="text-emerald-600" />,
      iconBg: 'bg-emerald-100',
      nameColor: 'text-emerald-900',
      price: { monthly: '1,499', annual: '1,199' },
      links: {
        monthly: 'https://rzp.io/rzp/ebnyEmMu', // 1499
        annual: 'https://rzp.io/rzp/mtWPDjdI'   // 1199
      },
      featured: false,
    },
    {
      icon: <Building2 size={24} className="text-emerald-950" />,
      iconBg: 'bg-[#FFC814]',
      nameColor: 'text-emerald-900',
      price: { monthly: '2,499', annual: '1,999' },
      links: {
        monthly: 'https://rzp.io/rzp/ZldZIPM', // 2499
        annual: 'https://rzp.io/rzp/oPRHSov'   // 1999
      },
      featured: true,
    },
    {
      icon: <Crown size={24} className="text-[#FFC814]" />,
      iconBg: 'bg-[#FFC814]/10',
      nameColor: 'text-emerald-900',
      price: { monthly: 'Custom', annual: 'Custom' },
      featured: false,
    }
  ];

  const translatedIndiaPlans: PricingPlan[] = (t('pricingIn.plans') as any[]).map((plan, i) => {
    return {
      ...plan,
      ...indiaPlanConfigs[i],
      features: (plan.features as string[]).map((f: string) => ({ text: f, included: true }))
    } as PricingPlan;
  });

  const polandPlanConfigs = [
    {
      icon: <Zap size={24} className="text-emerald-600" />,
      iconBg: 'bg-emerald-100',
      nameColor: 'text-emerald-900',
      price: { monthly: '779', annual: '619' },
      links: {
        // TODO: Replace with Razorpay PLN Payment Links
        monthly: 'https://rzp.io/l/placeholder-pln-monthly',
        annual: 'https://rzp.io/l/placeholder-pln-annual'
      },
      featured: false,
    },
    {
      icon: <Building2 size={24} className="text-emerald-950" />,
      iconBg: 'bg-[#FFC814]',
      nameColor: 'text-emerald-900',
      price: { monthly: '1,209', annual: '969' },
      links: {
        // TODO: Replace with Razorpay PLN Payment Links
        monthly: 'https://rzp.io/l/placeholder-pln-pro-monthly',
        annual: 'https://rzp.io/l/placeholder-pln-pro-annual'
      },
      featured: true,
    },
    {
      icon: <Crown size={24} className="text-[#FFC814]" />,
      iconBg: 'bg-[#FFC814]/10',
      nameColor: 'text-emerald-900',
      price: { monthly: 'Custom', annual: 'Custom' },
      featured: false,
    }
  ];

  const translatedPolandPlans: PricingPlan[] = (t('pricing.plans') as any[]).map((plan, i) => {
    return {
      ...plan,
      ...polandPlanConfigs[i],
      features: (plan.features as string[]).map((f: string) => ({ text: f, included: true }))
    } as PricingPlan;
  });

  const isDomainPoland = mounted && typeof window !== 'undefined' && (
    window.location.hostname.toLowerCase().endsWith('.pl') || 
    window.location.hostname.toLowerCase().includes('greenlaneai.pl') ||
    window.location.search.toLowerCase().includes('domain=pl')
  );
  const isEuroLocale = locale === 'fr' || locale === 'es' || locale === 'nl';
  const isPoland = locale === 'pl' || (mounted && countryCode === 'PL') || isDomainPoland;
  const isIndia = !isPoland && !isEuroLocale && mounted && countryCode === 'IN';

  const currentPlans = isPoland ? translatedPolandPlans : (isIndia ? translatedIndiaPlans : translatedPlans);
  const currencySymbol = isPoland ? 'zł' : (isIndia ? '₹' : '€');
  const isSymbolAfter = currencySymbol === 'zł';

  const handlePayment = async (plan: PricingPlan) => {
    const rawPrice = billing === 'monthly' ? plan.price.monthly : plan.price.annual;
    if (rawPrice === 'Custom') {
      openBookDemoModal();
      return;
    }

    // --- STRIPE CHECKOUT (Europe / EUR and Poland / PLN) ---
    if (!isIndia) {
      setLoadingPlan(plan.name);
      try {
        const planKey = plan.featured ? 'scale' : 'starter';
        const country = isPoland ? 'PL' : 'EU';

        const res = await fetch('/api/stripe/create-checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan: planKey,
            interval: billing,
            country,
          }),
        });

        const data = await res.json();
        if (!res.ok || !data.url) {
          throw new Error(data.error || 'Failed to initialize Stripe checkout');
        }

        // Redirect user directly to Stripe Checkout
        window.location.href = data.url;
        return;
      } catch (stripeErr: any) {
        console.error('Stripe checkout error:', stripeErr);
        alert(stripeErr.message || 'An error occurred while redirecting to Stripe checkout.');
        setLoadingPlan(null);
        return;
      }
    }

    // --- RAZORPAY CHECKOUT (India / INR) ---
    const numericPrice = parseInt(rawPrice.replace(/,/g, ''), 10);
    const targetCurrency = 'INR';
    const amountInSubunits = numericPrice * 100;

    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!razorpayKey) {
      alert('Razorpay Key is not configured. Please ensure NEXT_PUBLIC_RAZORPAY_KEY_ID is set.');
      return;
    }

    setLoadingPlan(plan.name);

    const loadScript = () => {
      return new Promise<boolean>((resolve) => {
        if ((window as any).Razorpay) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    try {
      const loaded = await loadScript();
      if (!loaded) {
        alert('Razorpay SDK failed to load. Please check your internet connection.');
        setLoadingPlan(null);
        return;
      }

      // 1. Call backend to create order
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amountInSubunits,
          currency: targetCurrency,
          receipt: `rcpt_${plan.name.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}`,
        }),
      });

      const orderData = await res.json();
      if (!res.ok || !orderData.order_id) {
        throw new Error(orderData.error || 'Failed to create payment order');
      }

      // 2. Open Razorpay Checkout modal
      const options = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Greenlane',
        description: `${plan.name} (${billing === 'monthly' ? 'Monthly' : 'Annual'})`,
        order_id: orderData.order_id,
        handler: async function (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          try {
            // 3. Verify signature on backend
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyRes.ok && verifyData.success) {
              // Automatically trigger receipt PDF download in the browser
              try {
                await downloadReceiptPDF({
                  paymentId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id,
                  planName: plan.name,
                  billing,
                  amount: numericPrice,
                  currency: targetCurrency,
                  date: new Date().toLocaleString('en-IN', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  }),
                });
              } catch (dlErr) {
                console.error('Receipt download error:', dlErr);
              }

              alert(
                `Payment Verified & Successful!\nPayment ID: ${response.razorpay_payment_id}\n\nYour official payment receipt has been downloaded automatically.`
              );
            } else {
              alert(`Payment verification failed: ${verifyData.error || 'Invalid signature'}`);
            }
          } catch (verifyErr: any) {
            console.error('Signature verification error:', verifyErr);
            alert(`Error verifying payment: ${verifyErr.message || 'Please contact support.'}`);
          }
        },
        modal: {
          ondismiss: function () {
            console.log('Payment modal dismissed by user.');
          },
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#059669',
        },
      };

      const rzp = new (window as any).Razorpay(options);

      rzp.on('payment.failed', function (failureResponse: any) {
        console.error('Payment failed:', failureResponse.error);
        alert(`Payment Failed: ${failureResponse.error?.description || failureResponse.error?.reason || 'Payment could not be completed.'}`);
      });

      rzp.open();
    } catch (err: any) {
      console.error('Checkout error:', err);
      alert(err.message || 'An error occurred while initiating payment.');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#f8fafc]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">

        <h2 className="text-[30px] md:text-[42px] font-heading font-bold text-[#0f172a] text-center mb-4 tracking-tight leading-tight">
          {t('pricing.title')}
        </h2>
        <p className="text-center text-[#475569] text-[16px] md:text-[20px] font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
          {t('pricing.subtitle')}
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-20">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                billing === 'monthly' 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {t('pricing.monthly')}
            </button>
            <div className="relative">
              <button
                onClick={() => setBilling('annual')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  billing === 'annual' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {t('pricing.annual')}
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-50 text-red-500">
                  {t('pricing.save')}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`relative bg-white rounded-[2.5rem] flex flex-col border-2 transition-all duration-300 hover:shadow-xl p-[2px] ${
                plan.featured 
                ? 'border-[#FFC814] shadow-lg md:scale-105 z-10' 
                : 'border-transparent shadow-sm hover:border-slate-200'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFC814] text-emerald-950 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                  {t('pricing.mostPopular')}
                </div>
              )}

              {/* Card body */}
              <div className="p-6 sm:p-10 flex flex-col flex-1">
                {/* Plan header */}
                <div className="mb-10">
                  <div className={`${plan.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                    {plan.icon}
                  </div>
                  <h3 className={`text-2xl font-heading font-extrabold ${plan.nameColor} mb-2 leading-tight`}>
                    {plan.name}
                  </h3>
                  <p className="text-slate-500 text-[16px] md:text-[20px] font-medium leading-relaxed mb-6">
                    {plan.desc}
                  </p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-heading font-black text-[#0f172a] flex items-center">
                      {!isSymbolAfter && (billing === 'monthly' ? (plan.price.monthly === 'Custom' ? '' : currencySymbol) : (plan.price.annual === 'Custom' ? '' : currencySymbol))}
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={billing}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {billing === 'monthly' 
                            ? (plan.price.monthly === 'Custom' ? (t('pricing.custom') || 'Custom pricing') : plan.price.monthly) 
                            : (plan.price.annual === 'Custom' ? (t('pricing.custom') || 'Custom pricing') : plan.price.annual)}
                        </motion.span>
                      </AnimatePresence>
                      {isSymbolAfter && (billing === 'monthly' ? (plan.price.monthly === 'Custom' ? '' : ` ${currencySymbol}`) : (plan.price.annual === 'Custom' ? '' : ` ${currencySymbol}`))}
                    </span>
                    {plan.price.monthly !== 'Custom' && (
                      <span className="text-slate-400 text-sm font-bold">{t('pricing.perMonth') || '/mo'}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-10 flex-1">
                  <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-6">
                    {t('pricing.whatsIncluded')}
                  </div>
                  <ul className="flex flex-col gap-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                          feature.included ? 'bg-emerald-100' : 'bg-slate-50'
                        }`}>
                          {feature.included
                            ? <CheckCircle2 size={14} className="text-emerald-500" />
                            : <X size={14} className="text-slate-300" />
                          }
                        </div>
                        <span className={`text-[15px] sm:text-[18px] font-medium leading-[1.6] transition-colors ${
                          feature.included ? 'text-[#334155]' : 'text-slate-400 line-through'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  onClick={() => handlePayment(plan)}
                  disabled={loadingPlan === plan.name}
                  className={`w-full py-4 px-8 rounded-2xl text-[15px] font-bold transition-all duration-300 active:scale-[0.98] ${
                    plan.featured
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-xl'
                      : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 hover:bg-emerald-700/5'
                  } ${loadingPlan === plan.name ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {loadingPlan === plan.name 
                    ? (!isIndia ? 'Redirecting to Stripe...' : 'Processing...') 
                    : (plan.cta || t('pricing.getStarted'))}
                </button>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
