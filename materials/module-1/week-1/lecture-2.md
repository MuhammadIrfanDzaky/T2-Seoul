# HTML Semantics

## Semantics

- In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?"
- In HTML, "what purpose or role does that HTML element have" (rather than "what does it look like?".)
- For example, the `<h1>` element is a semantic element, which gives the text it wraps around the role (or meaning) of "a top level heading on your page."

---

## What are the benefits writing HTML with right semantics?

- Search engines will consider its contents as important keywords to influence the page’s search rankings (**SEO**)
- Screen readers can use it as a signpost to help visually impaired users navigate a page. Finding blocks of meaningful code is significantly easier than searching through endless divs with or without semantic or namespaced classes
- Suggests the developer what type of data that will be populated

---

## How to determine the right markup?

To write which markup to use, ask these questions first:

1. "What element(s) best describe/represent the data that I’m going to populate?" For example, is it a list of data?
2. Ordered, unordered list?
3. Is it an article with sections and an aside of related information?
4. Is it a figure or image that needs a caption?
5. Should it have a header or a footer?

---

## Semantic elements

These are some of the roughly 100 semantic elements available:

- `<article>`
- `<aside>`
- `<details>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<header>`
- `<main>`
- `<mark>`
- `<nav>`
- `<section>`
- `<summary>`
- `<time>`

---

## Non-semantically correct vs semantically correct

**What Is Semantic HTML?**

| Non-Semantic HTML                  | Semantic HTML                          |
|------------------------------------|----------------------------------------|
| `<div>`                            | `<header>`                             |
| `<span>`                           | `<nav>`                                |
| `<div>`                            | `<main>`                               |
| `<div>` (nested)                   | `<article>`                            |
| `<div>`                            | `<figure>`                             |
| `<div>`                            | `<p>`                                  |
| `<div>`                            | `<section>`                            |
| `<div>`                            | `<aside>`                              |
| `<div>`                            | `<footer>`                             |

*(Many generic `<div>` and `<span>` containers vs meaningful semantic tags)*

---

## HTML Elements

- Main Root
- Document Metadata
- Sectioning Root
- Content Sectioning
- Text Content
- Inline Text Semantics • Image & Multimedia • Table
- And many more (script, etc)

---

## Main Root

| Tag      | Description                                              |
|----------|----------------------------------------------------------|
| `<html>` | Represents the root (top-level element) of an HTML document. |

---

## Document metadata

Metadata contains information about the page.  
This includes information about styles, scripts and data to help software (search engines, browsers, etc.) use and render the page.

Metadata for styles and scripts may be defined in the page or link to another file that has the information.

| Tag       | Description |
|-----------|-------------|
| `<base>`  | Represents the root (top-level element) of an HTML document. |
| `<head>`  | Contains machine-readable information (metadata) about the document (e.g. styles and title). |
| `<link>`  | Specifies relationships between the current document and an external resource. |
| `<meta>`  | Presents Metadata that cannot be represented by other HTML meta-related elements, like base, link, script, style or title. |
| `<style>` | Contains style information for a document, or part of a document. |
| `<title>` | Document’s title that is shown in a Browser’s title bar or a page’s tab |

---

## Sectioning root

| Tag      | Description |
|----------|-------------|
| `<body>` | Represents the content of an HTML document. There can be only one `<body>` element in a document. |

---

## Content sectioning

Content sectioning elements allow you to organize the document content into logical pieces.

Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.

| Tag          | Description |
|--------------|-------------|
| `<address>`  | Indicates that the enclosed HTML provides contact information for a person or people, or for an organization. |
| `<article>`  | Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable. |
| `<aside>`    | Represents a portion of a document whose content is only indirectly related to the document’s main content. |
| `<footer>`   | Typically contains information about the author of the section, copyright data or links to related documents. |
| `<header>`   | Represents introductory content, typically a group of introductory or navigational aids |

**Continued…**

| Tag          | Description |
|--------------|-------------|
| `<h1>`–`<h6>`| Represent six levels of section headings. |
| `<main>`     | Consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application. |
| `<nav>`      | Represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. |
| `<section>`  | Represents a generic standalone section of a document, which doesn’t have a more specific semantic element to represent it. |

---

## Text content

Use inside the `<body>` tag.  
Important for accessibility and SEO, these elements identify the purpose or structure of that content.

| Tag          | Description |
|--------------|-------------|
| `<div>`      | Generic container |
| `<dl>`       | Represents description list. The element encloses a list of groups of terms (specified using the `dt` element) and descriptions (provided by `dd` elements) |
| `<dd>`       | Description inside `dl`. |
| `<dt>`       | Title of description list. |
| `<figure>`   | Typically contains information about the author of the section, copyright data or links to related documents. |
| `<figcaption>` | Represents introductory content, typically a group of introductory or navigational aids |
| `<hr>`       | Horizontal Line / Row separator |

**Text content (cont.)**

| Tag      | Description |
|----------|-------------|
| `<ul>`   | Unordered Lists. |
| `<ol>`   | Ordered Lists. |
| `<li>`   | List item inside `ul` or `ol` |
| `<p>`    | Paragraph Element |
| `<pre>`  | Represents preformatted text which is to be presented exactly as written in the HTML file. |

---

## Inline text semantics

Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text.

| Tag        | Description |
|------------|-------------|
| `<a>`      | Anchor element that points to `href`. |
| `<b>`      | Boldface element to emphasize important text. If you only want to style text to bold without this purpose, don’t use this tag |
| `<br>`     | Line break element |
| `<em>`     | Emphasizing text. Has a greater meaning than normal and italic |
| `<i>`      | Make italic style, usually used such as idiomatic text, technical terms, taxonomical designations, among others |

| Tag        | Description |
|------------|-------------|
| `<mark>`   | Highlight text |
| `<s>`      | Strikethrough, represents edited text history |
| `<span>`   | Generic inline container for phrasing content. The inline generic tag |
| `<strong>` | Emphasizing text, the highest level of importance between boldface and `<em>`. |
| `<time>`   | Represents time or date |

---

## Image and multimedia • Embedded content

| Tag        | Description |
|------------|-------------|
| `<audio>`  | Embed sound content |
| `<img>`    | Embed image |
| `<video>`  | Embed Video |

**Embedded content**

| Tag          | Description |
|--------------|-------------|
| `<embed>`    | Embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in. |
| `<iframe>`   | Represents a nested browsing context, embedding another HTML page into the current one. |
| `<source>`   | Specifies multiple media resources for the picture, the audio element, or the video element. It is a void element, meaning that it has no content and does not have a closing tag. |

---