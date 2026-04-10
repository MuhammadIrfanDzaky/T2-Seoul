# HTML for Web Structure

## Lesson

**Topics covered:**

- HTML  
- Why HTML?  
- HTML History  
- HTML Syntax and Tags  
- HTML Code Examples  
- HTML File  
- HTML Elements  

**Practical part:**

- HTML Open on Browser  
- HTML View Page Source  
- Deployment  
- Simple Website Hosting or Deployment  
- GitHub Pages  

---

## Prerequisites – What's needed to learn this topic better

- Web Browser  
- Code Editor  
- Markdown  
- Terminal  
- Git and GitHub  

---

## Why HTML?

Every website needs **3 building blocks** or basic components:

- **HTML** (HyperText Markup Language) → handles the **structure** and **content**  
- **CSS** (Cascading Style Sheets) → handles the **styling**, **view**, and **presentation**  
- **JavaScript** → handles the **logic**, **action**, and **functionality**

### Visual Analogy (Human Body)

- **HTML** = Skeleton (structure)  
- **CSS** = Skin, muscles, appearance (styling)  
- **JavaScript** = Nervous system (functionality and interaction)

---

## HTML in Action – Basic Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Demo HTML</title>
</head>
<body>
    <header>
        <h1>Demo HTML</h1>
    </header>

    <main>
        <p>This is a demo.</p>
    </main>

    <footer>
        <p>&copy; 2023</p>
    </footer>
</body>
</html>
This is how HTML looks like:

Just like a house:

The house has several parts such as foundation, wall, door, window, etc.
→ The HTML
The house parts have some layout, color, certain size, etc.
→ The CSS
The door and window can be opened, there is also electricity, plumbing, etc.
→ The JavaScript


HTML History?

The first version of HTML was written by Tim Berners-Lee, invented in 1991 and released in 1993.
He is also the inventor of the World Wide Web in 1989.
The specification of HTML is being maintained by W3C (World Wide Web Consortium).
The latest version of HTML is version 5, or HTML5 for short, or just say HTML in this modern day.
We don't use HTML4 or prior anymore.

Additional facts:

HTML is limited to only structure the content, but not the style or functionality.
That's why we also need CSS and JavaScript.
HTML is not a programming language. It is a markup language (similar to Markdown).
HTML is a sublanguage of XML (Extensible Markup Language).


Regular Syntax, Tag, or Element
HTML Tags Breakdown
HTML<h1 class="primary">Example Heading</h1>

Start Tag → <h1 class="primary">
Attribute → class="primary"
Affected Content → Example Heading
End Tag → </h1>

Whole thing = HTML Element

Regular Tag / Element Example
HTML<h1> Hello World </h1>
Rendered result:
Hello World

Paragraph Example
HTML<p>Hello I am a human living on Earth.</p>
Rendered result:
Hello I am a human living on Earth.

Self-Closed Tag / Element
Some HTML elements are self-closed (no content inside the tag).
HTML<tag />

<tag attribute="value" />
Image example (self-closed):
HTML<img src="images/avatar.jpg" alt="My avatar" />

The most recommended way – Live Server
You can launch a development local server with auto or live reload using the Live Server extension on VS Code.
How to use:

Open Command Palette (Cmd + Shift + P or Ctrl + Shift + P)
Type live server
Choose "Live Server: Open with Live Server"

The browser will automatically open your page at:

http://127.0.0.1:5500/index.html
or http://localhost:5500/index.html

Download: Live Server – Visual Studio Marketplace

HTML Elements
Commonly Used Elements
Markdown- `<!DOCTYPE>`, `html`, `head`, `body`, `title`, `meta`
- `h1` – `h6`
- `p`, `a`, `span`
- `img`
- `ul`, `ol`, `li`
- `header`, `nav`, `main`, `footer`, `section`, `div`, `aside`
- `form`, `label`, `input`, `button`
- `table`, `audio`, `video`, `iframe`

Essential Elements
HTML<!DOCTYPE html>
<html>
<head>
    <!-- ... -->
</head>
<body>
    <!-- ... -->
</body>
</html>

Head Elements (Metadata)
HTML<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Website Name</title>
    <meta name="description" content="Website short tagline." />
</head>
Purpose: SEO, viewport, page info, linking external files.

Layout Elements (Inside <body>)
HTML<body>
    <nav><!-- ... --></nav>
    <header><!-- ... --></header>
    <main>
        <section><!-- ... --></section>
        <div><!-- ... --></div>
    </main>
    <footer><!-- ... --></footer>
</body>

Heading, Paragraph, Anchor
HTML<h1>Heading One</h1>
<p>A very long paragraph here later</p>
<a href="https://google.com">Go to Google Search</a>

Image
HTML<img src="https://google.com/googlelogo.png" alt="Google Logo" />

Form, Input, Button
HTML<form>
    <!-- ... -->
</form>

<input type="text" />
<button>Search</button>

List and List Items
Unordered List (ul)
HTML<ul>
    <li>Chocolate</li>
    <li>Coffee</li>
    <li>
        Tea
        <ul>
            <li>Green Tea</li>
            <li>Black Tea</li>
        </ul>
    </li>
</ul>
Ordered List (ol)
HTML<ol>
    <li>First</li>
    <li>Second</li>
    <li>Last</li>
</ol>

Example of Combined List Element
HTML<ul>
    <li><a href="https://google.com">Google</a></li>
    <li><a href="https://facebook.com">Facebook</a></li>
    <li><a href="https://instagram.com">Instagram</a></li>
</ul>

HTML View Page Source
You can use the View Page Source feature on the browser (right-click on any webpage → View Page Source).
Example: Try it on Google’s website.

Simple Website Hosting or Deployment
What is hosting or deployment?
Hosting or deployment means making your project live for the public so everyone can access and see it.
We put the project files (HTML, CSS, JS, images, etc.) on a hosting server. The server then serves it through the Internet.
Simply put: We rent someone else’s computer instead of using our own.
Note: Hosting is not the same as buying a domain. You can later connect a domain (e.g. example.com) to your hosting.

Different Types of Hosting
For simple web deployment:

Static file hosting ← Perfect for simple HTML pages
Shared hosting
VPS (Virtual Private Server) hosting
Dedicated hosting
Web app hosting / PaaS
Serverless hosting
Infrastructure as a Service (IaaS)

For beginners — we will only focus on static file hosting first.

The Three Main Types of Web Hosting
Shared Hosting – Multiple websites share one server
VPS Hosting – Virtual private server (more control)
Dedicated Hosting – Entire server for your website only

What to Choose?
For beginners working with simple HTML files (even without CSS/JS):
Best choice: Static file hosting
Easiest providers:

GitHub Pages
Netlify
Vercel
Firebase Hosting (by Google)
Render
Railway.app
etc.