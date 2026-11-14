import re

filepath = 'src/translations/index.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

languages = ['fr', 'nl', 'pl', 'es']

ai_additions = {
    'fr': "      responsibleAiTitle: 'IA Responsable',\n      responsibleAiDesc: 'GreenLane est conçu pour soutenir les équipes de santé — et non pour remplacer la responsabilité clinique.\\nL\\'IA est utilisée pour des flux de communication et opérationnels définis, tandis que les décisions sensibles, complexes et cliniques restent soumises à une supervision humaine appropriée.',",
    'nl': "      responsibleAiTitle: 'Verantwoorde AI',\n      responsibleAiDesc: 'GreenLane is ontworpen om zorgteams te ondersteunen — niet om klinische verantwoordelijkheid te vervangen.\\nAI wordt gebruikt voor gedefinieerde communicatie en operationele workflows, terwijl gevoelige, complexe en klinische beslissingen onderhevig blijven aan passend menselijk toezicht.',",
    'pl': "      responsibleAiTitle: 'Odpowiedzialna AI',\n      responsibleAiDesc: 'GreenLane został zaprojektowany, aby wspierać zespoły opieki zdrowotnej — a nie zastępować odpowiedzialność kliniczną.\\nSztuczna inteligencja jest używana do zdefiniowanej komunikacji i operacyjnych przepływów pracy, podczas gdy wrażliwe, złożone i kliniczne decyzje podlegają odpowiedniemu nadzorowi ludzkiemu.',",
    'es': "      responsibleAiTitle: 'IA Responsable',\n      responsibleAiDesc: 'GreenLane está diseñado para apoyar a los equipos de atención médica — no para reemplazar la responsabilidad clínica.\\nLa IA se utiliza para flujos de trabajo operativos y de comunicación definidos, mientras que las decisiones sensibles, complejas y clínicas permanecen sujetas a una supervisión humana adecuada.',"
}

# First remove the wrongly injected `responsibleAiDesc` that are at the wrong indentation or place
# specifically the ones starting with "      responsibleAiDesc: '" but we keep the english one.
lines = content.split('\n')
new_lines = []
for i, line in enumerate(lines):
    # keep English (line 264/265 roughly), remove others
    if 'responsibleAiDesc:' in line and i > 300:
        continue
    new_lines.append(line)

content = '\n'.join(new_lines)

for lang in languages:
    pattern_security = re.compile(rf"(  {lang}: {{.*?    security: {{.*?      \],\n)", re.DOTALL)
    content = pattern_security.sub(lambda m, l=lang: m.group(1) + ai_additions[l] + "\n", content, count=1)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done!")
