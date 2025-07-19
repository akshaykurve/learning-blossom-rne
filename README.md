# React Expo Docs App

---

## Table of Contents
- [Overview](#overview)
- [HTML Documentation](#html-documentation)
  - [Introduction](#introduction)
  - [Basic Syntax](#basic-syntax)
  - [Document Structure](#document-structure)
  - [Elements & Attributes](#elements--attributes)
  - [Text & Headings](#text--headings)
  - [Links & Images](#links--images)
  - [Lists](#lists)
  - [Tables](#tables)
  - [Forms & Inputs](#forms--inputs)
  - [Semantic Elements](#semantic-elements)
  - [Multimedia](#multimedia)
  - [Meta & SEO](#meta--seo)
  - [Accessibility](#accessibility)
  - [Best Practices](#best-practices)
  - [Web Components & Shadow DOM](#web-components--shadow-dom)
  - [ARIA & Accessibility](#aria--accessibility)
  - [HTML Security](#html-security)
  - [HTML Performance](#html-performance)
  - [Service Workers & Offline HTML](#service-workers--offline-html)
  - [Structured Data](#structured-data-microdata-rdfa-json-ld)
  - [HTML5 Global Attributes](#html5-global-attributes-partial)
  - [References & Resources](#references--resources)
- [CSS Documentation](#css-documentation)
  - [Introduction](#introduction-1)
  - [Syntax & Structure](#syntax--structure)
  - [Selectors](#selectors)
  - [Specificity & Cascade](#specificity--cascade)
  - [Box Model](#box-model)
  - [Layout: Block, Inline, Position](#layout-block-inline-position)
  - [Flexbox](#flexbox)
  - [CSS Grid](#css-grid)
  - [Custom Properties (Variables)](#custom-properties-variables)
  - [Transitions & Animations](#transitions--animations)
  - [Responsive Design](#responsive-design)
  - [Preprocessors & PostCSS](#preprocessors--postcss)
  - [Browser Support & Prefixes](#browser-support--prefixes)
  - [Best Practices](#best-practices-1)
  - [References & Resources](#references--resources-1)
- [JavaScript Documentation](#javascript-documentation)
  - [Introduction](#introduction-2)
  - [Syntax & Structure](#syntax--structure-1)
  - [Types & Type Coercion](#types--type-coercion)
  - [Variables & Scope](#variables--scope)
  - [Operators & Expressions](#operators--expressions)
  - [Control Flow](#control-flow)
  - [Functions & Closures](#functions--closures)
  - [Objects & Prototypes](#objects--prototypes)
  - [Arrays & Iteration](#arrays--iteration)
  - [DOM & Events](#dom--events)
  - [Asynchronous JavaScript](#asynchronous-javascript)
  - [ES6+ Features](#es6-features)
  - [OOP & Classes](#oop--classes)
  - [Patterns & Modules](#patterns--modules)
  - [Modules & Bundling](#modules--bundling)
  - [Browser APIs & BOM](#browser-apis--bom)
  - [Error Handling](#error-handling)
  - [Best Practices](#best-practices-2)
  - [References & Resources](#references--resources-2)

---

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

---

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

---

## Introduction
CSS (Cascading Style Sheets) is the language used to describe the presentation of HTML or XML documents. CSS controls layout, colors, fonts, spacing, and much more.

> **Tip:** CSS is supported by all modern browsers and is essential for responsive, accessible, and visually appealing web design.

## Syntax & Structure
CSS consists of selectors and declaration blocks. Each declaration includes a property and a value, separated by a colon and ended with a semicolon.

```css
selector {
  property: value;
}
```
> **Tip:** Use consistent indentation and spacing for readability.

## Selectors
Selectors target HTML elements to apply styles. Types include element, class, ID, attribute, pseudo-class, and pseudo-element selectors.

```css
/* Element */
p { color: blue; }
/* Class */
.button { background: gold; }
/* ID */
#main { padding: 1rem; }
/* Attribute */
input[type="text"] { border: 1px solid #ccc; }
/* Pseudo-class */
a:hover { color: red; }
/* Pseudo-element */
p::first-line { font-weight: bold; }
```
> **Tip:** Use class selectors for reusable styles and avoid overusing ID selectors.

## Specificity & Cascade
Specificity determines which CSS rule applies if multiple rules match the same element. The cascade is the order in which rules are applied.

```css
/* Specificity: ID > class > element */
#main { color: red; }   /* specificity: 100 */
.button { color: blue; } /* specificity: 10 */
p { color: green; }     /* specificity: 1 */
```
> **Tip:** Use browser DevTools to inspect and debug specificity issues.

## Box Model
Every element is a rectangular box. The box model consists of content, padding, border, and margin.

```css
div {
  width: 200px;
  padding: 10px;
  border: 2px solid #333;
  margin: 20px;
}
```
> **Tip:** Use `box-sizing: border-box` to include padding and border in the element's total width and height.

## Layout: Block, Inline, Position
CSS controls how elements are displayed: block, inline, inline-block, and positioned (relative, absolute, fixed, sticky).

```css
span { display: inline; }
div { display: block; }
.menu { position: fixed; top: 0; }
```
> **Tip:** Use `position: sticky` for sticky headers and sidebars.

## Flexbox
Flexbox is a layout model for distributing space and aligning items in a container, even when their size is unknown.

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
```
> **Tip:** Use `gap` for spacing between flex items (supported in all modern browsers).

## CSS Grid
CSS Grid is a two-dimensional layout system for the web. It allows you to create complex layouts easily.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
}
```
> **Tip:** Use `minmax` and `auto-fit` for responsive grids.

## Custom Properties (Variables)
CSS variables allow you to store values for reuse throughout your stylesheet.

```css
:root {
  --main-color: #6C63FF;
}
.button {
  background: var(--main-color);
}
```
> **Tip:** Variables are inherited and can be dynamically changed with JavaScript.

## Transitions & Animations
CSS transitions and animations allow you to animate changes to properties.

```css
.box {
  transition: background 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```
> **Tip:** Use `will-change` for performance optimization of animating properties.

## Responsive Design
Use media queries, relative units, and modern layout techniques to create responsive designs.

```css
@media (max-width: 600px) {
  .container { flex-direction: column; }
}
```
> **Tip:** Use `rem` and `em` units for scalable layouts.

## Preprocessors & PostCSS
CSS preprocessors like SASS, LESS, and Stylus add features like variables, nesting, and mixins. PostCSS is a tool for transforming CSS with JavaScript plugins.

```scss
$main-color: #6C63FF;
.button {
  background: $main-color;
}
```
> **Tip:** Use autoprefixer with PostCSS to add vendor prefixes automatically.

## Browser Support & Prefixes
Use [caniuse.com](https://caniuse.com/) to check browser support. Use vendor prefixes for experimental features.

```css
/* Vendor prefixes */
.box {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
```
> **Tip:** Use tools like Autoprefixer to automate prefixing.

## Best Practices
- Keep CSS modular and reusable.
- Use BEM or other naming conventions for classes.
- Minimize specificity and avoid !important.
- Test in all major browsers and devices.
- Use CSS variables and custom properties for theming.

> **Tip:** Keep your CSS clean, DRY, and well-documented for maintainability.

## References & Resources
- [MDN CSS Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I use](https://caniuse.com/)

---

# JavaScript Documentation

---

## Introduction
JavaScript (JS) is a high-level, interpreted, multi-paradigm programming language that powers the dynamic behavior of most websites. It is essential for web interactivity, client-side logic, and modern web applications. JavaScript can also run on servers (Node.js), IoT devices, and even databases.

JS is single-threaded, event-driven, and uses a prototype-based inheritance model. It supports functional, imperative, and object-oriented programming styles.

> **Tip:** JavaScript is standardized as ECMAScript (ES). The latest version is ES2023, but ES6 (2015) introduced most modern features.
> **Warning:** JavaScript is not the same as Java. They are different languages with different purposes.

## Syntax & Structure
JavaScript syntax is C-like. Statements end with semicolons (optional but recommended). Code blocks use curly braces. Identifiers are case-sensitive. Whitespace is ignored except inside strings.

```js
// Single-line comment
/* Multi-line comment */
let x = 5;
if (x > 0) {
  console.log('Positive');
}
// Automatic Semicolon Insertion (ASI)
let y = 1
let z = 2
[y, z].forEach(console.log)
```
> **Tip:** Use strict mode (`'use strict'`) to catch common bugs and enable safer JavaScript.
> **Warning:** Automatic Semicolon Insertion (ASI) can cause bugs. Always use semicolons to avoid pitfalls.

## Types & Type Coercion
JavaScript has 8 types: string, number, boolean, null, undefined, symbol, bigint, and object (including arrays, functions, dates, etc.). Types are dynamic and can change at runtime.

```js
typeof 42; // "number"
typeof 'hi'; // "string"
typeof null; // "object" (quirk)
typeof undefined; // "undefined"
typeof Symbol('s'); // "symbol"
typeof 10n; // "bigint"
typeof [1,2,3]; // "object"
typeof function(){}; // "function"
```
**Type Coercion:** JS automatically converts types in some operations. This can lead to unexpected results.

```js
1 + '2' // "12" (number + string = string)
1 - '2' // -1 (string converted to number)
false == 0 // true (loose equality)
false === 0 // false (strict equality)
```
> **Warning:** Always use `===` for strict equality to avoid type coercion bugs.
> **Tip:** Use `Number()`, `String()`, `Boolean()` for explicit conversion.

**Truthy & Falsy Values:** Falsy: `false, 0, '', null, undefined, NaN`. Everything else is truthy.

```js
Boolean(0); // false
Boolean(''); // false
Boolean([]); // true
Boolean({}); // true
```
> **Tip:** Use `!!` to convert a value to boolean.

## Variables & Scope
Use `let` and `const` for block-scoped variables. `var` is function-scoped and hoisted. Variables declared without a keyword become global (not recommended).

```js
let a = 1;
const b = 2;
var c = 3;
function test() {
  var d = 4;
  if (true) {
    let e = 5;
    const f = 6;
  }
  // console.log(e); // ReferenceError
}
```
**Hoisting:** `var` declarations are hoisted and initialized as undefined. `let` and `const` are hoisted but not initialized (temporal dead zone).

```js
console.log(x); // undefined
var x = 5;
console.log(y); // ReferenceError
let y = 10;
```
> **Tip:** Always declare variables at the top of their scope. Prefer `const` for values that do not change.
> **Warning:** Avoid using global variables. They can lead to hard-to-find bugs and conflicts.

## Operators & Expressions
**Definition:** Operators are special symbols or keywords that perform operations on operands (values and variables). Expressions combine values, variables, and operators to produce a result.

**Types of Operators:**
- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`
- Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`
- Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Logical: `&&`, `||`, `!`
- Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
- Ternary: `condition ? expr1 : expr2`
- Nullish Coalescing: `??`
- Optional Chaining: `?.`

```js
let a = 5, b = 2;
a += b; // 7
let isEqual = (a === b); // false
let result = a > b ? 'a is greater' : 'b is greater';
let safe = user?.profile?.email ?? 'No email';
```
**Edge Cases:**
- `==` vs `===`: `0 == false` is true, but `0 === false` is false.
- Division by zero: `1/0` is `Infinity`.
- Chained assignments: `let x = y = 10;` (y becomes global if not declared).

> **Tip:** Use `??` to provide defaults only for `null` or `undefined`.
> **Warning:** Always use `===` and `!==` for comparisons to avoid coercion bugs.
> **Tip:** Use parentheses to clarify complex expressions and avoid ambiguity.

## Control Flow
**Definition:** Control flow statements determine the order in which code is executed. JavaScript provides conditional statements, loops, and error handling constructs.

**Types of Control Flow:**
- Conditional: `if`, `else`, `else if`, `switch`
- Loops: `for`, `while`, `do...while`, `for...in`, `for...of`
- Jump: `break`, `continue`, `return`
- Error Handling: `try`, `catch`, `finally`, `throw`

```js
if (score > 90) {
  grade = 'A';
} else if (score > 80) {
  grade = 'B';
} else {
  grade = 'C';
}

for (let i = 0; i < 3; i++) {
  if (i === 1) continue;
  if (i === 2) break;
  console.log(i);
}

try {
  throw new Error('Oops');
} catch (e) {
  console.error(e);
} finally {
  console.log('Done');
}
```
**Edge Cases & Best Practices:**
- `switch` uses strict comparison (`===`) for case matching.
- Always use `break` in `switch` cases to avoid fall-through.
- Avoid infinite loops by ensuring loop conditions will eventually be false.
- Use `try/catch` for error handling, especially with async/await.

> **Tip:** Use `for...of` for iterating arrays and `for...in` for objects (but beware of prototype properties).
> **Warning:** Never use `return` outside of a function. Avoid `goto` (not supported in JS).

## Functions & Closures
**Definition:** Functions are reusable blocks of code. Closures are functions that remember the scope in which they were created, even after that scope has exited.

**Types of Functions:**
- Function Declaration: `function foo() {}`
- Function Expression: `const foo = function() {}`
- Arrow Function: `const foo = () => {}`
- IIFE: `(function() {})()`

```js
function add(a, b) {
  return a + b;
}
const sub = (a, b) => a - b;
const makeCounter = () => {
  let count = 0;
  return function() { count++; return count; };
};
const counter = makeCounter();
counter(); // 1
counter(); // 2
```
**Edge Cases & Best Practices:**
- Function declarations are hoisted, but expressions are not.
- Arrow functions do not have their own `this`, `arguments`, or `new.target`.
- Closures can lead to memory leaks if not managed properly.
- Use default parameters and rest/spread for flexible APIs.

> **Tip:** Use closures for data privacy and factory functions.
> **Warning:** Avoid using `arguments` object in arrow functions.

## Objects & Prototypes
**Definition:** Objects are collections of key-value pairs. Prototypes enable inheritance and sharing of methods and properties between objects.

**Object Creation:**
- Object Literal: `{}`
- Constructor: `new Object()`
- `Object.create(proto)`

```js
const obj = { a: 1, b: 2 };
obj.c = 3;
console.log(obj.a);
// Prototypal inheritance
const parent = { greet() { return 'hi'; } };
const child = Object.create(parent);
child.greet();
// Property descriptors
Object.defineProperty(obj, 'd', { value: 4, writable: false });
```
**Edge Cases & Best Practices:**
- Use `Object.keys`, `Object.values`, and `Object.entries` for iteration.
- Use `get` and `set` for computed properties.
- Avoid modifying `__proto__` directly.
- Use `Object.freeze` to make objects immutable.

> **Tip:** Use `Object.assign` for shallow copies and `structuredClone` for deep copies.
> **Warning:** Be careful with property shadowing and prototype pollution.

## Arrays & Iteration
**Definition:** Arrays are ordered lists of values. JavaScript arrays are dynamic, can hold mixed types, and have many built-in methods for iteration and transformation.

**Array Methods:**
- Iteration: `forEach`, `map`, `filter`, `reduce`, `some`, `every`, `find`, `findIndex`
- Mutation: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`
- Access: `at`, `includes`, `indexOf`, `join`, `slice`, `concat`

```js
const arr = [1, 2, 3];
arr.push(4);
arr.map(x => x * 2);
arr.filter(x => x % 2 === 0);
arr.reduce((sum, x) => sum + x, 0);
// Iterators
for (const val of arr) { console.log(val); }
// Spread
const arr2 = [...arr, 5];
```
**Edge Cases & Best Practices:**
- Arrays can be sparse (missing indices).
- Not all objects with a length property are arrays (e.g., arguments, NodeList).
- Use `Array.from` to convert array-like objects.
- Prefer `map/filter/reduce` for functional programming.

```js
function sum() {
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}
```
> **Tip:** Use `find`, `some`, and `every` for expressive array logic.
> **Warning:** Be careful with `sort` (it mutates the array and sorts lexicographically by default).

## DOM & Events
**Definition:** The Document Object Model (DOM) is a tree-like structure representing the content of a web page. JavaScript can manipulate the DOM to change content, structure, and style dynamically. Events are actions or occurrences (like clicks or keypresses) that JavaScript can respond to.

**Common DOM Methods & Events:**
- `getElementById`, `querySelector`, `querySelectorAll` for selecting elements
- `addEventListener`, `removeEventListener` for handling events
- `innerHTML`, `textContent`, `style` for modifying content and style

```js
const btn = document.getElementById('myBtn');
btn.addEventListener('click', function(e) {
  alert('Button clicked!');
});
document.querySelectorAll('.item').forEach(el => el.style.color = 'red');
```
**Edge Cases & Best Practices:**
- Always remove event listeners when elements are removed to prevent memory leaks.
- Use event delegation for better performance on many similar elements.
- Avoid direct DOM manipulation in frameworks like React; use state and props instead.

> **Tip:** Use `event.target` to access the element that triggered the event.
> **Warning:** Direct DOM manipulation can cause bugs in modern frameworks. Prefer declarative updates.

## Asynchronous JavaScript
**Definition:** JavaScript is single-threaded but supports asynchronous operations via callbacks, promises, and async/await. This allows non-blocking code for tasks like network requests and timers.

**Async Patterns:**
- `setTimeout`, `setInterval` for timers
- `Promise` for chaining async operations
- `async/await` for readable async code

```js
setTimeout(() => console.log('Later'), 1000);
function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve('done'), 500));
}
async function main() {
  const result = await fetchData();
  console.log(result);
}
main();
```
**Edge Cases & Best Practices:**
- Always handle promise rejections to avoid unhandled errors.
- Use `Promise.all` for parallel async operations.
- Avoid callback hell by using promises or async/await.

> **Tip:** Use `await` inside `try/catch` for error handling in async functions.
> **Warning:** Never block the main thread with long-running synchronous code.

## ES6+ Features
**Definition:** ES6 (ECMAScript 2015) and later versions introduced major improvements to JavaScript, including new syntax, data structures, and features for better code organization and performance.

**Key Features:**
- `let`, `const` for block-scoped variables
- Arrow functions for concise function syntax
- Template literals for multi-line and interpolated strings
- Destructuring for extracting values from arrays/objects
- Spread/rest for flexible function arguments and array/object manipulation
- Classes, modules, promises, sets, maps, symbols, async/await

```js
const [a, b] = [1, 2];
const obj = { x: 1, y: 2 };
const { x, y } = obj;
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
```
**Edge Cases & Best Practices:**
- Use `const` by default; use `let` only when reassignment is needed.
- Arrow functions do not bind their own `this`.
- Destructuring can provide default values and rename variables.

> **Tip:** Use `import()` for dynamic imports and code splitting.
> **Warning:** Be aware of browser compatibility for newer features.

## OOP & Classes
**Definition:** Object-Oriented Programming (OOP) in JavaScript is based on prototypes and ES6 classes. Classes provide a cleaner syntax for creating objects and inheritance.

**Class Syntax & Inheritance:**
- `class`, `constructor`, `extends`, `super`
- Methods, getters, setters, static methods

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + ' makes a noise.';
  }
}
class Dog extends Animal {
  speak() {
    return this.name + ' barks.';
  }
}
```
**Edge Cases & Best Practices:**
- Use `super` to call parent methods in subclasses.
- Classes are syntactic sugar over prototypes.
- Use `static` for utility methods that do not access instance data.

> **Tip:** Use classes for complex data models and inheritance hierarchies.
> **Warning:** Avoid deep inheritance chains; prefer composition over inheritance when possible.

## Patterns & Modules
**Definition:** Design patterns are reusable solutions to common problems. Modules help organize code into reusable, maintainable files.

**Common Patterns:**
- Module: Encapsulates code and exposes a public API
- Singleton: Ensures a class has only one instance
- Factory: Creates objects without specifying the exact class
- Observer: Allows objects to subscribe to events

```js
// Module pattern
const MyModule = (function() {
  let privateVar = 0;
  return {
    inc() { privateVar++; return privateVar; }
  };
})();
// ES6 module
// export function foo() {}
// import { foo } from './foo.js';
```
**Edge Cases & Best Practices:**
- Use modules to split code into reusable files.
- Use bundlers (Webpack, Vite, Parcel) for production.
- Avoid polluting the global namespace.

> **Tip:** Use `import()` for dynamic imports and code splitting.
> **Warning:** Mixing CommonJS and ES6 modules can cause issues; stick to one system per project.

## Modules & Bundling
**Definition:** ES6 modules use `import` and `export` to organize code. Bundlers combine modules for deployment.

```js
// foo.js
export function foo() { return 42; }
// main.js
import { foo } from './foo.js';
```
**Edge Cases & Best Practices:**
- Use relative or absolute paths in imports.
- Use dynamic imports for lazy loading.
- Avoid circular dependencies.

> **Tip:** Use bundlers to optimize and tree-shake your code for production.
> **Warning:** Be aware of module resolution differences between Node.js and browsers.

## Browser APIs & BOM
**Definition:** The Browser Object Model (BOM) provides access to browser features outside the DOM, such as `window`, `navigator`, `location`, `history`, and `screen`.

**Common APIs:**
- `localStorage`, `sessionStorage` for persistent storage
- `fetch` for network requests
- `window.addEventListener` for global events

```js
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
window.addEventListener('resize', () => console.log(window.innerWidth));
```
**Edge Cases & Best Practices:**
- Always check for API support before using (feature detection).
- Use [caniuse.com](https://caniuse.com/) to check browser compatibility.

> **Tip:** Use `window` for global variables and functions, but avoid polluting the global scope.
> **Warning:** Not all browser APIs are available in Node.js or all browsers.

## Error Handling
**Definition:** Error handling lets you gracefully manage unexpected situations. Use `try`, `catch`, `finally`, and `throw` to handle and raise errors.

```js
try {
  throw new Error('Something went wrong');
} catch (e) {
  console.error(e.message);
} finally {
  cleanup();
}
// Custom error
class MyError extends Error {
  constructor(msg) { super(msg); this.name = 'MyError'; }
}
```
**Edge Cases & Best Practices:**
- Always clean up resources in `finally` blocks.
- Never swallow errors silently; log or handle them appropriately.
- Use custom error classes for better error management.

> **Tip:** Use `try/catch` with `await` for error handling in async functions.
> **Warning:** Throwing non-Error objects can make debugging harder.

## Best Practices
**General Guidelines:**
- Use `const` and `let` instead of `var`.
- Prefer arrow functions for callbacks.
- Avoid global variables.
- Use strict equality (`===`).
- Document your code and use linters.
- Write modular, reusable code.
- Test in all major browsers and devices.

```js
// Bad
var foo = 1;
foo = 2;
// Good
const bar = 1;
// Arrow function
[1,2,3].forEach(x => console.log(x));
```
> **Tip:** Use tools like ESLint and Prettier to enforce code style and catch bugs early.
> **Warning:** Don&#39;t repeat yourself (DRY). Refactor duplicated code into functions or modules.

## References & Resources
- [MDN JS Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [ECMAScript Spec](https://tc39.es/ecma262/)

---
