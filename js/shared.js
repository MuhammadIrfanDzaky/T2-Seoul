// ─── I18N ────────────────────────────────────────────────────────────────────
const i18n = {
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.materi": "Materials", "nav.game": "Quiz",
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
    "nav.home": "Beranda", "nav.about": "Tentang", "nav.materi": "Materi", "nav.game": "Quiz",
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

let currentLang = 'en';

// ─── LANGUAGE ─────────────────────────────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  // re-render materi cards with new language (only if function exists on this page)
  if (typeof renderMateri === 'function') renderMateri();
}

// ─── THEME ────────────────────────────────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// ─── MOBILE MENU ──────────────────────────────────────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  if (menu) menu.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('open');
}

// ─── NAVBAR SCROLL EFFECT ─────────────────────────────────────────────────────
// Works for both snap-main (index) and normal page scroll (sub-pages)
function _setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const snapMain = document.getElementById('snap-main');
  if (snapMain) {
    // index.html — listen on snap-main
    snapMain.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', snapMain.scrollTop > 40);
    });
  } else {
    // sub-pages — listen on window
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
    // Sub-pages always show solid navbar (no transparent hero phase)
    navbar.classList.add('scrolled');
  }
}

// ─── ACTIVE NAV LINK (URL-based for sub-pages) ────────────────────────────────
function _setActiveNavLink() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  // Map filename → which href should be "active"
  const activeHref = {
    'index.html': 'index.html',
    'about.html': 'about.html',
    'materials.html': 'materials.html',
    'quiz.html': 'quiz.html',
    'recordings.html': 'recordings.html',
  }[file];

  if (activeHref) {
    document.querySelectorAll('.nav-link, .mob-link').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === activeHref);
    });
  }
}

// ─── FADE-IN OBSERVER ────────────────────────────────────────────────────────
function _setupFadeIn() {
  const snapMain = document.getElementById('snap-main');
  const opts = snapMain ? { root: snapMain, threshold: 0.1 } : { threshold: 0.1 };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, opts);
  document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
}

// ─── SHARED INIT ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme (default: dark)
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  _setupNavbarScroll();
  _setActiveNavLink();
  _setupFadeIn();
  setLang('en');
});
