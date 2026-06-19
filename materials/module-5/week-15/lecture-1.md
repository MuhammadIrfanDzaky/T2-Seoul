# Proxy & Authentication

### Why Use a Proxy in Next.js?

Without a proxy, you would have to check *"Is the user logged in?"* on **every single page** of your application.  

That is **repetitive and easy to forget**.  

The proxy lets you write this logic **once** and apply it **everywhere**.

---

### What is Proxy in Next.js?

In **Next.js 16**, `src/proxy.ts` (formerly known as Middleware) is a piece of code that runs **before a request completes**.

**Analogy**: Imagine a **nightclub bouncer** standing at the door.

- **The User**: A guest trying to enter.
- **The Page**: The dance floor inside.
- **The Proxy**: The bouncer.

---

### How Proxy in Next.js Works

Every time someone tries to enter a specific page, the bouncer (Proxy) stops them and checks their ID (Cookies).

- Do you have a **ticket**? (Are you logged in?)
- Are you on the **VIP list**? (Are you an Admin?)
- You are wearing **shorts**? (Invalid request → Redirect home)

---

### Where Does the Proxy Execute?

The Next.js routing lifecycle runs in a highly specific order. The proxy executes **after** hardcoded configurations in `next.config.js` but **before** the application routes are evaluated:

1. Headers from `next.config.js`
2. Redirects from `next.config.js`
3. `proxy.ts` (Rewrites, Redirects, Header manipulation)
4. `beforeFiles` rewrites from config
5. Filesystem routes (`public/`, `_next/static/`, App Router paths)
6. Dynamic Routes (e.g. `/blog/[slug]`)

---

### How Proxy in Next.js Works (Flow Diagram)

**User Clicks Link** → **proxy.ts (The Gatekeeper)** → **Your Actual Web Page**

The proxy acts as an **intermediary**, intercepting the request before it reaches the destination page to perform security checks.

---

### Role-Based Access Control (RBAC)

RBAC is a method of restricting access based on the roles of individual users.

- **Guest**: Can only see public pages (Login, Home).
- **User**: Can see the Dashboard.
- **Admin**: Can see the Dashboard **AND** the Private Admin Page.

---

### Authentication vs. Authorization

**Authentication (AuthN)**: Who are you?  
- Example: Logging in with username and password.  
- Result: The system knows you are "John Doe".

**Authorization (AuthZ)**: What are you allowed to do?  
- Example: Checks if "John Doe" is allowed to delete the database.  
- Result: Access Granted or Access Denied.

**In this project**:
- **Login Page** handles **Authentication**.
- **Proxy** handles **Authorization (RBAC)**.

---

### Why Did Next.js Drop the Name "Middleware"?

Next.js renamed `middleware.ts` to `proxy.ts` in version 16+ because the old name caused **massive misunderstandings**.

**Reasons for the change**:
1. It confused Express/Node.js developers (who expected heavy backend logic).
2. It clarified the "Edge vs Node" runtime behavior.
3. It established clearer **architecture boundaries**:
   - **Proxy (`proxy.ts`)**: Lightweight routing & network rules.
   - **App Layer**: Heavy lifting (database fetching, React rendering, security logic).

---

### Implementation Plan

#### Step 1: The Guard (`src/proxy.ts`)
**The Playroom Gatekeeper**
- Protects Dashboard Routes (`/dashboard/:path*`).
- Inspects Session Cookie.
- Enforces Role-Based Access Control (RBAC):
  - Redirects unauthenticated users to `/login`.
  - Restricts dashboard access based on roles.

#### Step 2: The Bridge (`src/app/api/auth`)
**Secure Proxy Routes**
- **Login Bridge** (`POST /api/auth/login`): Handles credentials, sets session cookie.
- **Logout Bridge** (`POST /api/auth/logout`): Clears session.
- **Session Bridge** (`GET /api/auth/me`): Returns current user payload.

#### Step 3: The Sync (Client-Side SWR)
**Real-time Playroom Console Sync**
- Uses `useSWR("/api/auth/me")` to share session state.
- Optimistic mutations for login/logout.
- Component-level RBAC for UI controls.