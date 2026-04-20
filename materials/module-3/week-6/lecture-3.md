# ES6 Syntaxes (ECMAScript 2015)

## Apa itu ES6?

- **ECMA 2015**  
- Standar resmi untuk penulisan JavaScript modern  
- Memberikan banyak manfaat:  
  - **Code writing efficiency** (lebih ringkas)  
  - **Code protection** (lebih aman)  
  - **Code performance** (lebih cepat)

---

## let dan const Declarations

- **`let`** digunakan untuk mendeklarasikan variabel dengan **block scope** dan **bisa di-reassign**.
- **`const`** digunakan untuk mendeklarasikan **konstanta** dengan **block scope**, nilainya **tidak bisa di-reassign**.

### Contoh
```javascript
let num = 10;

if (true) {
  let num = 20;
  console.log(num); // Output: 20 (inner scope)
}

console.log(num);   // Output: 10 (outer scope)

const PI = 3.14;
PI = 4; // Error: Assignment to a constant variable
```

## Template Literals

Memudahkan string interpolation (menyisipkan variabel ke dalam string).
Mendukung multi-line strings.

### Contoh

```javascript
const name = "John";
const age = 25;

// Template literal untuk interpolation
const sentence = `My name is ${name} and I am ${age} years old.`;

// Multi-line string
const multiLineString = `This is
a multi-line
string.`;
```

## Destructuring Assignment

Destructuring memungkinkan kita mengekstrak nilai dari array atau properti dari object ke dalam variabel terpisah dengan cara yang sangat ringkas.

### Contoh

```javascript
const numbers = [1, 2, 3];

// Array destructuring
const [a, b, c] = numbers;

const person = { name: 'Alice', age: 30 };

// Object destructuring
const { name, age } = person;
```

## Spread and Rest Operators (`...`)

- **Spread operator (`...`)** → menyebarkan elemen array/object ke array/object baru.
- **Rest operator (`...`)** → mengumpulkan elemen menjadi satu array/object.

### Contoh

```javascript
// Spread operator
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

// Rest parameter
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

## Arrow Functions (`=>`)

Sintaks yang lebih ringkas untuk menulis fungsi. Tidak memiliki `this` sendiri (lexical this).

### Perbandingan

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

## Enhanced Object Literals

ES6 memperkenalkan beberapa peningkatan pada object literal, termasuk computed property names (key dinamis).

### Contoh Computed Property

```javascript
let propKey = 'foo';

let obj = {
  [propKey]: 'bar',           // key dinamis
  method() {                  // method shorthand
    return 'Hello!';
  }
};
```

## Object Property Shorthand

Cara singkat untuk membuat object ketika nama variabel sama dengan nama properti.

### Contoh

```javascript
let name = "John";
let age = 30;

// Regular way
let person1 = {
  name: name,
  age: age
};

// Shorthand (ES6)
let person2 = { name, age };
```

## Object Enhancements

- **Shorthand property names** → pembuatan object lebih ringkas.
- Object methods bisa ditulis dengan shorthand syntax (tanpa `function` keyword).

### Contoh Lengkap

```javascript
const name = "Bob";
const age = 40;

// Shorthand properties
const person = { name, age };

// Shorthand method
const greeter = {
  greet() {
    console.log('Hello!');
  }
};
```

## Default Parameters

Memberikan nilai default pada parameter fungsi jika tidak dikirimkan argumen.

### Contoh

```javascript
// Default value pada arrow function
const greet = (name = 'Guest') => {
  console.log(`Hello, ${name}!`);
};

const calculateArea = (length = 5, width = 3) => length * width;
```

## OOP Intro (Object-Oriented Programming)

Object-Oriented Programming (OOP) adalah paradigma pemrograman yang mengorganisir kode menjadi *objects* — entitas yang menggabungkan data (properties) dan behavior (methods).

### 6 Pilar Utama OOP

1. Object
2. Encapsulation
3. Polymorphism
4. Inheritance
5. Abstraction
6. Class

## Classes (ES6)

- Class adalah **blueprint** untuk membuat object dengan properti dan method tertentu.
- ES6 memperkenalkan sintaks class yang lebih bersih dan modern (mirip bahasa lain seperti Java/Python).

### Analogi Class vs Objects

















| Class | Objects |
|-------|---------|
| Fruit | Apple, Banana, Mango |
| Car | Volvo, Audi, Toyota |

### Contoh Class & Inheritance

```javascript
// Parent class
class Shape {
  calculateArea() {
    return 0;
  }
}

// Child class (Inheritance)
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}
```

---

> **Catatan Tambahan** (untuk melengkapi materi):
> - ES6 (ECMAScript 2015) adalah versi JavaScript paling penting setelah ES5.
> - Semua fitur di atas sudah didukung di semua browser modern dan Node.js.
> - `let` dan `const` menggantikan `var` karena masalah hoisting dan scope.
> - Arrow functions sangat berguna di callback dan functional programming.
> - Class di ES6 adalah *syntactic sugar* di atas prototype inheritance.