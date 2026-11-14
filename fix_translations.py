import re

filepath = 'src/translations/index.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

languages = ['fr', 'nl', 'pl', 'es']

# 1. pillars.description
pillars_desc = {
    'fr': "      description: 'GreenLane crée une couche alimentée par l\\'IA entre les patients, les équipes de santé, les flux de travail et les systèmes technologiques — aidant les organisations à automatiser les tâches répétitives tout en gardant le contrôle humain.',",
    'nl': "      description: 'GreenLane creëert een AI-gestuurde laag tussen patiënten, zorgteams, workflows en technologische systemen — en helpt organisaties repetitief werk te automatiseren terwijl mensen in controle blijven.',",
    'pl': "      description: 'GreenLane tworzy warstwę zasilaną przez sztuczną inteligencję między pacjentami, zespołami opieki zdrowotnej, przepływami pracy i systemami technologicznymi — pomagając organizacjom zautomatyzować powtarzalną pracę, zachowując kontrolę ludzi.',",
    'es': "      description: 'GreenLane crea una capa impulsada por IA entre pacientes, equipos de atención médica, flujos de trabajo y sistemas tecnológicos — ayudando a las organizaciones a automatizar el trabajo repetitivo mientras mantienen a las personas en control.',"
}

# 2. features.description
features_desc = {
    'fr': "      description: 'GreenLane rassemble les capacités dont les organisations de santé ont besoin pour connecter la communication, l\\'engagement et les flux opérationnels.',",
    'nl': "      description: 'GreenLane brengt de mogelijkheden samen die zorgorganisaties nodig hebben om communicatie, betrokkenheid en operationele workflows te verbinden.',",
    'pl': "      description: 'GreenLane łączy możliwości, których organizacje opieki zdrowotnej potrzebują, aby połączyć komunikację, zaangażowanie i operacyjne przepływy pracy.',",
    'es': "      description: 'GreenLane reúne las capacidades que las organizaciones de atención médica necesitan para conectar la comunicación, el compromiso y los flujos de trabajo operativos.',"
}

# 3. security (footerText, roiDisclaimer, responsibleAiDesc)
security_additions = {
    'fr': """      responsibleAiDesc: 'GreenLane est conçu pour soutenir les équipes de santé — et non pour remplacer la responsabilité clinique.\\nL\\'IA est utilisée pour des flux de communication et opérationnels définis, tandis que les décisions sensibles, complexes et cliniques restent soumises à une supervision humaine appropriée.',
      footerText: 'Des cabinets indépendants aux grandes organisations de santé, GreenLane fournit une base évolutive adaptée au fonctionnement de la santé.',
      roiDisclaimer: 'Les résultats réels varient selon la taille de l\\'organisation, le volume de communication, les flux de travail, la configuration et le niveau d\\'automatisation. Les résultats doivent être validés par des déploiements et des projets pilotes.',""",
    'nl': """      responsibleAiDesc: 'GreenLane is ontworpen om zorgteams te ondersteunen — niet om klinische verantwoordelijkheid te vervangen.\\nAI wordt gebruikt voor gedefinieerde communicatie en operationele workflows, terwijl gevoelige, complexe en klinische beslissingen onderhevig blijven aan passend menselijk toezicht.',
      footerText: 'Van onafhankelijke praktijken tot groeiende zorgorganisaties, GreenLane biedt een basis die schaalt met de manier waarop de zorg werkt.',
      roiDisclaimer: 'Werkelijke resultaten variëren afhankelijk van de grootte van de organisatie, het communicatievolume, de workflows, de configuratie en het automatiseringsniveau. Resultaten moeten worden gevalideerd via klantimplementaties en pilots.',""",
    'pl': """      responsibleAiDesc: 'GreenLane został zaprojektowany, aby wspierać zespoły opieki zdrowotnej — a nie zastępować odpowiedzialność kliniczną.\\nSztuczna inteligencja jest używana do zdefiniowanej komunikacji i operacyjnych przepływów pracy, podczas gdy wrażliwe, złożone i kliniczne decyzje podlegają odpowiedniemu nadzorowi ludzkiemu.',
      footerText: 'Od niezależnych praktyk po rosnące organizacje opieki zdrowotnej, GreenLane zapewnia fundament, który skaluje się z tym, jak działa opieka zdrowotna.',
      roiDisclaimer: 'Rzeczywiste wyniki różnią się w zależności od wielkości organizacji, wolumenu komunikacji, przepływów pracy, konfiguracji i poziomu automatyzacji. Wyniki powinny być walidowane przez wdrożenia u klientów i pilotaże.',""",
    'es': """      responsibleAiDesc: 'GreenLane está diseñado para apoyar a los equipos de atención médica — no para reemplazar la responsabilidad clínica.\\nLa IA se utiliza para flujos de trabajo operativos y de comunicación definidos, mientras que las decisiones sensibles, complejas y clínicas permanecen sujetas a una supervisión humana adecuada.',
      footerText: 'Desde prácticas independientes hasta organizaciones de atención médica en crecimiento, GreenLane proporciona una base que escala con la forma en que opera la atención médica.',
      roiDisclaimer: 'Los resultados reales varían según el tamaño de la organización, el volumen de comunicación, los flujos de trabajo, la configuración y el nivel de automatización. Los resultados deben validarse mediante implementaciones de clientes y pilotos.',"""
}

# 4. footer.links
footer_links = {
    'fr': """      links: {
        whyGreenLane: 'Pourquoi GreenLane',
        problem: 'Problème',
        solution: 'Solution',
        capabilities: 'Capacités',
        howItWorks: 'Comment ça marche',
        pricing: 'Tarifs'
      },""",
    'nl': """      links: {
        whyGreenLane: 'Waarom GreenLane',
        problem: 'Probleem',
        solution: 'Oplossing',
        capabilities: 'Mogelijkheden',
        howItWorks: 'Hoe het werkt',
        pricing: 'Prijzen'
      },""",
    'pl': """      links: {
        whyGreenLane: 'Dlaczego GreenLane',
        problem: 'Problem',
        solution: 'Rozwiązanie',
        capabilities: 'Możliwości',
        howItWorks: 'Jak to działa',
        pricing: 'Cennik'
      },""",
    'es': """      links: {
        whyGreenLane: 'Por qué GreenLane',
        problem: 'Problema',
        solution: 'Solución',
        capabilities: 'Capacidades',
        howItWorks: 'Cómo funciona',
        pricing: 'Precios'
      },"""
}

# 5. contact.info.address.offices (India)
india_address = {
    'fr': ",\n            { name: 'India', address: 'No. 66/19, 8th Street, Gopalapuram, Vellore, Tamil Nadu, 632006, India' }",
    'nl': ",\n            { name: 'India', address: 'No. 66/19, 8th Street, Gopalapuram, Vellore, Tamil Nadu, 632006, India' }",
    'pl': ",\n            { name: 'India', address: 'No. 66/19, 8th Street, Gopalapuram, Vellore, Tamil Nadu, 632006, India' }",
    'es': ",\n            { name: 'India', address: 'No. 66/19, 8th Street, Gopalapuram, Vellore, Tamil Nadu, 632006, India' }"
}


for lang in languages:
    # 1. pillars
    pattern = re.compile(rf"(  {lang}: {{.*?    pillars: {{\n      title: '.*?',\n      subtitle: '.*?',\n)", re.DOTALL)
    content = pattern.sub(lambda m, l=lang: m.group(1) + pillars_desc[l] + "\n", content, count=1)
    
    # 2. features
    pattern = re.compile(rf"(  {lang}: {{.*?    features: {{\n      title: '.*?',\n      subtitle: '.*?',\n)", re.DOTALL)
    content = pattern.sub(lambda m, l=lang: m.group(1) + features_desc[l] + "\n", content, count=1)
    
    # 3. security
    pattern = re.compile(rf"(  {lang}: {{.*?    security: {{.*?      \])(\n)", re.DOTALL)
    content = pattern.sub(lambda m, l=lang: m.group(1) + ",\n" + security_additions[l] + "\n", content, count=1)
    
    # 4. footer links (insert before tagline)
    pattern = re.compile(rf"(  {lang}: {{.*?    footer: {{\n)(      tagline: ')", re.DOTALL)
    content = pattern.sub(lambda m, l=lang: m.group(1) + footer_links[l] + "\n" + m.group(2), content, count=1)
    
    # 5. India address
    pattern = re.compile(rf"(  {lang}: {{.*?    contact: {{.*?        address: {{.*?          offices: \[.*?)(          \])", re.DOTALL)
    content = pattern.sub(lambda m, l=lang: m.group(1).rstrip() + india_address[l] + "\n" + m.group(2), content, count=1)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done!")
