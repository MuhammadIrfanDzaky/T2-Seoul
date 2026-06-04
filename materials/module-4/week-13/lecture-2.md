# Next.js Components & Routing

![REVO Logo](revo-logo.png)

**Software Engineering Workshop**

---

## Introduction to Type-Safe Props in Next.js Components

### What are Type-Safe Props?

- Props are the inputs to React components. **Type-safe props** ensure that components receive the correct types of data.

### Benefits:
- Reduces bugs related to incorrect prop types.
- Enhances code maintainability by providing clear contracts.

---

### Defining Type-Safe Props

The `Card` component requires `title` and `description` props, both strings.

```tsx
interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
```

### Best Practices for Defining Props

**Use Interfaces** — Prefer interfaces for defining props due to their extensibility:

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
}
```

**Default Props:**

```tsx
const Card: React.FC<CardProps> = ({
  title,
  description = "No description available",
}) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
```

---

## Next.js Routing

### How Next.js File-Based Routing Works

Next.js uses your folder structure to automatically define your application's routes. Every file created in the `app/` directory becomes a URL automatically — no manual router configuration needed.

### File-Based Routing Map

| Route File | URL Path |
|---|---|
| `app/page.tsx` | `/` |
| `app/about/page.tsx` | `/about` |
| `app/blog/[slug]/page.tsx` | `/blog/:slug` |
| `app/(marketing)/pricing/page.tsx` | `/pricing` |

---

## The `<Link>` Component

Next.js's primary tool for navigation, extending the standard `<a>` element for optimized client-side performance.

- **Client-Side Optimization**: Enables seamless page transitions without full reloads, preserving application state and improving speed.

### Why Use `<Link>` Instead of `<a>`?

In a traditional web app, clicking `<a href="/about">` causes a full page reload. Next.js `<Link>`:

- Intercepts the click and performs client-side navigation.
- Prevents full page reload.
- Preserves global state (shopping cart, user session, etc.).

### Basic Usage

```tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      {/* Static routes */}
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>

      {/* Dynamic route */}
      <Link href="/posts/123">Read Post</Link>
    </nav>
  );
}
```

---

## Using the `useRouter` Hook

> **Important**: Know which router you're using.
> - **App Router** (`app/` directory): `import { useRouter } from 'next/navigation'`
> - **Pages Router** (`pages/` directory): `import { useRouter } from 'next/router'`

```tsx
'use client';

import { useRouter } from 'next/navigation';

export default function LoginButton() {
  const router = useRouter();

  const handleLogin = async () => {
    // ... login logic
    router.push('/dashboard');
  };

  return <button onClick={handleLogin}>Log In</button>;
}
```

### Quick Rule of Thumb: `<Link>` vs `useRouter`

- Always use `<Link>` for regular navigation (menus, cards, navbars) — better for SEO and performance.
- Only use `useRouter` when navigation depends on an event or side-effect (form submission, login success, etc.).

---

## Route Parameters

**Two Types of Parameters:**

- **Path Parameters (`params`)**: Dynamic segments in the URL path (e.g., `/blog/[slug]`)
- **Query Parameters (`searchParams`)**: Key-value pairs after `?` (e.g., `?sort=asc`)

**The Two Client-Side Hooks:**

- `useParams()` — Extracts dynamic segments from the path.
- `useSearchParams()` — Extracts query string parameters.

```tsx
'use client';

import { useParams, useSearchParams } from 'next/navigation';

export default function ClientProductList() {
  const params = useParams();
  const searchParams = useSearchParams();

  const category = params.category;           // e.g., "shoes"
  const sort = searchParams.get('sort');      // e.g., "low-to-high"
  const page = searchParams.get('page');      // e.g., "2"
}
```

---

## Nested Routes in Next.js

Nested routes allow you to create hierarchical routes where a parent route contains child routes.

```
app/
├── layout.tsx          # Root Layout → /
├── page.tsx
├── dashboard/
│   ├── page.tsx        # → /dashboard
│   └── settings/
│       └── page.tsx    # → /dashboard/settings
```

---

## Simple Private Routing with Local Storage

**Why Use Private Routing?** Restrict access to certain routes based on authentication status.

### Protected Page Example

```tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PrivatePage = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, []);

  return <h1>Private Page</h1>;
};
```

### Login Page Example

```tsx
const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/private');
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
```

### Best Practices for Private Routing

- Use secure storage (cookies, HTTP-only tokens) instead of `localStorage` in production.
- Integrate with proper authentication services (Auth0, Firebase, Supabase, etc.).

---

## Handling 404 and Error Pages

### Automatic 404

Place `not-found.tsx` in your route segments. Next.js will automatically show it for unmatched routes.

### Programmatic 404

```tsx
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);

  if (!product) {
    notFound(); // Triggers not-found.tsx
  }

  return <h1>{product.name}</h1>;
}
```