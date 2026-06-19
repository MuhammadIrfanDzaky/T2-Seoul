# 🚀 NEXT.JS 16 ARCHITECTURE & STATE MANAGEMENT CHEATSHEET

Cheatsheet ini membahas reposisi arsitektur Next.js 16 (`proxy.ts`) dan bagaimana data autentikasi tersebut didistribusikan ke dalam aplikasi menggunakan berbagai solusi *State Management*.

---

## 1. Perbandingan: Proxy vs Middleware (Traditional)

Banyak developer terjebak karena mengira `proxy.ts` di Next.js 16 sama persis dengan middleware di Express.js atau versi Next.js lama. Berikut adalah perbedaan mendasarnya:

| Fitur | Proxy (`proxy.ts` - Next.js 16+) | Middleware (Traditional / Express / Next.js Lama) |
| :--- | :--- | :--- |
| **Lokasi Eksekusi** | Berjalan di **Edge Runtime** (V8 Isolation) yang sangat dekat dengan user. | Biasanya berjalan di **Node.js Runtime** (Server penuh). |
| **Fokus Utama** | Aturan jaringan, routing ringan, *redirect*, *rewrite*, dan pemeriksaan *cookie*. | Pemrosesan request berat, manipulasi body, operasi database, *logging* kompleks. |
| **Kecepatan** | **Sangat Cepat (Ultra-low latency)** karena tidak memuat beban berat node_modules. | **Bervariasi**, bisa lambat jika ada operasi I/O atau *database query* di dalamnya. |
| **Akses Database** | **Tidak Bisa** mengakses database secara langsung (Tidak bisa pakai Prisma/Mongoose di sini). | **Bisa** melakukan query database langsung sebelum request diteruskan. |

---

## 2. Kenapa Next.js Move On dari Istilah "Middleware"?

Alasan utama perubahan nama dari `middleware.ts` menjadi `proxy.ts` di Next.js 16 adalah **menyelamatkan developer dari kesalahan arsitektur**.

* **Menghindari *Performance Bottleneck*:** Pada versi lama, banyak developer mencoba memanggil database (misal: `db.user.findUnique()`) di dalam middleware. Karena middleware berjalan di setiap request, hal ini membuat aplikasi menjadi sangat lambat.
* **Kejelasan Batasan Sistem (*Architectural Boundaries*):** Nama "Proxy" mempertegas bahwa tugas file ini hanyalah sebagai **Bouncer (Penjaga Gerbang)**. Bouncer hanya memeriksa ID (Cookie), bukan menginterogasi seluruh riwayat hidup tamu (Database). Jika butuh data berat, itu adalah tugas **App Layer (API Routes / Server Components)**.
* **Kepastian Runtime:** Memisahkan ekspektasi bahwa kode ini tidak berjalan di lingkungan Node.js penuh, melainkan di lingkungan Edge yang terbatas namun instan.

---

## 3. Kelebihan & Kekurangan Masing-Masing

### 🔀 Proxy (`proxy.ts`)
> **Konsep:** Gerbang super cepat yang memeriksa kelayakan request sebelum masuk ke aplikasi.

* **Kelebihan:**
    * **Performance Juara:** Waktu respon (*Time to First Byte*) hampir instan karena berjalan di Edge.
    * **Global Security:** Mengamankan seluruh rute aplikasi (`/dashboard/*`) hanya dengan satu file konfigurasi.
    * **Pemisahan Logika yang Bersih:** Kode routing tidak bercampur dengan kode bisnis aplikasi.
* **Kekurangan:**
    * **Keterbatasan API:** Tidak mendukung semua API Node.js (misalnya, beberapa library enkripsi tua atau *driver* database langsung akan *error* di sini).
    * **Beban Terbatas:** Tidak bisa digunakan untuk operasi komputasi berat.

### ⚙️ Traditional Middleware (App/Express Style)
> **Konsep:** Rangkaian proses pipa (*pipeline*) di server tempat request dimanipulasi secara mendalam.

* **Kelebihan:**
    * **Fleksibilitas Tanpa Batas:** Bisa melakukan apa saja, termasuk transformasi data yang kompleks sebelum mencapai controller.
    * **Full Node.js Power:** Bebas menggunakan library npm apa pun tanpa takut masalah kompatibilitas runtime.
* **Kekurangan:**
    * **Arsitektur Monolitik:** Rentan membuat satu file menjadi sangat panjang dan sulit dimonitor (*god-file*).
    * **Resource Heavy:** Jika tidak dioptimasi, bisa memakan memory server yang besar dan memperlambat *request-response cycle*.

---

## 4. Info Tambahan untuk Student: "The Golden Synchronization"

Bagaimana menghubungkan ilmu **Lecture 1 (Proxy)** dan **Lecture 2 (State Management)**? Ini adalah blueprint interaksi data di aplikasi modern:
```
[User Click Link]
│
▼
🛡️ proxy.ts (Checks Cookie) ──(Valid?)──► 💻 Page Rendered
│                                         │
▼ (Invalid)                               ▼
↪️ Redirect to /login     🔄 useSWR("/api/auth/me")
│
▼
📦 Global State Updated
(UI Changes dynamically)
```

### Pro-Tips untuk State Management Selection:
1. **Jangan Taruh Server State di Zustand/Context:** Data yang berasal dari database (seperti profil user, riwayat transaksi) adalah *Server State*. Gunakan **React Query / SWR**. Biarkan Zustand/Context fokus mengurus *UI State* (seperti `isSidebarOpen`, `currentTheme`).
2. **Kapan Harus Pakai Context API vs Zustand?**
    * Gunakan **Context API** jika datanya jarang berubah (contoh: Tema gelap/terang, preferensi bahasa). Context memicu *re-render* massal jika nilainya berubah.
    * Gunakan **Zustand** jika datanya sering berubah (contoh: Keranjang belanja, posisi koordinat game, form multi-step). Zustand memiliki fitur *selector* yang mencegah *re-render* pada komponen yang tidak peduli dengan perubahan data tersebut.