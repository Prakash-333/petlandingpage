import re

filepath = 'src/translations/index.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

languages = ['fr', 'nl', 'pl', 'es']

# 2. capabilities.description (was mistakenly put in features)
capabilities_desc = {
    'fr': "      description: 'GreenLane rassemble les capacités dont les organisations de santé ont besoin pour connecter la communication, l\\'engagement et les flux opérationnels.',",
    'nl': "      description: 'GreenLane brengt de mogelijkheden samen die zorgorganisaties nodig hebben om communicatie, betrokkenheid en operationele workflows te verbinden.',",
    'pl': "      description: 'GreenLane łączy możliwości, których organizacje opieki zdrowotnej potrzebują, aby połączyć komunikację, zaangażowanie i operacyjne przepływy pracy.',",
    'es': "      description: 'GreenLane reúne las capacidades que las organizaciones de atención médica necesitan para conectar la comunicación, el compromiso y los flujos de trabajo operativos.',"
}

for lang in languages:
    # Remove description from features
    pattern_remove = re.compile(rf"(  {lang}: {{.*?    features: {{\n      title: '.*?',\n      subtitle: '.*?',\n)      description: '.*?',\n", re.DOTALL)
    content = pattern_remove.sub(lambda m: m.group(1), content, count=1)
    
    # Add description to capabilities
    pattern_add = re.compile(rf"(  {lang}: {{.*?    capabilities: {{\n      title: '.*?',\n      subtitle: '.*?',\n)", re.DOTALL)
    content = pattern_add.sub(lambda m, l=lang: m.group(1) + capabilities_desc[l] + "\n", content, count=1)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done!")
