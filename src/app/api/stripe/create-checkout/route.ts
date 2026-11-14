import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_for_build';
const stripe = new Stripe(stripeSecretKey);

const PRODUCT_IDS_EU_LIVE: Record<string, Record<string, string>> = {
  starter: {
    monthly: 'prod_VTDRNwvmj17Apj',
    annually: 'prod_VTDTgJ2VK7WICP',
  },
  scale: {
    monthly: 'prod_VTDWU2hz7aSV6a',
    annually: 'prod_VTDXstnNJfdgLL',
  },
};

const PRODUCT_IDS_EU_TEST: Record<string, Record<string, string>> = {
  starter: {
    monthly: 'prod_VTF94zbd9wG1dY',
    annually: 'prod_VTF9N8KvJ5ERjA',
  },
  scale: {
    monthly: 'prod_VTF9s3qS5ZijK9',
    annually: 'prod_VTF9K0Ux0fJliJ',
  },
};

const PRODUCT_IDS_PL_LIVE: Record<string, Record<string, string>> = {
  starter: {
    monthly: 'prod_VTDpk92GiRsMX3',
    annually: 'prod_VTDr8gmGov3dK0',
  },
  scale: {
    monthly: 'prod_VTDtcQvKKvs2db',
    annually: 'prod_VTDwA1C55jqO0Q',
  },
};

const PRODUCT_IDS_PL_TEST: Record<string, Record<string, string>> = {
  starter: {
    monthly: 'prod_VTF9r8t4LHqcda',
    annually: 'prod_VTF9w5XzZAVKuL',
  },
  scale: {
    monthly: 'prod_VTF9RT6ZzsMB2J',
    annually: 'prod_VTF9FJWDvWzI8T',
  },
};

// Direct Live Price ID mapping for instant resolution
const PRICE_IDS_LIVE: Record<string, Record<string, Record<string, string>>> = {
  EU: {
    starter: {
      monthly: 'price_1USH0L3l7vmK3YcY3LaP5VZI',
      annually: 'price_1USH2J3l7vmK3YcYSn7bbPwg',
    },
    scale: {
      monthly: 'price_1USH573l7vmK3YcYxv11MRNN',
      annually: 'price_1USH6e3l7vmK3YcYFowpLgew',
    },
  },
  PL: {
    starter: {
      monthly: 'price_1USHOD3l7vmK3YcYQrce0m62',
      annually: 'price_1USHPz3l7vmK3YcYkO6FqDSG',
    },
    scale: {
      monthly: 'price_1USHSB3l7vmK3YcYlyc5gwYb',
      annually: 'price_1USHUy3l7vmK3YcY01d23whz',
    },
  },
};

const PRICE_IDS_TEST: Record<string, Record<string, Record<string, string>>> = {
  EU: {
    starter: {
      monthly: 'price_1USIez3V7pAXkUJFLC74l336',
      annually: 'price_1USIf03V7pAXkUJFjkG0aEQJ',
    },
    scale: {
      monthly: 'price_1USIf03V7pAXkUJFhh1XDKbu',
      annually: 'price_1USIf13V7pAXkUJFChkT3cp1',
    },
  },
  PL: {
    starter: {
      monthly: 'price_1USIf23V7pAXkUJFRPBa0dhq',
      annually: 'price_1USIf33V7pAXkUJFYT8mPZ33',
    },
    scale: {
      monthly: 'price_1USIf43V7pAXkUJFHhSyh9rf',
      annually: 'price_1USIf43V7pAXkUJFJdJBzkhp',
    },
  },
};

export async function POST(request: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe secret key not configured on server' },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const { plan, interval, country = 'EU' } = body;

    const normalizedPlan = (plan || 'starter').toLowerCase();
    const normalizedInterval = (interval || 'monthly').toLowerCase() === 'annual' ? 'annually' : 'monthly';
    const normalizedCountry = country === 'PL' ? 'PL' : 'EU';

    const isTestMode = stripeSecretKey.includes('sk_test');
    let targetPriceId: string | undefined;

    // Fast path: use direct verified price IDs
    const activePriceMap = isTestMode ? PRICE_IDS_TEST : PRICE_IDS_LIVE;
    if (activePriceMap[normalizedCountry]?.[normalizedPlan]?.[normalizedInterval]) {
      targetPriceId = activePriceMap[normalizedCountry][normalizedPlan][normalizedInterval];
    } else {
      // Dynamic fallback via Product ID
      const productMap = normalizedCountry === 'PL'
        ? (isTestMode ? PRODUCT_IDS_PL_TEST : PRODUCT_IDS_PL_LIVE)
        : (isTestMode ? PRODUCT_IDS_EU_TEST : PRODUCT_IDS_EU_LIVE);

      const productId = productMap[normalizedPlan]?.[normalizedInterval];
      if (!productId) {
        return NextResponse.json(
          { error: `Invalid plan (${normalizedPlan}) or interval (${normalizedInterval})` },
          { status: 400 }
        );
      }

      const prices = await stripe.prices.list({ product: productId, active: true, limit: 1 });
      targetPriceId = prices.data[0]?.id;
    }

    if (!targetPriceId) {
      return NextResponse.json(
        { error: 'No active Stripe price found for this plan configuration' },
        { status: 404 }
      );
    }

    // Determine host / origin for redirection
    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_APP_URL ||
      'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: targetPriceId,
          quantity: 1,
        },
      ],
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
      success_url: `${origin}/?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#pricing`,
      metadata: {
        plan: normalizedPlan,
        interval: normalizedInterval,
        country: normalizedCountry,
        source: 'greenlane_landing_page',
      },
    });

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    });
  } catch (error: any) {
    console.error('Error creating Stripe checkout session:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to create Stripe checkout session' },
      { status: 500 }
    );
  }
}
