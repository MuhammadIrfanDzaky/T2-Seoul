# TypeScript Foundation in Next.js

![REVO Logo](revo-logo.png)

## Why Use TypeScript with Next.js?

TypeScript adds static typing to JavaScript, making large-scale Next.js applications more maintainable, scalable, and less error-prone.

---

## Benefits of Using TypeScript in Next.js

- **Error Reduction**: Detects type-related issues early, leading to a more robust codebase.
- **Clear Contracts**: Defining types for props and state clarifies component interactions.
- **Rich IDE Support**: Modern editors provide better tooling with TypeScript, enhancing the coding experience.

---

## Setting Up TypeScript in Next.js

### Using `create-next-app`

```bash
npx create-next-app@latest --ts
```

### For Existing Projects

Install TypeScript and types:

```bash
npm install --save-dev typescript @types/react @types/node
```

Create `tsconfig.json`:

```bash
touch tsconfig.json
```

### Understanding `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "strict": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

---

## The TS-to-Next.js Bridge

### The Core Paradigm Shift: From Runtime to Compile-Time

TypeScript is a compile-time tool. While JS catches bugs when the user runs the code, TS catches them while you write. In production, all TS syntax is erased.

**Mental Model:**

- **JavaScript** catches bugs when the user *runs* the code.
- **TypeScript** catches bugs while you are *writing* code inside the editor.

### Comparison Table

























| Feature / Context | JavaScript Approach | TypeScript Approach (Next.js) |
|---|---|---|
| Component Props | Accepted dynamically as parameters (`props`) | Strongly structured via an `interface` or `type` |
| Dynamic Routes | Destructured blindly from `params` | Typed strictly to match the dynamic folder name |
| Data Fetching | Assumed data structure from `await res.json()` | Explicitly mapped to an object type interface |

---

## `interface` vs `type`

`interface` and `type` (Type Alias) is one of the most common points of confusion. In modern TypeScript, they can achieve the exact same result about 90% of the time, but they have distinct technical boundaries and behavioral differences.

### When to Use `type` (The Versatile Tool)

Use `type` when you are doing anything other than describing a standard object structure:

- **Union Types** (The Next.js Must-Have)
- **Utility & Intersection Types**

### When to Use `interface` (The Object Blueprint)

An `interface` is strictly designed to describe the shape of an object or a class:

- **Object Shapes** and Next.js Pages
- **Declaration Merging** (Extending on the Fly)


---

## 1. Primitive Types & Inference

In JavaScript, variables can change types dynamically. In TypeScript, we lock them into their distinct identities using basic annotations.

```typescript
// 1. Strings
let developerName: string = "Alex";

// 2. Numbers
let portNumber: number = 3000;
let conversionRate: number = 0.85;

// 3. Booleans
let isProduction: boolean = false;
```

> **The Rule of Inference**: You don't always have to write the type. If you assign a value immediately, TypeScript is smart enough to infer it.

---

## 2. Working with Lists (Arrays)

```typescript
// Approach A: Standard Bracket Syntax (Recommended)
const frameworks: string[] = ["Next.js", "React", "Remix"];
const statusCodes: number[] = [200, 404, 500];

// Approach B: Generic Syntax
const features: Array<string> = ["SEO", "Speed"];
```

---

## 3. Strong-Typing Functions

```typescript
// Regular function
function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

// Arrow function
const checkAdminStatus = (role: string): boolean => {
  return role === "admin";
};
```

### The `void` Return Type

```typescript
function logAction(message: string): void {
  console.log(message);
}
```

### Safety Valves: Optional Properties (`?`) and `unknown`

```typescript
interface UserProfile {
  username: string;
  bio?: string; // Optional
}
```

Replacing `any` with `unknown`:

```typescript
let rawApiResponse: unknown = getDynamicData();

// TypeScript forces verification before use
if (typeof rawApiResponse === "string") {
  console.log(rawApiResponse.toUpperCase());
}
```

---

## Basic Types and Interfaces

### Using `React.FC`

```tsx
import React from 'react';

interface Props {
  title: string;
}

const MyComponent: React.FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};
```

### Common Types in React

- **`ReactNode`**: Anything that can be rendered.
- **`ReactElement`**: A specific component or HTML element.

### More Examples

```typescript
// Primitives
const title: string = "Hello TypeScript";
const count: number = 42;
const isDarkMode: boolean = true;

// Arrays
const tags: string[] = ["nextjs", "typescript", "react"];
const coordinates: number[][] = [[0, 0], [1, 1]];

// Optional properties
const user: { name: string; age?: number } = { name: "Alice" };
```

---

## Advanced Interfaces & Types

```typescript
interface UserCardProps {
  name: string;
  email: string;
  role?: string;
  status: "active" | "inactive";
  lastLogin: Date;
}

type ButtonVariant = "primary" | "secondary" | "danger";

interface AdminUserProps extends UserCardProps {
  permissions: string[];
}
```

---

## Typed Functions

```typescript
function calculateTotal(items: number[], tax: number): number {
  const sum = items.reduce((acc, item) => acc + item, 0);
  return sum * (1 + tax);
}
```

---

## Using TypeScript with React Hooks

### `useState`

```tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

### Managing Array State

```tsx
const ItemList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
```

### Managing Object State

```tsx
const UserProfile: React.FC = () => {
  const [user, setUser] = useState<{ name: string; age: number }>({ name: '', age: 0 });

  const updateName = (name: string) => {
    setUser({ ...user, name });
  };

  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <p>Name: {user.name}, Age: {user.age}</p>
    </div>
  );
};
```

### `useEffect` with Types

```tsx
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/data');
    const result = await response.json();
    setData(result);
  };

  fetchData();
}, []);
```

---

## Converting Next.js Pages to TypeScript

### Steps to Convert Pages

1. **Rename Files**: Change `.js` or `.jsx` to `.ts` or `.tsx`.
2. **Update Imports**: Ensure all imports reflect the new file extensions.
3. **Add Type Annotations**: Use appropriate types for props and state.

### Example of a Typed Next.js Page

```tsx
import type { NextPage } from 'next';

interface Props {
  title: string;
}

const HomePage: NextPage<Props> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default HomePage;
```

### Gradual Conversion Strategy

- Convert files incrementally.
- Use TypeScript and JavaScript files together for a smoother transition.
- Start with critical components and pages.

### Additional Tips

- **Practice with Real Projects**: Build small projects using TypeScript in Next.js.
- **Utilize Resources**: Official documentation, online tutorials, and tools like CodeSandbox.
- **Engage in Code Reviews**: Promote peer reviews to reinforce TypeScript best practices.