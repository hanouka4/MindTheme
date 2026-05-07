const fs = require('fs');
let data = JSON.parse(fs.readFileSync('twilight.json'));

// Keys
const HERO_KEY = 'a1b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6';
const ROADMAP_KEY = 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e';
const PILLARS_KEY = 'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f';
const PLAYBOOKS_KEY = '7d5b8e9a-4c12-4f31-8e9a-5c124f318e9a';
const PHILOSOPHY_KEY = '8e6c9f0b-5d23-5a42-9f0b-6d235a429f0b';
const WORKSHOP_KEY = '9f7d0a1c-6e34-6b53-a01c-7e346b53a01c';

// Filter out existing ones to avoid duplicates
data.components = data.components.filter(c => ![HERO_KEY, ROADMAP_KEY, PILLARS_KEY, PLAYBOOKS_KEY, PHILOSOPHY_KEY, WORKSHOP_KEY].includes(c.key));

// HERO
data.components.push({
    key: HERO_KEY,
    title: { en: 'MiND Academy Hero', ar: 'مقدمة مايند أكاديمية' },
    icon: 'sicon-image',
    path: 'home.mind-hero',
    fields: [
        { id: 'label', type: 'string', format: 'text', label: 'Label', multilanguage: true, value: 'DESIGN AI ACADEMY · 2026' },
        { id: 'title', type: 'string', format: 'text', label: 'Title', multilanguage: true, value: 'بناء الاستوديو<br><span class="accent">التصميمي.</span>' },
        { id: 'tagline', type: 'string', format: 'text', label: 'Tagline', multilanguage: true, value: 'Build Your AI-Native Interior Design Studio.' },
        { id: 'quote', type: 'string', format: 'textarea', label: 'Quote', multilanguage: true, value: '«النظام يتفوّق على الموهبة لأن الموهبة تعمل ساعات والنظام يعمل 24/7».' },
        { id: 'description', type: 'string', format: 'textarea', label: 'Description', multilanguage: true, value: 'نظام كامل للمصمّم الداخلي — مساكن، مقاهي، مكاتب، مطاعم، تجزئة. سلسلة Playbooks مكثّفة + ورشة تطبيقية حضورية، تبني لك استوديو متكامل يعمل بالذكاء الاصطناعي.' },
        { id: 'btn_primary_text', type: 'string', format: 'text', label: 'Primary Button Text', multilanguage: true, value: 'اطّلع على الـ Playbooks  ←' },
        { id: 'btn_primary_url', type: 'string', format: 'text', label: 'Primary Button URL', value: 'products' },
        { id: 'btn_secondary_text', type: 'string', format: 'text', label: 'Secondary Button Text', multilanguage: true, value: 'الورشة الحضورية' },
        { id: 'btn_secondary_url', type: 'string', format: 'text', label: 'Secondary Button URL', value: 'products' },
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#F7EDE3' },
        { id: 'text_color', type: 'string', format: 'color', label: 'Text Color', value: '#1A1A1A' },
        { id: 'accent_color', type: 'string', format: 'color', label: 'Accent Color', value: '#E85544' }
    ]
});

// ROADMAP
data.components.push({
    key: ROADMAP_KEY,
    title: { en: 'MiND Academy Roadmap', ar: 'منهج مايند أكاديمية' },
    icon: 'sicon-list',
    path: 'home.roadmap',
    fields: [
        { id: 'label', type: 'string', format: 'text', label: 'Label', multilanguage: true, value: 'EDITORIAL ROADMAP  ·  المنهج التحريريّ' },
        { id: 'title', type: 'string', format: 'text', label: 'Title', multilanguage: true, value: 'منصّة تُصدر،<br><span style="color:var(--coral);">عاماً بعد عام.</span>' },
        { id: 'tagline', type: 'string', format: 'text', label: 'Tagline', multilanguage: true, value: 'Not a course catalog — an editorial institution.' },
        { id: 'desc_1', type: 'string', format: 'textarea', label: 'Description 1', multilanguage: true, value: 'MiND Academy ليست دورةً، ولا برنامجاً. هي <strong>منصّة تحريريّة</strong> تُصدر — عاماً بعد عام — أدلّةً وورشاً ومكتباتٍ مرجعيّة بمعايير المؤسسات الكبرى.' },
        { id: 'desc_2', type: 'string', format: 'textarea', label: 'Description 2', multilanguage: true, value: 'Edition 01 هي Design AI. وما بعدها يتوزّع على <strong style="color:var(--coral); font-style:normal;">أربع قنوات تحريريّة</strong>، كلّها تشترك في منطق واحد: لا تكتفِ بشرح الأداة، بل ابنِ النظام.' },
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#F7EDE3' },
        { id: 'manifesto_bg', type: 'string', format: 'color', label: 'Manifesto Background', value: '#1A1A1A' },
        { id: 'manifesto_text', type: 'string', format: 'color', label: 'Manifesto Text Color', value: '#F7EDE3' },
        { id: 'manifesto_ar', type: 'string', format: 'textarea', label: 'Manifesto Arabic', multilanguage: true, value: '«MiND ليست مدرسةً تعلّم.<br>هي مكتبة تشغيل للمحترف». ' },
        { id: 'manifesto_en', type: 'string', format: 'textarea', label: 'Manifesto English', value: '"MiND is not a school that teaches. It\'s an operating library for the professional."' },
        {
            id: 'channels',
            type: 'collection',
            format: 'collection',
            label: 'القنوات التحريرية',
            item_label: 'قناة',
            value: [
                {
                    'channels.label': 'CHANNEL A',
                    'channels.title': 'Design × AI',
                    'channels.subtitle': 'منهجيّات الـ AI للمصمّم',
                    'channels.desc': 'الأدلّة التطبيقيّة لاستخدام AI في كل مرحلة من رحلة المصمّم — من البريف إلى التسليم.',
                    'channels.footer': 'Floor Plan · Render · Studio',
                    'channels.badge': 'EDITION 01',
                    'channels.bg': '#1A1A1A',
                    'channels.text_color': '#F7EDE3',
                    'channels.featured': true
                },
                {
                    'channels.label': 'CHANNEL B',
                    'channels.title': 'Craft & Practice',
                    'channels.subtitle': 'الحرفة والممارسة',
                    'channels.desc': 'إصدارات عن جوهر التصميم الداخلي ذاته — لا عن أدواته. الإضاءة، الموود بورد، اللون، المواد، الأبعاد البشريّة.',
                    'channels.footer': 'Lighting · Mood Board · Color',
                    'channels.badge': 'UPCOMING',
                    'channels.bg': '#EFE3D5',
                    'channels.text_color': '#1A1A1A'
                },
                {
                    'channels.label': 'CHANNEL C',
                    'channels.title': 'Business of Design',
                    'channels.subtitle': 'إدارة الممارسة',
                    'channels.desc': 'إصدارات عن العمل لا عن التصميم — التسعير، العقود، العرض الفنّي، إدارة العميل، وبناء استوديو ينمو.',
                    'channels.footer': 'Pricing · Proposals · Contracts',
                    'channels.badge': 'UPCOMING',
                    'channels.bg': '#EFE3D5',
                    'channels.text_color': '#1A1A1A'
                },
                {
                    'channels.label': 'CHANNEL D',
                    'channels.title': 'Reference Libraries',
                    'channels.subtitle': 'المكتبات المرجعيّة',
                    'channels.desc': 'أصول جاهزة للاستخدام — أطلس مواد، مكتبة موود بوردز، قوالب عقود، Prompts للمشتركين.',
                    'channels.footer': 'Atlas · Templates · Vault',
                    'channels.badge': 'UPCOMING',
                    'channels.bg': '#EFE3D5',
                    'channels.text_color': '#1A1A1A'
                }
            ],
            fields: [
                { id: 'channels.label', type: 'string', format: 'text', label: 'Channel Label' },
                { id: 'channels.title', type: 'string', format: 'text', label: 'Title' },
                { id: 'channels.subtitle', type: 'string', format: 'text', label: 'Subtitle' },
                { id: 'channels.desc', type: 'string', format: 'textarea', label: 'Description' },
                { id: 'channels.footer', type: 'string', format: 'text', label: 'Footer Text' },
                { id: 'channels.badge', type: 'string', format: 'text', label: 'Badge Text' },
                { id: 'channels.bg', type: 'string', format: 'color', label: 'Background' },
                { id: 'channels.text_color', type: 'string', format: 'color', label: 'Text Color' },
                { id: 'channels.featured', type: 'boolean', format: 'switch', label: 'Featured (Shadow)' }
            ]
        }
    ]
});

// PILLARS
data.components.push({
    key: PILLARS_KEY,
    title: { en: 'MiND Academy Pillars', ar: 'ركائز مايند أكاديمية' },
    icon: 'sicon-grid',
    path: 'home.pillars',
    fields: [
        { id: 'label', type: 'string', format: 'text', label: 'Label', multilanguage: true, value: 'PROGRAM PILLARS · ركائز البرنامج' },
        { id: 'title', type: 'string', format: 'text', label: 'Title', multilanguage: true, value: 'أربع ركائز<br>تبني استوديو متكامل.' },
        { id: 'tagline', type: 'string', format: 'text', label: 'Tagline', multilanguage: true, value: 'Four pillars. One operating studio.' },
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#1A1A1A' },
        { id: 'text_color', type: 'string', format: 'color', label: 'Text Color', value: '#F7EDE3' },
        {
            id: 'pillars',
            type: 'collection',
            format: 'collection',
            label: 'الركائز',
            item_label: 'ركيزة',
            value: [
                { 'pillars.num': '01', 'pillars.label': 'OPERATING MODEL', 'pillars.title': 'نموذج التشغيل', 'pillars.desc': 'Workflow موحّد من البريف إلى التسليم — قابل للتكرار في كل مشروع تصميم داخلي.' },
                { 'pillars.num': '02', 'pillars.label': 'AI STACK', 'pillars.title': 'النظام التقنيّ', 'pillars.desc': 'اختيار وتجهيز أدوات AI المعتمدة، اشتراكات مدروسة، مكتبات Templates جاهزة.' },
                { 'pillars.num': '03', 'pillars.label': 'DELIVERY SYSTEM', 'pillars.title': 'نظام التسليم', 'pillars.desc': 'وثائق ومعايير مهنية تليق بأكبر المشاريع — Design Books، Walkthroughs، مخططات تنفيذية.' },
                { 'pillars.num': '04', 'pillars.label': 'COMMERCIAL FRAME', 'pillars.title': 'الإطار التجاري', 'pillars.desc': 'تسعير المشاريع بـ AI، عقود نموذجية، شبكة عملاء، ومحفظة احترافية.' }
            ],
            fields: [
                { id: 'pillars.num', type: 'string', format: 'text', label: 'Number' },
                { id: 'pillars.label', type: 'string', format: 'text', label: 'English Label' },
                { id: 'pillars.title', type: 'string', format: 'text', label: 'Title' },
                { id: 'pillars.desc', type: 'string', format: 'textarea', label: 'Description' }
            ]
        }
    ]
});

// PLAYBOOKS
data.components.push({
    key: PLAYBOOKS_KEY,
    title: { en: 'MiND Academy Playbooks', ar: 'أدلة مايند أكاديمية' },
    icon: 'sicon-books',
    path: 'home.playbooks',
    fields: [
        { id: 'title', type: 'string', format: 'text', label: 'العنوان', multilanguage: true, value: 'مناهج مكثّفة<br>للمصمّم الـ AI-Native.' },
        { id: 'description', type: 'string', format: 'textarea', label: 'الوصف', multilanguage: true, value: 'كل Playbook مدرسة قائمة بذاتها — منهجية مكتملة، أدوات مختارة بعناية، Prompts جاهزة، Case Study حقيقية، وملاحق مرجعية. تُستخدم بشكل مستقل أو كسلسلة متكاملة.' },
        { id: 'products', type: 'items', format: 'dropdown-list', label: 'المنتجات (Playbooks)', source: 'products', multichoice: true, maxLength: 3 },
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#F7EDE3' },
        { id: 'banner_title', type: 'string', format: 'text', label: 'Banner Title', multilanguage: true, value: 'الـ 3 Playbooks مجتمعة — للمصمّم الذي يبني وحده' },
        { id: 'banner_desc', type: 'string', format: 'text', label: 'Banner Description', multilanguage: true, value: 'هل تفضّل التطبيق بقيادة فريق MiND؟ الورشة الحضوريّة تشمل الأدلّة الثلاث مجاناً.' },
        { id: 'banner_btn_text', type: 'string', format: 'text', label: 'Banner Button Text', multilanguage: true, value: 'للاستفسار  ←' },
        { id: 'banner_btn_url', type: 'string', format: 'text', label: 'Banner Button URL', value: 'products' }
    ]
});

// PHILOSOPHY
data.components.push({
    key: PHILOSOPHY_KEY,
    title: { en: 'MiND Academy Philosophy', ar: 'فلسفة مايند أكاديمية' },
    icon: 'sicon-chat-bubbles',
    path: 'home.wisdom',
    fields: [
        { id: 'title', type: 'string', format: 'text', label: 'العنوان', multilanguage: true, value: 'ثلاث قواعد<br>تحكم كل شيء.' },
        {
            id: 'rules',
            type: 'collection',
            format: 'collection',
            label: 'القواعد',
            item_label: 'قاعدة',
            value: [
                { 'rules.text': 'النظام يتفوّق على الموهبة لأن الموهبة تعمل ساعات والنظام يعمل 24/7.', 'rules.attribution': '—  Playbook 01  ·  Floor Plan' },
                { 'rules.text': 'الرندر الواحد لا يبيع. الأربعة رندرز المتسلسلة تبيع. هذي ليست تقنية — بل سرديّة بصرية.', 'rules.attribution': '—  Playbook 02  ·  Render' },
                { 'rules.text': 'الاستوديو الذي يبني نفسه = الاستوديو الذي ينمو وأنت نائم. النظام هو ما يفصل المحترف عن الموظف.', 'rules.attribution': '—  Playbook 03  ·  Studio Build' }
            ],
            fields: [
                { id: 'rules.text', type: 'string', format: 'textarea', label: 'النص', multilanguage: true },
                { id: 'rules.attribution', type: 'string', format: 'text', label: 'المصدر/التذييل', multilanguage: true }
            ]
        },
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#F7EDE3' },
        { id: 'quote_color', type: 'string', format: 'color', label: 'Quote Color', value: '#E85544' }
    ]
});

// WORKSHOP
data.components.push({
    key: WORKSHOP_KEY,
    title: { en: 'MiND Academy Workshop', ar: 'ورشة مايند أكاديمية' },
    icon: 'sicon-briefcase',
    path: 'home.workshop',
    fields: [
        { id: 'title', type: 'string', format: 'text', label: 'العنوان', multilanguage: true, value: 'أربعة أيام<br>تبني استوديوك.' },
        { id: 'tagline', type: 'string', format: 'text', label: 'العنوان الفرعي', multilanguage: true, value: 'The Live Application — 4 Intensive Days.' },
        { id: 'description', type: 'string', format: 'textarea', label: 'الوصف', multilanguage: true, value: 'أربعة أيام تطبيقيّة حضوريّة بقيادة فريق MiND، في مجموعة محدودة بدعوة. الورشة تشمل الأدلّة الثلاث مجاناً + تطبيقاً كاملاً على مشروعك + مجتمع المتدرّبين.' },
        {
            id: 'features',
            type: 'collection',
            format: 'collection',
            label: 'المزايا/المحاور',
            item_label: 'مزية',
            value: [
                { 'features.text': 'تطبيق كامل على مشروعك بقيادة فريق MiND' },
                { 'features.text': 'متابعة شخصية من فريق MiND طوال 4 أيام' },
                { 'features.text': 'Setup كامل لاستوديو AI شخصي — أدوات وقوالب جاهزة' },
                { 'features.text': 'مجتمع المتدرّبين + متابعة 30 يوماً' },
                { 'features.text': 'أولوية حضور لمشتري الـ Design AI Playbooks' }
            ],
            fields: [
                { id: 'features.text', type: 'string', format: 'text', label: 'النص', multilanguage: true }
            ]
        },
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#1A1A1A' },
        { id: 'text_color', type: 'string', format: 'color', label: 'Text Color', value: '#F7EDE3' },
        { id: 'btn_text', type: 'string', format: 'text', label: 'Button Text', multilanguage: true, value: 'صفحة الورشة الكاملة  ←' },
        { id: 'btn_url', type: 'string', format: 'text', label: 'Button URL', value: 'products' },
        { id: 'btn_bg_color', type: 'string', format: 'color', label: 'Button Background', value: '#E85544' }
    ]
});

fs.writeFileSync('twilight.json', JSON.stringify(data, null, 4));
console.log('twilight.json updated successfully.');
