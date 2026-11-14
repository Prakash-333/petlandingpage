import re

filepath = 'src/translations/index.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all instances of `items: ['+32 467 85 99 60']` with `items: ['+32 467 85 99 60', '+91 8197017799']`
content = content.replace("items: ['+32 467 85 99 60']", "items: ['+32 467 85 99 60', '+91 8197017799']")

# Some might be formatted slightly differently, let's also handle potential variations:
content = content.replace("items: [\n            '+32 467 85 99 60'\n          ]", "items: ['+32 467 85 99 60', '+91 8197017799']")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Phone number added")
