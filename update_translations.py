import re

def update_file():
    with open('src/translations/index.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Data to inject
    languages = ['en', 'fr', 'nl', 'pl', 'es']

    pricing_additions = {
        'en': "      custom: 'Custom pricing',\n      perMonth: '/mo',",
        'fr': "      custom: 'Tarification personnalisée',\n      perMonth: '/mois',",
        'nl': "      custom: 'Aangepaste prijzen',\n      perMonth: '/mnd',",
        'pl': "      custom: 'Cena indywidualna',\n      perMonth: '/mies.',",
        'es': "      custom: 'Precios personalizados',\n      perMonth: '/mes',"
    }

    footer_additions = {
        'en': "      gdpr: 'GDPR Compliance',\n      privacy: 'Privacy Policy',\n      terms: 'Terms of Service',\n      cookieSettings: 'Cookie Settings',\n      contact: 'Contact',\n      subscribeSuccess: 'Thank you for subscribing!',\n      subscribeError: 'Something went wrong. Please try again.',",
        'fr': "      gdpr: 'Conformité RGPD',\n      privacy: 'Politique de confidentialité',\n      terms: 'Conditions d\\'utilisation',\n      cookieSettings: 'Paramètres des cookies',\n      contact: 'Contact',\n      subscribeSuccess: 'Merci de vous être abonné !',\n      subscribeError: 'Un problème est survenu. Veuillez réessayer.',",
        'nl': "      gdpr: 'AVG-naleving',\n      privacy: 'Privacybeleid',\n      terms: 'Servicevoorwaarden',\n      cookieSettings: 'Cookie-instellingen',\n      contact: 'Contact',\n      subscribeSuccess: 'Bedankt voor het abonneren!',\n      subscribeError: 'Er is iets misgegaan. Probeer het opnieuw.',",
        'pl': "      gdpr: 'Zgodność z RODO',\n      privacy: 'Polityka prywatności',\n      terms: 'Warunki korzystania',\n      cookieSettings: 'Ustawienia plików cookie',\n      contact: 'Kontakt',\n      subscribeSuccess: 'Dziękujemy za subskrypcję!',\n      subscribeError: 'Coś poszło nie tak. Spróbuj ponownie.',",
        'es': "      gdpr: 'Cumplimiento del RGPD',\n      privacy: 'Política de privacidad',\n      terms: 'Términos de servicio',\n      cookieSettings: 'Configuración de cookies',\n      contact: 'Contacto',\n      subscribeSuccess: '¡Gracias por suscribirte!',\n      subscribeError: 'Algo salió mal. Por favor, inténtalo de nuevo.',"
    }

    testimonials_additions = {
        'en': """    testimonials: {
      title: 'Trusted by healthcare providers across Europe',
      items: [
        {
          name: 'Lilianna Bocouse',
          role: 'Clinic Director',
          quote: '“GreenLane has transformed how we handle patient communication. The AI voice reception has reduced our front-desk workload by 40% while ensuring no patient call goes unanswered. It\\'s the infrastructure we didn\\'t know we needed.”'
        },
        {
          name: 'Darell Steward',
          role: 'Operations Manager',
          quote: '“The WhatsApp integration is a game-changer for our specialty clinic. We can now coordinate complex appointments and follow-ups through a single secure channel, improving patient response times significantly and reducing operational friction.”'
        },
        {
          name: 'Annette Black',
          role: 'Practice Manager',
          quote: '“Switching to GreenLane\\'s automated scheduling has almost eliminated missed appointments. The system is intuitive for our administrative staff and incredibly convenient for our patients who prefer digital coordination.”'
        }
      ]
    },""",
        'fr': """    testimonials: {
      title: 'Approuvé par les prestataires de soins à travers l\\'Europe',
      items: [
        {
          name: 'Lilianna Bocouse',
          role: 'Directrice de clinique',
          quote: '« GreenLane a transformé notre gestion de la communication avec les patients. La réception vocale par IA a réduit la charge de travail de notre accueil de 40 % tout en garantissant qu\\'aucun appel de patient ne reste sans réponse. C\\'est l\\'infrastructure dont nous ne savions pas que nous avions besoin. »'
        },
        {
          name: 'Darell Steward',
          role: 'Responsable des opérations',
          quote: '« L\\'intégration de WhatsApp change la donne pour notre clinique spécialisée. Nous pouvons désormais coordonner les rendez-vous complexes et les suivis via un seul canal sécurisé, améliorant considérablement les temps de réponse aux patients et réduisant les frictions opérationnelles. »'
        },
        {
          name: 'Annette Black',
          role: 'Gestionnaire de cabinet',
          quote: '« Le passage à la planification automatisée de GreenLane a presque éliminé les rendez-vous manqués. Le système est intuitif pour notre personnel administratif et incroyablement pratique pour nos patients qui préfèrent la coordination numérique. »'
        }
      ]
    },""",
        'nl': """    testimonials: {
      title: 'Vertrouwd door zorgverleners in heel Europa',
      items: [
        {
          name: 'Lilianna Bocouse',
          role: 'Kliniekdirecteur',
          quote: '“GreenLane heeft de manier waarop we patiëntcommunicatie afhandelen getransformeerd. De AI-spraakontvangst heeft onze administratieve werklast met 40% verminderd, terwijl we ervoor zorgen dat geen enkele patiëntoproep onbeantwoord blijft. Het is de infrastructuur waarvan we niet wisten dat we die nodig hadden.”'
        },
        {
          name: 'Darell Steward',
          role: 'Operationeel Manager',
          quote: '“De WhatsApp-integratie is een game-changer voor onze gespecialiseerde kliniek. We kunnen nu complexe afspraken en follow-ups coördineren via één veilig kanaal, wat de responstijden voor patiënten aanzienlijk verbetert en operationele wrijving vermindert.”'
        },
        {
          name: 'Annette Black',
          role: 'Praktijkmanager',
          quote: '“De overstap naar de geautomatiseerde planning van GreenLane heeft gemiste afspraken bijna geëlimineerd. Het systeem is intuïtief voor ons administratief personeel en ongelooflijk handig voor onze patiënten die de voorkeur geven aan digitale coördinatie.”'
        }
      ]
    },""",
        'pl': """    testimonials: {
      title: 'Zaufanie placówek medycznych w całej Europie',
      items: [
        {
          name: 'Lilianna Bocouse',
          role: 'Dyrektor kliniki',
          quote: '„GreenLane przekształcił sposób, w jaki obsługujemy komunikację z pacjentami. Głosowa recepcja AI zmniejszyła obciążenie naszej recepcji o 40%, zapewniając jednocześnie, że żadne połączenie od pacjenta nie pozostanie bez odpowiedzi. To infrastruktura, której nie wiedzieliśmy, że potrzebujemy.”'
        },
        {
          name: 'Darell Steward',
          role: 'Kierownik operacyjny',
          quote: '„Integracja z WhatsApp to przełom dla naszej kliniki specjalistycznej. Możemy teraz koordynować złożone wizyty i dalsze działania za pośrednictwem jednego bezpiecznego kanału, znacznie poprawiając czasy reakcji na zgłoszenia pacjentów i zmniejszając tarcia operacyjne.”'
        },
        {
          name: 'Annette Black',
          role: 'Kierownik praktyki',
          quote: '„Przejście na automatyczne planowanie GreenLane prawie wyeliminowało nieodebrane wizyty. System jest intuicyjny dla naszego personelu administracyjnego i niezwykle wygodny dla pacjentów, którzy preferują cyfrową koordynację.”'
        }
      ]
    },""",
        'es': """    testimonials: {
      title: 'Con la confianza de proveedores de atención médica en toda Europa',
      items: [
        {
          name: 'Lilianna Bocouse',
          role: 'Directora de Clínica',
          quote: '“GreenLane ha transformado la forma en que manejamos la comunicación con los pacientes. La recepción de voz por IA ha reducido nuestra carga de trabajo en recepción en un 40% al tiempo que garantiza que ninguna llamada de un paciente quede sin respuesta. Es la infraestructura que no sabíamos que necesitábamos.”'
        },
        {
          name: 'Darell Steward',
          role: 'Gerente de Operaciones',
          quote: '“La integración de WhatsApp es un cambio de juego para nuestra clínica de especialidades. Ahora podemos coordinar citas complejas y seguimientos a través de un único canal seguro, mejorando significativamente los tiempos de respuesta de los pacientes y reduciendo la fricción operativa.”'
        },
        {
          name: 'Annette Black',
          role: 'Gerente de Práctica',
          quote: '“El cambio a la programación automatizada de GreenLane casi ha eliminado las citas perdidas. El sistema es intuitivo para nuestro personal administrativo e increíblemente conveniente para nuestros pacientes que prefieren la coordinación digital.”'
        }
      ]
    },"""
    }

    # Iterate through the content to inject translations
    for lang in languages:
        # Find pricing for the specific language
        pricing_pattern = re.compile(rf"(  {lang}: {{.*?    pricing: {{.*?      subtitle: .*?\n)", re.DOTALL)
        content = pricing_pattern.sub(rf"\1{pricing_additions[lang]}\n", content, count=1)

        # Find footer for the specific language
        footer_pattern = re.compile(rf"(  {lang}: {{.*?    footer: {{.*?      newsletterButton: .*?\n)", re.DOTALL)
        content = footer_pattern.sub(rf"\1{footer_additions[lang]}\n", content, count=1)

        # Find appDownload for the specific language and inject testimonials before it
        app_download_pattern = re.compile(rf"(  {lang}: {{.*?)(    appDownload: {{)", re.DOTALL)
        content = app_download_pattern.sub(rf"\1{testimonials_additions[lang]}\n\2", content, count=1)

    with open('src/translations/index.ts', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Success")

update_file()
