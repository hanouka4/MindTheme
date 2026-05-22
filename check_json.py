import json

with open('twilight.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def check_variable_list(obj):
    if isinstance(obj, dict):
        if obj.get('format') == 'variable-list':
            print(f"id: {obj.get('id')}, type: {obj.get('type')}, value: {obj.get('value')}")
        for v in obj.values():
            check_variable_list(v)
    elif isinstance(obj, list):
        for item in obj:
            check_variable_list(item)

check_variable_list(data)
