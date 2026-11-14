import re

filepath = 'src/translations/index.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_addr = "{ name: 'India', address: 'No. 66/19, 8th Street, Gopalapuram, Vellore, Tamil Nadu, 632006, India' }"
new_addr = "{ name: 'India', address: 'No.66/19, 8th street, Gopalapuram, Gandhinagar Vellore - 632 006, Tamil Nadu, india' }"

content = content.replace(old_addr, new_addr)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("India address updated")
