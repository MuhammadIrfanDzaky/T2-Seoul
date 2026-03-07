// ─── MATERIALS — grouped by Module → Week → Session ───────────────────────────
const modules = [
  // ════════════════════════════════════════════════════════
  //  MODULE 1 — Web Development Essentials  (3 weeks)
  // ════════════════════════════════════════════════════════
  {
    num: 1,
    title: { en: "Module 1", id: "Modul 1" },
    subtitle: { en: "Web Development Essentials", id: "Dasar-dasar Pengembangan Web" },
    weeks: [
      {
        week: 0,
        course: { en: "Onboarding, Overview & Workflow", id: "Orientasi, Ikhtisar & Alur Kerja" },
        sessions: [
          {
            num: 1, date: "25 Feb 2026",
            title: "Code Editor & Markdown",
            recordingId: "y7OiHn0ZtJo",
            points: [
              "Set up VS Code with essential extensions (Prettier, GitLens, Live Server)",
              "Learn Markdown syntax: headings, lists, bold/italic, code blocks, links",
              "Create a well-structured README.md for any project",
              "Use VS Code's built-in Markdown preview and keyboard shortcuts",
            ]
          },
          {
            num: 2, date: "28 Feb 2026",
            title: "Terminal, CLI & Git Basics",
            recordingId: "fQD3B3TPdo0",
            points: [
              "Navigate the file system with cd, ls, mkdir, rm, cp, mv",
              "Understand the Git workflow: init → add → commit → push",
              "Create and merge branches: git branch, git checkout, git merge",
              "Write descriptive commit messages following conventional commits",
            ]
          },
        ]
      },
      {
        week: 1,
        course: { en: "Introduction to HTML", id: "Pengenalan HTML" },
        sessions: [
          {
            num: 3, date: "4 Mar 2026",
            title: "HTML Structure & Semantics",
            recordingId: null,
            points: [
              "Understand DOCTYPE declaration and the HTML document skeleton",
              "Use semantic tags: <header>, <nav>, <main>, <section>, <article>, <footer>",
              "Build forms with <input>, <label>, <select>, <textarea>, and <button>",
              "Implement accessibility attributes: alt text, aria-label, role",
            ]
          },
          {
            num: 4, date: "7 Mar 2026",
            title: "HTML Media & Tables",
            recordingId: null,
            points: [
              "Embed images responsively using <img> with srcset and sizes",
              "Add audio and video with <audio> and <video> HTML5 tags",
              "Build structured tables with <thead>, <tbody>, <tfoot>, and colspan",
              "Wrap media with <figure> and <figcaption> for accessible captions",
            ]
          },
        ]
      },
      {
        week: 2,
        course: { en: "Styling & Layout with CSS", id: "Styling & Layout dengan CSS" },
        sessions: [
          {
            num: 5, date: "11 Mar 2026",
            title: "CSS Fundamentals",
            recordingId: null,
            points: [
              "Write CSS selectors: element, .class, #id, attribute, pseudo-class",
              "Master the box model: margin, border, padding, and content area",
              "Apply colors, font-family, font-size, and units (px, em, rem, %)",
              "Understand cascade, specificity, and CSS inheritance rules",
            ]
          },
          {
            num: 6, date: "14 Mar 2026",
            title: "Flexbox, Grid & Responsive Design",
            recordingId: null,
            points: [
              "Build one-dimensional layouts with Flexbox (flex-direction, justify-content, align-items)",
              "Create two-dimensional grids with CSS Grid (grid-template-columns, grid-area, gap)",
              "Use position: relative, absolute, fixed, and sticky effectively",
              "Write mobile-first responsive styles with @media queries",
            ]
          },
        ]
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  //  MODULE 2 — CSS Implementation  (4 weeks)
  // ════════════════════════════════════════════════════════
  {
    num: 2,
    title: { en: "Module 2", id: "Modul 2" },
    subtitle: { en: "CSS Implementation", id: "Implementasi CSS" },
    weeks: [
      {
        week: 1,
        course: { en: "JavaScript Fundamentals", id: "Dasar-dasar JavaScript" },
        sessions: [
          {
            num: 1, date: "18 Mar 2026",
            title: "Variables, Types & Functions",
            recordingId: null,
            points: [
              "Declare variables with let, const, and var — know the difference in scope and hoisting",
              "Work with primitives: string, number, boolean, null, undefined, Symbol",
              "Write function declarations, function expressions, and arrow functions",
              "Use if/else, ternary operator, and switch statement for control flow",
            ]
          },
          {
            num: 2, date: "21 Mar 2026",
            title: "Arrays & Objects",
            recordingId: null,
            points: [
              "Mutate arrays with push(), pop(), shift(), unshift(), splice()",
              "Transform arrays using map(), filter(), reduce(), and find()",
              "Define objects with key-value pairs and access properties via dot or bracket notation",
              "Use destructuring assignment and the spread operator (...) on arrays and objects",
            ]
          },
        ]
      },
      {
        week: 2,
        course: { en: "DOM Manipulation & Events", id: "Manipulasi DOM & Event" },
        sessions: [
          {
            num: 3, date: "25 Mar 2026",
            title: "DOM Manipulation",
            recordingId: null,
            points: [
              "Select elements with querySelector() and querySelectorAll()",
              "Read and update content via textContent, innerHTML, and element attributes",
              "Add, remove, and toggle CSS classes with classList.add/remove/toggle",
              "Create, append, and remove DOM nodes dynamically with createElement and remove()",
            ]
          },
          {
            num: 4, date: "28 Mar 2026",
            title: "Events & Form Handling",
            recordingId: null,
            points: [
              "Attach event listeners with addEventListener() and understand event types",
              "Leverage event bubbling and use event delegation for efficiency",
              "Intercept form submissions with event.preventDefault() and validate inputs",
              "Read input values, clear fields, and show contextual feedback to the user",
            ]
          },
        ]
      },
      {
        week: 3,
        course: { en: "Async JavaScript & APIs", id: "Async JavaScript & API" },
        sessions: [
          {
            num: 5, date: "1 Apr 2026",
            title: "Promises & Async/Await",
            recordingId: null,
            points: [
              "Understand the JavaScript event loop: call stack, web APIs, and callback queue",
              "Chain Promises with .then(), .catch(), and .finally()",
              "Write cleaner async code using async/await syntax",
              "Handle errors in async functions with try/catch blocks",
            ]
          },
          {
            num: 6, date: "4 Apr 2026",
            title: "Fetch API & REST",
            recordingId: null,
            points: [
              "Make HTTP requests with fetch() and understand request/response cycle",
              "Parse JSON responses using response.json() and handle non-OK statuses",
              "Send data with POST requests including proper headers and JSON body",
              "Manage loading, success, and error UI states when fetching data",
            ]
          },
        ]
      },
      {
        week: 4,
        course: { en: "Intro to React", id: "Pengenalan React" },
        sessions: [
          {
            num: 7, date: "8 Apr 2026",
            title: "React Components & JSX",
            recordingId: null,
            points: [
              "Understand component-based architecture and the virtual DOM concept",
              "Write functional components using JSX syntax",
              "Pass data from parent to child components using props",
              "Scaffold a new React project quickly with Vite",
            ]
          },
          {
            num: 8, date: "11 Apr 2026",
            title: "React State & Hooks",
            recordingId: null,
            points: [
              "Manage local component state with the useState hook",
              "Run side effects (API calls, timers) with the useEffect hook",
              "Build controlled form inputs that sync with component state",
              "Understand when and why React re-renders a component",
            ]
          },
        ]
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  //  MODULE 3 — Backend Development  (2 weeks)
  // ════════════════════════════════════════════════════════
  {
    num: 3,
    title: { en: "Module 3", id: "Modul 3" },
    subtitle: { en: "Backend Development", id: "Pengembangan Backend" },
    weeks: [
      {
        week: 1,
        course: { en: "Node.js & Express", id: "Node.js & Express" },
        sessions: [
          {
            num: 1, date: "15 Apr 2026",
            title: "Node.js Basics",
            recordingId: null,
            points: [
              "Understand the Node.js runtime, its non-blocking I/O model, and the module system",
              "Work with built-in modules: fs, path, os, and http",
              "Create a basic HTTP server and handle requests/responses manually",
              "Manage project dependencies with npm: init, install, scripts, package.json",
            ]
          },
          {
            num: 2, date: "18 Apr 2026",
            title: "REST API with Express",
            recordingId: null,
            points: [
              "Set up an Express app and define GET, POST, PUT, DELETE routes",
              "Organize routes using Express Router for clean project structure",
              "Parse incoming JSON bodies with express.json() middleware",
              "Test all endpoints with Postman or Thunder Client",
            ]
          },
        ]
      },
      {
        week: 2,
        course: { en: "Databases & ORM", id: "Database & ORM" },
        sessions: [
          {
            num: 3, date: "22 Apr 2026",
            title: "SQL Fundamentals",
            recordingId: null,
            points: [
              "Write CRUD queries: SELECT, INSERT INTO, UPDATE, DELETE",
              "Filter and sort results with WHERE, ORDER BY, GROUP BY, and HAVING",
              "Join related tables with INNER JOIN, LEFT JOIN, and understand foreign keys",
              "Design a normalized relational schema with primary and foreign key constraints",
            ]
          },
          {
            num: 4, date: "25 Apr 2026",
            title: "ORM with Prisma",
            recordingId: null,
            points: [
              "Define your database schema declaratively in schema.prisma",
              "Generate and apply database migrations with prisma migrate dev",
              "Perform CRUD operations via the Prisma Client in JavaScript",
              "Inspect and manually edit data using Prisma Studio",
            ]
          },
        ]
      },
    ]
  },
];

// ─── MATERI CARDS ─────────────────────────────────────────────────────────────
function renderMateri() {
  const lang = i18n[currentLang];
  const container = document.getElementById('materiGrid');
  if (!container) return;

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
    const weekLabel = w.week === 0
      ? (currentLang === 'id' ? 'Pra-Minggu' : 'Pre-Week')
      : `${lang['materi.week']} ${w.week}`;

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
            <span class="week-pill">${weekLabel}</span>
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
