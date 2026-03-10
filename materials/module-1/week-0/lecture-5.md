# Lecture 5 — Git Collaboration

---

## 🇬🇧 English

### What is a Branch?
- A branch is a **separate line of development** that allows you to work independently without disrupting the main codebase
- Changes in one branch **do not affect other branches** until you merge
- Enables multiple people to work on different features simultaneously
- When finished, a branch is **merged** back into the main branch (`main` or `master`)

### Branch Commands

| Function | Command |
|----------|---------|
| Create a new branch | `git checkout -b <branch-name>` |
| Switch to another branch | `git checkout <branch-name>` |
| Merge a branch into current branch | `git merge <source-branch>` |

### Merge Conflict
A conflict occurs when **two people edit the same part of the same file**, and Git doesn't know which version is correct.

Commonly happens during:
- `git merge`
- `git pull`
- Opening a **Pull Request** on GitHub / GitLab / Azure DevOps

**How to resolve a conflict:**
1. `git pull` the source branch
2. Switch to your branch: `git checkout <your-branch>`
3. `git merge <source-branch>` into your branch
4. Manually remove conflict markers:
```
<<<<<<< HEAD
const name = "Erlanda";
=======
const name = "Zakaria";
>>>>>>> feature-branch
```
5. `git add` then `git commit -m "resolve conflict"`
6. `git push origin <your-branch>`

### Git Hosting Platforms
After getting comfortable with local Git, you can publish your repos to a **Git hosting** (Git server):

- **GitHub** ⭐ most popular
- GitLab
- Atlassian Bitbucket
- Google Cloud Source Repositories
- Amazon CodeCommit
- Microsoft Azure Repos

### GitHub
- The most popular platform for publishing and collaborating on Git repositories
- Owned by **Microsoft** since 2018 (acquired for US$7.5 billion)
- ⚠️ **GitHub ≠ Git** — Git is the tool, GitHub is the hosting platform

### Syncing Local ↔ GitHub

**First-time push to GitHub:**
```bash
git remote add origin https://github.com/username/project.git
git branch -M main
git push -u origin main
```

**Subsequent pushes:**
```bash
git push
```

**Pull updates from remote:**
```bash
git pull
```

### Clone an Existing Repo
```bash
git clone https://github.com/username/project.git
```
- The repo is cloned directly to a local folder
- No need to run `git init` again — it's already initialized

### Git Collaboration Simulation (7 Steps)

| Step | Action |
|------|--------|
| 1 | Create a new GitHub repo, invite collaborators |
| 2 | Everyone `git clone` the repository |
| 3 | Each person creates their own branch: `git checkout -b <branch-name>` |
| 4 | Make changes, then `git add .` and `git commit -m "message"` |
| 5 | Push branch to remote: `git push origin <branch-name>` |
| 6 | Create a **Pull Request** on GitHub, request a review, then merge |
| 7 | Simulation complete — all changes successfully merged into `main` |

---

## 🇮🇩 Bahasa Indonesia

### Apa itu Branch?
- Branch adalah **jalur pengembangan terpisah** yang memungkinkan kamu bekerja secara independen tanpa mengganggu kode utama
- Perubahan di satu branch **tidak akan mempengaruhi branch lain** sampai kamu merge
- Memungkinkan beberapa orang mengerjakan fitur berbeda secara bersamaan
- Setelah selesai, branch di-**merge** kembali ke branch utama (`main` atau `master`)

### Perintah Branch

| Fungsi | Command |
|--------|---------|
| Buat branch baru | `git checkout -b <nama-branch>` |
| Pindah ke branch lain | `git checkout <nama-branch>` |
| Gabungkan branch ke branch aktif | `git merge <branch-acuan>` |

### Merge Conflict
Conflict terjadi ketika **dua orang mengubah bagian yang sama** pada file yang sama, dan Git tidak tahu versi mana yang benar.

Biasanya muncul saat:
- `git merge`
- `git pull`
- Membuka **Pull Request** di GitHub / GitLab / Azure DevOps

**Cara resolve conflict:**
1. `git pull` branch acuan
2. Pindah ke branch kamu: `git checkout <nama-branch>`
3. `git merge <branch-acuan>` ke branch kamu
4. Hapus conflict markers secara manual:
```
<<<<<<< HEAD
const name = "Erlanda";
=======
const name = "Zakaria";
>>>>>>> feature-branch
```
5. `git add` lalu `git commit -m "resolve conflict"`
6. `git push origin <nama-branch>`

### Platform Git Hosting
Setelah familiar dengan Git lokal, kamu bisa publish repo ke **Git hosting** (Git server):

- **GitHub** ⭐ paling populer
- GitLab
- Atlassian Bitbucket
- Google Cloud Source Repositories
- Amazon CodeCommit
- Microsoft Azure Repos

### GitHub
- Platform paling populer untuk publish dan berkolaborasi di Git repository
- Dimiliki oleh **Microsoft** sejak 2018 (diakuisisi senilai US$7.5 miliar)
- ⚠️ **GitHub ≠ Git** — Git adalah tool-nya, GitHub adalah platform hosting-nya

### Sinkronisasi Lokal ↔ GitHub

**Pertama kali push ke GitHub:**
```bash
git remote add origin https://github.com/username/project.git
git branch -M main
git push -u origin main
```

**Push berikutnya (cukup):**
```bash
git push
```

**Ambil update dari remote:**
```bash
git pull
```

### Clone Repo yang Sudah Ada
```bash
git clone https://github.com/username/project.git
```
- Repo langsung ter-clone ke folder lokal
- Tidak perlu `git init` lagi karena sudah ter-inisialisasi otomatis

### Simulasi Kolaborasi Git (7 Langkah)

| Langkah | Aksi |
|---------|------|
| 1 | Buat repo GitHub baru, undang kolaborator |
| 2 | Setiap orang `git clone` repository tersebut |
| 3 | Buat branch masing-masing: `git checkout -b <nama-branch>` |
| 4 | Kerjakan perubahan, lalu `git add .` dan `git commit -m "pesan"` |
| 5 | Push branch ke remote: `git push origin <nama-branch>` |
| 6 | Buat **Pull Request** di GitHub, minta review, lalu merge |
| 7 | Simulasi selesai — semua perubahan berhasil digabungkan ke `main` |