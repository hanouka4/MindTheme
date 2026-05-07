const fs = require('fs');
let data = JSON.parse(fs.readFileSync('twilight.json'));

data.components.push({
    key: 'a1b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6',
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

let playbooks = data.components.find(c => c.path === 'home.playbooks');
if (playbooks) {
    playbooks.fields.push(
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color' },
        { id: 'banner_title', type: 'string', format: 'text', label: 'Banner Title', multilanguage: true, value: 'الـ 3 Playbooks مجتمعة — للمصمّم الذي يبني وحده' },
        { id: 'banner_desc', type: 'string', format: 'text', label: 'Banner Description', multilanguage: true, value: 'هل تفضّل التطبيق بقيادة فريق MiND؟ الورشة الحضوريّة تشمل الأدلّة الثلاث مجاناً.' },
        { id: 'banner_btn_text', type: 'string', format: 'text', label: 'Banner Button Text', multilanguage: true, value: 'للاستفسار  ←' },
        { id: 'banner_btn_url', type: 'string', format: 'text', label: 'Banner Button URL', value: 'products' }
    );
}

let wisdom = data.components.find(c => c.path === 'home.wisdom');
if (wisdom) {
    wisdom.fields.push(
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#F7EDE3' },
        { id: 'quote_color', type: 'string', format: 'color', label: 'Quote Color', value: '#E85544' }
    );
}

let workshop = data.components.find(c => c.path === 'home.workshop');
if (workshop) {
    workshop.fields.push(
        { id: 'bg_color', type: 'string', format: 'color', label: 'Background Color', value: '#1A1A1A' },
        { id: 'text_color', type: 'string', format: 'color', label: 'Text Color', value: '#F7EDE3' },
        { id: 'btn_text', type: 'string', format: 'text', label: 'Button Text', multilanguage: true, value: 'صفحة الورشة الكاملة  ←' },
        { id: 'btn_url', type: 'string', format: 'text', label: 'Button URL', value: 'products' },
        { id: 'btn_bg_color', type: 'string', format: 'color', label: 'Button Background', value: '#E85544' }
    );
}

fs.writeFileSync('twilight.json', JSON.stringify(data, null, 4));
console.log('twilight.json updated successfully.');
