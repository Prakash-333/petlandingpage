'use client';
import React from 'react';
import LegalLayout from '@/components/landing/LegalLayout';

export default function GDPRCompliance() {
  return (
    <LegalLayout 
      title="GDPR Compliance" 
      lastUpdated="May 12, 2026"
    >
      <section className="space-y-6">
        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Our Commitment to GDPR</h2>
          <p className="text-[14px] md:text-[15px]">
            GreenLane (operated by Digi Mabble IT Solutions) is fully committed to the General Data Protection Regulation (GDPR). As a platform serving the European healthcare sector, we recognize that patient data privacy is not just a legal requirement but a fundamental pillar of our service.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Data Hosting & Sovereignty</h2>
          <p className="text-[14px] md:text-[15px]">
            To ensure maximum compliance and performance, all GreenLane production infrastructure is hosted on secure, enterprise-grade cloud servers located within the European Economic Area (EEA). We do not store or process patient-identifiable information on servers outside the EU without explicit contractual safeguards.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Data Processing Roles</h2>
          <div className="text-[14px] md:text-[15px] space-y-4">
            <p>Under GDPR, GreenLane operates in two distinct capacities:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#576071]">
              <li><strong>Data Processor:</strong> When we handle patient information on behalf of our healthcare clients (the Data Controllers), we act as a Data Processor. We only process this data according to the explicit instructions provided in our Data Processing Agreement (DPA).</li>
              <li><strong>Data Controller:</strong> For the administrative data of our clients (e.g., login credentials, billing info), GreenLane acts as a Data Controller.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Technical & Organizational Measures</h2>
          <p className="text-[14px] md:text-[15px]">We implement state-of-the-art security measures to protect healthcare data:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-3 text-[#576071] text-[14px] md:text-[15px]">
            <li><strong>Encryption:</strong> Data is encrypted at rest (AES-256) and in transit (TLS 1.3).</li>
            <li><strong>Access Control:</strong> We enforce strict role-based access management (RBAC). Only authorized personnel can access the minimum necessary data for service delivery.</li>
            <li><strong>Audit Logging:</strong> All system activities related to data access are logged and monitored for security anomalies.</li>
            <li><strong>Incident Response:</strong> We maintain a rigorous data breach notification protocol in compliance with Article 33 of the GDPR.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Data Subject Rights</h2>
          <p className="text-[14px] md:text-[15px]">
            We facilitate our clients in honoring the rights of their data subjects (patients). This includes the right to access, rectify, port, and delete information. If a patient contacts GreenLane directly, we will forward the request to the relevant healthcare provider (Data Controller) without undue delay.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Sub-processors</h2>
          <p className="text-[14px] md:text-[15px]">
            We only utilize GDPR-compliant sub-processors (such as Paddle for billing and AWS/Azure for EU-based hosting). A full list of our sub-processors is available to our clients upon request as part of the Data Processing Agreement.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#121519] mb-3">Contact</h2>
          <p className="text-[14px] md:text-[15px]">
            For any GDPR-related inquiries or to request our Data Processing Agreement (DPA), please contact our Data Protection Officer through our <a href="/#contact" className="text-violet-500 font-bold hover:underline">Contact Page</a>.
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
