import re

filepath = 'src/translations/index.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

languages = ['fr', 'nl', 'pl', 'es']

ctas_taglines = {
    'fr': "      tagline: 'Commencez avec un flux de travail. Connectez vos opérations de santé. Évoluez avec l\\'IA.',",
    'nl': "      tagline: 'Begin met één workflow. Verbind uw zorgoperatie. Schaal met AI.',",
    'pl': "      tagline: 'Zacznij od jednego przepływu pracy. Połącz swoje operacje opieki zdrowotnej. Skaluj z AI.',",
    'es': "      tagline: 'Comienza con un flujo de trabajo. Conecta tu operación de atención médica. Escala con IA.',"
}

for lang in languages:
    # Add tagline to ctas
    pattern_add = re.compile(rf"(  {lang}: {{.*?    ctas: {{\n      title: '.*?',\n      subtitle: '.*?',\n)", re.DOTALL)
    content = pattern_add.sub(lambda m, l=lang: m.group(1) + ctas_taglines[l] + "\n", content, count=1)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done!")
