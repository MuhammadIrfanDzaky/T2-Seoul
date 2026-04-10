# CSS for Styling

## Lesson

**Topics covered:**

- CSS Quick Introduction and History  
- CSS Selector  
- CSS Properties  
- CSS usage with HTML on browser  
- CSS rule specificity  
- CSS box model  
- CSS fonts  

---

## Prerequisites

**What's needed to learn this topic better:**

- Web Browser  
- Code Editor  
- Markdown  
- Terminal  
- Git and GitHub  
- HTML  

---

## CSS Quick Introduction

**CSS (Cascading Style Sheets)** is used to style markup languages, like HTML.

You still need to learn and have HTML first in order to use CSS.

CSS can enhance HTML by applying colors, defining margins, positioning elements, animating interactions, changing fonts, and much more.

**It is what makes web design possible to implement.**

---

## CSS Abbreviation

**Cascading** is like a waterfall with multiple water streams, downpour. Cascading means arranging something in a series or sequence. In web development, cascading means specifying which style rule will apply.

**Style** means a particular procedure, how something is done.

**Sheets** means a collection of style rules.

---

## A CSS code looks like this:

```css
body {
    font-family: sans-serif;
}

header {
    font-size: 32px;
}

main {
    font-size: 24px;
    color: #555;
}

footer {
    padding: 10px 0;
}

Linking CSS to HTML
HTML<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project CSS</title>
    <link rel="stylesheet" href="index.css" />
</head>
<body>
    <header>
        <h1>Title</h1>
    </header>

    <main>
        <p>Content.</p>
    </main>

    <footer>
        Copyright
    </footer>
</body>
</html>
This will make the web page look like this:
Title
Content.
Copyright

Another important facts about CSS:

The latest version of CSS is version 3, or CSS3 for short. We don't primarily use CSS3 or prior anymore.
All of the CSS files are only used for styling purpose. It requires HTML to make it work.
CSS is not a programming language. It's just a coding language or specifically, a styling or stylesheet language.
CSS is the presentation compared to HTML is the content.
CSS is a standalone language, not derived from something else.


CSS File
CSS has .css extension.
Most of the default CSS files are named as index.css, not main.css or something.css. This is a common convention used by developers worldwide.

Project Folder Structure Example
Bashproject-name
├── README.md
├── index.html
├── index.css
└── images
    └── image.png
Or with a more complete structure:
Bashproject-name
├── README.md
├── index.html
├── index.css
├── about
│   └── index.html
├── blog
│   └── index.html
└── images
    └── image.png
In the beginning you might only require a single CSS file for multiple HTML files. Because CSS is a set of rules that can be applied for all web pages.

The W3C
Who made CSS?
Similar to HTML, CSS is developed, maintained, and standardized by the W3C. It is built in 1996 and led by Håkon Wium Lie and Bert Bos. It is only being developed 2 years later after HTML.
When we use CSS code, we actually use the CSS API specification standard behind the screen. That's why it can be read by the web browsers. But be careful, each browser has their slight differences when defining CSS rules by default.
CSS full standard/specification:
https://w3.org/Style/CSS/

CSS3 Logo
CSS3 actually doesn't have an official logo. But the community made and usually chose a logo that looks like this:
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2560px-CSS3_logo_and_wordmark.svg.png" alt="CSS3 Logo">

CSS usage with HTML on Browser
You can link CSS to HTML by various basic methods:

CSS Inline in HTML Elements
CSS Embed in HTML Head with <style> Tag
CSS Module in Separated File
CSS @import declaration (for JS or React or other JS Frameworks)


1. CSS Inline in HTML Elements
⚠️ Not recommended for long term usage.
HTML<element style="property: value;">...</element>
Example:
HTML<!DOCTYPE html>
<html lang="en">
<head>
    <title>Project Name</title>
</head>
<body>
    <header>
        <h1 style="color: rgb(142, 140, 140);">Hello!</h1>
        <p style="color: red;">This is a paragraph.</p>
    </header>
</body>
</html>

2. CSS Embed in HTML Head with <style> Tag
⚠️ Not recommended for long term usage.
HTML<head>
    <style>
        h1 {
            color: green;
        }
        p {
            color: red;
        }
    </style>
</head>

3. CSS Module in Separated File (Recommended)
💡 This is recommended for long term usage.
In index.html:
HTML<link rel="stylesheet" href="index.css" />
In index.css:
CSS/* index.css file */
h1 {
    color: white;
    background: black;
    font-size: 3em;
}

p {
    color: steelblue;
    font-size: 14px;
}

4. CSS @import declaration
You can use @import syntax in CSS file to import another CSS file.
CSS@import url('styles/fonts.css');
@import url('styles/colors.css');

/* Some CSS code here */

/* Example project structure */

CSS Comments
CSS can also have comments like this:
CSS/* One line comment */

/**
 * Multiple line of comments
 */

CSS Selector
Selector Rule Format
CSS.my-css-rule {
    background: red;
    color: beige;
    font-size: 1.2rem;
}
Breakdown:

Selector → .my-css-rule
Property → background, color, font-size
Value → red, beige, 1.2rem

Simply put:

selector defines which part is targeted (which HTML element(s)).
property defines what characteristic to modify.
value defines how to modify that characteristic.


Class Selector
Selects all elements that have the given class attribute.
HTML<button class="primary">Click me</button>
<input class="primary" type="text" placeholder="Insert text" />
CSS:
CSS.primary {
    color: green;
    background-color: gray;
}

ID Selector
Selects an element based on the value of its id attribute. There should be only one element with a given ID in a document.
HTML<h1 id="article-title">Welcome to my site</h1>
CSS:
CSS#article-title {
    margin: 20px;
}

Attribute Selector
Selects all elements that have the given attribute.
CSSinput[type="text"] {
    padding: 5px;
}

CSS Property
In CSS, there are a lot of style properties that categorized like these:
Main Categories:

Text and Fonts
Colors and Backgrounds
Visual Formatting: size or dimension, display, and positioning
Generated Content and Lists
The Box Model: margin, padding, and border
Table
Miscellaneous
Transitions
Transformations
Paged Media

Most used styling features:

Display Mode
Width and Height
Padding and Margin
Fonts
Border and Border Radius
Gradient
Pseudo-Classes
Background Image

There are actually around 520 distinct property names, although we don't have to use them all.
Commonly used properties:

background
border
display
font-size
font
margin
opacity
outline
position
text-decoration
height
color
font-family
font-weight
width
order
padding
text-align
text-transform


CSS class naming convention
Semantic naming convention
CSS.header { ... }
.header-heading { ... }
.navigation-links { ... }
Utility naming
CSS.text-teal { color: teal; }
.bg-green { color: green; }
.w-full { width: 100%; }

Combination of Multiple Elements
CSSelement, other-element, another-element {
    property: value;
}

div, p, h1 {
    color: #f00;
}

Combination of Multiple Class
HTML:
HTML<p class="first special">
    This is a paragraph with <b>bold</b> and <i>italic</i> text.
</p>
CSS:
CSS.first { color: teal; }
.second { color: chocolate; }
.first.special { font-size: 24px; }

Target HTML ID Attribute
⚠️ Not recommended to style using ID because ID can only be used once. (not quite, because we can use a reusable ID on different pages or components)
HTML<!-- One ID is only used once -->
<div id="name">...</div>
<div id="otherName">...</div>