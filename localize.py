import re
import json

def update_file():
    filepath = 'src/translations/index.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The languages to update (excluding 'en' as it's already done)
    languages = ['fr', 'nl', 'pl', 'es']

    # 1. Update Testimonials static card
    testimonials_additions = {
        'fr': """    testimonials: {
      title: 'Approuvé par les prestataires de soins',
      subtitle: 'Construit avec des professionnels de santé',
      description: 'GreenLane travaille avec des professionnels de santé et des organisations pour développer des solutions pratiques d\\'IA pour l\\'engagement des patients, la communication et l\\'automatisation opérationnelle.',
      programs: 'Programmes pilotes',
      partnerships: 'Partenariats de santé',
      development: 'Développement continu de produits'
    },""",
        'nl': """    testimonials: {
      title: 'Vertrouwd door Zorgteams',
      subtitle: 'Gebouwd met Zorgverleners',
      description: 'GreenLane werkt samen met zorgprofessionals en -organisaties om praktische AI-oplossingen te ontwikkelen voor patiëntbetrokkenheid, communicatie en operationele automatisering.',
      programs: 'Pilotprogramma\\'s',
      partnerships: 'Zorgpartnerschappen',
      development: 'Continue productontwikkeling'
    },""",
        'pl': """    testimonials: {
      title: 'Zaufanie Zespołów Medycznych',
      subtitle: 'Zbudowane z Pracownikami Ochrony Zdrowia',
      description: 'GreenLane współpracuje z pracownikami ochrony zdrowia i organizacjami nad rozwojem praktycznych rozwiązań AI do zaangażowania pacjentów, komunikacji i automatyzacji operacyjnej.',
      programs: 'Programy pilotażowe',
      partnerships: 'Partnerstwa medyczne',
      development: 'Ciągły rozwój produktu'
    },""",
        'es': """    testimonials: {
      title: 'Con la confianza de los Equipos de Salud',
      subtitle: 'Construido con Proveedores de Salud',
      description: 'GreenLane trabaja con profesionales de la salud y organizaciones para desarrollar soluciones prácticas de IA para la participación del paciente, la comunicación y la automatización operativa.',
      programs: 'Programas piloto',
      partnerships: 'Asociaciones de salud',
      development: 'Desarrollo continuo de productos'
    },"""
    }

    # 2. Update Footer Links & Newsletter
    footer_additions = {
        'fr': """    footer: {
      tagline: 'Plateforme d\\'IA pour l\\'écosystème de santé connecté.\\nConnectant patients, fournisseurs, flux de travail et systèmes intelligents pour aider les organisations de santé à fonctionner plus intelligemment.',
      copyright: '© 2026 GreenLane AI. Propulsé par Digi Mabble.',
      platform: 'Plateforme',
      legal: 'Légal',
      support: 'Support',
      compliance: 'Sécurité et Conformité',
      socials: 'Réseaux Sociaux',
      newsletterTitle: 'Restez Connecté',
      newsletterPlaceholder: 'Entrez votre adresse e-mail',
      newsletterButton: 'S\\'ABONNER',
      links: {
        whyGreenLane: 'Pourquoi GreenLane',
        problem: 'Problème',
        solution: 'Solution',
        capabilities: 'Capacités',
        howItWorks: 'Comment ça marche',
        pricing: 'Tarification',
        gdpr: 'RGPD & Protection des Données',
        privacy: 'Politique de Confidentialité',
        terms: 'Conditions d\\'Utilisation',
        contact: 'Contact'
      },
      gdpr: 'Conformité RGPD',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\\'utilisation',
      cookieSettings: 'Paramètres des cookies',
      contact: 'Contact',
      subscribeSuccess: 'Merci de vous être abonné !',
      subscribeError: 'Un problème est survenu. Veuillez réessayer.'
    },""",
        'nl': """    footer: {
      tagline: 'AI-platform voor het verbonden zorgecosysteem.\\nHet verbinden van patiënten, zorgverleners, workflows en intelligente systemen om zorgorganisaties slimmer te laten opereren.',
      copyright: '© 2026 GreenLane AI. Mogelijk gemaakt door Digi Mabble.',
      platform: 'Platform',
      legal: 'Juridisch',
      support: 'Ondersteuning',
      compliance: 'Beveiliging en Naleving',
      socials: 'Socials',
      newsletterTitle: 'Blijf Verbonden',
      newsletterPlaceholder: 'Voer uw e-mailadres in',
      newsletterButton: 'ABONNEREN',
      links: {
        whyGreenLane: 'Waarom GreenLane',
        problem: 'Probleem',
        solution: 'Oplossing',
        capabilities: 'Mogelijkheden',
        howItWorks: 'Hoe Het Werkt',
        pricing: 'Prijzen',
        gdpr: 'AVG & Gegevensbescherming',
        privacy: 'Privacybeleid',
        terms: 'Gebruiksvoorwaarden',
        contact: 'Contact'
      },
      gdpr: 'AVG-naleving',
      privacy: 'Privacybeleid',
      terms: 'Servicevoorwaarden',
      cookieSettings: 'Cookie-instellingen',
      contact: 'Contact',
      subscribeSuccess: 'Bedankt voor het abonneren!',
      subscribeError: 'Er is iets misgegaan. Probeer het opnieuw.'
    },""",
        'pl': """    footer: {
      tagline: 'Platforma AI dla połączonego ekosystemu opieki zdrowotnej.\\nŁączymy pacjentów, dostawców, przepływy pracy i inteligentne systemy, aby pomóc organizacjom medycznym działać inteligentniej.',
      copyright: '© 2026 GreenLane AI. Zasilane przez Digi Mabble.',
      platform: 'Platforma',
      legal: 'Informacje Prawne',
      support: 'Wsparcie',
      compliance: 'Bezpieczeństwo i Zgodność',
      socials: 'Społeczności',
      newsletterTitle: 'Zostań w Kontakcie',
      newsletterPlaceholder: 'Wpisz swój adres e-mail',
      newsletterButton: 'SUBSKRYBUJ',
      links: {
        whyGreenLane: 'Dlaczego GreenLane',
        problem: 'Problem',
        solution: 'Rozwiązanie',
        capabilities: 'Możliwości',
        howItWorks: 'Jak to działa',
        pricing: 'Cennik',
        gdpr: 'RODO i Ochrona Danych',
        privacy: 'Polityka Prywatności',
        terms: 'Warunki Użytkowania',
        contact: 'Kontakt'
      },
      gdpr: 'Zgodność z RODO',
      privacy: 'Polityka prywatności',
      terms: 'Warunki korzystania',
      cookieSettings: 'Ustawienia plików cookie',
      contact: 'Kontakt',
      subscribeSuccess: 'Dziękujemy za subskrypcję!',
      subscribeError: 'Coś poszło nie tak. Spróbuj ponownie.'
    },""",
        'es': """    footer: {
      tagline: 'Plataforma de IA para el ecosistema de salud conectado.\\nConectando pacientes, proveedores, flujos de trabajo y sistemas inteligentes para ayudar a las organizaciones de salud a operar de manera más inteligente.',
      copyright: '© 2026 GreenLane AI. Desarrollado por Digi Mabble.',
      platform: 'Plataforma',
      legal: 'Legal',
      support: 'Soporte',
      compliance: 'Seguridad y Cumplimiento',
      socials: 'Redes Sociales',
      newsletterTitle: 'Mantente Conectado',
      newsletterPlaceholder: 'Introduce tu correo electrónico',
      newsletterButton: 'SUSCRIBIRSE',
      links: {
        whyGreenLane: 'Por qué GreenLane',
        problem: 'Problema',
        solution: 'Solución',
        capabilities: 'Capacidades',
        howItWorks: 'Cómo Funciona',
        pricing: 'Precios',
        gdpr: 'RGPD y Protección de Datos',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Uso',
        contact: 'Contacto'
      },
      gdpr: 'Cumplimiento del RGPD',
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
      cookieSettings: 'Configuración de cookies',
      contact: 'Contacto',
      subscribeSuccess: '¡Gracias por suscribirte!',
      subscribeError: 'Algo salió mal. Por favor, inténtalo de nuevo.'
    },"""
    }

    # 3. Founder Button & Role
    founder_additions = {
        'fr': """    founder: {
      name: 'Manivannan Babu',
      role: 'Fondateur & PDG, GreenLane AI',
      meetFounder: 'Rencontrer le fondateur',
      bookMeeting: 'Réserver une réunion',
      connectLinkedin: 'Se connecter sur LinkedIn'
    },""",
        'nl': """    founder: {
      name: 'Manivannan Babu',
      role: 'Oprichter & CEO, GreenLane AI',
      meetFounder: 'Ontmoet de oprichter',
      bookMeeting: 'Boek een afspraak',
      connectLinkedin: 'Verbind op LinkedIn'
    },""",
        'pl': """    founder: {
      name: 'Manivannan Babu',
      role: 'Założyciel i CEO, GreenLane AI',
      meetFounder: 'Poznaj założyciela',
      bookMeeting: 'Umów się na spotkanie',
      connectLinkedin: 'Połącz się na LinkedIn'
    },""",
        'es': """    founder: {
      name: 'Manivannan Babu',
      role: 'Fundador y CEO, GreenLane AI',
      meetFounder: 'Conoce al fundador',
      bookMeeting: 'Reservar una reunión',
      connectLinkedin: 'Conectar en LinkedIn'
    },"""
    }

    # 4. CTAs Block
    ctas_additions = {
        'fr': """    ctas: {
      title: 'L\\'avenir des soins de santé est connecté',
      subtitle: 'Les soins de santé deviennent de plus en plus numériques, mais les patients, les prestataires, les équipes et les systèmes opèrent toujours dans des environnements fragmentés.\\n\\nGreenLane construit la couche intelligente qui les relie.\\n\\nDe la communication et de l\\'engagement des patients aujourd\\'hui aux opérations de santé intelligentes et à une connectivité plus large demain, GreenLane crée les fondations pour un avenir de santé plus connecté.',
      tagline: 'Commencez par un flux de travail. Connectez votre opération de santé. Évoluez avec l\\'IA.'
    },""",
        'nl': """    ctas: {
      title: 'De Toekomst van de Zorg is Verbonden',
      subtitle: 'Gezondheidszorg wordt steeds digitaler, maar patiënten, zorgverleners, teams en systemen opereren nog steeds in gefragmenteerde omgevingen.\\n\\nGreenLane bouwt de intelligente laag die ze met elkaar verbindt.\\n\\nVan patiëntcommunicatie en betrokkenheid vandaag tot intelligente zorgoperaties en bredere zorgconnectiviteit morgen, GreenLane creëert de basis voor een meer verbonden zorgtoekomst.',
      tagline: 'Begin met één workflow. Verbind uw zorgoperatie. Schaal met AI.'
    },""",
        'pl': """    ctas: {
      title: 'Przyszłość Opieki Zdrowotnej jest Połączona',
      subtitle: 'Opieka zdrowotna staje się coraz bardziej cyfrowa, ale pacjenci, dostawcy, zespoły i systemy wciąż działają w rozdrobnionych środowiskach.\\n\\nGreenLane buduje inteligentną warstwę, która ich łączy.\\n\\nOd dzisiejszej komunikacji i zaangażowania pacjentów po inteligentne operacje medyczne i szerszą łączność w przyszłości, GreenLane tworzy fundamenty dla bardziej połączonej przyszłości ochrony zdrowia.',
      tagline: 'Zacznij od jednego przepływu pracy. Połącz swoje operacje medyczne. Skaluj z AI.'
    },""",
        'es': """    ctas: {
      title: 'El Futuro de la Salud está Conectado',
      subtitle: 'La atención médica se está volviendo cada vez más digital, pero los pacientes, proveedores, equipos y sistemas aún operan en entornos fragmentados.\\n\\nGreenLane está construyendo la capa inteligente que los conecta.\\n\\nDesde la comunicación y el compromiso del paciente hoy hasta las operaciones de salud inteligentes y la conectividad más amplia de la salud mañana, GreenLane está creando la base para un futuro de salud más conectado.',
      tagline: 'Comienza con un flujo de trabajo. Conecta tu operación de salud. Escala con IA.'
    },"""
    }

    # 5. Inefficiency Block Modification (replacing the insight part)
    inefficiency_additions = {
        'fr': """      insight: {
        title: 'Le défi n\\'est plus simplement de gérer la demande des patients',
        description: 'C\\'est de créer une infrastructure intelligente qui connecte les personnes, les flux de travail et les systèmes à travers les opérations de santé.'
      }
    },""",
        'nl': """      insight: {
        title: 'De uitdaging is niet langer slechts het beheren van patiëntvraag',
        description: 'Het is het creëren van intelligente infrastructuur die mensen, workflows en systemen in de hele zorgoperatie met elkaar verbindt.'
      }
    },""",
        'pl': """      insight: {
        title: 'Wyzwanie nie polega już tylko na zarządzaniu popytem pacjentów',
        description: 'Polega na stworzeniu inteligentnej infrastruktury, która łączy ludzi, przepływy pracy i systemy w całych operacjach medycznych.'
      }
    },""",
        'es': """      insight: {
        title: 'El desafío ya no es simplemente gestionar la demanda de los pacientes',
        description: 'Es crear una infraestructura inteligente que conecte a las personas, los flujos de trabajo y los sistemas en todas las operaciones de salud.'
      }
    },"""
    }

    # 6. Contact Section Form updates
    contact_form_additions = {
        'fr': """      form: {
        name: 'Votre Nom',
        email: 'Adresse e-mail',
        phone: 'Numéro de téléphone',
        company: 'Organisation',
        message: 'Comment pouvons-nous aider ?',
        messagePlaceholder: 'Parlez-nous de vos besoins...',
        submit: 'Envoyer le message',
        submitting: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
        error: 'Échec de l\\'envoi. Veuillez réessayer.'
      },""",
        'nl': """      form: {
        name: 'Uw Naam',
        email: 'E-mailadres',
        phone: 'Telefoonnummer',
        company: 'Organisatie',
        message: 'Hoe kunnen we helpen?',
        messagePlaceholder: 'Vertel ons over uw behoeften...',
        submit: 'Bericht versturen',
        submitting: 'Versturen...',
        success: 'Bericht succesvol verzonden!',
        error: 'Verzenden mislukt. Probeer het opnieuw.'
      },""",
        'pl': """      form: {
        name: 'Twoje Imię',
        email: 'Adres e-mail',
        phone: 'Numer telefonu',
        company: 'Organizacja',
        message: 'W czym możemy pomóc?',
        messagePlaceholder: 'Opowiedz nam o swoich potrzebach...',
        submit: 'Wyślij wiadomość',
        submitting: 'Wysyłanie...',
        success: 'Wiadomość wysłana pomyślnie!',
        error: 'Wysłanie nie powiodło się. Spróbuj ponownie.'
      },""",
        'es': """      form: {
        name: 'Tu Nombre',
        email: 'Dirección de correo electrónico',
        phone: 'Número de teléfono',
        company: 'Organización',
        message: '¿Cómo podemos ayudar?',
        messagePlaceholder: 'Cuéntanos sobre tus necesidades...',
        submit: 'Enviar Mensaje',
        submitting: 'Enviando...',
        success: '¡Mensaje enviado con éxito!',
        error: 'No se pudo enviar. Por favor, inténtalo de nuevo.'
      },"""
    }

    # Iterate through the content to inject translations
    for lang in languages:
        # 1. Update Testimonials block
        testimonials_pattern = re.compile(rf"(  {lang}: {{.*?)(    testimonials: {{.*?      \]\n    }},)", re.DOTALL)
        content = testimonials_pattern.sub(lambda m, l=lang: m.group(1) + testimonials_additions[l], content, count=1)

        # 2. Update Footer block
        footer_pattern = re.compile(rf"(  {lang}: {{.*?)(    footer: {{.*?    }},)", re.DOTALL)
        content = footer_pattern.sub(lambda m, l=lang: m.group(1) + footer_additions[l], content, count=1)

        # 3. Add Founder block (add right after testimonials or footer)
        # We'll just insert founder before faq
        founder_insertion = re.compile(rf"(  {lang}: {{.*?)(    faq: {{)", re.DOTALL)
        content = founder_insertion.sub(lambda m, l=lang: m.group(1) + founder_additions[l] + "\n" + m.group(2), content, count=1)

        # 4. Update CTAs block
        ctas_pattern = re.compile(rf"(  {lang}: {{.*?)(    ctas: {{.*?    }},)", re.DOTALL)
        content = ctas_pattern.sub(lambda m, l=lang: m.group(1) + ctas_additions[l], content, count=1)

        # 5. Update Inefficiency Insight block
        inefficiency_pattern = re.compile(rf"(  {lang}: {{.*?      insight: {{.*?      }}\n    }},)", re.DOTALL)
        content = inefficiency_pattern.sub(lambda m, l=lang: m.group(1) + inefficiency_additions[l], content, count=1)

        # 6. Update Contact Form block
        contact_pattern = re.compile(rf"(  {lang}: {{.*?    contact: {{.*?)(      form: {{.*?      }})(.*?    }},)", re.DOTALL)
        content = contact_pattern.sub(lambda m, l=lang: m.group(1) + contact_form_additions[l] + m.group(3), content, count=1)


    # Fix English missing elements
    # Add footer links to English if missing
    en_footer_links = """      links: {
        whyGreenLane: 'Why GreenLane',
        problem: 'Problem',
        solution: 'Solution',
        capabilities: 'Capabilities',
        howItWorks: 'How It Works',
        pricing: 'Pricing',
        gdpr: 'GDPR & Data Protection',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        contact: 'Contact'
      },"""
    en_footer_pattern = re.compile(r"(  en: \{.*?    footer: \{)(.*?)(\n      newsletterTitle:)", re.DOTALL)
    # Check if links already exists
    if 'links: {' not in content.split('en: {')[1].split('footer: {')[1].split('},')[0]:
       content = en_footer_pattern.sub(lambda m: m.group(1) + m.group(2) + "\n" + en_footer_links + m.group(3), content, count=1)
       
    # Add founder to English
    en_founder = """    founder: {
      name: 'Manivannan Babu',
      role: 'Founder & CEO, GreenLane AI',
      meetFounder: 'Meet the Founder',
      bookMeeting: 'Book a Meeting',
      connectLinkedin: 'Connect on LinkedIn'
    },"""
    en_founder_insertion = re.compile(r"(  en: \{.*?)(    faq: \{)", re.DOTALL)
    if 'founder: {' not in content.split('en: {')[1]:
        content = en_founder_insertion.sub(lambda m: m.group(1) + en_founder + "\n" + m.group(2), content, count=1)

    # Add testimonials to English
    en_testimonials = """    testimonials: {
      title: 'Trusted by Healthcare Teams',
      subtitle: 'Built With Healthcare Providers',
      description: 'GreenLane is working with healthcare professionals and organizations to develop practical AI solutions for patient engagement, communication and operational automation.',
      programs: 'Pilot programs',
      partnerships: 'Healthcare partnerships',
      development: 'Continuous product development'
    },"""
    en_test_pattern = re.compile(r"(  en: \{.*?)(    testimonials: \{.*?      \]\n    \},)", re.DOTALL)
    content = en_test_pattern.sub(lambda m: m.group(1) + en_testimonials, content, count=1)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Localization injected successfully!")

if __name__ == '__main__':
    update_file()
