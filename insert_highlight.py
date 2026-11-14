import re

def insert_highlight():
    filepath = 'src/translations/index.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    highlights = {
        'fr': "      highlight: 'Connectez les personnes. Automatisez les flux de travail. Coordonnez les soins de santé. Évoluez avec l\\'IA.',",
        'nl': "      highlight: 'Verbind mensen. Automatiseer workflows. Coördineer de zorg. Schaal met AI.',",
        'pl': "      highlight: 'Połącz ludzi. Zautomatyzuj przepływy pracy. Koordynuj opiekę zdrowotną. Skaluj z AI.',",
        'es': "      highlight: 'Conecta a las personas. Automatiza los flujos de trabajo. Coordina la atención médica. Escala con IA.',"
    }

    for lang in ['fr', 'nl', 'pl', 'es']:
        pattern = re.compile(rf"(  {lang}: {{.*?    hero: {{)", re.DOTALL)
        content = pattern.sub(lambda m, l=lang: m.group(1) + "\n" + highlights[l], content, count=1)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Highlight inserted successfully!")

if __name__ == '__main__':
    insert_highlight()
