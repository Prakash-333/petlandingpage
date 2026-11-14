export type Locale = 'en' | 'fr' | 'nl' | 'pl' | 'es';

export const translations = {
  en: {
    navbar: {
      home: 'Home',
      whyNow: 'Why GreenLane',
      problem: 'Problem',
      solution: 'Solution',
      features: 'Features',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact Us',
      bookDemo: 'Book a Demo',
      selectLanguage: 'Select Language',
    },
    hero: {
      badge: 'One Intelligent Platform for Healthcare',
      title: 'The AI Platform for the Connected Healthcare Ecosystem',
      description1: 'GreenLane connects patients, healthcare providers, teams and intelligent systems through one AI-powered platform — helping healthcare organizations communicate, coordinate and operate more intelligently.',
      description2: 'Start with patient communication, appointments and follow-ups. Expand into intelligent healthcare workflows and operations with a platform built to scale across healthcare environments worldwide.',
      highlight: 'Connect people. Automate workflows. Coordinate healthcare. Scale with AI.',
      bookDemo: 'Book a Live Demo',
      talkToSales: 'Talk to Sales',
      trustBar: [
        'Global healthcare platform',
        'Built with privacy and security in mind',
        'AI-powered healthcare workflows',
        'Designed for regional healthcare environments'
      ]
    },
    features: {
      title: 'Healthcare Has Become Connected — But Its Systems Remain Fragmented',
      subtitle: 'Modern healthcare depends on patients, providers, teams, departments, software platforms and external partners working together. Yet communication and operational processes are often spread across disconnected channels and systems.',
      reality: {
        badge: 'The Fragmented Reality',
        title: 'Healthcare organizations manage increasingly complex interactions across multiple disconnected environments:',
        description: 'Modern healthcare organizations manage patient communication across fragmented systems that weren\'t designed for today\'s operational demands.',
        list: [
          'Phone calls',
          'WhatsApp and messaging',
          'Appointment scheduling',
          'Patient enquiries',
          'Reminders and follow-ups',
          'Internal team workflows',
          'Healthcare software and operational systems',
          'Reception and administrative coordination'
        ]
      },
      inefficiency: {
        badge: 'The Operational Cost of Fragmentation',
        title: 'Disconnected systems create unnecessary friction across the healthcare journey.',
        list: [
          'Missed patient interactions and follow-ups',
          'Longer response times',
          'Repetitive administrative work',
          'Overloaded reception and operations teams',
          'Missed appointment opportunities',
          'Manual coordination between departments',
          'Disconnected patient experiences',
          'Limited visibility across workflows'
        ]
      },
      insight: {
        title: 'The challenge is no longer simply managing patient demand',
        description: 'It is creating intelligent infrastructure that connects people, workflows and systems across healthcare operations.'
      }
    },
    capabilities: {
      title: 'Platform Capabilities',
      subtitle: 'Intelligent Infrastructure for Modern Healthcare',
      description: 'GreenLane brings together the capabilities healthcare organizations need to connect communication, engagement and operational workflows.',
      list: [
        { category: 'Connect', title: 'AI Voice', desc: 'AI-powered voice interactions that can answer patient calls, understand requests, provide information and initiate defined workflows.' },
        { category: 'Connect', title: 'Patient Messaging', desc: 'Connect with patients through WhatsApp, SMS, web and other supported digital communication channels.' },
        { category: 'Engage', title: 'Patient Engagement', desc: 'Support ongoing communication with patients through reminders, notifications, follow-ups and other defined engagement workflows.' },
        { category: 'Engage', title: 'Appointment Coordination', desc: 'Automate appointment requests, scheduling, confirmations, cancellations, reminders and follow-ups across supported channels.' },
        { category: 'Coordinate', title: 'Human Escalation & Team Collaboration', desc: 'Route sensitive, complex or exceptional interactions to the appropriate human team.' },
        { category: 'Coordinate', title: 'Workflow Coordination', desc: 'Connect the people, tasks and processes involved in a healthcare workflow and keep work moving between the right teams.' },
        { category: 'Automate', title: 'Workflow Automation', desc: 'Automate repetitive administrative and operational processes across healthcare teams and organizations.' },
        { category: 'Automate', title: 'AI Agents', desc: 'Deploy specialized AI capabilities for defined healthcare workflows while maintaining appropriate human oversight.' },
        { category: 'Operate', title: 'Operational Intelligence', desc: 'Gain visibility into communication, workflow activity, response performance and operational processes across your organization.' }
      ]
    },
    howItWorks: {
      title: 'How It Works',
      desc: '',
      steps: [
        { title: 'Connect', desc: 'Patients, providers and healthcare teams interact through voice, messaging, digital channels and existing systems.' },
        { title: 'Understand', desc: 'GreenLane AI interprets the request and identifies the appropriate workflow or next step.' },
        { title: 'Automate', desc: 'Defined tasks such as communication, scheduling, reminders, follow-ups and administrative workflows are handled automatically.' },
        { title: 'Coordinate', desc: 'GreenLane connects the relevant people, workflows and systems to keep the process moving.' },
        { title: 'Escalate', desc: 'When human involvement is required, the interaction is transferred to the appropriate team.' },
        { title: 'Learn & Optimize', desc: 'Organizations gain operational visibility and can continuously improve workflows based on real usage and performance.' }
      ]
    },
    pricing: {
      title: 'Simple Pricing for Modern Healthcare',
      subtitle: "Choose the platform level that fits your organization's current operational needs.",
      monthly: 'Monthly billing',
      annual: 'Annual billing',
      save: 'Save 20%',
      getStarted: 'Get Started',
      mostPopular: 'Recommended',
      whatsIncluded: "What's Included",
      custom: 'Custom pricing',
      perMonth: '/mo',
      plans: [
        {
          name: 'Starter',
          desc: 'For independent clinics and smaller healthcare practices',
          price: '€179',
          features: [
            'AI voice reception for patient calls',
            'Appointment automation',
            'WhatsApp and patient messaging workflows',
            'Automated patient reminders',
            'Core workflow automation',
            'Email support'
          ]
        },
        {
          name: 'Scale',
          desc: 'For growing healthcare organizations',
          price: '€279',
          features: [
            'Advanced workflow automation',
            'Multichannel communication management',
            'Operational analytics dashboard',
            'Priority support',
            'Multi-user access for healthcare teams',
            'Enhanced coordination workflows'
          ]
        },
        {
          name: 'Enterprise',
          desc: 'For multi-site and larger healthcare organizations',
          price: 'Custom pricing',
          cta: 'Request a Quote',
          features: [
            'Multi-site communication and workflow coordination',
            'Enterprise-grade workflow automation',
            'Custom healthcare system integrations',
            'Dedicated onboarding and configuration',
            'API access and compliance support',
            'Dedicated account management',
            'Scalable operational infrastructure'
          ]
        }
      ]
    },

    pricingIn: {
      plans: [
        {
          name: 'Starter',
          desc: 'For independent clinics and smaller healthcare practices',
          features: [
            'AI voice reception for patient calls',
            'Appointment automation',
            'WhatsApp and patient messaging workflows',
            'Automated patient reminders',
            'Core workflow automation',
            'Email support'
          ]
        },
        {
          name: 'Scale',
          desc: 'For growing healthcare organizations',
          features: [
            'Advanced workflow automation',
            'Multichannel communication management',
            'Operational analytics dashboard',
            'Priority support',
            'Multi-user access for healthcare teams',
            'Enhanced coordination workflows'
          ]
        },
        {
          name: 'Enterprise',
          desc: 'For multi-site and larger healthcare organizations',
          cta: 'Request a Quote',
          features: [
            'Multi-site communication and workflow coordination',
            'Enterprise-grade workflow automation',
            'Custom healthcare system integrations',
            'Dedicated onboarding and configuration',
            'API access and compliance support',
            'Dedicated account management',
            'Scalable operational infrastructure'
          ]
        }
      ],
      addon: {
        title: 'AI Voice Reception',
        badge: 'Optional Add-on',
        desc: 'Includes: 24/7 AI receptionist, call answering, appointment booking by phone, call transfers, missed call handling, and multilingual support.',
        price: 'Starting from ₹999',
        usage: '/mo + usage',
        cta: 'Add to Plan'
      }
    },
    benefits: {
      title: 'Make Healthcare Operations More Intelligent',
      subtitle: 'GreenLane helps healthcare organizations reduce operational complexity by connecting communication, workflows and AI in one platform.',
      list: [
        'Connect patient interactions across channels',
        'Automate repetitive administrative and operational workflows',
        'Reduce missed communication and appointment opportunities',
        'Improve response times and patient engagement',
        'Give healthcare teams greater visibility across operations',
        'Coordinate workflows across teams, departments and locations',
        'Scale operations without proportionally increasing administrative workload',
        'Create a more connected experience for patients and healthcare teams'
      ]
    },
    founder: {
      name: 'Manivannan Babu',
      role: 'Founder & CEO, GreenLane AI',
      bookMeeting: 'Book a Meeting',
      meetFounder: 'Meet the Founder',
      connectLinkedin: 'Connect on LinkedIn',
      quote: '"I founded GreenLane AI with one mission: to help healthcare providers spend less time on administrative tasks and more time caring for patients. We believe AI should enhance healthcare teams—not replace them—by automating repetitive communication while keeping clinicians in control."',
      bullets: [
        'Founder of Digi Mabble and Greenlane, an AI and digital transformation company.',
        'Building AI solutions for healthcare businesses.',
        'Focused on secure, GDPR-compliant healthcare technology.',
        'Based in Belgium with engineering and product development teams in Estonia and India.',
        'Passionate about improving patient experiences through responsible AI.'
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Healthcare organizations need clarity about security, implementation, integrations, automation and the role of AI before introducing new technology into their operations.',
      contactSupport: 'Contact Support',
      list: [
        { q: "Is GreenLane suitable for my type of healthcare organization?", a: "GreenLane is designed to support a wide range of healthcare organizations, including clinics, dental practices, physiotherapy centers, specialized providers, multi-site organizations and larger healthcare operations. The platform can be configured around the workflows and requirements of each organization." },
        { q: "How long does onboarding take?", a: "Implementation depends on the organization's workflows, communication channels, integrations and level of automation. GreenLane follows a structured assessment, configuration, deployment and optimization process." },
        { q: "Can GreenLane integrate with our existing systems?", a: "GreenLane is designed to work alongside existing healthcare and business systems. Integration options depend on the specific platform, APIs, workflows and requirements of the organization." },
        { q: "Is patient data secure?", a: "GreenLane is designed with privacy and security principles appropriate for healthcare environments, including controlled access, data protection and secure communication. Specific requirements depend on the market, deployment and use case." },
        { q: "Is GreenLane GDPR compliant?", a: "GreenLane is designed to support GDPR requirements where applicable, with privacy, security and data protection considered throughout the platform and operational processes. Specific compliance obligations depend on the organization, processing activities and deployment." },
        { q: "What happens when AI cannot handle a request?", a: "GreenLane can route defined complex, sensitive or exceptional interactions to the appropriate human team. Organizations remain in control of workflows and escalation rules." },
        { q: "Which communication channels does GreenLane support?", a: "GreenLane supports voice and digital communication workflows, including WhatsApp, SMS and web-based interactions, with additional channels and integrations depending on the deployment." },
        { q: "Does GreenLane replace our staff?", a: "No. GreenLane is designed to augment healthcare teams by automating repetitive communication and operational tasks while keeping people responsible for sensitive, complex and clinical decisions." },
        { q: "Can workflows be customized?", a: "Yes. GreenLane is designed around configurable healthcare workflows so organizations can adapt automation, escalation and coordination processes to their operational requirements." },
        { q: "Can GreenLane be used outside Europe?", a: "Yes. GreenLane is being developed as a global healthcare platform. Regional requirements such as languages, communication channels, data residency, integrations and applicable regulations can be incorporated according to the market and deployment." },
        { q: "Is GreenLane only for patient communication?", a: "No. Patient communication is an important starting point, but GreenLane's broader vision is to connect patient engagement, healthcare workflows, operations and intelligent systems across the healthcare ecosystem." }
      ]
    },
    security: {
      title: 'Privacy, Security & Responsible AI by Design',
      desc1: 'Healthcare technology requires more than automation.\nIt requires privacy, security, controlled access, appropriate human oversight and responsible handling of sensitive information.',
      desc2: 'GreenLane is being built with these principles at the foundation, with architecture and operational controls adapted to the markets and healthcare use cases in which the platform is deployed.',
      featuresTitle: 'Security & Infrastructure',
      features: [
        'Regional and appropriate data hosting',
        'Encrypted communication and data protection',
        'Role-based access control',
        'Controlled operational access',
        'Secure patient communication',
        'Healthcare-oriented system architecture',
        'Auditability and operational controls',
        'Secure workflow coordination'
      ],
      responsibleAiTitle: 'Responsible AI',
      responsibleAiDesc: 'GreenLane is designed to support healthcare teams — not replace clinical responsibility.\nAI is used for defined communication and operational workflows, while sensitive, complex and clinical decisions remain subject to appropriate human oversight.',
      commitmentTitle: 'Data Protection',
      commitmentDesc: 'GreenLane is designed to support applicable privacy and regulatory requirements across the markets in which it operates, including GDPR requirements where applicable.\nOur approach evolves with the regulatory, security and operational requirements of each healthcare environment.'
    },
    whoItsFor: {
      title: 'Built for Modern Healthcare Organizations',
      subtitle: 'GreenLane is designed for healthcare organizations managing significant patient communication, operational workflows and growing organizational complexity.',
      providers: [
        'Medical Clinics',
        'Dental Practices',
        'Physiotherapy & Rehabilitation Centers',
        'Specialized Clinics',
        'Multi-Site Healthcare Groups',
        'Private Healthcare Providers',
        'Hospitals & Healthcare Organizations',
        'Ambulatory Care Providers',
        'Healthcare Networks & Emerging Healthcare Platforms'
      ],
      footerText: 'From independent practices to growing healthcare organizations, GreenLane provides a foundation that can scale with the way healthcare operates.',
      roiTitle: 'Intelligent Automation With Measurable Operational Impact',
      roiSubtitle: 'GreenLane is designed to help healthcare organizations improve efficiency by automating repetitive communication and operational workflows.',
      stats: [
        { value: '70–80%', label: 'Target automation range for defined repetitive communication workflows' },
        { value: '30–40%', label: 'Potential reduction in selected administrative workload, depending on workflow and deployment' },
        { value: '€900–€1.2k', label: 'Illustrative monthly administrative savings based on a €3,000 administrative cost baseline' }
      ],
      roiDisclaimer: 'Actual results vary according to organization size, communication volume, workflows, configuration and level of automation. Results should be validated through customer deployments and pilots.'
    },
    implementation: {
      title: 'Simple Onboarding for Healthcare Teams',
      subtitle: 'A structured process to bring GreenLane into your existing healthcare operations.',
      steps: [
        { number: '1', title: 'Understand Your Workflows', desc: 'We analyse your current communication, patient engagement, appointment processes and operational workflows to identify where GreenLane can create value.' },
        { number: '2', title: 'Configure the Platform', desc: "We configure communication channels, workflows, AI capabilities, appointment processes and operational rules around your organization's requirements." },
        { number: '3', title: 'Deploy AI Automation', desc: 'GreenLane is introduced into the selected workflows, enabling AI-powered communication and automation while maintaining appropriate human oversight.' },
        { number: '4', title: 'Launch & Optimize', desc: 'Your system goes live with continuous monitoring, refinement and workflow optimization based on real-world usage and organizational needs.' }
      ]
    },
    ctas: {
      title: 'The Future of Healthcare Is Connected',
      subtitle: 'Healthcare is becoming digital, but patients, providers, and systems still operate in fragmented environments.\nGreenLane is building the intelligent layer that connects them.\nFrom patient communication and engagement today to intelligent healthcare operations and broader healthcare connectivity tomorrow, GreenLane is creating the foundation for a more connected healthcare future.',
      tagline: 'Start with one workflow. Connect your healthcare operation. Scale with AI.',
      bookDemo: 'Book a Demo',
      talkToTeam: 'Talk to Sales'
    },
    pillars: {
      title: 'Built for the Connected Healthcare Ecosystem',
      subtitle: 'One intelligent platform for healthcare communication, engagement, coordination and operations.',
      description: 'GreenLane creates an AI-powered layer between patients, healthcare teams, workflows and technology systems — helping organizations automate repetitive work while keeping people in control.',
      list: [
        { title: 'Healthcare-Native Platform', desc: 'Designed around the workflows, communication needs and operational realities of healthcare organizations.' },
        { title: 'Global by Design', desc: 'Built to support healthcare organizations across markets, languages, communication channels and operating environments.' },
        { title: 'Intelligent AI Infrastructure', desc: 'AI-powered capabilities that automate defined interactions and workflows while allowing organizations to maintain appropriate human oversight.' },
        { title: 'Connected Communication', desc: 'Bring voice, messaging, digital interactions and patient engagement into a more unified operational environment.' },
        { title: 'Human + AI Collaboration', desc: 'AI handles defined repetitive tasks while healthcare teams remain responsible for sensitive, complex and exceptional interactions.' },
        { title: 'Scalable Healthcare Operations', desc: 'Support organizations as they grow across teams, departments, locations and markets without adding unnecessary operational complexity.' },
        { title: 'Integration-Ready Architecture', desc: 'Designed to work alongside existing healthcare systems, business applications, APIs and emerging healthcare technologies.' }
      ]
    },
    footer: {
      links: {
        whyGreenLane: 'Why GreenLane',
        problem: 'Problem',
        solution: 'Solution',
        capabilities: 'Capabilities',
        howItWorks: 'How It Works',
        pricing: 'Pricing'
      },
      tagline: 'AI platform for the connected healthcare ecosystem.\nConnecting patients, providers, workflows and intelligent systems to help healthcare organizations operate smarter.',
      copyright: '© 2026 GreenLane AI. Powered by Digi Mabble.',
      platform: 'Platform',
      legal: 'Legal',
      support: 'Support',
      compliance: 'Security & Compliance',
      socials: 'Socials',
      newsletterTitle: 'Stay Connected',
      newsletterPlaceholder: 'Enter your email address',
      newsletterButton: 'SUBSCRIBE',
      gdpr: 'GDPR Compliance',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookieSettings: 'Cookie Settings',
      contact: 'Contact',
      subscribeSuccess: 'Thank you for subscribing!',
      subscribeError: 'Something went wrong. Please try again.'
    },
    bookDemoSection: {
      title: 'Schedule a Personalized Demo',
      subtitle: 'See how GreenLane AI helps healthcare providers streamline patient communication, automate reminders, and improve patient engagement.',
      form: {
        fullName: 'Full Name',
        workEmail: 'Work Email',
        clinicName: 'Clinic / Hospital Name',
        role: 'Role / Position',
        size: 'Number of Clinics or Patients',
        message: 'Message',
        cta: 'Submit',
        submitting: 'Submitting...'
      },
      success: {
        title: 'Message Sent',
        subtitle: "Thanks for reaching out. We'll get back to you within 1–2 business days.",
        cta: 'Send another message'
      },
      cards: {
        expect: {
          title: 'What to Expect',
          items: [
            'Demo within 24 hours',
            'Personalized workflow walkthrough',
            'AI-powered patient communication',
            'Live Q&A support'
          ]
        },
        perfect: {
          title: 'Perfect For',
          items: [
            'Clinics',
            'Hospitals',
            'Healthcare Providers',
            'Patient Engagement Teams'
          ]
        },
        get: {
          title: 'What You Get',
          items: [
            'Reduced missed appointments',
            'Automated reminders',
            'Faster patient communication',
            'Better operational efficiency'
          ]
        }
      }
    },
    contact: {
      title: "Let's Build Smarter Healthcare Operations",
      subtitle: "Whether you are a clinic, healthcare group, hospital, technology partner or healthcare organization exploring AI, we'd like to understand your needs.\nTell us about your organization, your current workflows and the challenges you want to solve. Our team will get back to you within 24 hours.",
      info: {
        address: {
          title: 'Address',
          offices: [
            { name: 'Belgium', address: 'Avenue Eiffel 8, 1300 Wavre, Belgium' },
            { name: 'Estonia', address: 'Tartu mnt 67/1, 10115 Tallinn, Estonia' },
            { name: 'India', address: 'No.66/19, 8th street, Gopalapuram, Gandhinagar Vellore - 632 006, Tamilnadu, India' }
          ]
        },
        email: {
          title: 'Send us an email',
          items: ['info@digimabble.com']
        },
        phone: {
          title: 'Give us a call',
          items: ['+32 467 85 99 60', '+91 8197017799']
        }
      },
      form: {
        name: 'Your Name',
        email: 'Email Address',
        emailPlaceholder: 'example@gmail.com',
        phone: 'Phone Number',
        phonePlaceholder: '(123) 456 - 7890',
        company: 'Organization',
        companyPlaceholder: 'Digi Mabble AI',
        message: 'How can we help?',
        messagePlaceholder: 'Tell us about your needs...',
        cta: 'Send Message'
      }
    },
    analytics: {
      badge: 'Operational Efficiency',
      title: 'Operational Efficiency With Measurable Impact',
      subtitle: 'GreenLane helps healthcare organizations improve patient communication efficiency while reducing administrative workload and operational coordination complexity.',
      benefitsBadge: 'Operational Benefits',
      benefitsTitle: 'Improve Operational Visibility & Efficiency',
      benefits: [
        'Automate repetitive patient communication workflows',
        'Reduce front-desk administrative overload',
        'Improve communication response times',
        'Reduce missed appointment opportunities',
        'Streamline operational coordination across clinics'
      ],
      stats: {
        automation: 'Workflow Automation',
        workload: 'Admin Workload Reduction'
      },
      patientStatus: 'Patient Status',
      responded: 'Responded',
      pending: 'Pending'
    },
    cookieConsent: {
      title: 'We value your privacy',
      description: 'We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.',
      customize: 'Customise',
      rejectAll: 'Reject All',
      acceptAll: 'Accept All',
      settingsTitle: 'Cookie Settings',
      settingsSubtitle: 'Manage your privacy preferences',
      essentialTitle: 'Essential Cookies',
      essentialDesc: 'Necessary for the website to function properly.',
      analyticsTitle: 'Analytics Cookies',
      analyticsDesc: 'Help us improve by tracking site usage.',
      marketingTitle: 'Marketing Cookies',
      marketingDesc: 'Used for personalized advertisements.',
      save: 'Save Preferences',
      required: 'Required'
    },
    contactModal: {
      title: 'Talk to our sales',
      subtitle: "Fill out the form below and we'll get in touch with you.",
      successTitle: 'Message Sent!',
      successSubtitle: 'Thank you for reaching out. Our team will get back to you shortly.',
      close: 'Close',
      sending: 'Sending...'
    },
    testimonials: {
      title: 'Trusted by healthcare providers across Europe',
      items: [
        { name: 'Lilianna Bocouse', role: 'Clinic Director', quote: '“GreenLane has transformed how we handle patient communication. The AI voice reception has reduced our front-desk workload by 40% while ensuring no patient call goes unanswered. It\'s the infrastructure we didn\'t know we needed.”' },
        { name: 'Darell Steward', role: 'Operations Manager', quote: '“The WhatsApp integration is a game-changer for our specialty clinic. We can now coordinate complex appointments and follow-ups through a single secure channel, improving patient response times significantly and reducing operational friction.”' },
        { name: 'Annette Black', role: 'Practice Manager', quote: '“Switching to GreenLane\'s automated scheduling has almost eliminated missed appointments. The system is intuitive for our administrative staff and incredibly convenient for our patients who prefer digital coordination.”' }
      ]
    },
    appDownload: {
      title: 'Download GreenLane app for any device',
      subtitle: 'Now there is a mobile application so that you can always quickly and conveniently track your patient data and communications on the go.',
      editorsChoice: "Editor's choice",
      editorsChoiceStats: 'rating 4.7, 187K+ reviews',
      appOfDay: 'App of the day',
      appOfDayStats: 'rating 4.8, 30K+ reviews'
    }
  },
  fr: {
    navbar: {
      home: 'Accueil',
      whyNow: 'Pourquoi GreenLane',
      problem: 'Problème',
      solution: 'Solution',
      features: 'Fonctionnalités',
      howItWorks: 'Comment ça marche',
      pricing: 'Tarifs',
      faq: 'FAQ',
      contact: 'Contactez-nous',
      bookDemo: 'Réserver une démo',
      selectLanguage: 'Choisir la langue',
    },
    hero: {
      highlight: 'Connectez les personnes. Automatisez les flux de travail. Coordonnez les soins de santé. Évoluez avec l\'IA.',
      badge: 'Une plateforme intelligente pour la santé',
      title: 'Infrastructure opérationnelle IA pour la communication médicale moderne',
      description1: 'GreenLane aide les prestataires de soins à automatiser la communication avec les patients, la coordination des rendez-vous et les flux administratifs via une plateforme sécurisée alimentée par l\'IA, conçue pour les organisations de santé européennes.',
      description2: 'Réduisez les appels manqués, automatisez les interactions avec les patients, allégez la charge de travail administrative et rationalisez les opérations de santé — avec une infrastructure conforme au RGPD et des flux de communication sécurisés conçus pour les cliniques modernes.',
      bookDemo: 'Réserver une démo en direct',
      talkToSales: 'Parler à nos ventes',
      trustBar: [
        'Infrastructure conforme au RGPD',
        'Systèmes hébergés dans l\'UE',
        'Communication patient cryptée'
      ]
    },
    features: {
      title: 'Les systèmes de communication de santé n\'ont jamais été conçus pour évoluer',
      subtitle: 'Les organisations de santé modernes s\'appuient sur des systèmes de communication déconnectés qui créent des inefficacités opérationnelles, une surcharge administrative et des expériences patient fragmentées.',
      reality: {
        badge: 'La réalité fragmentée',
        title: 'Les équipes de santé sont obligées de gérer la communication avec les patients via de multiples canaux déconnectés et des flux manuels :',
        description: 'Les organisations de santé modernes gèrent la communication avec les patients via des systèmes fragmentés qui n\'ont pas été conçus pour les exigences opérationnelles d\'aujourd\'hui.',
        list: [
          'Appels téléphoniques',
          'Messages WhatsApp',
          'Planification de rendez-vous',
          'Suivis et rappels',
          'Coordination de l\'accueil',
          'Flux de travail administratifs'
        ]
      },
      inefficiency: {
        badge: 'L\'inefficacité qui en résulte',
        title: 'Goulots d\'étranglement opérationnels et fatigue administrative',
        list: [
          'Interactions et suivis de patients manqués',
          'Délais de réponse de communication prolongés',
          'Équipes d\'accueil et administratives surchargées',
          'Lacunes de rendez-vous et opportunités de planification manquées',
          'Goulots d\'étranglement de communication entre les départements',
          'Augmentation de la coordination manuelle et des tâches répétitives',
          'Réduction de la productivité et de l\'efficacité du personnel',
          'Expériences de communication patient incohérentes'
        ]
      },
      insight: {
        title: 'Le défi de la santé moderne n\'est plus la demande des patients — c\'est l\'évolutivité opérationnelle.',
        description: 'Les systèmes de communication obsolètes et les flux administratifs fragmentés créent des inefficacités dans toutes les organisations de santé.'
      }
    },
    capabilities: {
      title: 'Capacités de la plateforme',
      subtitle: 'Infrastructure intelligente pour les équipes de santé modernes',
      description: 'GreenLane rassemble les capacités dont les organisations de santé ont besoin pour connecter la communication, l\'engagement et les flux opérationnels.',
      list: [
        { title: 'Réception vocale IA', desc: 'Gérez les appels des patients instantanément grâce à des systèmes vocaux alimentés par l\'IA avec un routage intelligent et une coordination de la communication.' },
        { title: 'Coordination intelligente des rendez-vous', desc: 'Automatisez la planification des rendez-vous, les confirmations, les rappels et les suivis des patients sur tous les canaux de communication.' },
        { title: 'WhatsApp et messagerie patient', desc: 'Centralisez la communication avec les patients via WhatsApp, SMS et messagerie numérique au sein d\'une plateforme unifiée.' },
        { title: 'Automatisation des flux de travail', desc: 'Réduisez les tâches administratives répétitives et rationalisez les opérations de santé quotidiennes grâce à l\'automatisation intelligente.' },
        { title: 'Escalade humaine et collaboration d\'équipe', desc: 'Transférez automatiquement les interactions complexes ou sensibles avec les patients au personnel de santé dès qu\'une intervention humaine est nécessaire.' },
        { title: 'Analyses et visibilité opérationnelles', desc: 'Surveillez l\'activité de communication, les performances de réponse et l\'efficacité des flux de travail dans votre organisation de santé.' }
      ]
    },
    howItWorks: {
      title: 'Comment ça marche',
      desc: 'GreenLane centralise la communication et automatise la coordination opérationnelle pour améliorer l\'efficacité.',
      steps: [
        { title: 'Les patients contactent la clinique', desc: 'Les patients se connectent via des appels téléphoniques, WhatsApp, des demandes de rendez-vous, des rappels et des canaux de communication numérique.' },
        { title: 'L\'IA gère la réception des communications', desc: 'L\'IA capture les demandes des patients, répond aux questions courantes et oriente automatiquement les conversations.' },
        { title: 'Les flux administratifs sont automatisés', desc: 'La planification, les confirmations, les rappels et les suivis des patients sont traités automatiquement sur tous les canaux de communication.' },
        { title: 'Les équipes humaines gardent le contrôle', desc: 'Les interactions sensibles, urgentes ou complexes sont transmises de manière transparente au personnel de santé dès qu\'une intervention humaine est nécessaire.' },
        { title: 'Les opérations de santé deviennent plus efficaces', desc: 'Les prestataires de soins réduisent la charge de travail administrative, améliorent les temps de réponse et rationalisent les opérations quotidiennes.' }
      ]
    },
    pricing: {
      title: 'Tarifs simples pour la santé moderne',
      subtitle: 'Choisissez le forfait qui correspond aux besoins opérationnels de votre clinique.',
      monthly: 'Facturation mensuelle',
      annual: 'Facturation annuelle',
      save: 'Économisez 20%',
      getStarted: 'Commencer',
      mostPopular: 'Recommandé',
      whatsIncluded: "Ce qui est inclus",
      custom: 'Tarification personnalisée',
      perMonth: '/mois',
      plans: [
        {
          name: 'Starter',
          desc: 'Pour les petites cliniques et pratiques indépendantes',
          price: '€186',
          features: [
            'Réception vocale IA pour les appels patients',
            'Automatisation de la planification des rendez-vous',
            'Flux de messagerie WhatsApp et patient',
            'Rappels patients automatisés',
            'Automatisation de base des flux de travail',
            'Support par email'
          ]
        },
        {
          name: 'Scale',
          desc: 'Pour les organisations de santé en croissance',
          price: '€289',
          features: [
            'Comprend tout ce qui est dans Starter, plus :',
            'Automatisation avancée des flux de travail',
            'Gestion de la communication multicanale',
            'Tableau de bord d\'analyses opérationnelles',
            'Support prioritaire',
            'Accès multi-utilisateurs pour les équipes de clinique',
            'Flux de coordination améliorés'
          ]
        },
        {
          name: 'Enterprise',
          desc: 'Pour les groupes de santé multi-sites',
          price: 'Tarification personnalisée',
          cta: 'Demander un devis',
          features: [
            'Coordination de la communication multi-sites',
            'Automatisation des flux de travail de niveau entreprise',
            'Intégrations personnalisées (DPI / systèmes)',
            'Onboarding et configuration dédiés',
            'Accès API + support de conformité',
            'Gestion de compte dédiée',
            'Infrastructure opérationnelle évolutive'
          ]
        }
      ]
    },

    pricingIn: {
      plans: [
        {
          name: 'Starter',
          desc: 'Pour les petites cliniques et pratiques indépendantes',
          features: [
            'Réservation de rendez-vous WhatsApp par IA',
            'Rappels de rendez-vous automatisés',
            'Reprogrammation et annulation',
            'Intégration Google Calendar',
            'Flux de messagerie patient',
            'Automatisation de base des flux de travail',
            'Tableau de bord de base',
            'Support par email'
          ]
        },
        {
          name: 'Scale',
          desc: 'Pour les organisations de santé en croissance',
          features: [
            'Tout ce qui est dans Starter, plus :',
            'Assistant WhatsApp alimenté par l\'IA',
            'Automatisation avancée des flux de travail',
            'Automatisation du suivi des patients',
            'Collecte d\'avis et de commentaires',
            'Tableau de bord d\'analyses opérationnelles',
            'Accès multi-utilisateurs',
            'Support prioritaire'
          ]
        },
        {
          name: 'Enterprise',
          desc: 'Pour les hôpitaux et groupes de santé multi-sites',
          features: [
            'Gestion multi-sites',
            'Automatisation des flux de travail d\'entreprise',
            'Intégrations personnalisées (DPI / ERP)',
            'Accès API',
            'Onboarding dédié',
            'Gestionnaire de compte dédié',
            'Support de conformité et de sécurité',
            'Support SLA',
            'Automatisations IA personnalisées'
          ]
        }
      ],
      addon: {
        title: 'Réception vocale IA',
        badge: 'Module optionnel',
        desc: 'Comprend : Réceptionniste IA 24/7, réponse aux appels, réservation de rendez-vous par téléphone, transferts d\'appels, gestion des appels manqués et support multilingue.',
        price: 'À partir de ₹999',
        usage: '/mois + utilisation',
        cta: 'Ajouter au forfait'
      }
    },
    benefits: {
      title: 'Améliorer l\'efficacité opérationnelle',
      subtitle: 'GreenLane offre un impact opérationnel mesurable sur la communication avec les patients et les flux de travail administratifs de santé.',
      list: [
        'Automatiser les flux de communication répétitifs avec les patients',
        'Réduire la charge de travail administrative de l\'accueil',
        'Améliorer les temps de réponse et gagner en visibilité sur les opérations de la clinique',
        'Réduire les opportunités de rendez-vous manqués',
        'Centraliser la gestion de la communication avec les patients',
        'Rationaliser la planification et la coordination opérationnelle',
        'Améliorer l\'expérience patient sur tous les canaux de communication',
        'Augmenter la productivité de l\'équipe de santé'
      ]
    },
    founder: {
      name: 'Manivannan Babu',
      role: 'Fondateur & PDG, GreenLane AI',
      bookMeeting: 'Prendre un rendez-vous',
      connectLinkedin: 'Se connecter sur LinkedIn',
      quote: '"J\'ai fondé GreenLane AI avec une mission : aider les prestataires de soins à consacrer moins de temps aux tâches administratives et plus de temps aux patients. Nous croyons que l\'IA doit soutenir les équipes médicales — et non les remplacer — en automatisant les communications répétitives tout en laissant les cliniciens aux commandes."',
      bullets: [
        'Fondateur de Digi Mabble, une entreprise spécialisée dans l\'IA et la transformation digitale.',
        'Conception de solutions d\'IA pour la santé et les entreprises européennes.',
        'Axé sur des technologies de santé sécurisées et conformes au RGPD.',
        'Basé en Belgique avec des équipes d\'ingénierie et de développement de produits en Europe et en Inde.',
        'Passionné par l\'amélioration de l\'expérience patient grâce à une IA responsable.'
      ]
    },
    faq: {
      title: 'Foire Aux Questions',
      subtitle: 'Nous comprenons que les équipes de santé ont besoin de clarté sur la sécurité, la mise en œuvre, la tarification et l\'impact opérationnel avant d\'adopter l\'automatisation.',
      contactSupport: 'Contacter le support',
      list: [
        { q: "GreenLane est-il adapté à mon type de clinique ?", a: "Oui. GreenLane est conçu pour les cliniques médicales, les cabinets dentaires, les centres de physiotherapie, les cliniques spécialisées et les organisations de santé multi-sites." },
        { q: "Combien de temps prend l'onboarding ?", a: "L'onboarding typique prend 1 à 2 semaines selon la taille de la clinique et la complexité des flux de travail." },
        { q: "GreenLane s'intègre-t-il aux systèmes existants ?", a: "Oui. GreenLane peut s'intégrer aux systèmes de planification, aux outils de communication et aux flux de travail de santé via API ou configuration personnalisée (forfaits Enterprise)." },
        { q: "Les données des patients sont-elles sécurisées et conformes au RGPD ?", a: "Oui. GreenLane est construit avec une architecture conforme au RGPD et utilise une infrastructure sécurisée hébergée dans l'UE avec des flux de communication cryptés." },
        { q: "Que se passe-t-il lorsque l'IA ne peut pas gérer une demande ?", a: "Toutes les interactions complexes ou sensibles avec les patients sont automatiquement transmises à votre personnel de santé." },
        { q: "Quels canaux de communication sont pris en charge ?", a: "GreenLane prend en charge les appels téléphoniques (voix IA), WhatsApp, SMS, email et les flux de messagerie patient sur une seule plateforme." },
        { q: "Comment fonctionne la tarification ?", a: "Nous proposons des forfaits mensuels et annuels basés sur la taille de la clinique et les besoins opérationnels. Les forfaits Enterprise incluent une tarification personnalisée et un support multi-sites." },
        { q: "GreenLane remplace-t-il notre personnel ?", a: "Non. GreenLane soutient les équipes de santé en automatisant les tâches de communication et administratives répétitives tandis que le personnel garde le contrôle des soins et des décisions." },
        { q: "Puis-je personnaliser les flux de travail pour ma clinique ?", a: "Oui. Les flux de travail sont configurables en fonction de la structure de communication et des processus opérationnels de votre clinique." }
      ]
    },
    security: {
      title: 'Sécurité, confidentialité et conformité RGPD par conception',
      desc1: 'La communication en santé exige plus que de l\'automatisation — elle nécessite une infrastructure sécurisée, un accès contrôlé et une architecture système axée sur la confidentialité, conçue pour la conformité réglementaire et la fiabilité opérationnelle.',
      desc2: 'GreenLane est construit sur des principes conformes au RGPD, avec des flux de communication sécurisés conçus spécifiquement pour les environnements de santé européens.',
      featuresTitle: 'Fonctionnalités de sécurité et d\'infrastructure',
      features: [
        'Infrastructure hébergée dans l\'UE',
        'Flux de communication cryptés de bout en bout',
        'Contrôle d\'accès basé sur les rôles (RBAC)',
        'Gestion sécurisée de la communication patient',
        'Autorisations d\'accès opérationnel contrôlées',
        'Architecture système orientée santé',
        'Coordination sécurisée des flux de travail entre les équipes'
      ],
      responsibleAiTitle: 'IA Responsable',
      responsibleAiDesc: 'GreenLane est conçu pour soutenir les équipes de santé — et non pour remplacer la responsabilité clinique.\nL\'IA est utilisée pour des flux de communication et opérationnels définis, tandis que les décisions sensibles, complexes et cliniques restent soumises à une supervision humaine appropriée.',
      commitmentTitle: 'Engagement de protection des données',
      commitmentDesc: 'Toutes les données de communication patient et de flux opérationnels sont traitées dans des environnements d\'infrastructure européens sécurisés, conçus pour répondre aux exigences du RGPD et soutenir la conformité en santé, la protection de la vie privée et la fiabilité opérationnelle.'
    },
    whoItsFor: {
      title: 'Conçu pour les organisations de santé modernes',
      subtitle: 'Conçu pour les prestataires de soins gérant un volume élevé de communication patient et des flux opérationnels complexes dans des environnements mono ou multi-sites.',
      providers: [
        'Cliniques médicales', 'Cabinets dentaires', 'Centres de physiothérapie', 
        'Cliniques spécialisées', 'Groupes de santé multi-sites', 'Prestataires de soins privés et réseaux', 
        'Centres de soins ambulatoires'
      ],
      roiDisclaimer: 'Les résultats réels varient selon la taille de l\'organisation, le volume de communication, les flux de travail, la configuration et le niveau d\'automatisation. Les résultats doivent être validés par des déploiements et des projets pilotes.',
      roiTitle: 'Efficacité opérationnelle avec un impact mesurable',
      roiSubtitle: 'GreenLane améliore l\'efficacité de la communication en santé en automatisant les interactions avec les patients et en réduisant la charge de travail administrative.',
      stats: [
        { value: '70–80%', label: 'Automatisation des flux de communication répétitifs avec les patients' },
        { value: '30–40%', label: 'Réduction de la charge de travail administrative et des frais de coordination' },
        { value: '900€–1,2k€', label: 'Économies mensuelles estimées par base de coûts administratifs de 3 000 €' }
      ],
      footerText: 'Des cabinets indépendants aux grandes organisations de santé, GreenLane fournit une base évolutive adaptée au fonctionnement de la santé.',
    },
    implementation: {
      title: 'Onboarding simple pour les équipes de santé',
      subtitle: 'Un processus rationalisé en 4 étapes pour intégrer GreenLane dans les opérations de votre clinique.',
      steps: [
        { number: '1', title: 'Évaluation des flux de travail', desc: 'Nous analysons vos flux de communication actuels avec les patients, votre processus de planification et la coordination administrative au sein de votre clinique.' },
        { number: '2', title: 'Configuration de la plateforme', desc: 'Nous configurons les canaux de communication, la planification des rendez-vous et les flux d\'interaction avec les patients en fonction de la structure de votre clinique.' },
        { number: '3', title: 'Déploiement de l\'automatisation IA', desc: 'Nous activons l\'automatisation pilotée par l\'IA pour les appels patients, la messagerie, les rappels et les tâches de communication de routine.' },
        { number: '4', title: 'Mise en service et optimisation', desc: 'Votre système est mis en service avec un suivi continu, des ajustements et une optimisation constante basés sur l\'utilisation réelle de la clinique.' }
      ]
    },
    ctas: {
      title: 'Les opérations de santé modernes nécessitent une infrastructure de communication moderne',
      subtitle: 'GreenLane centralise la communication avec les patients, automatise les flux de travail administratifs et améliore l\'efficacité opérationnelle grâce à une infrastructure sécurisée alimentée par l\'IA, conçue pour les organisations de santé européennes.',
      tagline: 'Commencez avec un flux de travail. Connectez vos opérations de santé. Évoluez avec l\'IA.',
      bookDemo: 'Réserver une démo',
      talkToTeam: 'Parler à nos ventes'
    },
    pillars: {
      title: 'Conçu pour les opérations de santé européennes',
      subtitle: 'Une plateforme intelligente unique pour la communication et les opérations de santé',
      description: 'GreenLane crée une couche alimentée par l\'IA entre les patients, les équipes de santé, les flux de travail et les systèmes technologiques — aidant les organisations à automatiser les tâches répétitives tout en gardant le contrôle humain.',
      list: [
        { title: 'Infrastructure spécifique à la santé', desc: 'Conçue spécifiquement pour les cliniques, les prestataires de soins et les flux de travail de communication avec les patients.' },
        { title: 'Architecture conforme au RGPD', desc: 'Construite sur une infrastructure européenne sécurisée avec des flux de travail axés sur la confidentialité et une conception opérationnelle orientée santé.' },
        { title: 'Communication multicanale', desc: 'Gérez les appels vocaux, WhatsApp, les rappels de rendez-vous, la planification et la messagerie patient via une plateforme centralisée.' },
        { title: 'Collaboration Humain + IA', desc: 'L\'IA automatise les tâches de communication répétitives tandis que les équipes de santé maintiennent la supervision des interactions sensibles.' },
        { title: 'Efficacité opérationnelle évolutive', desc: 'Soutenez les organisations de santé en croissance sans augmenter la charge de travail de l\'accueil ou les frais administratifs.' },
        { title: 'Coordination fiable de la santé', desc: 'Conçue pour améliorer la cohérence de la communication, la coordination opérationnelle et la gestion quotidienne des flux de santé.' }
      ]
    },
    footer: {
      links: {
        whyGreenLane: 'Pourquoi GreenLane',
        problem: 'Problème',
        solution: 'Solution',
        capabilities: 'Capacités',
        howItWorks: 'Comment ça marche',
        pricing: 'Tarifs'
      },
      tagline: 'Infrastructure opérationnelle pour la santé moderne. Plateforme sécurisée, conforme au RGPD et efficace conçue pour l\'Europe.',
      copyright: '© 2026 GreenLane AI. propulsé par Digi Mabble',
      platform: 'Plateforme',
      legal: 'Légal',
      support: 'Support',
      compliance: 'Sécurité & Conformité',
      socials: 'Réseaux',
      newsletterTitle: 'Restez informé',
      newsletterPlaceholder: 'Entrez votre adresse e-mail',
      newsletterButton: 'S\'ABONNER À LA NEWSLETTER',
      gdpr: 'Conformité RGPD',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      cookieSettings: 'Paramètres des cookies',
      contact: 'Contact',
      subscribeSuccess: 'Merci de vous être abonné !',
      subscribeError: 'Un problème est survenu. Veuillez réessayer.'
    },
    bookDemoSection: {
      title: 'Planifier une démo personnalisée',
      subtitle: 'Découvrez comment GreenLane AI aide les prestataires de soins à rationaliser la communication avec les patients, à automatiser les rappels et à améliorer l\'engagement des patients.',
      form: {
        fullName: 'Nom complet',
        workEmail: 'Email professionnel',
        clinicName: 'Nom de la clinique / de l\'hôpital',
        role: 'Rôle / Poste',
        size: 'Nombre de cliniques ou de patients',
        message: 'Message',
        cta: 'Soumettre',
        submitting: 'Envoi en cours...'
      },
      success: {
        title: 'Message envoyé',
        subtitle: "Merci de nous avoir contactés. Nous vous répondrons sous 1 à 2 jours ouvrables.",
        cta: 'Envoyer un autre message'
      },
      cards: {
        expect: {
          title: 'À quoi s\'attendre',
          items: [
            'Démo sous 24 heures',
            'Parcours de flux de travail personnalisé',
            'Communication patient via IA',
            'Support Q&A en direct'
          ]
        },
        perfect: {
          title: 'Idéal pour',
          items: [
            'Cliniques',
            'Hôpitaux',
            'Prestataires de soins',
            'Équipes d\'engagement patient'
          ]
        },
        get: {
          title: 'Ce que vous obtenez',
          items: [
            'Réduction des rendez-vous manqués',
            'Rappels automatisés',
            'Communication patient plus rapide',
            'Meilleure efficacité opérationnelle'
          ]
        }
      }
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes là pour vous aider ! Dites-nous ce dont vous avez besoin, et un expert vous répondra sous 24 heures.',
      info: {
        address: {
          title: 'Adresse',
          offices: [
            { name: 'Bureau de Wavre', address: 'Avenue Eiffel 8, 1300 Wavre, Belgique.' },
            { name: 'Bureau de Tallinn', address: 'Tartu mnt 67/1, 10115 Tallinn, Estonie.' },
            { name: 'India', address: 'No.66/19, 8th street, Gopalapuram, Gandhinagar Vellore - 632 006, Tamilnadu, India' }
          ]
        },
        email: {
          title: 'Envoyez-nous un email',
          items: ['info@digimabble.com']
        },
        phone: {
          title: 'Appelez-nous',
          items: ['+32 467 85 99 60', '+91 8197017799']
        }
      },
      form: {
        name: 'Entrez votre nom',
        email: 'Adresse email',
        emailPlaceholder: 'exemple@gmail.com',
        phone: 'Numéro de téléphone',
        phonePlaceholder: '(123) 456 - 7890',
        company: 'Entreprise',
        companyPlaceholder: 'Digi Mabble AI',
        message: 'Message',
        messagePlaceholder: 'Écrivez votre message ici...',
        cta: 'Envoyer le message'
      }
    },
    analytics: {
      badge: 'Efficacité opérationnelle',
      title: 'Efficacité opérationnelle avec un impact mesurable',
      subtitle: 'GreenLane aide les organisations de santé à améliorer l\'efficacité de la communication avec les patients tout en réduisant la charge de travail administrative et la complexité de la coordination opérationnelle.',
      benefitsBadge: 'Avantages opérationnels',
      benefitsTitle: 'Améliorer la visibilité et l\'efficacité opérationnelles',
      benefits: [
        'Automatiser les flux de communication répétitifs avec les patients',
        'Réduire la surcharge administrative de l\'accueil',
        'Améliorer les temps de réponse de la communication',
        'Réduire les opportunités de rendez-vous manqués',
        'Rationaliser la coordination opérationnelle entre les cliniques'
      ],
      stats: {
        automation: 'Automatisation des flux de travail',
        workload: 'Réduction de la charge de travail administrative'
      },
      pending: 'En attente'
    },
    cookieConsent: {
      title: 'Nous apprécions votre vie privée',
      description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des publicités ou des contenus personnalisés et analyser notre trafic. En cliquant sur "Tout accepter", vous consentez à notre utilisation des cookies.',
      customize: 'Personnaliser',
      rejectAll: 'Tout refuser',
      acceptAll: 'Tout accepter',
      settingsTitle: 'Paramètres des cookies',
      settingsSubtitle: 'Gérer vos préférences de confidentialité',
      essentialTitle: 'Cookies essentiels',
      essentialDesc: 'Nécessaires au bon fonctionnement du site web.',
      analyticsTitle: 'Cookies analytiques',
      analyticsDesc: 'Aidez-nous à nous améliorer en suivant l\'utilisation du site.',
      marketingTitle: 'Cookies marketing',
      marketingDesc: 'Utilisés pour des publicités personnalisées.',
      save: 'Enregistrer les préférences',
      required: 'Requis'
    },
    contactModal: {
      title: 'Parler à nos ventes',
      subtitle: "Remplissez le formulaire ci-dessous et nous vous contacterons.",
      successTitle: 'Message envoyé !',
      successSubtitle: 'Merci de nous avoir contactés. Notre équipe vous répondra sous peu.',
      close: 'Fermer',
      sending: 'Envoi en cours...'
    },
    testimonials: {
      title: 'Approuvé par les prestataires de soins à travers l\'Europe',
      items: [
        { name: 'Lilianna Bocouse', role: 'Directrice de clinique', quote: '« GreenLane a transformé notre gestion de la communication avec les patients. La réception vocale par IA a réduit la charge de travail de notre accueil de 40 % tout en garantissant qu\'aucun appel de patient ne reste sans réponse. C\'est l\'infrastructure dont nous ne savions pas que nous avions besoin. »' },
        { name: 'Darell Steward', role: 'Responsable des opérations', quote: '« L\'intégration de WhatsApp change la donne pour notre clinique spécialisée. Nous pouvons désormais coordonner les rendez-vous complexes et les suivis via un seul canal sécurisé, améliorant considérablement les temps de réponse aux patients et réduisant les frictions opérationnelles. »' },
        { name: 'Annette Black', role: 'Gestionnaire de cabinet', quote: '« Le passage à la planification automatisée de GreenLane a presque éliminé les rendez-vous manqués. Le système est intuitif pour notre personnel administratif et incroyablement pratique pour nos patients qui préfèrent la coordination numérique. »' }
      ]
    },
    appDownload: {
      title: 'Téléchargez l\'application GreenLane pour n\'importe quel appareil',
      subtitle: 'Il existe désormais une application mobile pour que vous puissiez toujours suivre rapidement et facilement vos données patients et vos communications lors de vos déplacements.',
      editorsChoice: "Choix de l'éditeur",
      editorsChoiceStats: 'note 4.7, 187K+ avis',
      appOfDay: 'Application du jour',
      appOfDayStats: 'note 4.8, 30K+ avis'
    }
  },
  nl: {
    navbar: {
      home: 'Home',
      whyNow: 'Waarom GreenLane',
      problem: 'Probleem',
      solution: 'Oplossing',
      features: 'Functies',
      howItWorks: 'Hoe het werkt',
      pricing: 'Prijzen',
      faq: 'FAQ',
      contact: 'Contacteer ons',
      bookDemo: 'Demo boeken',
      selectLanguage: 'Taal selecteren',
    },
    hero: {
      highlight: 'Verbind mensen. Automatiseer workflows. Coördineer de zorg. Schaal met AI.',
      badge: 'Eén intelligent platform voor de gezondheidszorg',
      title: 'AI operationele infrastructuur voor moderne zorgcommunicatie',
      description1: 'GreenLane helpt zorgverleners bij het automatiseren van patiëntcommunicatie, afspraakcoördinatie en administratieve workflows via een beveiligd AI-gestuurd platform dat is gebouwd voor Europese zorgorganisaties.',
      description2: 'Verminder gemiste oproepen, automatiseer patiëntinteracties, verlicht de administratieve werklast en stroomlijn de zorgoperaties — met een AVG-prioritaire infrastructuur en beveiligde communicatieworkflows ontworpen voor moderne klinieken.',
      bookDemo: 'Boek een live demo',
      talkToSales: 'Praat met verkoop',
      trustBar: [
        'AVG-prioritaire infrastructuur',
        'EU-gehoste systemen',
        'Gecodeerde patiëntcommunicatie'
      ]
    },
    features: {
      title: 'Zorgcommunicatiesystemen zijn nooit gebouwd om te schalen',
      subtitle: 'Moderne zorgorganisaties vertrouwen op losgekoppelde communicatiesystemen die operationele inefficiënties, administratieve overbelasting en gefragmenteerde patiëntervaringen creëren.',
      reality: {
        badge: 'De gefragmenteerde realiteit',
        title: 'Zorgteams worden gedwongen om patiëntcommunicatie te beheren via meerdere losgekoppelde kanalen en handmatige workflows:',
        description: 'Moderne zorgorganisaties beheren patiëntcommunicatie via gefragmenteerde systemen die niet zijn ontworpen voor de operationele eisen van vandaag.',
        list: [
          'Telefoongesprekken',
          'WhatsApp-berichten',
          'Afspraakplanning',
          'Opvolging en herinneringen',
          'Receptiecoördinatie',
          'Administratieve workflows'
        ]
      },
      inefficiency: {
        badge: 'De resulterende inefficiëntie',
        title: 'Operationele knelpunten en administratieve vermoeidheid',
        list: [
          'Gemiste patiëntinteracties en opvolgingen',
          'Vertraagde reactietijden in communicatie',
          'Overbelaste receptie- en administratieve teams',
          'Gaten in afspraken en gemiste planningsmogelijkheden',
          'Communicatieknelpunten tussen afdelingen',
          'Toename van handmatige coördinatie en repetitieve taken',
          'Verminderde productiviteit en efficiëntie van het personeel',
          'Inconsistente ervaringen in patiëntcommunicatie'
        ]
      },
      insight: {
        title: 'De uitdaging in de moderne zorg is niet langer de vraag van de patiënt — het is operationele schaalbaarheid.',
        description: 'Verouderde communicatiesystemen en gefragmenteerde administratieve workflows creëren inefficiënties in alle zorgorganisaties.'
      }
    },
    capabilities: {
      title: 'Platformmogelijkheden',
      subtitle: 'Intelligente infrastructuur voor moderne zorgteams',
      description: 'GreenLane brengt de mogelijkheden samen die zorgorganisaties nodig hebben om communicatie, betrokkenheid en operationele workflows te verbinden.',
      list: [
        { title: 'AI-spraakreceptie', desc: 'Handel patiëntoproepen direct af via AI-gestuurde spraaksystemen met intelligente routering en communicatiecoördinatie.' },
        { title: 'Slimme afspraakcoördinatie', desc: 'Automatiseer afspraakplanning, bevestigingen, herinneringen en patiëntopvolgingen via alle communicatiekanalen.' },
        { title: 'WhatsApp & patiëntberichten', desc: 'Centraliseer patiëntcommunicatie via WhatsApp, SMS en digitale berichten binnen één uniform platform.' },
        { title: 'Workflow-automatisering', desc: 'Verminder repetitieve administratieve taken en stroomlijn de dagelijkse zorgoperaties door intelligente automatisering.' },
        { title: 'Menselijke escalatie & teamsamenwerking', desc: 'Draag gevoelige of complexe patiëntinteracties automatisch over aan het zorgpersoneel wanneer menselijke tussenkomst nodig is.' },
        { title: 'Operationele analyse & zichtbaarheid', desc: 'Monitor communicatieactiviteiten, responsprestaties en workflow-efficiëntie binnen uw zorgorganisatie.' }
      ]
    },
    howItWorks: {
      title: 'Hoe het werkt',
      desc: 'GreenLane centraliseert communicatie en automatiseert operationele coördinatie om de efficiëntie te verbeteren.',
      steps: [
        { title: 'Patiënten nemen contact op met de kliniek', desc: 'Patiënten maken verbinding via telefoongesprekken, WhatsApp, afspraakverzoeken, herinneringen en digitale communicatiekanalen.' },
        { title: 'AI beheert de communicatie-intake', desc: 'AI legt verzoeken van patiënten vast, beantwoordt veelgestelde vragen en stuurt gesprekken automatisch door.' },
        { title: 'Administratieve workflows worden geautomatiseerd', desc: 'Planning, bevestigingen, herinneringen en patiëntopvolgingen worden automatisch verwerkt via alle communicatiekanalen.' },
        { title: 'Menselijke teams behouden de controle', desc: 'Gevoelige, dringende of complexe interacties worden naadloos geëscaleerd naar het zorgpersoneel wanneer menselijke tussenkomst nodig is.' },
        { title: 'Zorgoperaties worden efficiënter', desc: 'Zorgverleners verminderen de administratieve werklast, verbeteren de reactietijden en stroomlijnen de dagelijkse operaties.' }
      ]
    },
    pricing: {
      title: 'Eenvoudige prijzen voor moderne zorg',
      subtitle: 'Kies het plan dat past bij de operationele behoeften van uw kliniek.',
      monthly: 'Maandelijkse facturering',
      annual: 'Jaarlijkse facturering',
      save: 'Bespaar 20%',
      getStarted: 'Aan de slag',
      mostPopular: 'Aanbevolen',
      whatsIncluded: "Wat is inbegrepen",
      custom: 'Aangepaste prijzen',
      perMonth: '/mnd',
      plans: [
        {
          name: 'Starter',
          desc: 'Voor kleine klinieken & zelfstandige praktijken',
          price: '€186',
          features: [
            'AI-spraakreceptie voor patiëntoproepen',
            'Automatisering van afspraakplanning',
            'WhatsApp & patiëntberichten-workflows',
            'Geautomatiseerde patiëntherinneringen',
            'Basis workflow-automatisering',
            'E-mailondersteuning'
          ]
        },
        {
          name: 'Scale',
          desc: 'Voor groeiende zorgorganisaties',
          price: '€289',
          features: [
            'Bevat alles in Starter, plus:',
            'Geavanceerde workflow-automatisering',
            'Beheer van communicatie via meerdere kanalen',
            'Dashboard voor operationele analyses',
            'Prioritaire ondersteuning',
            'Toegang voor meerdere gebruikers voor kliniekteams',
            'Verbeterde coördinatieworkflows'
          ]
        },
        {
          name: 'Enterprise',
          desc: 'Voor zorggroepen met meerdere locaties',
          price: 'Aangepaste prijzen',
          cta: 'Prijs aanvragen',
          features: [
            'Communicatiecoördinatie voor meerdere locaties',
            'Workflow-automatisering op ondernemingsniveau',
            'Aangepaste integraties (EPD / systemen)',
            'Gespecialiseerde onboarding & setup',
            'API-toegang + compliance-ondersteuning',
            'Toegewezen accountbeheer',
            'Schaalbare operationele infrastructuur'
          ]
        }
      ]
    },

    pricingIn: {
      plans: [
        {
          name: 'Starter',
          desc: 'Voor kleine klinieken & onafhankelijke praktijken',
          features: [
            'AI WhatsApp afspraakboeking',
            'Geautomatiseerde afspraakherinneringen',
            'Verzetten & annuleren',
            'Google Calendar integratie',
            'Patiëntenberichten workflows',
            'Basis workflow automatisering',
            'Basis dashboard',
            'E-mailondersteuning'
          ]
        },
        {
          name: 'Scale',
          desc: 'Voor groeiende zorgorganisaties',
          features: [
            'Alles in Starter, plus:',
            'AI-aangedreven WhatsApp Assistent',
            'Geavanceerde workflow automatisering',
            'Patiënt follow-up automatisering',
            'Beoordelingen & feedback verzamelen',
            'Operationeel analyse dashboard',
            'Toegang voor meerdere gebruikers',
            'Prioriteitsondersteuning'
          ]
        },
        {
          name: 'Enterprise',
          desc: 'Voor ziekenhuizen & zorginstellingen met meerdere locaties',
          features: [
            'Beheer van meerdere locaties',
            'Enterprise workflow automatisering',
            'Aangepaste integraties (EPD / ERP)',
            'API toegang',
            'Toegewijde onboarding',
            'Toegewijde accountmanager',
            'Compliance & beveiligingsondersteuning',
            'SLA ondersteuning',
            'Aangepaste AI automatiseringen'
          ]
        }
      ],
      addon: {
        title: 'AI Spraakreceptie',
        badge: 'Optionele Add-on',
        desc: 'Inclusief: 24/7 AI-receptionist, oproepbeantwoording, telefonische afspraakboeking, doorverbinden, afhandeling gemiste oproepen en meertalige ondersteuning.',
        price: 'Vanaf ₹999',
        usage: '/mnd + gebruik',
        cta: 'Toevoegen aan plan'
      }
    },
    benefits: {
      title: 'Verbeter de operationele efficiëntie',
      subtitle: 'GreenLane levert meetbare operationele impact via zorgcommunicatie en administratieve workflows.',
      list: [
        'Automatiseer repetitieve patiëntcommunicatieworkflows',
        'Verminder de administratieve werklast aan de receptie',
        'Verbeter de reactietijden van patiënten en krijg inzicht in de kliniekoperaties',
        'Verminder gemste afspraakmogelijkheden',
        'Centraliseer het beheer van patiëntcommunicatie',
        'Stroomlijn de planning en operationele coördinatie',
        'Verbeter de patiëntervaring via alle communicatiekanalen',
        'Verhoog de productiviteit van het zorgteam'
      ]
    },
    founder: {
      name: 'Manivannan Babu',
      role: 'Oprichter & CEO, GreenLane AI',
      bookMeeting: 'Een gesprek boeken',
      connectLinkedin: 'Connecten op LinkedIn',
      quote: '"Ik heb GreenLane AI opgericht met één missie: zorgverleners helpen minder tijd te besteden aan administratieve taken en meer tijd aan de zorg voor patiënten. Wij geloven dat AI zorgverleners moet ondersteunen — niet vervangen — door repetitieve communicatie te automatiseren en clinici in controle te houden."',
      bullets: [
        'Oprichter van Digi Mabble, een bedrijf voor AI en digitale transformatie.',
        'Ontwikkelt AI-oplossingen voor de gezondheidszorg en Europese bedrijven.',
        'Gericht op veilige, GDPR-conforme zorgtechnologie.',
        'Gevestigd in België met engineering- en productontwikkelingsteams in Europa en India.',
        'Gepassioneerd over het verbeteren van patiëntervaringen door middel van verantwoorde AI.'
      ]
    },
    faq: {
      title: 'Veelgestelde Vragen',
      subtitle: 'We begrijpen dat zorgteams duidelijkheid nodig hebben over beveiliging, implementatie, prijzen en operationele impact voordat ze automatisering omarmen.',
      contactSupport: 'Contacteer ondersteuning',
      list: [
        { q: "Is GreenLane geschikt voor mijn type kliniek?", a: "Ja. GreenLane is ontworpen voor medische klinieken, tandartspraktijken, fysiotherapiecentra, gespecialiseerde klinieken en zorgorganisaties met meerdere locaties." },
        { q: "Hoe lang duurt de onboarding?", a: "De typische onboarding duurt 1–2 weken, afhankelijk van de grootte van de kliniek en de complexiteit van de workflow." },
        { q: "Integreert GreenLane met bestaande systemen?", a: "Ja. GreenLane kan integreren met planningssystemen, communicatietools en zorgworkflows via API of aangepaste setup (Enterprise-plannen)." },
        { q: "Zijn patiëntgegevens veilig en AVG-conform?", a: "Ja. GreenLane is gebouwd met een AVG-prioritaire architectuur en maakt gebruik van beveiligde EU-gehoste infrastructuur met gecodeerde communicatieworkflows." },
        { q: "Wat gebeurt er als de AI een verzoek niet kan afhandelen?", a: "Alle gevoelige of complexe patiëntinteracties worden automatisch geëscaleerd naar uw zorgpersoneel." },
        { q: "Welke communicatiekanalen worden ondersteund?", a: "GreenLane ondersteunt telefoongesprekken (AI-spraak), WhatsApp, SMS, e-mail en patiëntberichten-workflows in één platform." },
        { q: "Hoe werken de prijzen?", a: "We bieden maandelijkse en jaarlijkse plannen op basis van de grootte van de kliniek en de operationele behoeften. Enterprise-plannen bevatten aangepaste prijzen en ondersteuning voor meerdere locaties." },
        { q: "Vervangt GreenLane ons personeel?", a: "Nee. GreenLane ondersteunt zorgteams door repetitieve communicatie- en administratieve taken te automatiseren, terwijl het personeel de controle behoudt over patiëntenzorg en beslissingen." },
        { q: "Kan ik workflows aanpassen voor mijn kliniek?", a: "Ja. Workflows zijn configureerbaar op basis van de communicatiestructuur en operationele processen van uw kliniek." }
      ]
    },
    security: {
      title: 'Beveiliging, privacy & AVG-compliance door ontwerp',
      desc1: 'Zorgcommunicatie vereist meer dan automatisering — het vereist een beveiligde infrastructuur, gecontroleerde toegang en een privacy-prioritaire systeemarchitectuur ontworpen voor naleving van regelgeving en operationele betrouwbaarheid.',
      desc2: 'GreenLane is gebouwd op AVG-prioritaire principes, met beveiligde communicatieworkflows specifiek ontworpen voor Europese zorgomgevingen.',
      featuresTitle: 'Beveiligings- & infrastructuurfuncties',
      features: [
        'EU-gehoste infrastructuur',
        'End-to-end gecodeerde communicatieworkflows',
        'Toegangsbeheer op basis van rollen (RBAC)',
        'Beveiligde afhandeling van patiëntcommunicatie',
        'Gecontroleerde operationele toegangsrechten',
        'Zorggeoriënteerde systeemarchitectuur',
        'Beveiligde workflowcoördinatie tussen teams'
      ],
      responsibleAiTitle: 'Verantwoorde AI',
      responsibleAiDesc: 'GreenLane is ontworpen om zorgteams te ondersteunen — niet om klinische verantwoordelijkheid te vervangen.\nAI wordt gebruikt voor gedefinieerde communicatie en operationele workflows, terwijl gevoelige, complexe en klinische beslissingen onderhevig blijven aan passend menselijk toezicht.',
      commitmentTitle: 'Toezegging voor gegevensbescherming',
      commitmentDesc: 'Alle patiëntcommunicatie- en operationele workflowgegevens worden verwerkt binnen beveiligde Europese infrastructuuromgevingen, ontworpen om te voldoen aan de AVG-vereisten en om zorgcompliance, privacybescherming en operationele betrouwbaarheid te ondersteunen.'
    },
    whoItsFor: {
      title: 'Ontworpen voor moderne zorgorganisaties',
      subtitle: 'Gebouwd voor zorgverleners die een hoog volume aan patiëntcommunicatie en complexe operationele workflows beheren in omgevingen met één of meerdere locaties.',
      providers: [
        'Medische klinieken', 'Tandartspraktijken', 'Fysiotherapiecentra', 
        'Gespecialiseerde klinieken', 'Zorggroepen met meerdere locaties', 'Particuliere zorgverleners en netwerken', 
        'Ambulante zorgcentra'
      ],
      roiDisclaimer: 'Werkelijke resultaten variëren afhankelijk van de grootte van de organisatie, het communicatievolume, de workflows, de configuratie en het automatiseringsniveau. Resultaten moeten worden gevalideerd via klantimplementaties en pilots.',
      roiTitle: 'Operationele efficiëntie met meetbare impact',
      roiSubtitle: 'GreenLane verbetert de efficiëntie van de zorgcommunicatie door patiëntinteracties te automatiseren en de administratieve werklast in klinische operaties te verminderen.',
      stats: [
        { value: '70–80%', label: 'Automatisering van repetitieve patiëntcommunicatieworkflows' },
        { value: '30–40%', label: 'Vermindering van de administratieve werklast en coördinatie-overhead' },
        { value: '€900–€1,2k', label: 'Geschatte maandelijkse besparing per administratieve kostenbasis van € 3.000' }
      ],
      footerText: 'Van onafhankelijke praktijken tot groeiende zorgorganisaties, GreenLane biedt een basis die schaalt met de manier waarop de zorg werkt.',
    },
    implementation: {
      title: 'Eenvoudige onboarding voor zorgteams',
      subtitle: 'Een gestroomlijnd proces in 4 stappen om GreenLane te integreren in uw kliniekoperaties.',
      steps: [
        { number: '1', title: 'Workflow-beoordeling', desc: 'We analyseren uw huidige patiëntcommunicatiestromen, het planningsproces en de administratieve coördinatie binnen uw kliniek.' },
        { number: '2', title: 'Platform-setup', desc: 'We configureren communicatiekanalen, afspraakplanning en patiëntinteractieworkflows op basis van uw kliniekstructuur.' },
        { number: '3', title: 'AI-automatiseringsimplementatie', desc: 'We activeren AI-gestuurde automatisering voor patiëntoproepen, berichten, herinneringen en routinematige communicatietaken.' },
        { number: '4', title: 'Livegang & optimalisatie', desc: 'Uw systeem gaat live met voortdurende monitoring, aanpassingen en voortdurende optimalisatie op basis van het werkelijke gebruik in de kliniek.' }
      ]
    },
    ctas: {
      title: 'Moderne zorgoperaties vereisen moderne communicatie-infrastructuur',
      subtitle: 'GreenLane centraliseert patiëntcommunicatie, automatiseert administratieve workflows en verbetert de operationele efficiëntie via een beveiligde AI-gestuurde infrastructuur gebouwd voor Europese zorgorganisaties.',
      tagline: 'Begin met één workflow. Verbind uw zorgoperatie. Schaal met AI.',
      bookDemo: 'Boek een demo',
      talkToTeam: 'Praat met verkoop'
    },
    pillars: {
      title: 'Gebouwd voor Europese zorgoperaties',
      subtitle: 'Eén intelligent platform voor zorgcommunicatie & operaties',
      description: 'GreenLane creëert een AI-gestuurde laag tussen patiënten, zorgteams, workflows en technologische systemen — en helpt organisaties repetitief werk te automatiseren terwijl mensen in controle blijven.',
      list: [
        { title: 'Zorgspecifieke infrastructuur', desc: 'Specifiek ontworpen voor klinieken, zorgverleners en patiëntcommunicatieworkflows.' },
        { title: 'AVG-prioritaire architectuur', desc: 'Gebouwd op beveiligde Europese infrastructuur met privacy-gerichte workflows en zorggeoriënteerd operationeel ontwerp.' },
        { title: 'Multi-channel communicatie', desc: 'Beheer spraakoproepen, WhatsApp, afspraakherinneringen, planning en patiëntberichten via één gecentraliseerd platform.' },
        { title: 'Mens + AI samenwerking', desc: 'AI automatiseert repetitieve communicatietaken terwijl zorgteams toezicht houden op gevoelige patiëntinteracties.' },
        { title: 'Schaalbare operationele efficiëntie', desc: 'Ondersteun groeiende zorgorganisaties zonder de werklast aan de receptie of de administratieve overhead te verhogen.' },
        { title: 'Betrouwbare zorgcoördinatie', desc: 'Gebouwd om de consistentie van de communicatie, de operationele coördinatie en het dagelijkse beheer van zorgworkflows te verbeteren.' }
      ]
    },
    footer: {
      links: {
        whyGreenLane: 'Waarom GreenLane',
        problem: 'Probleem',
        solution: 'Oplossing',
        capabilities: 'Mogelijkheden',
        howItWorks: 'Hoe het werkt',
        pricing: 'Prijzen'
      },
      tagline: 'Operationele infrastructuur voor de moderne gezondheidszorg. Beveiligd, AVG-conform en efficiënt platform gebouwd voor Europa.',
      copyright: '© 2026 GreenLane AI. aangedreven door Digi Mabble',
      platform: 'Platform',
      legal: 'Juridisch',
      support: 'Ondersteuning',
      compliance: 'Beveiliging & Conformiteit',
      socials: 'Socials',
      newsletterTitle: 'Blijf op de hoogte',
      newsletterPlaceholder: 'Vul je e-mailadres in',
      newsletterButton: 'ABONNEER OP DE NIEUWSBRIEF',
      gdpr: 'AVG-naleving',
      privacy: 'Privacybeleid',
      terms: 'Servicevoorwaarden',
      cookieSettings: 'Cookie-instellingen',
      contact: 'Contact',
      subscribeSuccess: 'Bedankt voor het abonneren!',
      subscribeError: 'Er is iets misgegaan. Probeer het opnieuw.'
    },
    bookDemoSection: {
      title: 'Plan een gepersonaliseerde demo',
      subtitle: 'Zie hoe GreenLane AI zorgverleners helpt bij het stroomlijnen van patiëntcommunicatie, het automatiseren van herinneringen en het verbeteren van de patiëntbetrokkenheid.',
      form: {
        fullName: 'Volledige naam',
        workEmail: 'Zakelijke e-mail',
        clinicName: 'Kliniek / Ziekenhuisnaam',
        role: 'Rol / Positie',
        size: 'Aantal klinieken of patiënten',
        message: 'Bericht',
        cta: 'Indienen',
        submitting: 'Verzenden...'
      },
      success: {
        title: 'Bericht verzonden',
        subtitle: "Bedankt voor het contact opnemen. We nemen binnen 1–2 werkdagen contact met u op.",
        cta: 'Stuur nog een bericht'
      },
      cards: {
        expect: {
          title: 'Wat te verwachten',
          items: [
            'Demo binnen 24 uur',
            'Gepersonaliseerde workflow-walkthrough',
            'AI-gestuurde patiëntcommunicatie',
            'Live Q&A-ondersteuning'
          ]
        },
        perfect: {
          title: 'Perfect voor',
          items: [
            'Klinieken',
            'Ziekenhuizen',
            'Zorgverleners',
            'Patient Engagement Teams'
          ]
        },
        get: {
          title: 'Wat u krijgt',
          items: [
            'Minder gemiste afspraken',
            'Geautomatiseerde herinneringen',
            'Snellere patiëntcommunicatie',
            'Betere operationele efficiëntie'
          ]
        }
      }
    },
    contact: {
      title: 'Neem contact op',
      subtitle: 'We zijn hier om te helpen! Vertel ons wat u nodig heeft en een expert neemt binnen 24 uur contact met u op.',
      info: {
        address: {
          title: 'Adres',
          offices: [
            { name: 'Kantoor Wavre', address: 'Avenue Eiffel 8, 1300 Wavre, België.' },
            { name: 'Kantoor Tallinn', address: 'Tartu mnt 67/1, 10115 Tallinn, Estland.' },
            { name: 'India', address: 'No.66/19, 8th street, Gopalapuram, Gandhinagar Vellore - 632 006, Tamilnadu, India' }
          ]
        },
        email: {
          title: 'Stuur ons een e-mail',
          items: ['info@digimabble.com']
        },
        phone: {
          title: 'Bel ons',
          items: ['+32 467 85 99 60', '+91 8197017799']
        }
      },
      form: {
        name: 'Voer uw naam in',
        email: 'E-mailadres',
        emailPlaceholder: 'voorbeeld@gmail.com',
        phone: 'Telefoonnummer',
        phonePlaceholder: '(123) 456 - 7890',
        company: 'Bedrijf',
        companyPlaceholder: 'Digi Mabble AI',
        message: 'Bericht',
        messagePlaceholder: 'Schrijf hier uw bericht...',
        cta: 'Bericht verzenden'
      }
    },
    analytics: {
      badge: 'Operationele efficiëntie',
      title: 'Operationele efficiëntie met meetbare impact',
      subtitle: 'GreenLane helpt zorgorganisaties bij het verbeteren van de efficiëntie van de patiëntcommunicatie, terwijl de administratieve werklast en de complexiteit van de operationele coördinatie worden verminderden.',
      benefitsBadge: 'Operationele voordelen',
      benefitsTitle: 'Verbeter de operationele zichtbaarheid en efficiëntie',
      benefits: [
        'Automatiseer repetitieve patiëntcommunicatieworkflows',
        'Verminder administratieve overbelasting aan de receptie',
        'Verbeter de reactietijden van de communicatie',
        'Verminder gemste afspraakmogelijkheden',
        'Stroomlijn de operationele coördinatie tussen klinieken'
      ],
      stats: {
        automation: 'Workflow-automatisering',
        workload: 'Vermindering van de administratieve werklast'
      },
      patientStatus: 'Patiëntstatus',
      responded: 'Gereageerd',
      pending: 'In afwachting'
    },
    cookieConsent: {
      title: 'Wij waarderen uw privacy',
      description: 'Wij gebruiken cookies om uw surfervaring te verbeteren, gepersonaliseerde advertenties of inhoud te tonen en ons verkeer te analyseren. Door op "Alles accepteren" te klikken, stemt u in met ons gebruik van cookies.',
      customize: 'Aanpassen',
      rejectAll: 'Alles weigeren',
      acceptAll: 'Alles accepteren',
      settingsTitle: 'Cookie-instellingen',
      settingsSubtitle: 'Beheer uw privacyvoorkeuren',
      essentialTitle: 'Essentiële cookies',
      essentialDesc: 'Noodzakelijk voor het correct functioneren van de website.',
      analyticsTitle: 'Analytische cookies',
      analyticsDesc: 'Help ons verbeteren door het gebruik van de site te volgen.',
      marketingTitle: 'Marketingcookies',
      marketingDesc: 'Gebruikt voor gepersonaliseerde advertenties.',
      save: 'Voorkeuren opslaan',
      required: 'Vereist'
    },
    contactModal: {
      title: 'Praat met onze verkoopafdeling',
      subtitle: "Vul het onderstaande formulier in en we nemen contact met u op.",
      successTitle: 'Bericht verzonden!',
      successSubtitle: 'Bedankt voor het contact opnemen. Ons team neemt spoedig contact met u op.',
      close: 'Sluiten',
      sending: 'Verzenden...'
    },
    testimonials: {
      title: 'Vertrouwd door zorgverleners in heel Europa',
      items: [
        { name: 'Lilianna Bocouse', role: 'Kliniekdirecteur', quote: '“GreenLane heeft de manier waarop we patiëntcommunicatie afhandelen getransformeerd. De AI-spraakontvangst heeft onze administratieve werklast met 40% verminderd, terwijl we ervoor zorgen dat geen enkele patiëntoproep onbeantwoord blijft. Het is de infrastructuur waarvan we niet wisten dat we die nodig hadden.”' },
        { name: 'Darell Steward', role: 'Operationeel Manager', quote: '“De WhatsApp-integratie is een game-changer voor onze gespecialiseerde kliniek. We kunnen nu complexe afspraken en follow-ups coördineren via één veilig kanaal, wat de responstijden voor patiënten aanzienlijk verbetert en operationele wrijving vermindert.”' },
        { name: 'Annette Black', role: 'Praktijkmanager', quote: '“De overstap naar de geautomatiseerde planning van GreenLane heeft gemiste afspraken bijna geëlimineerd. Het systeem is intuïtief voor ons administratief personeel en ongelooflijk handig voor onze patiënten die de voorkeur geven aan digitale coördinatie.”' }
      ]
    },
    appDownload: {
      title: 'Download de GreenLane app voor elk apparaat',
      subtitle: 'Er is nu een mobiele applicatie zodat u onderweg altijd snel en gemakkelijk uw patiëntgegevens en communicatie kunt volgen.',
      editorsChoice: "Keuze van de redactie",
      editorsChoiceStats: 'beoordeling 4.7, 187K+ recensies',
      appOfDay: 'App van de dag',
      appOfDayStats: 'beoordeling 4.8, 30K+ recensies'
    }
  },
  pl: {
    navbar: {
      home: 'Start',
      whyNow: 'Dlaczego GreenLane',
      problem: 'Problem',
      solution: 'Rozwiązanie',
      features: 'Funkcje',
      howItWorks: 'Jak to działa',
      pricing: 'Cennik',
      faq: 'FAQ',
      contact: 'Kontakt',
      bookDemo: 'Umów demo',
      selectLanguage: 'Wybierz język',
    },
    hero: {
      highlight: 'Połącz ludzi. Zautomatyzuj przepływy pracy. Koordynuj opiekę zdrowotną. Skaluj z AI.',
      badge: 'Jedna inteligentna platforma dla opieki zdrowotnej',
      title: 'Operacyjna infrastruktura AI dla nowoczesnej komunikacji medycznej',
      description1: 'GreenLane pomaga placówkom medycznym automatyzować komunikację z pacjentami, koordynację wizyt i procesy administracyjne poprzez bezpieczną platformę opartą na AI, zbudowaną dla europejskich organizacji ochrony zdrowia.',
      description2: 'Redukuj liczbę nieodebranych połączeń, automatyzuj interakcje z pacjentami, zmniejszaj obciążenie administracyjne i usprawniaj operacje medyczne — dzięki infrastrukturze zgodnej z RODO i bezpiecznym procesom komunikacji zaprojektowanym dla nowoczesnych klinik.',
      bookDemo: 'Umów demo na żywo',
      talkToSales: 'Porozmawiaj z działem sprzedaży',
      trustBar: [
        'Infrastruktura zgodna z RODO',
        'Systemy hostowane w UE',
        'Szyfrowana komunikacja z pacjentem'
      ]
    },
    features: {
      title: 'Systemy komunikacji medycznej nigdy nie były projektowane pod kątem skali',
      subtitle: 'Nowoczesne organizacje ochrony zdrowia polegają na rozproszonych systemach komunikacji, które powodują nieefektywność operacyjną, przeciążenie administracyjne i fragmentaryczne doświadczenia pacjentów.',
      reality: {
        badge: 'Rozproszona rzeczywistość',
        title: 'Zespoły medyczne są zmuszone zarządzać komunikacją z pacjentami poprzez wiele oddzielnych kanałów i ręcznych procesów:',
        description: 'Nowoczesne organizacje ochrony zdrowia zarządzają komunikacją z pacjentami poprzez rozproszone systemy, które nie zostały zaprojektowane dla dzisiejszych wymagań operacyjnych.',
        list: [
          'Połączenia telefoniczne',
          'Wiadomości WhatsApp',
          'Planowanie wizyt',
          'Dalsze działania i przypomnienia',
          'Koordynacja recepcji',
          'Procesy administracyjne'
        ]
      },
      inefficiency: {
        badge: 'Wynikająca nieefektywność',
        title: 'Wąskie gardła operacyjne i zmęczenie administracyjne',
        list: [
          'Pominięte interakcje z pacjentami i brak kontynuacji',
          'Opóźnione czasy reakcji w komunikacji',
          'Przeciążone zespoły recepcji i administracji',
          'Luki w wizytach i utracone możliwości planowania',
          'Wąskie gardła w komunikacji między działami',
          'Zwiększona ręczna koordynacja i powtarzalne zadania',
          'Zmniejszona produktywność i wydajność personelu',
          'Niespójne doświadczenia w komunikacji z pacjentem'
        ]
      },
      insight: {
        title: 'Wyzwanie w nowoczesnej opiece zdrowotnej nie dotyczy już popytu ze strony pacjentów — dotyczy ono skalowalności operacyjnej.',
        description: 'Przestarzałe systemy komunikacji i rozproszone procesy administracyjne powodują nieefektywność w organizacjach ochrony zdrowia.'
      }
    },
    capabilities: {
      title: 'Możliwości platformy',
      subtitle: 'Inteligentna infrastruktura dla nowoczesnych zespołów medycznych',
      description: 'GreenLane łączy możliwości, których organizacje opieki zdrowotnej potrzebują, aby połączyć komunikację, zaangażowanie i operacyjne przepływy pracy.',
      list: [
        { title: 'Głosowa recepcja AI', desc: 'Obsługuj połączenia od pacjentów natychmiast dzięki systemom głosowym opartym na AI z inteligentnym kierowaniem i koordynacją komunikacji.' },
        { title: 'Inteligentna koordynacja wizyt', desc: 'Automatyzuj planowanie wizyt, potwierdzenia, przypomnienia i dalsze działania z pacjentami we wszystkich kanałach komunikacji.' },
        { title: 'WhatsApp i wiadomości dla pacjentów', desc: 'Scentralizuj komunikację z pacjentami przez WhatsApp, SMS i wiadomości cyfrowe w ramach jednej zintegrowanej platformy.' },
        { title: 'Automatyzacja procesów', desc: 'Redukuj powtarzalne zadania administracyjne i usprawniaj codzienne operacje medyczne dzięki inteligentnej automatyzacji.' },
        { title: 'Eskalacja do człowieka i współpraca zespołowa', desc: 'Automatycznie przekazuj wrażliwe lub złożone interakcje z pacjentami personelowi medycznemu, gdy tylko potrzebna jest interwencja człowieka.' },
        { title: 'Analityka operacyjna i widoczność', desc: 'Monitoruj aktywność komunikacyjną, wydajność odpowiedzi i efektywność procesów w całej organizacji ochrony zdrowia.' }
      ]
    },
    howItWorks: {
      title: 'Jak to działa',
      desc: 'GreenLane centralizuje komunikację i automatyzuje koordynację operacyjną w celu poprawy wydajności.',
      steps: [
        { title: 'Pacjenci kontaktują się z kliniką', desc: 'Pacjenci łączą się poprzez połączenia telefoniczne, WhatsApp, prośby o wizytę, przypomnienia i cyfrowe kanały komunikacji.' },
        { title: 'AI zarządza przyjmowaniem komunikacji', desc: 'AI rejestruje prośby pacjentów, odpowiada na typowe zapytania i automatycznie kieruje rozmowy.' },
        { title: 'Procesy administracyjne są automatyzowane', desc: 'Planowanie, potwierdzenia, przypomnienia i działania następcze są przetwarzane automatycznie we wszystkich kanałach komunikacji.' },
        { title: 'Zespoły ludzkie zachowują kontrolę', desc: 'Wrażliwe, pilne lub złożone interakcje są płynnie przekazywane personelowi medycznemu, gdy tylko potrzebna jest interwencja człowieka.' },
        { title: 'Operacje medyczne stają się wydajniejsze', desc: 'Placówki medyczne redukują obciążenie administracyjne, poprawiają czasy reakcji i usprawniają codzienne operacje.' }
      ]
    },
    pricing: {
      title: 'Prosty cennik dla nowoczesnej medycyny',
      subtitle: 'Wybierz plan dopasowany do potrzeb operacyjnych Twojej kliniki.',
      monthly: 'Rozliczenie miesięczne',
      annual: 'Rozliczenie roczne',
      save: 'Oszczędź 20%',
      getStarted: 'Zacznij teraz',
      mostPopular: 'Polecane',
      whatsIncluded: "Co zawiera plan",
      custom: 'Cena indywidualna',
      perMonth: '/mies.',
      plans: [
        {
          name: 'Starter',
          desc: 'Dla małych klinik i praktyk prywatnych',
          price: '€186',
          features: [
            'Głosowa recepcja AI dla połączeń pacjentów',
            'Automatyzacja planowania wizyt',
            'Procesy WhatsApp i wiadomości dla pacjentów',
            'Automatyczne przypomnienia dla pacjentów',
            'Podstawowa automatyzacja procesów',
            'Wsparcie e-mail'
          ]
        },
        {
          name: 'Scale',
          desc: 'Dla rosnących organizacji medycznych',
          price: '€289',
          features: [
            'Zawiera wszystko w planie Starter, plus:',
            'Zaawansowana automatyzacja procesów',
            'Zarządzanie komunikacją wielokanałową',
            'Panel analityki operacyjnej',
            'Wsparcie priorytetowe',
            'Dostęp dla wielu użytkowników dla zespołów kliniki',
            'Ulepszone procesy koordynacji'
          ]
        },
        {
          name: 'Enterprise',
          desc: 'Dla wielooddziałowych grup medycznych',
          price: 'Cena indywidualna',
          cta: 'Zapytaj o cenę',
          features: [
            'Koordynacja komunikacji w wielu lokalizacjach',
            'Automatyzacja procesów klasy enterprise',
            'Dedykowane integracje (HIS / systemy)',
            'Dedykowane wdrożenie i konfiguracja',
            'Dostęp do API + wsparcie w zakresie zgodności',
            'Dedykowany opiekun konta',
            'Skalowalna infrastruktura operacyjna'
          ]
        }
      ]
    },

    pricingIn: {
      plans: [
        {
          name: 'Starter',
          desc: 'Dla małych klinik i niezależnych praktyk',
          features: [
            'Rezerwacja wizyt przez AI WhatsApp',
            'Zautomatyzowane przypomnienia o wizytach',
            'Zmiana terminu i anulowanie',
            'Integracja z Kalendarzem Google',
            'Przepływy wiadomości pacjentów',
            'Podstawowa automatyzacja przepływu pracy',
            'Podstawowy panel kontrolny',
            'Wsparcie e-mail'
          ]
        },
        {
          name: 'Scale',
          desc: 'Dla rozwijających się organizacji opieki zdrowotnej',
          features: [
            'Wszystko w Starter, plus:',
            'Asystent WhatsApp napędzany AI',
            'Zaawansowana automatyzacja przepływu pracy',
            'Automatyzacja kontroli po wizycie',
            'Zbieranie opinii i recenzji',
            'Panel analityki operacyjnej',
            'Dostęp dla wielu użytkowników',
            'Wsparcie priorytetowe'
          ]
        },
        {
          name: 'Enterprise',
          desc: 'Dla szpitali i wielolokalizacyjnych grup opieki zdrowotnej',
          features: [
            'Zarządzanie wieloma lokalizacjami',
            'Automatyzacja przepływu pracy Enterprise',
            'Niestandardowe integracje (HIS / EHR / ERP)',
            'Dostęp do API',
            'Dedykowane wdrożenie',
            'Dedykowany opiekun konta',
            'Wsparcie zgodności i bezpieczeństwa',
            'Wsparcie SLA',
            'Niestandardowe automatyzacje AI'
          ]
        }
      ],
      addon: {
        title: 'Recepcja głosowa AI',
        badge: 'Opcjonalny dodatek',
        desc: 'Obejmuje: Całodobową recepcjonistkę AI, odbieranie połączeń, rezerwację wizyt przez telefon, przekazywanie połączeń, obsługę nieodebranych połączeń i obsługę wielojęzyczną.',
        price: 'Zaczyna się od ₹999',
        usage: '/miesiąc + zużycie',
        cta: 'Dodaj do planu'
      }
    },
    benefits: {
      title: 'Popraw wydajność operacyjną',
      subtitle: 'GreenLane zapewnia mierzalny wpływ operacyjny na komunikację medyczną i procesy administracyjne.',
      list: [
        'Automatyzuj powtarzalne procesy komunikacji z pacjentami',
        'Redukuj obciążenie administracyjne recepcji',
        'Popraw czasy reakcji i zyskaj wgląd w operacje kliniki',
        'Zmniejsz liczbę utraconych wizyt',
        'Scentralizuj zarządzanie komunikacją z pacjentami',
        'Usprawnij planowanie i koordynację operacyjną',
        'Popraw doświadczenia pacjentów we wszystkich kanałach komunikacji',
        'Zwiększ produktywność zespołu medycznego'
      ]
    },
    founder: {
      name: 'Manivannan Babu',
      role: 'Założyciel i CEO, GreenLane AI',
      bookMeeting: 'Umów spotkanie',
      connectLinkedin: 'Połącz się na LinkedIn',
      quote: '"Założyłem GreenLane AI z jedną misją: pomóc placówkom medycznym poświęcać mniej czasu na zadania administracyjne, a więcej na opiekę nad pacjentami. Wierzymy, że AI powinno wspierać zespoły medyczne — a nie je zastępować — poprzez automatyzację powtarzalnej komunikacji, przy jednoczesnym zachowaniu pełnej kontroli przez klinicystów."',
      bullets: [
        'Założyciel Digi Mabble, firmy zajmującej się sztuczną inteligencją i transformacją cyfrową.',
        'Tworzenie rozwiązań AI dla opieki zdrowotnej i firm europejskich.',
        'Skupienie na bezpiecznej i zgodnej z RODO technologii w ochronie zdrowia.',
        'Siedziba w Belgii z zespołami inżynieryjnymi i projektowymi w Europie i Indiach.',
        'Pasja do poprawy doświadczeń pacjentów poprzez odpowiedzialne AI.'
      ]
    },
    faq: {
      title: 'Często Zadawane Pytania',
      subtitle: 'Rozumiemy, że zespoły medyczne potrzebują jasności w kwestii bezpieczeństwa, wdrażania, cennika i wpływu operacyjnego przed wprowadzeniem automatyzacji.',
      contactSupport: 'Kontakt z pomocą',
      list: [
        { q: "Czy GreenLane jest odpowiedni dla mojego typu kliniki?", a: "Tak. GreenLane jest zaprojektowany dla klinik medycznych, gabinetów stomatologicznych, centrów fizjoterapii, klinik specjalistycznych i wielooddziałowych organizacji ochrony zdrowia." },
        { q: "Jak długo trwa wdrożenie?", a: "Typowe wdrożenie trwa 1–2 tygodnie, w zależności od wielkości kliniki i złożoności procesów." },
        { q: "Czy GreenLane integruje się z istniejącymi systemami?", a: "Tak. GreenLane może integrować się z systemami planowania, narzędziami komunikacyjnymi i procesami medycznymi poprzez API lub niestandardową konfigurację (plany Enterprise)." },
        { q: "Czy dane pacjentów są bezpieczne i zgodne z RODO?", a: "Tak. GreenLane jest zbudowany w architekturze zgodnej z RODO i korzysta z bezpiecznej infrastruktury hostowanej w UE z szyfrowanymi procesami komunikacji." },
        { q: "Co się dzieje, gdy AI nie może obsłużyć prośby?", a: "Wszystkie wrażliwe lub złożone interakcje z pacjentami są automatycznie przekazywane personelowi medycznemu." },
        { q: "Jakie kanały komunikacji są obsługiwane?", a: "GreenLane obsługuje połączenia telefoniczne (głos AI), WhatsApp, SMS, e-mail i wiadomości dla pacjentów w ramach jednej platformy." },
        { q: "Jak działa cennik?", a: "Oferujemy plany miesięczne i roczne w zależności od wielkości kliniki i potrzeb operacyjnych. Plany Enterprise obejmują ceny indywidualne i wsparcie dla wielu lokalizacji." },
        { q: "Czy GreenLane zastępuje nasz personel?", a: "Nie. GreenLane wspiera zespoły medyczne, automatyzując powtarzalne zadania komunikacyjne i administracyjne, podczas gdy personel zachowuje kontrolę nad opieką i decyzjami." },
        { q: "Czy mogę dostosować procesy do mojej kliniki?", a: "Tak. Procesy są konfigurowalne w zależności od struktury komunikacji i procesów operacyjnych Twojej kliniki." }
      ]
    },
    security: {
      title: 'Bezpieczeństwo, prywatność i zgodność z RODO przez projekt',
      desc1: 'Komunikacja medyczna wymaga czegoś więcej niż automatyzacji — wymaga bezpiecznej infrastruktury, kontrolowanego dostępu i architektury systemu skoncentrowanej na prywatności, zaprojektowanej pod kątem zgodności z przepisami i niezawodności operacyjnej.',
      desc2: 'GreenLane opiera się na zasadach RODO-first, z bezpiecznymi procesami komunikacji zaprojektowanymi specjalnie dla europejskich środowisk medycznych.',
      featuresTitle: 'Funkcje bezpieczeństwa i infrastruktury',
      features: [
        'Infrastruktura hostowana w UE',
        'Szyfrowane procesy komunikacji end-to-end',
        'Kontrola dostępu oparta na rolach (RBAC)',
        'Bezpieczna obsługa komunikacji z pacjentem',
        'Kontrolowane uprawnienia dostępu operacyjnego',
        'Architektura systemu zorientowana na medycynę',
        'Bezpieczna koordynacja procesów między zespołami'
      ],
      responsibleAiTitle: 'Odpowiedzialna AI',
      responsibleAiDesc: 'GreenLane został zaprojektowany, aby wspierać zespoły opieki zdrowotnej — a nie zastępować odpowiedzialność kliniczną.\nSztuczna inteligencja jest używana do zdefiniowanej komunikacji i operacyjnych przepływów pracy, podczas gdy wrażliwe, złożone i kliniczne decyzje podlegają odpowiedniemu nadzorowi ludzkiemu.',
      commitmentTitle: 'Zobowiązanie do ochrony danych',
      commitmentDesc: 'Wszystkie dane dotyczące komunikacji z pacjentami i procesów operacyjnych są przetwarzane w bezpiecznych europejskich środowiskach infrastrukturalnych, zaprojektowanych w celu spełnienia wymogów RODO i wspierania zgodności medycznej, ochrony prywatności i niezawodności operacyjnej.'
    },
    whoItsFor: {
      title: 'Zaprojektowane dla nowoczesnych organizacji medycznych',
      subtitle: 'Zbudowane dla dostawców usług medycznych zarządzających dużą ilością komunikacji z pacjentami i złożonymi procesami operacyjnymi w środowiskach jedno- lub wielooddziałowych.',
      providers: [
        'Kliniki medyczne', 'Gabinety stomatologiczne', 'Centra fizjoterapii', 
        'Kliniki specjalistyczne', 'Wielooddziałowe grupy medyczne', 'Prywatni dostawcy usług medycznych i sieci', 
        'Centra opieki ambulatoryjnej'
      ],
      roiDisclaimer: 'Rzeczywiste wyniki różnią się w zależności od wielkości organizacji, wolumenu komunikacji, przepływów pracy, konfiguracji i poziomu automatyzacji. Wyniki powinny być walidowane przez wdrożenia u klientów i pilotaże.',
      roiTitle: 'Wydajność operacyjna z mierzalnym wpływem',
      roiSubtitle: 'GreenLane poprawia wydajność komunikacji medycznej poprzez automatyzację interakcji z pacjentami i redukcję obciążenia administracyjnego w operacjach klinicznych.',
      stats: [
        { value: '70–80%', label: 'Automatyzacja powtarzalnych procesów komunikacji z pacjentami' },
        { value: '30–40%', label: 'Redukcja obciążenia administracyjnego i kosztów koordynacji' },
        { value: '900€–1,2k€', label: 'Szacowane miesięczne oszczędności przy bazie kosztów administracyjnych 3 000 €' }
      ],
      footerText: 'Od niezależnych praktyk po rosnące organizacje opieki zdrowotnej, GreenLane zapewnia fundament, który skaluje się z tym, jak działa opieka zdrowotna.',
    },
    implementation: {
      title: 'Proste wdrożenie dla zespołów medycznych',
      subtitle: 'Usprawniony 4-etapowy proces integracji GreenLane z operacjami Twojej kliniki.',
      steps: [
        { number: '1', title: 'Ocena procesów', desc: 'Analizujemy Twoje obecne przepływy komunikacji z pacjentami, proces planowania i koordynację administracyjną w Twojej klinice.' },
        { number: '2', title: 'Konfiguracja platformy', desc: 'Konfigurujemy kanały komunikacji, planowanie wizyt i procesy interakcji z pacjentami w oparciu o strukturę Twojej kliniki.' },
        { number: '3', title: 'Wdrożenie automatyzacji AI', desc: 'Aktywujemy automatyzację opartą na AI dla połączeń pacjentów, wiadomości, przypomnień i rutynowych zadań komunikacyjnych.' },
        { number: '4', title: 'Start i optymalizacja', desc: 'Twój system zaczyna działać z ciągłym monitorowaniem, korektami i stałą optymalizacją w oparciu o rzeczywiste wykorzystanie w klinice.' }
      ]
    },
    ctas: {
      title: 'Nowoczesne operacje medyczne wymagają nowoczesnej infrastruktury komunikacyjnej',
      subtitle: 'GreenLane centralizuje komunikację z pacjentami, automatyzuje procesy administracyjne i poprawia wydajność operacyjną dzięki bezpiecznej infrastrukturze opartej na AI, zbudowanej dla europejskich organizacji medycznych.',
      tagline: 'Zacznij od jednego przepływu pracy. Połącz swoje operacje opieki zdrowotnej. Skaluj z AI.',
      bookDemo: 'Umów demo',
      talkToTeam: 'Porozmawiaj z działem sprzedaży'
    },
    pillars: {
      title: 'Zbudowany dla europejskich operacji medycznych',
      subtitle: 'Jedna inteligentna platforma do komunikacji i operacji medycznych',
      description: 'GreenLane tworzy warstwę zasilaną przez sztuczną inteligencję między pacjentami, zespołami opieki zdrowotnej, przepływami pracy i systemami technologicznymi — pomagając organizacjom zautomatyzować powtarzalną pracę, zachowując kontrolę ludzi.',
      list: [
        { title: 'Infrastruktura specyficzna dla medycyny', desc: 'Zaprojektowana specjalnie dla klinik, dostawców usług medycznych i procesów komunikacji z pacjentami.' },
        { title: 'Architektura RODO-first', desc: 'Zbudowana na bezpiecznej europejskiej infrastrukturze z procesami skoncentrowanymi na prywatności i operacyjnym projekcie medycznym.' },
        { title: 'Komunikacja wielokanałowa', desc: 'Zarządzaj połączeniami głosowymi, WhatsApp, przypomnieniami o wizytach, planowaniem i wiadomościami dla pacjentów przez jedną scentralizowaną platformę.' },
        { title: 'Współpraca Człowiek + AI', desc: 'AI automatyzuje powtarzalne zadania komunikacyjne, podczas gdy zespoły medyczne zachowują nadzór nad wrażliwymi interakcjami.' },
        { title: 'Skalowalna wydajność operacyjna', desc: 'Wspieraj rosnące organizacje medyczne bez zwiększania obciążenia recepcji czy kosztów administracyjnych.' },
        { title: 'Niezawodna koordynacja medyczna', desc: 'Zbudowana w celu poprawy spójności komunikacji, koordynacji operacyjnej i codziennego zarządzania procesami medycznymi.' }
      ]
    },
    footer: {
      links: {
        whyGreenLane: 'Dlaczego GreenLane',
        problem: 'Problem',
        solution: 'Rozwiązanie',
        capabilities: 'Możliwości',
        howItWorks: 'Jak to działa',
        pricing: 'Cennik'
      },
      tagline: 'Operacyjna infrastruktura dla nowoczesnej medycyny. Bezpieczna, zgodna z RODO i wydajna platforma zbudowana dla Europy.',
      copyright: '© 2026 GreenLane AI. powered by Digi Mabble',
      platform: 'Platforma',
      legal: 'Prawne',
      support: 'Pomoc',
      compliance: 'Bezpieczeństwo i Zgodność',
      socials: 'Społeczności',
      newsletterTitle: 'Bądź na bieżąco',
      newsletterPlaceholder: 'Wpisz swój adres e-mail',
      newsletterButton: 'ZAPISZ SIĘ DO NEWSLETTERA',
      gdpr: 'Zgodność z RODO',
      privacy: 'Polityka prywatności',
      terms: 'Warunki korzystania',
      cookieSettings: 'Ustawienia plików cookie',
      contact: 'Kontakt',
      subscribeSuccess: 'Dziękujemy za subskrypcję!',
      subscribeError: 'Coś poszło nie tak. Spróbuj ponownie.'
    },
    bookDemoSection: {
      title: 'Zaplanuj spersonalizowaną wersję demonstracyjną',
      subtitle: 'Zobacz, jak GreenLane AI pomaga placówkom opieki zdrowotnej usprawnić komunikację z pacjentami, zautomatyzować przypomnienia i poprawić zaangażowanie pacjentów.',
      form: {
        fullName: 'Imię i nazwisko',
        workEmail: 'Służbowy e-mail',
        clinicName: 'Nazwa kliniki / szpitala',
        role: 'Rola / stanowisko',
        size: 'Liczba klinik lub pacjentów',
        message: 'Wiadomość',
        cta: 'Wyślij',
        submitting: 'Wysyłanie...'
      },
      success: {
        title: 'Wiadomość wysłana',
        subtitle: "Dziękujemy za kontakt. Odpowiemy w ciągu 1–2 dni roboczych.",
        cta: 'Wyślij kolejną wiadomość'
      },
      cards: {
        expect: {
          title: 'Czego można się spodziewać',
          items: [
            'Demo w ciągu 24 godzin',
            'Spersonalizowany przegląd procesów',
            'Komunikacja z pacjentem oparta na AI',
            'Wsparcie Q&A na żywo'
          ]
        },
        perfect: {
          title: 'Idealne dla',
          items: [
            'Kliniki',
            'Szpitale',
            'Dostawcy usług medycznych',
            'Zespoły ds. zaangażowania pacjentów'
          ]
        },
        get: {
          title: 'Co zyskujesz',
          items: [
            'Mniej nieobecności na wizytach',
            'Zautomatyzowane przypomnienia',
            'Szybsza komunikacja z pacjentem',
            'Lepsza wydajność operacyjna'
          ]
        }
      }
    },
    contact: {
      title: 'Skontaktuj się z nami',
      subtitle: 'Jesteśmy tutaj, aby pomóc! Powiedz nam, czego potrzebujesz, a ekspert skontaktuje się z Tobą w ciągu 24 godzin.',
      info: {
        address: {
          title: 'Adres',
          offices: [
            { name: 'Biuro w Wavre', address: 'Avenue Eiffel 8, 1300 Wavre, Belgia.' },
            { name: 'Biuro w Tallinnie', address: 'Tartu mnt 67/1, 10115 Tallinn, Estonia.' },
            { name: 'India', address: 'No.66/19, 8th street, Gopalapuram, Gandhinagar Vellore - 632 006, Tamilnadu, India' }
          ]
        },
        email: {
          title: 'Wyślij nam e-mail',
          items: ['info@digimabble.com']
        },
        phone: {
          title: 'Zadzwoń do nas',
          items: ['+32 467 85 99 60', '+91 8197017799']
        }
      },
      form: {
        name: 'Wpisz swoje imię',
        email: 'Adres e-mail',
        emailPlaceholder: 'przyklad@gmail.com',
        phone: 'Numer telefonu',
        phonePlaceholder: '(123) 456 - 7890',
        company: 'Firma',
        companyPlaceholder: 'Digi Mabble AI',
        message: 'Wiadomość',
        messagePlaceholder: 'Wpisz swoją wiadomość tutaj...',
        cta: 'Wyślij wiadomość'
      }
    },
    analytics: {
      badge: 'Wydajność operacyjna',
      title: 'Wydajność operacyjna z mierzalnym wpływem',
      subtitle: 'GreenLane pomaga organizacjom ochrony zdrowia poprawić wydajność komunikacji z pacjentami, jednocześnie redukując obciążenie administracyjne i złożoność koordynacji operacyjnej.',
      benefitsBadge: 'Korzyści operacyjne',
      benefitsTitle: 'Popraw widoczność i wydajność operacyjną',
      benefits: [
        'Automatyzuj powtarzalne procesy komunikacji z pacjentami',
        'Redukuj obciążenie administracyjne recepcji',
        'Popraw czasy reakcji w komunikacji',
        'Zmniejsz liczbę utraconych wizyt',
        'Usprawnij koordynację operacyjną między klinikami'
      ],
      stats: {
        automation: 'Automatyzacja procesów',
        workload: 'Redukcja obciążenia administracyjnego'
      },
      patientStatus: 'Status pacjenta',
      responded: 'Odpowiedziano',
      pending: 'Oczekujące'
    },
    cookieConsent: {
      title: 'Cenimy Twoją prywatność',
      description: 'Używamy plików cookie, aby ulepszyć przeglądanie stron, wyświetlać spersonalizowane reklamy lub treści oraz analizować nasz ruch. Klikając „Akceptuj wszystko”, wyrażasz zgodę na używanie przez nas plików cookie.',
      customize: 'Dostosuj',
      rejectAll: 'Odrzuć wszystko',
      acceptAll: 'Akceptuj wszystko',
      settingsTitle: 'Ustawienia plików cookie',
      settingsSubtitle: 'Zarządzaj swoimi preferencjami prywatności',
      essentialTitle: 'Niezbędne pliki cookie',
      essentialDesc: 'Niezbędne do prawidłowego funkcjonowania strony internetowej.',
      analyticsTitle: 'Analityczne pliki cookie',
      analyticsDesc: 'Pomóż nam ulepszać stronę, śledząc sposób jej użytkowania.',
      marketingTitle: 'Marketingowe pliki cookie',
      marketingDesc: 'Używane do spersonalizowanych reklam.',
      save: 'Zapisz preferencje',
      required: 'Wymagane'
    },
    contactModal: {
      title: 'Porozmawiaj z naszym działem sprzedaży',
      subtitle: "Wypełnij poniższy formularz, a skontaktujemy się z Tobą.",
      successTitle: 'Wiadomość wysłana!',
      successSubtitle: 'Dziękujemy za kontakt. Nasz zespół skontaktuje się z Tobą wkrótce.',
      close: 'Zamknij',
      sending: 'Wysyłanie...'
    },
    testimonials: {
      title: 'Zaufanie placówek medycznych w całej Europie',
      items: [
        { name: 'Lilianna Bocouse', role: 'Dyrektor kliniki', quote: '„GreenLane przekształcił sposób, w jaki obsługujemy komunikację z pacjentami. Głosowa recepcja AI zmniejszyła obciążenie naszej recepcji o 40%, zapewniając jednocześnie, że żadne połączenie od pacjenta nie pozostanie bez odpowiedzi. To infrastruktura, której nie wiedzieliśmy, że potrzebujemy.”' },
        { name: 'Darell Steward', role: 'Kierownik operacyjny', quote: '„Integracja z WhatsApp to przełom dla naszej kliniki specjalistycznej. Możemy teraz koordynować złożone wizyty i dalsze działania za pośrednictwem jednego bezpiecznego kanału, znacznie poprawiając czasy reakcji na zgłoszenia pacjentów i zmniejszając tarcia operacyjne.”' },
        { name: 'Annette Black', role: 'Kierownik praktyki', quote: '„Przejście na automatyczne planowanie GreenLane prawie wyeliminowało nieodebrane wizyty. System jest intuicyjny dla naszego personelu administracyjnego i niezwykle wygodny dla pacjentów, którzy preferują cyfrową koordynację.”' }
      ]
    },
    appDownload: {
      title: 'Pobierz aplikację GreenLane na dowolne urządzenie',
      subtitle: 'Dostępna jest już aplikacja mobilna, dzięki której możesz szybko i wygodnie śledzić dane pacjentów i komunikację w podróży.',
      editorsChoice: "Wybór redakcji",
      editorsChoiceStats: 'ocena 4.7, 187K+ recenzji',
      appOfDay: 'Aplikacja dnia',
      appOfDayStats: 'ocena 4.8, 30K+ recenzji'
    }
  },
  es: {
    navbar: {
      home: 'Inicio',
      whyNow: 'Por qué GreenLane',
      problem: 'Problema',
      solution: 'Solución',
      features: 'Características',
      howItWorks: 'Cómo funciona',
      pricing: 'Precios',
      faq: 'FAQ',
      contact: 'Contáctanos',
      bookDemo: 'Demo',
      selectLanguage: 'Seleccionar idioma',
    },
    hero: {
      highlight: 'Conecta a las personas. Automatiza los flujos de trabajo. Coordina la atención médica. Escala con IA.',
      badge: 'Una plataforma inteligente para la salud',
      title: 'Infraestructura operativa de IA para la comunicación sanitaria moderna',
      description1: 'GreenLane ayuda a los proveedores de atención médica a automatizar la comunicación con los pacientes, la coordinación de citas y los flujos de trabajo administrativos a través de una plataforma segura impulsada por IA creada para las organizaciones sanitarias europeas.',
      description2: 'Reduzca las llamadas perdidas, automatice las interacciones con los pacientes, aligere la carga de trabajo administrativa y agilice las operaciones sanitarias, con una infraestructura que prioriza el RGPD y flujos de trabajo de comunicación seguros diseñados para clínicas modernas.',
      bookDemo: 'Reservar demo en vivo',
      talkToSales: 'Hablar con ventas',
      trustBar: [
        'Infraestructura que prioriza el RGPD',
        'Sistemas alojados en la UE',
        'Comunicación con el paciente encriptada'
      ]
    },
    features: {
      title: 'Los sistemas de comunicación sanitaria nunca se construyeron para escalar',
      subtitle: 'Las organizaciones sanitarias modernas confían en sistemas de comunicación desconectados que crean ineficiencias operativas, sobrecarga administrativa y experiencias fragmentadas para los pacientes.',
      reality: {
        badge: 'La realidad fragmentada',
        title: 'Los equipos sanitarios se ven obligados a gestionar la comunicación con los pacientes a través de múltiples canales desconectados y flujos de trabajo manuales:',
        description: 'Las organizaciones sanitarias modernas gestionan la comunicación con los pacientes a través de sistemas fragmentados que no fueron diseñados para las demandas operativas actuales.',
        list: [
          'Llamadas telefónicas',
          'Mensajes de WhatsApp',
          'Programación de citas',
          'Seguimientos y recordatorios',
          'Coordinación de recepción',
          'Flujos de trabajo administrativos'
        ]
      },
      inefficiency: {
        badge: 'La ineficiencia resultante',
        title: 'Cuellos de botella operativos y fatiga administrativa',
        list: [
          'Seguimientos e interacciones con pacientes perdidos',
          'Tiempos de respuesta de comunicación retrasados',
          'Equipos de recepción y administrativos sobrecargados',
          'Brechas en las citas y oportunidades de programación perdidas',
          'Cuellos de botella en la comunicación entre departamentos',
          'Aumento de la coordinación manual y tareas repetitivas',
          'Reducción de la productividad y eficiencia del personal',
          'Experiencias de comunicación con el paciente inconsistentes'
        ]
      },
      insight: {
        title: 'El desafío de la atención médica moderna ya no es la demanda de los pacientes, sino la escalabilidad operativa.',
        description: 'Los sistemas de comunicación obsoletos y los flujos de trabajo administrativos fragmentados están creando ineficiencias en todas las organizaciones sanitarias.'
      }
    },
    capabilities: {
      title: 'Capacidades de la plataforma',
      subtitle: 'Infraestructura inteligente para equipos sanitarios modernos',
      description: 'GreenLane reúne las capacidades que las organizaciones de atención médica necesitan para conectar la comunicación, el compromiso y los flujos de trabajo operativos.',
      list: [
        { title: 'Recepción de voz por IA', desc: 'Gestione las llamadas de los pacientes al instante a través de sistemas de voz impulsados por IA con enrutamiento inteligente y coordinación de comunicaciones.' },
        { title: 'Coordinación inteligente de citas', desc: 'Automatice la programación de citas, confirmaciones, recordatorios y seguimientos de pacientes a través de todos los canales de comunicación.' },
        { title: 'WhatsApp y mensajería para pacientes', desc: 'Centralice la comunicación con los pacientes a través de WhatsApp, SMS y mensajería digital dentro de una plataforma unificada.' },
        { title: 'Automatización del flujo de trabajo', desc: 'Reduzca las tareas administrativas repetitivas y agilice las operaciones sanitarias diarias a través de la automatización inteligente.' },
        { title: 'Escalada a humanos y colaboración en equipo', desc: 'Transfiera automáticamente las interacciones complejas o sensibles de los pacientes al personal sanitario siempre que se necesite intervención humana.' },
        { title: 'Analítica operativa y visibilidad', desc: 'Supervise la actividad de comunicación, el rendimiento de las respuestas y la eficiencia del flujo de trabajo en toda su organización sanitaria.' }
      ]
    },
    howItWorks: {
      title: 'Cómo funciona',
      desc: 'GreenLane centraliza la comunicación y automatiza la coordinación operativa para mejorar la eficiencia.',
      steps: [
        { title: 'Los pacientes contactan con la clínica', desc: 'Los pacientes se conectan a través de llamadas telefónicas, WhatsApp, solicitudes de citas, recordatorios y canales de comunicación digital.' },
        { title: 'La IA gestiona la recepción de comunicaciones', desc: 'La IA captura las solicitudes de los pacientes, responde a consultas comunes y enruta las conversaciones automáticamente.' },
        { title: 'Los flujos de trabajo administrativos se automatizan', desc: 'La programación, confirmaciones, recordatorios y seguimientos de los pacientes se procesan automáticamente a través de todos los canales de comunicación.' },
        { title: 'Los equipos humanos mantienen el control', desc: 'Las interacciones sensibles, urgentes o complejas se escalan sin problemas al personal sanitario siempre que se necesite intervención humana.' },
        { title: 'Las operaciones sanitarias son más eficientes', desc: 'Los proveedores de atención médica reducen la carga de trabajo administrativa, mejorar los tiempos de respuesta y agilizan las operaciones diarias.' }
      ]
    },
    pricing: {
      title: 'Precios sencillos para la salud moderna',
      subtitle: 'Elija el plan que se adapte a las necesidades operativas de su clínica.',
      monthly: 'Facturación mensual',
      annual: 'Facturación anual',
      save: 'Ahorre 20%',
      getStarted: 'Comenzar',
      mostPopular: 'Recomendado',
      whatsIncluded: "Qué está incluido",
      custom: 'Precios personalizados',
      perMonth: '/mes',
      plans: [
        {
          name: 'Starter',
          desc: 'Para clínicas pequeñas y consultas independientes',
          price: '€186',
          features: [
            'Recepción de voz por IA para llamadas de pacientes',
            'Automatización de la programación de citas',
            'Flujos de WhatsApp y mensajería para pacientes',
            'Recordatorios automáticos para pacientes',
            'Automatización básica del flujo de trabajo',
            'Soporte por correo electrónico'
          ]
        },
        {
          name: 'Scale',
          desc: 'Para organizaciones sanitarias en crecimiento',
          price: '€289',
          features: [
            'Incluye todo lo de Starter, más:',
            'Automatización avanzada del flujo de trabajo',
            'Gestión de comunicación multicanal',
            'Panel de analítica operativa',
            'Soporte prioritario',
            'Acceso multiusuario para equipos de clínica',
            'Flujos de coordinación mejorados'
          ]
        },
        {
          name: 'Enterprise',
          desc: 'Para grupos sanitarios multisede',
          price: 'Precios personalizados',
          cta: 'Solicitar presupuesto',
          features: [
            'Coordinación de comunicaciones multisede',
            'Automatización de flujos de trabajo de nivel empresarial',
            'Integraciones personalizadas (HIS / sistemas)',
            'Onboarding y configuración dedicados',
            'Acceso a la API + soporte de cumplimiento',
            'Gestión de cuenta dedicada',
            'Infraestructura operativa escalable'
          ]
        }
      ]
    },

    pricingIn: {
      plans: [
        {
          name: 'Starter',
          desc: 'Para pequeñas clínicas y prácticas independientes',
          features: [
            'Reserva de citas por WhatsApp con IA',
            'Recordatorios automáticos de citas',
            'Reprogramación y cancelación',
            'Integración con Google Calendar',
            'Flujos de mensajes para pacientes',
            'Automatización básica del flujo de trabajo',
            'Panel básico',
            'Soporte por correo electrónico'
          ]
        },
        {
          name: 'Scale',
          desc: 'Para organizaciones de salud en crecimiento',
          features: [
            'Todo en Starter, más:',
            'Asistente de WhatsApp con IA',
            'Automatización avanzada del flujo de trabajo',
            'Automatización de seguimiento de pacientes',
            'Recopilación de reseñas y comentarios',
            'Panel de análisis operativo',
            'Acceso multiusuario',
            'Soporte prioritario'
          ]
        },
        {
          name: 'Enterprise',
          desc: 'Para hospitales y grupos de salud de múltiples ubicaciones',
          features: [
            'Gestión de múltiples ubicaciones',
            'Automatización del flujo de trabajo empresarial',
            'Integraciones personalizadas (HIS / EHR / ERP)',
            'Acceso API',
            'Incorporación dedicada',
            'Gerente de cuenta dedicado',
            'Soporte de cumplimiento y seguridad',
            'Soporte SLA',
            'Automatizaciones de IA personalizadas'
          ]
        }
      ],
      addon: {
        title: 'Recepción de Voz con IA',
        badge: 'Complemento Opcional',
        desc: 'Incluye: Recepcionista de IA 24/7, respuesta de llamadas, reserva de citas por teléfono, transferencias de llamadas, manejo de llamadas perdidas y soporte multilingüe.',
        price: 'A partir de ₹999',
        usage: '/mes + uso',
        cta: 'Añadir al plan'
      }
    },
    benefits: {
      title: 'Mejorar la eficiencia operativa',
      subtitle: 'GreenLane ofrece un impacto operativo medible a través de la comunicación sanitaria y los flujos de trabajo administrativos.',
      list: [
        'Automatizar los flujos de trabajo repetitivos de comunicación con los pacientes',
        'Reducir la carga de trabajo administrativa de la recepción',
        'Mejorar los tiempos de respuesta de los pacientes y ganar visibilidad en las operaciones de la clínica',
        'Reducir las oportunidades de citas perdidas',
        'Centralizar la gestión de la comunicación con los pacientes',
        'Agilizar la programación y la coordinación operativa',
        'Mejorar la experiencia del paciente a través de todos los canales de comunicación',
        'Aumentar la productividad del equipo sanitario'
      ]
    },
    founder: {
      name: 'Manivannan Babu',
      role: 'Fundador y CEO, GreenLane AI',
      bookMeeting: 'Reservar una reunión',
      connectLinkedin: 'Conectar en LinkedIn',
      quote: '"Fundé GreenLane AI con una misión: ayudar a los proveedores de atención médica a dedicar menos tiempo a tareas administrativas y más tiempo a atender a los pacientes. Creemos que la IA debe mejorar los equipos de salud —no reemplazarlos— automatizando la comunicación repetitiva y manteniendo a los médicos en control."',
      bullets: [
        'Fundador de Digi Mabble, una empresa de IA y transformación digital.',
        'Desarrollo de soluciones de IA para la salud y empresas europeas.',
        'Enfoque en tecnología de salud segura y compatible con el RGPD.',
        'Con sede en Bélgica y equipos de ingeniería y desarrollo de productos en Europa e India.',
        'Apasionado por mejorar la experiencia del paciente a través de una IA responsable.'
      ]
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Entendemos que los equipos sanitarios necesitan claridad sobre seguridad, implementación, precios e impacto operativo antes de adoptar la automatización.',
      contactSupport: 'Contactar con soporte',
      list: [
        { q: "¿Es GreenLane adecuado para mi tipo de clínica?", a: "Sí. GreenLane está diseñado para clínicas médicas, clínicas dentales, centros de fisioterapia, clínicas especializadas y organizaciones sanitarias multisede." },
        { q: "¿Cuánto tiempo dura el proceso de integración?", a: "La integración típica dura de 1 a 2 semanas, dependiendo del tamaño de la clínica y la complejidad del flujo de trabajo." },
        { q: "¿Se integra GreenLane con los sistemas existentes?", a: "Sí. GreenLane puede integrarse con sistemas de programación, herramientas de comunicación y flujos de trabajo sanitarios a través de API o configuración personalizada (planes Enterprise)." },
        { q: "¿Son seguros los datos de los pacientes y cumplen con el RGPD?", a: "Sí. GreenLane está construido con una arquitectura que prioriza el RGPD y utiliza una infraestructura segura alojada en la UE con flujos de trabajo de comunicación encriptados." },
        { q: "¿Qué sucede cuando la IA no puede gestionar una solicitud?", a: "Todas las interacciones complejas o sensibles de los pacientes se escalan automáticamente a su personal sanitario." },
        { q: "¿Qué canales de comunicación son compatibles?", a: "GreenLane admite llamadas telefónicas (voz por IA), WhatsApp, SMS, correo electrónico y flujos de trabajo de mensajería para pacientes en una sola plataforma." },
        { q: "¿Cómo funcionan los precios?", a: "Ofrecemos planes mensuales y anuales basados en el tamaño de la clínica y las necesidades operativas. Los planes Enterprise incluyen precios personalizados y soporte multisede." },
        { q: "¿GreenLane reemplaza a nuestro personal?", a: "No. GreenLane apoya a los equipos sanitarios automatizando las tareas administrativas y de comunicación repetitivas, mientras que el personal mantiene el control del cuidado y las decisiones." },
        { q: "¿Puedo personalizar los flujos de trabajo para mi clínica?", a: "Sí. Los flujos de trabajo son configurables según la estructura de comunicación y los procesos operativos de su clínica." }
      ]
    },
    security: {
      title: 'Seguridad, privacidad y cumplimiento del RGPD por diseño',
      desc1: 'La comunicación sanitaria requiere más que automatización: requiere una infraestructura segura, acceso controlado y una arquitectura de sistema que priorice la privacidad diseñada para el cumplimiento normativo y la fiabilidad operativa.',
      desc2: 'GreenLane se basa en los principios del RGPD, con flujos de trabajo de comunicación seguros diseñados específicamente para entornos sanitarios europeos.',
      featuresTitle: 'Características de seguridad e infraestructura',
      features: [
        'Infraestructura alojada en la UE',
        'Flujos de trabajo de comunicación encriptados de extremo a extremo',
        'Control de acceso basado en roles (RBAC)',
        'Gestión segura de la comunicación con el paciente',
        'Permisos de acceso operativo controlados',
        'Arquitectura de sistema orientada a la salud',
        'Coordinación segura del flujo de trabajo entre equipos'
      ],
      responsibleAiTitle: 'IA Responsable',
      responsibleAiDesc: 'GreenLane está diseñado para apoyar a los equipos de atención médica — no para reemplazar la responsabilidad clínica.\nLa IA se utiliza para flujos de trabajo operativos y de comunicación definidos, mientras que las decisiones sensibles, complejas y clínicas permanecen sujetas a una supervisión humana adecuada.',
      commitmentTitle: 'Compromiso de protección de datos',
      commitmentDesc: 'Todos los datos de comunicación con los pacientes y de los flujos de trabajo operativos se procesan en entornos de infraestructura europeos seguros, diseñados para cumplir con los requisitos del RGPD y respaldar el cumplimiento sanitario, la protección de la privacidad y la fiabilidad operativa.'
    },
    whoItsFor: {
      title: 'Diseñado para organizaciones sanitarias modernas',
      subtitle: 'Creado para proveedores de atención médica que gestionan un alto volumen de comunicación con los pacientes y flujos de trabajo operativos complejos en entornos de una o varias sedes.',
      providers: [
        'Clínicas médicas', 'Clínicas dentales', 'Centros de fisioterapia', 
        'Clínicas especializadas', 'Grupos sanitarios multisede', 'Redes y proveedores de salud privados', 
        'Centros de atención ambulatoria'
      ],
      roiDisclaimer: 'Los resultados reales varían según el tamaño de la organización, el volumen de comunicación, los flujos de trabajo, la configuración y el nivel de automatización. Los resultados deben validarse mediante implementaciones de clientes y pilotos.',
      roiTitle: 'Eficiencia operativa con impacto medible',
      roiSubtitle: 'GreenLane mejora la eficiencia de la comunicación sanitaria al automatizar las interacciones con los pacientes y reducir la carga de trabajo administrativa en las operaciones clínicas.',
      stats: [
        { value: '70–80%', label: 'Automatización de flujos de trabajo repetitivos de comunicación con pacientes' },
        { value: '30–40%', label: 'Reducción de la carga de trabajo administrativa y los gastos generales de coordinación' },
        { value: '900€–1.2K', label: 'Ahorro mensual estimado por cada base de costes administrativos de 3.000 €' }
      ],
      footerText: 'Desde prácticas independientes hasta organizaciones de atención médica en crecimiento, GreenLane proporciona una base que escala con la forma en que opera la atención médica.',
    },
    implementation: {
      title: 'Integración sencilla para equipos sanitarios',
      subtitle: 'Un proceso simplificado de 4 pasos para integrar GreenLane en las operaciones de su clínica.',
      steps: [
        { number: '1', title: 'Evaluación del flujo de trabajo', desc: 'Analizamos sus flujos actuales de comunicación con los pacientes, el proceso de programación y la coordinación administrativa en su clínica.' },
        { number: '2', title: 'Configuración de la plataforma', desc: 'Configuramos los canales de comunicación, la programación de citas y los flujos de trabajo de interacción con los pacientes según la estructura de su clínica.' },
        { number: '3', title: 'Despliegue de automatización de IA', desc: 'Activamos la automatización impulsada por IA para llamadas de pacientes, mensajería, recordatorios y tareas de comunicación rutinarias.' },
        { number: '4', title: 'Puesta en marcha y optimización', desc: 'Su sistema se pone en marcha con monitorización continua, ajustes y optimización continua basada en el uso real de la clínica.' }
      ]
    },
    ctas: {
      title: 'Las operaciones sanitarias requieren una infraestructura moderna',
      subtitle: 'GreenLane centraliza la comunicación con los pacientes, automatiza los flujos de trabajo administrativos y mejora la eficiencia operativa a través de una infraestructura segura impulsada por IA creada para las organizaciones sanitarias europeas.',
      tagline: 'Comienza con un flujo de trabajo. Conecta tu operación de atención médica. Escala con IA.',
      bookDemo: 'Reservar demo',
      talkToTeam: 'Hablar con ventas'
    },
    pillars: {
      title: 'Construido para las operaciones de salud europeas',
      subtitle: 'Una plataforma inteligente para la comunicación y operaciones de salud',
      description: 'GreenLane crea una capa impulsada por IA entre pacientes, equipos de atención médica, flujos de trabajo y sistemas tecnológicos — ayudando a las organizaciones a automatizar el trabajo repetitivo mientras mantienen a las personas en control.',
      list: [
        { title: 'Infraestructura específica para la salud', desc: 'Diseñada específicamente para clínicas, proveedores de salud y flujos de trabajo de comunicación con pacientes.' },
        { title: 'Arquitectura que prioriza el RGPD', desc: 'Basada en una infraestructura europea segura con flujos de trabajo centrados en la privacidad y un diseño operativo orientado a la salud.' },
        { title: 'Comunicación multicanal', desc: 'Gestione llamadas de voz, WhatsApp, recordatorios de citas, programación y mensajería para pacientes a través de una plataforma centralizada.' },
        { title: 'Colaboración Humano + IA', desc: 'La IA automatiza las tareas de comunicación repetitivas mientras los equipos de salud mantienen la supervisión de las interacciones sensibles.' },
        { title: 'Eficiencia operativa escalable', desc: 'Apoye a las organizaciones sanitarias en crecimiento sin aumentar la carga de trabajo de recepción ni los gastos generales administrativos.' },
        { title: 'Coordinación sanitaria confiable', desc: 'Creada para mejorar la consistencia de la comunicación, la coordinación operativa y la gestión diaria del flujo de trabajo sanitario.' }
      ]
    },
    footer: {
      links: {
        whyGreenLane: 'Por qué GreenLane',
        problem: 'Problema',
        solution: 'Solución',
        capabilities: 'Capacidades',
        howItWorks: 'Cómo funciona',
        pricing: 'Precios'
      },
      tagline: 'Infraestructura operativa para la sanidad moderna. Plataforma segura, eficiente y compatible con el RGPD diseñada para Europa.',
      copyright: '© 2026 GreenLane AI. impulsado por Digi Mabble',
      platform: 'Plataforma',
      legal: 'Legal',
      support: 'Soporte',
      compliance: 'Seguridad y Conformidad',
      socials: 'Redes',
      newsletterTitle: 'Mantente al día',
      newsletterPlaceholder: 'Introduce tu correo electrónico',
      newsletterButton: 'SUSCRÍBETE AL BOLETÍN',
      gdpr: 'Cumplimiento del RGPD',
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
      cookieSettings: 'Configuración de cookies',
      contact: 'Contacto',
      subscribeSuccess: '¡Gracias por suscribirte!',
      subscribeError: 'Algo salió mal. Por favor, inténtalo de nuevo.'
    },
    bookDemoSection: {
      title: 'Programe una demo personalizada',
      subtitle: 'Vea cómo GreenLane AI ayuda a los proveedores de atención médica a agilizar la comunicación con los pacientes, automatizar recordatorios y mejorar el compromiso del paciente.',
      form: {
        fullName: 'Nombre completo',
        workEmail: 'Correo electrónico de trabajo',
        clinicName: 'Nombre de la clínica / hospital',
        role: 'Rol / Puesto',
        size: 'Número de clínicas o pacientes',
        message: 'Message',
        cta: 'Enviar',
        submitting: 'Enviando...'
      },
      success: {
        title: 'Mensaje enviado',
        subtitle: "Gracias por contactar con nosotros. Le responderemos en un plazo de 1 a 2 días hábiles.",
        cta: 'Enviar otro mensaje'
      },
      cards: {
        expect: {
          title: 'Qué esperar',
          items: [
            'Demo en 24 horas',
            'Recorrido de flujo de trabajo personalizado',
            'Comunicación con el paciente por IA',
            'Soporte de preguntas y respuestas en vivo'
          ]
        },
        perfect: {
          title: 'Ideal para',
          items: [
            'Clínicas',
            'Hospitales',
            'Proveedores de salud',
            'Equipos de compromiso con el paciente'
          ]
        },
        get: {
          title: 'Lo que obtiene',
          items: [
            'Menos citas perdidas',
            'Recordatorios automatizados',
            'Comunicación con pacientes más rápida',
            'Mejor eficiencia operativa'
          ]
        }
      }
    },
    contact: {
      title: 'Ponte en contacto',
      subtitle: '¡Estamos aquí para ayudarte! Cuéntanos qué necesitas y un experto te responderá en un plazo de 24 horas.',
      info: {
        address: {
          title: 'Dirección',
          offices: [
            { name: 'Oficina de Wavre', address: 'Avenue Eiffel 8, 1300 Wavre, Bélgica.' },
            { name: 'Oficina de Tallin', address: 'Tartu mnt 67/1, 10115 Tallinn, Estonia.' },
            { name: 'India', address: 'No.66/19, 8th street, Gopalapuram, Gandhinagar Vellore - 632 006, Tamilnadu, India' }
          ]
        },
        email: {
          title: 'Envíanos un correo electrónico',
          items: ['info@digimabble.com']
        },
        phone: {
          title: 'Llámanos',
          items: ['+32 467 85 99 60', '+91 8197017799']
        }
      },
      form: {
        name: 'Ingresa tu nombre',
        email: 'Correo electrónico',
        emailPlaceholder: 'ejemplo@gmail.com',
        phone: 'Número de teléfono',
        phonePlaceholder: '(123) 456 - 7890',
        company: 'Empresa',
        companyPlaceholder: 'Digi Mabble AI',
        message: 'Mensaje',
        messagePlaceholder: 'Escribe tu mensaje aquí...',
        cta: 'Enviar mensaje'
      }
    },
    analytics: {
      badge: 'Eficiencia operativa',
      title: 'Eficiencia operativa con impacto medible',
      subtitle: 'GreenLane ayuda a las organizaciones sanitarias a mejorar la eficiencia de la comunicación con los pacientes, al tiempo que reduce la carga de trabajo administrativa y la complejidad de la coordinación operativa.',
      benefitsBadge: 'Beneficios operativos',
      benefitsTitle: 'Mejorar la visibilidad y eficiencia operativa',
      benefits: [
        'Automatizar los flujos de trabajo repetitivos de comunicación con los pacientes',
        'Reducir la sobrecarga administrativa de la recepción',
        'Mejorar los tiempos de respuesta de la comunicación',
        'Reducir las oportunidades de citas perdidas',
        'Agilizar la coordinación operativa entre clínicas'
      ],
      stats: {
        automation: 'Automatización de flujos de trabajo',
        workload: 'Reducción de la carga de trabajo administrativa'
      },
      patientStatus: 'Estado del paciente',
      responded: 'Respondido',
      pending: 'Pendiente'
    },
    cookieConsent: {
      title: 'Valoramos su privacidad',
      description: 'Utilizamos cookies para mejorar su experiencia de navegación, ofrecer anuncios o contenidos personalizados y analizar nuestro tráfico. Al hacer clic en "Aceptar todo", acepta nuestro uso de cookies.',
      customize: 'Personalizar',
      rejectAll: 'Rechazar todo',
      acceptAll: 'Aceptar todo',
      settingsTitle: 'Configuración de cookies',
      settingsSubtitle: 'Gestione sus preferencias de privacidad',
      essentialTitle: 'Cookies esenciales',
      essentialDesc: 'Necesarias para que el sitio web funcione correctamente.',
      analyticsTitle: 'Cookies analíticas',
      analyticsDesc: 'Ayúdenos a mejorar rastreando el uso del sitio.',
      marketingTitle: 'Cookies de marketing',
      marketingDesc: 'Utilizadas para anuncios personalizados.',
      save: 'Guardar preferencias',
      required: 'Obligatorio'
    },
    contactModal: {
      title: 'Hable con nuestro equipo de ventas',
      subtitle: "Complete el formulario a continuación y nos pondremos en contacto con usted.",
      successTitle: '¡Mensaje enviado!',
      successSubtitle: 'Gracias por contactar con nosotros. Nuestro equipo le responderá en breve.',
      close: 'Cerrar',
      sending: 'Enviando...'
    },
    testimonials: {
      title: 'Con la confianza de proveedores de atención médica en toda Europa',
      items: [
        { name: 'Lilianna Bocouse', role: 'Directora de Clínica', quote: '“GreenLane ha transformado la forma en que manejamos la comunicación con los pacientes. La recepción de voz por IA ha reducido nuestra carga de trabajo en recepción en un 40% al tiempo que garantiza que ninguna llamada de un paciente quede sin respuesta. Es la infraestructura que no sabíamos que necesitábamos.”' },
        { name: 'Darell Steward', role: 'Gerente de Operaciones', quote: '“La integración de WhatsApp es un cambio de juego para nuestra clínica de especialidades. Ahora podemos coordinar citas complejas y seguimientos a través de un único canal seguro, mejorando significativamente los tiempos de respuesta de los pacientes y reduciendo la fricción operativa.”' },
        { name: 'Annette Black', role: 'Gerente de Práctica', quote: '“El cambio a la programación automatizada de GreenLane casi ha eliminado las citas perdidas. El sistema es intuitivo para nuestro personal administrativo e increíblemente conveniente para nuestros pacientes que prefieren la coordinación digital.”' }
      ]
    },
    appDownload: {
      title: 'Descarga la aplicación GreenLane para cualquier dispositivo',
      subtitle: 'Ahora hay una aplicación móvil para que siempre puedas rastrear rápida y convenientemente tus datos de pacientes y comunicaciones sobre la marcha.',
      editorsChoice: "Elección del editor",
      editorsChoiceStats: 'calificación 4.7, 187K+ reseñas',
      appOfDay: 'Aplicación del día',
      appOfDayStats: 'calificación 4.8, 30K+ reseñas'
    }
  }
};
