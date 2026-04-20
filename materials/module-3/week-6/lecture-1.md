# Node.js, NPM, & Modules

## HTTP (HyperText Transfer Protocol)

HTTP adalah seperti **kurir pengantar** untuk internet.

### Saat kamu mengunjungi sebuah website:
1. Browser kamu meminta informasi  
2. Website mengirimkannya kembali  
3. Kamu bisa melihat website tersebut

> **Peringatan**: HTTP **tidak aman** — seperti mengirim kartu pos yang bisa dibaca siapa saja.

**Aman untuk membaca konten publik**, tapi **jangan pernah** gunakan untuk password atau data pribadi!

**Oleh karena itu kamu butuh HTTPS untuk informasi yang aman.**

## HTTP vs HTTPS

### HTTP (Seperti mengirim kartu pos)
- Tidak aman — siapa saja bisa membaca informasinya
- Seperti mengirim kartu pos biasa melalui pos
- Orang lain bisa melihat dan bahkan mengubah isinya
- Tidak aman untuk informasi pribadi (password, kartu kredit)

### HTTPS (Seperti mengirim surat tertutup)
- Aman — informasi terlindungi
- Seperti mengirim surat di dalam amplop tertutup dengan kunci khusus
- Tidak ada yang bisa membaca atau mengubah isinya
- Aman untuk informasi pribadi
- Kamu tahu aman ketika melihat simbol kunci 🔒 di browser

## Web Browser & Web Protocols

**Web Browser**  
Pengguna berinteraksi dengan browser → browser merender halaman → mengirim request ke server → server mengirim response.

**Web Protocols**  
- **User Request** → **HTTP Request**  
- **Server Response** → **User Display**

## Membuat Website yang Fungsional

Kita sudah membuat website atau web app yang keren dalam beberapa minggu terakhir!

**Tapi bagaimana membuatnya fungsional?**  
Misalnya: menangani data, dan memungkinkan pengguna berkomunikasi satu sama lain.

**Kita butuh HTTP Request ke server.**

## Servers, Databases, dan Web APIs

**Servers**  
Kita butuh server! Kita butuh database!  
Tapi sebelum membahas server dan database, kita perlu membahas **Web APIs** terlebih dahulu.

## Web APIs

**Web API** adalah *Application Programming Interface* untuk Web.  
API adalah cara halaman browser berkomunikasi dengan server.

**Diagram Alur:**

Web app di browser
↓ (Request)
Internet (Cloud)
↓ (Request) → Web Server → API → Database
↑ (Response)
Internet (Cloud)
↑ (Response)
Web app di browser

## Client-Server Communication

**Client-Server Communication**

- Pengguna klik → Browser kirim **HTTP Request** ke Web Server  
- Server proses → kirim **HTTP Response** kembali ke browser  
- Browser tampilkan "Hello, World!"

## HTTP Request & Response

**HTTP Request**  
Sebuah potongan informasi yang dikirimkan client (kamu) ke server.

**HTTP Response**  
Sebuah potongan informasi yang dikirimkan server sebagai balasan sesuai request kamu.

## HTTP Status Codes

| Kode   | Kategori              | Penjelasan |
|--------|-----------------------|----------|
| **1XX** | Informational codes   | Server menerima dan sedang memproses request. |
| **2XX** | Success codes         | Server berhasil menerima, memahami, dan memproses request. |
| **3XX** | Redirection codes     | Server menerima request tapi ada pengalihan ke tempat lain. |
| **4XX** | Client error codes    | Kesalahan dari sisi client (halaman tidak ditemukan, dll). |
| **5XX** | Server error codes    | Client mengirim request yang valid, tapi server gagal memprosesnya. |

## JavaScript Client-Side

**Client-Side JavaScript**

HTML (Content) ←→ CSS (Presentation)
↑
Webpage in Browser
↑
JavaScript (Adds Logic + User Interaction)
↓
Update Styles Dynamically

## JavaScript Server-Side

**Server-Side JavaScript (Node.js Environment)**

Web Browser
↓ request
Chrome V8 Engine
↓
Handle Requests (Control Layer)
↑
Handle Logic (Service Layer)
↑
Handles CRUD (Database Layer)
↔ Database

## Runtime Environment

**Apa itu Runtime Environment?**  
Tempat khusus di mana kode JavaScript kamu dijalankan.

### 1. Browser Runtime (Chrome, Firefox, Safari)
- Setiap browser punya engine JavaScript sendiri
- Contoh: Chrome menggunakan **V8 engine** (sama dengan Node.js)
- Terbaik untuk: membuat website interaktif, menangani klik pengguna, update halaman

### 2. Node.js Runtime
- Menjalankan JavaScript **di luar browser**
- Digunakan untuk: membangun server, command-line tools, backend applications
- Diakses melalui terminal/command prompt
- Kelebihan: file operations, server tasks, koneksi database

## Node.js

**Node.js** adalah open-source JavaScript runtime environment.  
Kita bisa menjalankan JavaScript di luar browser.

> **Penting**: Node.js **bukan** bahasa pemrograman, tapi tetap menggunakan JavaScript sebagai bahasa pemrogramannya.

Node.js bisa berjalan di berbagai perangkat:
- Robot
- Internet of Things
- Smart Watch
- Smart TV
- VR Application

**Instalasi Node.js**:
1. Download manual → [nodejs.org](https://nodejs.org/en/download/)
2. Via Node Version Manager (nvm) → [github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm#installation)

### Cek Instalasi Node.js

```bash
node -v
# v18.12.1
```

### Menjalankan Kode JavaScript dengan Node.js

```javascript
10 + 20
// 30

console.log("Hello World")
// Hello World

const data = [1, 2, 3]
data.forEach(item => console.log(`Hello ${item}`))
// Hello 1
// Hello 2
// Hello 3
```

Menjalankan file JS:

```bash
node index.js
# Hello World!
```

## NPM (Node.js Package Manager)

NPM adalah package manager resmi untuk Node.js.

- NPM sudah terinstal otomatis saat kamu install Node.js
- NPM adalah package manager untuk paket/modul Node.js
- Dikelola oleh perusahaan bernama npm, Inc.

### NPM Commands

```bash
npm --version
# 8.19.2
```

Inisialisasi Project:

```bash
npm init
```

Atau langsung tanpa pertanyaan:

```bash
npm init -y
```

Contoh `package.json` yang dihasilkan:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A brief project description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your Name",
  "license": "ISC"
}
```

### NPM Versioning (Semantic Versioning)

Contoh: `4.7.6`

- **Major Version (4)** → Perubahan besar, bisa break API
- **Minor Version (7)** → Fitur baru, tidak break API
- **Patches (6)** → Bug fixes

Cara install versi tertentu:

```json
"express": "4.1.1"          // exact version
"express": "^4.1.1"         // compatible newer version (caret)
"express": "*"              // latest version
```

### Popular NPM Packages

| Package | Description |
|---------|-------------|
| Express | Fast, minimal web framework untuk membangun API dan web applications. |
| Mongoose | MongoDB object modeling tool untuk Node.js. |
| Lodash | Utility library untuk consistency, customization, dan performance. |
| Axios | Promise-based HTTP client untuk membuat HTTP requests. |
| React | Popular front-end library untuk membangun user interfaces. |
| Dotenv | Load environment variables dari `.env` file ke `process.env`. |
| Nodemon | Automatically restart server saat file berubah (development). |

### Install Package

```bash
# Install dan simpan sebagai dependency
npm install package-name
# atau
npm i package-name

# Install sebagai development dependency
npm install package-name --save-dev
# atau
npm i -D package-name
```

Global install:

```bash
npm install -g nodemon
```

Uninstall:

```bash
npm uninstall package-name
npm uninstall package-name --global
```

> **Catatan penting:**
> - Setelah `npm install`, akan dibuat folder `node_modules`
> - Jangan lupa tambahkan `node_modules` ke `.gitignore`

### package-lock.json

File `package-lock.json` dibuat otomatis saat kamu install package.
Tujuannya: menjamin versi dependency yang konsisten di semua instalasi.

### NPM Scripts

Bagian `scripts` di `package.json` adalah daftar command untuk menjalankan project.

Contoh:

```json
"scripts": {
  "start": "node index.js",
  "test": "test-command",
  "dev": "nodemon index.js"
}
```

Menjalankan:

```bash
npm run start
npm run dev
npm run test
```

## JavaScript Modules

### Apa itu Modules?

JavaScript modules adalah cara mengorganisir kode menjadi komponen yang reusable dan maintainable.
Modules membantu memecah codebase besar menjadi bagian-bagian kecil yang mudah dikelola.

### Mengapa pakai Modules?

- Code separation
- Cleaner code
- Mengurangi konflik nama variabel
- Code reusability
- Encapsulation

Cara kerja di Node.js / modern JS:

- Modules di-import dari file eksternal dengan `require()` atau `import`
- Menggunakan `module.exports` atau `export`

### Export (module.js)

```javascript
var moduleVariable = 'variable';

function helloWorld() {
  return "Hello World";
}

module.exports = { helloWorld, moduleVariable }
```

### Import

```javascript
var { helloWorld } = require("./module");
console.log(helloWorld());
```

### Import Semua

```javascript
var module = require("./module");
console.log(module.helloWorld());
```

## JavaScript Methods

Method adalah function yang terkait dengan sebuah object.
Methods mendefinisikan perilaku object dan dipanggil pada object tersebut.

### String Methods

```javascript
var learningPlatform = 'RevoU';

learningPlatform.length;           // 5
learningPlatform.substring(0,4);   // "Revo"
learningPlatform.toLowerCase();    // "revou"
learningPlatform.toUpperCase();    // "REVOU"
learningPlatform.concat(" Hello!"); // "RevoU Hello!"
```

### String Search

```javascript
learningPlatform.indexOf("Rev");    // 0
learningPlatform.indexOf("Jev");    // -1
learningPlatform.includes("Rev");   // true
learningPlatform.includes("Jev");   // false
```

### Array Methods

```javascript
var shoppingCart = ['Phone', 'Laptop', 'Steam Deck', 'PS5'];

shoppingCart.toString();           // "Phone,Laptop,Steam Deck,PS5"
shoppingCart.pop();                // hapus elemen terakhir
shoppingCart.push('Webcam');       // tambah di akhir
shoppingCart.shift();              // hapus elemen pertama
shoppingCart.unshift('PC');        // tambah di awal
shoppingCart.splice(2, 0, 'VR');   // sisipkan di index 2
```

---

> **Catatan Tambahan** (untuk melengkapi materi):
> - Node.js menggunakan engine V8 yang sama dengan Google Chrome.
> - Selalu gunakan HTTPS di production.
> - `nodemon` sangat berguna saat development (auto restart server).
> - Jangan pernah commit folder `node_modules` ke Git.
> - Untuk project besar, gunakan Express + Mongoose sebagai stack populer Node.js + MongoDB.
