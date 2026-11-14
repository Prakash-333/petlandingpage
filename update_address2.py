file_path = 'src/translations/index.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

old_str = "{ name: 'India', address: 'No.66/19, 8th street, Gopalapuram, Gandhinagar Vellore - 632 006, Tamil Nadu, india' }"
new_str = "{ name: 'India', address: 'No.66/19, 8th street, Gopalapuram, Gandhinagar Vellore - 632 006, Tamilnadu, India' }"

if old_str in content:
    new_content = content.replace(old_str, new_str)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Replaced successfully!')
else:
    print('String not found!')
