# Forms and CRUD with Next.js

![REVO Logo](revo-logo.png)

**Software Engineering Workshop**

---

## Introduction to Forms in React

### What are Forms?
Forms are used to collect user input in web applications.

### Importance of Forms:
- Allow users to interact with the application by submitting data.
- Essential for user authentication, data entry, and feedback collection.

---

## Controlled vs. Uncontrolled Components

### Controlled Components:
Keep form input values in the React state.
- Provide real-time validation and centralized state management.

### Uncontrolled Components:
Use DOM to store form input values.
- Less common in modern React applications due to limited control over state.

---

## Benefits of Controlled Components

- **Real-Time Validation**: Validate user input as they type.
- **Centralized State Management**: Easier to manage form state across components.
- **Better Testability**: Simplifies testing by keeping state in React.

---

## Using React Hook Form for Form Management

### What is React Hook Form?
- A popular library for managing forms in React.
- Simplifies form handling by providing features like validation and error handling.

### Benefits of Using React Hook Form
- **Lightweight**: Smaller bundle size compared to other libraries.
- **Easy Integration**: Simple to set up and use.
- **Powerful Validation**: Supports complex validation rules.

---

### Basic Usage of React Hook Form

```tsx
const RHFForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder="Name" />
      {errors.name && <div>This field is required</div>}

      <input
        {...register('email', {
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        })}
        placeholder="Email"
      />
      {errors.email && <div>Invalid email address</div>}

      <button type="submit">Submit</button>
    </form>
  );
};
```

---

## CRUD API

### Introduction to CRUD Operations

**What is CRUD?**
Create, Read, Update, Delete — the four fundamental operations for managing data.

**Importance of CRUD:**

- Essential for dynamic web applications.
- Allows users to interact with data in a meaningful way.

### CRUD Mapping to HTTP Methods

| Operation | HTTP Method |
|---|---|
| Create | POST |
| Read | GET |
| Update | PUT |
| Delete | DELETE |

### Benefits of CRUD Operations

- **Dynamic Data Management**: Enables real-time updates and interactions.
- **User Engagement**: Enhances user experience by allowing data manipulation.
- **Data Persistence**: Ensures data is stored and retrieved efficiently.


## Why Use Axios Instead of `fetch`?

### 1. Automatic JSON Parsing

```typescript
// fetch — requires two steps
const res = await fetch('/api/data');
const data = await res.json();

// axios — data is parsed automatically
const { data } = await axios.get('/api/data');
```

### 2. Better Error Handling

Axios throws errors for any non-2xx status (including 404, 500), making error handling cleaner.

### 3. Request/Response Interceptors

```typescript
axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});
```

---

## Example: CRUD Operations with Axios

```typescript
// Create
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'New Post',
  body: 'This is a new post',
  userId: 1,
});

// Read
axios.get('https://jsonplaceholder.typicode.com/posts');

// Update
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
  title: 'Updated Post',
  body: 'This post has been updated',
  userId: 1,
});

// Delete
axios.delete('https://jsonplaceholder.typicode.com/posts/1');
```

## Best Practices for Forms and CRUD

- **Centralize Form State**: Use libraries like React Hook Form.
- **Validate User Input**: Ensure data is valid before sending it to the server.
- **Handle Errors Gracefully**: Display clear error messages to users.

---

## Security Considerations

- **Input Validation**: Prevents SQL injection and XSS attacks.
- **Authentication and Authorization**: Ensure only authorized users can perform CRUD operations.

---

## Common Challenges

- **Error Handling**: Displaying meaningful error messages.
- **Performance Optimization**: Ensuring fast form submission and data fetching.
- **Validation Complexity**: Handling complex validation rules.

---

## Debugging Techniques

- **Console Logging**: Use console logs to inspect data and errors.
- **Debugging Tools**: Leverage browser developer tools for inspecting network requests.