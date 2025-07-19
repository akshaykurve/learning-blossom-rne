# React Expo Docs App

## Overview

This app is a comprehensive, interactive documentation and learning resource for HTML, CSS, and JavaScript. Built with React Native and Expo, it provides:
- Deeply explained, section-by-section guides for each technology
- Real-world code examples and best practices
- Tips, warnings, and accessibility notes
- Copy-to-clipboard for code samples
- Modern, readable, and mobile-friendly design

You can use this app as a reference, a learning tool, or a quick lookup for web development essentials.

---

# HTML Documentation

## Introduction
HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as CSS and JavaScript to create rich, interactive websites. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items.

> **Tip:** HTML is not case sensitive, but it is best practice to use lowercase for tags and attributes.

## Basic Syntax
HTML uses tags to mark up text, images, and other content for display in web browsers. Tags are enclosed in angle brackets, e.g., `<p>` for a paragraph. Most tags have an opening and a closing form, e.g., `<h1>` and `</h1>`.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
> **Tip:** Always start your HTML files with `<!DOCTYPE html>` to ensure standards mode in browsers.

## Document Structure
Every HTML document starts with a doctype declaration and is structured with `<html>`, `<head>`, and `<body>` tags.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Document Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```
> **Tip:** The `<head>` contains metadata, links to stylesheets, and scripts. The `<body>` contains all visible content.

## Elements & Attributes
HTML elements are defined by tags, and can have attributes that provide additional information. Attributes are always included in the opening tag and usually come in name/value pairs like `name="value"`.

```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```
Common attributes include `id`, `class`, `style`, `title`, and `data-*` custom attributes.

> **Tip:** Use `class` for CSS styling and `id` for unique element identification.

## Text & Headings
Use heading tags `<h1>` to `<h6>` for titles and subtitles. Use `<p>` for paragraphs, `<br>` for line breaks, and `<hr>` for horizontal rules.

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<p>This is a paragraph of text.</p>
<br>
<hr>
```
> **Tip:** Use only one `<h1>` per page for the main title. Use headings in order for accessibility and SEO.

## Links & Images
Create hyperlinks with `<a>` and display images with `<img>`. Always use the `alt` attribute for images for accessibility.

```html
<a href="https://www.example.com">Go to Example</a>
<img src="logo.png" alt="Site Logo" width="120" height="60">
```
> **Tip:** Use `alt` text for images to describe their purpose to users who cannot see them.

## Lists
HTML supports ordered lists (`<ol>`), unordered lists (`<ul>`), and description lists (`<dl>`).

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```
> **Tip:** Use `<ul>` for unordered lists (bullet points) and `<ol>` for ordered lists (numbered).

## Tables
Tables are created with `<table>`, `<tr>` (row), `<th>` (header cell), and `<td>` (data cell).

```html
<table>
  <caption>User Data</caption>
  <thead>
    <tr><th>Name</th><th>Age</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>24</td></tr>
    <tr><td>Bob</td><td>30</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="2">End of Data</td></tr>
  </tfoot>
</table>
```
> **Tip:** Use `<thead>`, `<tbody>`, and `<tfoot>` for complex tables. Use `scope` and `summary` for accessibility.

## Forms & Inputs
Forms collect user input. Use `<form>` with input elements like `<input>`, `<textarea>`, `<select>`, and `<button>`.

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <input type="email" id="email" name="email" autocomplete="email">
  <input type="password" id="password" name="password" autocomplete="current-password">
  <input type="submit" value="Submit">
</form>
```
> **Tip:** Use `required` for mandatory fields. Use `autocomplete` for better UX and security.
> **Warning:** Never trust client-side validation alone. Always validate and sanitize input on the server.

Common input types:
```
type="text"   // Single-line text
type="email"  // Email address
type="password" // Password
type="number" // Numeric input
type="date"   // Date picker
type="checkbox" // Checkbox
type="radio"  // Radio button
type="file"   // File upload
```
> **Tip:** Label every input with `<label>` for accessibility. Use `for` attribute to link label and input.

## Semantic Elements
Semantic elements clearly describe their meaning in a human- and machine-readable way. Examples: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.

```html
<header>Site Header</header>
<nav>Main Navigation</nav>
<main>
  <section>Section Content</section>
</main>
<footer>Site Footer</footer>
```
> **Tip:** Use semantic elements to convey meaning and improve SEO. `<header>` for the top of the page, `<nav>` for navigation, `<main>` for the main content, and `<footer>` for the bottom.

## Multimedia
HTML supports embedding images, audio, video, SVG, and canvas. Use `<audio>`, `<video>`, `<canvas>`, and `<svg>` for rich media.

```html
<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
</audio>
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
</video>
```
> **Tip:** Use `<audio>` for audio and `<video>` for video. Include `controls` attribute for user interaction.

## Meta & SEO
Meta tags go inside the `<head>` and provide metadata about the document. Important for SEO and social sharing.

```html
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML,CSS,JavaScript">
<meta name="author" content="John Doe">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
> **Tip:** Use `<meta>` tags to provide metadata about your HTML document, including character set, description, keywords, author, and viewport settings.

## Accessibility
Use semantic HTML, proper `alt` text, labels, and ARIA attributes to make your site accessible to all users, including those using screen readers.

Ensure good color contrast, keyboard navigation, and logical heading order for best accessibility.

> **Tip:** Use semantic HTML, proper `alt` text, labels, and ARIA attributes to make your site accessible to all users, including those using screen readers.

## Best Practices
- Always use semantic elements for structure.
- Keep code clean, indented, and well-commented.
- Use external CSS and JavaScript files for separation of concerns.
- Optimize images and media for performance.
- Test your site for accessibility and responsiveness.

> **Tip:** Always use semantic elements for structure. Keep code clean, indented, and well-commented. Use external CSS and JavaScript files for separation of concerns. Optimize images and media for performance. Test your site for accessibility and responsiveness.

## Web Components & Shadow DOM
Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.

**Custom Elements:** Define your own HTML elements with custom behavior.

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = '<p>Hello from shadow DOM!</p>';
  }
  connectedCallback() {
    // Called when element is added to the DOM
  }
  disconnectedCallback() {
    // Called when element is removed
  }
  attributeChangedCallback(name, oldValue, newValue) {
    // Called when observed attribute changes
  }
  adoptedCallback() {
    // Called when element is moved to a new document
  }
  static get observedAttributes() { return ['data-attr']; }
}
customElements.define('my-element', MyElement);
```
> **Tip:** Use `slot` elements to allow children to be projected into your custom element.

**Advanced Slot Example:**
```html
<my-element>
  <span slot="content">This will be projected</span>
</my-element>
```
**Scoped Styles Example:**
```js
this.shadowRoot.innerHTML = '<style>p { color: red; }</style><p>Styled!</p>';
```
> **Tip:** Use `mode: "open"` to allow external JS to access the shadowRoot. Use `mode: "closed"` for full encapsulation.
> **Warning:** Custom elements must contain a hyphen (e.g., `my-element`).

**Custom Events and Bubbling:**
```js
this.dispatchEvent(new CustomEvent('my-event', { detail: { foo: 1 }, bubbles: true }));
```
**Browser Support:** Chrome, Edge, Firefox, Safari (with some polyfills for older versions).

**Framework Interop:** Use custom elements in React, Angular, Vue, but check for attribute/property binding differences.
> **Tip:** Use `@webcomponents/webcomponentsjs` for polyfills.

**Accessibility:** Add ARIA roles and ensure keyboard navigation for custom elements.

**SEO:** Use `is` attribute or fallback content for custom elements to ensure they are indexed.

## ARIA & Accessibility
ARIA (Accessible Rich Internet Applications) provides attributes to make web content and applications more accessible to people with disabilities.

```html
<button aria-label="Close" aria-pressed="false">X</button>
<div role="alert">This is an important message!</div>
<ul role="listbox">
  <li role="option">Item 1</li>
</ul>
```
> **Tip:** Use ARIA roles, states, and properties only when native HTML cannot provide the needed semantics.
> **Warning:** Misusing ARIA can make your site less accessible. Prefer semantic HTML whenever possible.

**Live Regions:**
```html
<div aria-live="polite">New notifications will appear here.</div>
```
> **Tip:** Test accessibility with screen readers and keyboard navigation.

## HTML Security
**XSS (Cross-Site Scripting):** Never trust user input. Always escape or sanitize data before inserting into the DOM.

```html
<!-- BAD: -->
<div id="output"></div>
document.getElementById('output').innerHTML = userInput;

<!-- GOOD: -->
document.createTextNode(userInput);
```
> **Warning:** Never use `innerHTML` with untrusted data.

**CSP (Content Security Policy):** Use CSP headers or meta tags to restrict what resources can be loaded.

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.example.com">
```
> **Tip:** Use `sandbox` attribute on iframes to restrict capabilities.

**SRI (Subresource Integrity):** Use SRI to ensure external scripts/styles are not tampered with.

```html
<script src="https://cdn.example.com/lib.js" integrity="sha384-..." crossorigin="anonymous"></script>
```

## HTML Performance
**Lazy Loading:** Use `loading="lazy"` on images and iframes.

```html
<img src="large.jpg" loading="lazy" alt="Lazy loaded image">
```
**Preloading & Resource Hints:** Use `<link rel="preload">`, `<link rel="dns-prefetch">`, `<link rel="prefetch">` for performance.

```html
<link rel="preload" href="main.js" as="script">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
```
> **Tip:** Use `async` and `defer` on scripts to improve page load.

## Service Workers & Offline HTML
Service Workers enable offline support, background sync, and push notifications for web apps.

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW registered', reg));
}
```
> **Tip:** Service workers must be served over HTTPS and are scope-limited to their directory.

## Structured Data: Microdata, RDFa, JSON-LD
Structured data helps search engines understand your content. Use Microdata, RDFa, or JSON-LD for rich results.

```html
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">Jane Doe</span>
  <span itemprop="jobTitle">Professor</span>
</div>
```
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jane Doe",
  "jobTitle": "Professor"
}
</script>
```
> **Tip:** JSON-LD is the recommended format for structured data by Google.

## HTML5 Global Attributes (Partial)
```
class      // CSS class
id         // Unique identifier
style      // Inline CSS
hidden     // Hide element
lang       // Language code
title      // Tooltip text
tabindex   // Keyboard navigation
contenteditable // Editable content
draggable  // Enable drag & drop
spellcheck // Enable spell checking
```
> **Tip:** All HTML elements support these global attributes unless otherwise specified.

## References & Resources
- [MDN Web Docs: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C HTML Spec](https://html.spec.whatwg.org/)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)

---

# CSS Documentation

... (CSS content will be inserted here)

---

# JavaScript Documentation

... (JS content will be inserted here)

---
