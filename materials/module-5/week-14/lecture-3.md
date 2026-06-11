**Here is the full transcribed content** from the latest set of slides, formatted as clean Markdown:

---

# Advanced Static Generation & Advanced Client-side Data Fetching

## SSG + ISR

### Incremental Static Regeneration (ISR)

**Revalidation Logic:**

- **Stale Period**: If a request comes in within the revalidation window, the cached (stale) data is served immediately.
- **Trigger**: The first request after the window expires still receives the stale data, but Next.js triggers a background re-generation.
- **Update**: Once the new version is successfully generated, the cache is updated for all subsequent requests.

---

## Comparison Table: All Render Methods

| Feature              | SSG                          | ISR                          | SSR                          | CSR                          |
|----------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| **Rendering Timing** | Build Time                   | Build Time + Background      | Request Time                 | Runtime (Browser)            |
| **Data Freshness**   | Static (per build)           | Periodic / On-demand         | Real-time                    | Real-time                    |
| **TTFB (First Byte)**| Optimized (Fastest)          | Optimized (Fastest)          | Variable (Dependent)         | Optimized (App Shell)        |
| **SEO Compatibility**| Optimal                      | Optimal                      | High                         | Conditional                  |
| **Compute Overhead** | Negligible                   | Moderate                     | High (Per Request)           | Client-side only             |
| **Primary Use Case** | Marketing, Docs              | E-commerce, Blogs            | Personalization, News        | Dashboards, Portals          |

---

## Fetching Strategy – Strategic Implementation Guide

1. **Prioritize SSG**: Whenever content is public and changes infrequently, use SSG. It provides the highest ROI regarding performance and hosting costs.

2. **Use ISR for Scale**: If your site has thousands of pages or content that updates regularly but doesn't require "per-second" precision, ISR is the preferred choice.

3. **Use SSR for Dynamic SEO**: When the content is unique to the request (e.g., filtered search results or localized landing pages) and must be indexed by search engines.

4. **Use CSR for Interaction**: When data is private, complex (e.g., interactive editors), or does not require SEO (e.g., an authenticated settings page).

---

## Advanced CSR

### Client-side Data Fetching with SWR

**SWR (Stale-While-Revalidate)**

SWR is a React hooks library by Vercel for remote data fetching. The name comes from how it works:

- **Show cached data first (stale)** — instant, no waiting
- **Fetch fresh data in background (revalidate)** — quietly updates
- **Swap in the new data when it arrives** — seamless

---

### Key Features of SWR

1. **Auto Revalidation**: Refetches data on window focus, network recovery
2. **Caching**: Keeps data cached and returns it immediately
3. **Deduplicated Requests**: Prevents multiple requests for the same data
4. **Pagination**: Built-in support for pagination and infinite loading
5. **Optimistic UI**: Update UI before completing the mutation

---

### Why use SWR instead of plain `useEffect` + `fetch`?

**Plain `useEffect` + `fetch`** (lots of boilerplate):
```tsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('/api/user')
    .then(res => res.json())
    .then(setData)
    .catch(setError)
    .finally(() => setLoading(false));
}, []);
```

**With SWR** (one line does it all):
```tsx
const { data, error, isLoading } = useSWR('/api/user', fetcher);
```

**Bonus things SWR does automatically**:
- Refetches when you switch browser tabs back
- Deduplicates — if 10 components fetch the same URL, only 1 request is made
- Retries on network error
- Shares cached data across all components using the same key

---

## SSG (Static Site Generation)

**Static Site Generation** is the foundational strategy for high-performance web applications.

In this model, Next.js performs all data fetching and HTML rendering at build time.

When you execute your build script (`next build`), the framework generates physical HTML, CSS, and JSON files that are ready to be served.

---

### Mechanical Overview (SSG)

During the build process, Next.js identifies components that do not use dynamic functions (like `cookies()` or `headers()`).

It executes the `fetch` calls, resolves the data, and "bakes" it directly into the static markup.

---

### Important Notes on Fetch Caching (App Router)

**Next.js 14 behavior**:
```tsx
// fetch was cached by default (force-cache)
const res = await fetch('https://api.example.com/data');
// ↑ silently cached — caused many "why isn't my data updating?" bugs
```

**Next.js 15 behavior (recommended)**:
```tsx
// 1. Dynamic (default - fresh data every request)
const res = await fetch('https://api.example.com/data');

// 2. Static (cache forever, built at build time)
const res = await fetch('https://api.example.com/data', {
  cache: 'force-cache'
});
```

---

### Advantages of SSG

- **Performance**: Responses are delivered from a CDN edge, significantly reducing latency.
- **Availability**: Static files remain accessible even if the original data source is offline.
- **Security**: Data is fetched on a private build server, keeping sensitive API keys and internal logic away from the client.

---

### Limitations of SSG

- **Data Latency**: Content only updates when the site is redeployed.
- **Scalability**: Generating a site with a massive number of routes (e.g., 500,000+ products) can lead to prohibitively long build times.

---

### Dynamic Routes with SSG

By using the `generateStaticParams` function, you can pre-render dynamic segments (e.g., `[slug].tsx`).

This allows you to combine the flexibility of dynamic URLs with the speed of static files.

---

## SSG + ISR (Incremental Static Regeneration)

**Incremental Static Regeneration** is a sophisticated evolution of SSG.

It allows developers to use static generation on a per-page basis, without needing to rebuild the entire site.

It effectively bridges the gap between static speed and dynamic updates.

### Revalidation Options

```tsx
// 3. Time-based revalidation (ISR)
const res = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 }   // seconds
});

// 4. Tag-based revalidation (On-demand)
const res = await fetch('https://api.example.com/data', {
  next: { tags: ['products'] }
});
// then call revalidateTag('products') in a Server Action
```