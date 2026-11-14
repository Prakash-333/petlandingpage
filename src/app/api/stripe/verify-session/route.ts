import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_for_build';
const stripe = new Stripe(stripeSecretKey);

export async function POST(request: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe secret key not configured on server' },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const { session_id } = body;

    if (!session_id) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['invoice', 'subscription', 'customer'],
    });

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment has not been completed or verified' },
        { status: 400 }
      );
    }

    const invoiceId =
      typeof session.invoice === 'object' && session.invoice
        ? session.invoice.id
        : (typeof session.invoice === 'string' ? session.invoice : undefined);

    const subscriptionId =
      typeof session.subscription === 'object' && session.subscription
        ? session.subscription.id
        : (typeof session.subscription === 'string' ? session.subscription : undefined);

    const paymentId = invoiceId || subscriptionId || session.id;

    const planKey = (session.metadata?.plan || '').toLowerCase();
    const planName = planKey === 'scale' ? 'Scale' : 'Starter';
    const intervalKey = (session.metadata?.interval || '').toLowerCase();
    const billing: 'monthly' | 'annual' =
      intervalKey === 'annually' || intervalKey === 'annual' ? 'annual' : 'monthly';
    const amount = (session.amount_total || 0) / 100;
    const currency = (session.currency || 'EUR').toUpperCase();

    const createdDate = new Date(session.created * 1000).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    return NextResponse.json({
      success: true,
      receiptData: {
        paymentId,
        orderId: session.id,
        planName,
        billing,
        amount,
        currency,
        date: createdDate,
      },
    });
  } catch (error: any) {
    console.error('Error verifying Stripe session:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to verify Stripe session' },
      { status: 500 }
    );
  }
}
