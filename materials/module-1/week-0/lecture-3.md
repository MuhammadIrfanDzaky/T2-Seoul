# Lecture 3 — Terminal & CLI

---

## 🇬🇧 English

### What is a Terminal?
- Terminal and CLI (*Command Line Interface*) are used together for **faster and more efficient computer navigation**
- The terminal is just the display (UI); the actual command processing is handled by the **Shell**
- Shell is the communication bridge between the terminal and the Operating System

### Terminal vs Shell

| Component | Role | Analogy |
|-----------|------|---------|
| Terminal | Where you type and see results | Doctor's consultation room |
| Shell (bash, PowerShell) | Processes commands | General practitioner |
| Built-in Commands (`cd`, `echo`) | Commands run directly | Light check-up |
| External CLI Programs (`git`, `npm`) | Programs for specific functions | Specialist doctor |
| OS (Operating System) | Executes real system actions | The hospital |

### Popular Shell Applications
- `sh` — the most basic shell
- `bash` — default on Mac & Linux
- `zsh` — more modern than bash
- `fish` — user-friendly and interactive

### Terminal Prompt Symbols
- `$` or `%` → you are a **regular user**
- `#` → you are a **superuser / root / administrator** ⚠️ Be careful — one typo can break your system!
- `~` → symbol for **home folder** (`/Users/yourname` on Mac or `/home/yourname` on Linux)
- `>` → a custom symbol you can set yourself

### Terminal Command Syntax
```
$ <command> <argument>
```
Example:
```bash
$ echo Hello
# Output: Hello
```
> ⚠️ Always use a **space** after the command name. `echoHello` will result in `command not found`.

### Terminal by OS

| OS | Built-in Terminal | Recommended |
|----|-------------------|-------------|
| Linux | Gnome Terminal | Terminator, Alacritty |
| macOS | Terminal | iTerm2, Warp |
| Windows | Command Prompt (cmd) | PowerShell, Git Bash |
| VS Code | Integrated Terminal | Already built-in |

### Files & Folders in Terminal
- Naming in the terminal is **case sensitive** — `File`, `file`, and `FILE` are three different things
- Differentiate files from folders using `/` at the end of folder names:
  - `file.txt` → file
  - `folder/` → folder

### Terminal Command Cheatsheet

| Function | Linux/Mac | Windows CMD |
|----------|-----------|-------------|
| Change directory | `cd` | `cd` / `chdir` |
| List directory contents | `ls` | `dir` |
| Print working directory | `pwd` | `cd` (no args) |
| Create directory | `mkdir` | `mkdir` / `md` |
| Delete file | `rm` | `del` |
| Delete directory | `rm -r` | `rd /s` |
| Copy file | `cp` | `copy` |
| Move / rename | `mv` | `move` / `ren` |
| View file contents | `cat` | `type` |
| Search string in file | `grep` | `find` |
| Clear screen | `clear` | `cls` |
| Show help | `man <cmd>` | `<cmd> /?` |

### Terminal Package Managers

| OS | Package Manager |
|----|----------------|
| macOS | **Homebrew** (`brew`) — most popular |
| Linux Ubuntu | **APT** (`apt` / `apt-get`) |
| Linux Fedora | `rpm` |
| Linux (general) | `snap` |
| Windows | **winget** (built-in Win 10+) or Chocolatey |

**Homebrew (macOS) usage:**
```bash
brew install git                    # install CLI app
brew install --cask google-chrome   # install GUI app
```

**APT (Linux) usage:**
```bash
sudo apt update         # update package list
sudo apt install git    # install app
```

**winget (Windows) usage:**
```bash
winget search git       # search app
winget install git      # install app
```

---

## 🇮🇩 Bahasa Indonesia

### Apa itu Terminal?
- Terminal dan CLI (*Command Line Interface*) digunakan bersama untuk **navigasi komputer yang lebih cepat dan efisien**
- Terminal hanyalah tampilan (UI), yang benar-benar memproses perintah adalah **Shell**
- Shell adalah jembatan komunikasi antara terminal dan Operating System

### Terminal vs Shell

| Komponen | Peran | Analogi |
|----------|-------|---------|
| Terminal | Tempat mengetik dan melihat hasil | Ruang konsultasi dokter |
| Shell (bash, PowerShell) | Memproses perintah dasar | Dokter umum |
| Built-in Commands (`cd`, `echo`) | Perintah yang dijalankan langsung | Pemeriksaan ringan |
| External CLI Programs (`git`, `npm`) | Program khusus fungsi tertentu | Dokter spesialis |
| OS (Operating System) | Menjalankan tindakan nyata di sistem | Rumah sakit |

### Shell Populer
- `sh` — shell paling dasar
- `bash` — default di Mac & Linux
- `zsh` — lebih modern dari bash
- `fish` — user-friendly dan interaktif

### Simbol Prompt Terminal
- `$` atau `%` → kamu adalah **regular user**
- `#` → kamu adalah **superuser / root / administrator** ⚠️ Hati-hati — satu typo bisa merusak sistem!
- `~` → simbol **home folder** (`/Users/namakamu` di Mac atau `/home/namakamu` di Linux)
- `>` → simbol custom yang bisa kamu atur sendiri

### Sintaks Command Terminal
```
$ <command> <argument>
```
Contoh:
```bash
$ echo Hello
# Output: Hello
```
> ⚠️ Selalu gunakan **spasi** setelah nama command. `echoHello` akan menghasilkan `command not found`.

### Terminal di Tiap OS

| OS | Terminal Bawaan | Rekomendasi |
|----|----------------|-------------|
| Linux | Gnome Terminal | Terminator, Alacritty |
| macOS | Terminal | iTerm2, Warp |
| Windows | Command Prompt (cmd) | PowerShell, Git Bash |
| VS Code | Integrated Terminal | Sudah built-in di editor |

### File & Folder di Terminal
- Penamaan di terminal bersifat **case sensitive** — `File`, `file`, dan `FILE` adalah tiga hal yang berbeda
- Bedakan file dan folder dengan tanda `/` di akhir nama folder:
  - `file.txt` → file
  - `folder/` → folder

### Cheatsheet Command Terminal

| Fungsi | Linux/Mac | Windows CMD |
|--------|-----------|-------------|
| Pindah folder | `cd` | `cd` / `chdir` |
| Lihat isi folder | `ls` | `dir` |
| Cek lokasi saat ini | `pwd` | `cd` (tanpa argumen) |
| Buat folder | `mkdir` | `mkdir` / `md` |
| Hapus file | `rm` | `del` |
| Hapus folder | `rm -r` | `rd /s` |
| Salin file | `cp` | `copy` |
| Pindah/rename | `mv` | `move` / `ren` |
| Lihat isi file | `cat` | `type` |
| Cari string dalam file | `grep` | `find` |
| Bersihkan layar | `clear` | `cls` |
| Tampilkan bantuan | `man <cmd>` | `<cmd> /?` |

### Package Manager Terminal

| OS | Package Manager |
|----|----------------|
| macOS | **Homebrew** (`brew`) — paling populer |
| Linux Ubuntu | **APT** (`apt` / `apt-get`) |
| Linux Fedora | `rpm` |
| Linux (umum) | `snap` |
| Windows | **winget** (bawaan Win 10+) atau Chocolatey |

**Contoh Homebrew (macOS):**
```bash
brew install git                    # install CLI app
brew install --cask google-chrome   # install GUI app
```

**Contoh APT (Linux):**
```bash
sudo apt update         # update daftar package
sudo apt install git    # install app
```

**Contoh winget (Windows):**
```bash
winget search git       # cari app
winget install git      # install app
```