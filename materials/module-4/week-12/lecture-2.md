# Next.js Basics: Components, State, and Props

## Components

**Components** are the building blocks of any React or Next.js application.

Think of components like **LEGO pieces** — each one is self-contained, can be reused, and when combined, they form a complete interface.

In Next.js, a component is a JavaScript function that returns a piece of UI:

```jsx
// A simple Next.js component
function Greeting() {
  return <h1>Hello, world!</h1>;
}

export default Greeting;
```

What makes components powerful is that they can be composed together to build complex interfaces from simple, focused pieces.

---

## Types of Components in Next.js

Next.js has two main types of components:

- **Page Components**: These live in the `app` directory (with `page.js` or `page.tsx` files) and represent entire pages of your application.

- **UI Components**: These are reusable pieces that you can place anywhere in your application — buttons, cards, navigation bars, etc.

---

## Virtual DOM

The **Virtual DOM** is a lightweight in-memory copy of the real DOM that React maintains to optimize UI updates.

### How It Works

1. **Update**: When state changes, React updates the Virtual DOM first.
2. **Diff**: It compares the new Virtual DOM with the previous version (called "diffing").
3. **Calculate**: It figures out the minimum set of changes needed.
4. **Apply**: Only those exact changes are applied to the real DOM.

This process — called **reconciliation** — is significantly faster than direct DOM manipulation, because React never touches the browser more than necessary.

---

## React Strict Mode

**React Strict Mode** is a development-only tool built into Next.js that acts as a quality guardrail.

- **Exposes Bugs Early**: Mounts, unmounts, and remounts components intentionally to reveal hidden memory leaks and missing cleanup logic.
- **Warns About Deprecated APIs**: Surfaces warnings for outdated React patterns.
- **Ensures Concurrent Rendering Readiness**: Verifies that client components are pure enough to handle advanced features like streaming UI.

> **Note**: Seeing double console logs or duplicated API fetches in development? That's Strict Mode stress-testing your logic — it's expected behavior.

---

## The Single Parent Rule & React Fragments

JSX requires every component to return a **single root element**, because JavaScript functions can only return one value.

The naive fix is wrapping everything in a `<div>`, but this pollutes the DOM and can break CSS layouts (Flexbox/Grid). The correct solution is **React Fragments**.

- `<>` and `</>` are invisible wrappers — they group elements for React but produce **no extra HTML node** in the final output.

```jsx
// Adds an unwanted <div> to the DOM
function ListItems() {
  return (
    <div>
      <li>Item 1</li>
      <li>Item 2</li>
    </div>
  );
}

// No extra node — Fragment disappears in the final HTML
function ListItems() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  );
}
```

---

## State

**State** is a component's **local memory** — data that can change over time and, when updated, triggers a UI re-render.

### State vs. Regular Variables

| | Regular Variable | State Variable |
|---|---|---|
| Survives re-renders? | No — resets every render | Yes — persists across renders |
| Triggers UI update? | No | Yes |
| How to update? | Direct assignment | Setter function |

> **Key Takeaway**: Use state when you need the UI to reflect a change. Use regular variables for data only needed within one render cycle.

### `useState` Hook

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial value: 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

`useState` returns an array of two items: the **current value** and a **setter function**. Calling the setter with a new value updates the state and schedules a re-render.

---

## Props

**Props** are how a parent component passes data down to a child component.

- **Purpose**: Make components reusable by accepting dynamic data instead of hardcoding values.
- **Direction**: One-way — parent → child only.
- **Immutability**: A component must never modify its own props.

```jsx
// Reusable Button component that accepts `label` and `color` props
function Button({ label, color }) {
  return <button style={{ background: color }}>{label}</button>;
}

// Three different buttons from the same component
function App() {
  return (
    <div>
      <Button label="Submit" color="green" />
      <Button label="Cancel" color="red" />
      <Button label="Maybe"  color="gray"  />
    </div>
  );
}
```