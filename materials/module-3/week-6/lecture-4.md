# Asynchronous Functions (Fungsi Asynchronous di JavaScript)

## Analogi Restoran: Memahami Asynchronous

Bayangkan kamu sedang memesan makanan di restoran:

- **Pelanggan** memesan:  
  **"Pesan 1 Mie ayam dong"** → `order("Mie Ayam")`

- **Koki** menjawab:  
  **"Baik siap, makanan sedang disiapkan ya"** → `New Promise("Mie Ayam")`

- **Beberapa saat kemudian**:
  - **Kasus gagal**: Waiter datang dan bilang  
    **"Maaf, mie ayamnya habis, mau pesan lainya?"** → `reject("Mie Ayam")`
  - **Kasus berhasil**: Waiter datang dengan makanan  
    **"Makanan siapp, selamat menikmati"** → `resolve("Mie Ayam")`

**Intinya**: Asynchronous berarti "tidak harus menunggu" — pesanan dikirim, dapur bekerja di latar belakang, dan hasilnya dikirim nanti (success atau error).

---

## Faktor yang Mempengaruhi Asynchronous Request

**Client Side (Laptop/Kamu)**:
- Internet Connection
- WiFi / Tether policy
- Machine condition

**Server Side (Web Server)**:
- Web security
- Server availability
- Internet protocol mechanism

**Contoh Request**:
```text
Laptop ──→ Internet ──→ https://jsonplaceholder.typicode.com/
```

## Callbacks

Callbacks adalah fungsi yang dikirim sebagai argumen ke fungsi lain.
Biasa digunakan untuk menjalankan kode setelah operasi asynchronous selesai.

### Contoh Callback

```javascript
function fetchData(callback) {
  setTimeout(function() {
    console.log("Data fetched!");
    callback();                    // Jalankan callback setelah selesai
  }, 2000);
}

function processData() {
  console.log("Data processed!");
}

fetchData(processData);
```

### Latihan 1: Callback dengan Perhitungan

Soal: Buat fungsi `calculate` yang menerima dua angka dan callback. Callback dipanggil dengan hasil penjumlahan setelah delay 1 detik.

**Jawaban:**

```javascript
function calculate(a, b, callback) {
  setTimeout(function() {
    const result = a + b;
    callback(result);
  }, 1000);
}

function displayResult(result) {
  console.log("Result is " + result);
}

calculate(5, 7, displayResult); // Output setelah 1 detik: "Result is 12"
```

### Latihan 2: Callback dengan Error Handling

Soal: Ubah `fetchData` agar menerima dua callback — satu untuk sukses, satu untuk error.

**Jawaban:**

```javascript
function fetchData(successCallback, errorCallback) {
  const success = Math.random() < 0.5; // Simulasi random success/error
  setTimeout(function() {
    if (success) {
      console.log("Data fetched successfully!");
      successCallback();
    } else {
      console.error("Error fetching data!");
      errorCallback();
    }
  }, 2000);
}

function onSuccess() {
  console.log("Data processed!");
}

function onError() {
  console.log("Retry or handle the error");
}

fetchData(onSuccess, onError);
```

## Promises

Promises adalah cara yang lebih bersih untuk menangani operasi asynchronous.
Sebuah Promise merepresentasikan nilai yang mungkin tersedia sekarang, nanti, atau tidak sama sekali.

### Struktur Promise

```javascript
function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const success = Math.random() < 0.5;
      if (success) {
        console.log("Data fetched successfully!");
        resolve();           // Sukses
      } else {
        console.error("Error fetching data!");
        reject();            // Gagal
      }
    }, 2000);
  });
}

fetchData()
  .then(function() {
    console.log("Data processed!");
  })
  .catch(function() {
    console.log("Retry or handle the error");
  });
```

### Latihan 3: fetchUser dengan Promise

Soal: Buat fungsi `fetchUser` yang mengembalikan Promise. Promise resolve setelah 1 detik dengan object `{ name: "John Doe" }`.

**Jawaban:**

```javascript
function fetchUser() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({ name: "John Doe" });
    }, 1000);
  });
}

fetchUser().then(function(user) {
  console.log("User fetched: " + user.name);
});
```

### Latihan 4: fetchData dengan Promise + Delay

Soal: Ubah `fetchData` agar mengembalikan Promise yang resolve dengan data setelah 2 detik.

**Jawaban:**

```javascript
function fetchData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("Data fetched successfully!");
      resolve("Fetched data");
    }, 2000);
  });
}

fetchData().then(function(data) {
  console.log("Data processed: " + data);
});
```

## Async/Await

Async/Await adalah *syntactic sugar* di atas Promise.
Membuat kode asynchronous terlihat seperti kode synchronous (lebih mudah dibaca).

### Contoh Async/Await

```javascript
async function fetchData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("Data fetched successfully!");
      resolve("Fetched data");
    }, 2000);
  });
}

async function processData() {
  const data = await fetchData();   // Tunggu sampai Promise selesai
  console.log("Data processed: " + data);
}

processData();
```

### Latihan 5: Async sumNumbers

Soal: Buat `async function sumNumbers` yang menerima dua angka dan mengembalikan hasil penjumlahan setelah delay 1 detik.

**Jawaban:**

```javascript
async function sumNumbers(a, b) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      const result = a + b;
      resolve(result);
    }, 1000);
  });
}

async function displaySum() {
  const result = await sumNumbers(3, 4);
  console.log("Sum is " + result);
}

displaySum();
```

## Use Case dengan Real Data (JSONPlaceholder)

### Menggunakan `.then()`

```javascript
function fetchUsersWithThen() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())           // Convert response ke JSON
    .then(usersInJson => {
      return usersInJson;                        // Return data JSON
    });
}
```

### Menggunakan `async/await` (Lebih Recommended)

```javascript
async function fetchUsers() {
  var fetchedUsers = await fetch('https://jsonplaceholder.typicode.com/users');
  var usersInJson = await fetchedUsers.json();   // Convert response ke JSON
  return usersInJson;                            // Return data JSON
}
```

### Perbandingan `.then()` vs `async/await`

| Pendekatan | Kelebihan | Kekurangan |
|------------|-----------|------------|
| `.then()` | Fleksibel, chainable | Bisa jadi "callback hell" |
| `async/await` | Kode terlihat synchronous, mudah dibaca | Harus di dalam fungsi `async` |

> **Kesimpulan**: Gunakan `async/await` untuk kode yang lebih bersih dan mudah dibaca. `async/await` tetap menggunakan Promise di balik layar.

---

> **Catatan Tambahan:**
> - `async function` selalu mengembalikan Promise.
> - `await` hanya bisa digunakan di dalam fungsi `async`.
> - Error handling di `async/await` menggunakan `try...catch`.
> - Semua contoh di atas bisa langsung dicoba di browser console atau Node.js.