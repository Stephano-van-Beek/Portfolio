// Simple EN/NL switcher. Elements with data-i18n="key" get their text from DICT.
// The English text in the HTML is the fallback. The chosen language is remembered.
const DICT = {
  en: {
    'nav.home': 'Home', 'nav.projects': 'Projects', 'nav.about': 'About me',
    'footer.tagline': 'HBO-ICT Cyber Security student interested in Cyber Security, Software Development & Technology.',
    'footer.skills': 'Skills: HTML, CSS, PHP, Python, JavaScript · HvA Amsterdam · MBO Software Developer',
    'footer.pages': 'Pages', 'footer.connect': 'Connect', 'footer.location': 'Lelystad, Netherlands',

    'home.lead': "HBO-ICT Cyber Security student. Interested in Cyber Security, Software Development & Technology. I've worked with PHP, HTML/CSS, Python, MySQL and Yii.",
    'home.work': 'View my work', 'home.about': 'About me',
    'home.why.title': 'About this portfolio',
    'home.why.p1': 'This website is my personal portfolio. I built it to show what I have made during my studies and to practise web development myself, using plain HTML, CSS and JavaScript.',
    'home.why.p2': 'Projects are loaded automatically from my GitHub, so a new repository appears here on its own. You will find my projects (MBO and other) and my CV on the other pages.',
    'home.featured': 'Featured projects', 'home.contact': 'Contact',

    'projects.title': 'Projects',
    'projects.lead': 'Loaded live from my public GitHub repositories. New repositories appear here automatically.',
    'projects.other': 'Other projects', 'projects.mbo': 'MBO projects',

    'about.tag': 'About me', 'about.title': 'About me',
    'about.lead': 'HBO-ICT Cyber Security student from Lelystad.',
    'about.cv': 'Download CV (PDF)',
    'about.cvdoc': 'Download CV (Word)',
    'about.character.title': 'Character',
    'about.character.text': 'I am curious, eager to learn, communicative and sporty. Always willing to keep learning.',
    'about.work.title': 'Work experience',
    'about.edu.title': 'Education',
    'about.skills.title': 'Skills',
    'about.lang.title': 'Languages',
    'about.extra.title': 'Interests & other',

    'work1.date': 'Nov 2023 – Feb 2024', 'work1.desc': 'Building a website with WordPress.',
    'work2.date': 'Jan 2023 – Jul 2023', 'work2.desc': 'Building inventory management and incident reporting applications.',
    'work3.date': 'Sep 2020 – Jun 2022',     'work3.title': 'Bar staff',
        'work4.date': 'Feb 2021 – Jun 2021', 'work4.title': 'ICT internship',
    'work5.date': 'May 2019 – Jun 2019', 'work5.title': 'Internship, physiotherapy assistant',
    'work6.date': 'May 2018 – Jun 2018', 'work6.title': 'Internship, fitness employee',

    'edu1.date': '2023 – present', 'edu1.title': 'Cybersecurity (HBO)',
    'edu2.date': '2021 – 2023', 'edu2.title': 'Software Developer (MBO level 4)',
    'edu3.date': '2019 – 2021', 'edu3.title': 'ICT (MBO level 3)',
    'edu4.date': '2015 – 2019', 'edu4.title': 'VMBO-K (pre-vocational secondary education)',

    'skill.m365': 'Microsoft 365', 'skill.m365.v': 'Word, Excel, PowerPoint, Teams, OneDrive',
    'skill.os': 'Operating systems', 'skill.os.v': 'Windows, Windows Server, Ubuntu',
    'skill.linux': 'Linux / Ubuntu', 'skill.linux.v': 'Basic · 0.5 year',
    'skill.malware': 'Malware analysis', 'skill.malware.v': 'Basic experience unpacking, investigating and analysing malware · 0.5 year',
    'skill.web': 'HTML / CSS', 'skill.web.v': 'Basic to intermediate · 3+ years',
    'skill.php': 'PHP', 'skill.php.v': 'Basic to intermediate · 3+ years',
    'skill.js': 'JavaScript', 'skill.js.v': 'Basic · 3+ years',
    'skill.py': 'Python', 'skill.py.v': 'Basic · 3+ years',
    'skill.db': 'MySQL', 'skill.db.v': 'Basic · 3+ years',
    'skill.fw': 'Yii', 'skill.fw.v': 'Basic · 1 year',
    'skill.ai': 'AI & machine learning', 'skill.ai.v': 'Basic knowledge of training and testing AI models · 0.5 year',
    'skill.cyber': 'Cybersecurity', 'skill.cyber.v': 'Basic knowledge of IT and information security · 3+ years',

    'lang.nl': 'Dutch', 'lang.nl.v': 'Native language',
    'lang.en': 'English', 'lang.en.v': 'Speaking: very good · Writing: good',
    'extra.interests': 'Interests', 'extra.interests.v': 'Gaming, fitness and hockey',
    'extra.other': 'Other skills', 'extra.other.v': "Driver's licence (B)"
  },
  nl: {
    'nav.home': 'Home', 'nav.projects': 'Projecten', 'nav.about': 'Over mij',
    'footer.tagline': 'HBO-ICT Cyber Security student met interesse in Cyber Security, Software Development & Technologie.',
    'footer.skills': 'Vaardigheden: HTML, CSS, PHP, Python, JavaScript · HvA Amsterdam · MBO Software Developer',
    'footer.pages': "Pagina's", 'footer.connect': 'Contact', 'footer.location': 'Lelystad, Nederland',

    'home.lead': 'HBO-ICT Cyber Security student. Geïnteresseerd in Cyber Security, Software Development & Technologie. Ik heb gewerkt met PHP, HTML/CSS, Python, MySQL en Yii.',
    'home.work': 'Bekijk mijn werk', 'home.about': 'Over mij',
    'home.why.title': 'Over dit portfolio',
    'home.why.p1': 'Deze website is mijn persoonlijke portfolio. Ik heb hem gemaakt om te laten zien wat ik tijdens mijn studie heb gemaakt en om zelf webontwikkeling te oefenen, met gewone HTML, CSS en JavaScript.',
    'home.why.p2': "Projecten worden automatisch van mijn GitHub geladen, dus een nieuwe repository verschijnt hier vanzelf. Mijn projecten (MBO en overig) en mijn CV vind je op de andere pagina's.",
    'home.featured': 'Uitgelichte projecten', 'home.contact': 'Contact',

    'projects.title': 'Projecten',
    'projects.lead': 'Live geladen uit mijn openbare GitHub-repositories. Nieuwe repositories verschijnen hier automatisch.',
    'projects.other': 'Overige projecten', 'projects.mbo': 'MBO-projecten',

    'about.tag': 'Over mij', 'about.title': 'Over mij',
    'about.lead': 'HBO-ICT Cyber Security student uit Lelystad.',
    'about.cv': 'Download CV (PDF)',
    'about.cvdoc': 'Download CV (Word)',
    'about.character.title': 'Karakter',
    'about.character.text': 'Ik ben nieuwsgierig, leergierig, communicatief en sportief. Altijd bereid om verder te leren.',
    'about.work.title': 'Werkervaring',
    'about.edu.title': 'Opleiding',
    'about.skills.title': 'Vaardigheden',
    'about.lang.title': 'Talen',
    'about.extra.title': 'Interesses & overig',

    'work1.date': 'Nov 2023 – Feb 2024', 'work1.desc': 'Bouwen van een website met WordPress.',
    'work2.date': 'Jan 2023 – Juli 2023', 'work2.desc': 'Bouwen van applicaties voor inventarisbeheer en incidentmeldingen.',
    'work3.date': 'Sep 2020 – Jun 2022', 'work3.title': 'Barmedewerker',
    'work4.date': 'Feb 2021 – Jun 2021', 'work4.title': 'Stage ICT',
    'work5.date': 'Mei 2019 – Jun 2019', 'work5.title': 'Stage, assistent begeleider fysio',
    'work6.date': 'Mei 2018 – Jun 2018', 'work6.title': 'Stage, fitnessmedewerker',

    'edu1.date': '2023 – heden', 'edu1.title': 'Cybersecurity (HBO)',
    'edu2.date': '2021 – 2023', 'edu2.title': 'Software Developer (MBO niveau 4)',
    'edu3.date': '2019 – 2021', 'edu3.title': 'ICT (MBO niveau 3)',
    'edu4.date': '2015 – 2019', 'edu4.title': 'VMBO-K',

    'skill.m365': 'Microsoft 365', 'skill.m365.v': 'Word, Excel, PowerPoint, Teams, OneDrive',
    'skill.os': 'Besturingssystemen', 'skill.os.v': 'Windows, Windows Server, Ubuntu',
    'skill.linux': 'Linux / Ubuntu', 'skill.linux.v': 'Basis · 0,5 jaar',
    'skill.malware': 'Malware-analyse', 'skill.malware.v': 'Basiservaring met het uitpakken, onderzoeken en analyseren van malware · 0,5 jaar',
    'skill.web': 'HTML / CSS', 'skill.web.v': 'Basis tot gemiddeld · 3+ jaar',
    'skill.php': 'PHP', 'skill.php.v': 'Basis tot gemiddeld · 3+ jaar',
    'skill.js': 'JavaScript', 'skill.js.v': 'Basis · 3+ jaar',
    'skill.py': 'Python', 'skill.py.v': 'Basis · 3+ jaar',
    'skill.db': 'MySQL', 'skill.db.v': 'Basis · 3+ jaar',
    'skill.fw': 'Yii', 'skill.fw.v': 'Basis · 1 jaar',
    'skill.ai': 'AI & machine learning', 'skill.ai.v': 'Basiskennis van het trainen en testen van AI-modellen · 0,5 jaar',
    'skill.cyber': 'Cybersecurity', 'skill.cyber.v': 'Basiskennis van IT- en informatiebeveiliging · 3+ jaar',

    'lang.nl': 'Nederlands', 'lang.nl.v': 'Moedertaal',
    'lang.en': 'Engels', 'lang.en.v': 'Spreekvaardigheid: zeer goed · Schriftelijk: goed',
    'extra.interests': 'Interesses', 'extra.interests.v': 'Gamen, fitness en hockey',
    'extra.other': 'Overige vaardigheden', 'extra.other.v': 'Rijbewijs B'
  }
};

function applyLang(lang) {
  if (!DICT[lang]) lang = 'en';
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = DICT[lang][el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}

document.addEventListener('click', e => {
  const b = e.target.closest('[data-lang]');
  if (b) applyLang(b.dataset.lang);
});

window.applyLang = applyLang;
window.currentLang = () => localStorage.getItem('lang') || 'en';
