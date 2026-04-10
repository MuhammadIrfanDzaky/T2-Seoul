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
                icon: '🌐',
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
                icon: '⚙️',
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
                icon: '💻',
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
                icon: '🗺️',
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
                icon: '🆚',
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
                icon: '🖥️',
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
                icon: '🛠️',
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
                icon: '📖',
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
                icon: '✍️',
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
                icon: '🖥️',
                title: { en: "Terminal, Shell & CLI", id: "Terminal, Shell & CLI" },
                items: {
                  en: [
                    "Terminal and CLI are used together for faster and more efficient computer navigation",
                    "The terminal is just the display (UI); the actual command processing is handled by the Shell",
                    "Shell is the communication bridge between the terminal and the OS",
                    "Prompt symbols: `$` or `%` = regular user | `#` = superuser/root ⚠️ | `~` = home folder",
                    "Popular shells: `sh` (most basic), `bash` (default Mac/Linux), `zsh` (more modern), `fish` (user-friendly)",
                  ],
                  id: [
                    "Terminal dan CLI digunakan bersama untuk navigasi komputer yang lebih cepat dan efisien",
                    "Terminal hanyalah tampilan (UI), yang benar-benar memproses perintah adalah Shell",
                    "Shell adalah jembatan komunikasi antara terminal dan Operating System",
                    "Simbol prompt: `$` atau `%` = regular user | `#` = superuser/root ⚠️ | `~` = home folder",
                    "Shell populer: `sh` (paling dasar), `bash` (default Mac/Linux), `zsh` (lebih modern), `fish` (user-friendly)",
                  ]
                }
              },
              {
                icon: '📋',
                title: { en: "Core Terminal Commands", id: "Perintah Terminal Inti" },
                items: {
                  en: [
                    "`cd` — change directory | `ls` / `dir` — list contents | `pwd` — print working directory",
                    "`mkdir` — create directory | `rm` / `del` — delete file | `rm -r` / `rd /s` — delete directory",
                    "`cp` / `copy` — copy file | `mv` / `move` — move or rename | `cat` / `type` — view file contents",
                    "`clear` / `cls` — clear screen | `grep` / `find` — search string in file | `man` / `/?` — show help",
                    "Naming is case sensitive — `File`, `file`, and `FILE` are three different things",
                  ],
                  id: [
                    "`cd` — pindah folder | `ls` / `dir` — lihat isi folder | `pwd` — cek lokasi saat ini",
                    "`mkdir` — buat folder | `rm` / `del` — hapus file | `rm -r` / `rd /s` — hapus folder",
                    "`cp` / `copy` — salin file | `mv` / `move` — pindah atau rename | `cat` / `type` — lihat isi file",
                    "`clear` / `cls` — bersihkan layar | `grep` / `find` — cari string dalam file | `man` / `/?` — tampilkan bantuan",
                    "Penamaan di terminal bersifat case sensitive — `File`, `file`, dan `FILE` adalah tiga hal yang berbeda",
                  ]
                }
              },
              {
                icon: '📦',
                title: { en: "Terminal Package Managers", id: "Package Manager Terminal" },
                items: {
                  en: [
                    "macOS: Homebrew (`brew`) — `brew install git` | `brew install --cask google-chrome`",
                    "Linux Ubuntu: `APT` — `sudo apt update && sudo apt install git`",
                    "Windows: `winget` (built-in Win 10+) — `winget search git` | `winget install git`",
                  ],
                  id: [
                    "macOS: Homebrew (`brew`) — `brew install git` | `brew install --cask google-chrome`",
                    "Linux Ubuntu: `APT` — `sudo apt update && sudo apt install git`",
                    "Windows: `winget` (bawaan Win 10+) — `winget search git` | `winget install git`",
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
                icon: '🔧',
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
                icon: '🔄',
                title: { en: "Git Workflow & File States", id: "Git Workflow & Status File" },
                items: {
                  en: [
                    "[[Working Directory]] → `git add` → [[Staging Area]] → `git commit` → [[Local Repo]] → `git push` → [[Remote Repo]]",
                    "[[Untracked]]: Git doesn't know this file exists yet",
                    "[[Modified]]: changes exist but not yet staged | [[Staged]]: `git add`-ed, ready to commit",
                    "[[Committed]]: changes permanently saved in Git history",
                  ],
                  id: [
                    "[[Working Directory]] → `git add` → [[Staging Area]] → `git commit` → [[Local Repo]] → `git push` → [[Remote Repo]]",
                    "[[Untracked]]: Git belum mengenali file ini",
                    "[[Modified]]: ada perubahan tapi belum di-stage | [[Staged]]: sudah di-`add`, siap commit",
                    "[[Committed]]: perubahan sudah tersimpan permanen di riwayat Git",
                  ]
                }
              },
              {
                icon: '📟',
                title: { en: "Basic Git Commands", id: "Perintah Dasar Git" },
                items: {
                  en: [
                    "`git config` — set username and email | `git init` — initialize a new repository",
                    "`git clone` — copy an existing repository | `git status` — check current repo status",
                    "`git add` — move changes to [[Staging Area]] | `git commit -m 'message'` — save to history",
                    "`git log` — view commit history | `git push` — upload to remote | `git pull` — download & merge",
                    "Always prefix with `git`. It's `git status`, not just `status`.",
                  ],
                  id: [
                    "`git config` — set nama dan email | `git init` — inisialisasi repo baru",
                    "`git clone` — salin repo yang sudah ada | `git status` — cek status repo saat ini",
                    "`git add` — pindahkan ke [[Staging Area]] | `git commit -m 'pesan'` — simpan ke riwayat",
                    "`git log` — lihat histori commit | `git push` — upload ke remote | `git pull` — download & merge",
                    "Selalu tambahkan `git` sebelum nama command. Bukan `status`, tapi `git status`.",
                  ]
                }
              },
              {
                icon: '✅',
                title: { en: "Commit Best Practices", id: "Best Practice Commit" },
                items: {
                  en: [
                    "Conventional Commits format: `<type>[optional scope]: <description>`",
                    "Types: `feat` (new feature), `fix` (bug), `docs`, `style`, `refactor`, `test`, `chore`",
                    "Atomic Commits ⭐ — one commit = one logical change (most recommended)",
                    "❌ Avoid: vague messages (`'fix stuff'`), committing `node_modules`/`.env`, not running `git pull` before push",
                  ],
                  id: [
                    "Format Conventional Commits: `<type>[optional scope]: <description>`",
                    "Types: `feat` (fitur baru), `fix` (bug), `docs`, `style`, `refactor`, `test`, `chore`",
                    "Atomic Commits ⭐ — satu commit = satu perubahan logis (paling direkomendasikan)",
                    "❌ Hindari: pesan tidak jelas (`'fix stuff'`), commit `node_modules`/`.env`, tidak `git pull` sebelum push",
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
                icon: '🌿',
                title: { en: "Branches", id: "Branch" },
                items: {
                  en: [
                    "A branch is a separate line of development — changes do not affect other branches until you merge",
                    "Enables multiple people to work on different features simultaneously",
                    "`git checkout -b <branch-name>` — create a new branch | `git checkout <branch-name>` — switch branch",
                    "`git merge <source-branch>` — merge a branch into the current branch",
                  ],
                  id: [
                    "Branch adalah jalur pengembangan terpisah — perubahan tidak mempengaruhi branch lain sampai di-merge",
                    "Memungkinkan beberapa orang mengerjakan fitur berbeda secara bersamaan",
                    "`git checkout -b <nama>` — buat branch baru | `git checkout <nama>` — pindah branch",
                    "`git merge <branch-acuan>` — gabungkan branch ke branch aktif",
                  ]
                }
              },
              {
                icon: '⚡',
                title: { en: "Merge Conflicts", id: "Merge Conflict" },
                items: {
                  en: [
                    "A conflict occurs when two people edit the same part of the same file, and Git doesn't know which is correct",
                    "Commonly happens during: `git merge`, `git pull`, or opening a Pull Request",
                    "How to resolve: `git pull` → `git checkout your-branch` → `git merge source-branch`",
                    "Manually remove conflict markers (`<<<`, `===`, `>>>`) → `git add` → `git commit -m 'resolve conflict'` → `git push`",
                  ],
                  id: [
                    "Conflict terjadi ketika dua orang mengubah bagian yang sama pada file yang sama, dan Git tidak tahu mana yang benar",
                    "Biasanya muncul saat: `git merge`, `git pull`, atau membuka Pull Request",
                    "Cara resolve: `git pull` → `git checkout branch-kamu` → `git merge branch-acuan`",
                    "Hapus conflict markers (`<<<`, `===`, `>>>`) secara manual → `git add` → `git commit -m 'resolve conflict'` → `git push`",
                  ]
                }
              },
              {
                icon: '🐙',
                title: { en: "GitHub", id: "GitHub" },
                items: {
                  en: [
                    "The most popular platform for publishing and collaborating on Git repositories",
                    "Owned by Microsoft since 2018 (acquired for US$7.5 billion)",
                    "⚠️ GitHub ≠ Git — Git is the tool, GitHub is the hosting platform",
                    "First-time push: `git remote add origin <url>` → `git branch -M main` → `git push -u origin main`",
                    "Clone a repo: `git clone <url>` — no need to run `git init` again",
                  ],
                  id: [
                    "Platform paling populer untuk publish dan berkolaborasi di Git repository",
                    "Dimiliki oleh Microsoft sejak 2018 (diakuisisi senilai US$7.5 miliar)",
                    "⚠️ GitHub ≠ Git — Git adalah tool-nya, GitHub adalah platform hosting-nya",
                    "Push pertama kali: `git remote add origin <url>` → `git branch -M main` → `git push -u origin main`",
                    "Clone repo: `git clone <url>` — tidak perlu `git init` lagi",
                  ]
                }
              },
              {
                icon: '🤝',
                type: 'steps',
                title: { en: "Collaboration Simulation (7 Steps)", id: "Simulasi Kolaborasi (7 Langkah)" },
                items: {
                  en: [
                    "1. Create a new GitHub repo, invite collaborators",
                    "2. Everyone `git clone` the repository",
                    "3. Each person creates their own branch: `git checkout -b <branch-name>`",
                    "4. Make changes, then `git add .` → `git commit -m 'message'`",
                    "5. Push branch to remote: `git push origin <branch-name>`",
                    "6. Create a Pull Request on GitHub, request a review, then merge",
                    "7. Simulation complete — all changes successfully merged into `main` ✓",
                  ],
                  id: [
                    "1. Buat repo GitHub baru, undang kolaborator",
                    "2. Setiap orang `git clone` repository tersebut",
                    "3. Buat branch masing-masing: `git checkout -b <nama-branch>`",
                    "4. Kerjakan perubahan, lalu `git add .` → `git commit -m 'pesan'`",
                    "5. Push branch ke remote: `git push origin <nama-branch>`",
                    "6. Buat Pull Request di GitHub, minta review, lalu merge",
                    "7. Simulasi selesai — semua perubahan berhasil digabungkan ke `main` ✓",
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
          // ── Lecture 1 ───────────────────────────────────────────
          {
            num: 1, date: null,
            title: "HTML for Web Structure",
            recordingId: null,
            sections: [
              {
                icon: '🧱',
                title: { en: "Why HTML? The 3 Building Blocks", id: "Mengapa HTML? 3 Blok Pembangun Web" },
                items: {
                  en: [
                    "[[HTML]] (HyperText Markup Language) → handles the structure and content",
                    "[[CSS]] (Cascading Style Sheets) → handles the styling, view, and presentation",
                    "[[JavaScript]] → handles the logic, action, and functionality",
                    "Body analogy: HTML = Skeleton | CSS = Skin & muscles | JavaScript = Nervous system",
                  ],
                  id: [
                    "[[HTML]] (HyperText Markup Language) → menangani struktur dan konten",
                    "[[CSS]] (Cascading Style Sheets) → menangani tampilan, gaya, dan presentasi",
                    "[[JavaScript]] → menangani logika, aksi, dan fungsionalitas",
                    "Analogi tubuh: HTML = Kerangka | CSS = Kulit & otot | JavaScript = Sistem saraf",
                  ]
                }
              },
              {
                icon: '📜',
                title: { en: "HTML History", id: "Sejarah HTML" },
                items: {
                  en: [
                    "First written by [[Tim Berners-Lee]], invented in 1991 and released in 1993",
                    "He also invented the [[World Wide Web]] in 1989",
                    "The specification is maintained by [[W3C]] (World Wide Web Consortium)",
                    "Current version: [[HTML5]] — we don't use HTML4 or prior anymore",
                    "⚠️ HTML is NOT a programming language — it is a markup language (similar to Markdown)",
                    "HTML is a sublanguage of XML (Extensible Markup Language)",
                  ],
                  id: [
                    "Pertama ditulis oleh [[Tim Berners-Lee]], ditemukan tahun 1991 dan dirilis tahun 1993",
                    "Beliau juga menemukan [[World Wide Web]] pada tahun 1989",
                    "Spesifikasinya dikelola oleh [[W3C]] (World Wide Web Consortium)",
                    "Versi terkini: [[HTML5]] — kita tidak menggunakan HTML4 atau versi sebelumnya lagi",
                    "⚠️ HTML BUKAN bahasa pemrograman — ini adalah markup language (mirip Markdown)",
                    "HTML adalah sublanguage dari XML (Extensible Markup Language)",
                  ]
                }
              },
              {
                icon: '🔖',
                title: { en: "HTML Syntax: Tags & Elements", id: "Sintaks HTML: Tag & Elemen" },
                items: {
                  en: [
                    "Anatomy: `<h1 class=\"primary\">Example Heading</h1>` → Opening tag + Attribute + Content + Closing tag = [[Element]]",
                    "Regular element: `<h1>Hello World</h1>` or `<p>Hello I am a human living on Earth.</p>`",
                    "Self-closed element (no content): `<img src=\"images/avatar.jpg\" alt=\"My avatar\" />`",
                    "`<br />`, `<hr />`, `<input />`, `<meta />` are all self-closing",
                  ],
                  id: [
                    "Anatomi: `<h1 class=\"primary\">Contoh Heading</h1>` → Opening tag + Atribut + Konten + Closing tag = [[Element]]",
                    "Elemen reguler: `<h1>Hello World</h1>` atau `<p>Halo saya manusia yang tinggal di Bumi.</p>`",
                    "Elemen self-closed (tanpa konten): `<img src=\"images/avatar.jpg\" alt=\"Avatar saya\" />`",
                    "`<br />`, `<hr />`, `<input />`, `<meta />` semuanya self-closing",
                  ]
                }
              },
              {
                icon: '📋',
                title: { en: "Commonly Used HTML Elements", id: "Elemen HTML yang Sering Digunakan" },
                items: {
                  en: [
                    "Headings: `<h1>` through `<h6>`",
                    "Text & inline: `<p>`, `<a>`, `<span>`, `<strong>`, `<em>`",
                    "Media: `<img>`, `<audio>`, `<video>`, `<iframe>`",
                    "Lists: `<ul>`, `<ol>`, `<li>` — lists can be nested inside other `<li>` elements",
                    "Layout/sectioning: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<aside>`, `<div>`",
                    "Forms: `<form>`, `<label>`, `<input>`, `<button>`, `<table>`",
                  ],
                  id: [
                    "Heading: `<h1>` sampai `<h6>`",
                    "Teks & inline: `<p>`, `<a>`, `<span>`, `<strong>`, `<em>`",
                    "Media: `<img>`, `<audio>`, `<video>`, `<iframe>`",
                    "List: `<ul>`, `<ol>`, `<li>` — list bisa di-nest di dalam elemen `<li>` lain",
                    "Layout/sectioning: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<aside>`, `<div>`",
                    "Form: `<form>`, `<label>`, `<input>`, `<button>`, `<table>`",
                  ]
                }
              },
              {
                icon: '🖥️',
                title: { en: "Viewing HTML in the Browser", id: "Melihat HTML di Browser" },
                items: {
                  en: [
                    "⭐ Live Server (recommended): Install the VS Code extension, then open Command Palette (`Ctrl/Cmd + Shift + P`) → type `live server` → choose \"Open with Live Server\"",
                    "Browser opens at `http://127.0.0.1:5500/index.html` with auto-refresh on every file save",
                    "View Page Source: right-click any webpage in the browser → \"View Page Source\" to see the raw HTML",
                  ],
                  id: [
                    "⭐ Live Server (direkomendasikan): Install extension VS Code, lalu buka Command Palette (`Ctrl/Cmd + Shift + P`) → ketik `live server` → pilih \"Open with Live Server\"",
                    "Browser terbuka di `http://127.0.0.1:5500/index.html` dengan auto-refresh setiap file disimpan",
                    "View Page Source: klik kanan halaman manapun di browser → \"View Page Source\" untuk melihat HTML mentah",
                  ]
                }
              },
              {
                icon: '🚀',
                title: { en: "Hosting & Deployment", id: "Hosting & Deployment" },
                items: {
                  en: [
                    "Deployment = making your project live so everyone on the internet can access it",
                    "Files (HTML, CSS, JS, images) are uploaded to a hosting server which serves them over the internet",
                    "⚠️ Hosting ≠ buying a domain — a domain (e.g. `example.com`) can be connected to your hosting separately",
                    "⭐ For beginners with simple HTML: use [[Static file hosting]] — easiest and free",
                    "Best providers: [[GitHub Pages]], [[Netlify]], [[Vercel]], Firebase Hosting, Render, Railway.app",
                    "Other types (for later): Shared Hosting, VPS, Dedicated Server, PaaS, Serverless, IaaS",
                  ],
                  id: [
                    "Deployment = membuat proyek live agar semua orang di internet bisa mengaksesnya",
                    "File (HTML, CSS, JS, gambar) diunggah ke hosting server yang melayaninya melalui internet",
                    "⚠️ Hosting ≠ beli domain — domain (mis. `example.com`) bisa dihubungkan ke hosting secara terpisah",
                    "⭐ Untuk pemula dengan HTML sederhana: gunakan [[Static file hosting]] — paling mudah dan gratis",
                    "Provider terbaik: [[GitHub Pages]], [[Netlify]], [[Vercel]], Firebase Hosting, Render, Railway.app",
                    "Jenis lain (untuk nanti): Shared Hosting, VPS, Dedicated Server, PaaS, Serverless, IaaS",
                  ]
                }
              },
            ]
          },
          // ── Lecture 2 ───────────────────────────────────────────
          {
            num: 2, date: null,
            title: "HTML Semantics",
            recordingId: null,
            sections: [
              {
                icon: '🏷️',
                title: { en: "What is Semantics?", id: "Apa itu Semantics?" },
                items: {
                  en: [
                    "In programming: the *meaning* of a piece of code — \"what effect does running this code have?\"",
                    "In HTML: the *purpose or role* of an element, not how it looks",
                    "Example: `<h1>` means \"top-level heading\", not just \"make text big\"",
                    "Semantic HTML prioritizes meaning over appearance",
                  ],
                  id: [
                    "Dalam pemrograman: *makna* dari sebuah kode — \"apa efek dari menjalankan kode ini?\"",
                    "Dalam HTML: *tujuan atau peran* dari sebuah elemen, bukan bagaimana tampilannya",
                    "Contoh: `<h1>` berarti \"heading tingkat teratas\", bukan sekadar \"buat teks besar\"",
                    "HTML semantik mengutamakan makna daripada tampilan",
                  ]
                }
              },
              {
                icon: '✅',
                title: { en: "Benefits of Semantic HTML", id: "Manfaat HTML Semantik" },
                items: {
                  en: [
                    "⭐ SEO: Search engines treat semantic content as important keywords, boosting search rankings",
                    "Accessibility: Screen readers use semantic landmarks to help visually impaired users navigate",
                    "Developer clarity: Suggests what type of data will be populated, making code easier to read and maintain",
                  ],
                  id: [
                    "⭐ SEO: Search engine memperlakukan konten semantik sebagai kata kunci penting, meningkatkan peringkat pencarian",
                    "Aksesibilitas: Screen reader menggunakan landmark semantik untuk membantu pengguna tunanetra bernavigasi",
                    "Kejelasan developer: Menunjukkan jenis data yang akan diisi, membuat kode lebih mudah dibaca dan dirawat",
                  ]
                }
              },
              {
                icon: '🔎',
                title: { en: "How to Choose the Right Markup", id: "Cara Memilih Markup yang Tepat" },
                items: {
                  en: [
                    "Ask: \"What element(s) best describe / represent the data I'm going to populate?\"",
                    "Is it a list? → ordered `<ol>` or unordered `<ul>`?",
                    "Is it an article with sections and a related aside?",
                    "Is it a figure or image that needs a caption?",
                    "Should it have a header or a footer?",
                  ],
                  id: [
                    "Tanyakan: \"Elemen apa yang paling baik menggambarkan / mewakili data yang akan saya isi?\"",
                    "Apakah ini sebuah list? → terurut `<ol>` atau tidak terurut `<ul>`?",
                    "Apakah ini artikel dengan section dan aside yang berkaitan?",
                    "Apakah ini gambar/figure yang membutuhkan caption?",
                    "Apakah ini memiliki header atau footer?",
                  ]
                }
              },
              {
                icon: '📋',
                title: { en: "Common Semantic Elements", id: "Elemen Semantik Umum" },
                items: {
                  en: [
                    "`<article>` — self-contained, independently distributable content",
                    "`<aside>` — content indirectly related to the main content (sidebar)",
                    "`<footer>` — footer of a section or page",
                    "`<header>` — introductory or navigational content",
                    "`<main>` — central topic / main content of the document",
                    "`<nav>` — section containing navigation links",
                    "`<section>` — generic standalone section of a document",
                    "`<figure>` + `<figcaption>` — media with an associated caption",
                    "`<mark>`, `<time>`, `<details>`, `<summary>` — other useful semantic elements",
                  ],
                  id: [
                    "`<article>` — konten mandiri yang dapat didistribusikan secara independen",
                    "`<aside>` — konten yang tidak langsung berkaitan dengan konten utama (sidebar)",
                    "`<footer>` — footer dari section atau halaman",
                    "`<header>` — konten pengantar atau navigasi",
                    "`<main>` — topik utama / konten utama dokumen",
                    "`<nav>` — section berisi tautan navigasi",
                    "`<section>` — bagian mandiri umum dari sebuah dokumen",
                    "`<figure>` + `<figcaption>` — media beserta caption terkait",
                    "`<mark>`, `<time>`, `<details>`, `<summary>` — elemen semantik berguna lainnya",
                  ]
                }
              },
              {
                icon: '📚',
                title: { en: "HTML Element Categories", id: "Kategori Elemen HTML" },
                items: {
                  en: [
                    "Main Root: `<html>` — top-level element of every HTML document",
                    "Document Metadata (`<head>`): `<base>`, `<link>`, `<meta>`, `<style>`, `<title>`",
                    "Sectioning Root: `<body>` — main content container, only one per document",
                    "Content Sectioning: `<address>`, `<article>`, `<aside>`, `<footer>`, `<header>`, `<h1>`–`<h6>`, `<main>`, `<nav>`, `<section>`",
                    "Text Content: `<div>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`, `<figure>`, `<figcaption>`, `<hr>`, `<pre>`",
                    "Inline Text: `<a>`, `<b>`, `<strong>`, `<em>`, `<i>`, `<mark>`, `<span>`, `<br>`, `<s>`, `<time>`",
                    "Media & Embedded: `<audio>`, `<video>`, `<img>`, `<iframe>`, `<embed>`, `<source>`",
                  ],
                  id: [
                    "Main Root: `<html>` — elemen tingkat teratas dari setiap dokumen HTML",
                    "Document Metadata (`<head>`): `<base>`, `<link>`, `<meta>`, `<style>`, `<title>`",
                    "Sectioning Root: `<body>` — container konten utama, hanya satu per dokumen",
                    "Content Sectioning: `<address>`, `<article>`, `<aside>`, `<footer>`, `<header>`, `<h1>`–`<h6>`, `<main>`, `<nav>`, `<section>`",
                    "Text Content: `<div>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`, `<figure>`, `<figcaption>`, `<hr>`, `<pre>`",
                    "Inline Text: `<a>`, `<b>`, `<strong>`, `<em>`, `<i>`, `<mark>`, `<span>`, `<br>`, `<s>`, `<time>`",
                    "Media & Embedded: `<audio>`, `<video>`, `<img>`, `<iframe>`, `<embed>`, `<source>`",
                  ]
                }
              },
            ]
          },
          // ── Lecture 3 ───────────────────────────────────────────
          {
            num: 3, date: null,
            title: "HTML Forms & Tables",
            recordingId: null,
            sections: [
              {
                icon: '📝',
                title: { en: "HTML Forms", id: "HTML Forms" },
                items: {
                  en: [
                    "Forms collect data from website visitors — e.g. login, registration, contact forms",
                    "`<form action=\"/url\" method=\"POST|GET\">` — wraps all form elements",
                    "`action` — the URL where form data is sent for processing",
                    "`POST` — data sent in the request body (hidden from URL) | `GET` — data appended to URL as query params",
                    "⚠️ Without a server-side language (Node, Python, PHP), forms cannot process data",
                  ],
                  id: [
                    "Form mengumpulkan data dari pengunjung website — mis. login, registrasi, form kontak",
                    "`<form action=\"/url\" method=\"POST|GET\">` — membungkus semua elemen form",
                    "`action` — URL tujuan pengiriman data form untuk diproses",
                    "`POST` — data dikirim dalam request body (tersembunyi dari URL) | `GET` — data ditambahkan ke URL sebagai query params",
                    "⚠️ Tanpa bahasa sisi-server (Node, Python, PHP), form tidak dapat memproses data",
                  ]
                }
              },
              {
                icon: '🔧',
                title: { en: "Form Input Elements", id: "Elemen Input Form" },
                items: {
                  en: [
                    "`<input type=\"text|email|password|tel\">` — single-line text entry; use `name` for server processing, `placeholder` for hint text",
                    "`<label for=\"id\">` — associates label with input by matching `id`; clicking the label automatically focuses the input",
                    "`<textarea rows cols>` — multi-line text for longer responses like messages or queries",
                    "`<select>` + `<option value>` — dropdown menu; use `<optgroup>` to group related options",
                    "`<input type=\"radio\">` — choose one option from ≤5 choices; all options share the same `name`",
                    "`<input type=\"checkbox\">` — select multiple options; use `checked` attribute to set a default",
                    "`<button type=\"submit|reset|button\">` — submit sends form, reset clears all fields, button runs custom JS",
                    "`<fieldset>` + `<legend>` — groups related fields with a visible title label",
                  ],
                  id: [
                    "`<input type=\"text|email|password|tel\">` — input teks satu baris; gunakan `name` untuk pemrosesan server, `placeholder` untuk teks petunjuk",
                    "`<label for=\"id\">` — mengaitkan label dengan input melalui kecocokan `id`; mengklik label langsung memfokuskan input",
                    "`<textarea rows cols>` — teks multi-baris untuk respons panjang seperti pesan atau pertanyaan",
                    "`<select>` + `<option value>` — menu dropdown; gunakan `<optgroup>` untuk mengelompokkan opsi terkait",
                    "`<input type=\"radio\">` — pilih satu dari ≤5 pilihan; semua opsi berbagi `name` yang sama",
                    "`<input type=\"checkbox\">` — pilih beberapa opsi; gunakan atribut `checked` untuk default",
                    "`<button type=\"submit|reset|button\">` — submit mengirim form, reset menghapus semua isian, button untuk kode JS kustom",
                    "`<fieldset>` + `<legend>` — mengelompokkan field yang berkaitan dengan label judul yang terlihat",
                  ]
                }
              },
              {
                icon: '🎛️',
                title: { en: "Input Types & Validation Attributes", id: "Tipe Input & Atribut Validasi" },
                items: {
                  en: [
                    "Common input types: `text`, `email`, `tel`, `password`, `number`, `date`, `file`, `checkbox`, `radio`",
                    "`required` — boolean attribute; prevents form submission if the field is empty",
                    "`min` / `max` — restrict value range for number and date inputs",
                    "`accept=\"image/png, image/jpeg\"` — restrict file types for `<input type=\"file\">`",
                    "`id` — for CSS/JS targeting | `name` — used when submitting data to the server",
                  ],
                  id: [
                    "Tipe input umum: `text`, `email`, `tel`, `password`, `number`, `date`, `file`, `checkbox`, `radio`",
                    "`required` — atribut boolean; mencegah pengiriman form jika field kosong",
                    "`min` / `max` — membatasi rentang nilai untuk input angka dan tanggal",
                    "`accept=\"image/png, image/jpeg\"` — membatasi jenis file untuk `<input type=\"file\">`",
                    "`id` — untuk targeting CSS/JS | `name` — digunakan saat data dikirim ke server",
                  ]
                }
              },
              {
                icon: '📊',
                title: { en: "HTML Table Elements", id: "Elemen Tabel HTML" },
                items: {
                  en: [
                    "Basic: `<table>` (parent), `<tr>` (row), `<td>` (data cell), `<th>` (header cell)",
                    "Semantic grouping: `<thead>` (header rows), `<tbody>` (body rows), `<tfoot>` (footer rows)",
                    "`colspan` — merge cells horizontally across columns",
                    "`rowspan` — merge cells vertically across rows",
                  ],
                  id: [
                    "Dasar: `<table>` (induk), `<tr>` (baris), `<td>` (sel data), `<th>` (sel header)",
                    "Pengelompokan semantik: `<thead>` (baris header), `<tbody>` (baris isi), `<tfoot>` (baris footer)",
                    "`colspan` — menggabungkan sel secara horizontal antar kolom",
                    "`rowspan` — menggabungkan sel secara vertikal antar baris",
                  ]
                }
              },
            ]
          },
          // ── Lecture 4 ───────────────────────────────────────────
          {
            num: 4, date: null,
            title: "HTML Advanced Concepts",
            recordingId: null,
            sections: [
              {
                icon: '📁',
                title: { en: "Folder Structuring", id: "Struktur Folder" },
                items: {
                  en: [
                    "Proper folder structure improves maintainability, scalability, team collaboration, and performance",
                    "Typical structure: `index.html` at root + `css/`, `js/`, `images/`, `pages/`, `assets/` folders",
                    "⭐ Use descriptive names: `images/` not `img/` or `stuff/`",
                    "⭐ Group related files: CSS in `css/`, scripts in `js/`, pages in `pages/`",
                    "⭐ Consistent naming convention: `about.html`, `contact.html` — not `aboutUs.html` or `contact_page.html`",
                  ],
                  id: [
                    "Struktur folder yang tepat meningkatkan maintainability, skalabilitas, kolaborasi tim, dan performa",
                    "Struktur umum: `index.html` di root + folder `css/`, `js/`, `images/`, `pages/`, `assets/`",
                    "⭐ Gunakan nama deskriptif: `images/` bukan `img/` atau `stuff/`",
                    "⭐ Kelompokkan file terkait: CSS di `css/`, script di `js/`, halaman di `pages/`",
                    "⭐ Konvensi penamaan konsisten: `about.html`, `contact.html` — bukan `aboutUs.html` atau `contact_page.html`",
                  ]
                }
              },
              {
                icon: '🔗',
                title: { en: "Link Types", id: "Tipe Tautan" },
                items: {
                  en: [
                    "Absolute links — point to external websites: `<a href=\"https://google.com\">Visit Google</a>`",
                    "Relative links — within your own site: `<a href=\"about.html\">` or `<a href=\"../index.html\">`",
                    "Internal/anchor links — jump to a section on the same page: `<a href=\"#section1\">Go to Section 1</a>`",
                    "For external links, always add `target=\"_blank\" rel=\"noopener\"` for security",
                    "❌ Bad link text: `Click here` | ✅ Good: `Learn more about our services`",
                  ],
                  id: [
                    "Tautan absolut — menuju website eksternal: `<a href=\"https://google.com\">Visit Google</a>`",
                    "Tautan relatif — dalam situs sendiri: `<a href=\"about.html\">` atau `<a href=\"../index.html\">`",
                    "Tautan internal/anchor — loncat ke bagian di halaman yang sama: `<a href=\"#section1\">Go to Section 1</a>`",
                    "Untuk tautan eksternal, selalu tambahkan `target=\"_blank\" rel=\"noopener\"` untuk keamanan",
                    "❌ Teks tautan buruk: `Klik di sini` | ✅ Bagus: `Pelajari lebih lanjut tentang layanan kami`",
                  ]
                }
              },
              {
                icon: '🧭',
                title: { en: "Navigation Patterns", id: "Pola Navigasi" },
                items: {
                  en: [
                    "Basic nav bar: `<nav><ul><li><a href=\"...\">Home</a></li></ul></nav>`",
                    "Nested/dropdown nav: add a nested `<ul>` inside a `<li>` for sub-menu items",
                    "Breadcrumb nav: `<nav aria-label=\"Breadcrumb\"><ol><li><a>` — shows current location hierarchy",
                    "Mark the current page: add `class=\"current\" aria-current=\"page\"` to the active link",
                  ],
                  id: [
                    "Nav bar dasar: `<nav><ul><li><a href=\"...\">Home</a></li></ul></nav>`",
                    "Nav nested/dropdown: tambahkan `<ul>` bersarang di dalam `<li>` untuk item sub-menu",
                    "Nav breadcrumb: `<nav aria-label=\"Breadcrumb\"><ol><li><a>` — menampilkan hierarki lokasi saat ini",
                    "Tandai halaman aktif: tambahkan `class=\"current\" aria-current=\"page\"` pada tautan yang aktif",
                  ]
                }
              },
              {
                icon: '🔍',
                title: { en: "Meta Tags & SEO Essentials", id: "Meta Tags & Dasar SEO" },
                items: {
                  en: [
                    "Always include: `<meta charset=\"UTF-8\">` and `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`",
                    "`<title>` — appears in browser tab and search engine results",
                    "`<meta name=\"description\" content=\"...\">` — shown in search results; keep under 160 characters",
                    "`<meta name=\"keywords\">` and `<meta name=\"author\">` — additional metadata for search engines",
                    "Use semantic HTML structure and proper heading hierarchy: `<h1>` → `<h2>` → `<h3>` (never skip levels)",
                  ],
                  id: [
                    "Selalu sertakan: `<meta charset=\"UTF-8\">` dan `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`",
                    "`<title>` — muncul di tab browser dan hasil pencarian",
                    "`<meta name=\"description\" content=\"...\">` — ditampilkan di hasil pencarian; tetap di bawah 160 karakter",
                    "`<meta name=\"keywords\">` dan `<meta name=\"author\">` — metadata tambahan untuk mesin pencari",
                    "Gunakan struktur HTML semantik dan hierarki heading yang tepat: `<h1>` → `<h2>` → `<h3>` (jangan lewat level)",
                  ]
                }
              },
              {
                icon: '✅',
                title: { en: "SEO Checklist", id: "Checklist SEO" },
                items: {
                  en: [
                    "⭐ Include descriptive, unique `<title>` for each page",
                    "⭐ Write compelling meta description under 160 characters",
                    "Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`",
                    "Proper heading hierarchy: `<h1>` → `<h2>` → `<h3>` — never skip levels",
                    "Add `alt` attribute to all `<img>` elements",
                    "Use descriptive file names and URLs — `about-us.html` not `page2.html`",
                    "Add internal links between related pages",
                    "Ensure mobile-responsive design with the viewport meta tag",
                  ],
                  id: [
                    "⭐ Sertakan `<title>` yang deskriptif dan unik untuk setiap halaman",
                    "⭐ Tulis meta description yang menarik, di bawah 160 karakter",
                    "Gunakan HTML semantik: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`",
                    "Hierarki heading yang tepat: `<h1>` → `<h2>` → `<h3>` — jangan lewat level",
                    "Tambahkan atribut `alt` pada semua elemen `<img>`",
                    "Gunakan nama file dan URL deskriptif — `about-us.html` bukan `page2.html`",
                    "Tambahkan tautan internal antar halaman yang berkaitan",
                    "Pastikan desain responsif mobile dengan viewport meta tag",
                  ]
                }
              },
            ]
          },
        ]
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  //  MODULE 2 — CSS & Styling
  // ════════════════════════════════════════════════════════
  {
    num: 2,
    title: { en: "Module 2", id: "Modul 2" },
    subtitle: { en: "CSS & Styling", id: "CSS & Styling" },
    weeks: [
      {
        week: 2,
        course: { en: "CSS Fundamentals", id: "Dasar-dasar CSS" },
        sessions: [
          // ── Lecture 1 ───────────────────────────────────────────
          {
            num: 1, date: null,
            title: "CSS for Styling",
            recordingId: null,
            sections: [
              {
                icon: '🎨',
                title: { en: "Why CSS? The Role of CSS in Web Development", id: "Mengapa CSS? Peran CSS dalam Web Development" },
                items: {
                  en: [
                    "[[CSS]] (Cascading Style Sheets) is used to style markup languages like HTML",
                    "You still need HTML first before using CSS",
                    "CSS enhances HTML: colors, margins, positioning, animations, fonts, and much more",
                    "CSS = Presentation | HTML = Content — it is what makes web design possible",
                  ],
                  id: [
                    "[[CSS]] (Cascading Style Sheets) digunakan untuk men-style markup language seperti HTML",
                    "Kamu masih membutuhkan HTML terlebih dahulu sebelum menggunakan CSS",
                    "CSS memperkaya HTML: warna, margin, positioning, animasi, font, dan masih banyak lagi",
                    "CSS = Presentasi | HTML = Konten — inilah yang membuat web design bisa diimplementasikan",
                  ]
                }
              },
              {
                icon: '📜',
                title: { en: "CSS History & Key Facts", id: "Sejarah CSS & Fakta Penting" },
                items: {
                  en: [
                    "Built in 1996, led by [[Håkon Wium Lie]] and [[Bert Bos]], maintained by [[W3C]]",
                    "Current version is [[CSS3]] — we don't primarily use CSS2 or prior anymore",
                    "⚠️ CSS is NOT a programming language — it is a styling/stylesheet language",
                    "CSS is a standalone language — not derived from another language (unlike HTML which is a sublanguage of XML)",
                    "Official CSS specification: w3.org/Style/CSS/",
                  ],
                  id: [
                    "Dibangun tahun 1996, dipimpin oleh [[Håkon Wium Lie]] dan [[Bert Bos]], dikelola oleh [[W3C]]",
                    "Versi terkini adalah [[CSS3]] — kita tidak lagi menggunakan CSS2 atau sebelumnya",
                    "⚠️ CSS BUKAN bahasa pemrograman — ini adalah bahasa styling/stylesheet",
                    "CSS adalah bahasa mandiri — bukan turunan dari bahasa lain (berbeda dengan HTML yang merupakan sublanguage dari XML)",
                    "Spesifikasi resmi CSS: w3.org/Style/CSS/",
                  ]
                }
              },
              {
                icon: '📁',
                title: { en: "CSS File & Project Structure", id: "File CSS & Struktur Proyek" },
                items: {
                  en: [
                    "CSS files use the `.css` extension",
                    "⭐ Convention: default CSS file is named `index.css` (not `main.css` or `styles.css`)",
                    "Typical structure: `index.html` + `index.css` + `images/` at root",
                    "In the beginning, a single CSS file can style multiple HTML files across the whole project",
                  ],
                  id: [
                    "File CSS menggunakan ekstensi `.css`",
                    "⭐ Konvensi: file CSS default dinamai `index.css` (bukan `main.css` atau `styles.css`)",
                    "Struktur umum: `index.html` + `index.css` + `images/` di root",
                    "Pada awalnya, satu file CSS bisa men-style beberapa file HTML di seluruh proyek",
                  ]
                }
              },
              {
                icon: '🔗',
                title: { en: "Linking CSS to HTML", id: "Menghubungkan CSS ke HTML" },
                items: {
                  en: [
                    "⚠️ Method 1 — Inline style: `<h1 style=\"color: red;\">` — not recommended for long-term use",
                    "⚠️ Method 2 — Embedded `<style>` in `<head>` — not recommended for long-term use",
                    "⭐ Method 3 — Separate file (recommended): `<link rel=\"stylesheet\" href=\"index.css\" />` in `<head>`",
                    "Method 4 — `@import`: use `@import url('styles/fonts.css')` inside a CSS file to import another CSS file",
                  ],
                  id: [
                    "⚠️ Metode 1 — Inline style: `<h1 style=\"color: red;\">` — tidak direkomendasikan untuk penggunaan jangka panjang",
                    "⚠️ Metode 2 — `<style>` embed di `<head>` — tidak direkomendasikan untuk penggunaan jangka panjang",
                    "⭐ Metode 3 — File terpisah (direkomendasikan): `<link rel=\"stylesheet\" href=\"index.css\" />` di dalam `<head>`",
                    "Metode 4 — `@import`: gunakan `@import url('styles/fonts.css')` di dalam file CSS untuk mengimpor file CSS lain",
                  ]
                }
              },
              {
                icon: '🎯',
                title: { en: "CSS Selectors", id: "CSS Selector" },
                items: {
                  en: [
                    "Selector anatomy: `selector { property: value; }` — selector targets element(s), property sets what to change, value sets how",
                    "Class selector `.primary` — targets all elements with that class; multiple elements can share a class",
                    "ID selector `#article-title` — targets one unique element; only one element per ID per page",
                    "Attribute selector `input[type=\"text\"]` — targets elements with a specific attribute+value",
                    "Element selector `h1` — targets all elements of that HTML tag",
                  ],
                  id: [
                    "Anatomi selector: `selector { property: value; }` — selector menarget elemen, property menentukan apa yang diubah, value caranya",
                    "Class selector `.primary` — menarget semua elemen dengan class tersebut; beberapa elemen bisa berbagi satu class",
                    "ID selector `#article-title` — menarget satu elemen unik; hanya satu elemen per ID per halaman",
                    "Attribute selector `input[type=\"text\"]` — menarget elemen dengan atribut+nilai tertentu",
                    "Element selector `h1` — menarget semua elemen dengan tag HTML tersebut",
                  ]
                }
              },
              {
                icon: '🧰',
                title: { en: "CSS Properties Overview", id: "Ikhtisar CSS Properties" },
                items: {
                  en: [
                    "There are ~520 distinct CSS property names — you don't need to memorize them all",
                    "Main categories: Text & Fonts, Colors & Backgrounds, Box Model, Display & Positioning, Transitions, Transformations",
                    "Most used: `background`, `color`, `font-size`, `font-family`, `margin`, `padding`, `border`, `border-radius`, `display`, `width`, `height`, `position`, `opacity`, `text-decoration`",
                  ],
                  id: [
                    "Terdapat ~520 nama property CSS yang berbeda — kamu tidak perlu menghafalnya semua",
                    "Kategori utama: Text & Font, Warna & Background, Box Model, Display & Positioning, Transitions, Transformations",
                    "Yang paling sering digunakan: `background`, `color`, `font-size`, `font-family`, `margin`, `padding`, `border`, `border-radius`, `display`, `width`, `height`, `position`, `opacity`, `text-decoration`",
                  ]
                }
              },
            ]
          },
          // ── Lecture 2 ───────────────────────────────────────────
          {
            num: 2, date: null,
            title: "CSS Box Model",
            recordingId: null,
            sections: [
              {
                icon: '📦',
                title: { en: "What is the CSS Box Model?", id: "Apa itu CSS Box Model?" },
                items: {
                  en: [
                    "The CSS Box Model is the foundation of how elements are rendered and sized in the browser",
                    "Every HTML element is treated as a rectangular box with 4 layers from inside out:",
                    "[[Content]] — the actual content area (text, image, video, etc.)",
                    "[[Padding]] — space between content and border",
                    "[[Border]] — the border surrounding the padding",
                    "[[Margin]] — space outside the border, separates element from its neighbors",
                    "If `box-sizing` is `content-box` (default): `width`/`height` only sets the content area",
                  ],
                  id: [
                    "CSS Box Model adalah fondasi bagaimana elemen dirender dan diukur di browser",
                    "Setiap elemen HTML diperlakukan sebagai kotak persegi panjang dengan 4 lapisan dari dalam ke luar:",
                    "[[Content]] — area konten sebenarnya (teks, gambar, video, dll.)",
                    "[[Padding]] — ruang antara konten dan border",
                    "[[Border]] — garis tepi yang mengelilingi padding",
                    "[[Margin]] — ruang di luar border, memisahkan elemen dari tetangganya",
                    "Jika `box-sizing` adalah `content-box` (default): `width`/`height` hanya mengatur area konten",
                  ]
                }
              },
              {
                icon: '📐',
                title: { en: "Border", id: "Border" },
                items: {
                  en: [
                    "Extends the padding area to include the element's borders",
                    "Individual: `border-style: solid;` | `border-width: 1px;` | `border-color: green;`",
                    "Shorthand: `border: 2px dotted;` | `border: medium dashed green;` | `border: outset #f33;`",
                    "Border radius: `border-radius: 8px;` — rounds the corners of the border",
                  ],
                  id: [
                    "Memperluas area padding untuk menyertakan border elemen",
                    "Individual: `border-style: solid;` | `border-width: 1px;` | `border-color: green;`",
                    "Shorthand: `border: 2px dotted;` | `border: medium dashed green;` | `border: outset #f33;`",
                    "Border radius: `border-radius: 8px;` — membulatkan sudut border",
                  ]
                }
              },
              {
                icon: '🔵',
                title: { en: "Padding", id: "Padding" },
                items: {
                  en: [
                    "Space between content and the border — pushes the border outward",
                    "Individual sides: `padding-top` | `padding-right` | `padding-bottom` | `padding-left`",
                    "4-value shorthand: `padding: 25px 50px 75px 100px;` — order: top right bottom left",
                    "3-value shorthand: `padding: 25px 50px 75px;` — top | right & left | bottom",
                    "2-value shorthand: `padding: 25px 50px;` — top & bottom | right & left",
                  ],
                  id: [
                    "Ruang antara konten dan border — mendorong border ke luar",
                    "Sisi individual: `padding-top` | `padding-right` | `padding-bottom` | `padding-left`",
                    "Shorthand 4 nilai: `padding: 25px 50px 75px 100px;` — urutan: atas kanan bawah kiri",
                    "Shorthand 3 nilai: `padding: 25px 50px 75px;` — atas | kanan & kiri | bawah",
                    "Shorthand 2 nilai: `padding: 25px 50px;` — atas & bawah | kanan & kiri",
                  ]
                }
              },
              {
                icon: '🟡',
                title: { en: "Margin", id: "Margin" },
                items: {
                  en: [
                    "Space outside the border — separates the element from other elements on the page",
                    "Individual sides: `margin-top` | `margin-right` | `margin-bottom` | `margin-left`",
                    "Shorthand rules are identical to padding: 4-value / 3-value / 2-value / 1-value",
                    "⭐ Centering a block element: `margin: 0 auto;` — centers horizontally when width is set",
                  ],
                  id: [
                    "Ruang di luar border — memisahkan elemen dari elemen lain di halaman",
                    "Sisi individual: `margin-top` | `margin-right` | `margin-bottom` | `margin-left`",
                    "Aturan shorthand identik dengan padding: 4 nilai / 3 nilai / 2 nilai / 1 nilai",
                    "⭐ Memusatkan elemen block: `margin: 0 auto;` — menengahkan secara horizontal jika width sudah di-set",
                  ]
                }
              },
              {
                icon: '🛠️',
                title: { en: "Browser DevTools", id: "Browser DevTools" },
                items: {
                  en: [
                    "Integrated tools in web browsers to inspect, debug, and optimize websites",
                    "Available in all major browsers: Chrome, Firefox, Edge, Safari",
                    "How to open: Right-click on page → \"Inspect\" | Keyboard: `Ctrl/Cmd + Shift + I`",
                    "Elements Panel — inspect and edit HTML structure and CSS styles in real-time",
                    "Console Panel — run JS commands, view logs and errors interactively",
                    "Network Panel — monitor all requests (images, scripts, API calls), loading times",
                    "⭐ Device Mode: click the devices toggle icon to simulate a mobile viewport",
                  ],
                  id: [
                    "Tools yang terintegrasi di web browser untuk inspeksi, debugging, dan optimasi website",
                    "Tersedia di semua browser utama: Chrome, Firefox, Edge, Safari",
                    "Cara membuka: Klik kanan halaman → \"Inspect\" | Keyboard: `Ctrl/Cmd + Shift + I`",
                    "Elements Panel — inspeksi dan edit struktur HTML serta CSS style secara real-time",
                    "Console Panel — jalankan perintah JS, lihat log dan error secara interaktif",
                    "Network Panel — pantau semua request (gambar, script, API call), waktu loading",
                    "⭐ Device Mode: klik ikon toggle devices untuk simulasi viewport mobile",
                  ]
                }
              },
            ]
          },
        ]
      },
      {
        week: 3,
        course: { en: "CSS Layout & Responsive Design", id: "Layout CSS & Desain Responsif" },
        sessions: []
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  //  MODULE 3 — JavaScript Fundamentals
  // ════════════════════════════════════════════════════════
  {
    num: 3,
    title: { en: "Module 3", id: "Modul 3" },
    subtitle: { en: "JavaScript Fundamentals", id: "Dasar-dasar JavaScript" },
    weeks: [
      {
        week: 5,
        course: { en: "JavaScript Fundamentals", id: "Dasar-dasar JavaScript" },
        sessions: [
          // ── Lecture 1 ───────────────────────────────────────────
          {
            num: 1, date: null,
            title: "Algoritma, Pseudocode, dan Flowchart",
            recordingId: null,
            sections: [
              {
                icon: '🧠',
                title: { en: "What is an Algorithm?", id: "Apa itu Algoritma?" },
                items: {
                  en: [
                    "An algorithm is a [[step-by-step set of instructions]] designed to perform a specific task or solve a particular problem",
                    "They provide a systematic and well-defined approach to solving problems and achieving specific objectives",
                    "Think of it like a recipe — clear, step-by-step instructions that always produce the same result",
                    "Can be visualized in two ways: [[Pseudocode]] (text-based, closer to code) or [[Flowchart]] (visual with shapes and arrows)",
                  ],
                  id: [
                    "Algoritma adalah [[kumpulan instruksi langkah demi langkah]] yang dirancang untuk melakukan tugas tertentu atau memecahkan masalah",
                    "Memberikan pendekatan sistematis dan terdefinisi dengan baik untuk memecahkan masalah",
                    "Seperti resep masak — langkah demi langkah yang jelas agar hasilnya selalu sama",
                    "Bisa divisualisasikan dua cara: [[Pseudocode]] (berbasis teks, mendekati kode) atau [[Flowchart]] (visual dengan bentuk dan panah)",
                  ]
                }
              },
              {
                icon: '📝',
                title: { en: "Pseudocode", id: "Pseudocode" },
                items: {
                  en: [
                    "Translates the algorithm into a form closer to actual programming code, but focuses on [[process understanding]]",
                    "Uses human-readable language — easy to follow even without coding experience",
                    "Common keywords: `START` / `END`, `IF` / `ELSE`, `WHILE` / `FOR`, `INPUT` / `OUTPUT`, `SET`, `CALL`",
                    "Example: `START MakingTea` → `CHECK items` → `IF missing: GET items` → `PREPARE tea` → `END MakingTea`",
                    "⭐ Pseudocode is written before actual coding to plan logic without worrying about syntax",
                  ],
                  id: [
                    "Menerjemahkan algoritma ke bentuk yang lebih mendekati kode program, tetapi fokus pada [[pemahaman proses]]",
                    "Menggunakan bahasa yang mudah dibaca manusia — bisa dipahami meski tanpa pengalaman coding",
                    "Kata kunci umum: `START` / `END`, `IF` / `ELSE`, `WHILE` / `FOR`, `INPUT` / `OUTPUT`, `SET`, `CALL`",
                    "Contoh: `START MakingTea` → `CHECK items` → `IF missing: GET items` → `PREPARE tea` → `END MakingTea`",
                    "⭐ Pseudocode ditulis sebelum coding sungguhan untuk merencanakan logika tanpa khawatir tentang syntax",
                  ]
                }
              },
              {
                icon: '💻',
                title: { en: "Computational Pseudocode", id: "Pseudocode Komputasional" },
                items: {
                  en: [
                    "More formal pseudocode — describes algorithms using human-readable language, ready to be converted into actual code",
                    "Focuses on [[computational thinking]]: break problems into steps using variables, loops, and conditions",
                    "Key elements: Input/Output, Calculations, Decision Making, Repetition/Loops, Variables, Error Handling",
                    "Use when: solving math problems, creating algorithms, processing data, building programs, handling user interactions",
                    "Example: `START TemperatureConverter` → `INPUT celsius_temp` → `SET fahrenheit = (celsius × 9/5) + 32` → `OUTPUT fahrenheit` → `END`",
                  ],
                  id: [
                    "Pseudocode yang lebih formal — mendeskripsikan algoritma menggunakan bahasa yang mudah dibaca, siap dikonversi ke kode nyata",
                    "Berfokus pada [[computational thinking]]: memecah masalah menggunakan variabel, loop, dan kondisi",
                    "Elemen kunci: Input/Output, Kalkulasi, Decision Making, Repetisi/Loop, Variabel, Error Handling",
                    "Digunakan saat: memecahkan masalah matematika, membuat algoritma, memproses data, membangun program, menangani interaksi pengguna",
                    "Contoh: `START TemperatureConverter` → `INPUT celsius_temp` → `SET fahrenheit = (celsius × 9/5) + 32` → `OUTPUT fahrenheit` → `END`",
                  ]
                }
              },
              {
                icon: '📊',
                title: { en: "Flowchart & Symbols", id: "Flowchart & Simbol" },
                items: {
                  en: [
                    "Represents the algorithm [[visually]] using shapes and arrows to illustrate the flow of control and logic",
                    "⭐ Oval → Start/End | Arrow → flow of control | Parallelogram → Input/Output | Rectangle → Process | Diamond → Decision",
                    "Very useful when explaining algorithms to people who don't understand coding",
                    "Other symbols: Terminator, Database, Document, Loop, etc.",
                  ],
                  id: [
                    "Merepresentasikan algoritma secara [[visual]] menggunakan bentuk dan panah untuk menggambarkan alur kontrol dan logika",
                    "⭐ Oval → Start/End | Panah → alur kontrol | Jajaran genjang → Input/Output | Persegi panjang → Proses | Belah ketupat → Keputusan",
                    "Sangat berguna saat menjelaskan algoritma kepada orang yang tidak paham coding",
                    "Simbol lain: Terminator, Database, Document, Loop, dll.",
                  ]
                }
              },
              {
                icon: '🔄',
                title: { en: "Sorting & Recursion", id: "Sorting & Rekursi" },
                items: {
                  en: [
                    "[[Sorting]] — arranges elements in order: `[8, 1, 3, 2, 7, 4]` → `[1, 2, 3, 4, 7, 8]`",
                    "[[Bubble Sort]] — compare adjacent elements, swap if out of order, repeat `n-1` passes until fully sorted",
                    "[[Recursion]] — a function that calls itself — powerful for problems that can be broken into identical sub-problems",
                    "Recursion requires a [[base case]] (to stop) and a [[recursive case]] (to keep calling itself)",
                    "Examples: countdown timer, unwrap boxes, find all permutations",
                  ],
                  id: [
                    "[[Sorting]] — mengurutkan elemen: `[8, 1, 3, 2, 7, 4]` → `[1, 2, 3, 4, 7, 8]`",
                    "[[Bubble Sort]] — bandingkan elemen berdekatan, tukar jika tidak urut, ulangi `n-1` putaran hingga selesai",
                    "[[Rekursi]] — fungsi yang memanggil dirinya sendiri — powerful untuk masalah yang bisa dipecah menjadi sub-masalah yang sama",
                    "Rekursi membutuhkan [[base case]] (untuk berhenti) dan [[recursive case]] (untuk terus memanggil diri sendiri)",
                    "Contoh: countdown timer, membuka kotak hadiah, mencari semua permutasi",
                  ]
                }
              },
            ]
          },
          // ── Lecture 2 ───────────────────────────────────────────
          {
            num: 2, date: null,
            title: "JavaScript Essentials",
            recordingId: null,
            sections: [
              {
                icon: '📦',
                title: { en: "Variables & Declaration", id: "Variabel & Deklarasi" },
                items: {
                  en: [
                    "A variable is a [[named storage]] for values or data — like a labeled box",
                    "Declare with: `var name = 'value'` | `let count = 0` | `const PI = 3.14`",
                    "`var` → function-scoped, hoisted, can be redeclared & reassigned — ❌ avoid in modern JS",
                    "`let` → block-scoped, hoisted but not initialized, can be reassigned, cannot be redeclared in same scope",
                    "`const` → block-scoped, must be initialized at declaration, cannot be reassigned or redeclared",
                    "⭐ Rule of thumb: prefer `const` > `let` > `var`",
                  ],
                  id: [
                    "Variabel adalah [[penyimpanan bernama]] untuk nilai atau data — seperti kotak berlabel",
                    "Deklarasi dengan: `var name = 'value'` | `let count = 0` | `const PI = 3.14`",
                    "`var` → function-scoped, di-hoist, bisa di-redeclare & reassign — ❌ hindari di JS modern",
                    "`let` → block-scoped, di-hoist tapi tidak diinisialisasi, bisa di-reassign, tidak bisa di-redeclare di scope yang sama",
                    "`const` → block-scoped, harus diinisialisasi saat deklarasi, tidak bisa di-reassign atau di-redeclare",
                    "⭐ Aturan praktis: lebih baik `const` > `let` > `var`",
                  ]
                }
              },
              {
                icon: '✏️',
                title: { en: "Variable Naming & Good Practices", id: "Penamaan Variabel & Praktik Terbaik" },
                items: {
                  en: [
                    "Use descriptive and meaningful names — avoid single letters (except loop counters: `i`, `j`)",
                    "⭐ Use camelCase (JS standard): `userName` not `user_name` | `firstName` not `firstname`",
                    "❌ Don't use reserved keywords: `var`, `let`, `const`, `function`, `class`, etc.",
                    "Use plural for collections: `usernames = [...]` not `username = [...]`",
                    "❌ Avoid abbreviations: `itemCount` not `itemCnt` | `firstName` not `fName`",
                    "⭐ Uppercase constants for known fixed values: `const COLOR_RED = '#F00'`",
                    "❌ Avoid magic numbers: store `180` in `var height = 180` before using it in expressions",
                  ],
                  id: [
                    "Gunakan nama yang deskriptif dan bermakna — hindari satu huruf (kecuali counter loop: `i`, `j`)",
                    "⭐ Gunakan camelCase (standar JS): `userName` bukan `user_name` | `firstName` bukan `firstname`",
                    "❌ Jangan gunakan reserved keywords: `var`, `let`, `const`, `function`, `class`, dll.",
                    "Gunakan bentuk plural untuk koleksi: `usernames = [...]` bukan `username = [...]`",
                    "❌ Hindari singkatan: `itemCount` bukan `itemCnt` | `firstName` bukan `fName`",
                    "⭐ Konstanta huruf besar untuk nilai tetap yang sudah diketahui: `const COLOR_RED = '#F00'`",
                    "❌ Hindari magic number: simpan `180` ke `var height = 180` sebelum dipakai dalam ekspresi",
                  ]
                }
              },
              {
                icon: '🗂️',
                title: { en: "Primitive Data Types", id: "Tipe Data Primitif" },
                items: {
                  en: [
                    "[[Number]] → integer or float: `var age = 25` | `var pi = 3.14`",
                    "[[String]] → text in quotes: `var name = 'John'`",
                    "[[Boolean]] → only `true` or `false`",
                    "[[Undefined]] → declared but not assigned: `var x; // undefined`",
                    "[[Null]] → intentional absence of value: `var data = null`",
                    "[[Symbol]] (ES6) → unique and immutable identifier: `Symbol('id')`",
                    "⚠️ JavaScript is [[dynamically typed]] — types are determined at runtime, not at declaration",
                  ],
                  id: [
                    "[[Number]] → integer atau float: `var age = 25` | `var pi = 3.14`",
                    "[[String]] → teks di dalam kutipan: `var name = 'John'`",
                    "[[Boolean]] → hanya `true` atau `false`",
                    "[[Undefined]] → dideklarasikan tapi belum diberi nilai: `var x; // undefined`",
                    "[[Null]] → ketiadaan nilai secara sengaja: `var data = null`",
                    "[[Symbol]] (ES6) → identifier unik dan immutable: `Symbol('id')`",
                    "⚠️ JavaScript adalah [[dynamically typed]] — tipe data ditentukan saat runtime, bukan saat deklarasi",
                  ]
                }
              },
              {
                icon: '🗃️',
                title: { en: "Objects, Arrays & Functions", id: "Object, Array & Fungsi" },
                items: {
                  en: [
                    "[[Object]] → collection of key-value pairs: `{ name: 'John', age: 20 }` — values can be any type",
                    "[[Array]] → ordered collection: `[1, 2, 3]` | `['a', 'b']` | array of objects",
                    "[[Function]] → reusable block of code: `function add(a, b) { return a + b }`",
                    "`typeof` → returns the data type as a string: `typeof 'hello'` → `'string'` | `typeof 42` → `'number'`",
                    "⚠️ `typeof []` returns `'object'` — use `Array.isArray(arr)` to correctly check for arrays",
                  ],
                  id: [
                    "[[Object]] → kumpulan key-value pairs: `{ name: 'John', age: 20 }` — nilai bisa tipe data apapun",
                    "[[Array]] → koleksi terurut: `[1, 2, 3]` | `['a', 'b']` | array of objects",
                    "[[Function]] → blok kode yang bisa digunakan ulang: `function add(a, b) { return a + b }`",
                    "`typeof` → mengembalikan tipe data sebagai string: `typeof 'hello'` → `'string'` | `typeof 42` → `'number'`",
                    "⚠️ `typeof []` mengembalikan `'object'` — gunakan `Array.isArray(arr)` untuk mengecek array dengan benar",
                  ]
                }
              },
            ]
          },
          // ── Lecture 3 ───────────────────────────────────────────
          {
            num: 3, date: null,
            title: "JavaScript Control Flow",
            recordingId: null,
            sections: [
              {
                icon: '🐛',
                title: { en: "Code Debugging", id: "Code Debugging" },
                items: {
                  en: [
                    "[[Code debugging]] = searching for and fixing errors in programming code",
                    "[[Syntax errors]] → code can't run at all | [[Logical errors]] → code runs but gives the wrong result",
                    "⭐ Use `console.log(value)` to inspect values at any point in the code",
                    "Open Chrome DevTools: right-click → Inspect → Console tab (or `Ctrl/Cmd + Shift + I`)",
                  ],
                  id: [
                    "[[Code debugging]] = mencari dan memperbaiki error dalam kode program",
                    "[[Syntax error]] → kode tidak bisa dijalankan sama sekali | [[Logical error]] → kode berjalan tapi hasilnya salah",
                    "⭐ Gunakan `console.log(nilai)` untuk mengecek nilai di titik mana saja dalam kode",
                    "Buka Chrome DevTools: klik kanan → Inspect → Console tab (atau `Ctrl/Cmd + Shift + I`)",
                  ]
                }
              },
              {
                icon: '⚙️',
                title: { en: "Functions", id: "Fungsi" },
                items: {
                  en: [
                    "A [[function]] is a block of code designed to perform a particular task — avoids code duplication",
                    "Declaration: `function name(param1, param2) { // code }` — call it with `name(arg1, arg2)`",
                    "⚠️ Always include `()` when calling: `alertMessage()` not `alertMessage`",
                    "Parameters have a defined order — pass values in the correct order",
                    "Default values (ES6): `function greet(name = \"Anonymous\") { ... }` — used when arg is not provided",
                    "Return value: `return result` — function stops and sends value back to the caller",
                  ],
                  id: [
                    "[[Fungsi]] adalah blok kode untuk melakukan tugas tertentu — menghindari duplikasi kode",
                    "Deklarasi: `function name(param1, param2) { // kode }` — dipanggil dengan `name(arg1, arg2)`",
                    "⚠️ Selalu sertakan `()` saat memanggil: `alertMessage()` bukan `alertMessage`",
                    "Parameter memiliki urutan tertentu — kirim nilai dalam urutan yang tepat",
                    "Default values (ES6): `function greet(name = \"Anonymous\") { ... }` — dipakai saat argumen tidak diberikan",
                    "Return value: `return hasil` — fungsi berhenti dan mengirim nilai kembali ke pemanggil",
                  ]
                }
              },
              {
                icon: '🏷️',
                title: { en: "Function Naming & Arrow Functions", id: "Penamaan Fungsi & Arrow Function" },
                items: {
                  en: [
                    "Functions are actions — names should be verbs: `showMessage`, `setName`, `renderBox`, `fetchData`",
                    "⭐ Use prefix conventions agreed by the team: `show...`, `get...`, `set...`, `render...`, `use...`",
                    "Arrow function — shorter syntax: `const add = (a, b) => a + b`",
                    "No params: `() => { ... }` | One param: `x => { ... }` | Inline return: `x => x * 2`",
                    "Arrow functions are commonly used for callbacks and short utility functions",
                  ],
                  id: [
                    "Fungsi adalah aksi — namanya harus kata kerja: `showMessage`, `setName`, `renderBox`, `fetchData`",
                    "⭐ Gunakan konvensi prefix yang disepakati tim: `show...`, `get...`, `set...`, `render...`, `use...`",
                    "Arrow function — syntax lebih pendek: `const add = (a, b) => a + b`",
                    "Tanpa param: `() => { ... }` | Satu param: `x => { ... }` | Return inline: `x => x * 2`",
                    "Arrow function sering digunakan untuk callback dan fungsi utilitas singkat",
                  ]
                }
              },
              {
                icon: '🔀',
                title: { en: "Conditionals", id: "Kondisional" },
                items: {
                  en: [
                    "`if (condition) { ... } else { ... }` — run different code based on a condition",
                    "`else if` — chain multiple conditions for more complex branching logic",
                    "[[Ternary operator]]: `condition ? valueIfTrue : valueIfFalse` — compact if-else in one line",
                    "`switch` — cleaner than many `else if` when comparing one value against many fixed options",
                    "⭐ Use ternary for simple assignments, `if-else` for complex logic, `switch` for many cases",
                  ],
                  id: [
                    "`if (condition) { ... } else { ... }` — jalankan kode berbeda berdasarkan kondisi",
                    "`else if` — rangkai beberapa kondisi untuk percabangan yang lebih kompleks",
                    "[[Ternary operator]]: `condition ? nilaiJikaTrue : nilaiJikaFalse` — if-else ringkas dalam satu baris",
                    "`switch` — lebih bersih dari banyak `else if` saat membandingkan satu nilai dengan banyak opsi tetap",
                    "⭐ Gunakan ternary untuk assignment sederhana, `if-else` untuk logika kompleks, `switch` untuk banyak kasus",
                  ]
                }
              },
              {
                icon: '🔁',
                title: { en: "Loops", id: "Loop" },
                items: {
                  en: [
                    "`for (init; condition; step) { }` — most common; use when number of iterations is known",
                    "`while (condition) { }` — runs while condition is true; condition checked before each iteration",
                    "`do { } while (condition)` — always runs at least once; condition checked after each iteration",
                    "⚠️ Always include a step that changes the condition (e.g. `i++`) to avoid infinite loops",
                    "Use `break` to exit a loop early | Use `continue` to skip the current iteration",
                  ],
                  id: [
                    "`for (init; condition; step) { }` — paling umum; pakai saat jumlah iterasi sudah diketahui",
                    "`while (condition) { }` — berjalan selama kondisi true; kondisi dicek sebelum setiap iterasi",
                    "`do { } while (condition)` — selalu dijalankan minimal sekali; kondisi dicek setelah setiap iterasi",
                    "⚠️ Selalu sertakan step yang mengubah kondisi (mis. `i++`) untuk menghindari infinite loop",
                    "Gunakan `break` untuk keluar dari loop lebih awal | `continue` untuk melewati iterasi saat ini",
                  ]
                }
              },
              {
                icon: '🛡️',
                title: { en: "Error Handling", id: "Penanganan Error" },
                items: {
                  en: [
                    "Use `try { } catch (err) { }` to handle errors gracefully without crashing the program",
                    "`try` → code to attempt | `catch` → runs if error occurs (`err` = error object) | `finally` → always runs",
                    "Error properties: `error.message` → description | `error.name` → type (e.g. `ReferenceError`) | `error.stack` → trace",
                    "Use `throw new Error('message')` to create and throw custom errors",
                    "⭐ Always handle errors gracefully — show a user-friendly message instead of letting the app crash",
                  ],
                  id: [
                    "Gunakan `try { } catch (err) { }` untuk menangani error tanpa crash program",
                    "`try` → kode yang dicoba | `catch` → dijalankan jika ada error (`err` = objek error) | `finally` → selalu dijalankan",
                    "Properti error: `error.message` → deskripsi | `error.name` → tipe (mis. `ReferenceError`) | `error.stack` → trace",
                    "Gunakan `throw new Error('pesan')` untuk membuat dan melempar custom error",
                    "⭐ Selalu tangani error dengan baik — tampilkan pesan yang ramah pengguna daripada membiarkan app crash",
                  ]
                }
              },
            ]
          },
          // ── Lecture 4 ───────────────────────────────────────────
          {
            num: 4, date: null,
            title: "JavaScript DOM and Events",
            recordingId: null,
            sections: [
              {
                icon: '🌐',
                title: { en: "What is the DOM?", id: "Apa itu DOM?" },
                items: {
                  en: [
                    "[[DOM]] = Document Object Model — the browser's object-based representation of an HTML page",
                    "HTML page = [[Document]] | HTML elements = [[Objects]] | HTML tree structure = [[Model]]",
                    "JavaScript can change all HTML elements, attributes, styles, and events through the DOM",
                    "⭐ The DOM is the bridge between HTML/CSS and JavaScript — it enables dynamic, interactive web pages",
                  ],
                  id: [
                    "[[DOM]] = Document Object Model — representasi berbasis objek milik browser atas halaman HTML",
                    "Halaman HTML = [[Document]] | Elemen HTML = [[Objects]] | Struktur pohon HTML = [[Model]]",
                    "JavaScript bisa mengubah semua elemen, atribut, style, dan event HTML melalui DOM",
                    "⭐ DOM adalah jembatan antara HTML/CSS dan JavaScript — memungkinkan halaman web yang dinamis dan interaktif",
                  ]
                }
              },
              {
                icon: '🌳',
                title: { en: "DOM Tree", id: "DOM Tree" },
                items: {
                  en: [
                    "When a page loads, the browser builds a DOM tree from the HTML structure",
                    "Structure: `document` → `<html>` → `<head>` + `<body>` → all child elements",
                    "Each HTML tag becomes a [[node]] in the tree (element node, text node, attribute node)",
                    "JavaScript navigates this tree to read or modify any part of the page",
                  ],
                  id: [
                    "Saat halaman dimuat, browser membangun DOM tree dari struktur HTML",
                    "Struktur: `document` → `<html>` → `<head>` + `<body>` → semua elemen anak",
                    "Setiap tag HTML menjadi sebuah [[node]] dalam pohon (element node, text node, attribute node)",
                    "JavaScript menavigasi pohon ini untuk membaca atau mengubah bagian mana pun dari halaman",
                  ]
                }
              },
              {
                icon: '🔍',
                title: { en: "Finding & Changing Elements", id: "Mencari & Mengubah Elemen" },
                items: {
                  en: [
                    "`document.getElementById(\"id\")` → find a single element by its `id` attribute",
                    "`document.getElementsByTagName(\"tag\")` → find all elements with a given tag name",
                    "`element.innerHTML = \"new content\"` → replace the inner HTML of an element",
                    "`element.src = \"new.jpg\"` → change an attribute value (e.g. image source)",
                    "`element.style.color = \"red\"` → change a CSS style property directly via JavaScript",
                  ],
                  id: [
                    "`document.getElementById(\"id\")` → cari satu elemen berdasarkan atribut `id`-nya",
                    "`document.getElementsByTagName(\"tag\")` → cari semua elemen dengan nama tag tertentu",
                    "`element.innerHTML = \"konten baru\"` → ganti isi HTML dari sebuah elemen",
                    "`element.src = \"baru.jpg\"` → ubah nilai atribut (mis. sumber gambar)",
                    "`element.style.color = \"red\"` → ubah properti CSS style secara langsung via JavaScript",
                  ]
                }
              },
              {
                icon: '🖱️',
                title: { en: "Events", id: "Events" },
                items: {
                  en: [
                    "[[Events]] = how JavaScript detects and responds to user interactions or browser actions",
                    "Mouse: `click`, `dblclick`, `mouseover`, `mouseout`",
                    "Keyboard: `keydown`, `keypress`, `keyup`",
                    "Form: `submit`, `reset`, `focus`, `blur`",
                    "Window: `load`, `resize`, `scroll`, `unload`",
                    "`onclick` — fires when element is clicked: `element.onclick = function() { alert('clicked!') }`",
                    "`onchange` — fires when input value changes: useful for real-time form validation",
                    "⭐ Assign handlers: `element.onclick = myFunction` (no parentheses — passing reference, not calling!)",
                  ],
                  id: [
                    "[[Events]] = cara JavaScript mendeteksi dan merespons interaksi pengguna atau aksi browser",
                    "Mouse: `click`, `dblclick`, `mouseover`, `mouseout`",
                    "Keyboard: `keydown`, `keypress`, `keyup`",
                    "Form: `submit`, `reset`, `focus`, `blur`",
                    "Window: `load`, `resize`, `scroll`, `unload`",
                    "`onclick` — dijalankan saat elemen diklik: `element.onclick = function() { alert('diklik!') }`",
                    "`onchange` — dijalankan saat nilai input berubah: berguna untuk validasi form real-time",
                    "⭐ Assign handler: `element.onclick = myFunction` (tanpa kurung — kirim referensi, bukan memanggilnya!)",
                  ]
                }
              },
            ]
          },
        ]
      },
    ]
  },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function _escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function _parseInlineCode(text) {
  let s = _escHtml(text);
  s = s.replace(/`([^`]+)`/g, '<code class="materi-code">$1</code>');
  s = s.replace(/\[\[([^\]]+)\]\]/g, '<span class="materi-term">$1</span>');
  return s;
}

function _calloutClass(text) {
  if (text.startsWith('\u26A0')) return 'materi-callout materi-callout-warn';
  if (text.startsWith('\u274C')) return 'materi-callout materi-callout-cross';
  if (text.startsWith('\u2B50')) return 'materi-callout materi-callout-star';
  return null;
}

function _buildItemsHTML(items) {
  let html = '', inList = false;
  for (const item of items) {
    const cc = _calloutClass(item);
    if (cc) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<div class="${cc}">${_parseInlineCode(item)}</div>`;
    } else {
      if (!inList) { html += '<ul class="materi-points">'; inList = true; }
      html += `<li>${_parseInlineCode(item)}</li>`;
    }
  }
  if (inList) html += '</ul>';
  return html;
}

function _buildContentHTML(session, lang) {
  if (!session.sections || session.sections.length === 0) {
    return `<div class="materi-empty">
      <span>${i18n[lang]['materi.coming']}</span>
      <p>${i18n[lang]['materi.desc']}</p>
    </div>`;
  }
  return '<div class="materi-sections-wrap">' + session.sections.map(sec => {
    const titleText = (sec.title && typeof sec.title === 'object')
      ? (sec.title[lang] || sec.title.en || '')
      : (sec.title || '');
    const items = sec.items
      ? (sec.items[lang] || sec.items.en || [])
      : [];
    let bodyHTML = '';
    if (sec.type === 'steps') {
      bodyHTML = '<div class="materi-steps">' + items.map((item, i) => {
        const text = item.replace(/^\d+\.\s*/, '');
        return `<div class="materi-step">
          <div class="materi-step-num">${i + 1}</div>
          <div class="materi-step-text">${_parseInlineCode(text)}</div>
        </div>`;
      }).join('') + '</div>';
    } else if (sec.type === 'table') {
      const headers = sec.headers ? (sec.headers[lang] || sec.headers.en || []) : [];
      bodyHTML = '<table class="materi-table"><thead><tr>' +
        headers.map(h => `<th>${_parseInlineCode(h)}</th>`).join('') +
        '</tr></thead><tbody>' +
        items.map(row => {
          const cols = row.split('|').map(c => c.trim());
          return '<tr>' + cols.map(c => `<td>${_parseInlineCode(c)}</td>`).join('') + '</tr>';
        }).join('') +
        '</tbody></table>';
    } else {
      bodyHTML = _buildItemsHTML(items);
    }
    return `<div class="materi-section">
      <div class="materi-section-title">
        ${sec.icon ? `<span class="materi-section-icon">${sec.icon}</span>` : ''}${_escHtml(titleText)}
      </div>
      <div class="materi-section-body${sec.type === 'table' ? ' materi-section-body--table' : ''}">
        ${bodyHTML}
      </div>
    </div>`;
  }).join('') + '</div>';
}

// ─── INTERACT ─────────────────────────────────────────────────────────────────
function selectLecture(weekIdx, sessionIdx) {
  const lang = currentLang;
  const activeModuleNum = window._activeModule || modules[0].num;
  const activeModule = modules.find(m => m.num === activeModuleNum) || modules[0];
  window._activeLecture = { weekIdx, sessionIdx };

  document.querySelectorAll('.materi-nav-item').forEach(el => el.classList.remove('active'));
  const activeBtn = document.querySelector(`.materi-nav-item[data-week="${weekIdx}"][data-session="${sessionIdx}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const week    = activeModule.weeks[weekIdx];
  const session = week && week.sessions[sessionIdx];
  if (!session) return;

  const panel = document.getElementById('materiPanel');
  if (!panel) return;

  panel.classList.add('switching');
  setTimeout(() => {
    const dateBadge = session.date
      ? `<span class="materi-date-badge">${_escHtml(session.date)}</span>`
      : '';
    const recBtn = session.recordingId
      ? `<a href="recordings.html" class="btn btn-sm" style="text-decoration:none;display:inline-flex;align-items:center;gap:6px">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M8 5v14l11-7z"/></svg>
           ${i18n[lang]['materi.view']}
         </a>`
      : '';
    panel.innerHTML = `<div class="materi-content-inner">
      <div class="materi-lecture-header">
        <div class="materi-content-meta">
          <span class="materi-lec-badge">${i18n[lang]['materi.session']} ${String(session.num).padStart(2, '0')}</span>
          ${dateBadge}${recBtn}
        </div>
        <div class="materi-content-title">${_escHtml(session.title)}</div>
      </div>
      ${_buildContentHTML(session, lang)}
    </div>`;
    panel.classList.remove('switching');
    panel.classList.add('entering');
    setTimeout(() => panel.classList.remove('entering'), 400);
  }, 150);
}

function toggleWeekNav(btn) {
  const group    = btn.closest('.materi-nav-group');
  const sessions = group.querySelector('.materi-nav-sessions');
  if (group.classList.contains('open')) {
    sessions.style.maxHeight = '0';
    group.classList.remove('open');
  } else {
    group.classList.add('open');
    sessions.style.maxHeight = sessions.scrollHeight + 'px';
    setTimeout(() => { sessions.style.maxHeight = '500px'; }, 350);
  }
}

function toggleMateriNav() {
  const wrap = document.querySelector('.materi-nav-wrap');
  if (wrap) wrap.classList.toggle('collapsed');
}

function selectModule(num) {
  window._activeModule = num;
  window._activeLecture = null;
  renderMateri();
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
function renderMateri() {
  const container = document.getElementById('materiGrid');
  if (!container) return;
  const lang = currentLang;
  const activeModuleNum = window._activeModule || modules[0].num;
  const activeModule    = modules.find(m => m.num === activeModuleNum) || modules[0];

  // Determine default lecture to open
  const saved = window._activeLecture;
  let defaultWi = 0, defaultSi = 0;
  if (saved) {
    defaultWi = saved.weekIdx;
    defaultSi = saved.sessionIdx;
  } else {
    for (let wi = 0; wi < activeModule.weeks.length; wi++) {
      if (activeModule.weeks[wi].sessions.length > 0) { defaultWi = wi; break; }
    }
  }

  // Module tabs
  const tabsHTML = `<div class="module-tabs" role="tablist">${
    modules.map(m => `<button
        class="module-tab${m.num === activeModuleNum ? ' active' : ''}"
        role="tab"
        aria-selected="${m.num === activeModuleNum}"
        onclick="selectModule(${m.num})"
      ><span class="module-tab-num">${m.title[lang]}</span
      ><span class="module-tab-sub">${m.subtitle[lang]}</span></button>`).join('')
  }</div>`;

  // Sidebar week accordion groups (empty weeks are hidden)
  const navGroupsHTML = activeModule.weeks.map((w, wi) => {
    if (w.sessions.length === 0) return '';
    const isOpen      = (wi === defaultWi);
    const sessionsHTML = w.sessions.map((s, si) =>
      `<button class="materi-nav-item${(wi === defaultWi && si === defaultSi) ? ' active' : ''}"
        data-week="${wi}" data-session="${si}"
        onclick="selectLecture(${wi},${si})"
      ><span class="materi-nav-lec">${i18n[lang]['materi.session']} ${String(s.num).padStart(2, '0')}</span
      ><span class="materi-nav-title">${_escHtml(s.title)}</span></button>`
    ).join('');
    return `<div class="materi-nav-group${isOpen ? ' open' : ''}">
      <button class="materi-nav-week-btn" onclick="toggleWeekNav(this)">
        <div class="materi-nav-week-info">
          <span class="materi-nav-week-tag">${i18n[lang]['materi.week']} ${w.week}</span>
          <span class="materi-nav-course">${w.course[lang] || w.course.en}</span>
        </div>
        <svg class="materi-week-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="materi-nav-sessions" style="max-height:${isOpen ? '500px' : '0'}">${sessionsHTML}</div>
    </div>`;
  }).join('');

  container.innerHTML = tabsHTML + `<div class="materi-layout">
    <div class="materi-nav-wrap">
      <button class="materi-nav-collapser" onclick="toggleMateriNav()" title="Toggle sidebar">
        <svg class="materi-nav-collapser-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="materi-nav">${navGroupsHTML}</div>
    </div>
    <div class="materi-content" id="materiPanel"></div>
  </div>`;

  selectLecture(defaultWi, defaultSi);
}

document.addEventListener('DOMContentLoaded', renderMateri);
