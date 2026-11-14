// Comprehensive translation synchronization script for GreenLane AI
// Populates full translation parity for 'fr', 'nl', 'pl', 'es' matching 'en'

const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'src', 'translations', 'index.ts');
let fileContent = fs.readFileSync(srcPath, 'utf8');

// Parse current translations
const jsContent = fileContent
  .replace(/export type Locale[^;]+;/g, '')
  .replace(/export const translations\s*=\s*/, 'module.exports = ');

const tempPath = path.join(__dirname, 'temp_tr.js');
fs.writeFileSync(tempPath, jsContent);
const translations = require(tempPath);
fs.unlinkSync(tempPath);

// Dictionary additions
const frData = {
  incubation: {
    badge: 'INCUBATION & INNOVATION',
    title: 'Incubé avec l\'IIT Ropar',
    description: 'GreenLane AI développe des solutions intelligentes pour la communication médicale et les flux opérationnels de santé, avec le soutien de son écosystème d\'incubation.',
    subtext: 'Notre mission est de concevoir une IA pratique et responsable qui aide les établissements de santé à travailler plus intelligemment tout en restant centrés sur l\'humain.',
    linkText: 'Visiter le portail officiel de l\'IIT Ropar',
    footnote: 'Indian Institute of Technology Ropar — Écosystème d\'innovation technologique',
    ecosystem: 'Écosystème d\'institut d\'excellence'
  },
  benefits: {
    eyebrow: 'OPÉRATIONS DE SANTÉ PLUS INTELLIGENTES',
    title: 'Rendre les opérations de santé plus intelligentes',
    subtitle: 'La gestion quotidienne des soins exige une communication continue, une coordination rigoureuse et une charge administrative importante. GreenLane AI réunit communication intelligente et flux de travail connectés pour aider les établissements de santé à gagner en efficacité et offrir un meilleur parcours patient.',
    tagline: 'Une plateforme connectée. Des flux de travail plus intelligents. Des soins mieux coordonnés.',
    items: [
      {
        title: 'Connecter chaque interaction patient',
        desc: 'Regroupez les communications et suivis patients sur tous les canaux pris en charge.'
      },
      {
        title: 'Automatiser les flux de travail quotidiens',
        desc: 'Réduisez les tâches administratives répétitives grâce à une automatisation IA sécurisée pour des processus définis.'
      },
      {
        title: 'Améliorer la coordination des rendez-vous',
        desc: 'Aidez vos équipes à gérer plus efficacement les demandes de rendez-vous, la planification et les relances.'
      },
      {
        title: 'Répondre plus vite. Mieux interagir.',
        desc: 'Offrez des réponses instantanées et une communication cohérente tout au long du parcours patient.'
      },
      {
        title: 'Synchroniser les équipes soignantes',
        desc: 'Améliorez la visibilité et la coordination entre équipes, services médicaux et sites de consultation.'
      },
      {
        title: 'Développer votre activité avec efficacité',
        desc: 'Accompagnez l\'évolution de vos besoins opérationnels en limitant la dépendance au travail manuel répétitif.'
      }
    ]
  },
  founder: {
    eyebrow: 'LA VISION DERRIÈRE GREENLANE AI',
    title: 'La technologie doit redonner aux soignants le temps de soigner.',
    meetFounder: 'Rencontrer le Fondateur',
    foundationTitle: 'Nos Fondations',
    foundationItems: [
      {
        title: 'Conçu pour la santé',
        desc: 'Développement de solutions d\'IA répondant aux véritables défis opérationnels du secteur médical.'
      },
      {
        title: 'IA centrée sur l\'humain',
        desc: 'Conçue pour assister les équipes médicales tout en maintenant l\'entière décision clinique entre les mains des praticiens qualifiés.'
      },
      {
        title: 'Technologie respectueuse de la confidentialité',
        desc: 'Gestion rigoureuse et responsable des informations médicales selon les exigences réglementaires applicables.'
      },
      {
        title: 'Perspective internationale',
        desc: 'Une vision globale avec une présence commerciale et des activités de développement en Belgique, en Estonie et en Inde.'
      },
      {
        title: 'Innovation orientée vers l\'impact',
        desc: 'Améliorer la communication patient et l\'expérience des soins grâce à une IA éthique et responsable.'
      }
    ],
    vision: 'La technologie doit libérer du temps pour ce qui compte le plus : l\'écoute et le soin des patients.'
  },
  features: {
    eyebrow: 'RÉALITÉS & DÉFIS OPÉRATIONNELS',
    reality: {
      detailedList: [
        {
          title: 'Appels téléphoniques & demandes vocales',
          desc: 'Appels entrants des patients, demandes de renseignements et besoins d\'assistance immédiate.'
        },
        {
          title: 'Messagerie & WhatsApp',
          desc: 'Échanges et sollicitations dispersés sur de multiples canaux de messagerie.'
        },
        {
          title: 'Rendez-vous & Planification',
          desc: 'Demandes de réservation, modifications d\'horaires, confirmations et annulations.'
        },
        {
          title: 'Rappels & Suivis médicaux',
          desc: 'Information proactive des patients avant et après chaque consultation ou examen.'
        },
        {
          title: 'Accueil & Tâches administratives',
          desc: 'Tâches répétitives à l\'accueil qui s\'accumulent au détriment de l\'accueil physique.'
        },
        {
          title: 'Coordination interne des équipes',
          desc: 'Partage d\'informations et coordination des actions entre soignants, secrétariat et spécialistes.'
        },
        {
          title: 'Logiciels & Systèmes de santé',
          desc: 'Jonglage permanent entre outils disparates, DPI et dossiers de suivi opérationnel.'
        },
        {
          title: 'Communication tout au long du parcours',
          desc: 'Maintien de la continuité depuis la première prise de contact jusqu\'au suivi post-soin.'
        }
      ]
    },
    inefficiency: {
      eyebrow: 'POINTS DE FRICTION FRÉQUENTS',
      subtitle: 'Lorsque les interactions et les flux de travail sont fragmentés, les équipes et les patients en subissent les conséquences :',
      detailedList: [
        {
          title: 'Interactions manquées & suivis oubliés',
          desc: 'Les demandes de patients et les rappels risquent de se perdre lorsque les canaux ne sont pas centralisés.'
        },
        {
          title: 'Délais de réponse allongés',
          desc: 'Les équipes doivent consulter plusieurs logiciels pour répondre à de simples requêtes administratives.'
        },
        {
          title: 'Surcharge administrative répétitive',
          desc: 'Les tâches routinières consomment un temps précieux pour le personnel et créent une surcharge inutile.'
        },
        {
          title: 'Équipes d\'accueil débordées',
          desc: 'Le volume d\'appels et d\'envois de messages génère un stress important à la réception.'
        },
        {
          title: 'Créneaux de consultation perdus',
          desc: 'Des réponses tardives ou des confirmations absentes entraînent des rendez-vous non honorés.'
        },
        {
          title: 'Coordination manuelle complexe',
          desc: 'Temps excessif consacré à transmettre manuellement les consignes entre services.'
        },
        {
          title: 'Expérience patient hétérogène',
          desc: 'Une communication décousue donne aux patients une impression de manque de coordination.'
        },
        {
          title: 'Visibilité opérationnelle limitée',
          desc: 'Difficulté à suivre les tâches en attente et à évaluer la performance globale de la clinique.'
        }
      ]
    },
    insight: 'L\'opportunité : réunir la communication multicanale et l\'automatisation des flux pour redonner la priorité aux soins.'
  },
  pillars: {
    eyebrow: 'LA PLATEFORME GREENLANE AI',
    tagline: 'Une plateforme unifiée. Des flux connectés. Les professionnels aux commandes.',
    ctaExplore: 'Découvrir GreenLane AI',
    ctaBookDemo: 'Réserver une démo'
  },
  capabilities: {
    eyebrow: 'CAPACITÉS INTELLIGENTES',
    categories: [
      {
        number: '01',
        name: 'COMMUNIQUER',
        items: [
          {
            title: 'IA Vocale',
            desc: 'Gérez les appels patients, comprenez les demandes, transmettez des informations vérifiées et déclenchez les flux configurés grâce à une IA vocale.'
          },
          {
            title: 'Messagerie Patient',
            desc: 'Coordonnez les échanges via WhatsApp, SMS, web chat et les autres canaux de communication intégrés.'
          },
          {
            title: 'Engagement Patient',
            desc: 'Accompagnez le parcours de soins grâce à des rappels proactifs, alertes et suivis personnalisés.'
          }
        ]
      },
      {
        number: '02',
        name: 'COORDONNER',
        items: [
          {
            title: 'Coordination des Rendez-vous',
            desc: 'Facilitez les demandes, la prise de créneau, les confirmations, modifications et relances via des flux automatisés.'
          },
          {
            title: 'Escalade Humaine & Collaboration',
            desc: 'Transmettez les situations complexes ou sensibles aux équipes compétentes selon des règles d\'escalade bien établies.'
          },
          {
            title: 'Coordination des Flux de Travail',
            desc: 'Reliez les tâches, les professionnels et les services médicaux pour un suivi sans faille des dossiers.'
          }
        ]
      },
      {
        number: '03',
        name: 'AUTOMATISER',
        items: [
          {
            title: 'Automatisation des Processus',
            desc: 'Allégez la charge administrative récurrente en automatisant les démarches définies pour votre organisation.'
          },
          {
            title: 'Agents IA Spécialisés',
            desc: 'Déployez des compétences IA ciblées pour chaque besoin opérationnel, sous supervision et contrôle stricts.'
          }
        ]
      },
      {
        number: '04',
        name: 'COMPRENDRE',
        items: [
          {
            title: 'Intelligence Opérationnelle',
            desc: 'Analysez l\'activité des flux, les temps de réponse et la satisfaction globale grâce à des tableaux de bord clairs.'
          }
        ]
      }
    ],
    banner: {
      eyebrow: 'UNE PLATEFORME CONNECTÉE',
      title: 'Connectez la communication patient. Coordonnez le travail quotidien. Automatisez les tâches répétitives. Comprenez vos opérations.',
      ctaExplore: 'Explorer la plateforme',
      ctaDemo: 'Réserver une démo en direct'
    }
  },
  howItWorks: {
    eyebrow: 'COMMENT ÇA MARCHE',
    subtitle: 'Une intégration fluide en 6 étapes simples pour transformer la gestion de votre clinique.',
    banner: {
      eyebrow: 'OPÉRATIONS CONNECTÉES',
      title: 'Découvrez comment GreenLane AI s\'intègre à vos flux de travail',
      ctaDemo: 'Réserver une démo en direct',
      ctaTeam: 'Échanger avec notre équipe'
    }
  },
  whoItsFor: {
    description: 'Des solutions adaptées aux réalités opérationnelles de chaque structure de santé.',
    tagline: 'Une technologie souple, pensée pour s\'adapter à vos processus existants sans les perturber.',
    footerText: 'Que vous dirigiez un cabinet indépendant ou un groupe d\'établissements, GreenLane AI s\'adapte à vos exigences.',
    tiers: [
      {
        title: 'Cabinets & Praticiens Spécialistes',
        items: [
          'Cabinets médicaux',
          'Cabinets dentaires',
          'Centres de kinésithérapie et rééducation',
          'Cliniques de spécialistes',
          'Praticiens indépendants'
        ]
      },
      {
        title: 'Établissements en Croissance & Polycliniques',
        items: [
          'Groupes de cliniques multisites',
          'Centres de santé privés',
          'Structures de soins ambulatoires',
          'Hôpitaux et maisons de santé pluridisciplinaires'
        ]
      },
      {
        title: 'Écosystèmes & Réseaux de Soins Connectés',
        items: [
          'Réseaux hospitaliers régionaux',
          'Groupements de coopération sanitaire',
          'Plateformes innovantes de télésanté'
        ]
      }
    ]
  },
  operationalImpact: {
    eyebrow: 'IMPACT OPÉRATIONNEL',
    title: 'Transformez le temps administratif en temps pour soigner',
    subtitle: 'GreenLane AI aide les organisations de santé à réduire les tâches administratives répétitives, fluidifier les communications et accroître l\'efficacité grâce à l\'automatisation intelligente.',
    sectionTitle: 'Mesurer ce qui compte vraiment',
    metrics: [
      {
        value: '70–80%',
        title: 'Objectif d\'automatisation indicatif',
        desc: 'Fourchette indicative pour les tâches de communication répétitives éligibles dans les processus définis.'
      },
      {
        value: '30–40%',
        title: 'Réduction potentielle de la charge administrative',
        desc: 'Objectif indicatif pour les flux sélectionnés, selon l\'organisation, le déploiement et la couverture d\'automatisation.'
      },
      {
        value: '900 €–1 200 €',
        period: 'par mois',
        title: 'Équivalent financier indicatif estimé',
        desc: 'Calculé sur une base indicative de 3 000 € de coûts administratifs mensuels avec 30 à 40 % de réduction de charge. Ne constitue pas une garantie d\'économies directes.'
      }
    ],
    improvementTitle: 'Conçu pour des progrès mesurables',
    improvementText: 'Chaque établissement médical a ses spécificités. Les résultats réels varient selon le volume d\'appels, la complexité des processus, le coût du personnel et le degré d\'automatisation choisi.\n\nGreenLane AI aide votre organisation à établir un niveau de référence, évaluer les résultats lors de phases pilotes et identifier les axes d\'amélioration continue.',
    tagline: 'Commencez par un flux. Mesurez l' + "'impact. Déployez ce qui fonctionne.",
    ctaDemo: 'Réserver une démo en direct'
  },
  security: {
    eyebrow: 'CONFIDENTIALITÉ & SÉCURITÉ',
    featuresSubtitle: 'Notre plateforme applique les normes de sécurité les plus strictes requises dans le secteur médical.',
    standardsTitle: 'Normes de sécurité et conformité',
    standardsSubtitle: 'GreenLane AI est développé avec une sécurité de niveau entreprise conforme aux exigences modernes de la santé.',
    tagline: 'La confiance n\'est pas un simple badge. C\'est une responsabilité intégrée dès la conception de chaque composant.',
    ctaDiscuss: 'Échanger sur la sécurité et la conformité',
    items: [
      {
        title: 'Hébergement régional des données',
        desc: 'Options de localisation des données configurables selon vos exigences légales et opérationnelles.'
      },
      {
        title: 'Chiffrement & Protection des flux',
        desc: 'Protocoles de sécurité robustes pour les données en transit et les données stockées.'
      },
      {
        title: 'Contrôle d\'accès par rôle (RBAC)',
        desc: 'Autorisations strictement accordées selon les profils et responsabilités des collaborateurs.'
      },
      {
        title: 'Accès système sous haute surveillance',
        desc: 'Mesures de restriction d\'accès limitant strictement l\'usage aux utilisateurs autorisés.'
      },
      {
        title: 'Communication patient sécurisée',
        desc: 'Flux de messagerie et d\'appels conçus dans le plein respect de la confidentialité médicale.'
      },
      {
        title: 'Architecture dédiée au secteur santé',
        desc: 'Conception technique adaptée à la criticité et aux exigences des environnements hospitaliers.'
      },
      {
        title: 'Traçabilité, audit & conformité',
        desc: 'Journalisation détaillée et suivi en temps réel pour garantir une parfaite transparence opérationnelle.'
      },
      {
        title: 'Coordination encadrée des flux',
        desc: 'Garde-fous stricts régissant la circulation des informations entre intervenants et logiciels.'
      }
    ]
  },
  implementation: {
    description: 'Un accompagnement étape par étape pour un déploiement fluide et sans interruption d\'activité.',
    banner: {
      title: 'Commencez par un flux de travail. Évoluez à votre rythme.',
      text: 'GreenLane AI peut être initié sur un cas d\'usage ciblé, puis étendu progressivement à mesure que vos équipes gagnent en maîtrise et que les résultats sont confirmés.',
      ctaDiscovery: 'Réserver un appel découverte',
      ctaDemo: 'Réserver une démo en direct'
    }
  },
  pricing: {
    description: 'Des forfaits clairs et transparents adaptés à la taille de votre cabinet médical.',
    billedAnnually: 'Facturé annuellement',
    requestQuote: 'Demander un devis',
    footerNoteTitle: 'Tarification transparente. Évolution flexible.',
    footerNoteText: 'Les fonctionnalités incluses, les volumes d\'utilisation et les modalités d\'intégration varient selon le plan choisi. Contactez nos équipes pour analyser vos flux et choisir l\'offre idéale.'
  },
  faq: {
    description: 'Toutes les réponses à vos questions sur le fonctionnement, la sécurité et le déploiement de GreenLane AI.',
    stillHaveQuestions: {
      title: 'Vous avez d\'autres questions ?',
      description: 'Chaque structure de santé possède ses propres contraintes. Échangeons sur vos flux, votre infrastructure technique et vos priorités pour déterminer si GreenLane AI répond à vos attentes.',
      ctaDemo: 'Réserver une démo personnalisée',
      ctaContact: 'Contacter notre équipe'
    },
    list: [
      {
        q: 'GreenLane convient-il à mon type d\'établissement de santé ?',
        a: 'Oui. GreenLane AI s\'adapte aux cabinets médicaux, centres dentaires, cliniques spécialisées, cabinets pluridisciplinaires et réseaux d\'établissements hospitaliers grâce à sa conception modulaire.'
      },
      {
        q: 'Combien de temps prend la mise en route ?',
        a: 'La configuration initiale pour un flux prioritaire prend généralement quelques jours ouvrés. Notre équipe configure vos protocoles, vos horaires et forme vos collaborateurs sans aucune interruption de service.'
      },
      {
        q: 'GreenLane peut-il s\'intégrer à nos logiciels existants ?',
        a: 'Oui. GreenLane AI est conçu pour collaborer avec les principaux logiciels de gestion de cabinet, dossiers patients informatisés (DPI) et systèmes d\'agenda via des connecteurs API et protocoles sécurisés.'
      },
      {
        q: 'Les données de santé de nos patients sont-elles sécurisées ?',
        a: 'Absolument. La sécurité et la confidentialité sont au cœur de notre architecture. Toutes les données sont chiffrées en transit et au repos, avec des options d\'hébergement régional conformes aux standards médicaux.'
      },
      {
        q: 'GreenLane est-il conforme au RGPD ?',
        a: 'Oui. GreenLane AI applique rigoureusement les principes du RGPD (minimisation des données, consentement, droit à l\'effacement et traçabilité complète des traitements de données de santé).'
      },
      {
        q: 'Que se passe-t-il lorsque l\'IA ne peut pas traiter une demande ?',
        a: 'L\'interaction est immédiatement transférée à votre secrétariat ou soignant référent avec l\'historique complet de la conversation, assurant une continuité parfaite sans aucune frustration pour le patient.'
      },
      {
        q: 'Quels canaux de communication GreenLane prend-il en charge ?',
        a: 'GreenLane AI prend en charge les appels téléphoniques vocaux, WhatsApp, les SMS et le chat en ligne sur votre site web, tous centralisés dans un tableau de bord unique.'
      },
      {
        q: 'GreenLane a-t-il pour vocation de remplacer notre personnel ?',
        a: 'Non. GreenLane AI est un assistant conçu pour décharger vos équipes soignantes et d\'accueil des tâches administratives répétitives, leur permettant de consacrer plus de temps à l\'écoute et aux soins.'
      },
      {
        q: 'Les flux de travail peuvent-ils être personnalisés ?',
        a: 'Oui. Chaque réponse, consigne, protocole de prise de rendez-vous et règle d\'escalade est entièrement paramétrable selon les pratiques spécifiques de votre clinique.'
      },
      {
        q: 'GreenLane peut-il être utilisé en dehors de l\'Europe ?',
        a: 'Oui. GreenLane AI est conçu pour s\'adapter aux contextes internationaux et aux réglementations locales de protection des données, avec une présence en Belgique, en Estonie et en Inde.'
      },
      {
        q: 'GreenLane est-il uniquement dédié à la communication patient ?',
        a: 'Non. En plus de la communication multicanale, GreenLane AI coordonne les plannings, les rappels post-consultation, les flux internes entre équipes et l\'automatisation administrative globale.'
      }
    ]
  },
  contact: {
    info: {
      phone: {
        displayList: ['Belgique: +32 ...', 'Estonie: +372 ...', 'Inde: +91 ...']
      }
    },
    form: {
      title: 'Parlez-nous de vos besoins',
      description: 'Présentez-nous votre établissement, les flux que vous souhaitez optimiser ou les défis que vous cherchez à résoudre.',
      name: 'Votre nom complet',
      namePlaceholder: 'Dr. Sarah Martin',
      email: 'Adresse e-mail professionnelle',
      emailPlaceholder: 'sarah@clinique.fr',
      phone: 'Numéro de téléphone',
      phonePlaceholder: '+33 ... / +32 ...',
      company: 'Nom de l\'établissement',
      companyPlaceholder: 'Centre Médical Saint-Honoré',
      role: 'Votre fonction',
      rolePlaceholder: 'Directeur de clinique / Médecin / Responsable d\'exploitation',
      country: 'Pays',
      countryPlaceholder: 'Belgique / France / Estonie / Autre',
      message: 'Quel sujet souhaitez-vous aborder ?',
      messagePlaceholder: 'Décrivez votre structure, le volume d\'appels ou les processus que vous aimeriez automatiser...',
      cta: 'Envoyer ma demande',
      privacyNotice: 'Vos informations sont traitées dans le strict respect de notre Politique de Confidentialité.',
      closingNote: 'Nous serons ravis d\'échanger sur vos projets et de vous montrer comment GreenLane AI peut soutenir vos équipes.'
    }
  },
  ctas: {
    talkToSales: 'Échanger avec l\'équipe commerciale'
  },
  footer: {
    newsletterSubtitle: 'Recevez nos actualités sur GreenLane AI, l\'innovation en santé et l\'avenir des opérations médicales intelligentes.',
    newsletterDisclaimer: 'En vous abonnant, vous acceptez de recevoir les communications de GreenLane AI. Vous pouvez vous désinscrire à tout moment. Consultez notre Politique de Confidentialité.',
    bookDemo: 'Réserver une démo'
  },
  cookieConsent: {
    essential: 'Essentiels',
    analytics: 'Analytiques',
    marketing: 'Marketing',
    savePreferences: 'Enregistrer mes préférences',
    privacyPolicy: 'Politique de Confidentialité',
    cookiePolicy: 'Politique des Cookies'
  },
  contactModal: {
    name: 'Votre nom',
    email: 'E-mail professionnel',
    phone: 'Téléphone',
    organization: 'Établissement',
    role: 'Fonction',
    country: 'Pays',
    message: 'Votre message',
    submit: 'Envoyer ma demande',
    submitting: 'Envoi en cours...',
    success: 'Merci ! Votre demande a bien été reçue. Notre équipe vous recontactera sous un jour ouvré.'
  }
};

// Now Dutch (nl)
const nlData = {
  incubation: {
    badge: 'INCUBATIE & INNOVATIE',
    title: 'Geïncubeerd bij IIT Ropar',
    description: 'GreenLane AI ontwikkelt intelligente oplossingen voor zorgcommunicatie en operationele zorgworkflows, ondersteund door haar incubatie-ecosysteem.',
    subtext: 'Onze focus ligt op het bouwen van praktische, verantwoorde AI die zorgorganisaties helpt slimmer te werken en mensgericht te blijven.',
    linkText: 'Bezoek de officiële IIT Ropar portal',
    footnote: 'Indian Institute of Technology Ropar — Technologisch Innovatie-ecosysteem',
    ecosystem: 'Topinstituut Innovatie-ecosysteem'
  },
  benefits: {
    eyebrow: 'SLIMMERE ZORGOPERATIES',
    title: 'Maak zorgoperaties intelligenter',
    subtitle: 'Zorgoperaties vragen continue communicatie, coördinatie en administratief werk. GreenLane AI brengt intelligente communicatie en gekoppelde workflows samen om zorgorganisaties efficiënter te laten werken en patiënten een betere ervaring te bieden.',
    tagline: 'Eén verbonden platform. Slimmere workflows. Beter gecoördineerde zorg.',
    items: [
      {
        title: 'Verbind elke patiëntinteractie',
        desc: 'Breng patiëntcommunicatie en follow-ups samen via alle ondersteunde kanalen.'
      },
      {
        title: 'Automatiseer dagelijkse workflows',
        desc: 'Verminder repetitieve administratie met AI-gestuurde automatisering voor vastgelegde processen.'
      },
      {
        title: 'Verbeter afspraakcoördinatie',
        desc: 'Help teams afspraakvragen, planning en opvolging veel effectiever te beheren.'
      },
      {
        title: 'Reageer sneller. Betrek beter.',
        desc: 'Bied tijdige reacties en consistente communicatie doorheen het gehele patiënttraject.'
      },
      {
        title: 'Breng teams op één lijn',
        desc: 'Verbeter overzicht en samenwerking tussen zorgteams, afdelingen en locaties.'
      },
      {
        title: 'Schaal met grotere efficiëntie',
        desc: 'Ondersteun groeiende behoeften met workflows ontworpen om handmatig werk te minimaliseren.'
      }
    ]
  },
  founder: {
    eyebrow: 'DE VISIE ACHTER GREENLANE AI',
    title: 'Technologie moet zorgverleners meer tijd geven om te zorgen.',
    meetFounder: 'Ontmoet de Oprichter',
    foundationTitle: 'Onze Grondslagen',
    foundationItems: [
      {
        title: 'Gebouwd voor de zorg',
        desc: 'Ontwikkeling van AI-oplossingen die echte operationele knelpunten in de zorg aanpakken.'
      },
      {
        title: 'Mensgerichte AI',
        desc: 'Ontworpen om zorgteams te ondersteunen, terwijl klinische beslissingen volledig bij gekwalificeerde artsen blijven.'
      },
      {
        title: 'Privacy-bewuste technologie',
        desc: 'Gericht op verantwoorde gegevensverwerking conform toepasselijke privacywetgeving.'
      },
      {
        title: 'Internationaal perspectief',
        desc: 'Een globale blik met zakelijke aanwezigheid en productontwikkeling in België, Estland en India.'
      },
      {
        title: 'Doelgerichte innovatie',
        desc: 'Patiëntcommunicatie en zorgervaringen verbeteren via verantwoorde AI.'
      }
    ],
    vision: 'Technologie moet tijd vrijmaken voor wat er echt toe doet: persoonlijke aandacht voor de patiënt.'
  },
  features: {
    eyebrow: 'DAGELIJKSE ZORGREALITEIT & UITDAGINGEN',
    reality: {
      detailedList: [
        {
          title: 'Telefoongesprekken & Gesproken Vragen',
          desc: 'Inkomende patiëntoproepen, vragen en verzoeken om ondersteuning.'
        },
        {
          title: 'Berichten & WhatsApp',
          desc: 'Gesprekken en vragen verspreid over verschillende messaging-kanalen.'
        },
        {
          title: 'Afspraken & Planning',
          desc: 'Boekingsverzoeken, wijzigingen, bevestigingen en annuleringen.'
        },
        {
          title: 'Herinneringen & Opvolging',
          desc: 'Patiënten proactief informeren voor en na consultaties of onderzoeken.'
        },
        {
          title: 'Receptie & Administratie',
          desc: 'Repetitieve taken die concurreren met persoonlijke patiëntontvangst.'
        },
        {
          title: 'Interne Teamcoördinatie',
          desc: 'Informatie delen en acties afstemmen tussen artsen, balie en specialisten.'
        },
        {
          title: 'Zorgsoftware & EPD-systemen',
          desc: 'Voortdurend schakelen tussen losse systemen, software en dossiers.'
        },
        {
          title: 'Patiëntcommunicatie over het gehele traject',
          desc: 'Continuïteit behouden van de allereerste vraag tot nazorg en opvolging.'
        }
      ]
    },
    inefficiency: {
      eyebrow: 'VEELVOORKOMENDE KNELPUNTEN',
      subtitle: 'Wanneer communicatie en processen versnipperd zijn, ervaren zowel teams als patiënten frictie:',
      detailedList: [
        {
          title: 'Gemiste interacties & vergeten follow-ups',
          desc: 'Patiëntvragen en herinneringen kunnen tussen de wal en het schip vallen bij gefragmenteerde kanalen.'
        },
        {
          title: 'Tragere reactietijden',
          desc: 'Medewerkers moeten meerdere applicaties doorzoeken om eenvoudige vragen te beantwoorden.'
        },
        {
          title: 'Herhalend administratief werk',
          desc: 'Routinetaken kosten kostbare tijd van medewerkers en creëren onnodige werkdruk.'
        },
        {
          title: 'Overbelaste receptieteams',
          desc: 'Grote belvolumes en berichtenstromen leggen hoge druk op het baliepersoneel.'
        },
        {
          title: 'Verloren afspraakmomenten',
          desc: 'Vertraagde reacties leiden tot onbenutte spreekuren en gemiste consultaties.'
        },
        {
          title: 'Complexe handmatige afstemming',
          desc: 'Veel tijd gaat verloren aan het handmatig overdragen van instructies tussen collega\'s.'
        },
        {
          title: 'Inconsistente patiëntbeleving',
          desc: 'Gefragmenteerde communicatie geeft patiënten een onpersoonlijk en verwarrend gevoel.'
        },
        {
          title: 'Beperkt operationeel inzicht',
          desc: 'Moeilijk om openstaande taken te bewaken en de algehele praktijkprestaties te evalueren.'
        }
      ]
    },
    insight: 'De kans: breng communicatie en workflow-automatisering samen om de focus weer op zorg te leggen.'
  },
  pillars: {
    eyebrow: 'HET GREENLANE AI PLATFORM',
    tagline: 'Eén platform. Verbonden workflows. Zorgprofessionals in controle.',
    ctaExplore: 'Ontdek GreenLane AI',
    ctaBookDemo: 'Boek een Live Demo'
  },
  capabilities: {
    eyebrow: 'INTELLIGENTE CAPACITEITEN',
    categories: [
      {
        number: '01',
        name: 'COMMUNICEREN',
        items: [
          {
            title: 'AI Spraak',
            desc: 'Ondersteun patiëntgesprekken, begrijp verzoeken, geef gevalideerde info en start workflows via AI-spraak.'
          },
          {
            title: 'Patiëntberichten',
            desc: 'Beheer patiëntgesprekken soepel via WhatsApp, SMS, webchat en andere kanalen.'
          },
          {
            title: 'Patiëntbetrokkenheid',
            desc: 'Ondersteun het behandeltraject met automatische herinneringen, meldingen en opvolging.'
          }
        ]
      },
      {
        number: '02',
        name: 'COÖRDINEREN',
        items: [
          {
            title: 'Afspraakcoördinatie',
            desc: 'Ondersteun boekingsvragen, planning, bevestigingen en annuleringen via gekoppelde workflows.'
          },
          {
            title: 'Menselijke Escalatie & Samenwerking',
            desc: 'Draag complexe of gevoelige situaties direct over naar het juiste zorgpersoneel met context.'
          },
          {
            title: 'Workflowcoördinatie',
            desc: 'Koppel taken, medewerkers en processen voor een naadloze overdracht binnen uw praktijk.'
          }
        ]
      },
      {
        number: '03',
        name: 'AUTOMATISEREN',
        items: [
          {
            title: 'Workflow-automatisering',
            desc: 'Verlaag repetitief administratiewerk door vastgelegde processen automatisch uit te voeren.'
          },
          {
            title: 'Gespecialiseerde AI-agents',
            desc: 'Zet gerichte AI-vaardigheden in voor specifieke zorgprocessen, met strikt toezicht en waarborgen.'
          }
        ]
      },
      {
        number: '04',
        name: 'BEGRIJPEN',
        items: [
          {
            title: 'Operationele Intelligentie',
            desc: 'Krijg helder inzicht in communicatiestromen, responstijden en trends via overzichtelijke dashboards.'
          }
        ]
      }
    ],
    banner: {
      eyebrow: 'ÉÉN VERBONDEN PLATFORM',
      title: 'Verbind patiëntcommunicatie. Coördineer dagelijks werk. Automatiseer repetitieve taken. Begrijp uw operaties.',
      ctaExplore: 'Verken het platform',
      ctaDemo: 'Boek een Live Demo'
    }
  },
  howItWorks: {
    eyebrow: 'HOE HET WERKT',
    subtitle: 'Een soepele implementatie in 6 eenvoudige stappen voor uw zorgpraktijk.',
    banner: {
      eyebrow: 'VERBONDEN PRAKTIJK',
      title: 'Ontdek hoe GreenLane AI naadloos aansluit op uw praktijk',
      ctaDemo: 'Boek een Live Demo',
      ctaTeam: 'Praat met ons team'
    }
  },
  whoItsFor: {
    description: 'Oplossingen afgestemd op de operationele realiteit van elk type zorgorganisatie.',
    tagline: 'Ontworpen om direct aan te sluiten op uw bestaande klinische en administratieve processen.',
    footerText: 'Of u nu een zelfstandige praktijk runt of een zorggroep leidt, GreenLane AI schaalt mee.',
    tiers: [
      {
        title: 'Zelfstandige & Gespecialiseerde Praktijken',
        items: [
          'Huisartsenpraktijken en medische centra',
          'Tandartspraktijken en orthodontie',
          'Fysiotherapie en revalidatiecentra',
          'Gespecialiseerde privéklinieken',
          'Zelfstandige zorgverleners'
        ]
      },
      {
        title: 'Groeiende Zorginstellingen & Poliklinieken',
        items: [
          'Zorggroepen met meerdere locaties',
          'Particuliere zorgklinieken',
          'Ambulante zorgcentra',
          'Ziekenhuizen en multidisciplinaire zorgorganisaties'
        ]
      },
      {
        title: 'Verbonden Zorgnetwerken & Ecosystemen',
        items: [
          'Regionale zorgnetwerken',
          'Geïntegreerde zorggemeenschappen',
          'Digitale e-health platforms'
        ]
      }
    ]
  },
  operationalImpact: {
    eyebrow: 'OPERATIONELE IMPACT',
    title: 'Zet repetitief werk om in meer tijd voor patiëntenzorg',
    subtitle: 'GreenLane AI helpt zorgorganisaties repetitieve administratie te verminderen, communicatie te stroomlijnen en efficiëntie te vergroten via intelligente workflow-automatisering.',
    sectionTitle: 'Meet wat er echt toe doet',
    metrics: [
      {
        value: '70–80%',
        title: 'Indicatief automatiseringsdoel',
        desc: 'Een richtwaarde voor in aanmerking komende, repetitieve communicatietaken binnen vastgelegde workflows.'
      },
      {
        value: '30–40%',
        title: 'Potentiële reductie administratieve werklast',
        desc: 'Een indicatief doel voor geselecteerde processen, afhankelijk van praktijkvoering, inrichting en dekkingsgraad.'
      },
      {
        value: '€900–€1.200',
        period: 'per maand',
        title: 'Indicatief geschat equivalent financieel voordeel',
        desc: 'Berekend op basis van een hypothetische administratieve kostenpost van €3.000/mnd met 30–40% werklastreductie. Geen garantie op directe kasbesparingen.'
      }
    ],
    improvementTitle: 'Gebouwd voor meetbare vooruitgang',
    improvementText: 'Elke zorgpraktijk werkt anders. Werkelijke resultaten hangen af van belvolume, complexiteit van processen, personeelskosten en de gekozen mate van automatisering.\n\nGreenLane AI helpt uw organisatie een nulmeting te verrichten, resultaten te meten in pilotfases en continue verbetermogelijkheden te benutten.',
    tagline: 'Start met één workflow. Meet de impact. Schaal wat werkt.',
    ctaDemo: 'Boek een Live Demo'
  },
  security: {
    eyebrow: 'PRIVACY & VEILIGHEID',
    featuresSubtitle: 'Ons platform voldoet aan de hoogste veiligheidsnormen die de moderne gezondheidszorg vereist.',
    standardsTitle: 'Veiligheidsnormen en compliance',
    standardsSubtitle: 'GreenLane AI is gebouwd met enterprise-grade beveiliging ontworpen voor strenge medische compliance.',
    tagline: 'Vertrouwen is geen badge. Het is een fundamentele verantwoordelijkheid die in elk detail is ingebouwd.',
    ctaDiscuss: 'Bespreek Beveiliging & Privacy',
    items: [
      {
        title: 'Regionale data-opslag',
        desc: 'Data-opslaglocaties afgestemd op geldende wetgeving en de wensen van uw organisatie.'
      },
      {
        title: 'Encryptie & Gegevensbescherming',
        desc: 'Solide beveiliging voor data in transit en, waar van toepassing, in rust.'
      },
      {
        title: 'Rolgebaseerd toegangsbeheer (RBAC)',
        desc: 'Toegangsrechten nauwgezet afgestemd op de rollen en taken van uw medewerkers.'
      },
      {
        title: 'Gecontroleerde systeemtoegang',
        desc: 'Toegangsbeperkingen die systemen strikt afschermen voor ongeautoriseerde gebruikers.'
      },
      {
        title: 'Veilige patiëntcommunicatie',
        desc: 'Communicatieworkflows ontworpen met privacy en medisch beroepsgeheim als uitgangspunt.'
      },
      {
        title: 'Zorggerichte architectuur',
        desc: 'Technisch ontwerp afgestemd op de sensitiviteit en operationele behoeften van zorgomgevingen.'
      },
      {
        title: 'Auditeerbaarheid & Verantwoording',
        desc: 'Nauwkeurige logging en monitoring ter ondersteuning van toezicht en verantwoording.'
      },
      {
        title: 'Gecontroleerde workflowcoördinatie',
        desc: 'Vastgelegde bevoegdheden voor informatieoverdracht tussen systemen en personeel.'
      }
    ]
  },
  implementation: {
    description: 'Een gestructureerde stapsgewijze aanpak voor een zorgeloze implementatie.',
    banner: {
      title: 'Begin met één workflow. Bouw vandaaruit verder.',
      text: 'GreenLane AI kan worden geïntroduceerd via een gerichte use-case en stapsgewijs worden uitgebreid naarmate uw team vertrouwd raakt met de resultaten.',
      ctaDiscovery: 'Plan een kennismakingsgesprek',
      ctaDemo: 'Boek een Live Demo'
    }
  },
  pricing: {
    description: 'Eenvoudige, transparante tarieven afgestemd op de schaal van uw zorgpraktijk.',
    billedAnnually: 'Jaarlijks gefactureerd',
    requestQuote: 'Vraag offerte aan',
    footerNoteTitle: 'Transparante Prijzen. Flexibele Groei.',
    footerNoteText: 'Beschikbare functionaliteiten, gebruikslimieten en implementatievereisten hangen af van het gekozen pakket. Neem contact op om uw behoeften te bespreken.'
  },
  faq: {
    description: 'Antwoorden op veelgestelde vragen over de functionaliteit, veiligheid en implementatie van GreenLane AI.',
    stillHaveQuestions: {
      title: 'Heeft u nog vragen?',
      description: 'Elke zorgorganisatie heeft eigen unieke vereisten. Laten we uw workflows en doelstellingen bespreken om te zien hoe GreenLane AI u kan ondersteunen.',
      ctaDemo: 'Boek een Live Demo',
      ctaContact: 'Neem contact op'
    },
    list: [
      {
        q: 'Is GreenLane geschikt voor mijn type zorgorganisatie?',
        a: 'Zeker. GreenLane AI is geschikt voor medische praktijken, tandartsen, fysiotherapiecentra, privéklinieken en ziekenhuisgroepen dankzij de modulaire opzet.'
      },
      {
        q: 'Hoeveel tijd kost de implementatie?',
        a: 'De basisinrichting voor een eerste workflow is meestal binnen enkele werkdagen operationeel. Ons team helpt met instellingen en instructies zonder praktijkonderbreking.'
      },
      {
        q: 'Kan GreenLane integreren met onze bestaande systemen?',
        a: 'Ja. GreenLane AI is ontworpen om te koppelen met gangbare EPD-, agenda- en praktijksoftware via veilige API-koppelingen en protocollen.'
      },
      {
        q: 'Zijn patiëntgegevens veilig gewaarborgd?',
        a: 'Absoluut. Gegevens worden versleuteld verzonden en opgeslagen met regionale hostingopties die voldoen aan de strengste medische normen.'
      },
      {
        q: 'Is GreenLane AVG/GDPR compliant?',
        a: 'Ja. GreenLane AI voldoet volledig aan de AVG-vereisten, waaronder dataminimalisatie, toestemmingsbeheer en strikte geheimhoudingswaarborgen.'
      },
      {
        q: 'Wat gebeurt er als de AI een vraag niet kan beantwoorden?',
        a: 'De interactie wordt direct doorgestuurd naar uw balie of zorgverlener met het volledige gespreksverslag, zodat de patiënt direct geholpen wordt.'
      },
      {
        q: 'Welke communicatiekanalen worden ondersteund?',
        a: 'Telefonie (spraak), WhatsApp, SMS en webchat op uw website, overzichtelijk samengebracht in één centraal dashboard.'
      },
      {
        q: 'Vervangt GreenLane onze medewerkers?',
        a: 'Nee. GreenLane AI fungeert als intelligente assistent om uw personeel te ontlasten van herhalend administratiewerk, zodat er meer tijd overblijft voor zorg.'
      },
      {
        q: 'Kunnen workflows worden aangepast aan onze wensen?',
        a: 'Jazeker. Alle antwoorden, triagecriteria, afspraakprotocollen en escalatieregels zijn volledig naar uw praktijkwensen in te stellen.'
      },
      {
        q: 'Kan GreenLane buiten Europa worden ingezet?',
        a: 'Ja. GreenLane AI ondersteunt internationale zorgorganisaties met vestigingen in België, Estland en India.'
      },
      {
        q: 'Is GreenLane alleen bedoeld voor patiëntcommunicatie?',
        a: 'Nee. Naast communicatie coördineert GreenLane AI afspraken, herinneringen, interne opvolging en overkoepelende administratieve workflows.'
      }
    ]
  },
  contact: {
    info: {
      phone: {
        displayList: ['België: +32 ...', 'Estland: +372 ...', 'India: +91 ...']
      }
    },
    form: {
      title: 'Vertel ons over uw wensen',
      description: 'Vertel ons over uw praktijk, de workflows die u wilt verbeteren of de uitdagingen die u wilt aanpakken.',
      name: 'Uw naam',
      namePlaceholder: 'Dr. Jan de Vries',
      email: 'Zakelijk e-mailadres',
      emailPlaceholder: 'jan@medischcentrum.nl',
      phone: 'Telefoonnummer',
      phonePlaceholder: '+31 ... / +32 ...',
      company: 'Naam praktijk of organisatie',
      companyPlaceholder: 'Medisch Centrum Randstad',
      role: 'Uw functie',
      rolePlaceholder: 'Praktijkhouder / Praktijkmanager / Arts',
      country: 'Land',
      countryPlaceholder: 'Nederland / België / Estland / Anders',
      message: 'Wat wilt u graag bespreken?',
      messagePlaceholder: 'Beschrijf uw praktijk, het belvolume of de processen die u wilt optimaliseren...',
      cta: 'Verzend aanvraag',
      privacyNotice: 'Uw gegevens worden behandeld conform ons Privacybeleid.',
      closingNote: 'We kijken ernaar uit om uw doelen te bespreken en te ontdekken hoe GreenLane AI uw praktijk kan versterken.'
    }
  },
  ctas: {
    talkToSales: 'Praat met Sales'
  },
  footer: {
    newsletterSubtitle: 'Blijf op de hoogte van GreenLane AI, zorginnovatie en de toekomst van slimme zorgoperaties.',
    newsletterDisclaimer: 'Door u aan te melden gaat u akkoord met updates van GreenLane AI. U kunt zich op elk gewenst moment uitschrijven.',
    bookDemo: 'Boek een Demo'
  },
  cookieConsent: {
    essential: 'Noodzakelijk',
    analytics: 'Analytisch',
    marketing: 'Marketing',
    savePreferences: 'Voorkeuren opslaan',
    privacyPolicy: 'Privacybeleid',
    cookiePolicy: 'Cookiebeleid'
  },
  contactModal: {
    name: 'Uw naam',
    email: 'Zakelijk e-mailadres',
    phone: 'Telefoonnummer',
    organization: 'Naam organisatie',
    role: 'Uw functie',
    country: 'Land',
    message: 'Uw bericht',
    submit: 'Verzend aanvraag',
    submitting: 'Verzenden...',
    success: 'Bedankt! Uw aanvraag is ontvangen. Ons team neemt binnen één werkdag contact met u op.'
  }
};

// Now Polish (pl)
const plData = {
  incubation: {
    badge: 'INKUBACJA I INNOWACJA',
    title: 'Inkubowane we współpracy z IIT Ropar',
    description: 'GreenLane AI rozwija inteligentne rozwiązania do komunikacji medycznej i automatyzacji procesów operacyjnych w ochronie zdrowia, przy wsparciu swojego ekosystemu inkubacyjnego.',
    subtext: 'Koncentrujemy się na tworzeniu praktycznej, odpowiedzialnej sztucznej inteligencji, która pomaga placówkom medycznym pracować efektywniej i stawiać pacjenta na pierwszym miejscu.',
    linkText: 'Odwiedź oficjalny portal IIT Ropar',
    footnote: 'Indian Institute of Technology Ropar — Ekosystem Innowacji Technologicznych',
    ecosystem: 'Ekosystem Wiodącego Instytutu'
  },
  benefits: {
    eyebrow: 'INTELIGENTNIEJSZE OPERACJE W OCHRONIE ZDROWIA',
    title: 'Podnieś efektywność operacyjną placówki medycznej',
    subtitle: 'Codzienne funkcjonowanie ochrony zdrowia wiąże się ze stałą komunikacją, koordynacją i pracą administracyjną. GreenLane AI łączy inteligentną komunikację i powiązane procesy, pomagając placówkom działać wydajniej i zapewniać pacjentom wyższy standard opieki.',
    tagline: 'Jedna zintegrowana platforma. Inteligentniejsze procesy. Lepiej skoordynowana opieka.',
    items: [
      {
        title: 'Połącz każdy kontakt z pacjentem',
        desc: 'Zintegruj komunikację i opiekę po wizycie we wszystkich obsługiwanych kanałach.'
      },
      {
        title: 'Zautomatyzuj codzienne procesy',
        desc: 'Zredukuj powtarzalne zadania administracyjne dzięki automatyzacji AI dla określonych procedur.'
      },
      {
        title: 'Usprawnij koordynację wizyt',
        desc: 'Pomóż zespołom sprawniej zarządzać zapytaniami o terminy, grafikami i przypomnieniami.'
      },
      {
        title: 'Odpowiadaj szybciej. Angażuj lepiej.',
        desc: 'Zapewnij natychmiastowe odpowiedzi i spójny standard kontaktu na każdym etapie ścieżki pacjenta.'
      },
      {
        title: 'Zsynchronizuj pracę zespołów',
        desc: 'Popraw widoczność zadań i współpracę między personelem medycznym, recepcją i oddziałami.'
      },
      {
        title: 'Skaluj działalność bez zbędnych kosztów',
        desc: 'Odpowiadaj na rosnące potrzeby operacyjne bez konieczności zwiększania ręcznej pracy administracyjnej.'
      }
    ]
  },
  founder: {
    eyebrow: 'WIZJA GREENLANE AI',
    title: 'Technologia powinna dawać zespołom medycznym więcej czasu na opiekę.',
    meetFounder: 'Poznaj Założyciela',
    foundationTitle: 'Nasze Fundamenty',
    foundationItems: [
      {
        title: 'Stworzone dla medycyny',
        desc: 'Rozwój rozwiązań AI odpowiadających na realne wyzwania operacyjne placówek medycznych.'
      },
      {
        title: 'AI skoncentrowana na człowieku',
        desc: 'Zaprojektowana jako wsparcie zespołów medycznych, pozostawiając decyzje kliniczne wyłącznie wykwalifikowanym lekarzom.'
      },
      {
        title: 'Bezpieczeństwo i ochrona prywatności',
        desc: 'Ścisła ochrona danych medycznych zgodnie z obowiązującymi przepisami RODO.'
      },
      {
        title: 'Międzynarodowa perspektywa',
        desc: 'Globalne podejście z obecnością biznesową i rozwojem technologicznym w Belgii, Estonii i Indiach.'
      },
      {
        title: 'Innowacje z misją',
        desc: 'Poprawa komunikacji z pacjentami i standardu opieki zdrowotnej dzięki odpowiedzialnej sztucznej inteligencji.'
      }
    ],
    vision: 'Technologia powinna uwalniać czas na to, co najważniejsze: profesjonalną i troskliwą opiekę nad pacjentem.'
  },
  features: {
    eyebrow: 'REALIA I WYZWANIA OPERACYJNE',
    reality: {
      detailedList: [
        {
          title: 'Połączenia telefoniczne i zapytania głosowe',
          desc: 'Telefony od pacjentów, pytania o dostępność i prośby o pomoc.'
        },
        {
          title: 'Wiadomości i WhatsApp',
          desc: 'Korespondencja i zapytania rozproszone po różnych komunikatorach.'
        },
        {
          title: 'Wizyty i harmonogramy',
          desc: 'Zapisy na wizyty, przekładanie terminów, potwierdzenia i odwołania.'
        },
        {
          title: 'Przypomnienia i zalecenia',
          desc: 'Powiadamianie pacjentów przed wizytą oraz instrukcje po badaniach.'
        },
        {
          title: 'Recepcja i biurokracja',
          desc: 'Powtarzalne formalności odciągające uwagę od bezpośredniej obsługi pacjentów.'
        },
        {
          title: 'Wewnętrzna koordynacja zespołu',
          desc: 'Wymiana informacji i przekazywanie zadań między lekarzami a personelem recepcji.'
        },
        {
          title: 'Oprogramowanie medyczne i systemy EDM',
          desc: 'Ciągłe przełączanie się między osobnymi aplikacjami i kartotekami.'
        },
        {
          title: 'Ciągłość opieki nad pacjentem',
          desc: 'Utrzymanie kontaktu od pierwszego telefonu, przez wizytę, aż po kontrolę.'
        }
      ]
    },
    inefficiency: {
      eyebrow: 'GŁÓWNE PROBLEMY OPERACYJNE',
      subtitle: 'Kiedy komunikacja i procesy są rozproszone, placówki medyczne zmagają się z istotnymi barierami:',
      detailedList: [
        {
          title: 'Nieodebrane kontakty i brak opieki po wizycie',
          desc: 'Pytania pacjentów mogą pozostać bez odpowiedzi, gdy kanały nie są zintegrowane.'
        },
        {
          title: 'Wydłużony czas reakcji',
          desc: 'Personel musi sprawdzać kilka programów, by odpowiedzieć na proste pytania administracyjne.'
        },
        {
          title: 'Przeciążenie powtarzalną pracą',
          desc: 'Rutynowe czynności pochłaniają cenny czas i wywołują znużenie zespołu.'
        },
        {
          title: 'Przeciążona recepcja',
          desc: 'Ciągłe dzwonienie telefonów i kolejki przy okienku rodzą stres i opóźnienia.'
        },
        {
          title: 'Utracone terminy wizyt',
          desc: 'Brak szybkiego potwierdzenia skutkuje pustymi okienkami w grafikach lekarzy.'
        },
        {
          title: 'Uciążliwa komunikacja wewnętrzna',
          desc: 'Czasochłonne przekazywanie wiadomości i notatek między personelem.'
        },
        {
          title: 'Niespójne doświadczenie pacjenta',
          desc: 'Pacjent ma poczucie chaosu i braku przepływu informacji w placówce.'
        },
        {
          title: 'Brak pełnego wglądu w operacje',
          desc: 'Trudność w monitorowaniu realizacji zadań i ocenie wydajności pracy kliniki.'
        }
      ]
    },
    insight: 'Szansa: połączenie wielokanałowej komunikacji i automatyzacji, by przywrócić pełne skupienie na leczeniu.'
  },
  pillars: {
    eyebrow: 'PLATFORMA GREENLANE AI',
    tagline: 'Jedna platforma. Zintegrowane procesy. Pełna kontrola zespołu medycznego.',
    ctaExplore: 'Poznaj GreenLane AI',
    ctaBookDemo: 'Zamów Prezentację na Żywo'
  },
  capabilities: {
    eyebrow: 'INTELIGENTNE MOŻLIWOŚCI',
    categories: [
      {
        number: '01',
        name: 'KOMUNIKACJA',
        items: [
          {
            title: 'Głosowa AI',
            desc: 'Obsługuj telefony od pacjentów, rozpoznawaj intencje, udzielaj sprawdzonych informacji i uruchamiaj procedury.'
          },
          {
            title: 'Wiadomości do Pacjentów',
            desc: 'Koordynuj rozmowy przez WhatsApp, SMS, czat na stronie i inne zintegrowane kanały.'
          },
          {
            title: 'Zaangażowanie Pacjenta',
            desc: 'Wspieraj ścieżkę leczenia powiadomieniami, przypomnieniami i spersonalizowaną opieką.'
          }
        ]
      },
      {
        number: '02',
        name: 'KOORDYNACJA',
        items: [
          {
            title: 'Koordynacja Wizyt',
            desc: 'Usprawnij rezerwacje, potwierdzenia, odwoływanie i przekładanie terminów w powiązaniu z kalendarzem.'
          },
          {
            title: 'Eskalacja do Personelu',
            desc: 'Natychmiast przekazuj skomplikowane lub pilne sprawy dyżurującemu personelowi medycznemu.'
          },
          {
            title: 'Koordynacja Zadań',
            desc: 'Łącz zadania, personel i procedury medyczne, zapewniając płynny przepływ informacji.'
          }
        ]
      },
      {
        number: '03',
        name: 'AUTOMATYZACJA',
        items: [
          {
            title: 'Automatyzacja Procedur',
            desc: 'Ogranicz rutynową biurokrację dzięki bezpiecznej automatyzacji powtarzalnych czynności.'
          },
          {
            title: 'Wyspecjalizowani Agenci AI',
            desc: 'Wdrażaj precyzyjne moduły sztucznej inteligencji z pełnym nadzorem człowieka i uprawnieniami.'
          }
        ]
      },
      {
        number: '04',
        name: 'ANALIZA',
        items: [
          {
            title: 'Analityka Operacyjna',
            desc: 'Monitoruj ruch komunikacyjny, czas reakcji i trendy w pracy placówki na czytelnych pulpitach.'
          }
        ]
      }
    ],
    banner: {
      eyebrow: 'JEDNA ZINTEGROWANA PLATFORMA',
      title: 'Połącz komunikację z pacjentami. Koordynuj pracę zespołu. Automatyzuj powtarzalne zadania. Zrozum operacje swojej placówki.',
      ctaExplore: 'Poznaj platformę',
      ctaDemo: 'Zamów prezentację na żywo'
    }
  },
  howItWorks: {
    eyebrow: 'JAK TO DZIAŁA',
    subtitle: 'Wdrożenie w 6 prostych krokach zapewniające natychmiastowe rezultaty bez zakłócania pracy placówki.',
    banner: {
      eyebrow: 'ZSYNCHRONIZOWANA PRACA',
      title: 'Zobacz, jak GreenLane AI integruje się z Twoją kliniką',
      ctaDemo: 'Zamów prezentację na żywo',
      ctaTeam: 'Porozmawiaj z naszym zespołem'
    }
  },
  whoItsFor: {
    description: 'Dedykowane rozwiązania dopasowane do skali i specyfiki każdej placówki medycznej.',
    tagline: 'Zaprojektowane tak, aby harmonijnie wpisać się w istniejące procesy kliniczne i recepcyjne.',
    footerText: 'Niezależnie od tego, czy prowadzisz indywidualną praktykę, czy sieć klinik — GreenLane AI rośnie razem z Tobą.',
    tiers: [
      {
        title: 'Indywidualne Gabinety i Specjaliści',
        items: [
          'Gabinety lekarskie',
          'Praktyki stomatologiczne',
          'Ośrodki fizjoterapii i rehabilitacji',
          'Gabinety specjalistyczne',
          'Indywidualni lekarze i terapeuci'
        ]
      },
      {
        title: 'Rozwijające się Centra i Polikliniki',
        items: [
          'Wielooddziałowe centra medyczne',
          'Prywatne kliniki zabiegowe',
          'Centra opieki ambulatoryjnej',
          'Szpitale i placówki wielospecjalistyczne'
        ]
      },
      {
        title: 'Zintegrowane Sieci Ochrony Zdrowia',
        items: [
          'Sieci szpitali i przychodni',
          'Zintegrowane grupy medyczne',
          'Innowacyjne platformy telemedyczne'
        ]
      }
    ]
  },
  operationalImpact: {
    eyebrow: 'WPŁYW OPERACYJNY',
    title: 'Zamień powtarzalną pracę w więcej czasu na opiekę nad pacjentem',
    subtitle: 'GreenLane AI pomaga placówkom medycznym ograniczyć biurokrację, uporządkować komunikację i zwiększyć wydajność dzięki inteligentnej automatyzacji.',
    sectionTitle: 'Mierz to, co naprawdę istotne',
    metrics: [
      {
        value: '70–80%',
        title: 'Szacunkowy poziom automatyzacji',
        desc: 'Docelowy zakres powtarzalnych zadań komunikacyjnych kwalifikujących się do automatyzacji w ramach procedur.'
      },
      {
        value: '30–40%',
        title: 'Potencjalna redukcja obciążenia administracyjnego',
        desc: 'Orientacyjny cel dla wybranych procesów, w zależności od organizacji pracy kliniki i stopnia wdrożenia.'
      },
      {
        value: '900–1 200 €',
        period: 'miesięcznie',
        title: 'Szacowany ekwiwalent oszczędności',
        desc: 'Wyliczony na bazie modelowego kosztu administracji 3 000 €/mies. przy 30–40% redukcji obciążenia. Wartość poglądowa.'
      }
    ],
    improvementTitle: 'Stworzone dla wymiernych rezultatów',
    improvementText: 'Każda placówka medyczna działa inaczej. Realne rezultaty zależą od liczby połączeń, złożoności procedur, kosztów zespołu oraz stopnia automatyzacji.\n\nGreenLane AI pomaga wyznaczyć punkt wyjścia, zweryfikować efekty w fazie pilotażu i stale doskonalić procesy.',
    tagline: 'Zacznij od jednego procesu. Zmierz rezultaty. Rozwijaj to, co działa.',
    ctaDemo: 'Zamów prezentację na żywo'
  },
  security: {
    eyebrow: 'BEZPIECZEŃSTWO I PRYWATNOŚĆ',
    featuresSubtitle: 'Nasza platforma spełnia rygorystyczne normy bezpieczeństwa wymagane w sektorze ochrony zdrowia.',
    standardsTitle: 'Standardy bezpieczeństwa i zgodność z przepisami',
    standardsSubtitle: 'GreenLane AI powstało z zachowaniem najwyższych standardów bezpieczeństwa klasy korporacyjnej.',
    tagline: 'Zaufanie to nie etykieta. To odpowiedzialność wpisana w każdy etap projektowania i działania technologii.',
    ctaDiscuss: 'Porozmawiaj o bezpieczeństwie i RODO',
    items: [
      {
        title: 'Regionalne przetwarzanie danych',
        desc: 'Lokalizacja przechowywania danych dostosowana do wymogów prawnych i potrzeb placówki.'
      },
      {
        title: 'Szyfrowanie i ochrona danych',
        desc: 'Zaawansowane protokoły szyfrowania dla danych przesyłanych i składowanych.'
      },
      {
        title: 'Kontrola dostępu oparta na rolach (RBAC)',
        desc: 'Precyzyjnie przypisane uprawnienia dopasowane do obowiązków personelu.'
      },
      {
        title: 'Ściśle kontrolowany dostęp do systemów',
        desc: 'Zabezpieczenia ograniczające dostęp wyłącznie do autoryzowanych użytkowników.'
      },
      {
        title: 'Bezpieczna komunikacja z pacjentem',
        desc: 'Kanały kontaktu zaprojektowane z poszanowaniem tajemnicy medycznej i poufności.'
      },
      {
        title: 'Architektura dedykowana medycynie',
        desc: 'Projekt techniczny odpowiadający specyfice i wrażliwości środowiska ochrony zdrowia.'
      },
      {
        title: 'Audytowalność i pełna kontrola',
        desc: 'Szczegółowe rejestry zdarzeń i monitoring wspierający nadzór operacyjny.'
      },
      {
        title: 'Bezpieczny przepływ procedur',
        desc: 'Jasne reguły bezpieczeństwa przy przekazywaniu informacji i zadań.'
      }
    ]
  },
  implementation: {
    description: 'Przejrzysty, etapowy proces wdrożenia bez zakłócania codziennej pracy z pacjentami.',
    banner: {
      title: 'Zacznij od jednego procesu. Rozwijaj system stopniowo.',
      text: 'GreenLane AI można wdrożyć dla jednego kluczowego zadania, a następnie rozbudowywać w miarę budowania zaufania zespołu i potwierdzania efektów.',
      ctaDiscovery: 'Umów rozmowę wstępną',
      ctaDemo: 'Zamów prezentację na żywo'
    }
  },
  pricing: {
    description: 'Proste i przejrzyste plany dopasowane do wielkości Twojej placówki.',
    billedAnnually: 'Rozliczane rocznie',
    requestQuote: 'Zapytaj o wycenę',
    footerNoteTitle: 'Przejrzyste Ceny. Elastyczny Rozwój.',
    footerNoteText: 'Dostępne funkcje i zakres wdrożenia zależą od wybranego planu. Skontaktuj się z nami, aby dobrać optymalne rozwiązanie.'
  },
  faq: {
    description: 'Odpowiedzi na kluczowe pytania dotyczące możliwości, bezpieczeństwa i wdrożenia GreenLane AI.',
    stillHaveQuestions: {
      title: 'Masz dodatkowe pytania?',
      description: 'Każda placówka ma swoją specyfikę. Porozmawiajmy o Twoich procesach i priorytetach, aby ocenić, jak GreenLane AI może pomóc.',
      ctaDemo: 'Zamów prezentację na żywo',
      ctaContact: 'Skontaktuj się z nami'
    },
    list: [
      {
        q: 'Czy GreenLane jest odpowiedni dla mojego typu placówki?',
        a: 'Tak. System sprawdza się w gabinetach lekarskich, stomatologii, fizjoterapii, klinikach specjalistycznych i szpitalach dzięki modułowej budowie.'
      },
      {
        q: 'Ile trwa wdrożenie systemu?',
        a: 'Uruchomienie pierwszego procesu zajmuje zwykle kilka dni roboczych. Nasz zespół konfiguruje system bez jakichkolwiek przestojów w obsłudze pacjentów.'
      },
      {
        q: 'Czy GreenLane integruje się z naszym oprogramowaniem medycznym?',
        a: 'Tak. GreenLane AI łączy się z popularnymi systemami EDM, kalendarzami i oprogramowaniem do zarządzania placówką przez bezpieczne API.'
      },
      {
        q: 'Czy dane pacjentów są bezpieczne?',
        a: 'Całkowicie. Dane są szyfrowane w transmisji i spoczynku, a infrastruktura spełnia najwyższe normy bezpieczeństwa informacji medycznej.'
      },
      {
        q: 'Czy GreenLane jest zgodny z RODO?',
        a: 'Tak. Platforma w pełni realizuje wymogi RODO, w tym zasady minimalizacji danych, kontroli zgód i pełnej rozliczalności.'
      },
      {
        q: 'Co się dzieje, gdy AI nie potrafi obsłużyć zapytania?',
        a: 'Rozmowa jest natychmiast przekazywana do personelu medycznego lub recepcji wraz z pełną historią, zapewniając pacjentowi szybką pomoc.'
      },
      {
        q: 'Jakie kanały komunikacji obsługuje GreenLane?',
        a: 'Obsługujemy połączenia głosowe, WhatsApp, SMS oraz czat na stronie www — wszystko w jednym spójnym panelu administracyjnym.'
      },
      {
        q: 'Czy GreenLane ma zastąpić pracowników?',
        a: 'Nie. GreenLane AI to wirtualny asystent, który wyręcza personel w monotonnych zadaniach, pozwalając skupić się na opiece i bezpośredniej relacji.'
      },
      {
        q: 'Czy scenariusze i odpowiedzi można dostosować?',
        a: 'Tak. Wszystkie komunikaty, procedury umawiania wizyt i reguły przekazywania spraw są w pełni konfigurowalne pod wytyczne Twojej placówki.'
      },
      {
        q: 'Czy GreenLane może działać poza Europą?',
        a: 'Tak. Posiadamy międzynarodową strukturę i rozwiązania dostosowane do rynków w Belgii, Estonii oraz Indiach.'
      },
      {
        q: 'Czy GreenLane służy wyłącznie do kontaktu z pacjentami?',
        a: 'Nie. Oprócz komunikacji automatyzujemy potwierdzenia wizyt, zalecenia pozabiegowe, powiadomienia wewnętrzne i obieg zadań.'
      }
    ]
  },
  contact: {
    info: {
      phone: {
        displayList: ['Belgia: +32 ...', 'Estonia: +372 ...', 'Indie: +91 ...']
      }
    },
    form: {
      title: 'Opowiedz nam o swoich potrzebach',
      description: 'Opowiedz nam o swojej placówce, procesach, które chcesz usprawnić, lub wyzwaniach, z którymi się mierzysz.',
      name: 'Imię i nazwisko',
      namePlaceholder: 'Dr Anna Kowalska',
      email: 'Służbowy adres e-mail',
      emailPlaceholder: 'anna@klinika.pl',
      phone: 'Numer telefonu',
      phonePlaceholder: '+48 ...',
      company: 'Nazwa placówki lub gabinetu',
      companyPlaceholder: 'Centrum Medyczne Zdrowie',
      role: 'Twoje stanowisko',
      rolePlaceholder: 'Kierownik placówki / Lekarz / Menedżer operacyjny',
      country: 'Kraj',
      countryPlaceholder: 'Polska / Belgia / Estonia / Inny',
      message: 'Co chciałbyś omówić?',
      messagePlaceholder: 'Opisz specyfikę placówki, liczbę połączeń lub procesy do automatyzacji...',
      cta: 'Wyślij zapytanie',
      privacyNotice: 'Twoje dane będą przetwarzane zgodnie z naszą Polityką Prywatności.',
      closingNote: 'Z przyjemnością poznamy Twoje cele i przedstawimy, jak GreenLane AI może wesprzeć Twoją placówkę.'
    }
  },
  ctas: {
    talkToSales: 'Porozmawiaj z Działem Sprzedaży'
  },
  footer: {
    newsletterSubtitle: 'Bądź na bieżąco z GreenLane AI, innowacjami medycznymi i przyszłością inteligentnych operacji w ochronie zdrowia.',
    newsletterDisclaimer: 'Zapisując się, wyrażasz zgodę na otrzymywanie informacji od GreenLane AI. Możesz zrezygnować w każdej chwili.',
    bookDemo: 'Zamów Prezentację'
  },
  cookieConsent: {
    essential: 'Niezbędne',
    analytics: 'Analityczne',
    marketing: 'Marketingowe',
    savePreferences: 'Zapisz preferencje',
    privacyPolicy: 'Polityka Prywatności',
    cookiePolicy: 'Polityka Cookies'
  },
  contactModal: {
    name: 'Imię i nazwisko',
    email: 'Służbowy e-mail',
    phone: 'Numer telefonu',
    organization: 'Nazwa placówki',
    role: 'Stanowisko',
    country: 'Kraj',
    message: 'Wiadomość',
    submit: 'Wyślij zapytanie',
    submitting: 'Wysyłanie...',
    success: 'Dziękujemy! Twoje zapytanie zostało wysłane. Skontaktujemy się w ciągu jednego dnia roboczego.'
  }
};

// Now Spanish (es)
const esData = {
  incubation: {
    badge: 'INCUBACIÓN E INNOVACIÓN',
    title: 'Incubado con IIT Ropar',
    description: 'GreenLane AI desarrolla soluciones inteligentes para la comunicación sanitaria y los flujos operativos de salud, con el respaldo de su ecosistema de incubación.',
    subtext: 'Nuestro objetivo es crear IA práctica y responsable que ayude a las organizaciones sanitarias a trabajar de forma más ágil sin perder el enfoque humano.',
    linkText: 'Visitar el portal oficial de IIT Ropar',
    footnote: 'Indian Institute of Technology Ropar — Ecosistema de Innovación Tecnológica',
    ecosystem: 'Ecosistema de Instituto de Excelencia'
  },
  benefits: {
    eyebrow: 'OPERACIONES SANITARIAS MÁS INTELIGENTES',
    title: 'Haga más inteligentes las operaciones de su centro médico',
    subtitle: 'La gestión sanitaria exige una comunicación constante, coordinación precisa y gran carga administrativa. GreenLane AI une comunicación inteligente y flujos conectados para ayudar a las organizaciones de salud a trabajar con mayor eficiencia y brindar una mejor experiencia al paciente.',
    tagline: 'Una plataforma conectada. Flujos más inteligentes. Atención mejor coordinada.',
    items: [
      {
        title: 'Conecte cada interacción con el paciente',
        desc: 'Centralice la comunicación y el seguimiento de pacientes en todos los canales compatibles.'
      },
      {
        title: 'Automatice los flujos de trabajo diarios',
        desc: 'Reduzca tareas administrativas repetitivas con automatización IA segura para procesos definidos.'
      },
      {
        title: 'Mejore la coordinación de citas',
        desc: 'Ayude a su equipo a gestionar consultas de citas, reprogramaciones y recordatorios con agilidad.'
      },
      {
        title: 'Responda más rápido. Conecte mejor.',
        desc: 'Ofrezca respuestas inmediatas y comunicación consistente a lo largo de todo el recorrido del paciente.'
      },
      {
        title: 'Sincronice a sus equipos de trabajo',
        desc: 'Mejore la visibilidad y colaboración entre personal clínico, recepción y diferentes sedes.'
      },
      {
        title: 'Escale con mayor eficiencia',
        desc: 'Afronte una mayor demanda asistencial sin sobrecargar a su equipo con trabajo manual.'
      }
    ]
  },
  founder: {
    eyebrow: 'LA VISIÓN DE GREENLANE AI',
    title: 'La tecnología debe dar a los profesionales de la salud más tiempo para cuidar.',
    meetFounder: 'Conocer al Fundador',
    foundationTitle: 'Nuestros Fundamentos',
    foundationItems: [
      {
        title: 'Diseñado para la salud',
        desc: 'Desarrollo de soluciones de IA pensadas para los retos operativos reales de los centros médicos.'
      },
      {
        title: 'IA centrada en las personas',
        desc: 'Diseñada para apoyar a los equipos sanitarios, manteniendo el criterio clínico exclusivamente en manos de profesionales cualificados.'
      },
      {
        title: 'Tecnología respetuosa con la privacidad',
        desc: 'Manejo riguroso y responsable de la información de salud conforme a las normativas de protección de datos.'
      },
      {
        title: 'Perspectiva internacional',
        desc: 'Enfoque global con presencia corporativa y desarrollo en Bélgica, Estonia y la India.'
      },
      {
        title: 'Innovación con propósito',
        desc: 'Mejorar la comunicación con los pacientes y la experiencia sanitaria mediante IA ética y responsable.'
      }
    ],
    vision: 'La tecnología debe liberar tiempo para lo que verdaderamente importa: atender y cuidar a las personas.'
  },
  features: {
    eyebrow: 'REALIDAD Y DESAFÍOS OPERATIVOS',
    reality: {
      detailedList: [
        {
          title: 'Llamadas telefónicas y consultas de voz',
          desc: 'Llamadas entrantes de pacientes, consultas sobre servicios y solicitudes de ayuda.'
        },
        {
          title: 'Mensajería y WhatsApp',
          desc: 'Conversaciones y solicitudes dispersas en múltiples aplicaciones de mensajería.'
        },
        {
          title: 'Citas y programación',
          desc: 'Peticiones de cita, cambios de horario, confirmaciones y cancelaciones.'
        },
        {
          title: 'Recordatorios y seguimiento',
          desc: 'Informar al paciente de forma proactiva antes y después de cada consulta.'
        },
        {
          title: 'Recepción y administración',
          desc: 'Tareas rutinarias que compiten con la atención presencial al paciente en el mostrador.'
        },
        {
          title: 'Coordinación interna del equipo',
          desc: 'Compartir información y transferir gestiones entre médicos, enfermería y administración.'
        },
        {
          title: 'Software médico e historiales',
          desc: 'Trabajo continuo entre herramientas desconectadas y registros clínicos.'
        },
        {
          title: 'Comunicación en todo el proceso del paciente',
          desc: 'Mantener la continuidad asistencial desde la primera consulta hasta el alta o control.'
        }
      ]
    },
    inefficiency: {
      eyebrow: 'INEFICIENCIAS COMUNES',
      subtitle: 'Cuando la comunicación y las operaciones están fragmentadas, tanto los profesionales como los pacientes lo sufren:',
      detailedList: [
        {
          title: 'Consultas no atendidas y falta de seguimiento',
          desc: 'Las solicitudes de los pacientes pueden extraviarse si los canales de comunicación no están unificados.'
        },
        {
          title: 'Tiempos de respuesta lentos',
          desc: 'El equipo debe revisar múltiples plataformas para responder preguntas administrativas sencillas.'
        },
        {
          title: 'Carga administrativa repetitiva',
          desc: 'Las tareas de rutina consumen un tiempo valioso del personal y generan sobrecarga de trabajo.'
        },
        {
          title: 'Equipos de recepción saturados',
          desc: 'El constante sonido del teléfono y las colas generan estrés en el personal de atención al público.'
        },
        {
          title: 'Pérdida de huecos y citas médicas',
          desc: 'La falta de confirmación inmediata deriva en citas no aprovechadas e ingresos perdidos.'
        },
        {
          title: 'Coordinación manual compleja',
          desc: 'Demasiado tiempo dedicado a trasladar instrucciones de un departamento a otro de forma manual.'
        },
        {
          title: 'Experiencia del paciente inconsistente',
          desc: 'Una comunicación inconexa genera en el paciente una sensación de falta de orden y atención.'
        },
        {
          title: 'Visibilidad operativa limitada',
          desc: 'Dificultad para supervisar tareas pendientes y evaluar el rendimiento general de la clínica.'
        }
      ]
    },
    insight: 'La oportunidad: unificar comunicación multicanal y automatización para volver a centrarse en la salud.'
  },
  pillars: {
    eyebrow: 'LA PLATAFORMA GREENLANE AI',
    tagline: 'Una plataforma. Flujos conectados. El equipo médico siempre al mando.',
    ctaExplore: 'Explorar GreenLane AI',
    ctaBookDemo: 'Reservar Demo en Directo'
  },
  capabilities: {
    eyebrow: 'CAPACIDADES INTELIGENTES',
    categories: [
      {
        number: '01',
        name: 'COMUNICAR',
        items: [
          {
            title: 'IA de Voz',
            desc: 'Atienda llamadas, comprenda peticiones, brinde información verificada y active flujos mediante voz inteligente.'
          },
          {
            title: 'Mensajería con Pacientes',
            desc: 'Gestione mensajes en WhatsApp, SMS, chat web y otros canales desde una bandeja unificada.'
          },
          {
            title: 'Compromiso del Paciente',
            desc: 'Acompañe el recorrido asistencial con avisos, recordatorios y seguimiento automatizado.'
          }
        ]
      },
      {
        number: '02',
        name: 'COORDINAR',
        items: [
          {
            title: 'Coordinación de Citas',
            desc: 'Automatice solicitudes, programación, confirmaciones y cancelaciones vinculadas a su agenda.'
          },
          {
            title: 'Escalación Humana y Colaboración',
            desc: 'Transfiera casos complejos o sensibles al personal adecuado con todo el contexto necesario.'
          },
          {
            title: 'Coordinación de Flujos',
            desc: 'Conecte tareas, personal y departamentos para una continuidad asistencial sin fisuras.'
          }
        ]
      },
      {
        number: '03',
        name: 'AUTOMATIZAR',
        items: [
          {
            title: 'Automatización de Flujos',
            desc: 'Alivie la carga administrativa mediante la ejecución automática de procesos definidos.'
          },
          {
            title: 'Agentes de IA Especializados',
            desc: 'Incorpore capacidades de IA para tareas concretas con permisos estrictos y supervisión continua.'
          }
        ]
      },
      {
        number: '04',
        name: 'COMPRENDER',
        items: [
          {
            title: 'Inteligencia Operativa',
            desc: 'Supervise la actividad de llamadas, tiempos de respuesta y métricas clave en paneles intuitivos.'
          }
        ]
      }
    ],
    banner: {
      eyebrow: 'UNA PLATAFORMA CONECTADA',
      title: 'Conecte la comunicación. Coordine el trabajo diario. Automatice tareas repetitivas. Comprenda sus operaciones.',
      ctaExplore: 'Explorar la plataforma',
      ctaDemo: 'Reservar demo en directo'
    }
  },
  howItWorks: {
    eyebrow: 'CÓMO FUNCIONA',
    subtitle: 'Implementación guiada en 6 pasos sencillos que optimiza su clínica sin interrupciones.',
    banner: {
      eyebrow: 'OPERACIONES CONECTADAS',
      title: 'Descubra cómo GreenLane AI se integra con su flujo de trabajo',
      ctaDemo: 'Reservar demo en directo',
      ctaTeam: 'Hablar con nuestro equipo'
    }
  },
  whoItsFor: {
    description: 'Soluciones adaptadas a la realidad operativa de cada tipo de centro sanitario.',
    tagline: 'Diseñado para amoldarse a sus procesos clínicos y administrativos actuales.',
    footerText: 'Tanto si gestiona una consulta individual como un grupo hospitalario, GreenLane AI crece con usted.',
    tiers: [
      {
        title: 'Consultas Independientes y Especialistas',
        items: [
          'Centros médicos y consultas',
          'Clínicas dentales',
          'Centros de fisioterapia y rehabilitación',
          'Consultas de especialidades médicas',
          'Profesionales sanitarios independientes'
        ]
      },
      {
        title: 'Centros Sanitarios en Expansión y Policlínicas',
        items: [
          'Grupos médicos con varias sedes',
          'Centros médicos privados',
          'Unidades de atención ambulatoria',
          'Hospitales y centros multidisciplinares'
        ]
      },
      {
        title: 'Redes y Ecosistemas Sanitarios Conectados',
        items: [
          'Redes hospitalarias',
          'Organizaciones de atención integrada',
          'Plataformas digitales de salud'
        ]
      }
    ]
  },
  operationalImpact: {
    eyebrow: 'IMPACTO OPERATIVO',
    title: 'Transforme el trabajo repetitivo en más tiempo para cuidar',
    subtitle: 'GreenLane AI ayuda a las organizaciones sanitarias a reducir tareas rutinarias, optimizar la comunicación y ganar eficiencia mediante automatización inteligente.',
    sectionTitle: 'Mida lo que de verdad importa',
    metrics: [
      {
        value: '70–80%',
        title: 'Objetivo ilustrativo de automatización',
        desc: 'Rango orientativo para gestiones de comunicación rutinarias aptas para automatización en flujos definidos.'
      },
      {
        value: '30–40%',
        title: 'Potencial reducción de carga administrativa',
        desc: 'Meta indicativa para flujos seleccionados, según la operativa del centro y el nivel de implantación.'
      },
      {
        value: '900 €–1.200 €',
        period: 'al mes',
        title: 'Equivalente estimado de ahorro ilustrativo',
        desc: 'Calculado sobre una base mensual de 3.000 € de costes administrativos con un 30–40% de reducción. No constituye garantía de ahorro directo en efectivo.'
      }
    ],
    improvementTitle: 'Diseñado para mejoras medibles',
    improvementText: 'Cada centro de salud funciona de forma distinta. Los resultados reales varían según el volumen de llamadas, la complejidad de las tareas, el coste del personal y el alcance de automatización.\n\nGreenLane AI le ayuda a fijar una base de referencia, evaluar resultados en fases piloto e identificar oportunidades de mejora continua.',
    tagline: 'Comience con un flujo. Mida el impacto. Escale lo que funciona.',
    ctaDemo: 'Reservar demo en directo'
  },
  security: {
    eyebrow: 'PRIVACIDAD Y SEGURIDAD',
    featuresSubtitle: 'Nuestra plataforma cumple con los estándares de seguridad más exigentes del sector de la salud.',
    standardsTitle: 'Estándares de seguridad y cumplimiento normativo',
    standardsSubtitle: 'GreenLane AI está desarrollado con seguridad de nivel empresarial preparada para la estricta regulación médica.',
    tagline: 'La confianza no es una insignia. Es una responsabilidad incorporada en cada detalle de la tecnología.',
    ctaDiscuss: 'Consultar sobre Seguridad y Privacidad',
    items: [
      {
        title: 'Alojamiento regional de datos',
        desc: 'Opciones de ubicación de servidores según normativas vigentes y preferencias del cliente.'
      },
      {
        title: 'Cifrado y protección de datos',
        desc: 'Cifrado integral de vanguardia para datos en tránsito y en almacenamiento.'
      },
      {
        title: 'Control de accesos por roles (RBAC)',
        desc: 'Permisos asignados según las funciones y responsabilidades del personal.'
      },
      {
        title: 'Acceso al sistema supervisado',
        desc: 'Políticas estrictas para evitar accesos no autorizados a las herramientas.'
      },
      {
        title: 'Comunicación segura con el paciente',
        desc: 'Flujos de mensajería y llamadas diseñados con estricta confidencialidad médica.'
      },
      {
        title: 'Arquitectura diseñada para salud',
        desc: 'Diseño técnico adaptado a la sensibilidad y necesidades operativas de la medicina.'
      },
      {
        title: 'Auditabilidad y trazabilidad completa',
        desc: 'Registros detallados de actividad para garantizar total transparencia y control.'
      },
      {
        title: 'Coordinación controlada de flujos',
        desc: 'Normas y salvaguardas claras para el intercambio de información entre sistemas y profesionales.'
      }
    ]
  },
  implementation: {
    description: 'Un despliegue estructurado paso a paso sin interrupciones en la atención sanitaria.',
    banner: {
      title: 'Comience con un flujo de trabajo. Crezca a su ritmo.',
      text: 'GreenLane AI puede implementarse en un caso de uso prioritario y ampliarse progresivamente a medida que su equipo gana confianza y se confirman los resultados.',
      ctaDiscovery: 'Agendar llamada informativa',
      ctaDemo: 'Reservar demo en directo'
    }
  },
  pricing: {
    description: 'Tarifas claras y transparentes adaptadas al tamaño y necesidades de su clínica.',
    billedAnnually: 'Facturación anual',
    requestQuote: 'Solicitar presupuesto',
    footerNoteTitle: 'Precios Claros. Crecimiento Flexible.',
    footerNoteText: 'Las prestaciones incluidas y límites de uso dependen del plan seleccionado. Contacte con nuestro equipo para definir el plan idóneo para su clínica.'
  },
  faq: {
    description: 'Respuestas a las dudas más habituales sobre las funciones, seguridad e integración de GreenLane AI.',
    stillHaveQuestions: {
      title: '¿Tiene alguna duda adicional?',
      description: 'Cada centro sanitario tiene características particulares. Hablemos sobre sus circuitos de trabajo para ver cómo GreenLane AI puede ayudarle.',
      ctaDemo: 'Reservar demo en directo',
      ctaContact: 'Contactar con nuestro equipo'
    },
    list: [
      {
        q: '¿Es GreenLane adecuado para mi centro médico?',
        a: 'Sí. Se adapta perfectamente a consultas médicas, clínicas dentales, centros de fisioterapia, policlínicas y hospitales gracias a su diseño modular.'
      },
      {
        q: '¿Cuánto tiempo lleva la puesta en marcha?',
        a: 'La configuración de un primer flujo suele requerir solo unos pocos días laborables. Todo el proceso se realiza sin interrumpir la atención de la clínica.'
      },
      {
        q: '¿Puede integrarse GreenLane con nuestros programas actuales?',
        a: 'Sí. GreenLane AI se conecta con los principales sistemas de gestión de clínicas, historiales electrónicos y agendas mediante APIs y protocolos seguros.'
      },
      {
        q: '¿Están seguros los datos de los pacientes?',
        a: 'Totalmente. La información viaja y se almacena encriptada, con opciones de alojamiento en servidores regionales que cumplen las normativas sanitarias.'
      },
      {
        q: '¿Cumple GreenLane con el RGPD?',
        a: 'Sí. Cumplimos con el RGPD y normativas locales de protección de datos, incluyendo minimización de datos y consentimiento explícito.'
      },
      {
        q: '¿Qué ocurre si la IA no puede resolver una solicitud?',
        a: 'La conversación se transfiere de inmediato al personal de recepción o facultativo correspondiente con todo el historial para una atención fluida.'
      },
      {
        q: '¿Qué canales de comunicación incluye la plataforma?',
        a: 'Atención por teléfono (voz inteligente), WhatsApp, SMS y chat en su sitio web, todo en un único panel unificado.'
      },
      {
        q: '¿GreenLane reemplaza al personal del centro?',
        a: 'No. GreenLane AI es un asistente que libera al equipo de tareas mecánicas y repetitivas para que puedan enfocarse en el cuidado personal del paciente.'
      },
      {
        q: '¿Es posible personalizar las respuestas y protocolos?',
        a: 'Sí. Todos los diálogos, preguntas de triaje, criterios de cita y reglas de derivación se adaptan minuciosamente a la forma de trabajar de su clínica.'
      },
      {
        q: '¿Puede utilizarse GreenLane fuera de Europa?',
        a: 'Sí. Contamos con estructura internacional y adaptabilidad a normativas de distintos países, con presencia en Bélgica, Estonia y la India.'
      },
      {
        q: '¿GreenLane solo sirve para comunicarse con el paciente?',
        a: 'No. Además de la comunicación, coordina citaciones, recordatorios, tareas internas entre sanitarios y automatización administrativa general.'
      }
    ]
  },
  contact: {
    info: {
      phone: {
        displayList: ['Bélgica: +32 ...', 'Estonia: +372 ...', 'India: +91 ...']
      }
    },
    form: {
      title: 'Cuéntenos qué necesita',
      description: 'Explíquenos las características de su centro, los procesos que desea agilizar o las dificultades operativas que afronta.',
      name: 'Nombre completo',
      namePlaceholder: 'Dra. María González',
      email: 'Correo electrónico profesional',
      emailPlaceholder: 'maria@clinicamedica.es',
      phone: 'Número de teléfono',
      phonePlaceholder: '+34 ...',
      company: 'Nombre del centro o clínica',
      companyPlaceholder: 'Centro Médico Castellana',
      role: 'Su cargo',
      rolePlaceholder: 'Director de clínica / Médico / Responsable de operaciones',
      country: 'País',
      countryPlaceholder: 'España / Bélgica / Estonia / Otro',
      message: '¿Qué le gustaría tratar con nosotros?',
      messagePlaceholder: 'Describa su centro médico, volumen de pacientes o procesos a automatizar...',
      cta: 'Enviar consulta',
      privacyNotice: 'Sus datos se tratarán conforme a nuestra Política de Privacidad.',
      closingNote: 'Estaremos encantados de conocer sus objetivos y explorar juntos cómo GreenLane AI puede impulsar su centro.'
    }
  },
  ctas: {
    talkToSales: 'Hablar con Ventas'
  },
  footer: {
    newsletterSubtitle: 'Reciba novedades sobre GreenLane AI, innovación en salud y el futuro de las operaciones clínicas inteligentes.',
    newsletterDisclaimer: 'Al suscribirse acepta recibir comunicaciones de GreenLane AI. Puede darse de baja en cualquier momento.',
    bookDemo: 'Reservar Demo'
  },
  cookieConsent: {
    essential: 'Esenciales',
    analytics: 'Analíticas',
    marketing: 'Marketing',
    savePreferences: 'Guardar preferencias',
    privacyPolicy: 'Política de Privacidad',
    cookiePolicy: 'Política de Cookies'
  },
  contactModal: {
    name: 'Nombre completo',
    email: 'Correo electrónico profesional',
    phone: 'Número de teléfono',
    organization: 'Nombre del centro',
    role: 'Cargo',
    country: 'País',
    message: 'Su mensaje',
    submit: 'Enviar consulta',
    submitting: 'Enviando...',
    success: '¡Gracias! Hemos recibido su consulta. Nuestro equipo se pondrá en contacto en el plazo de un día laborable.'
  }
};

// Add missing sections to all languages
const commonExtra = {
  fr: {
    features: {
      insight: {
        title: "L'Opportunité",
        description: "Réunissez la communication et les flux opérationnels sur une plateforme unique et intelligente, tout en vous intégrant à vos systèmes existants."
      }
    },
    pricingIn: {
      title: "Tarification simple et transparente pour les cliniques et hôpitaux",
      subtitle: "Conçu pour les cliniques médicales, cabinets dentaires et centres de santé. Développez vos opérations sans alourdir la charge administrative.",
      monthly: "Facturation mensuelle",
      annual: "Facturation annuelle",
      save: "Économisez 20 %",
      billedAnnually: "Facturé annuellement",
      getStarted: "Commencer",
      requestQuote: "Contacter l'équipe",
      mostPopular: "Recommandé pour les cliniques en croissance",
      whatsIncluded: "Ce qui est inclus",
      custom: "Sur mesure",
      perMonth: "/mois"
    },
    bookDemoSection: {
      title: "Découvrez GreenLane AI en action",
      subtitle: "Voyez comment l'automatisation intelligente simplifie la communication et les flux médicaux de votre établissement.",
      form: {
        title: "Réserver une démonstration en direct",
        name: "Votre nom complet",
        email: "Adresse e-mail professionnelle",
        phone: "Numéro de téléphone",
        clinicName: "Nom de l'établissement",
        clinicType: "Type d'organisation",
        clinicTypes: [
          "Cabinet médical",
          "Cabinet dentaire",
          "Centre de kinésithérapie",
          "Clinique spécialisée",
          "Groupe de santé multisite",
          "Hôpital / Réseau de soins",
          "Autre"
        ],
        preferredTime: "Créneau souhaité pour la démo",
        times: [
          "Matin (9h00 - 12h00)",
          "Après-midi (12h00 - 15h00)",
          "Fin d'après-midi (15h00 - 18h00)"
        ],
        notes: "Quels processus vous intéressent le plus ?",
        notesPlaceholder: "ex. Réception vocale par IA, prise de rendez-vous sur WhatsApp, suivi post-soin...",
        submit: "Planifier la démo"
      }
    },
    analytics: { patientStatus: 'Demandes entrantes', responded: 'Traitées par l\'IA' },
    testimonials: {
      badge: 'Validation Médicale',
      subtitle: 'Concevoir une IA pratique et responsable en plaçant les professionnels de santé au centre.'
    },
    appDownload: { badge: 'Expérience Mobile Connectée' }
  },
  nl: {
    features: {
      insight: {
        title: "De Kans",
        description: "Breng communicatie en operationele processen samen op één intelligent platform, in harmonie met uw bestaande softwaresystemen."
      }
    },
    pricingIn: {
      title: "Eenvoudige, transparante tarieven voor klinieken en ziekenhuizen",
      subtitle: "Ontworpen voor medische klinieken, tandartspraktijken en gespecialiseerde centra. Schaal zonder administratieve overhead.",
      monthly: "Maandelijkse facturatie",
      annual: "Jaarlijkse facturatie",
      save: "Bespaar 20%",
      billedAnnually: "Jaarlijks vooraf gefactureerd",
      getStarted: "Direct beginnen",
      requestQuote: "Contact verkoop",
      mostPopular: "Aanbevolen voor groeiende praktijken",
      whatsIncluded: "Wat is inbegrepen",
      custom: "Maatwerk",
      perMonth: "/mnd"
    },
    bookDemoSection: {
      title: "Ervaar GreenLane AI in actie",
      subtitle: "Ontdek hoe intelligente automatisering de patiëntcommunicatie en zorgprocessen in uw praktijk vergemakkelijkt.",
      form: {
        title: "Boek een live demonstratie",
        name: "Uw naam",
        email: "Zakelijk e-mailadres",
        phone: "Telefoonnummer",
        clinicName: "Naam praktijk of organisatie",
        clinicType: "Type praktijk",
        clinicTypes: [
          "Medische praktijk",
          "Tandartspraktijk",
          "Fysiotherapiecentrum",
          "Gespecialiseerde kliniek",
          "Zorggroep met meerdere locaties",
          "Ziekenhuis / Zorgnetwerk",
          "Anders"
        ],
        preferredTime: "Voorkeurstijd voor demo",
        times: [
          "Ochtend (9:00 - 12:00)",
          "Middag (12:00 - 15:00)",
          "Namiddag (15:00 - 18:00)"
        ],
        notes: "Welke workflows hebben uw bijzondere interesse?",
        notesPlaceholder: "bijv. AI-spraakbalie, WhatsApp afsprakenbeheer, geautomatiseerde opvolging...",
        submit: "Demo plannen"
      }
    },
    analytics: { patientStatus: 'Inkomende verzoeken', responded: 'Afgehandeld via AI' },
    testimonials: {
      badge: 'Medische Validatie',
      subtitle: 'Het ontwikkelen van praktische, verantwoorde AI met zorgprofessionals aan het roer.'
    },
    appDownload: { badge: 'Verbonden Mobiele Ervaring' }
  },
  pl: {
    features: {
      insight: {
        title: "Szansa dla Placówki",
        description: "Połącz komunikację i procesy operacyjne na jednej inteligentnej platformie, działającej równolegle z istniejącymi systemami."
      }
    },
    pricingIn: {
      title: "Prosty i przejrzysty cennik dla placówek medycznych i szpitali",
      subtitle: "Dedykowany dla przychodni, gabinetów stomatologicznych i centrów specjalistycznych. Rozwijaj działalność bez dodatkowej biurokracji.",
      monthly: "Rozliczenie miesięczne",
      annual: "Rozliczenie roczne",
      save: "Zaoszczędź 20%",
      billedAnnually: "Rozliczane rocznie z góry",
      getStarted: "Rozpocznij teraz",
      requestQuote: "Skontaktuj się z nami",
      mostPopular: "Polecane dla rozwijających się placówek",
      whatsIncluded: "Co obejmuje pakiet",
      custom: "Wycena indywidualna",
      perMonth: "/mies."
    },
    bookDemoSection: {
      title: "Zobacz GreenLane AI w akcji",
      subtitle: "Przekonaj się, jak inteligentna automatyzacja może uporządkować komunikację z pacjentami i procedury w Twojej placówce.",
      form: {
        title: "Umów demonstrację na żywo",
        name: "Imię i nazwisko",
        email: "Służbowy adres e-mail",
        phone: "Numer telefonu",
        clinicName: "Nazwa placówki lub gabinetu",
        clinicType: "Typ placówki",
        clinicTypes: [
          "Gabinet lekarski / Przychodnia",
          "Praktyka stomatologiczna",
          "Centrum fizjoterapii i rehabilitacji",
          "Klinika specjalistyczna",
          "Grupa medyczna",
          "Szpital / Sieć placówek",
          "Inny"
        ],
        preferredTime: "Preferowana pora na prezentację",
        times: [
          "Rano (9:00 - 12:00)",
          "Popołudnie (12:00 - 15:00)",
          "Późne popołudnie (15:00 - 18:00)"
        ],
        notes: "Jakie procesy najbardziej Cię interesują?",
        notesPlaceholder: "np. głosowa recepcja AI, rezerwacja wizyt przez WhatsApp, przypomnienia...",
        submit: "Zarezerwuj termin"
      }
    },
    analytics: { patientStatus: 'Przychodzące kontakty', responded: 'Obsłużone przez AI' },
    testimonials: {
      badge: 'Weryfikacja Medyczna',
      subtitle: 'Budujemy praktyczną, odpowiedzialną sztuczną inteligencję z personelem medycznym w centrum uwagi.'
    },
    appDownload: { badge: 'Zintegrowana Aplikacja Mobilna' }
  },
  es: {
    features: {
      insight: {
        title: "La Oportunidad",
        description: "Unifique la comunicación y las operaciones en una única plataforma inteligente que convive con sus sistemas actuales."
      }
    },
    pricingIn: {
      title: "Precios sencillos y transparentes para clínicas y hospitales",
      subtitle: "Diseñado para clínicas médicas, consultas dentales y centros especializados. Crezca sin sobrecarga administrativa.",
      monthly: "Facturación mensual",
      annual: "Facturación anual",
      save: "Ahorre un 20%",
      billedAnnually: "Facturado anualmente",
      getStarted: "Empezar ahora",
      requestQuote: "Contactar con ventas",
      mostPopular: "Recomendado para clínicas en crecimiento",
      whatsIncluded: "Qué incluye",
      custom: "A medida",
      perMonth: "/mes"
    },
    bookDemoSection: {
      title: "Vea GreenLane AI en acción",
      subtitle: "Descubra cómo la automatización inteligente optimiza la comunicación y los flujos sanitarios de su centro médico.",
      form: {
        title: "Solicitar demostración en directo",
        name: "Nombre completo",
        email: "Correo electrónico profesional",
        phone: "Número de teléfono",
        clinicName: "Nombre del centro o clínica",
        clinicType: "Tipo de centro",
        clinicTypes: [
          "Centro médico o consulta",
          "Clínica dental",
          "Centro de fisioterapia y rehabilitación",
          "Clínica especializada",
          "Grupo médico multisede",
          "Hospital / Red asistencial",
          "Otro"
        ],
        preferredTime: "Horario preferido para la demo",
        times: [
          "Mañana (9:00 - 12:00)",
          "Mediodía (12:00 - 15:00)",
          "Tarde (15:00 - 18:00)"
        ],
        notes: "¿Qué procesos le interesan especialmente?",
        notesPlaceholder: "ej. recepción telefónica con IA, gestión de citas por WhatsApp, seguimiento...",
        submit: "Programar demo"
      }
    },
    analytics: { patientStatus: 'Peticiones entrantes', responded: 'Resueltas con IA' },
    testimonials: {
      badge: 'Validación Sanitaria',
      subtitle: 'Desarrollamos IA práctica y responsable con los profesionales de la salud en el centro.'
    },
    appDownload: { badge: 'Experiencia Móvil Conectada' }
  }
};

// Deep merge helper
function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (
      source[key] !== null &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// Merge primary and extra data for each locale
deepMerge(translations.fr, frData);
deepMerge(translations.fr, commonExtra.fr);

deepMerge(translations.nl, nlData);
deepMerge(translations.nl, commonExtra.nl);

deepMerge(translations.pl, plData);
deepMerge(translations.pl, commonExtra.pl);

deepMerge(translations.es, esData);
deepMerge(translations.es, commonExtra.es);

// Verify missing keys
function getKeys(obj, prefix = '') {
  let keys = [];
  for (const k of Object.keys(obj)) {
    const full = prefix ? prefix + '.' + k : k;
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      keys = keys.concat(getKeys(obj[k], full));
    } else {
      keys.push(full);
    }
  }
  return keys;
}

const enKeys = new Set(getKeys(translations.en));
console.log('EN total keys:', enKeys.size);

['fr', 'nl', 'pl', 'es'].forEach(lang => {
  const langKeys = new Set(getKeys(translations[lang]));
  const missing = [...enKeys].filter(k => !langKeys.has(k));
  console.log(lang, 'Total keys:', langKeys.size, 'Missing:', missing.length);
  if (missing.length > 0) {
    console.log(lang, 'Missing list:', missing);
  }
});

// Output new file content
const output = `export type Locale = 'en' | 'fr' | 'nl' | 'pl' | 'es';\n\nexport const translations = ${JSON.stringify(translations, null, 2)};\n`;

fs.writeFileSync(srcPath, output, 'utf8');
console.log('Successfully wrote synchronized translations to', srcPath);

