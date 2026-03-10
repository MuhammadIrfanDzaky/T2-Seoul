# Lecture 4 — Git Tutorial

---

## 🇬🇧 English

### What is Git?
- A free and open-source **distributed version control system**
- Used to track code changes, prevent data loss, and collaborate with teams
- Far superior to older tools like Subversion, CVS, and Perforce
- As a beginner, you **must learn Git via terminal/CLI first** before using any GUI tools
- GUI tools like GitHub Desktop or GitKraken are fine later, after mastering the basics

### Git Workflow

```
Working Directory → git add → Staging Area → git commit → Local Repo → git push → Remote Repo
```

| Area | Function |
|------|----------|
| **Working Directory** | Where you edit files |
| **Staging Area** | Preparation zone — choose which changes to save |
| **Local Repository** | Commit history saved on your machine (`.git` folder) |
| **Remote Repository** | Repo hosted on GitHub/GitLab/Bitbucket — for team collaboration |

### File States in Git

| State | Meaning |
|-------|---------|
| **Untracked** | Git doesn't know this file exists yet |
| **Unmodified** | File is tracked and nothing has changed |
| **Modified** | Changes exist but not yet staged |
| **Staged** | File has been `git add`-ed, ready to commit |
| **Committed** | Changes permanently saved in Git history |

### Basic Git Commands

| Command | Function |
|---------|----------|
| `git config` | Set your username and email |
| `git init` | Initialize a new repository |
| `git clone` | Copy an existing repository |
| `git status` | Check current repo status |
| `git add` | Move changes to staging area |
| `git commit` | Save changes to Git history |
| `git log` | View commit history |
| `git push` | Upload commits to remote repo |
| `git pull` | Download & merge changes from remote |
| `git remote` | Manage remote repo connections |

> ⚠️ Always prefix with `git`. It's `git status`, not just `status`.

### Git Configuration
```bash
git config --global user.name "Full Name"
git config --global user.email "yourname@example.com"
```
- Double quotes `"` are required!
- Verify your config is correct: `cat ~/.gitconfig`

### Git Change Cycle (Rinse & Repeat)
1. Edit files in the working directory
2. `git status` — check what changed
3. `git add <filename>` or `git add .` — stage changes
4. `git commit -m "clear message"` — save to history
5. `git log` — review commit history

### .gitignore
- A file that tells Git which files/folders to **ignore**
- Useful for: `node_modules/`, `.env`, `dist/`, log files, OS files
- Created in the project root, named `.gitignore`

```
node_modules/
dist/
.env
.env.*
.DS_Store
*.log
```

### How to Write a Good Commit Message
- Subject line max **50 characters**
- Use **imperative mood** → `Add login feature`, not `Adding login feature`
- No period at the end of the subject
- Separate subject from body with a blank line
- Body max 72 characters per line — explain *what* and *why*

### Conventional Commits
Format:
```
<type>[optional scope]: <description>
```

| Type | When to Use |
|------|-------------|
| `feat` | Adding a new feature |
| `fix` | Fixing a bug |
| `docs` | Documentation changes |
| `style` | Formatting, missing semicolons |
| `refactor` | Refactoring without fixing bugs or adding features |
| `test` | Adding or fixing tests |
| `chore` | Maintenance tasks |

Examples:
```
feat(login): add OAuth support
fix(cart): correct total price calculation
```

### Commit Strategies

| Strategy | Description |
|----------|-------------|
| **Atomic Commits** | One commit = one logical change ⭐ most recommended |
| **Micro Commits** | Very small commits — detailed but fills up the log |
| **Feature Branch** | Work on separate branches, merge to main when ready |
| **Squash Commits** | Combine many small commits into one before merging |
| **Amend Commits** | Fix the last commit before pushing |

### Common Beginner Mistakes
- ❌ Forgetting `git add` before `git commit`
- ❌ Vague commit messages: `"fix stuff"`, `"update"`, `"aaa"`
- ❌ Committing unnecessary files like `node_modules` or `.env`
- ❌ Using GUI tools before mastering CLI basics
- ❌ Committing too many changes at once
- ❌ Not running `git pull` before `git push`

---

## 🇮🇩 Bahasa Indonesia

### Apa itu Git?
- **Distributed version control system** yang gratis dan open-source
- Digunakan untuk melacak perubahan kode, mencegah kehilangan data, dan berkolaborasi dengan tim
- Jauh lebih unggul dibanding tools lama seperti Subversion, CVS, dan Perforce
- Sebagai pemula, **wajib belajar Git via terminal/CLI terlebih dahulu** sebelum menggunakan GUI
- GUI tools seperti GitHub Desktop atau GitKraken boleh digunakan belakangan, setelah paham dasarnya

### Git Workflow

```
Working Directory → git add → Staging Area → git commit → Local Repo → git push → Remote Repo
```

| Area | Fungsi |
|------|--------|
| **Working Directory** | Tempat kamu mengedit file |
| **Staging Area** | Zona persiapan — pilih perubahan mana yang mau disimpan |
| **Local Repository** | Riwayat commit tersimpan di mesinmu (folder `.git`) |
| **Remote Repository** | Repo yang di-host di GitHub/GitLab/Bitbucket — untuk kolaborasi tim |

### Status File dalam Git

| Status | Artinya |
|--------|---------|
| **Untracked** | Git belum mengenali file ini |
| **Unmodified** | File sudah di-track dan tidak ada perubahan |
| **Modified** | Ada perubahan, tapi belum di-stage |
| **Staged** | Sudah di-`add`, siap untuk di-commit |
| **Committed** | Perubahan sudah tersimpan permanen di riwayat Git |

### Perintah Dasar Git

| Command | Fungsi |
|---------|--------|
| `git config` | Set nama dan email pengguna |
| `git init` | Inisialisasi repo baru |
| `git clone` | Salin repo yang sudah ada |
| `git status` | Cek status repo saat ini |
| `git add` | Pindahkan perubahan ke staging area |
| `git commit` | Simpan perubahan ke riwayat Git |
| `git log` | Lihat histori commit |
| `git push` | Upload commit ke remote repo |
| `git pull` | Download & merge perubahan dari remote |
| `git remote` | Kelola koneksi ke remote repo |

> ⚠️ Selalu tambahkan `git` sebelum nama command. Bukan `status`, tapi `git status`.

### Konfigurasi Git
```bash
git config --global user.name "Nama Lengkap"
git config --global user.email "email@contoh.com"
```
- Tanda kutip `"` wajib digunakan!
- Verifikasi konfigurasi: `cat ~/.gitconfig`

### Siklus Perubahan Git (Rinse & Repeat)
1. Edit file di working directory
2. `git status` — cek apa yang berubah
3. `git add <namafile>` atau `git add .` — stage perubahan
4. `git commit -m "pesan yang jelas"` — simpan ke riwayat
5. `git log` — lihat histori commit

### .gitignore
- File yang memberitahu Git untuk **mengabaikan** file/folder tertentu
- Berguna untuk: `node_modules/`, `.env`, `dist/`, file log, file OS
- Dibuat di root folder project dengan nama `.gitignore`

```
node_modules/
dist/
.env
.env.*
.DS_Store
*.log
```

### Cara Menulis Pesan Commit yang Baik
- Subject maksimal **50 karakter**
- Gunakan **imperative mood** → `Add login feature`, bukan `Adding login feature`
- Jangan pakai titik di akhir subject
- Pisahkan subject dari body dengan satu baris kosong
- Body maksimal 72 karakter per baris — jelaskan *apa* dan *kenapa*

### Conventional Commits
Format:
```
<type>[optional scope]: <description>
```

| Type | Kapan Digunakan |
|------|----------------|
| `feat` | Menambah fitur baru |
| `fix` | Memperbaiki bug |
| `docs` | Perubahan dokumentasi |
| `style` | Formatting, semicolon yang hilang |
| `refactor` | Refactor tanpa fix bug/tambah fitur |
| `test` | Menambah atau memperbaiki test |
| `chore` | Maintenance (update package, build config) |

Contoh:
```
feat(login): add OAuth support
fix(cart): correct total price calculation
```

### Strategi Commit

| Strategi | Penjelasan |
|----------|-----------|
| **Atomic Commits** | Satu commit = satu perubahan logis ⭐ paling direkomendasikan |
| **Micro Commits** | Commit sangat kecil — detail tapi memenuhi log |
| **Feature Branch** | Kerjakan di branch terpisah, merge ke main kalau sudah siap |
| **Squash Commits** | Gabungkan banyak commit kecil jadi satu sebelum merge |
| **Amend Commits** | Perbaiki commit terakhir sebelum di-push |

### Kesalahan Umum Pemula
- ❌ Lupa `git add` sebelum `git commit`
- ❌ Pesan commit tidak jelas: `"fix stuff"`, `"update"`, `"aaa"`
- ❌ Commit file yang tidak perlu seperti `node_modules` atau `.env`
- ❌ Pakai GUI tools sebelum paham CLI dasarnya
- ❌ Commit terlalu banyak perubahan sekaligus
- ❌ Tidak `git pull` sebelum `git push`