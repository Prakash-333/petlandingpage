'use client';
import React from 'react';
import LegalLayout from '@/components/landing/LegalLayout';

export default function TermsAndConditions() {
  return (
    <LegalLayout 
      title="Terms & Conditions" 
      lastUpdated="May 12, 2026"
    >
      <section className="space-y-6">
        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Company Information</h2>
          <div className="text-[14px] md:text-[15px]">
            <p>These Terms and Conditions (“Terms”) govern the sale and use of services provided by:</p>
            <p className="font-bold text-[#121519] mt-2">Digi Mabble IT Solutions</p>
            <p>Avenue Eiffel 8, 1300 Wavre, Belgium</p>
            <p>Website: <a href="https://digimabbleai.com" className="text-emerald-500 hover:underline">https://digimabbleai.com</a></p>
            <p>Email: info@digimabble.com</p>
            <p className="mt-3">
              The Company operates in Belgium and provides digital, SaaS and AI-based solutions to business clients, including the GreenLane platform.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Scope of Services</h2>
          <p className="text-[14px] md:text-[15px]">Digi Mabble IT Solutions provides professional digital services through GreenLane, including:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-3 text-[#576071] text-[14px] md:text-[15px]">
            <li>AI-powered agents (chatbots, voice agents, automation agents).</li>
            <li>SaaS tools and subscription-based software.</li>
            <li>Data analysis, automation and dashboards.</li>
            <li>Lead generation and business intelligence solutions.</li>
            <li>Custom IT, automation and AI consulting services.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Eligibility & Business Use</h2>
          <p className="text-[14px] md:text-[15px]">
            The Services are intended exclusively for professionals and legal entities (B2B). By purchasing or using the Services, You confirm that You are acting on behalf of a company or as a self-employed professional with legal authority to bind your organization.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Account Creation</h2>
          <p className="text-[14px] md:text-[15px]">
            Some Services require an account. You are responsible for information accuracy, maintaining credential confidentiality, and all activities occurring under your account.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Pricing & Subscriptions</h2>
          <div className="space-y-4">
            <div>
              <h4 className="text-[16px] font-bold text-[#121519] mb-2">Subscription Model</h4>
              <p className="text-[14px] md:text-[15px]">Services are offered as recurring subscriptions (monthly or annual). Details are clearly displayed on our pricing page and checkout page powered by Paddle.</p>
            </div>
            <div>
              <h4 className="text-[16px] font-bold text-[#121519] mb-2">Payments</h4>
              <p className="text-[14px] md:text-[15px]">Payments are securely processed by Paddle, acting as Merchant of Record. Paddle handles billing, invoicing, and VAT where applicable.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Commitment & Cancellation</h2>
          <div className="space-y-4 text-[14px] md:text-[15px]">
            <p>Subscriptions may include a minimum commitment period. Cancellation before the end of this period does not entitle You to a refund.</p>
            <p>You may cancel via the Paddle customer portal or by contacting support before the next billing cycle. Cancellation stops future charges but does not refund already paid periods.</p>
          </div>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Refund Policy</h2>
          <p className="text-[14px] md:text-[15px]">
            Digital services and SaaS access are non-refundable once delivered or activated. Paddle’s refund rules apply where legally required.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Service Availability & Limitations</h2>
          <p className="text-[14px] md:text-[15px]">
            We aim for high availability but do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or third-party outages.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Acceptable Use</h2>
          <p className="text-[14px] md:text-[15px]">
            You agree not to misuse Services, attempt to reverse engineer software, or use Services for illegal activities. Violation may result in suspension without refund.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Intellectual Property</h2>
          <p className="text-[14px] md:text-[15px]">
            All software, algorithms, and branding remain the exclusive property of Digi Mabble IT Solutions. No rights are transferred except the limited right to use the Services during an active subscription.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Liability Limitation</h2>
          <p className="text-[14px] md:text-[15px]">
            To the maximum extent permitted by law, total liability shall not exceed the amount paid by the Client during the last 12 months. We are not liable for indirect or consequential damages.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Governing Law & Jurisdiction</h2>
          <p className="text-[14px] md:text-[15px]">
            These Terms are governed by Belgian law. Any dispute shall fall under the exclusive jurisdiction of the courts of Belgium.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Contact</h2>
          <p className="text-[14px] md:text-[15px]">
            For any questions regarding these Terms, please reach out through our <a href="/#contact" className="text-emerald-500 font-bold hover:underline">Contact Page</a>.
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
