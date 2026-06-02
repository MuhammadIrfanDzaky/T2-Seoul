# Asynchronous Programming & useEffect

## What is Asynchronous Programming?

In standard (synchronous) programming, code executes one step at a time. If a task takes a long time — like fetching data from a server — everything else freezes until it finishes.

**Asynchronous programming** solves this by allowing long-running tasks to run in the background while the rest of the app continues normally.

### The Kitchen Analogy

- **Synchronous**: You put bread in the toaster, then stand still staring at it until it pops. Only then do you pour your coffee.
- **Asynchronous**: You put bread in the toaster, and while it's browning you pour coffee and set the table. Multiple things happen at the same time.

In Next.js, async is used primarily for **data fetching** — so the UI stays responsive while data travels from a server or API.

---

## Why We Use It in Next.js

- **Data Fetching**: Ask a server for data and let the user keep scrolling or clicking while it loads.
- **Smooth UI**: The interface stays active — no frozen screens waiting for a response.
- **Efficiency**: Independent tasks (like fetching a profile and loading settings) can run simultaneously.

---

## Key Concepts

### Promises

A **Promise** is a placeholder for a value that hasn't arrived yet. Like a restaurant buzzer — you get it immediately, and it signals that your order (the data) will arrive later, either as a success or a failure.

```js
fetch('https://api.example.com/data')
  .then(res => res.json())           // Resolved: data arrived
  .catch(err => console.error(err)); // Rejected: something went wrong
```

### Async / Await

`async/await` is a cleaner syntax for writing Promise-based code. Instead of chaining `.then()`, the code reads like sequential, easy-to-follow steps:

```js
async function getData() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return data;
}
```

### Sequential vs. Parallel Execution

- **Sequential**: Each task waits for the previous to finish. Use when Task B depends on Task A's result.
- **Parallel**: Independent tasks start simultaneously. Use `Promise.all()` when tasks don't depend on each other.

```js
// Sequential — slower, each waits its turn
const user = await fetchUser(id);
const posts = await fetchPosts(user.id); // needs user.id first

// Parallel — faster, both start at the same time
const [user, settings] = await Promise.all([fetchUser(id), fetchSettings(id)]);
```

---

## Side Effects & `useEffect`

### What is a Side Effect?

A **side effect** is anything a component does **outside of rendering UI** — such as:
- Fetching data from an API
- Setting a timer or interval
- Changing the browser tab title
- Subscribing to an external event

These operations can't be placed directly in the component body, because they would run uncontrollably on every render.

### The `useEffect` Hook

`useEffect` lets you run side effects **after** the component has rendered, keeping them isolated from the render cycle.

> **Next.js note**: `useEffect` only runs in the browser. Any component that uses it must have `'use client'` at the top of the file.

```js
useEffect(effect, deps)
```

- **`effect`**: The function containing your side effect logic.
- **`deps`**: Dependency array — controls when the effect re-runs.

```jsx
'use client';

import { useEffect } from 'react';

export default function MyComponent() {
  useEffect(() => {
    console.log('Component mounted!');
  }, []); // Empty array = run once on mount

  return <div>Hello World!</div>;
}
```

### Dependency Array

| Dependency Array | When Effect Runs |
|---|---|
| `[]` | Once — when the component first mounts |
| `[value]` | On mount, and again every time `value` changes |
| *(omitted)* | After every render (usually avoid — can cause infinite loops) |

---

## Fetching Data with `useEffect`

The most common async pattern: fetch data on mount, store it in state, then render it.

```jsx
'use client';

import { useState, useEffect } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Fetch failed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Run once on mount

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

> Note: `useEffect` itself cannot be marked `async`. Define an async function **inside** the effect and call it immediately — as shown above.

---

## Rendering Lists

When rendering an array of items, use `.map()` to transform each item into a JSX element:

```jsx
const fruits = ['Apple', 'Banana', 'Cherry'];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```

### Why `key` is Required

React uses the `key` prop to track each item's identity in a list. Without it, React can't tell what changed when the list updates — and may re-render items incorrectly or inefficiently.

- Use a **unique, stable ID** (e.g., `key={item.id}` from a database) whenever possible.
- Avoid using the array index as a key if the list can be filtered, sorted, or have items deleted.

> **Rule of thumb**: If items can be reordered or removed, always use a real ID as the key.