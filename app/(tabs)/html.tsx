import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef, useState } from "react";
import { Clipboard, Linking, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const PALETTE = {
  primary: '#6C63FF',
  accent: '#48B1F3',
  background: '#F3F6FD',
  highlight: '#FFD166',
  text: '#22223B',
  textMuted: '#4A4E69',
  card: '#FFFFFF',
};

const LUXURY = {
  background: '#F7F6F2',
  card: 'rgba(255,255,255,0.85)',
  cardBorder: 'rgba(212,175,55,0.5)',
  gold: '#D4AF37',
  champagne: '#F7E7CE',
  text: '#23272F',
  textMuted: '#4A4E69',
  shadow: 'rgba(212,175,55,0.10)',
};

// Callout component for tips/warnings
function Callout({ type, children }: { type: 'tip' | 'warning', children: React.ReactNode }) {
  return (
    <View style={[styles.callout, type === 'tip' ? styles.calloutTip : styles.calloutWarning]}>
      <Text style={styles.calloutText}>{type === 'tip' ? '💡 Tip: ' : '⚠️ Warning: '}{children}</Text>
    </View>
  );
}
// Collapsible section
function CollapsibleSection({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <View style={styles.collapsibleSection}>
      <Pressable onPress={() => setOpen(o => !o)}>
        <Text style={styles.collapsibleTitle}>{open ? '▼' : '▶'} {title}</Text>
      </Pressable>
      {open && <View style={{ marginTop: 8 }}>{children}</View>}
    </View>
  );
}
// Copy button for code
function CopyButton({ text }: { text: string }) {
  return (
    <Pressable onPress={() => Clipboard.setString(text)} style={styles.copyBtn}>
      <Text style={styles.copyBtnText}>Copy</Text>
    </Pressable>
  );
}

export default function HTMLScreen() {
  const scrollRef = useRef(null);
  const sectionRefs = {
    intro: useRef(null),
    syntax: useRef(null),
    structure: useRef(null),
    elements: useRef(null),
    text: useRef(null),
    links: useRef(null),
    lists: useRef(null),
    tables: useRef(null),
    forms: useRef(null),
    semantics: useRef(null),
    media: useRef(null),
    meta: useRef(null),
    accessibility: useRef(null),
    best: useRef(null),
    webcomponents: useRef(null),
    aria: useRef(null),
    security: useRef(null),
    performance: useRef(null),
    serviceworkers: useRef(null),
    structured: useRef(null),
    globals: useRef(null),
    resources: useRef(null),
  };

  const toc: { key: keyof typeof sectionRefs; label: string }[] = [
    { key: 'intro', label: 'Introduction' },
    { key: 'syntax', label: 'Basic Syntax' },
    { key: 'structure', label: 'Document Structure' },
    { key: 'elements', label: 'Elements & Attributes' },
    { key: 'text', label: 'Text & Headings' },
    { key: 'links', label: 'Links & Images' },
    { key: 'lists', label: 'Lists' },
    { key: 'tables', label: 'Tables' },
    { key: 'forms', label: 'Forms & Inputs' },
    { key: 'semantics', label: 'Semantic Elements' },
    { key: 'media', label: 'Multimedia' },
    { key: 'meta', label: 'Meta & SEO' },
    { key: 'accessibility', label: 'Accessibility' },
    { key: 'best', label: 'Best Practices' },
    // Advanced topics
    { key: 'webcomponents', label: 'Web Components & Shadow DOM' },
    { key: 'aria', label: 'ARIA & Accessibility' },
    { key: 'security', label: 'HTML Security' },
    { key: 'performance', label: 'HTML Performance' },
    { key: 'serviceworkers', label: 'Service Workers & Offline HTML' },
    { key: 'structured', label: 'Structured Data: Microdata, RDFa, JSON-LD' },
    { key: 'globals', label: 'HTML5 Global Attributes' },
    { key: 'resources', label: 'References' },
  ];

  const scrollToSection = (key: keyof typeof sectionRefs) => {
    const ref = sectionRefs[key]?.current;
    if (ref && scrollRef.current) {
      (ref as any).measureLayout(
        (scrollRef.current as any).getInnerViewNode(),
        (x: number, y: number) => {
          (scrollRef.current as any).scrollTo({ y: y - 20, animated: true });
        }
      );
    }
  };

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView ref={scrollRef} style={{ backgroundColor: LUXURY.background }} contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <Animated.View entering={FadeInUp.duration(700)} style={[styles.sectionCard, { marginTop: 12 }]} ref={sectionRefs.intro}>
        <MaterialCommunityIcons name="language-html5" size={60} color={LUXURY.gold} style={{ marginBottom: 16 }} />
        <Text style={styles.heroTitle}>HTML Documentation</Text>
        <Text style={styles.heroSubtitle}>
          The official, comprehensive guide to <Text style={{ color: LUXURY.gold, fontWeight: 'bold' }}>HTML</Text> — the standard markup language for creating web pages.
        </Text>
      </Animated.View>

      {/* Table of Contents */}
      <Animated.View entering={FadeInUp.delay(200).duration(700)} style={[styles.sectionCard, { marginBottom: 32 }]}>
        <Text style={styles.tocTitle}>Table of Contents</Text>
        {toc.map((item) => (
          <Pressable key={item.key} onPress={() => scrollToSection(item.key)}>
            <Text style={[styles.tocItem, { color: PALETTE.primary }]}>
              • {item.label}
            </Text>
          </Pressable>
        ))}
      </Animated.View>

      {/* Introduction */}
      <Animated.View entering={FadeInUp.delay(400).duration(700)} style={styles.sectionCard} ref={sectionRefs.intro}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.sectionText}>
          HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as CSS and JavaScript to create rich, interactive websites. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
        </Text>
        <Text style={styles.sectionText}>
          HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items.
        </Text>
        <Callout type="tip">HTML is not case sensitive, but it is best practice to use lowercase for tags and attributes.</Callout>
      </Animated.View>

      {/* Basic Syntax */}
      <Animated.View entering={FadeInUp.delay(600).duration(700)} style={styles.sectionCard} ref={sectionRefs.syntax}>
        <Text style={styles.sectionTitle}>Basic Syntax</Text>
        <Text style={styles.sectionText}>
          HTML uses tags to mark up text, images, and other content for display in web browsers. Tags are enclosed in angle brackets, e.g., {'<p>'} for a paragraph. Most tags have an opening and a closing form, e.g., {'<h1>'} and {'</h1>'}.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First HTML Page</title>\n  </head>\n  <body>\n    <h1>Hello, world!</h1>\n    <p>This is a paragraph.</p>\n  </body>\n</html>`}</Text>
          <CopyButton text={`<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First HTML Page</title>\n  </head>\n  <body>\n    <h1>Hello, world!</h1>\n    <p>This is a paragraph.</p>\n  </body>\n</html>`} />
        </View>
        <Callout type="tip">Always start your HTML files with <Text style={{ color: PALETTE.primary }}>{'<!DOCTYPE html>'}</Text> to ensure standards mode in browsers.</Callout>
      </Animated.View>

      {/* Document Structure */}
      <Animated.View entering={FadeInUp.delay(800).duration(700)} style={styles.sectionCard} ref={sectionRefs.structure}>
        <Text style={styles.sectionTitle}>Document Structure</Text>
        <Text style={styles.sectionText}>
          Every HTML document starts with a doctype declaration and is structured with <Text style={{ color: PALETTE.primary }}>{'<html>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<head>'}</Text>, and <Text style={{ color: PALETTE.primary }}>{'<body>'}</Text> tags.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Document Title</title>\n  </head>\n  <body>\n    <!-- Content goes here -->\n  </body>\n</html>`}</Text>
          <CopyButton text={`<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Document Title</title>\n  </head>\n  <body>\n    <!-- Content goes here -->\n  </body>\n</html>`} />
        </View>
        <Callout type="tip">The <Text style={{ color: PALETTE.primary }}>{'<head>'}</Text> contains metadata, links to stylesheets, and scripts. The <Text style={{ color: PALETTE.primary }}>{'<body>'}</Text> contains all visible content.</Callout>
      </Animated.View>

      {/* Elements & Attributes */}
      <Animated.View entering={FadeInUp.delay(1000).duration(700)} style={styles.sectionCard} ref={sectionRefs.elements}>
        <Text style={styles.sectionTitle}>Elements & Attributes</Text>
        <Text style={styles.sectionText}>
          HTML elements are defined by tags, and can have attributes that provide additional information. Attributes are always included in the opening tag and usually come in name/value pairs like <Text style={{ color: PALETTE.primary }}>name={'"'}value{'"'}</Text>.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<a href=\"https://www.example.com\" target=\"_blank\">Visit Example</a>`}</Text>
          <CopyButton text={`<a href=\"https://www.example.com\" target=\"_blank\">Visit Example</a>`} />
        </View>
        <Text style={styles.sectionText}>
          Common attributes include <Text style={{ color: PALETTE.primary }}>id</Text>, <Text style={{ color: PALETTE.primary }}>class</Text>, <Text style={{ color: PALETTE.primary }}>style</Text>, <Text style={{ color: PALETTE.primary }}>title</Text>, and <Text style={{ color: PALETTE.primary }}>data-*</Text> custom attributes.
        </Text>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>class</Text> for CSS styling and <Text style={{ color: PALETTE.primary }}>id</Text> for unique element identification.</Callout>
      </Animated.View>

      {/* Text & Headings */}
      <Animated.View entering={FadeInUp.delay(1200).duration(700)} style={styles.sectionCard} ref={sectionRefs.text}>
        <Text style={styles.sectionTitle}>Text & Headings</Text>
        <Text style={styles.sectionText}>
          Use heading tags <Text style={{ color: PALETTE.primary }}>{'<h1>'}</Text> to <Text style={{ color: PALETTE.primary }}>{'<h6>'}</Text> for titles and subtitles. Use <Text style={{ color: PALETTE.primary }}>{'<p>'}</Text> for paragraphs, <Text style={{ color: PALETTE.primary }}>{'<br>'}</Text> for line breaks, and <Text style={{ color: PALETTE.primary }}>{'<hr>'}</Text> for horizontal rules.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<h1>Main Title</h1>\n<h2>Section Title</h2>\n<p>This is a paragraph of text.</p>\n<br>\n<hr>`}</Text>
          <CopyButton text={`<h1>Main Title</h1>\n<h2>Section Title</h2>\n<p>This is a paragraph of text.</p>\n<br>\n<hr>`} />
        </View>
        <Callout type="tip">Use only one <Text style={{ color: PALETTE.primary }}>{'<h1>'}</Text> per page for the main title. Use headings in order for accessibility and SEO.</Callout>
      </Animated.View>

      {/* Links & Images */}
      <Animated.View entering={FadeInUp.delay(1400).duration(700)} style={styles.sectionCard} ref={sectionRefs.links}>
        <Text style={styles.sectionTitle}>Links & Images</Text>
        <Text style={styles.sectionText}>
          Create hyperlinks with <Text style={{ color: PALETTE.primary }}>{'<a>'}</Text> and display images with <Text style={{ color: PALETTE.primary }}>{'<img>'}</Text>. Always use the <Text style={{ color: PALETTE.primary }}>alt</Text> attribute for images for accessibility.
        </Text>
        <View style={styles.codeBlock}>
          <Pressable onPress={() => openLink('https://www.example.com')}>
            <Text style={[styles.code, { textDecorationLine: 'underline', color: PALETTE.accent }]}>{`<a href="https://www.example.com">Go to Example</a>`}</Text>
          </Pressable>
          <Text style={styles.code}>{`<img src="logo.png" alt="Site Logo" width="120" height="60">`}</Text>
          <CopyButton text={`<img src="logo.png" alt="Site Logo" width="120" height="60">`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>alt</Text> text for images to describe their purpose to users who cannot see them.</Callout>
      </Animated.View>

      {/* Lists */}
      <Animated.View entering={FadeInUp.delay(1600).duration(700)} style={styles.sectionCard} ref={sectionRefs.lists}>
        <Text style={styles.sectionTitle}>Lists</Text>
        <Text style={styles.sectionText}>
          HTML supports ordered lists (<Text style={{ color: PALETTE.primary }}>{'<ol>'}</Text>), unordered lists (<Text style={{ color: PALETTE.primary }}>{'<ul>'}</Text>), and description lists (<Text style={{ color: PALETTE.primary }}>{'<dl>'}</Text>).
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>`}</Text>
          <CopyButton text={`<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>{'<ul>'}</Text> for unordered lists (bullet points) and <Text style={{ color: PALETTE.primary }}>{'<ol>'}</Text> for ordered lists (numbered).</Callout>
      </Animated.View>

      {/* Tables (expanded) */}
      <Animated.View entering={FadeInUp.delay(1800).duration(700)} style={styles.sectionCard} ref={sectionRefs.tables}>
        <Text style={styles.sectionTitle}>Tables</Text>
        <Text style={styles.sectionText}>
          Tables are created with <Text style={{ color: PALETTE.primary }}>{'<table>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<tr>'}</Text> (row), <Text style={{ color: PALETTE.primary }}>{'<th>'}</Text> (header cell), and <Text style={{ color: PALETTE.primary }}>{'<td>'}</Text> (data cell).
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<table>
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
</table>`}</Text>
          <CopyButton text={`<table>\n  <caption>User Data</caption>\n  <thead>\n    <tr><th>Name</th><th>Age</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Alice</td><td>24</td></tr>\n    <tr><td>Bob</td><td>30</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td colspan="2">End of Data</td></tr>\n  </tfoot>\n</table>`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>{'<thead>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<tbody>'}</Text>, and <Text style={{ color: PALETTE.primary }}>{'<tfoot>'}</Text> for complex tables. Use <Text style={{ color: PALETTE.primary }}>{'scope'}</Text> and <Text style={{ color: PALETTE.primary }}>{'summary'}</Text> for accessibility.</Callout>
      </Animated.View>

      {/* Forms & Inputs (expanded) */}
      <Animated.View entering={FadeInUp.delay(2000).duration(700)} style={styles.sectionCard} ref={sectionRefs.forms}>
        <Text style={styles.sectionTitle}>Forms & Inputs</Text>
        <Text style={styles.sectionText}>
          Forms collect user input. Use <Text style={{ color: PALETTE.primary }}>{'<form>'}</Text> with input elements like <Text style={{ color: PALETTE.primary }}>{'<input>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<textarea>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<select>'}</Text>, and <Text style={{ color: PALETTE.primary }}>{'<button>'}</Text>.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <input type="email" id="email" name="email" autocomplete="email">
  <input type="password" id="password" name="password" autocomplete="current-password">
  <input type="submit" value="Submit">
</form>`}</Text>
          <CopyButton text={`<form action="/submit" method="post">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" required>\n  <input type="email" id="email" name="email" autocomplete="email">\n  <input type="password" id="password" name="password" autocomplete="current-password">\n  <input type="submit" value="Submit">\n</form>`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>{'required'}</Text> for mandatory fields. Use <Text style={{ color: PALETTE.primary }}>{'autocomplete'}</Text> for better UX and security.</Callout>
        <Callout type="warning">Never trust client-side validation alone. Always validate and sanitize input on the server.</Callout>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Common input types:</Text>
        </Text>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.code}>{`type="text"   // Single-line text
 type="email"  // Email address
 type="password" // Password
 type="number" // Numeric input
 type="date"   // Date picker
 type="checkbox" // Checkbox
 type="radio"  // Radio button
 type="file"   // File upload`}</Text>
          <CopyButton text={`type="text"   // Single-line text\ntype="email"  // Email address\ntype="password" // Password\ntype="number" // Numeric input\ntype="date"   // Date picker\ntype="checkbox" // Checkbox\ntype="radio"  // Radio button\ntype="file"   // File upload`} />
        </View>
        <Callout type="tip">Label every input with <Text style={{ color: PALETTE.primary }}>{'<label>'}</Text> for accessibility. Use <Text style={{ color: PALETTE.primary }}>{'for'}</Text> attribute to link label and input.</Callout>
      </Animated.View>

      {/* Semantic Elements */}
      <Animated.View entering={FadeInUp.delay(2200).duration(700)} style={styles.sectionCard} ref={sectionRefs.semantics}>
        <Text style={styles.sectionTitle}>Semantic Elements</Text>
        <Text style={styles.sectionText}>
          Semantic elements clearly describe their meaning in a human- and machine-readable way. Examples: <Text style={{ color: PALETTE.primary }}>{'<header>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<nav>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<main>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<section>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<article>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<aside>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<footer>'}</Text>.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<header>Site Header</header>\n<nav>Main Navigation</nav>\n<main>\n  <section>Section Content</section>\n</main>\n<footer>Site Footer</footer>`}</Text>
          <CopyButton text={`<header>Site Header</header>\n<nav>Main Navigation</nav>\n<main>\n  <section>Section Content</section>\n</main>\n<footer>Site Footer</footer>`} />
        </View>
        <Callout type="tip">Use semantic elements to convey meaning and improve SEO. <Text style={{ color: PALETTE.primary }}>{'<header>'}</Text> for the top of the page, <Text style={{ color: PALETTE.primary }}>{'<nav>'}</Text> for navigation, <Text style={{ color: PALETTE.primary }}>{'<main>'}</Text> for the main content, and <Text style={{ color: PALETTE.primary }}>{'<footer>'}</Text> for the bottom.</Callout>
      </Animated.View>

      {/* Multimedia */}
      <Animated.View entering={FadeInUp.delay(2400).duration(700)} style={styles.sectionCard} ref={sectionRefs.media}>
        <Text style={styles.sectionTitle}>Multimedia</Text>
        <Text style={styles.sectionText}>
          HTML supports embedding images, audio, video, SVG, and canvas. Use <Text style={{ color: PALETTE.primary }}>{'<audio>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<video>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<canvas>'}</Text>, and <Text style={{ color: PALETTE.primary }}>{'<svg>'}</Text> for rich media.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<audio controls>\n  <source src="sound.mp3" type="audio/mpeg">\n</audio>\n<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>`}</Text>
          <CopyButton text={`<audio controls>\n  <source src="sound.mp3" type="audio/mpeg">\n</audio>\n<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>{'<audio>'}</Text> for audio and <Text style={{ color: PALETTE.primary }}>{'<video>'}</Text> for video. Include <Text style={{ color: PALETTE.primary }}>controls</Text> attribute for user interaction.</Callout>
      </Animated.View>

      {/* Meta & SEO */}
      <Animated.View entering={FadeInUp.delay(2600).duration(700)} style={styles.sectionCard} ref={sectionRefs.meta}>
        <Text style={styles.sectionTitle}>Meta & SEO</Text>
        <Text style={styles.sectionText}>
          Meta tags go inside the <Text style={{ color: PALETTE.primary }}>{'<head>'}</Text> and provide metadata about the document. Important for SEO and social sharing.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<meta charset="UTF-8">\n<meta name="description" content="Free Web tutorials">\n<meta name="keywords" content="HTML,CSS,JavaScript">\n<meta name="author" content="John Doe">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</Text>
          <CopyButton text={`<meta charset="UTF-8">\n<meta name="description" content="Free Web tutorials">\n<meta name="keywords" content="HTML,CSS,JavaScript">\n<meta name="author" content="John Doe">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>{'<meta>'}</Text> tags to provide metadata about your HTML document, including character set, description, keywords, author, and viewport settings.</Callout>
      </Animated.View>

      {/* Accessibility */}
      <Animated.View entering={FadeInUp.delay(2800).duration(700)} style={styles.sectionCard} ref={sectionRefs.accessibility}>
        <Text style={styles.sectionTitle}>Accessibility</Text>
        <Text style={styles.sectionText}>
          Use semantic HTML, proper <Text style={{ color: PALETTE.primary }}>alt</Text> text, labels, and ARIA attributes to make your site accessible to all users, including those using screen readers.
        </Text>
        <Text style={styles.sectionText}>
          Ensure good color contrast, keyboard navigation, and logical heading order for best accessibility.
        </Text>
        <Callout type="tip">Use semantic HTML, proper <Text style={{ color: PALETTE.primary }}>alt</Text> text, labels, and ARIA attributes to make your site accessible to all users, including those using screen readers.</Callout>
      </Animated.View>

      {/* Best Practices */}
      <Animated.View entering={FadeInUp.delay(3000).duration(700)} style={styles.sectionCard} ref={sectionRefs.best}>
        <Text style={styles.sectionTitle}>Best Practices</Text>
        <Text style={styles.sectionText}>
          - Always use semantic elements for structure.
        </Text>
        <Text style={styles.sectionText}>
          - Keep code clean, indented, and well-commented.
        </Text>
        <Text style={styles.sectionText}>
          - Use external CSS and JavaScript files for separation of concerns.
        </Text>
        <Text style={styles.sectionText}>
          - Optimize images and media for performance.
        </Text>
        <Text style={styles.sectionText}>
          - Test your site for accessibility and responsiveness.
        </Text>
        <Callout type="tip">Always use semantic elements for structure. Keep code clean, indented, and well-commented. Use external CSS and JavaScript files for separation of concerns. Optimize images and media for performance. Test your site for accessibility and responsiveness.</Callout>
      </Animated.View>

      {/* Web Components & Shadow DOM (deep) */}
      <Animated.View entering={FadeInUp.delay(5400).duration(700)} style={styles.sectionCard} ref={sectionRefs.webcomponents}>
        <Text style={styles.sectionTitle}>Web Components & Shadow DOM (Deep Dive)</Text>
        <Text style={styles.sectionText}>Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.</Text>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>Custom Elements:</Text> Define your own HTML elements with custom behavior.</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`class MyElement extends HTMLElement {
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
customElements.define('my-element', MyElement);`}</Text>
          <CopyButton text={`class MyElement extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: 'open' });\n    this.shadowRoot.innerHTML = '<p>Hello from shadow DOM!</p>';\n  }\n  connectedCallback() {\n    // Called when element is added to the DOM\n  }\n  disconnectedCallback() {\n    // Called when element is removed\n  }\n  attributeChangedCallback(name, oldValue, newValue) {\n    // Called when observed attribute changes\n  }\n  adoptedCallback() {\n    // Called when element is moved to a new document\n  }\n  static get observedAttributes() { return ['data-attr']; }\n}\ncustomElements.define('my-element', MyElement);`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>{'slot'}</Text> elements to allow children to be projected into your custom element.</Callout>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>Advanced Slot Example:</Text></Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<my-element>
  <span slot="content">This will be projected</span>
</my-element>`}</Text>
          <CopyButton text={`<my-element>\n  <span slot="content">This will be projected</span>\n</my-element>`} />
        </View>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>Scoped Styles Example:</Text></Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`this.shadowRoot.innerHTML = '<style>p { color: red; }</style><p>Styled!</p>';
`}</Text>
          <CopyButton text={`this.shadowRoot.innerHTML = '<style>p { color: red; }</style><p>Styled!</p>';`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>{'mode: "open"'}</Text> to allow external JS to access the shadowRoot. Use <Text style={{ color: PALETTE.primary }}>{'mode: "closed"'}</Text> for full encapsulation.</Callout>
        <Callout type="warning">Custom elements must contain a hyphen (e.g., <Text style={{ color: PALETTE.primary }}>{'my-element'}</Text>).</Callout>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>Custom Events and Bubbling:</Text> Dispatch and listen for custom events from your components.</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`this.dispatchEvent(new CustomEvent('my-event', { detail: { foo: 1 }, bubbles: true }));`}</Text>
          <CopyButton text={`this.dispatchEvent(new CustomEvent('my-event', { detail: { foo: 1 }, bubbles: true }));`} />
        </View>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>Browser Support:</Text> Chrome, Edge, Firefox, Safari (with some polyfills for older versions).</Text>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>Framework Interop:</Text> Use custom elements in React, Angular, Vue, but check for attribute/property binding differences.</Text>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>{'@webcomponents/webcomponentsjs'}</Text> for polyfills.</Callout>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>Accessibility:</Text> Add ARIA roles and ensure keyboard navigation for custom elements.</Text>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>SEO:</Text> Use <Text style={{ color: PALETTE.primary }}>{'is'}</Text> attribute or fallback content for custom elements to ensure they are indexed.</Text>
      </Animated.View>

      {/* ARIA & Accessibility (Deep Dive) */}
      <Animated.View entering={FadeInUp.delay(4200).duration(700)} style={styles.sectionCard} ref={sectionRefs.aria}>
        <Text style={styles.sectionTitle}>ARIA & Accessibility (Deep Dive)</Text>
        <Text style={styles.sectionText}>ARIA (Accessible Rich Internet Applications) provides attributes to make web content and applications more accessible to people with disabilities.</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<button aria-label="Close" aria-pressed="false">X</button>
<div role="alert">This is an important message!</div>
<ul role="listbox">
  <li role="option">Item 1</li>
</ul>`}</Text>
          <CopyButton text={`<button aria-label="Close" aria-pressed="false">X</button>\n<div role="alert">This is an important message!</div>\n<ul role="listbox">\n  <li role="option">Item 1</li>\n</ul>`} />
        </View>
        <Callout type="tip">Use ARIA roles, states, and properties only when native HTML cannot provide the needed semantics.</Callout>
        <Callout type="warning">Misusing ARIA can make your site less accessible. Prefer semantic HTML whenever possible.</Callout>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>Live Regions:</Text> Use <Text style={{ color: PALETTE.primary }}>{'aria-live'}</Text> for dynamic content updates.</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<div aria-live="polite">New notifications will appear here.</div>`}</Text>
          <CopyButton text={`<div aria-live="polite">New notifications will appear here.</div>`} />
        </View>
        <Callout type="tip">Test accessibility with screen readers and keyboard navigation.</Callout>
      </Animated.View>

      {/* HTML Security (Deep Dive) */}
      <Animated.View entering={FadeInUp.delay(4600).duration(700)} style={styles.sectionCard} ref={sectionRefs.security}>
        <Text style={styles.sectionTitle}>HTML Security (Deep Dive)</Text>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>XSS (Cross-Site Scripting):</Text> Never trust user input. Always escape or sanitize data before inserting into the DOM.</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<!-- BAD: -->
<div id="output"></div>
document.getElementById('output').innerHTML = userInput;

<!-- GOOD: -->
document.createTextNode(userInput);`}</Text>
          <CopyButton text={`<!-- BAD: -->\n<div id="output"></div>\ndocument.getElementById('output').innerHTML = userInput;\n\n<!-- GOOD: -->\ndocument.createTextNode(userInput);`} />
        </View>
        <Callout type="warning">Never use <Text style={{ color: PALETTE.primary }}>{'innerHTML'}</Text> with untrusted data.</Callout>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>CSP (Content Security Policy):</Text> Use CSP headers or meta tags to restrict what resources can be loaded.</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.example.com">`}</Text>
          <CopyButton text={`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.example.com">`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>{'sandbox'}</Text> attribute on iframes to restrict capabilities.</Callout>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>SRI (Subresource Integrity):</Text> Use SRI to ensure external scripts/styles are not tampered with.</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<script src="https://cdn.example.com/lib.js" integrity="sha384-..." crossorigin="anonymous"></script>`}</Text>
          <CopyButton text={`<script src="https://cdn.example.com/lib.js" integrity="sha384-..." crossorigin="anonymous"></script>`} />
        </View>
      </Animated.View>

      {/* Performance (deep) */}
      <Animated.View entering={FadeInUp.delay(6000).duration(700)} style={styles.sectionCard} ref={sectionRefs.performance}>
        <Text style={styles.sectionTitle}>HTML Performance (Deep Dive)</Text>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>Lazy Loading:</Text> Use <Text style={{ color: PALETTE.primary }}>loading={"lazy"}</Text> on images and iframes.</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<img src="large.jpg" loading="lazy" alt="Lazy loaded image">`}</Text>
          <CopyButton text={`<img src="large.jpg" loading="lazy" alt="Lazy loaded image">`} />
        </View>
        <Text style={styles.sectionText}><Text style={{ fontWeight: 'bold' }}>Preloading & Resource Hints:</Text> Use <Text style={{ color: PALETTE.primary }}>{'<link rel="preload">'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<link rel="dns-prefetch">'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<link rel="prefetch">'}</Text> for performance.</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<link rel="preload" href="main.js" as="script">
<link rel="dns-prefetch" href="//fonts.googleapis.com">`}</Text>
          <CopyButton text={`<link rel="preload" href="main.js" as="script">\n<link rel="dns-prefetch" href="//fonts.googleapis.com">`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>{'async'}</Text> and <Text style={{ color: PALETTE.primary }}>{'defer'}</Text> on scripts to improve page load.</Callout>
      </Animated.View>

      {/* Service Workers & Offline HTML */}
      <Animated.View entering={FadeInUp.delay(6200).duration(700)} style={styles.sectionCard} ref={sectionRefs.serviceworkers}>
        <Text style={styles.sectionTitle}>Service Workers & Offline HTML</Text>
        <Text style={styles.sectionText}>Service Workers enable offline support, background sync, and push notifications for web apps.</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW registered', reg));
}`}</Text>
          <CopyButton text={`if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js')\n    .then(reg => console.log('SW registered', reg));\n}`} />
        </View>
        <Callout type="tip">Service workers must be served over HTTPS and are scope-limited to their directory.</Callout>
      </Animated.View>

      {/* Microdata, RDFa, JSON-LD (Structured Data) */}
      <Animated.View entering={FadeInUp.delay(6400).duration(700)} style={styles.sectionCard} ref={sectionRefs.structured}>
        <Text style={styles.sectionTitle}>Structured Data: Microdata, RDFa, JSON-LD</Text>
        <Text style={styles.sectionText}>Structured data helps search engines understand your content. Use Microdata, RDFa, or JSON-LD for rich results.</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">Jane Doe</span>
  <span itemprop="jobTitle">Professor</span>
</div>`}</Text>
          <CopyButton text={`<div itemscope itemtype="https://schema.org/Person">\n  <span itemprop="name">Jane Doe</span>\n  <span itemprop="jobTitle">Professor</span>\n</div>`} />
        </View>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jane Doe",
  "jobTitle": "Professor"
}
</script>`}</Text>
          <CopyButton text={`<script type="application/ld+json">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Person\",\n  \"name\": \"Jane Doe\",\n  \"jobTitle\": \"Professor\"\n}\n</script>`} />
        </View>
        <Callout type="tip">JSON-LD is the recommended format for structured data by Google.</Callout>
      </Animated.View>

      {/* HTML5 Global Attributes Reference Table (partial) */}
      <Animated.View entering={FadeInUp.delay(6600).duration(700)} style={styles.sectionCard} ref={sectionRefs.globals}>
        <Text style={styles.sectionTitle}>HTML5 Global Attributes (Partial)</Text>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.code}>{`class      // CSS class\nid         // Unique identifier\nstyle      // Inline CSS\nhidden     // Hide element\nlang       // Language code\ntitle      // Tooltip text\ntabindex   // Keyboard navigation\ncontenteditable // Editable content\ndraggable  // Enable drag & drop\nspellcheck // Enable spell checking`}</Text>
        </View>
        <Callout type="tip">All HTML elements support these global attributes unless otherwise specified.</Callout>
      </Animated.View>

      {/* References */}
      <Animated.View entering={FadeInUp.delay(3200).duration(700)} style={styles.sectionCard} ref={sectionRefs.resources}>
        <Text style={styles.sectionTitle}>References & Resources</Text>
        <Pressable onPress={() => openLink('https://developer.mozilla.org/en-US/docs/Web/HTML')}>
          <Text style={[styles.sectionText, { color: PALETTE.accent, textDecorationLine: 'underline' }]}>- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/HTML</Text>
        </Pressable>
        <Pressable onPress={() => openLink('https://html.spec.whatwg.org/')}>
          <Text style={[styles.sectionText, { color: PALETTE.accent, textDecorationLine: 'underline' }]}>- W3C HTML Spec: https://html.spec.whatwg.org/</Text>
        </Pressable>
        <Pressable onPress={() => openLink('https://www.w3schools.com/html/')}>
          <Text style={[styles.sectionText, { color: PALETTE.accent, textDecorationLine: 'underline' }]}>- W3Schools HTML Tutorial: https://www.w3schools.com/html/</Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20, // reduced from 40
    paddingHorizontal: 4, // reduced from 8
  },
  // heroCard removed, use sectionCard for all cards
  heroTitle: {
    fontSize: 36,
    color: LUXURY.text,
    marginBottom: 12,
    letterSpacing: 1.2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: 18,
    color: LUXURY.textMuted,
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 28,
  },
  tocCard: {
    width: '95%',
    backgroundColor: LUXURY.card,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: LUXURY.gold,
    padding: 24,
    marginBottom: 32,
    shadowColor: LUXURY.gold,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  tocTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: LUXURY.gold,
    marginBottom: 10,
  },
  tocItem: {
    fontSize: 16,
    color: LUXURY.textMuted,
    marginBottom: 4,
    marginLeft: 8,
  },
  sectionCard: {
    width: '95%',
    backgroundColor: LUXURY.card,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: LUXURY.cardBorder,
    padding: 14, // reduced from 24
    marginBottom: 18, // reduced from 28
    shadowColor: LUXURY.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PALETTE.primary,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: LUXURY.text,
    marginBottom: 8,
    lineHeight: 24,
  },
  codeBlock: {
    backgroundColor: '#23272F',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    marginBottom: 8,
    width: '100%',
  },
  code: {
    color: '#FFD166',
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 14,
  },
  callout: {
    backgroundColor: '#E0F2F7',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: PALETTE.primary,
  },
  calloutTip: {
    borderLeftColor: PALETTE.primary,
  },
  calloutWarning: {
    borderLeftColor: '#FFD166',
  },
  calloutText: {
    color: LUXURY.text,
    fontSize: 14,
    lineHeight: 20,
  },
  collapsibleSection: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: LUXURY.cardBorder,
    padding: 16,
    marginBottom: 16,
    backgroundColor: LUXURY.card,
  },
  collapsibleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PALETTE.primary,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyBtn: {
    backgroundColor: PALETTE.primary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  copyBtnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
}); 