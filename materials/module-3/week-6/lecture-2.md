# Advanced Functions (Fungsi Lanjutan di JavaScript)

## Function (Fungsi)

**Mengapa dan apa itu fungsi?**  
Fungsi adalah blok kode yang reusable yang dirancang untuk melakukan tugas tertentu.

### Mengapa Menggunakan Fungsi?
- **Code Reusability** – Kode bisa digunakan berulang kali
- **Modularity** – Kode terorganisir dalam modul-modul kecil
- **Readability** – Kode lebih mudah dibaca dan dipahami
- **Maintainability** – Lebih mudah dirawat dan diubah

**Struktur Fungsi:**

```javascript
function sum(x, y) {        // Function keyword + Function name
  return x + y;             // Return keyword + Function body
}                           // Arguments (x, y)

let result = sum(4, 5);     // Function Call + Parameters
```

## Function Expressions

Cara mendefinisikan fungsi sebagai ekspresi dan menyimpannya ke dalam variabel.

```javascript
const square = function(x) {
  return x * x;
};

let result = square(3);     // Output: 9
```

## Anonymous Functions

Fungsi yang dibuat tanpa nama formal.

```javascript
let greet = function(name) {
  console.log("Hello, " + name + "!");
};

greet("Alice");             // Output: Hello, Alice!
```

## Recursion (Rekursi)

Fungsi yang memanggil dirinya sendiri untuk menyelesaikan masalah.  
Analogi: Kotak di dalam kotak… di dalam kotak lagi… (You get the idea…)

### Contoh: Faktorial

```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

let result = factorial(5);  // Result: 120
```

### Recursion Example: Countdown

```javascript
function countdown(n) {
  if (n <= 0) {
    return;                     // Base Case
  }
  console.log(n);               // Recursive Case
  countdown(n - 1);
}

countdown(5);
// Output: 5 4 3 2 1
```

### Recursion Example: Unwrap/Unboxing

```javascript
var nestedBox = { containsGift: false, innerBox: { containsGift: true } };

function unwrap(box) {
  if (box.containsGift === true) {
    console.log("Unwrapped the gift!");   // Base Case
    return;
  }
  console.log("Opening another box...");
  unwrap(box.innerBox);                   // Recursive Case
}

unwrap(nestedBox);
```

## Generator Functions

Fungsi yang bisa di-pause dan di-lanjutkan dengan keyword `yield`.

```javascript
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateSequence();
console.log(generator.next().value);  // Output: 1
console.log(generator.next().value);  // Output: 2
```

## Higher-Order Functions

Fungsi yang menerima fungsi lain sebagai argument atau mengembalikan fungsi.

### Contoh 1: operate()

```javascript
function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

let result = operate(3, 4, add);  // Output: 7
```

### Contoh 2: Currying (Function yang mengembalikan function)

```javascript
function adder(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

const sum = adder(5)(10);
console.log(sum(3));   // Output: 18
console.log(sum(8));   // Output: 23
```

### Higher-Order Functions – Function Composition

```javascript
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

const composedFunction = compose(multiplyByThree, addTwo);
const result = composedFunction(5);   // Output: 21

function compose(func1, func2) {
  return function(x) {
    return func1(func2(x));
  };
}
```

## Rest Parameters

Mengumpulkan semua argument yang tersisa menjadi array.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3));  // Output: 6
```

## Closures

Fungsi yang "menutup" variabel dari scope luar, sehingga variabel tersebut tetap bisa diakses meskipun fungsi luar sudah selesai dieksekusi.

### Contoh 1: Counter dengan Closure

```javascript
function outer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

let closureFunc = outer();
closureFunc();  // Output: 1
closureFunc();  // Output: 2
```

### Contoh 2: Outer & Inner Variable

```javascript
function outer() {
  var outerVar = "I am outside!";

  function inner() {
    var innerVar = "I am inside!";
    console.log(outerVar);
    console.log(innerVar);
  }
  return inner;
}

var closureFunction = outer();
closureFunction();
```

## Module Pattern

Cara membuat modul dengan private dan public members menggunakan IIFE.

```javascript
const module = (function() {
  let privateVar = 0;

  function privateFunction() {
    console.log('Private function');
  }

  return {
    publicVar: 10,
    publicFunction: function() {
      console.log('Public function');
    }
  };
})();

console.log(module.publicVar);        // Output: 10
module.publicFunction();              // Output: Public function
```

## IIFE (Immediately Invoked Function Expression)

Fungsi yang langsung dieksekusi saat didefinisikan. Biasanya digunakan untuk menghindari polusi global scope.

```javascript
(function() {
  var localVar = "IIFE Example";
  console.log(localVar);
})();
// localVar tidak bisa diakses di luar sini
```

### Penjelasan Komponen IIFE

- **Encapsulation**: Fungsi dibungkus dalam tanda kurung `( )`
- **Anonymous Function**: Biasanya tanpa nama
- **Invocation**: Diakhiri dengan `()`

### Contoh IIFE dengan setTimeout (Common Bug)

```javascript
var result;

(function() {
  result = [];
  for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      result.push(i);
    }, 0);
  }
})();

console.log(result);  // Output: undefined (karena closure issue)
```

## Latihan Praktik (Exercises)

### 1. Higher Order Functions – Filter and Transform

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const isEven = (num) => num % 2 === 0;
const square = (num) => num * num;

const result = filterAndTransform(numbers, isEven, square);
console.log(result);  // Output: [4, 16, 36]

function filterAndTransform(arr, filterCallback, transformCallback) {
  return arr.filter(filterCallback).map(transformCallback);
}
```

### 2. Higher Order Functions – Sum of Squares

```javascript
const numbers = [1, 2, 3, 4, 5];

const sumOfSquares = calculateSumOfSquares(numbers);
console.log(sumOfSquares);  // Output: 55

const calculateSumOfSquares = function(arr) {
  return arr.reduce(function(sum, num) {
    return sum + num ** 2;
  }, 0);
};
```

### 3. Higher Order Functions – Find Maximum Value

```javascript
const values = [7, 2, 9, 4, 1];

const maxValue = findMaxValue(values);
console.log(maxValue);  // Output: 9

const findMaxValue = function(arr) {
  return arr.reduce(function(max, current) {
    return current > max ? current : max;
  }, arr[0]);
};
```

### 4. Closures – Variable State (Counter)

```javascript
const counter = function() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
};

const increment = counter();
increment();  // Output: 1
increment();  // Output: 2
```

### 5. Closures – Function Factory

```javascript
const functionFactory = function(x) {
  return function(y) {
    return x + y;
  };
};

const add5 = functionFactory(5);
console.log(add5(3));  // Output: 8
```

### 6. IIFE – Calculate Square

```javascript
const square = (function(num) {
  return num * num;
})(5);

console.log(square);  // Output: 25
```

### 7. IIFE – Greet User

```javascript
(function() {
  const userName = prompt("What is your name?");
  console.log(`Hello, ${userName}!`);
})();
```

### 8. Function Expression – Sum

```javascript
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));  // Output: 7
```

### 9. Function Expression – Personalized Greeting

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice");  // Output: Hello, Alice!
```

### 10. Arrow Functions

```javascript
const add = (a, b) => a + b;

const result = add(3, 4);
console.log(result);  // Output: 7
```

### 11. Arrow Functions + IIFE (Greeting)

```javascript
const greeting = ((name) => `Hello, ${name}!`)("Alice");
console.log(greeting);  // Output: Hello, Alice!
```

### 12. Recursive Functions – Factorial (Arrow)

```javascript
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const result = factorial(5);
console.log(result);  // Output: 120
```

### 13. Recursive Functions – Countdown (Arrow)

```javascript
const countdown = (num) => {
  if (num <= 0) {
    return;
  }
  console.log(num);
  countdown(num - 1);
};

countdown(5);
// Output:
// 5
// 4
// 3
// 2
// 1
```

---

> **Catatan Tambahan:**
> - Higher-Order Functions adalah dasar dari functional programming di JavaScript.
> - Closures sangat penting untuk private variables dan state management.
> - IIFE sering digunakan di library lama untuk menghindari global pollution.
> - Arrow Functions (`=>`) lebih ringkas dan tidak memiliki `this` sendiri (lexical this).