# Panduan Lengkap: JavaScript Essentials

---

## 1. JavaScript Essentials

**JavaScript Variables**

- A variable is a **"named storage"** for value or data.
- We can use variables to store any kind of supported data.

**Penjelasan tambahan singkat:** Variabel di JavaScript seperti kotak berlabel yang bisa menyimpan data apa saja.

---

## 2. Variable Declaration

**Variable declaration**

Cara membuat variabel di JavaScript:

```javascript
var variableName = 'variableValue';
```

**Penjelasan:**  
To create a variable in JavaScript, use either the `var`, `let`, or `const` keyword. (Kita pakai `var` dulu untuk contoh dasar).

---

## 3. var, let, dan const

### var

- `var` was traditionally used to declare variables before `let` and `const`.
- Variables declared with `var` are function-scoped.
- `var` variables are hoisted (dipindah ke atas scope saat kompilasi).
- Bisa di-redeclare dan di-reassign.

**Contoh:**

```javascript
function example() {
  if (true) {
    var x = 10;
    console.log(x); // Outputs 10
  }
  console.log(x); // Outputs 10 (masih bisa diakses di luar block)
}
```

### let

- Diperkenalkan di ES6 untuk mengatasi masalah `var`.
- Block-scoped (hanya berlaku di dalam `{}`).
- Hoisted tapi tidak diinisialisasi sampai baris kode dijalankan.
- Bisa di-reassign, tapi tidak bisa di-redeclare di scope yang sama.

**Contoh:**

```javascript
function example() {
  if (true) {
    let y = 20;
    console.log(y); // Outputs 20
  }
  // console.log(y); // Error: y is not defined
}
```

### const

- Digunakan untuk variabel yang tidak boleh diubah nilainya setelah diinisialisasi.
- Block-scoped seperti `let`.
- Harus diinisialisasi saat deklarasi.
- Tidak bisa di-reassign atau di-redeclare.

**Contoh:**

```javascript
function example() {
  const z = 30;
  // z = 40;           // Error: Assignment to a constant variable
  // const z = 40;     // Error: Identifier 'z' has already been declared
}
```

**Penjelasan tambahan singkat:** Gunakan `const` sebanyak mungkin, `let` kalau butuh nilai yang berubah, dan hindari `var` di kode modern.

---

## 4. Variable Naming

Variable Naming adalah bagian penting agar kode mudah dibaca dan dirawat.

**Best Practices:**

**Descriptive and Meaningful:**
- Pilih nama yang jelas menggambarkan isi variabel.
- Hindari nama 1 huruf (kecuali counter loop).

```javascript
var clr = 'blue';     // don't
var color = 'blue';   // please do
```

**Camel Case (standar JavaScript):**

```javascript
var userName = 'John';     // use this
var user_name = 'John';    // avoid this
```

**Avoid Reserved Keywords:**

```javascript
var var = 'var'; // error
```

**Be Consistent:**

```javascript
// Good
var firstName = 'John';
var lastName  = 'John Doe';

// Bad
var firstName = 'John';
var lName     = 'Doe';
```

**Use Intention-Revealing Names:**

```javascript
var firstName = 'John';   // clear enough
var lName     = 'Doe';    // not clear what lName is
```

**Avoid Acronyms and Abbreviations:**

```javascript
var itemCount = 10;   // Clear
var itemCnt   = 10;   // Not Clear what Cnt means
```

**Use Plural for Collections:**

```javascript
// Good
var usernames = ['username1', 'username2'];

// Bad
var username = ['username1', 'username2'];
```

**Penjelasan tambahan singkat:** Nama variabel yang baik = kode yang mudah dibaca oleh orang lain (atau diri sendiri di masa depan).

---

## 5. Variable Good Practices

### Uppercase Constants

Gunakan huruf besar untuk konstanta yang nilainya sudah diketahui sebelum program berjalan.

```javascript
var COLOR_RED   = '#F00';
var COLOR_GREEN = '#0F0';

var pickedColor = COLOR_RED;
```

**Why?**
- Lebih mudah diingat daripada `#F00`.
- Lebih aman dari typo.
- Lebih bermakna saat dibaca.

JANGAN lakukan ini:

```javascript
var pickedColor = '#F00';
```

### Hindari Magic Numbers / Magic Words

Selalu simpan hasil perhitungan ke variabel yang bermakna.

**Contoh baik:**

```javascript
var number = 20;
var isEven = 20 % 2 === 0;

var height = 180;
var isTall = height > 80;
```

JANGAN lakukan ini:

```javascript
var isEven = 20 % 2 === 0;                       // no magic number
var isTall = 180 > 80;                           // no magic number
var isYellowTallBuilding = 180 > 80 && 'yellow'; // no magic word
```

**Penjelasan tambahan singkat:** Magic number membuat kode sulit dibaca dan dimodifikasi.

---

## 6. JavaScript Data Types

JavaScript memiliki beberapa tipe data yang dibagi menjadi dua kelompok utama:

- Primitive data types
- Object (reference) data types

---

## 7. Primitive Data Types

**Number:**  
Mewakili nilai numerik (integer atau floating-point).

```javascript
var integerNumber      = 5;
var floatingPointNumber = 3.14;
```

**String:**  
Teks yang diapit single atau double quote.

```javascript
var greeting = 'Hello';
var name     = 'John';
```

**Boolean:**  
Hanya `true` atau `false`.

```javascript
var isTrue  = true;
var isFalse = false;
```

**Undefined:**  
Variabel yang dideklarasikan tapi belum diberi nilai.

```javascript
var undefinedVariable; // undefined
```

**Null:**  
Mewakili ketiadaan nilai secara sengaja.

```javascript
var nullValue = null;
```

**Symbol (ES6):**  
Unique and immutable identifier.

```javascript
var symbol = Symbol("IdSymbol");
```

> **Catatan penting:** JavaScript adalah *dynamically typed* — tipe data ditentukan saat runtime.

**Penjelasan tambahan singkat:** Primitive bersifat immutable (kecuali object).

---

## 8. Object Data Types

**Object:**  
Kumpulan key-value pairs. Bisa menyimpan berbagai tipe data termasuk object lain.

```javascript
var person = {
  nameVariable: 'dataTypeVariable'
};

// Contoh nyata
var person = {
  name : 'John',
  age  : 20
};
```

---

## 9. Array Data Types

**Array:**  
Kumpulan nilai yang terurut. Elemen bisa bermacam-macam tipe (termasuk array lain).

```javascript
var arrayNumber    = [1, 2, 3, 4];
var arrayString    = ['1', '2', '3', '4'];
var arrayBoolean   = [true, false];
var arrayUndefined = [undefined, undefined];
var emptyArray     = [];

// Array of Objects
var personJohn  = { name: 'John',  age: 20 };
var personClara = { name: 'Clara', age: 20 };

var arrayOfObjectsPerson = [personJohn, personClara];
```

---

## 10. Functions

**Function:**  
Blok kode yang bisa digunakan ulang. Bisa disimpan ke variabel, dikirim sebagai argumen, atau dikembalikan dari function lain.

```javascript
function add(number1, number2) {
  return number1 + number2;
}

add(1, 2);                    // result: 3

var functionVariable = add;
functionVariable(1, 2);       // result: 3
```

---

## 11. Variable Checking dengan typeof Operator

### typeof Operator

Mengembalikan tipe data dari sebuah nilai. Sangat berguna untuk pengecekan cepat.

**Contoh penggunaan:**

```javascript
console.log('add : ',                     typeof(add));
console.log('personJohn : ',              typeof(personJohn));
console.log('arrayNumber typeof : ',      typeof(arrayNumber));
console.log('arrayNumber Array.isArray: ', Array.isArray(arrayNumber));
console.log('color : ',                   typeof(color));
```

**Output contoh:**

```
add : function
personJohn : object
arrayNumber typeof : object
arrayNumber Array.isArray: true
color : string
```

**Penjelasan tambahan singkat:** `typeof` membantu debugging dan menulis kode yang lebih aman saat bekerja dengan tipe data yang berbeda.
