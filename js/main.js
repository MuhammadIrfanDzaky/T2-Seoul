// ─── I18N ────────────────────────────────────────────────────────────────────
const i18n = {
  en: {
    "nav.about": "About", "nav.materi": "Materials", "nav.game": "Quiz",
    "nav.recordings": "Recordings",
    "hero.title": "TEAM 2",
    "hero.sub": "Recordings, materials, and quiz — all in one place, built for you.",
    "hero.feat.rec": "Recordings", "hero.feat.rec.sub": "Replay past sessions",
    "hero.feat.materi": "Materials", "hero.feat.materi.sub": "Notes & key points",
    "hero.feat.quiz": "Quiz", "hero.feat.quiz.sub": "Test your skills",
    "hero.bio": "Still somewhere between junior and figuring it out.",
    "hero.cta1": "Watch Recordings", "hero.cta2": "Browse Materials", "hero.scroll": "scroll",
    "about.tag": "Who Are We?", "about.title": "About Us", "about.subtitle": "Get to know your TL",
    "about.domicile": "Domicile", "about.domicile.val": "Binjai",
    "about.occupation": "Occupation", "about.occupation.val": "Software Engineer / Freelancer",
    "about.hobby": "Hobby", "about.hobby.val": "Gaming",
    "about.funfact": "Motto", "about.funfact.val": "It Is What It Is",
    "materi.tag": "Study Materials", "materi.title": "Materials",
    "materi.subtitle": "Key takeaways, grouped by module and week",
    "materi.coming": "Coming soon",
    "materi.desc": "Notes & key points will be added after each session.",
    "materi.view": "View Recording",
    "materi.week": "Week", "materi.session": "Session",
    "game.tag": "Mini Game", "game.title": "Take the Quiz",
    "game.subtitle": "Test your programming knowledge!",
    "game.start.info": "10 questions · 30 seconds each · Programming basics",
    "game.start": "Start Quiz", "game.next": "Next →", "game.retry": "Try Again",
    "game.correct": "Correct! ✓", "game.wrong": "Wrong!",
    "game.finish.title": "Quiz Complete!",
    "game.finish.great": "Amazing! You nailed it! 🎉",
    "game.finish.good": "Nice work! Keep it up! 👍",
    "game.finish.ok": "Keep learning! You'll get there 💪",
    "footer.text": "TL Simulation · Team 2 · FSSE Seoul · © 2026",
    "footer.rec": "Recordings →",
  },
  id: {
    "nav.about": "Tentang", "nav.materi": "Materi", "nav.game": "Quiz",
    "nav.recordings": "Rekaman",
    "hero.title": "TEAM 2",
    "hero.sub": "Rekaman, materi, dan quiz — semua di satu tempat, dibuat untukmu.",
    "hero.feat.rec": "Rekaman", "hero.feat.rec.sub": "Tonton ulang sesi lalu",
    "hero.feat.materi": "Materi", "hero.feat.materi.sub": "Catatan & poin penting",
    "hero.feat.quiz": "Quiz", "hero.feat.quiz.sub": "Uji kemampuanmu",
    "hero.credit": "Dibuat oleh Irfan Dzaky · TL Team 2",
    "hero.bio": "Masih di antara junior dan lagi figuring things out.",
    "hero.cta1": "Tonton Rekaman", "hero.cta2": "Lihat Materi", "hero.scroll": "scroll",
    "about.tag": "Siapa Kita?", "about.title": "Tentang Kita",
    "about.subtitle": "Kenalan sama TL kamu",
    "about.domicile": "Domisili", "about.domicile.val": "Binjai",
    "about.occupation": "Pekerjaan", "about.occupation.val": "Software Engineer / Freelancer",
    "about.hobby": "Hobi", "about.hobby.val": "Gaming",
    "about.funfact": "Motto", "about.funfact.val": "It Is What It Is",
    "materi.tag": "Materi Belajar", "materi.title": "Materi",
    "materi.subtitle": "Poin penting, dikelompokkan per modul dan minggu",
    "materi.coming": "Segera hadir",
    "materi.desc": "Catatan dan poin penting akan ditambahkan setelah tiap sesi.",
    "materi.view": "Tonton Rekaman",
    "materi.week": "Minggu", "materi.session": "Sesi",
    "game.tag": "Mini Game", "game.title": "Coba Quiz",
    "game.subtitle": "Uji pengetahuan programming kamu!",
    "game.start.info": "10 pertanyaan · 30 detik per soal · Dasar programming",
    "game.start": "Mulai Quiz", "game.next": "Lanjut →", "game.retry": "Coba Lagi",
    "game.correct": "Bener! ✓", "game.wrong": "Salah!",
    "game.finish.title": "Quiz Selesai!",
    "game.finish.great": "Luar biasa! Kamu jago! 🎉",
    "game.finish.good": "Bagus banget! Terus tingkatkan! 👍",
    "game.finish.ok": "Terus belajar ya! Pasti bisa! 💪",
    "footer.text": "TL Simulation · Team 2 · FSSE Seoul · © 2026",
    "footer.rec": "Rekaman →",
  }
};

// ─── MATERIALS — grouped by Module → Week → Session ───────────────────────────
const modules = [
  {
    num: 1,
    title: { en: "Module 1", id: "Modul 1" },
    subtitle: { en: "Web Development Essentials", id: "Dasar-dasar Pengembangan Web" },
    weeks: [
      {
        week: 0,
        course: { en: "Onboarding, Overview, and Workflow", id: "Orientasi, Ikhtisar, dan Alur Kerja" },
        sessions: [
          {
            num: 1, date: "25 Feb 2026",
            title: "Code Editor & Markdown",
            recordingId: "y7OiHn0ZtJo",
            points: []
          },
          {
            num: 2, date: "28 Feb 2026",
            title: "Terminal, CLI, and GIT",
            recordingId: "fQD3B3TPdo0",
            points: []
          },
        ]
      },
      {
        week: 1,
        course: { en: "Introduction to HTML", id: "Pengenalan HTML" },
        sessions: [
          { num: 3, date: "—", title: "Session 3", recordingId: null, points: [] },
          { num: 4, date: "—", title: "Session 4", recordingId: null, points: [] },
        ]
      },
      {
        week: 2,
        course: { en: "Styling & Layout", id: "Styling & Layout" },
        sessions: [
          { num: 5, date: "—", title: "Session 5", recordingId: null, points: [] },
          { num: 6, date: "—", title: "Session 6", recordingId: null, points: [] },
        ]
      },
    ]
  },
  // ── Add more modules here when they become available ──
  // { num: 2, title: { en: "Module 2", id: "Modul 2" }, subtitle: ..., weeks: [...] },
];

// ─── QUIZ QUESTIONS ───────────────────────────────────────────────────────────
const allQuestions = [
  { q: "What does HTML stand for?", options: ["HyperText Markup Language","High-Level Text Machine Language","HyperTransfer Markup Link","Home Tool Markup Language"], correct: "HyperText Markup Language" },
  { q: "Which CSS property changes the text color?", options: ["color","text-color","font-color","foreground"], correct: "color" },
  { q: "What is the output of: typeof null", options: ['"object"','"null"','"undefined"','"boolean"'], correct: '"object"' },
  { q: "Which method removes the LAST element from an array?", options: ["pop()","push()","shift()","splice()"], correct: "pop()" },
  { q: "What HTTP status code means 'Not Found'?", options: ["404","200","500","301"], correct: "404" },
  { q: "Which keyword declares a block-scoped variable in modern JavaScript?", options: ["let","var","define","declare"], correct: "let" },
  { q: "What does DOM stand for?", options: ["Document Object Model","Data Object Management","Document Oriented Module","Dynamic Object Model"], correct: "Document Object Model" },
  { q: "In Git, which command stages ALL changes in the current directory?", options: ["git add .","git commit .","git push all","git stage all"], correct: "git add ." },
  { q: "Which CSS property enables a flex layout?", options: ["display: flex","display: inline","float: left","position: absolute"], correct: "display: flex" },
  { q: "What does JSON stand for?", options: ["JavaScript Object Notation","JavaScript Online Network","Java Syntax Object Name","Just a Simple Object Notation"], correct: "JavaScript Object Notation" },
  { q: "Which HTML tag creates a hyperlink?", options: ["<a>","<link>","<href>","<url>"], correct: "<a>" },
  { q: "What does async/await do in JavaScript?", options: ["Handles asynchronous code more readably","Makes code run faster","Creates a new thread","Prevents all errors"], correct: "Handles asynchronous code more readably" },
  { q: "Which array method returns a NEW array without mutating the original?", options: ["map()","forEach()","push()","pop()"], correct: "map()" },
  { q: "What is the correct single-line comment syntax in JavaScript?", options: ["// comment","# comment","<!-- comment -->","** comment"], correct: "// comment" },
  { q: "What is the purpose of the fetch() API?", options: ["To make HTTP requests","To get HTML elements","To read files from disk","To update CSS styles"], correct: "To make HTTP requests" },
];

// ─── STATE ────────────────────────────────────────────────────────────────────
// Safely escape HTML special chars so raw option text (e.g. <a>, "object", <!-- -->) 
// can be injected into innerHTML without breaking the DOM
function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

let currentLang = 'en';
let quizQuestions = [], quizIndex = 0, quizScore = 0, quizTimer, timerVal = 30;

// ─── LANGUAGE ─────────────────────────────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  // update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });
  // sync lang buttons in both nav and mobile menu
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  // re-render materi cards with new language
  renderMateri();
}

// ─── THEME ────────────────────────────────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

// ─── MOBILE MENU ──────────────────────────────────────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  menu.classList.toggle('open');
  hamburger.classList.toggle('open');
}

// ─── ABOUT — PERSON SELECT ────────────────────────────────────────────────────
let activePerson = null;

function selectPerson(id) {
  const card   = document.getElementById('pcard-' + id);
  if (!card) return;
  const grid   = document.querySelector('.about-persons-grid');
  const slot   = grid.querySelector('.about-expanded-slot');
  const topRow = grid.querySelector('.about-row[data-row-order="0"]');
  const botRow = grid.querySelector('.about-row[data-row-order="1"]');

  const allCards = () => [...grid.querySelectorAll('.person-card')];
  // Return the row a card originally belongs to via data-order
  const getOrigRow = (c) => +c.dataset.order < 6 ? topRow : botRow;
  const restoreRowOrder = (r) => {
    [...r.querySelectorAll('.person-card')]
      .sort((a, b) => +a.dataset.order - +b.dataset.order)
      .forEach(c => r.appendChild(c));
  };

  // ── Deactivate same card ───────────────────────────────────────────────
  if (activePerson === id) {
    const state = Flip.getState(allCards());
    card.classList.remove('active');
    card.classList.add('is-flipping');
    const origRow = getOrigRow(card);
    origRow.appendChild(card);
    restoreRowOrder(origRow);
    grid.classList.remove('has-active');
    Flip.from(state, {
      duration: 0.38,
      ease: 'power2.inOut',
      onComplete: () => card.classList.remove('is-flipping')
    });
    activePerson = null;
    return;
  }

  // ── Switching: different card clicked while one is already active ─────
  if (activePerson) {
    const prev        = document.getElementById('pcard-' + activePerson);
    const prevOrigRow = prev ? getOrigRow(prev) : null;
    const allCardEls  = allCards();

    // 1. Snapshot EVERY card's rect BEFORE any DOM change
    const rectsBefore = new Map(allCardEls.map(c => [c, c.getBoundingClientRect()]));

    // 2. Put ALL cards in their CORRECT positions at once
    //    (prev → its real original row, card → slot)
    if (prev) {
      prev.classList.add('is-flipping');
      prev.classList.remove('active');
      prevOrigRow.appendChild(prev);
      restoreRowOrder(prevOrigRow);
    }
    const origRow = getOrigRow(card);
    restoreRowOrder(origRow);
    slot.appendChild(card);
    card.classList.add('active', 'is-flipping');
    // .has-active stays — overall 50/50 layout unchanged

    // 3. Force reflow so browser computes new natural positions
    grid.offsetHeight;

    // 4. Freeze ALL cards at their visual-before positions using instant transforms
    allCardEls.forEach(c => {
      const before = rectsBefore.get(c);
      const after  = c.getBoundingClientRect();
      gsap.set(c, {
        x: before.left - after.left,
        y: before.top  - after.top
      });
    });

    // 5. Tween ONLY the two animated cards to (0,0) — their natural positions
    const animated = [prev, card].filter(Boolean);
    gsap.to(animated, {
      x: 0, y: 0,
      duration: 0.42,
      ease: 'power2.inOut',
      onComplete: () => {
        // Clear all transforms — every card is already at its correct natural position
        allCardEls.forEach(c => gsap.set(c, { clearProps: 'x,y,transform' }));
        animated.forEach(c => c.classList.remove('is-flipping'));
        setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 500);
      }
    });

    activePerson = id;
    return;
  }

  // ── Fresh expand (no previous active card) ────────────────────────────
  const state = Flip.getState(allCards());

  const origRow = getOrigRow(card);
  restoreRowOrder(origRow);
  slot.appendChild(card);
  card.classList.add('active', 'is-flipping');
  grid.classList.add('has-active');

  Flip.from(state, {
    duration: 0.42,
    ease: 'power2.inOut',
    onComplete: () => {
      card.classList.remove('is-flipping');
      setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 500);
    }
  });

  activePerson = id;
}

// ─── NAVBAR SCROLL EFFECT ─────────────────────────────────────────────────────
const snapMain = document.getElementById('snap-main');
snapMain.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', snapMain.scrollTop > 40);
  updateActiveNav();
});

function updateActiveNav() {
  const sections = ['home','about','materi','game'];
  const scrollY = snapMain.scrollTop + 100;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.offsetTop, bot = top + el.offsetHeight;
    document.querySelectorAll(`.nav-link[href="#${id}"]`).forEach(a => {
      a.classList.toggle('active', scrollY >= top && scrollY < bot);
    });
  });
}

// ─── FADE-IN SECTIONS ─────────────────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { root: snapMain, threshold: 0.1 });
document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

// ─── MATERI CARDS ─────────────────────────────────────────────────────────────
function renderMateri() {
  const lang = i18n[currentLang];
  const container = document.getElementById('materiGrid');

  // ── Module tabs ──────────────────────────────────────────────────────────
  const activeModuleNum = window._activeModule || modules[0].num;

  const tabsHTML = `
    <div class="module-tabs" role="tablist">
      ${modules.map(m => `
        <button
          class="module-tab ${m.num === activeModuleNum ? 'active' : ''}"
          role="tab"
          aria-selected="${m.num === activeModuleNum}"
          onclick="selectModule(${m.num})"
        >
          <span class="module-tab-num">${m.title[currentLang]}</span>
          <span class="module-tab-sub">${m.subtitle[currentLang]}</span>
        </button>
      `).join('')}
    </div>`;

  // ── Active module content ────────────────────────────────────────────────
  const activeModule = modules.find(m => m.num === activeModuleNum) || modules[0];

  const weeksHTML = activeModule.weeks.map(w => {
    const sessionsHTML = w.sessions.map(s => {
      const hasPoints = s.points && s.points.length > 0;
      const hasRec    = s.recordingId;

      const pointsHTML = hasPoints
        ? `<ul class="materi-points">${s.points.map(p => `<li>${p}</li>`).join('')}</ul>`
        : `<div class="materi-empty">
             <span>${lang['materi.coming']}</span>
             <p>${lang['materi.desc']}</p>
           </div>`;

      const recBtn = hasRec
        ? `<a href="recordings.html" class="materi-rec-btn">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M8 5v14l11-7z"/></svg>
             ${lang['materi.view']}
           </a>`
        : '';

      return `
        <div class="materi-card ${!hasPoints ? 'materi-card-empty' : ''}">
          <div class="materi-top">
            <span class="materi-num">${lang['materi.session']} ${String(s.num).padStart(2,'0')}</span>
            <span class="materi-date">${s.date}</span>
          </div>
          <h3 class="materi-title-txt">${s.title}</h3>
          ${pointsHTML}
          ${recBtn}
        </div>`;
    }).join('');

    return `
      <div class="week-section">
        <div class="week-header">
          <div class="week-label">
            <span class="week-pill">${lang['materi.week']} ${w.week}</span>
            <span class="week-course">${w.course[currentLang]}</span>
          </div>
        </div>
        <div class="week-grid">${sessionsHTML}</div>
      </div>`;
  }).join('');

  container.innerHTML = tabsHTML + `<div class="module-panel">${weeksHTML}</div>`;
}

function selectModule(num) {
  window._activeModule = num;
  renderMateri();
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function showState(id) {
  ['quizStart','quizQuestion','quizResult'].forEach(s => {
    document.getElementById(s).classList.toggle('hidden', s !== id);
  });
}

function startQuiz() {
  quizQuestions = shuffle(allQuestions).slice(0, 10).map(q => ({
    ...q, options: shuffle(q.options)
  }));
  quizIndex = 0; quizScore = 0;
  showState('quizQuestion');
  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[quizIndex];
  const lang = i18n[currentLang];
  document.getElementById('quizProgressTxt').textContent = `${quizIndex + 1} / 10`;
  document.getElementById('quizProgressFill').style.width = `${(quizIndex / 10) * 100}%`;
  document.getElementById('quizQuestionTxt').textContent = q.q;
  document.getElementById('quizFeedback').classList.add('hidden');
  document.getElementById('quizNextBtn').classList.add('hidden');

  const opts = document.getElementById('quizOptions');
  opts.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-opt" data-opt="${escHtml(opt)}" onclick="selectAnswer(this)">
      <span class="opt-letter">${['A','B','C','D'][i]}</span>
      <span>${escHtml(opt)}</span>
    </button>`).join('');

  startTimer();
}

function selectAnswer(btn) {
  clearInterval(quizTimer);
  const chosen = btn.dataset.opt;
  const q = quizQuestions[quizIndex];
  const correct = q.correct;
  const isCorrect = chosen === correct;
  if (isCorrect) quizScore++;

  // highlight all options
  document.querySelectorAll('.quiz-opt').forEach(b => {
    b.disabled = true;
    const text = b.querySelector('span:last-child').textContent;
    if (text === correct) b.classList.add('opt-correct');
    else if (b === btn && !isCorrect) b.classList.add('opt-wrong');
  });

  const fb = document.getElementById('quizFeedback');
  const lang = i18n[currentLang];
  fb.classList.remove('hidden');
  document.getElementById('feedbackIcon').textContent = isCorrect ? '✓' : '✗';
  document.getElementById('feedbackMsg').textContent = isCorrect ? lang['game.correct'] : lang['game.wrong'];
  fb.className = `quiz-feedback ${isCorrect ? 'fb-correct' : 'fb-wrong'}`;

  document.getElementById('quizNextBtn').classList.remove('hidden');
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex >= 10) { showResult(); return; }
  renderQuestion();
}

function showResult() {
  clearInterval(quizTimer);
  showState('quizResult');
  const lang = i18n[currentLang];
  document.getElementById('resultScore').textContent = quizScore;
  const pct = (quizScore / 10) * 100;
  // animate arc
  setTimeout(() => {
    document.getElementById('resultArc').style.strokeDashoffset = 100 - pct;
    document.getElementById('resultArc').style.transition = 'stroke-dashoffset 1s ease';
  }, 100);
  let msg = quizScore >= 8 ? lang['game.finish.great']
          : quizScore >= 5 ? lang['game.finish.good']
          : lang['game.finish.ok'];
  document.getElementById('resultMsg').textContent = msg;
  // color arc based on score
  const arc = document.getElementById('resultArc');
  arc.style.stroke = quizScore >= 8 ? '#22c55e' : quizScore >= 5 ? '#0ea5e9' : '#f59e0b';
}

function startTimer() {
  timerVal = 30;
  document.getElementById('timerNum').textContent = timerVal;
  document.getElementById('timerArc').style.strokeDashoffset = 0;
  clearInterval(quizTimer);
  quizTimer = setInterval(() => {
    timerVal--;
    document.getElementById('timerNum').textContent = timerVal;
    const offset = ((30 - timerVal) / 30) * 100;
    document.getElementById('timerArc').style.strokeDashoffset = offset;
    document.getElementById('timerArc').style.stroke = timerVal <= 10 ? '#f59e0b' : 'var(--accent)';
    if (timerVal <= 0) {
      clearInterval(quizTimer);
      document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
      // auto show correct answer
      document.querySelectorAll('.quiz-opt').forEach(b => {
        if (b.querySelector('span:last-child').textContent === quizQuestions[quizIndex].correct)
          b.classList.add('opt-correct');
      });
      const fb = document.getElementById('quizFeedback');
      fb.classList.remove('hidden');
      document.getElementById('feedbackIcon').textContent = '⏰';
      document.getElementById('feedbackMsg').textContent = "Time's up!";
      fb.className = 'quiz-feedback fb-wrong';
      document.getElementById('quizNextBtn').classList.remove('hidden');
    }
  }, 1000);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setLang('en');
  renderMateri();
  updateActiveNav();
});
