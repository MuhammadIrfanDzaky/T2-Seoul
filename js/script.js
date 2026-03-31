const recordings = [
    { date: "25 Feb 2026", title: "Code Editor & Markdown",                                 link: "https://youtu.be/y7OiHn0ZtJo", videoId: "y7OiHn0ZtJo", category: "tl" },
    { date: "28 Feb 2026", title: "Terminal, CLI, and GIT",                                 link: "https://youtu.be/fQD3B3TPdo0", videoId: "fQD3B3TPdo0", category: "tl" },
    { date: "04 Mar 2026", title: "Git Collaborations",                                     link: "https://youtu.be/7_E8M9D5PRc", videoId: "7_E8M9D5PRc", category: "tl" },
    { date: "07 Mar 2026", title: "Module 1 Assignment & HTML",                             link: "https://youtu.be/4H-nEXL9rjU", videoId: "4H-nEXL9rjU", category: "tl" },
    { date: "07 Mar 2026", title: "Pull Requests and How To Solve Conflict",                link: "https://youtu.be/xOUenUwihC8", videoId: "xOUenUwihC8", category: "other" },
    { date: "10 Mar 2026", title: "Intro to CSS & CSS Box Model",                           link: "https://youtu.be/R8T7LHROiVw", videoId: "R8T7LHROiVw", category: "tl" },
    { date: "12 Mar 2026", title: "CSS Flexbox & Grid and Responsive Web Page",             link: "https://youtu.be/vi_HT2nsyrI", videoId: "vi_HT2nsyrI", category: "tl" },
    { date: "12 Mar 2026", title: "Tutorial Live Share VSCode",                             link: "https://youtu.be/pspGdOcfNbQ", videoId: "pspGdOcfNbQ", category: "other" },
    { date: "17 Mar 2026", title: "Intro to Tailwind CSS",                                  link: "https://youtu.be/YZrRU4ulVRc", videoId: "YZrRU4ulVRc", category: "tl" },
    { date: "26 Mar 2026", title: "Styling Animations with Tailwind & AI for Styling CSS",  link: "https://youtu.be/B5Fnq1A-nwc", videoId: "B5Fnq1A-nwc", category: "tl" },
    { date: "28 Mar 2026", title: "Breakout Room Sprint Review Module 2",                   link: "https://youtu.be/62RxlLrD5OU", videoId: "62RxlLrD5OU", category: "sprint" },
    { date: "31 Mar 2026", title: "Assymetrical Grid",                                      link: "https://youtu.be/eETFgE8DQ20", videoId: "eETFgE8DQ20", category: "other" },
];

// Category display order
const CAT_ORDER = ['tl', 'sprint', 'other'];

function thumb(id) {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}

function renderCard(r, idx) {
    return `
        <div class="card">
        <div class="card-num">#${String(idx).padStart(2, '0')}</div>
        <div class="thumb">
            <img src="${thumb(r.videoId)}" alt="${r.title}" loading="lazy"
            onerror="this.style.visibility='hidden'"/>
        </div>
        <div class="card-body">
            <div class="card-title">${r.title}</div>
            <div class="card-date">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            ${r.date}
            </div>
            <a href="${r.link}" target="_blank" rel="noopener" class="btn-watch">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
            </svg>
            ${i18n[currentLang]['rec.watch']}
            </a>
        </div>
        </div>`;
}

function renderCards(data) {
    const grid = document.getElementById('cardGrid');
    document.getElementById('totalCount').textContent = data.length;
    if (!data.length) {
        grid.innerHTML = `
        <div class="empty">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Rekamannya gaada guyss!
        </div>`;
        return;
    }

    // Group by category
    const groups = { tl: [], sprint: [], other: [] };
    data.forEach(r => { (groups[r.category || 'other']).push(r); });

    let globalIdx = 0;
    grid.innerHTML = CAT_ORDER
        .filter(cat => groups[cat].length > 0)
        .map(cat => {
            const label = i18n[currentLang]['cat.' + cat];
            const count = groups[cat].length;
            const cards = groups[cat].map(r => renderCard(r, ++globalIdx)).join('');
            return `
            <div class="rec-big-card" data-cat="${cat}">
                <div class="rec-big-card-header">
                    <div class="rec-big-card-title">${label}</div>
                    <span class="rec-big-card-count">${count}</span>
                </div>
                <div class="rec-cat-grid">${cards}</div>
            </div>`;
        }).join('');
}

// syncs both desktop & mobile search inputs
function syncSearch(source) {
    const q = source.value;
    const other = source.id === 'searchDesktop'
        ? document.getElementById('searchMobile')
        : document.getElementById('searchDesktop');
    if (other) other.value = q;
    renderCards(recordings.filter(r => r.title.toLowerCase().includes(q.toLowerCase())));
}

const i18n = {
    en: {
        'nav.about':      'About',
        'nav.materi':     'Materials',
        'nav.game':       'Quiz',
        'nav.recordings': 'Recordings',
        'rec.tag':        'Session Archive',
        'rec.title':      'Recordings',
        'rec.sub':        'Replay every session at your own pace.',
        'rec.count':      'recordings',
        'rec.watch':      'Watch Recording',
        'cat.tl':         'TL Simulations',
        'cat.sprint':     'Sprint Review',
        'cat.other':      'Other Videos',
        'footer.text':    'TL Simulation \u00b7 Team 2 \u00b7 FSSE Seoul \u00b7 \u00a9 2026',
    },
    id: {
        'nav.about':      'Tentang',
        'nav.materi':     'Materi',
        'nav.game':       'Quiz',
        'nav.recordings': 'Rekaman',
        'rec.tag':        'Arsip Sesi',
        'rec.title':      'Rekaman',
        'rec.sub':        'Tonton ulang setiap sesi sesukamu.',
        'rec.count':      'rekaman',
        'rec.watch':      'Tonton Rekaman',
        'cat.tl':         'Simulasi TL',
        'cat.sprint':     'Sprint Review',
        'cat.other':      'Video Lainnya',
        'footer.text':    'TL Simulation \u00b7 Team 2 \u00b7 FSSE Seoul \u00b7 \u00a9 2026',
    }
};

let currentLang = 'en';

function setLang(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    // update all data-i18n text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
    });
    // update search placeholders
    const ph = lang === 'id' ? 'Cari rekaman\u2026' : 'Search recordings\u2026';
    const phShort = lang === 'id' ? 'Cari\u2026' : 'Search\u2026';
    const sd = document.getElementById('searchDesktop');
    const sm = document.getElementById('searchMobile');
    if (sd) sd.placeholder = ph;
    if (sm) sm.placeholder = phShort;
    // toggle active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    // re-render cards so 'Watch' button text updates
    const q = (document.getElementById('searchDesktop') || {}).value || '';
    renderCards(recordings.filter(r => r.title.toLowerCase().includes(q.toLowerCase())));
}

function toggleTheme() {
    const html = document.documentElement;
    html.setAttribute('data-theme',
        html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
}

function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    if (!hamburger || !menu) return;
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
}

// navbar scroll effect
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

renderCards(recordings);