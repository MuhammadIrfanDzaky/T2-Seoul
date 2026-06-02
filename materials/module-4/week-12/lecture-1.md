# Introduction to React and Next.js

## Why Use a Frontend Framework/Library?

### Problems with Vanilla JS

- **DOM Manipulation**: Manual updates lead to messy, error-prone code (e.g., `document.querySelector`, `.innerHTML`).
- **No Structure**: Apps become spaghetti code as they grow — hard to scale and maintain.
- **Poor Reusability**: Copy-pasting UI code across pages is inefficient and inconsistent.
- **Performance**: Frequent, unoptimized DOM updates slow down the browser.

### The Solution: Component-Based Frameworks

- **Component-Based Architecture**: Build UIs from reusable, modular pieces (e.g., buttons, forms, navbars).
- **Declarative Code**: Define *what* the UI should look like, not *how* to update it step by step.
- **State Management**: Centralized, predictable data flow (e.g., props, state).
- **Performance Optimizations**: Virtual DOM and smart diffing for efficient re-renders.

## What is React?

**React** is an open-source JavaScript **library** developed by Meta (Facebook) for building interactive user interfaces.

In React, you build applications by creating **reusable components** — independent, self-contained pieces of UI that can be assembled like Lego blocks to form a complete interface.

Key characteristics:
- **Virtual DOM**: React maintains a lightweight copy of the DOM and only updates what has changed, making re-renders efficient.
- **Unidirectional Data Flow**: Data flows one way (parent → child), making apps predictable and easier to debug.
- **Component-Based**: Every part of the UI is a component — from a button to an entire page.

> Official docs: [react.dev](https://react.dev)

---

## Why React Over Other Frameworks?

| | React | Vue | Angular |
|---|---|---|---|
| **Type** | Library | Framework | Full Framework |
| **Learning Curve** | Moderate | Easy | Steep |
| **Ecosystem** | Largest | Smaller | Large |
| **Flexibility** | High | Medium | Low (opinionated) |
| **Use Case** | Web, Mobile (RN) | Web | Enterprise apps |

**Why choose React?**
- Largest community, most job demand, and richest ecosystem (Redux, React Router, etc.).
- Flexible — pairs with any backend or state management tool.
- **Learn once, write anywhere**: React for web, React Native for mobile.

---

## What is Next.js?

**Next.js** is a **React framework** built by Vercel that adds production-ready features on top of plain React.

### Limitations of Plain React

- **SEO Issues**: Client-side rendering (CSR) means search engines often see an empty page on first load.
- **Tooling Fatigue**: You must manually set up routing, SSR, bundlers, and other configurations.
- **CRA is Deprecated**: Create React App is no longer recommended for new projects.

### What Next.js Adds

- **SSR / SSG / ISR**: Server-Side Rendering, Static Site Generation, and Incremental Static Regeneration — great for SEO and performance.
- **File-Based Routing**: Create a file inside `/app` or `/pages`, and it automatically becomes a route.
- **API Routes**: Write backend endpoints directly in your project — no separate server needed.
- **App Router**: Built on React Server Components for streaming, simplified data fetching, and nested layouts.
- **Turbopack**: Next-generation bundler, significantly faster than Webpack for large apps.
- **Built-in Optimizations**: Image optimization, font loading, CSS Modules, TypeScript support, and automatic code splitting.

**Learning Progression**: Vanilla JS → React → **Next.js**

---

## Setting Up a Next.js Project

### Installation

```bash
npx create-next-app@latest
```

> Always refer to the official docs for the latest setup:
> [https://nextjs.org/docs/app/getting-started/installation](https://nextjs.org/docs/app/getting-started/installation)

During setup, you will be prompted to configure:
- Project name
- TypeScript
- ESLint
- Tailwind CSS
- App Router (recommended)
- Turbopack
- Import alias (e.g., `@/`)

### Project Structure

```
my-app/
├── src/
│   └── app/
│       ├── page.tsx       ← Home page (route: /)
│       ├── layout.tsx     ← Root layout (wraps all pages)
│       └── globals.css    ← Global styles
├── public/                ← Static assets (images, fonts, etc.)
├── package.json           ← Project metadata & scripts
└── next.config.ts         ← Next.js configuration
```

---

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Alternative: Using Bun (Faster)

```bash
bun install
bun dev
```

> **Bun** is a fast all-in-one JavaScript runtime that is significantly faster than npm for installs and script execution.

---

## Styling with Tailwind CSS

If you enabled Tailwind during setup, you can use utility classes directly in your components:

```tsx
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Hello, World!</h1>
    </main>
  )
}
```

> Tailwind uses a **utility-first** approach — instead of writing custom CSS, you apply pre-built classes directly in your markup.

---

## JSX and TSX

### What Are They?

- **JSX** (JavaScript XML): A syntax extension that lets you write HTML-like markup inside JavaScript files (`.jsx`).
- **TSX** (TypeScript XML): The same as JSX, but with TypeScript's static type checking (`.tsx`).

JSX/TSX allows you to combine UI structure and logic in a single file, making components self-contained and easier to reason about.

### Embedding Expressions with `{}`

Curly braces `{}` let you embed any JavaScript/TypeScript **expression** inside your markup.

```tsx
const name = "Budi"
const isLoggedIn = true

return (
  <div>
    <p>Hello, {name}!</p>
    {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    <p>Current year: {new Date().getFullYear()}</p>
  </div>
)
```

> **Important**: Only **expressions** are valid inside `{}` (values that resolve to something). Statements like `if`, `for`, or `while` are **not** allowed directly — use ternary operators or `.map()` instead.

---

*Reference: [react.dev](https://react.dev) · [nextjs.org/docs](https://nextjs.org/docs)*