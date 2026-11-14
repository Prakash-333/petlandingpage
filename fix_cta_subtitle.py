import re

file_path = 'src/translations/index.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace '\ntomorrow,\nGreenLane is creating' -> '\ntomorrow, GreenLane is creating'
# Note that in JS it is written as tomorrow,\\nGreenLane or tomorrow,\nGreenLane

# We'll just look for "tomorrow,\\nGreenLane is creating" and "tomorrow,\nGreenLane is creating"
content = content.replace("tomorrow,\\nGreenLane is creating", "tomorrow, GreenLane is creating")
content = content.replace("tomorrow,\\nGreenlane is creating", "tomorrow, Greenlane is creating")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Successfully removed the newline after tomorrow!')
