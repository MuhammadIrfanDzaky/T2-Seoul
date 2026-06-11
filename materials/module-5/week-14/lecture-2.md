# Next.js SSR (Server-Side Rendering)

## Server-side Rendering

## How SSR Implemented - App Router - New Ways

```tsx
// app/posts/[id]/page.tsx
// No need for 'use server' - Server Components run on the server by default

async function getDynamicData() {
  // cache: 'no-store' opts out of caching - runs fresh on every request
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch dynamic data');

  const data = await res.json();
  return { ...data, fetchedAt: new Date().toISOString() };
}

---

## Why Rendering Matters?

**Key Benefits of getServerSideProps:**

- **SEO Optimization**: Search engines receive fully rendered HTML
- **Access to Request Data**: Access to cookies, headers, and other request data
- **Fresh Data**: Always serves the latest data
- **Authentication**: Can check authentication on the server

---

## How SSR Implemented - App Router - New Ways (Page Component)

```tsx
// This is now a Server Component - async by default in App Router
export default async function SSRDynamicPage() {
  const dynamicData = await getDynamicData();

  return (
    <main>
      <h1>{dynamicData.title}</h1>
      <p>{dynamicData.body}</p>
      <small>Fetched at: {dynamicData.fetchedAt}</small>
    </main>
  );
}
```

---

## The Response & Hydration

1. **HTML Delivery**: The server sends the completed HTML to the browser. The user sees the content almost instantly (this is the "First Contentful Paint").

2. **Hydration**: The browser downloads the JavaScript bundle. React "wakes up," attaches event listeners (like clicks or form submits), and takes over the page. This turns the static HTML into a fully interactive application.

---

## SSR Data Fetching

Before the page is rendered, Next.js runs specific server-side code to get your data. Depending on which version of Next.js you are using, this happens in different ways:

- **App Router (Modern)**: You simply fetch data directly inside an **async** Server Component.
- **Pages Router (Legacy)**: You use a special function called **getServerSideProps**.

---

## Best Use Cases:

- Pages that need fresh data on every request
- Pages that require request-time information (cookies, headers)
- Authentication-protected routes

---

## How SSR Implemented - Pages Router - Old Ways

```tsx
// pages/posts/[id].tsx

async function getDynamicData() {
  // cache: 'no-store' ensures this runs on every request
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch dynamic data');

  const data = await res.json();
  return { ...data, fetchedAt: new Date().toISOString() };
}

// Pages Router: data fetching goes in getServerSideProps
export async function getServerSideProps() {
  const dynamicData = await getDynamicData();
  return { props: { dynamicData } };
}
```

---

## Pages Router Component

```tsx
// Component receives data as props - not async
export default function SSRDynamicPage({ dynamicData }) {
  return (
    <main>
      <h1>{dynamicData.title}</h1>
      <p>{dynamicData.body}</p>
      <small>Fetched at: {dynamicData.fetchedAt}</small>
    </main>
  );
}
```

---

## SSR Parallel fetching

**Use Case from SSR Parallel fetching**

In modern web development (especially with frameworks like Next.js or Remix), Server-Side Rendering (SSR) parallel data fetching is all about eliminating **"waterfalls."**

Without parallel fetching, your server waits for one request to finish before starting the next, which makes your page feel **sluggish** or **"stuck"** while loading.

---

## Parallel vs Sequential

**Total time: 400ms**
```js
const user = await getUser();  // Takes 200ms
const posts = await getPosts(); // Starts after 200ms, takes another 200ms
// Total: 400ms
```

**Total time: 200ms**
```js
// Both requests start at the same time
const [user, posts] = await Promise.all([getUser(), getPosts()]);
// Total: ~200ms
```

---

## Parallel Fetching Example

```tsx
// Kick off both fetches at the same time - don't await sequentially
export default async function DashboardPage() {
  const [user, post] = await Promise.all([getUser(), getPost()]);

  return (
    <main>
      <h1>{user.name}</h1>
      <p>{post.title}</p>
    </main>
  );
}
```

---

## Detailed Parallel Functions

```tsx
// app/dashboard/page.tsx - App Router parallel fetching

async function getUser() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/1',
    { cache: 'no-store' }
  );
  await new Promise(r => setTimeout(r, 1000));
  return res.json();
}

async function getPost() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts/2',
    { cache: 'no-store' }
  );
  await new Promise(r => setTimeout(r, 1000));
  return res.json();
}
```

---

## When to avoid Parallel Fetching?

You only avoid parallel fetching if **Request B** depends on data from **Request A**. For example, if you need the `userId` from the first call to even know which posts to fetch, you are forced into a sequential pattern.

---

## SSR Streaming

In Next.js, SSR Streaming is the ability to **break down your page's HTML into smaller chunks** and send them to the browser as soon as they are ready, rather than waiting for the entire page to be generated on the server.

Think of traditional SSR like a **full-course meal** where you have to wait for the appetizer, main course, and dessert to all be cooked before the waiter brings anything to your table.

Streaming is like **tapas**—as soon as the wings are done, they come out; while you eat those, the chef finishes the tacos.

---

## SSR Streaming Example

```tsx
// APP/PAGE.TSX
import { Suspense } from 'react';
import SlowComponent from './SlowComponent';

export default function Page() {
  return (
    <main>
      <h1>Hello!</h1> {/* renders immediately */}

      {/*
        Suspense = the streaming boundary.
        - fallback shows right away while SlowComponent fetches
        - once SlowComponent resolves, it streams in and replaces the fallback
        - the rest of the page is never blocked
      */}
      <Suspense fallback={<p>Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </main>
  );
}
```

---

## Slow Component Example

```tsx
// APP/SLOWCOMPONENT.TSX

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store'
  });
  await delay(2000); // simulates slow data
  return res.json();
}

export default async function SlowComponent() {
  const data = await getData();
  return <p>{data.title}</p>;
}
```

---

## SSR Common Problem: Hydration

**Why this happens:**  
React renders on the server first, sends the HTML, then the client runs the same code to "hydrate" it. If the output differs — like `Math.random()` or `Date.now()` — React panics because the HTML it got from the server doesn't match what it just rendered.

**The rule:**  
Anything that produces a different value on server vs client must run inside `useEffect` — which only runs in the browser, safely after hydration.

**Note:** Same pattern applies to `Date.now()`, `localStorage`, `navigator.userAgent`, etc.

---

**Broken Example (Hydration Mismatch)**

```tsx
// ❌ broken - hydration mismatch
// Math.random() runs on server AND client - produces different values
// React warns: "Text content did not match"

export default function RandomId() {
  return <p>Your ID: {Math.random()}</p>;
}
```

---

**Fixed Example (Server-only)**

```tsx
// ✅ fixed - generate the value on the server only
// crypto.randomUUID() runs once on the server, sent as static HTML
// client receives the same value → no mismatch, no 'use client' needed

export default async function RandomId() {
  const id = crypto.randomUUID(); // stable - runs once, server-side only

  return <p>Your ID: {id}</p>;
}
```

---

## SSR Common Problem: Window / Browser APIs

**Broken Example**

```tsx
// ❌ broken - crashes the server
// window, document, localStorage do NOT exist on the server
// Node.js has no browser APIs - this throws on render

export default function ThemeReader() {
  const theme = localStorage.getItem('theme'); // ReferenceError

  return <p>Theme: {theme}</p>;
}
```

---

**Fixed Example**

```tsx
// ✅ fixed - read localStorage only after mount in the browser
// useEffect never runs on the server, so localStorage is safe inside it

'use client';

import { useState, useEffect } from 'react';

export default function ThemeReader() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // safe - only runs in the browser after hydration
    const saved = localStorage.getItem('theme');
    setTheme(saved ?? 'light');
  }, []);

  if (!theme) return null;
  return <p>Theme: {theme}</p>;
}
```

---

## SSR Common Problem: Window (Summary)

**Why this happens:** SSR runs in Node.js, which has no browser environment. So `window`, `document`, `localStorage`, `navigator` — all undefined. The server crashes before it can even send HTML.

**The rule:** anything browser-only must live inside `useEffect` — which is guaranteed to never run on the server.

**Common things that cause this:**
- `localStorage` / `sessionStorage`
- `window.innerWidth`
- `document.querySelector`
- Some third-party libraries that access `window` on import