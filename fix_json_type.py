import json

with open('twilight.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def fix_variable_list(obj):
    if isinstance(obj, dict):
        if obj.get('format') == 'variable-list' and obj.get('type') == 'string':
            obj['type'] = 'items'
            if 'value' in obj:
                # Setting to null/None so we don't break the variable-list component
                obj['value'] = None
        for v in obj.values():
            fix_variable_list(v)
    elif isinstance(obj, list):
        for item in obj:
            fix_variable_list(item)

fix_variable_list(data)

with open('twilight.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)
