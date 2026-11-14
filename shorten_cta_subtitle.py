file_path = 'src/translations/index.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

old_str = "Healthcare is becoming increasingly digital, but patients, providers, teams and systems still operate across fragmented environments."
new_str = "Healthcare is becoming digital, but patients, providers, and systems still operate in fragmented environments."

if old_str in content:
    new_content = content.replace(old_str, new_str)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Replaced successfully!')
else:
    print('String not found!')
