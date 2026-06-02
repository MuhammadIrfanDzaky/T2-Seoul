# Next.js: Events & Forms

## Events

**Events** are actions that happen in the browser — triggered either by user interaction (clicking, typing, scrolling) or by the system (page loading, window resizing).

React's event system is **cross-browser compatible**, providing a consistent API regardless of the browser. All event handlers in JSX use camelCase (e.g., `onClick`, not `onclick`).

---

## Common Event Types

| Category | Events |
|---|---|
| **Mouse** | `onClick`, `onMouseEnter`, `onMouseLeave` |
| **Keyboard** | `onKeyDown`, `onKeyUp`, `onKeyPress` |
| **Form** | `onChange`, `onSubmit`, `onFocus`, `onBlur` |
| **Window** | `onLoad`, `onResize`, `onScroll` |

---

## Basic Event Handling

React uses **synthetic events** — a cross-browser wrapper around the browser's native event object, ensuring consistent behavior across all browsers.

Event handlers are defined as regular functions and attached via JSX attributes:

```jsx
'use client';

export default function AlertButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Passing Parameters to Event Handlers

When you need to pass an argument, wrap the call in an arrow function:

```jsx
'use client';

export default function MessageButton() {
  const showMessage = (message) => {
    alert(message);
  };

  return (
    <button onClick={() => showMessage('Hello World!')}>
      Show Message
    </button>
  );
}
```

> Avoid calling `showMessage('Hello World!')` directly in `onClick` without an arrow function — that would execute immediately on render, not on click.

---

## Multiple Events & Controlled Forms

A real-world component often combines multiple event types. The example below uses `onChange` to track an input field and `onSubmit` to handle form submission.

`e.preventDefault()` stops the browser's default form behavior (which would reload the page).

```jsx
'use client';

import { useState } from 'react';

export default function GreetingForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setMessage(`Hello, ${name}!`);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        <button type="submit">Greet</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
```

---

## Form Management with React Hook Form + Zod

Building forms manually with `useState` and `onChange` works, but becomes increasingly verbose as forms grow — you need state for every field, custom validation logic, loading states, and error handling.

For production-grade forms, the industry standard is to pair two specialized tools:

- **React Hook Form (RHF)**: Manages form state without re-rendering on every keystroke (uses uncontrolled inputs internally — much more performant).
- **Zod**: A schema validation library. You define the rules once, and it handles all validation logic automatically.

### Installation

```bash
npm install react-hook-form zod @hookform/resolvers
```

### Example: Login Form with RHF + Zod

```jsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. Define validation rules with Zod
const schema = z.object({
  email: z.string().email('Must be a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function LoginForm() {
  // 2. Pass schema to useForm via zodResolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // 3. onSubmit only fires if Zod validation passes
  const onSubmit = (data) => {
    console.log('Valid data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="email" placeholder="Email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input type="password" placeholder="Password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
```

**How it works:**
- `{...register('email')}` replaces the manual `value={state}` + `onChange` pattern entirely.
- `handleSubmit` wraps your `onSubmit` — it runs Zod validation first and only calls `onSubmit` if all rules pass.
- `errors` automatically contains validation messages for each field, ready to display.