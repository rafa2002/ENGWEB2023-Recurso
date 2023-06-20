import json

with open('estetica.json', 'r',encoding='utf-8') as f:
    data = json.load(f)

for i, item in enumerate(data['intervencoes']):
    item['_id'] = i + 1

with open('estetica.json', 'w',encoding='utf-8') as f:
    json.dump(data, f, indent=4)
