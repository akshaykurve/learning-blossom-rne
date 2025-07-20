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
  const [sectionPositions, setSectionPositions] = useState<{ [key: string]: number }>({});

  const toc: { key: string; label: string }[] = [
    { key: 'Introduction', label: 'Introduction' },
    { key: 'Basic Syntax', label: 'Basic Syntax' },
    { key: 'Document Structure', label: 'Document Structure' },
    { key: 'Elements & Attributes', label: 'Elements & Attributes' },
    { key: 'Text & Headings', label: 'Text & Headings' },
    { key: 'Links & Images', label: 'Links & Images' },
    { key: 'Lists', label: 'Lists' },
    { key: 'Tables', label: 'Tables' },
    { key: 'Forms & Inputs', label: 'Forms & Inputs' },
    { key: 'Semantic Elements', label: 'Semantic Elements' },
    { key: 'Multimedia', label: 'Multimedia' },
    { key: 'Meta & SEO', label: 'Meta & SEO' },
    { key: 'Accessibility', label: 'Accessibility' },
    { key: 'Best Practices', label: 'Best Practices' },
    { key: 'References', label: 'References' },
  ];

  const measureSection = (key: string, event: any) => {
    const { y } = event.nativeEvent.layout;
    setSectionPositions(prev => ({ ...prev, [key]: y }));
  };

  const scrollToSection = (key: string) => {
    const position = sectionPositions[key];
    if (position !== undefined && scrollRef.current) {
      (scrollRef.current as any).scrollTo({ y: position - 100, animated: true });
    }
  };

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView ref={scrollRef} style={{ backgroundColor: LUXURY.background }} contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <Animated.View entering={FadeInUp.duration(700)} style={[styles.sectionCard, { marginTop: 12 }]}>
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
      <Animated.View 
        entering={FadeInUp.delay(400).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Introduction', event)}
      >
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
      <Animated.View 
        entering={FadeInUp.delay(600).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Basic Syntax', event)}
      >
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
      <Animated.View 
        entering={FadeInUp.delay(800).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Document Structure', event)}
      >
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
      <Animated.View 
        entering={FadeInUp.delay(1000).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Elements & Attributes', event)}
      >
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
      <Animated.View 
        entering={FadeInUp.delay(1200).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Text & Headings', event)}
      >
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
      <Animated.View 
        entering={FadeInUp.delay(1400).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Links & Images', event)}
      >
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
      <Animated.View 
        entering={FadeInUp.delay(1600).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Lists', event)}
      >
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

      {/* Tables */}
      <Animated.View 
        entering={FadeInUp.delay(1800).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Tables', event)}
      >
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

      {/* Forms & Inputs */}
      <Animated.View 
        entering={FadeInUp.delay(2000).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Forms & Inputs', event)}
      >
        <Text style={styles.sectionTitle}>Forms & Inputs</Text>
        <Text style={styles.sectionText}>
          Forms collect user input. Use <Text style={{ color: PALETTE.primary }}>{'<form>'}</Text> with input elements like <Text style={{ color: PALETTE.primary }}>{'<input>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<textarea>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<select>'}</Text>, and <Text style={{ color: PALETTE.primary }}>{'<button>'}</Text>.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <input type="email" id="email" name="email" autocomplete="email">
  <input type="submit" value="Submit">
</form>`}</Text>
          <CopyButton text={`<form action="/submit" method="post">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" required>\n  <input type="email" id="email" name="email" autocomplete="email">\n  <input type="submit" value="Submit">\n</form>`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>{'required'}</Text> for mandatory fields. Use <Text style={{ color: PALETTE.primary }}>{'autocomplete'}</Text> for better UX and security.</Callout>
      </Animated.View>

      {/* Semantic Elements */}
      <Animated.View 
        entering={FadeInUp.delay(2200).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Semantic Elements', event)}
      >
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
      <Animated.View 
        entering={FadeInUp.delay(2400).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Multimedia', event)}
      >
        <Text style={styles.sectionTitle}>Multimedia</Text>
        <Text style={styles.sectionText}>
          HTML supports embedding images, audio, video, SVG, and canvas. Use <Text style={{ color: PALETTE.primary }}>{'<audio>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<video>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<canvas>'}</Text>, and <Text style={{ color: PALETTE.primary }}>{'<svg>'}</Text> for rich media.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n  Your browser does not support audio.\n</audio>\n\n<video width="320" height="240" controls>\n  <source src="video.mp4" type="video/mp4">\n  Your browser does not support video.\n</video>`}</Text>
          <CopyButton text={`<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n  Your browser does not support audio.\n</audio>\n\n<video width="320" height="240" controls>\n  <source src="video.mp4" type="video/mp4">\n  Your browser does not support video.\n</video>`} />
        </View>
        <Callout type="tip">Always provide fallback content for multimedia elements to ensure accessibility and compatibility.</Callout>
      </Animated.View>

      {/* Meta & SEO */}
      <Animated.View 
        entering={FadeInUp.delay(2600).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Meta & SEO', event)}
      >
        <Text style={styles.sectionTitle}>Meta & SEO</Text>
        <Text style={styles.sectionText}>
          Meta tags provide metadata about the HTML document. They are placed in the <Text style={{ color: PALETTE.primary }}>{'<head>'}</Text> section and are crucial for SEO and social media sharing.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Page description for SEO">\n  <meta name="keywords" content="HTML, CSS, JavaScript">\n  <meta property="og:title" content="Page Title">\n  <meta property="og:description" content="Page description">\n  <meta property="og:image" content="image.jpg">\n</head>`}</Text>
          <CopyButton text={`<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Page description for SEO">\n  <meta name="keywords" content="HTML, CSS, JavaScript">\n  <meta property="og:title" content="Page Title">\n  <meta property="og:description" content="Page description">\n  <meta property="og:image" content="image.jpg">\n</head>`} />
        </View>
        <Callout type="tip">Use descriptive meta descriptions and proper Open Graph tags for better social media sharing and SEO.</Callout>
      </Animated.View>

      {/* Accessibility */}
      <Animated.View 
        entering={FadeInUp.delay(2800).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Accessibility', event)}
      >
        <Text style={styles.sectionTitle}>Accessibility</Text>
        <Text style={styles.sectionText}>
          Make your HTML accessible to all users, including those with disabilities. Use semantic elements, proper heading structure, alt text for images, and ARIA attributes when needed.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<!-- Good accessibility practices -->\n<button aria-label="Close dialog">×</button>\n<img src="chart.png" alt="Sales chart showing 25% increase">\n<nav aria-label="Main navigation">\n  <ul>\n    <li><a href="#home">Home</a></li>\n    <li><a href="#about">About</a></li>\n  </ul>\n</nav>`}</Text>
          <CopyButton text={`<!-- Good accessibility practices -->\n<button aria-label="Close dialog">×</button>\n<img src="chart.png" alt="Sales chart showing 25% increase">\n<nav aria-label="Main navigation">\n  <ul>\n    <li><a href="#home">Home</a></li>\n    <li><a href="#about">About</a></li>\n  </ul>\n</nav>`} />
        </View>
        <Callout type="tip">Test your pages with screen readers and keyboard navigation to ensure they are accessible to all users.</Callout>
      </Animated.View>

      {/* Best Practices */}
      <Animated.View 
        entering={FadeInUp.delay(3000).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Best Practices', event)}
      >
        <Text style={styles.sectionTitle}>Best Practices</Text>
        <Text style={styles.sectionText}>
          Follow these best practices for clean, maintainable, and standards-compliant HTML code.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`<!-- ✅ Good practices -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Page Title</title>\n</head>\n<body>\n  <header>\n    <h1>Main Title</h1>\n  </header>\n  <main>\n    <section>\n      <h2>Section Title</h2>\n      <p>Content here.</p>\n    </section>\n  </main>\n  <footer>\n    <p>&copy; 2024</p>\n  </footer>\n</body>\n</html>`}</Text>
          <CopyButton text={`<!-- ✅ Good practices -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Page Title</title>\n</head>\n<body>\n  <header>\n    <h1>Main Title</h1>\n  </header>\n  <main>\n    <section>\n      <h2>Section Title</h2>\n      <p>Content here.</p>\n    </section>\n  </main>\n  <footer>\n    <p>&copy; 2024</p>\n  </footer>\n</body>\n</html>`} />
        </View>
        <Callout type="warning">❌ Avoid using deprecated tags like <Text style={{ color: PALETTE.primary }}>{'<font>'}</Text>, <Text style={{ color: PALETTE.primary }}>{'<center>'}</Text>, or <Text style={{ color: PALETTE.primary }}>{'<marquee>'}</Text>. Use CSS for styling instead.</Callout>
      </Animated.View>

      {/* References */}
      <Animated.View 
        entering={FadeInUp.delay(3200).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('References', event)}
      >
        <Text style={styles.sectionTitle}>References</Text>
        <Text style={styles.sectionText}>
          Explore these resources to learn more about HTML and web development.
        </Text>
        <View style={styles.linkContainer}>
          <Pressable onPress={() => openLink('https://developer.mozilla.org/en-US/docs/Web/HTML')}>
            <Text style={styles.link}>• MDN Web Docs - HTML</Text>
          </Pressable>
          <Pressable onPress={() => openLink('https://www.w3.org/TR/html52/')}>
            <Text style={styles.link}>• W3C HTML Specification</Text>
          </Pressable>
          <Pressable onPress={() => openLink('https://html.spec.whatwg.org/')}>
            <Text style={styles.link}>• HTML Living Standard</Text>
          </Pressable>
          <Pressable onPress={() => openLink('https://validator.w3.org/')}>
            <Text style={styles.link}>• W3C HTML Validator</Text>
          </Pressable>
        </View>
        <Callout type="tip">Use the W3C validator to check your HTML for errors and ensure it follows web standards.</Callout>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 4,
  },
  sectionCard: {
    width: '95%',
    backgroundColor: LUXURY.card,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: LUXURY.cardBorder,
    padding: 14,
    marginBottom: 18,
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
  tocTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: LUXURY.text,
    marginBottom: 12,
  },
  tocItem: {
    fontSize: 16,
    color: LUXURY.textMuted,
    marginBottom: 4,
    marginLeft: 8,
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
  linkContainer: {
    marginTop: 8,
  },
  link: {
    color: PALETTE.primary,
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
}); 