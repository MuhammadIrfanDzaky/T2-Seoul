# TypeScript Basics

## Introduction to TypeScript

- TypeScript is a programming language that extends JavaScript by adding static types to the language.
- TypeScript is a **superset of JavaScript**, which means that any valid JavaScript code is also valid TypeScript code.
- However, TypeScript introduces additional features, including static typing, interfaces, and advanced tooling support, to enhance the development experience and improve code quality.

***

## TypeScript Fun Fact

- TypeScript is heavily used at companies like **Microsoft, Google, Airbnb, and Stripe**.
- In recent developer surveys (like Stack Overflow), TypeScript consistently ranks among the **most loved and wanted** languages.
- Learning TypeScript is not "extra effort" — it's **industry baseline** now.

***

## TypeScript vs JavaScript

TypeScript and JavaScript are both programming languages, but they have key differences in terms of features, use cases, and how they are used in the development process.

### 1. Type System

- **JavaScript**: Dynamically typed — variable types are determined at runtime. This flexibility allows for more concise and flexible code but can lead to runtime errors due to type mismatches.
- **TypeScript**: Statically typed — variable types are checked at compile-time. TypeScript allows developers to define the types of variables, function parameters, and return types, catching type-related errors early.

### 2. Code Structure

- **JavaScript**: A scripting language that follows the ECMAScript standard. It has a more relaxed syntax and is generally less strict in terms of code organization.
- **TypeScript**: A superset of JavaScript — any valid JavaScript code is also valid TypeScript. TypeScript adds interfaces, enums, and decorators, encouraging a more structured and object-oriented approach.

### 3. Tooling

- **JavaScript**: Development tools are generally less sophisticated. While modern IDEs provide autocompletion and debugging, JavaScript lacks comprehensive static analysis.
- **TypeScript**: Comes with enhanced tooling support. IDEs like VS Code provide intelligent code completion, type checking, and advanced refactoring options.

### 4. Compatibility

- **JavaScript**: Supported in all browsers and can be executed on any JavaScript runtime.
- **TypeScript**: Must be **transpiled to JavaScript** before running in a browser. TypeScript code can coexist with JavaScript code, allowing for gradual migration.

### 5. Use Cases

- **JavaScript**: Widely used for web development (client-side and server-side with Node.js), mobile apps (React Native), game development, and more.
- **TypeScript**: Commonly used in large-scale applications where static typing and code organization are crucial. Widely used in frameworks like **Angular**, **NestJS**, and others.

> **Note:** The choice between TypeScript and JavaScript often depends on project requirements and team preferences. JavaScript suits smaller or more flexible projects, while TypeScript excels in large-scale applications.

***

## Why Use TypeScript?

- **Static Typing**: Catches many common errors at compile-time, leading to improved code reliability.
- **Code Maintainability**: Encourages a structured coding style with features like interfaces, making code more organized.
- **Tooling and IDE Support**: Advanced autocompletion and type checking enhance the development experience in modern IDEs.
- **Early Error Detection**: The TypeScript compiler catches errors early in development, reducing bugs and improving overall code quality.
- **Compatibility and Collaboration**: Compatible with existing JavaScript code, making it easy to adopt gradually. Promotes better collaboration in teams and provides a stronger ecosystem with popular frameworks and libraries.

***

## TypeScript Nature and Syntax

TypeScript sits within the JavaScript layer of a web application. A typical web request flow looks like:

```
User → Internet → HTTPS/HTTP → Website
                                  ├── HTML & CSS (View)
                                  └── JavaScript / TypeScript (Logic)
                                            ├── String
                                            ├── Array
                                            ├── ES6
                                            └── JavaScript Methods
```

***

## Installation: TypeScript

To install TypeScript, use the Node Package Manager (npm) if you have Node.js installed.

### Steps

1. **Install Node.js and npm**
   Before installing TypeScript, ensure Node.js and npm are installed. Download from [nodejs.org](https://nodejs.org).

2. **Open a Terminal or Command Prompt**

3. **Install TypeScript using npm**
   ```bash
   npm install -g typescript
   ```
   The `-g` flag installs TypeScript globally, making it available as a command-line tool.

4. **Verify the Installation**
   ```bash
   tsc --version
   ```
   This should print the installed TypeScript version.

> Now you can use the `tsc` (TypeScript Compiler) command to compile `.ts` files into `.js` files. VS Code provides excellent TypeScript support out of the box.

***

## Compiling TypeScript

1. **Create a TypeScript file**: Create a `.ts` file with your TypeScript code (e.g., `script.ts`).

2. **Compile TypeScript to JavaScript**: Run the TypeScript compiler:
   ```bash
   tsc script.ts
   ```
   This generates a corresponding `script.js` file in the same directory.

3. **After compiling**, the `.js` file contains the compiled JavaScript output from the `.ts` source.

***

## Types Annotations

TypeScript employs **type annotations** to precisely define the types of identifiers such as variables, functions, and objects.

The syntax involves placing a colon (`:`) followed by the desired type after the identifier:

```ts
let variableName: type;
let variableName: type = value;
const constantName: type = value;
```

**Example:**

```ts
let counter: number;

counter = 1;       // OK
counter = "RevoU"; // compile error: Type 'string' is not assignable to type 'number'
```

You can also annotate and initialize a variable in a single statement:

```ts
let name: string = 'Yuhuu';
let age: number = 25;
let active: boolean = true;
```

> TypeScript will raise a compile-time error if you try to assign an incompatible type to an annotated variable (`ts2322`).

***

## Type Inference vs. Type Annotations

| Type Inference | Type Annotations |
|---|---|
| TypeScript **guesses** the type | You **explicitly tell** TypeScript the type |

***

## Types Inference

**Type inference** describes where and how TypeScript infers types when you don't explicitly annotate them.

When you declare a variable without a type annotation but with an initial value, TypeScript automatically infers the type:

```ts
let number = 0;
```

This is equivalent to:

```ts
let number: number = 0;
```

> TypeScript infers the type from the assigned value. If you later try to assign a value of a different type, TypeScript will raise an error.

***

## Number

The `number` type covers decimal, binary, hexadecimal, and octal numbers.

```ts
let counter: number = 0;
let binary: number = 0B010;
let hexadecimal: number = 0XA0XA;
let octal: number = 0o10;
```

For very large integers, use `bigint`:

```ts
let big: bigint = 9007199254740991n;
```

> `bigint` is a separate primitive type — it cannot be mixed with `number` in arithmetic operations without explicit conversion.

***

## String

TypeScript uses either double quotes (`"`) or single quotes (`'`) to enclose string literals, similar to JavaScript.

TypeScript also supports **template strings** using backticks (`` ` ``) for multi-line strings and string interpolation:

```ts
let firstName: string = 'Peter';
let title: string = "Full Snack Developer";
let description = \`I love coding and snack\`;

let profile: string = \`I'm ${firstName}. I'm a ${title}\`;
```

***

## Boolean

The `boolean` type can hold one of two values: `true` or `false`. It is one of the primitive types in TypeScript.

```ts
let isLoading: boolean;
isLoading = true;
// after a while...
isLoading = false;
```

> Booleans are commonly used for flags, toggles, and conditional logic in applications.

***

## Objects

The TypeScript `object` type represents all values that are **not primitive types** (i.e., not `number`, `string`, `boolean`, `bigint`, `symbol`, `null`, or `undefined`).

You can declare and assign an object separately:

```ts
let employee: {
  name: string;
  age: number
};

employee = {
  name: "Peter Parker",
  age: 17
}
```

Or combine both the type annotation and initialization in a single statement:

```ts
let employee: {
  name: string;
  age: number
} = {
  name: "Peter Parker",
  age: 17
}
```

***

## Arrays

In TypeScript, an array is a **sequential collection of data elements**. To define an array that stores values of a particular type:

```ts
let arrayName: type[];

let names: string[] = ['Mary', 'Jane', 'Peter', 'Parker', 'May', "Eddy", "Brooke"];
```

You can still use array methods like `push()`:

```ts
names.push('Harry Osborn')
```

Once you define an array of a specific type, TypeScript will **prevent you from adding incompatible values**:

```ts
names.push(0)
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

To store mixed types, use a **union type**:

```ts
let names: (string | number)[];
names = ['JavaScript', 100, 'RevoU', 40];
```

***

## Tuples

A **tuple** works like an array with some additional considerations:

- The number of elements in the tuple is **fixed**.
- The types of elements are **known**, and need not be the same.

```ts
let skill: [string, number];
skill = ['Learn', 99];
```

- The **order of values** in a tuple is important.
- If you change the order of values, TypeScript will throw an error:

```ts
let skill: [string, number];
skill = [99, 'Learn']; // Error: Type 'number' is not assignable to type 'string'
```

> Tuples are useful when you want a fixed-structure array, like representing a `[key, value]` pair or a `[x, y]` coordinate.

***

## Any

Occasionally, there might be situations where you need to assign a value to a variable, but you're unsure of its type during the development stage. This unknown value could originate from an external API or user input.

To bypass type checking and permit the value to pass through compile-time checks, you can use the `any` type. By using `any`, you can assign a value of any type to a variable, allowing for greater flexibility:

```ts
// json may come from a third-party API
const json = \`{"latitude": 6.1754° S, "longitude": 106.8272° E}\`;

// parse JSON to find location
const currentLocation = JSON.parse(json)
console.log(currentLocation);
```

> **Use `any` sparingly.** Overusing it defeats the purpose of TypeScript's type safety. For unknown external data shapes, prefer `unknown` as a safer alternative — it still requires type narrowing before use.

***

## Union

Sometimes you will encounter a program that expects a parameter or result that is either a `number` or a `string`. TypeScript handles this with a **union type**, using the `|` operator:

```ts
let result: number | string;
result = 100;     // OK
result = 'Haloo'; // also OK
result = false;   // Error: a boolean value, not OK
```

> Union types are also commonly used with arrays: `(string | number)[]`, and in function return types where a function might return different types depending on conditions.

***

## Any (Why to Avoid It)

Using the `any` type in TypeScript should be minimized due to the following reasons:

- **Type Safety**: `any` bypasses type checking, compromising the benefits of TypeScript's strong type system and increasing the likelihood of runtime errors.
- **Compiler Benefits**: `any` hinders the usefulness of TypeScript's compiler features, such as autocompletion, error detection, and refactoring support.
- **Debugging Challenges**: Tracking down issues related to type mismatches becomes more difficult, as the lack of type information complicates the debugging process.

***

## Function

In TypeScript, functions serve as fundamental components for creating code that is easy to read, maintain, and reuse. Similar to JavaScript, the `function` keyword is used to declare a function:

```ts
function functionName(parameter: type, parameter: type, ...): returnType {
  // do something
}

// example
function add(a: number, b: number): number {
  return a + b;
}
```

In the example above, the `add()` function takes two parameters of type `number` and returns a `number`.

When invoking `add()`, the TypeScript compiler verifies that each argument is indeed a number. The following code will produce an error since it attempts to pass two strings instead:

```ts
let sum = add('10', '20'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

The `: number` after the parentheses specifies the return type. When a function has a designated return type, the TypeScript compiler examines each `return` statement to ensure the returned value aligns with the specified type.

***

## Function Inference

When the return type is **not explicitly annotated**, TypeScript will attempt to deduce a suitable type through inference:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

In this example, TypeScript infers that the return type of `add()` is `number`, which is what we expect.

However, if a function has different branches that return different types, TypeScript might infer a **union type** or the `any` type.

> It's good practice to always annotate the return type of public/exported functions explicitly. This makes intent clear and prevents accidental type widening.

***

## Void Function

If a function does not return a value, use the `void` type as the return type. The `void` keyword indicates that the function doesn't return any value:

```ts
function lowerCase(message: string): void {
  console.log(message.toLowerCase());
}
```

The usage of `void` within the function prevents any value from being returned and restricts the calling code from assigning the function's result to a variable.

***

## Function Optional Parameters

In JavaScript, it is possible to call a function without providing any arguments, even if the function has defined parameters — JavaScript inherently supports optional parameters.

However, TypeScript operates differently. The TypeScript compiler examines every function call and generates an error in two scenarios:

- The number of arguments provided **differs** from the number of parameters defined in the function.
- The types of the arguments are **incompatible** with the types of the function parameters.

To make a parameter optional, add a `?` after its name:

```ts
function add(a: number, b: number, c?: number): number {
  if (typeof c !== null) {
    return a + b + c;
  }
  return a + b;
}
```

The parameter `c` is optional because it has a `?` after its name.

> Optional parameters must always come **after** required parameters. You cannot have a required parameter after an optional one.

***

## Function Default Parameters

JavaScript supported default parameters, and TypeScript works the same way — just with type annotations added:

```ts
// JavaScript
function finalPricetJS(price, discount = 0) {
  return price * (1 - discount);
}

// TypeScript
function finalPriceTS(price: number, discount: number = 0): number {
  return price * (1 - discount);
}

console.log(finalPricetJS(100)); // 95
console.log(finalPriceTS(100));  // 95
```

> A parameter with a default value is implicitly optional — you don't need to add `?` to it. TypeScript infers the parameter type from the default value if no explicit type annotation is given.

***

## Function Rest Parameters

In TypeScript, a **rest parameter** lets a function accept any number of arguments of a specific type. Rules for rest parameters:

- A function can have **only one** rest parameter.
- The rest parameter should be the **last parameter** in the function.
- The rest parameter is declared by putting three dots (`...`) before its name and using an array type.

```ts
function fn(...rest: type[]) {
  // Do Something
}
```

**Example:**

```ts
function totalNum(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => total += num);
  return total;
}

console.log(totalNum());        // 0
console.log(totalNum(10, 20));  // 30
console.log(totalNum(10, 20, 30)); // 60
```

> Rest parameters are different from the JavaScript `arguments` object — they are a true array, so all array methods like `forEach`, `map`, `reduce` work on them directly.