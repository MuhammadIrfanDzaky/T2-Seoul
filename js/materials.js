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
          // ── Lecture 1 ───────────────────────────────────────────
          {
            num: 1, date: null,
            title: "Introduction to Software Engineering",
            recordingId: null,
            sections: [
              {
                title: { en: "What is Web Development?", id: "Apa itu Web Development?" },
                items: {
                  en: [
                    "The process of building websites that run in a web browser",
                    "Powers popular platforms like Google, YouTube, Facebook, Instagram, LinkedIn, and Airbnb",
                    "Even used in systems built by Apple and Microsoft",
                  ],
                  id: [
                    "Proses membangun website yang berjalan di dalam web browser",
                    "Digunakan untuk membangun platform populer seperti Google, YouTube, Facebook, Instagram, LinkedIn, dan Airbnb",
                    "Bahkan digunakan dalam sistem yang dibangun oleh Apple dan Microsoft",
                  ]
                }
              },
              {
                title: { en: "What is a Software Engineer?", id: "Apa itu Software Engineer?" },
                items: {
                  en: [
                    "A professional who creates, develops, and maintains software applications",
                    "Uses programming languages and tools to design, code, test, and fix software",
                    "Responsibilities: understanding user needs, creating software architecture, writing code, testing, and collaborating with a team",
                    "No advanced math skill required",
                  ],
                  id: [
                    "Seorang profesional yang membuat, mengembangkan, dan memelihara aplikasi perangkat lunak",
                    "Menggunakan bahasa pemrograman dan tools untuk mendesain, membuat kode, menguji, dan memperbaiki software",
                    "Tanggung jawab: memahami kebutuhan pengguna, membuat arsitektur software, menulis kode, testing, dan berkolaborasi dengan tim",
                    "Tidak membutuhkan keahlian matematika tinggi",
                  ]
                }
              },
              {
                title: { en: "Programming Languages", id: "Bahasa Pemrograman" },
                items: {
                  en: [
                    "JavaScript, TypeScript — for web",
                    "PHP, Python, Ruby — for backend/scripting",
                    "Golang, Rust — for high-performance systems",
                    "Java, Kotlin, Swift — for mobile",
                    "C, C++, C#, Objective-C — for systems and desktop",
                    "Assembly — for hardware-level programming",
                  ],
                  id: [
                    "JavaScript, TypeScript — untuk web",
                    "PHP, Python, Ruby — untuk backend/scripting",
                    "Golang, Rust — untuk sistem performa tinggi",
                    "Java, Kotlin, Swift — untuk mobile",
                    "C, C++, C#, Objective-C — untuk sistem dan desktop",
                    "Assembly — untuk pemrograman level hardware",
                  ]
                }
              },
              {
                title: { en: "Software Engineering Career Roadmap", id: "Jalur Karir Software Engineering" },
                items: {
                  en: [
                    "Web Developer: Full Stack, Frontend, Backend",
                    "Mobile Developer: Android, iOS",
                    "Others: Desktop App Developer, VR/AR Developer, IoT Developer, AI Engineer, Blockchain Developer",
                  ],
                  id: [
                    "Web Developer: Full Stack, Frontend, Backend",
                    "Mobile Developer: Android, iOS",
                    "Lainnya: Desktop App Developer, VR/AR Developer, IoT Developer, AI Engineer, Blockchain Developer",
                  ]
                }
              },
              {
                title: { en: "Website vs Web Application", id: "Website vs Web Application" },
                items: {
                  en: [
                    "Website — static/informational content: Personal, Company Profile, Organization, School, Government, Community",
                    "Web Application — dynamic & interactive: Social media & events, News & magazine, Writing & publication, Work & productivity, Contacts & address book, Forum & discussion, Note-taking & research, Multimedia streaming, Cooking & culinary, Commerce & shopping",
                  ],
                  id: [
                    "Website — konten statis/informatif: Personal, Company Profile, Organisasi, Sekolah, Pemerintahan, Komunitas",
                    "Web Application — konten dinamis & interaktif: Media sosial & event, Berita & majalah, Penulisan & publikasi, Pekerjaan & produktivitas, Kontak & buku alamat, Forum & diskusi, Catatan & riset, Streaming multimedia, Memasak & kuliner, E-commerce & belanja",
                  ]
                }
              },
            ]
          },
          // ── Lecture 2 ───────────────────────────────────────────
          {
            num: 2, date: "25 Feb 2026",
            title: "Code Editor & Markdown",
            recordingId: "y7OiHn0ZtJo",
            sections: [
              {
                title: { en: "Code Editors & IDEs", id: "Code Editor & IDE" },
                items: {
                  en: [
                    "A text editor program designed specifically for writing and editing source code",
                    "CLI Editors (terminal-based): Vi/Vim, Emacs, Nano",
                    "Regular & Lightweight: VS Code ⭐ by Microsoft, Sublime Text, Cursor (fork of VS Code with AI vibe coding)",
                    "IDE (Full-featured): Visual Studio (C#/F#), Android Studio, Apple Xcode",
                  ],
                  id: [
                    "Program text editor yang dirancang khusus untuk menulis dan mengedit source code",
                    "CLI Editors (berbasis terminal): Vi/Vim, Emacs, Nano",
                    "Regular & Lightweight: VS Code ⭐ oleh Microsoft, Sublime Text, Cursor (fork VS Code dengan AI vibe coding)",
                    "IDE (Fitur lengkap): Visual Studio (C#/F#), Android Studio, Apple Xcode",
                  ]
                }
              },
              {
                title: { en: "Our IDE: VS Code & Kiro", id: "IDE yang Kita Gunakan: VS Code & Kiro" },
                items: {
                  en: [
                    "VS Code: Source code editor by Microsoft, available on Windows, Linux, macOS",
                    "Kiro: IDE with Intelligent Code Completion (AI-driven), Built-in Debugging, Version Control (Git & GitHub integrated), Advanced Refactoring",
                  ],
                  id: [
                    "VS Code: Code editor dari Microsoft, tersedia di Windows, Linux, macOS",
                    "Kiro: IDE dengan Intelligent Code Completion (berbasis AI), Built-in Debugging, Version Control (terintegrasi Git & GitHub), Advanced Refactoring",
                  ]
                }
              },
              {
                title: { en: "Documentation & README", id: "Dokumentasi & README" },
                items: {
                  en: [
                    "Documentation is a written explanation about something — can be text, online, video, or audio",
                    "Contains technical information: installation steps, usage guide, specifications, and maintenance",
                    "README.md serves as the main documentation inside a code repository",
                    "Contains: project name, description, installation steps, and usage guide",
                    "Other common documentation files: CONTRIBUTING.md, HELP.md",
                  ],
                  id: [
                    "Dokumentasi adalah penjelasan tertulis tentang sesuatu — bisa berupa teks, online, video, atau audio",
                    "Berisi informasi teknis seperti: cara instalasi, cara penggunaan, spesifikasi, dan maintenance",
                    "File README.md berfungsi sebagai dokumentasi utama di dalam sebuah code repository",
                    "Berisi: nama project, deskripsi, cara instalasi, dan panduan penggunaan",
                    "File dokumentasi umum lainnya: CONTRIBUTING.md, HELP.md",
                  ]
                }
              },
              {
                title: { en: "What is Markdown?", id: "Apa itu Markdown?" },
                items: {
                  en: [
                    "Markdown is a lightweight markup language for adding formatting to plaintext",
                    "Simple — can be written in Notepad or VS Code; does not change font, color, or size — focuses on content",
                    "Uses keyboard symbols you already know: #, *, **, >, -, `code`, [link](url)",
                    "Files can be converted to many formats: PDF, ePub, HTML, LaTeX, CSV, DOC (Word), PPT (PowerPoint)",
                    "To preview in VS Code: press Ctrl/Cmd + Shift + P → type \"markdown preview\"",
                  ],
                  id: [
                    "Markdown adalah lightweight markup language untuk menambahkan formatting ke plaintext",
                    "Sederhana — bisa ditulis di Notepad biasa maupun VS Code; tidak mengubah font, warna, atau ukuran — fokus pada konten",
                    "Menggunakan simbol keyboard yang sudah kamu kenal: #, *, **, >, -, `kode`, [link](url)",
                    "File bisa dikonversi ke berbagai format: PDF, ePub, HTML, LaTeX, CSV, DOC (Word), PPT (PowerPoint)",
                    "Preview di VS Code: tekan Ctrl/Cmd + Shift + P → ketik \"markdown preview\"",
                  ]
                }
              },
            ]
          },
          // ── Lecture 3 ───────────────────────────────────────────
          {
            num: 3, date: "28 Feb 2026",
            title: "Terminal & CLI",
            recordingId: "fQD3B3TPdo0",
            sections: [
              {
                title: { en: "Terminal, Shell & CLI", id: "Terminal, Shell & CLI" },
                items: {
                  en: [
                    "Terminal and CLI are used together for faster and more efficient computer navigation",
                    "The terminal is just the display (UI); the actual command processing is handled by the Shell",
                    "Shell is the communication bridge between the terminal and the OS",
                    "Prompt symbols: $ or % = regular user | # = superuser/root ⚠️ | ~ = home folder",
                    "Popular shells: sh (most basic), bash (default Mac/Linux), zsh (more modern), fish (user-friendly)",
                  ],
                  id: [
                    "Terminal dan CLI digunakan bersama untuk navigasi komputer yang lebih cepat dan efisien",
                    "Terminal hanyalah tampilan (UI), yang benar-benar memproses perintah adalah Shell",
                    "Shell adalah jembatan komunikasi antara terminal dan Operating System",
                    "Simbol prompt: $ atau % = regular user | # = superuser/root ⚠️ | ~ = home folder",
                    "Shell populer: sh (paling dasar), bash (default Mac/Linux), zsh (lebih modern), fish (user-friendly)",
                  ]
                }
              },
              {
                title: { en: "Core Terminal Commands", id: "Perintah Terminal Inti" },
                items: {
                  en: [
                    "cd — change directory | ls / dir — list contents | pwd — print working directory",
                    "mkdir — create directory | rm / del — delete file | rm -r / rd /s — delete directory",
                    "cp / copy — copy file | mv / move — move or rename | cat / type — view file contents",
                    "clear / cls — clear screen | grep / find — search string in file | man / /? — show help",
                    "Naming is case sensitive — File, file, and FILE are three different things",
                  ],
                  id: [
                    "cd — pindah folder | ls / dir — lihat isi folder | pwd — cek lokasi saat ini",
                    "mkdir — buat folder | rm / del — hapus file | rm -r / rd /s — hapus folder",
                    "cp / copy — salin file | mv / move — pindah atau rename | cat / type — lihat isi file",
                    "clear / cls — bersihkan layar | grep / find — cari string dalam file | man / /? — tampilkan bantuan",
                    "Penamaan di terminal bersifat case sensitive — File, file, dan FILE adalah tiga hal yang berbeda",
                  ]
                }
              },
              {
                title: { en: "Terminal Package Managers", id: "Package Manager Terminal" },
                items: {
                  en: [
                    "macOS: Homebrew (`brew`) — brew install git | brew install --cask google-chrome",
                    "Linux Ubuntu: APT — sudo apt update && sudo apt install git",
                    "Windows: winget (built-in Win 10+) — winget search git | winget install git",
                  ],
                  id: [
                    "macOS: Homebrew (`brew`) — brew install git | brew install --cask google-chrome",
                    "Linux Ubuntu: APT — sudo apt update && sudo apt install git",
                    "Windows: winget (bawaan Win 10+) — winget search git | winget install git",
                  ]
                }
              },
            ]
          },
          // ── Lecture 4 ───────────────────────────────────────────
          {
            num: 4, date: "04 Mar 2026",
            title: "Git",
            recordingId: "7_E8M9D5PRc",
            sections: [
              {
                title: { en: "What is Git?", id: "Apa itu Git?" },
                items: {
                  en: [
                    "A free and open-source distributed version control system",
                    "Used to track code changes, prevent data loss, and collaborate with teams",
                    "Far superior to older tools like Subversion, CVS, and Perforce",
                    "As a beginner, you must learn Git via terminal/CLI first before using any GUI tools",
                  ],
                  id: [
                    "Distributed version control system yang gratis dan open-source",
                    "Digunakan untuk melacak perubahan kode, mencegah kehilangan data, dan berkolaborasi dengan tim",
                    "Jauh lebih unggul dibanding tools lama seperti Subversion, CVS, dan Perforce",
                    "Sebagai pemula, wajib belajar Git via terminal/CLI terlebih dahulu sebelum menggunakan GUI",
                  ]
                }
              },
              {
                title: { en: "Git Workflow & File States", id: "Git Workflow & Status File" },
                items: {
                  en: [
                    "Working Directory → git add → Staging Area → git commit → Local Repo → git push → Remote Repo",
                    "Untracked: Git doesn't know this file exists yet",
                    "Modified: changes exist but not yet staged | Staged: git add-ed, ready to commit",
                    "Committed: changes permanently saved in Git history",
                  ],
                  id: [
                    "Working Directory → git add → Staging Area → git commit → Local Repo → git push → Remote Repo",
                    "Untracked: Git belum mengenali file ini",
                    "Modified: ada perubahan tapi belum di-stage | Staged: sudah di-add, siap commit",
                    "Committed: perubahan sudah tersimpan permanen di riwayat Git",
                  ]
                }
              },
              {
                title: { en: "Basic Git Commands", id: "Perintah Dasar Git" },
                items: {
                  en: [
                    "git config — set username and email | git init — initialize a new repository",
                    "git clone — copy an existing repository | git status — check current repo status",
                    "git add — move changes to staging area | git commit -m 'message' — save to history",
                    "git log — view commit history | git push — upload to remote | git pull — download & merge",
                    "Always prefix with `git`. It's `git status`, not just `status`.",
                  ],
                  id: [
                    "git config — set nama dan email | git init — inisialisasi repo baru",
                    "git clone — salin repo yang sudah ada | git status — cek status repo saat ini",
                    "git add — pindahkan ke staging area | git commit -m 'pesan' — simpan ke riwayat",
                    "git log — lihat histori commit | git push — upload ke remote | git pull — download & merge",
                    "Selalu tambahkan `git` sebelum nama command. Bukan `status`, tapi `git status`.",
                  ]
                }
              },
              {
                title: { en: "Commit Best Practices", id: "Best Practice Commit" },
                items: {
                  en: [
                    "Conventional Commits format: <type>[optional scope]: <description>",
                    "Types: feat (new feature), fix (bug), docs, style, refactor, test, chore",
                    "Atomic Commits ⭐ — one commit = one logical change (most recommended)",
                    "❌ Avoid: vague messages ('fix stuff'), committing node_modules/.env, not running git pull before push",
                  ],
                  id: [
                    "Format Conventional Commits: <type>[optional scope]: <description>",
                    "Types: feat (fitur baru), fix (bug), docs, style, refactor, test, chore",
                    "Atomic Commits ⭐ — satu commit = satu perubahan logis (paling direkomendasikan)",
                    "❌ Hindari: pesan tidak jelas ('fix stuff'), commit node_modules/.env, tidak git pull sebelum push",
                  ]
                }
              },
            ]
          },
          // ── Lecture 5 ───────────────────────────────────────────
          {
            num: 5, date: "07 Mar 2026",
            title: "Git Collaboration",
            recordingId: "4H-nEXL9rjU",
            sections: [
              {
                title: { en: "Branches", id: "Branch" },
                items: {
                  en: [
                    "A branch is a separate line of development — changes do not affect other branches until you merge",
                    "Enables multiple people to work on different features simultaneously",
                    "git checkout -b <branch-name> — create a new branch | git checkout <branch-name> — switch branch",
                    "git merge <source-branch> — merge a branch into the current branch",
                  ],
                  id: [
                    "Branch adalah jalur pengembangan terpisah — perubahan tidak mempengaruhi branch lain sampai di-merge",
                    "Memungkinkan beberapa orang mengerjakan fitur berbeda secara bersamaan",
                    "git checkout -b <nama> — buat branch baru | git checkout <nama> — pindah branch",
                    "git merge <branch-acuan> — gabungkan branch ke branch aktif",
                  ]
                }
              },
              {
                title: { en: "Merge Conflicts", id: "Merge Conflict" },
                items: {
                  en: [
                    "A conflict occurs when two people edit the same part of the same file, and Git doesn't know which is correct",
                    "Commonly happens during: git merge, git pull, or opening a Pull Request",
                    "How to resolve: git pull source branch → git checkout your-branch → git merge source-branch",
                    "Manually remove conflict markers (<<<, ===, >>>) → git add → git commit -m 'resolve conflict' → git push",
                  ],
                  id: [
                    "Conflict terjadi ketika dua orang mengubah bagian yang sama pada file yang sama, dan Git tidak tahu mana yang benar",
                    "Biasanya muncul saat: git merge, git pull, atau membuka Pull Request",
                    "Cara resolve: git pull branch acuan → git checkout branch kamu → git merge branch acuan",
                    "Hapus conflict markers (<<<, ===, >>>) secara manual → git add → git commit -m 'resolve conflict' → git push",
                  ]
                }
              },
              {
                title: { en: "GitHub", id: "GitHub" },
                items: {
                  en: [
                    "The most popular platform for publishing and collaborating on Git repositories",
                    "Owned by Microsoft since 2018 (acquired for US$7.5 billion)",
                    "⚠️ GitHub ≠ Git — Git is the tool, GitHub is the hosting platform",
                    "First-time push: git remote add origin <url> → git branch -M main → git push -u origin main",
                    "Clone a repo: git clone <url> — no need to run git init again",
                  ],
                  id: [
                    "Platform paling populer untuk publish dan berkolaborasi di Git repository",
                    "Dimiliki oleh Microsoft sejak 2018 (diakuisisi senilai US$7.5 miliar)",
                    "⚠️ GitHub ≠ Git — Git adalah tool-nya, GitHub adalah platform hosting-nya",
                    "Push pertama kali: git remote add origin <url> → git branch -M main → git push -u origin main",
                    "Clone repo: git clone <url> — tidak perlu git init lagi",
                  ]
                }
              },
              {
                title: { en: "Collaboration Simulation (7 Steps)", id: "Simulasi Kolaborasi (7 Langkah)" },
                items: {
                  en: [
                    "1. Create a new GitHub repo, invite collaborators",
                    "2. Everyone git clone the repository",
                    "3. Each person creates their own branch: git checkout -b <branch-name>",
                    "4. Make changes, then git add . → git commit -m 'message'",
                    "5. Push branch to remote: git push origin <branch-name>",
                    "6. Create a Pull Request on GitHub, request a review, then merge",
                    "7. Simulation complete — all changes successfully merged into main ✓",
                  ],
                  id: [
                    "1. Buat repo GitHub baru, undang kolaborator",
                    "2. Setiap orang git clone repository tersebut",
                    "3. Buat branch masing-masing: git checkout -b <nama-branch>",
                    "4. Kerjakan perubahan, lalu git add . → git commit -m 'pesan'",
                    "5. Push branch ke remote: git push origin <nama-branch>",
                    "6. Buat Pull Request di GitHub, minta review, lalu merge",
                    "7. Simulasi selesai — semua perubahan berhasil digabungkan ke main ✓",
                  ]
                }
              },
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

  /*   // ════════════════════════════════════════════════════════
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
  }, */
];

// ─── MATERI CARDS ─────────────────────────────────────────────────────────────
function _buildContentHTML(s, lang) {
  if (!s) return '';
  const hasSections = s.sections && s.sections.length > 0;
  const hasPoints   = s.points   && s.points.length   > 0;
  if (hasSections) {
    return s.sections.map(sec => {
      const title = (sec.title && typeof sec.title === 'object')
        ? (sec.title[currentLang] || sec.title.en)
        : sec.title;
      const rawItems = sec.items;
      const items = (rawItems && !Array.isArray(rawItems))
        ? (rawItems[currentLang] || rawItems.en || [])
        : (rawItems || []);
      return `
      <div class="materi-section">
        <div class="materi-section-title">${title}</div>
        <ul class="materi-points">${items.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>`;
    }).join('');
  } else if (hasPoints) {
    return `<ul class="materi-points">${s.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
  }
  return `<div class="materi-empty"><span>${lang['materi.coming']}</span><p>${lang['materi.desc']}</p></div>`;
}

function renderMateri() {
  const lang = i18n[currentLang];
  const container = document.getElementById('materiGrid');
  if (!container) return;

  const activeModuleNum = window._activeModule   || modules[0].num;
  const state           = window._activeLecture  || { weekIdx: 0, sessionIdx: 0 };
  const activeModule    = modules.find(m => m.num === activeModuleNum) || modules[0];

  // ── Module tabs ─────────────────────────────────────────────────────────
  const tabsHTML = `
    <div class="module-tabs" role="tablist">
      ${modules.map(m => `
        <button class="module-tab ${m.num === activeModuleNum ? 'active' : ''}"
          role="tab" aria-selected="${m.num === activeModuleNum}"
          onclick="selectModule(${m.num})">
          <span class="module-tab-num">${m.title[currentLang]}</span>
          <span class="module-tab-sub">${m.subtitle[currentLang]}</span>
        </button>`).join('')}
    </div>`;

  // ── Left nav ─────────────────────────────────────────────────────────────
  const navHTML = activeModule.weeks.map((w, wi) => {
    const weekLabel = w.week === 0
      ? (currentLang === 'id' ? 'Minggu 0' : 'Week 0')
      : `${lang['materi.week']} ${w.week}`;
    const isActiveWeek = wi === state.weekIdx;
    return `
      <div class="materi-nav-group ${isActiveWeek ? 'open' : ''}" data-wi="${wi}">
        <button class="materi-nav-week-btn" onclick="toggleWeekNav(this)">
          <span class="materi-nav-week-info">
            <span class="materi-nav-week-tag">${weekLabel}</span>
            <span class="materi-nav-course">${w.course[currentLang]}</span>
          </span>
          <svg class="materi-week-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round" width="13" height="13">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div class="materi-nav-sessions">
          ${w.sessions.map((s, si) => `
            <button class="materi-nav-item ${wi === state.weekIdx && si === state.sessionIdx ? 'active' : ''}"
              data-week="${wi}" data-session="${si}"
              onclick="selectLecture(${wi}, ${si})">
              <span class="materi-nav-lec">Lecture ${s.num}</span>
              <span class="materi-nav-title">${s.title}</span>
            </button>`).join('')}
        </div>
      </div>`;
  }).join('');

  // ── Right content ─────────────────────────────────────────────────────────
  const w = activeModule.weeks[state.weekIdx] || activeModule.weeks[0];
  const s = w ? (w.sessions[state.sessionIdx] || w.sessions[0]) : null;

  const panelHTML = `
    <div class="materi-content" id="materiContent">
      <div class="materi-content-inner">
        <h2 class="materi-content-title">${s ? s.title : ''}</h2>
        <div class="materi-sections-wrap">${_buildContentHTML(s, lang)}</div>
      </div>
    </div>`;

  const isNavCollapsed = localStorage.getItem('materiNavCollapsed') === '1';

  container.innerHTML = tabsHTML + `
    <div class="materi-layout">
      <div class="materi-nav-wrap${isNavCollapsed ? ' collapsed' : ''}" id="materiNavWrap">
        <aside class="materi-nav">${navHTML}</aside>
        <button class="materi-nav-collapser" onclick="toggleMateriNav()" title="Toggle sidebar">
          <svg class="materi-nav-collapser-icon" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round" width="14" height="14">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
      </div>
      ${panelHTML}
    </div>`;

  // Initialise open accordion groups after paint so scrollHeight is available
  requestAnimationFrame(() => {
    container.querySelectorAll('.materi-nav-group.open').forEach(g => {
      const sessions = g.querySelector('.materi-nav-sessions');
      if (sessions) sessions.style.maxHeight = sessions.scrollHeight + 'px';
    });
  });
}

function selectModule(num) {
  window._activeModule  = num;
  window._activeLecture = { weekIdx: 0, sessionIdx: 0 };
  renderMateri();
}

// ─── LECTURE PANEL SWITCH ────────────────────────────────────────────────────
function selectLecture(weekIdx, sessionIdx) {
  window._activeLecture = { weekIdx, sessionIdx };

  // Sync nav active state
  document.querySelectorAll('.materi-nav-item').forEach(btn => {
    btn.classList.toggle('active',
      parseInt(btn.dataset.week)    === weekIdx &&
      parseInt(btn.dataset.session) === sessionIdx
    );
  });

  // Open the week group that contains the selected lecture
  document.querySelectorAll('.materi-nav-group').forEach(g => {
    if (parseInt(g.dataset.wi) === weekIdx) _openWeekGroup(g);
  });

  const panel = document.getElementById('materiContent');
  if (!panel) return;

  panel.classList.add('switching');
  setTimeout(() => {
    const lang         = i18n[currentLang];
    const moduleNum    = window._activeModule || modules[0].num;
    const activeModule = modules.find(m => m.num === moduleNum) || modules[0];
    const w  = activeModule.weeks[weekIdx]   || activeModule.weeks[0];
    const s  = w ? (w.sessions[sessionIdx]   || w.sessions[0]) : null;

    panel.querySelector('.materi-content-title').textContent   = s ? s.title : '';
    panel.querySelector('.materi-sections-wrap').innerHTML = _buildContentHTML(s, lang);

    panel.classList.remove('switching');
    panel.classList.add('entering');
    setTimeout(() => panel.classList.remove('entering'), 400);
  }, 200);
}

// ─── SIDEBAR COLLAPSE ──────────────────────────────────────────────────────
function toggleMateriNav() {
  const wrap = document.getElementById('materiNavWrap');
  if (!wrap) return;
  const collapsed = wrap.classList.toggle('collapsed');
  localStorage.setItem('materiNavCollapsed', collapsed ? '1' : '0');
}

// ─── WEEK NAV ACCORDION ────────────────────────────────────────────────────
function _openWeekGroup(group) {
  if (group.classList.contains('open')) return;
  const sessions = group.querySelector('.materi-nav-sessions');
  group.classList.add('open');
  sessions.style.maxHeight = sessions.scrollHeight + 'px';
  sessions.addEventListener('transitionend', () => {
    if (group.classList.contains('open')) sessions.style.maxHeight = 'none';
  }, { once: true });
}

function toggleWeekNav(btn) {
  const group    = btn.closest('.materi-nav-group');
  const sessions = group.querySelector('.materi-nav-sessions');
  const isOpen   = group.classList.contains('open');

  if (isOpen) {
    sessions.style.maxHeight = sessions.scrollHeight + 'px';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      sessions.style.maxHeight = '0';
    }));
    group.classList.remove('open');
  } else {
    _openWeekGroup(group);
  }
}
