# Panduan Lengkap: JavaScript DOM and Events

**Catatan singkat:** Dokumen ini mengubah semua gambar yang diberikan menjadi teks yang rapi dan terstruktur dalam satu file Markdown. Semua teks dan kode di dalam gambar telah diekstrak secara lengkap. Saya menambahkan penjelasan singkat (hanya 1-2 kalimat per bagian utama) agar lebih mudah dipahami tanpa mengubah isi asli.

---

## 1. JavaScript DOM and Events

**What is JavaScript DOM?**

**DOM** = **Document Object Model**

- HTML page is a **Document**
- HTML elements are **Objects**
- HTML tree structure is the **Model**

**Penjelasan tambahan singkat:** DOM adalah representasi HTML sebagai objek JavaScript. Dengan DOM, JavaScript bisa "berbicara" dengan halaman web secara dinamis.

**Visualisasi Web HTML + JavaScript via DOM**

Contoh halaman web (HTML) ↔ JavaScript (melalui DOM):
- JavaScript bisa membuat elemen baru (`document.createElement`)
- Mengubah teks, gambar, atau style
- Menambahkan elemen ke halaman

```javascript
// Contoh kode JavaScript yang memanipulasi DOM
function createElementPoster() {
  var posterDiv = document.createElement("div");
  var wantedText = document.createElement("h1");
  var image = document.createElement("img");
  // ... append ke halaman
}
```

---

## 2. JavaScript DOM Tree

Ketika halaman web dimuat, browser membuat Document Object Model dari halaman tersebut. Model DOM dibangun sebagai pohon objek.

**Struktur DOM Tree:**

```
Document
   └── Root element: <html>
         ├── Element: <head>
         │     └── Element: <title>
         │           └── Text: "My title"
         └── Element: <body>
               ├── Element: <a href="...">
               │     └── Text: "My link"
               └── Element: <h1>
                     └── Text: "My header"
```

**Contoh nyata HTML vs DOM Tree:**

HTML File:

```html
<html>
  <head>
    <title>The title</title>
  </head>
  <body>
    <h1>The title</h1>
    <div>
      <p>A description</p>
      <p>A summary</p>
    </div>
  </body>
</html>
```

DOM Tree:

```
document
└── html
      ├── head
      │     └── title → "The title"
      └── body
            ├── h1  → "The heading"
            └── div
                  ├── p → "A description"
                  └── p → "A summary"
```

**Penjelasan tambahan singkat:** Setiap tag HTML menjadi sebuah objek di dalam pohon DOM. Ini memungkinkan JavaScript untuk mengakses dan mengubah elemen mana pun.

---

## 3. Kemampuan JavaScript DOM

DOM memungkinkan JavaScript untuk membuat HTML yang dinamis:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

**Penjelasan tambahan singkat:** Inilah yang membuat website modern interaktif (tombol yang berubah, form yang validasi otomatis, dll).

---

## 4. JavaScript DOM Feature

**Finding HTML Elements**

Cara paling umum untuk memanipulasi elemen HTML adalah dengan mencarinya terlebih dahulu.

- Finding HTML elements by id
- Finding HTML elements by tag name

**Contoh Finding by Id:**

```javascript
const el = document.getElementById("name");
```

**Contoh Finding by Tag Name:**

```javascript
const el = document.getElementsByTagName("span");
```

---

## 5. Changing HTML Content

Cara termudah mengubah isi elemen adalah menggunakan properti `innerHTML`.

**Contoh:**

```html
<html>
<body>
  <p id="hello">Hello i'm a Software Engineer!</p>

  <!-- JS DOM to change text -->
  <script>
    document.getElementById("hello").innerHTML = "My name is Revo!";
  </script>
</body>
</html>
```

---

## 6. Changing the Value of an Attribute

Kita juga bisa mengubah atribut seperti `src` gambar.

**Contoh:**

```html
<html>
<body>
  <img id="image" src="before.gif" />

  <!-- Change the image from before.gif to after.jpg -->
  <script>
    document.getElementById("image").src = "after.jpg";
  </script>
</body>
</html>
```

---

## 7. Changing HTML Style

DOM memungkinkan kita mengubah CSS secara langsung.

**Syntax:**

```javascript
document.getElementById(id).style.property = new style
```

**Contoh:**

```html
<html>
<body>
  <p id="text">Hello World</p>

  <!-- Change the css from id text to color red -->
  <script>
    document.getElementById("text").style.color = "red";
  </script>
</body>
</html>
```

---

## 8. JavaScript – HTML DOM Methods

- HTML DOM methods adalah actions yang bisa dilakukan pada elemen HTML.
- HTML DOM properties adalah values yang bisa di-set atau diubah.
- Semua elemen HTML di DOM adalah objects.
- Property = nilai yang bisa diambil atau diubah.
- Method = aksi yang bisa dilakukan (add, delete, change, dll).

**Penjelasan tambahan singkat:** Memahami methods dan properties adalah kunci utama menguasai DOM.

---

## 9. What are JavaScript Events?

Events adalah cara JavaScript mendeteksi dan merespons interaksi pengguna atau kejadian lain di halaman web.

**Jenis Events:**

- **Mouse Events:** `click`, `dblclick`, `mouseover`, `mouseout`
- **Keyboard Events:** `keydown`, `keypress`, `keyup`
- **Form Events:** `submit`, `reset`, `focus`, `blur`
- **Window Events:** `load`, `resize`, `scroll`, `unload`

---

## 10. onclick Event

Contoh paling populer: tombol yang diklik.

**Contoh sederhana:**

```html
<html>
<body>
  <button id="myButton">Click Me</button>

  <script>
    document.getElementById("myButton").onclick = function() {
      alert("Button clicked!");
    };
  </script>
</body>
</html>
```

**Cara lain (assign ke function terpisah):**

```html
<button id="btn">Try it</button>
<p id="example">Helloww !!</p>

<script>
  document.getElementById("btn").onclick = displayDate;

  function displayDate() {
    document.getElementById("example").innerHTML = "yes change";
  }
</script>
```

---

## 11. onchange Event

Sering digunakan untuk validasi input secara langsung saat user mengetik.

**Contoh:**

```html
<html>
<body>
  <input type="text" id="input-name" onchange="lowerCase()" />

  <script>
    function lowerCase() {
      const lower = document.getElementById("input-name");
      lower.value = lower.value.toLowerCase();
    }
  </script>
</body>
</html>
```

**Penjelasan tambahan singkat:** `onchange` sangat berguna untuk form real-time (misalnya mengubah huruf menjadi kecil otomatis).
