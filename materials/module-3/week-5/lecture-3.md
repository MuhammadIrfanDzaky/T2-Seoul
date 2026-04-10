# Panduan Lengkap: JavaScript Control Flow

---

## 1. JavaScript Control Flow

Control Flow adalah cara mengatur alur eksekusi kode di JavaScript (if-else, loop, function, error handling, dll).

**Code Debugging**

- Programming code might contain **syntax errors**, or **logical errors**.
- Many of these errors are difficult to diagnose. Often, when programming code contains errors, nothing will happen. There are no error messages, and you will get no indications where to search for errors.
- Searching for (and fixing) errors in programming code is called **code debugging**.

**Penjelasan tambahan singkat:** Debugging adalah proses mencari dan memperbaiki bug agar program berjalan sesuai harapan.

---

## 2. Debugging di JavaScript

### So how we debug in JavaScript?

**The `console.log()` Method**

```javascript
a = 5;
b = 6;
c = a + b;
console.log(c);
```

**Cara melihat hasil di Chrome:**

1. Open the browser.
2. From the menu, select "More tools".
3. From tools, choose "Developer tools".
4. Finally, select Console.

**Output contoh:**

```
11
```

**Penjelasan tambahan singkat:** `console.log()` adalah cara paling sederhana dan cepat untuk debugging di JavaScript.

---

## 3. JavaScript Function

**JavaScript Function**

A block of code designed to perform a particular task.

- JavaScript function is executed when "something" invokes it.
- JavaScript function can take "parameter" as an input.
- JavaScript function can have "return" as result / statement to stop executing.
- The main purposes of functions are to avoid code duplication or redundancy, especially if we have a very long code inside the function.

**Penjelasan tambahan singkat:** Function membuat kode lebih reusable dan rapi.

---

## 4. Function Declaration

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

// example
function alertMessage() {
  alert("Hello world!")
}
```

To execute or call them:

```javascript
alertMessage();
// Hello world!

alertMessage();
alertMessage();
alertMessage();
// Hello world!
// Hello world!
// Hello world!
// if you call it 3 times, you will get 3
```

> **Catatan penting:** Remember to always include the parentheses `()` when you intend to call the function after the function is declared.

---

## 5. Function Naming

Functions are actions. So their name is usually a verb.

- Nama harus singkat, akurat, dan deskriptif.
- Mulai dengan prefix verbal (`show`, `set`, `use`, dll).
- Harus ada kesepakatan tim tentang prefix yang digunakan.

**Contoh prefix yang baik:**

- `show...` → `showMessage`, `showName`
- `set...`  → `setName`, `setAge`
- `use...`  → `useState`, `useEffect`

**Rekomendasi:**

```javascript
// Recommended
renderBox()
renderPanel()

// Not recommended
createBox()
makePanel()
```

**Penjelasan tambahan singkat:** Nama function yang baik langsung memberi tahu apa yang dilakukan fungsi tersebut.

---

## 6. Function Parameters

Kita bisa mengirim data ke function menggunakan parameters (juga disebut arguments).

```javascript
function runExample(parameter) {
  console.log(parameter); // Hello
}

const argument = "Hello";
example(argument);
```

**Contoh lengkap:**

```javascript
// params: name, greeting
// arguments: name, greeting
function showMessage(name, greeting) {
  console.log(`${greeting}, ${name}!`)
}

const greeting = "Hello"
const person = {
  name: "Andy"
}

showMessage(person.name, greeting) // Hello, Andy
```

> **Catatan penting:**
> - Urutan parameter harus tepat.
> - Bisa menambahkan sebanyak yang diperlukan, tapi jangan berlebihan (maksimal 1-5 di awal belajar).
> - Jika terlalu banyak, buat function baru.

---

## 7. Function Parameters Default Values

Jika parameter tidak diberikan, nilainya menjadi `undefined`.

**Tanpa default value:**

```javascript
showMessage()   // output: undefined, undefined
```

**Dengan default value (ES6):**

```javascript
function showMessage(name = "Anonymous", greeting = "Hi") {
  console.log(`${greeting}, ${name}`)
}

showMessage() // Hi, Anonymous
```

---

## 8. Function Returning a Value

Function bisa mengembalikan nilai dengan kata kunci `return`.

```javascript
function sumNumbers(numberA, numberB) {
  return numberA + numberB
}

sumNumbers(1, 1)              // will not log anything
console.log(sumNumbers(1, 1)) // will log 2
```

> **Catatan penting:**
> - Saat `return` dijalankan, function langsung berhenti.
> - Nilai return dikirim kembali ke pemanggil.

---

## 9. Arrow Function Expression

Cara lain mendeklarasikan function dengan syntax yang lebih pendek: `() => {}`

```javascript
// Before
const functionName = function() {
  // Function body
}

// After (arrow function)

// Tanpa parameter
const functionName = () => {
  // Function body
}

// Dengan satu parameter
const functionName = (parameter) => {
  // Function body
}

// Tanpa kurung jika satu parameter
const functionName = parameter => {
  // Function body
}
```

**Contoh nyata:**

```javascript
// Without parameter
const logMessageA = () => {
  console.log("Hello world!")
}

// With one parameter
const logMessageB = (text) => {
  console.log(text)
}

// With two parameters
const logMessageC = (text, mark) => {
  console.log(`${text}${mark}`)
}

// One line
const logMessageD    = () => console.log("Hello world!")
const checkCondition = (condition) => condition ? true : false
```

---

## 10. JavaScript Conditional

Kadang kita perlu menjalankan kode berbeda berdasarkan kondisi.

- Kita bisa menggunakan `if else` statement.
- Ada juga conditional (ternary) operator `? :`.

---

## 11. if and else statement

```javascript
const year = prompt('What year is right now?')

if (year == 2023) console.log('You are correct!')
```

**Dengan multiple statements:**

```javascript
if (year == 2023) {
  console.log('You are correct!')
  console.log('You are so smart!')
} else {
  console.log('Sorry, wrong answer!')
}
```

---

## 12. else if clause

```javascript
const year = prompt('What year is right now?')

if (year < 2020) {
  console.log('Too early')
} else if (year > 2020) {
  console.log('Too late')
} else if (year > 2100) {
  console.log('Too far, far away!')
} else if (year == 2020) {
  console.log('Exactly!')
}
```

**Contoh lengkap dengan umur:**

```javascript
const age = prompt('What is your age?')
let message

if (age < 3) {
  message = 'Hey, cute baby!'
} else if (age < 18) {
  message = 'Hello, girl or boy!'
} else if (age < 30) {
  message = 'Hello, woman or man!'
} else if (age < 100) {
  message = 'Greeting, lady or gentleman!'
} else {
  message = 'What an unusual age!'
}

console.log(message)
```

---

## 13. Ternary Operator ? :

Cara singkat untuk if-else.

```javascript
const result = condition ? value1 : value2

const age = prompt('How old are you?')
const accessAllowed = age > 18 ? true : false
console.log(accessAllowed)
```

**Ternary bertingkat:**

```javascript
const age = prompt('What is your age?')
const message =
  age < 3   ? 'Hey, cute baby!'
  : age < 18  ? 'Hello, girl or boy!'
  : age < 30  ? 'Hello, woman or man!'
  : age < 100 ? 'Greeting, lady or gentleman!'
  : 'What an unusual age!'

console.log(message)
```

---

## 14. switch case statement

Switch lebih mudah dibaca saat membandingkan satu nilai dengan banyak kemungkinan.

```javascript
switch (variable) {
  case 'value1':
    // code here
    break

  case 'value2':
    // code here
    break

  default:
    // code here
    break
}
```

**Contoh nyata:**

```javascript
const guess = prompt("What is the number?")

switch (guess) {
  case (guess < 2):
    console.log('Too small')
    break
  case (guess == 2):
    console.log('Exactly!')
    break
  case (guess > 2):
    console.log('Too large')
    break
  default:
    console.log("I don't know such values")
}
```

---

## 15. JavaScript Loop

Kita sering perlu mengulang tindakan atau iterasi.

**Visualisasi Loop (contoh makan):**

```
Start → Hungry → Eat → Are you full? → (No → loop kembali) / (Yes → selesai)
```

**3 jenis loop di JavaScript:**

- `while`     → kondisi dicek sebelum iterasi
- `do...while` → kondisi dicek setelah iterasi
- `for (;;)`  → kondisi dicek sebelum iterasi + pengaturan tambahan

**Penjelasan tambahan singkat:** Loop sangat berguna untuk memproses array, data berulang, atau animasi.

---

## 16. for loop

```javascript
for (begin; condition; step) {
  // loop body
}

for (let number = 0; number < 3; number++) {
  console.log(number);
}
// Output: 0 1 2
```

**Contoh lain dengan break:**

```javascript
let text = ""
let number

for (number = 0; number < 5; number++) {
  if (number === 3) {
    break
  }
  text = "The number is " + number
}

console.log(text)
// the number is 3
```

---

## 17. while loop

```javascript
while (condition) {
  // code
  // so-called "loop body"
}

let number = 0;

while (number < 3) {
  console.log(number);
  number++;
}
// Output: 0 1 2
```

> **Peringatan Infinite Loop:**
> - Jika tidak ada `number++`, loop akan berjalan selamanya.
> - Di browser, gunakan Task Manager / Activity Monitor untuk menghentikan.

---

## 18. do...while loop

Kondisi dicek setelah eksekusi body (minimal dijalankan sekali).

```javascript
do {
  // loop body
} while (condition);

let number = 0;

do {
  console.log(number);
  number++;
} while (number < 3);
// Output: 0 1 2
```

---

## 19. JavaScript Error Handling

- Tidak peduli seberapa hebat kita, program tetap bisa error.
- Error biasanya menghentikan eksekusi script.
- Kita bisa menangkap error dengan `try...catch` agar program tidak crash.

---

## 20. Try, Catch, Finally and Throw

```javascript
try {
  // Block of code to try
} catch(err) {
  // Block of code to handle errors
  throw Error() // your custom errors
} finally {
  // Block always execute code
}
```

**Cara kerjanya:**

1. Kode di `try` dijalankan.
2. Jika tidak ada error → `catch` dilewati.
3. Jika ada error → `catch` dijalankan, variabel `err` berisi detail error.
4. `finally` selalu dijalankan.

**Contoh:**

```javascript
try {
  doSomething()
} catch (error) {
  console.error('Error has occured')
  alert('Sorry, something went wrong')
}
```

**Properti Error Object:**

- `error.message` → pesan error
- `error.name`    → nama error (contoh: `ReferenceError`)
- `error.stack`   → stack trace

```javascript
console.error(error)           // ReferenceError: doSomething is not defined
console.error(error.name)      // ReferenceError
console.error(error.message)   // doSomething is not defined
console.error(error.stack)     // ReferenceError: doSomething is not defined at ...
```

**Penjelasan tambahan singkat:** Error handling membuat aplikasi lebih robust dan user-friendly.
