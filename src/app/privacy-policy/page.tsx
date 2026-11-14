'use client';
import React from 'react';
import LegalLayout from '@/components/landing/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="May 12, 2026"
    >
      <section className="space-y-6">
        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Introduction</h2>
          <p className="text-[14px] md:text-[15px]">
            This Privacy Policy explains how Digi Mabble IT Solutions (“Company”, “We”, “Us”, “Our”) collects, uses, stores, and protects personal data when You use our website, services, software, and subscription-based solutions, including the GreenLane platform.
          </p>
          <p className="mt-3 text-[14px] md:text-[15px]">
            We are committed to protecting Your privacy and processing personal data in compliance with the General Data Protection Regulation (GDPR) and applicable data protection laws, specifically tailored to the high standards required in the healthcare sector.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Company Information (Data Controller)</h2>
          <div className="text-[14px] md:text-[15px]">
            <p className="font-bold text-[#121519]">Digi Mabble IT Solutions</p>
            <p>Avenue Eiffel 8, 1300 Wavre, Belgium</p>
            <p>Website: <a href="https://digimabbleai.com" className="text-emerald-500 hover:underline">https://digimabbleai.com</a></p>
            <p>Contact: <a href="/#contact" className="text-emerald-500 hover:underline">GreenLane Contact Page</a></p>
            <p className="mt-3">
              Digi Mabble IT Solutions acts as the Data Controller for personal data processed under this Privacy Policy.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Scope of This Policy</h2>
          <p className="text-[14px] md:text-[15px]">This Privacy Policy applies to:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-3 text-[#576071] text-[14px] md:text-[15px]">
            <li>Visitors of our website.</li>
            <li>Clients and prospects.</li>
            <li>Users of our GreenLane SaaS platforms and AI solutions.</li>
            <li>Subscribers to our digital services.</li>
            <li>Business partners and vendors.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Personal Data We Collect</h2>
          <div className="space-y-5">
            <div>
              <h4 className="text-[16px] font-bold text-[#121519] mb-2">Data You Provide Directly</h4>
              <p className="text-[14px] md:text-[15px]">We may collect the following personal data when You interact with us:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#576071] text-[14px] md:text-[15px]">
                <li>First and last name.</li>
                <li>Email address.</li>
                <li>Phone number.</li>
                <li>Company name and professional information.</li>
                <li>Billing and invoicing details.</li>
                <li>Account credentials (if applicable).</li>
                <li>Any information submitted via contact forms or contracts.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[16px] font-bold text-[#121519] mb-2">Data Collected Automatically</h4>
              <p className="text-[14px] md:text-[15px]">When You access our website or Services, we may automatically collect:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#576071] text-[14px] md:text-[15px]">
                <li>IP address, Browser type, Device information, Operating system.</li>
                <li>Pages visited, usage data, and date/time of access.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[16px] font-bold text-[#121519] mb-2">Payment Data</h4>
              <p className="text-[14px] md:text-[15px]">Payments are processed by Paddle, acting as Merchant of Record. We do not store full payment details. Payment data is processed directly by Paddle in accordance with their own Privacy Policy.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Purpose of Data Processing</h2>
          <p className="text-[14px] md:text-[15px]">We process personal data for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-3 text-[#576071] text-[14px] md:text-[15px]">
            <li>To provide, operate, and maintain our GreenLane platform.</li>
            <li>To manage subscriptions, contracts, and Paddle payments.</li>
            <li>To deliver SaaS and AI-based healthcare solutions.</li>
            <li>To provide customer support and technical assistance.</li>
            <li>To comply with legal and regulatory obligations.</li>
            <li>To improve our Services and user experience.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Legal Basis for Processing (GDPR)</h2>
          <ul className="list-disc pl-5 space-y-1.5 mt-3 text-[#576071] text-[14px] md:text-[15px]">
            <li>Contractual necessity and Legal obligation.</li>
            <li>Legitimate interest (security, operations, service improvement).</li>
            <li>Consent, where required.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Cookies & Tracking Technologies</h2>
          <p className="text-[14px] md:text-[15px]">We use cookies to ensure proper functioning, improve user experience, and analyze performance. You may manage cookies through browser settings.</p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Data Sharing & Third Parties</h2>
          <p className="text-[14px] md:text-[15px]">We share data only when necessary with Paddle, EU-based hosting providers, and technical service providers. All third parties are GDPR-compliant.</p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">International Data Transfers</h2>
          <p className="text-[14px] md:text-[15px]">Data may be processed outside the EEA with appropriate safeguards like Standard Contractual Clauses (SCCs).</p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Data Retention & Security</h2>
          <p className="text-[14px] md:text-[15px]">We retain data only as long as necessary and implement technical measures like encryption and role-based access controls to protect your information.</p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Your Rights (GDPR)</h2>
          <p className="text-[14px] md:text-[15px]">You have the right to access, rectify, erase, or restrict processing of your data. Requests can be made via our <a href="/#contact" className="text-emerald-500 font-bold hover:underline">Contact Page</a>.</p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Additional Information</h2>
          <p className="text-[14px] md:text-[15px]">GreenLane services are B2B-focused and not intended for individuals under 16. We may update this policy at any time.</p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Contact</h2>
          <p className="text-[14px] md:text-[15px]">For any questions, please reach out through our <a href="/#contact" className="text-emerald-500 font-bold hover:underline">Contact Page</a>.</p>
        </div>
      </section>
    </LegalLayout>
  );
}
// test//