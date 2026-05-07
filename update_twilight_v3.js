const fs = require('fs');
let data = JSON.parse(fs.readFileSync('twilight.json'));

const HERO_KEY = 'a1b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6';
const ROADMAP_KEY = 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e';
const PILLARS_KEY = 'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f';
const PLAYBOOKS_KEY = '7d5b8e9a-4c12-4f31-8e9a-5c124f318e9a';
const PHILOSOPHY_KEY = '8e6c9f0b-5d23-5a42-9f0b-6d235a429f0b';
const WORKSHOP_KEY = '9f7d0a1c-6e34-6b53-a01c-7e346b53a01c';

data.components = data.components.filter(c => ![HERO_KEY, ROADMAP_KEY, PILLARS_KEY, PLAYBOOKS_KEY, PHILOSOPHY_KEY, WORKSHOP_KEY].includes(c.key));

function getTypographyFields(prefix, defaults = {}) {
    return [
        { id: `${prefix}_color`, type: 'string', format: 'color', label: `${prefix} Color`, value: defaults.color || '#1A1A1A' },
        { id: `${prefix}_size`, type: 'string', format: 'text', label: `${prefix} Size (px/rem)`, value: defaults.size || 'inherit' },
        { 
            id: `${prefix}_align`, 
            type: 'string', 
            format: 'dropdown-list', 
            label: `${prefix} Alignment`, 
            value: defaults.align || 'start',
            options: [
                { label: 'Start', value: 'start' },
                { label: 'Center', value: 'center' },
                { label: 'End', value: 'end' }
            ]
        }
    ];
}

// HERO
data.components.push({
    key: HERO_KEY,
    title: { en: 'MiND Academy Hero', ar: 'مقدمة مايند أكاديمية' },
    icon: 'sicon-image',
    path: 'home.mind-hero',
    fields: [
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#F7EDE3' },
        { id: 'label', type: 'string', format: 'text', label: 'Label Text', value: 'DESIGN AI ACADEMY · 2026' },
        ...getTypographyFields('label', { color: '#E85544', size: '11px', align: 'start' }),
        { id: 'title', type: 'string', format: 'text', label: 'Title Text', value: 'بناء الاستوديو<br><span class="accent">التصميمي.</span>' },
        ...getTypographyFields('title', { color: '#1A1A1A', size: '64px', align: 'start' }),
        { id: 'tagline', type: 'string', format: 'text', label: 'Tagline Text', value: 'Build Your AI-Native Interior Design Studio.' },
        ...getTypographyFields('tagline', { color: '#1A1A1A', size: '22px', align: 'start' }),
        { id: 'quote', type: 'string', format: 'textarea', label: 'Quote Text', value: '«النظام يتفوّق على الموهبة لأن الموهبة تعمل ساعات والنظام يعمل 24/7».' },
        ...getTypographyFields('quote', { color: '#1A1A1A', size: '19px', align: 'start' }),
        { id: 'description', type: 'string', format: 'textarea', label: 'Description Text', value: 'نظام كامل للمصمّم الداخلي — مساكن، مقاهي، مكاتب، مطاعم، تجزئة. سلسلة Playbooks مكثّفة + ورشة تطبيقية حضورية، تبني لك استوديو متكامل يعمل بالذكاء الاصطناعي.' },
        ...getTypographyFields('desc', { color: '#1A1A1A', size: '17px', align: 'start' }),
        { id: 'accent_color', type: 'string', format: 'color', label: 'Accent/Rule Color', value: '#E85544' },
        { id: 'btn_primary_text', type: 'string', format: 'text', label: 'Primary Button Text', value: 'اطّلع على الـ Playbooks  ←' },
        { id: 'btn_primary_bg', type: 'string', format: 'color', label: 'Primary Button BG', value: '#1A1A1A' },
        { id: 'btn_primary_color', type: 'string', format: 'color', label: 'Primary Button Color', value: '#F7EDE3' },
        { id: 'btn_secondary_text', type: 'string', format: 'text', label: 'Secondary Button Text', value: 'الورشة الحضورية' },
        { id: 'btn_secondary_bg', type: 'string', format: 'color', label: 'Secondary Button BG', value: 'transparent' },
        { id: 'btn_secondary_color', type: 'string', format: 'color', label: 'Secondary Button Color', value: '#1A1A1A' }
    ]
});

// ROADMAP
data.components.push({
    key: ROADMAP_KEY,
    title: { en: 'MiND Academy Roadmap', ar: 'منهج مايند أكاديمية' },
    icon: 'sicon-list',
    path: 'home.roadmap',
    fields: [
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#F7EDE3' },
        { id: 'label', type: 'string', format: 'text', label: 'Label', value: 'EDITORIAL ROADMAP  ·  المنهج التحريريّ' },
        ...getTypographyFields('label', { color: '#9B9B9B', size: '11px', align: 'start' }),
        { id: 'title', type: 'string', format: 'text', label: 'Title', value: 'منصّة تُصدر،<br><span style="color:var(--coral);">عاماً بعد عام.</span>' },
        ...getTypographyFields('title', { color: '#1A1A1A', size: '40px', align: 'start' }),
        { id: 'tagline', type: 'string', format: 'text', label: 'Tagline', value: 'Not a course catalog — an editorial institution.' },
        ...getTypographyFields('tagline', { color: '#B0866A', size: '19px', align: 'start' }),
        { id: 'desc_1', type: 'string', format: 'textarea', label: 'Description 1', value: 'MiND Academy ليست دورةً، ولا برنامجاً. هي <strong>منصّة تحريريّة</strong> تُصدر — عاماً بعد عام — أدلّةً وورشاً ومكتباتٍ مرجعيّة بمعايير المؤسسات الكبرى.' },
        ...getTypographyFields('desc1', { color: '#2E2E2E', size: '18px', align: 'start' }),
        { id: 'desc_2', type: 'string', format: 'textarea', label: 'Description 2', value: 'Edition 01 هي Design AI. وما بعدها يتوزّع على <strong style="color:var(--coral); font-style:normal;">أربع قنوات تحريريّة</strong>، كلّها تشترك في منطق واحد: لا تكتفِ بشرح الأداة، بل ابنِ النظام.' },
        ...getTypographyFields('desc2', { color: '#B0866A', size: '19px', align: 'start' }),
        { id: 'manifesto_bg', type: 'string', format: 'color', label: 'Manifesto BG', value: '#1A1A1A' },
        { id: 'manifesto_text', type: 'string', format: 'color', label: 'Manifesto Text Color', value: '#F7EDE3' },
        { id: 'manifesto_ar', type: 'string', format: 'textarea', label: 'Manifesto Arabic', value: '«MiND ليست مدرسةً تعلّم.<br>هي مكتبة تشغيل للمحترف». ' },
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
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#1A1A1A' },
        { id: 'label', type: 'string', format: 'text', label: 'Label', value: 'PROGRAM PILLARS · ركائز البرنامج' },
        ...getTypographyFields('label', { color: '#E85544', size: '11px', align: 'start' }),
        { id: 'title', type: 'string', format: 'text', label: 'Title', value: 'أربع ركائز<br>تبني استوديو متكامل.' },
        ...getTypographyFields('title', { color: '#F7EDE3', size: '40px', align: 'start' }),
        { id: 'tagline', type: 'string', format: 'text', label: 'Tagline', value: 'Four pillars. One operating studio.' },
        ...getTypographyFields('tagline', { color: '#C89469', size: '19px', align: 'start' }),
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
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: 'transparent' },
        { id: 'title', type: 'string', format: 'text', label: 'Title', value: 'مناهج مكثّفة<br>للمصمّم الـ AI-Native.' },
        ...getTypographyFields('title', { color: '#1A1A1A', size: '40px', align: 'start' }),
        { id: 'description', type: 'string', format: 'textarea', label: 'Description', value: 'كل Playbook مدرسة قائمة بذاتها — منهجية مكتملة، أدوات مختارة بعناية، Prompts جاهزة، Case Study حقيقية، وملاحق مرجعية. تُستخدم بشكل مستقل أو كسلسلة متكاملة.' },
        ...getTypographyFields('desc', { color: '#2E2E2E', size: '17px', align: 'start' }),
        { id: 'banner_bg', type: 'string', format: 'color', label: 'Banner BG', value: '#EFE3D5' },
        { id: 'banner_title', type: 'string', format: 'text', label: 'Banner Title', value: 'الـ 3 Playbooks مجتمعة — للمصمّم الذي يبني وحده' },
        ...getTypographyFields('banner_title', { color: '#1A1A1A', size: '24px', align: 'start' }),
        { id: 'products', type: 'items', format: 'dropdown-list', label: 'Products', source: 'products', multichoice: true, maxLength: 3 }
    ]
});

// PHILOSOPHY
data.components.push({
    key: PHILOSOPHY_KEY,
    title: { en: 'MiND Academy Philosophy', ar: 'فلسفة مايند أكاديمية' },
    icon: 'sicon-chat-bubbles',
    path: 'home.wisdom',
    fields: [
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#F7EDE3' },
        { id: 'title', type: 'string', format: 'text', label: 'Title', value: 'ثلاث قواعد<br>تحكم كل شيء.' },
        ...getTypographyFields('title', { color: '#1A1A1A', size: '40px', align: 'start' }),
        { id: 'quote_color', type: 'string', format: 'color', label: 'Quote Color', value: '#E85544' },
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
                { id: 'rules.text', type: 'string', format: 'textarea', label: 'النص' },
                { id: 'rules.attribution', type: 'string', format: 'text', label: 'المصدر/التذييل' }
            ]
        }
    ]
});

// WORKSHOP
data.components.push({
    key: WORKSHOP_KEY,
    title: { en: 'MiND Academy Workshop', ar: 'ورشة مايند أكاديمية' },
    icon: 'sicon-briefcase',
    path: 'home.workshop',
    fields: [
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#1A1A1A' },
        { id: 'title', type: 'string', format: 'text', label: 'Title', value: 'أربعة أيام<br>تبني استوديوك.' },
        ...getTypographyFields('title', { color: '#F7EDE3', size: '40px', align: 'start' }),
        { id: 'tagline', type: 'string', format: 'text', label: 'Tagline', value: 'The Live Application — 4 Intensive Days.' },
        ...getTypographyFields('tagline', { color: '#C89469', size: '19px', align: 'start' }),
        { id: 'description', type: 'string', format: 'textarea', label: 'Description', value: 'أربعة أيام تطبيقيّة حضوريّة بقيادة فريق MiND، في مجموعة محدودة بدعوة. الورشة تشمل الأدلّة الثلاث مجاناً + تطبيقاً كاملاً على مشروعك + مجتمع المتدرّبين.' },
        ...getTypographyFields('desc', { color: '#F7EDE3', size: '17px', align: 'start' }),
        { id: 'btn_bg', type: 'string', format: 'color', label: 'Button BG', value: '#E85544' },
        { id: 'btn_text', type: 'string', format: 'text', label: 'Button Text', value: 'صفحة الورشة الكاملة  ←' },
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
                { id: 'features.text', type: 'string', format: 'text', label: 'النص' }
            ]
        }
    ]
});

fs.writeFileSync('twilight.json', JSON.stringify(data, null, 4));
console.log('twilight.json updated with design defaults and granular controls.');
