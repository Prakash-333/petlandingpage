import re

def update_file():
    filepath = 'src/translations/index.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Testimonials static card for fr, nl, pl, es
    # In the original file, it looks like:
    #     testimonials: {
    #       title: 'Approuvé par les prestataires de soins à travers l\'Europe',
    #       items: [
    #         {
    # ...
    #         }
    #       ]
    #     },

    # Let's use regex but replace EXACTLY the block.
    # The block starts with `    testimonials: {` and ends with `      ]\n    },`
    
    fr_testimonials = """    testimonials: {
      title: 'Approuvé par les prestataires de soins',
      subtitle: 'Construit avec des professionnels de santé',
      description: 'GreenLane travaille avec des professionnels de santé et des organisations pour développer des solutions pratiques d\\'IA pour l\\'engagement des patients, la communication et l\\'automatisation opérationnelle.',
      programs: 'Programmes pilotes',
      partnerships: 'Partenariats de santé',
      development: 'Développement continu de produits'
    },"""
    nl_testimonials = """    testimonials: {
      title: 'Vertrouwd door Zorgteams',
      subtitle: 'Gebouwd met Zorgverleners',
      description: 'GreenLane werkt samen met zorgprofessionals en -organisaties om praktische AI-oplossingen te ontwikkelen voor patiëntbetrokkenheid, communicatie en operationele automatisering.',
      programs: 'Pilotprogramma\\'s',
      partnerships: 'Zorgpartnerschappen',
      development: 'Continue productontwikkeling'
    },"""
    pl_testimonials = """    testimonials: {
      title: 'Zaufanie Zespołów Medycznych',
      subtitle: 'Zbudowane z Pracownikami Ochrony Zdrowia',
      description: 'GreenLane współpracuje z pracownikami ochrony zdrowia i organizacjami nad rozwojem praktycznych rozwiązań AI do zaangażowania pacjentów, komunikacji i automatyzacji operacyjnej.',
      programs: 'Programy pilotażowe',
      partnerships: 'Partnerstwa medyczne',
      development: 'Ciągły rozwój produktu'
    },"""
    es_testimonials = """    testimonials: {
      title: 'Con la confianza de los Equipos de Salud',
      subtitle: 'Construido con Proveedores de Salud',
      description: 'GreenLane trabaja con profesionales de la salud y organizaciones para desarrollar soluciones prácticas de IA para la participación del paciente, la comunicación y la automatización operativa.',
      programs: 'Programas piloto',
      partnerships: 'Asociaciones de salud',
      development: 'Desarrollo continuo de productos'
    },"""

    testimonials_additions = {'fr': fr_testimonials, 'nl': nl_testimonials, 'pl': pl_testimonials, 'es': es_testimonials}

    for lang in ['fr', 'nl', 'pl', 'es']:
        pattern = re.compile(rf"(  {lang}: {{.*?)(    testimonials: {{.*?      \]\n    }},)", re.DOTALL)
        content = pattern.sub(lambda m, l=lang: m.group(1) + testimonials_additions[l], content, count=1)

    # Removed founder_additions since they already exist in the original file.

    # 3. Contact Form edits
    # We replace only the `form: { ... }` inside `contact: { ... }`
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
    for lang in ['fr', 'nl', 'pl', 'es']:
        pattern = re.compile(rf"(  {lang}: {{.*?    contact: {{.*?)(      form: {{.*?      }},)(.*?    }},)", re.DOTALL)
        content = pattern.sub(lambda m, l=lang: m.group(1) + contact_form_additions[l] + m.group(3), content, count=1)

    # 4. English links addition for Footer if missing
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
    if 'links: {' not in content.split('en: {')[1].split('footer: {')[1].split('},')[0]:
        pattern = re.compile(r"(  en: \{.*?    footer: \{)(.*?)(\n      newsletterTitle:)", re.DOTALL)
        content = pattern.sub(lambda m: m.group(1) + m.group(2) + "\n" + en_footer_links + m.group(3), content, count=1)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")

if __name__ == '__main__':
    update_file()
