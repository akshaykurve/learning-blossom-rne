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

function Callout({ type, children }: { type: 'tip' | 'warning', children: React.ReactNode }) {
  return (
    <View style={[styles.callout, type === 'tip' ? styles.calloutTip : styles.calloutWarning]}>
      <Text style={styles.calloutText}>{type === 'tip' ? '💡 Tip: ' : '⚠️ Warning: '}{children}</Text>
    </View>
  );
}

function CopyButton({ text }: { text: string }) {
  return (
    <Pressable onPress={() => Clipboard.setString(text)} style={styles.copyBtn}>
      <Text style={styles.copyBtnText}>Copy</Text>
    </Pressable>
  );
}

export default function CSSScreen() {
  const scrollRef = useRef(null);
  const [sectionPositions, setSectionPositions] = useState<{ [key: string]: number }>({});

  const toc: { key: string; label: string }[] = [
    { key: 'Introduction', label: 'Introduction' },
    { key: 'Syntax & Structure', label: 'Syntax & Structure' },
    { key: 'Selectors', label: 'Selectors' },
    { key: 'Specificity & Cascade', label: 'Specificity & Cascade' },
    { key: 'Box Model', label: 'Box Model' },
    { key: 'Layout: Block, Inline, Position', label: 'Layout: Block, Inline, Position' },
    { key: 'Flexbox', label: 'Flexbox' },
    { key: 'CSS Grid', label: 'CSS Grid' },
    { key: 'Custom Properties (Variables)', label: 'Custom Properties (Variables)' },
    { key: 'Transitions & Animations', label: 'Transitions & Animations' },
    { key: 'Responsive Design', label: 'Responsive Design' },
    { key: 'Preprocessors & PostCSS', label: 'Preprocessors & PostCSS' },
    { key: 'Browser Support & Prefixes', label: 'Browser Support & Prefixes' },
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

  const openLink = (url: string) => Linking.openURL(url);
  
  return (
    <ScrollView ref={scrollRef} style={{ backgroundColor: LUXURY.background }} contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <Animated.View entering={FadeInUp.duration(700)} style={[styles.sectionCard, { marginTop: 12 }]}>
        <MaterialCommunityIcons name="language-css3" size={60} color={LUXURY.gold} style={{ marginBottom: 16 }} />
        <Text style={styles.heroTitle}>CSS Documentation</Text>
        <Text style={styles.heroSubtitle}>
          The official, comprehensive guide to <Text style={{ color: LUXURY.gold, fontWeight: 'bold' }}>CSS</Text> — the language for styling web pages.
        </Text>
      </Animated.View>

      {/* Table of Contents */}
      <Animated.View entering={FadeInUp.delay(200).duration(700)} style={[styles.sectionCard, { marginBottom: 32 }]}> 
        <Text style={styles.sectionTitle}>Table of Contents</Text>
        {toc.map((item) => (
          <Pressable key={item.key} onPress={() => scrollToSection(item.key)}>
            <Text style={[styles.tocItem, { color: PALETTE.primary }]}>• {item.label}</Text>
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
          CSS (Cascading Style Sheets) is the language used to describe the presentation of HTML or XML documents. CSS controls layout, colors, fonts, spacing, and much more.
        </Text>
        <Callout type="tip">CSS is supported by all modern browsers and is essential for responsive, accessible, and visually appealing web design.</Callout>
      </Animated.View>

      {/* Syntax & Structure */}
      <Animated.View 
        entering={FadeInUp.delay(600).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Syntax & Structure', event)}
      >
        <Text style={styles.sectionTitle}>Syntax & Structure</Text>
        <Text style={styles.sectionText}>
          CSS consists of selectors and declaration blocks. Each declaration includes a property and a value, separated by a colon and ended with a semicolon.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`selector {
  property: value;
}`}</Text>
          <CopyButton text={`selector {
  property: value;
}`} />
        </View>
        <Callout type="tip">Use consistent indentation and spacing for readability.</Callout>
      </Animated.View>

      {/* Selectors */}
      <Animated.View 
        entering={FadeInUp.delay(800).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Selectors', event)}
      >
        <Text style={styles.sectionTitle}>Selectors</Text>
        <Text style={styles.sectionText}>
          Selectors target HTML elements to apply styles. Types include element, class, ID, attribute, pseudo-class, and pseudo-element selectors.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`/* Element */
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
p::first-line { font-weight: bold; }`}</Text>
          <CopyButton text={`/* Element */
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
p::first-line { font-weight: bold; }`} />
        </View>
        <Callout type="tip">Use class selectors for reusable styles and avoid overusing ID selectors.</Callout>
      </Animated.View>

      {/* Specificity & Cascade */}
      <Animated.View 
        entering={FadeInUp.delay(1000).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Specificity & Cascade', event)}
      >
        <Text style={styles.sectionTitle}>Specificity & Cascade</Text>
        <Text style={styles.sectionText}>
          Specificity determines which CSS rule applies if multiple rules match the same element. The cascade is the order in which rules are applied.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`/* Specificity: ID > class > element */
#main { color: red; }   /* specificity: 100 */
.button { color: blue; } /* specificity: 10 */
p { color: green; }     /* specificity: 1 */`}</Text>
          <CopyButton text={`/* Specificity: ID > class > element */
#main { color: red; }   /* specificity: 100 */
.button { color: blue; } /* specificity: 10 */
p { color: green; }     /* specificity: 1 */`} />
        </View>
        <Callout type="tip">Use browser DevTools to inspect and debug specificity issues.</Callout>
      </Animated.View>

      {/* Box Model */}
      <Animated.View 
        entering={FadeInUp.delay(1200).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Box Model', event)}
      >
        <Text style={styles.sectionTitle}>Box Model</Text>
        <Text style={styles.sectionText}>
          Every element is a rectangular box. The box model consists of content, padding, border, and margin.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`div {
  width: 200px;
  padding: 10px;
  border: 2px solid #333;
  margin: 20px;
}`}</Text>
          <CopyButton text={`div {
  width: 200px;
  padding: 10px;
  border: 2px solid #333;
  margin: 20px;
}`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>box-sizing: border-box</Text> to include padding and border in element width.</Callout>
      </Animated.View>

      {/* Layout */}
      <Animated.View 
        entering={FadeInUp.delay(1400).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Layout: Block, Inline, Position', event)}
      >
        <Text style={styles.sectionTitle}>Layout: Block, Inline, Position</Text>
        <Text style={styles.sectionText}>
          CSS provides different display types and positioning methods to control layout.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`/* Display types */
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }

/* Positioning */
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }`}</Text>
          <CopyButton text={`/* Display types */
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }

/* Positioning */
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>position: relative</Text> on parent and <Text style={{ color: PALETTE.primary }}>position: absolute</Text> on child for precise positioning.</Callout>
      </Animated.View>

      {/* Flexbox */}
      <Animated.View 
        entering={FadeInUp.delay(1600).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Flexbox', event)}
      >
        <Text style={styles.sectionTitle}>Flexbox</Text>
        <Text style={styles.sectionText}>
          Flexbox is a one-dimensional layout method for arranging items in rows or columns.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.item {
  flex: 1;
  order: 2;
}`}</Text>
          <CopyButton text={`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.item {
  flex: 1;
  order: 2;
}`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>justify-content</Text> for main axis alignment and <Text style={{ color: PALETTE.primary }}>align-items</Text> for cross axis alignment.</Callout>
      </Animated.View>

      {/* CSS Grid */}
      <Animated.View 
        entering={FadeInUp.delay(1800).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('CSS Grid', event)}
      >
        <Text style={styles.sectionTitle}>CSS Grid</Text>
        <Text style={styles.sectionText}>
          CSS Grid is a two-dimensional layout system for creating complex web layouts.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}

.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`}</Text>
          <CopyButton text={`.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}

.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>fr</Text> units for flexible grid tracks and <Text style={{ color: PALETTE.primary }}>gap</Text> for spacing between grid items.</Callout>
      </Animated.View>

      {/* Custom Properties */}
      <Animated.View 
        entering={FadeInUp.delay(2000).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Custom Properties (Variables)', event)}
      >
        <Text style={styles.sectionTitle}>Custom Properties (Variables)</Text>
        <Text style={styles.sectionText}>
          CSS custom properties allow you to define reusable values throughout your stylesheet.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`:root {
  --primary-color: #6C63FF;
  --secondary-color: #48B1F3;
  --spacing: 1rem;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
}`}</Text>
          <CopyButton text={`:root {
  --primary-color: #6C63FF;
  --secondary-color: #48B1F3;
  --spacing: 1rem;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
}`} />
        </View>
        <Callout type="tip">Use custom properties for consistent theming and easier maintenance across your project.</Callout>
      </Animated.View>

      {/* Transitions & Animations */}
      <Animated.View 
        entering={FadeInUp.delay(2200).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Transitions & Animations', event)}
      >
        <Text style={styles.sectionTitle}>Transitions & Animations</Text>
        <Text style={styles.sectionText}>
          CSS provides powerful tools for creating smooth transitions and complex animations.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`/* Transitions */
.button {
  transition: all 0.3s ease;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s ease-in;
}`}</Text>
          <CopyButton text={`/* Transitions */
.button {
  transition: all 0.3s ease;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s ease-in;
}`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>transition</Text> for simple state changes and <Text style={{ color: PALETTE.primary }}>@keyframes</Text> for complex animations.</Callout>
      </Animated.View>

      {/* Responsive Design */}
      <Animated.View 
        entering={FadeInUp.delay(2400).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Responsive Design', event)}
      >
        <Text style={styles.sectionTitle}>Responsive Design</Text>
        <Text style={styles.sectionText}>
          Responsive design ensures your website looks great on all devices using media queries and flexible layouts.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`/* Mobile-first approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}`}</Text>
          <CopyButton text={`/* Mobile-first approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}`} />
        </View>
        <Callout type="tip">Start with mobile styles and use <Text style={{ color: PALETTE.primary }}>min-width</Text> media queries to progressively enhance for larger screens.</Callout>
      </Animated.View>

      {/* Preprocessors & PostCSS */}
      <Animated.View 
        entering={FadeInUp.delay(2600).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Preprocessors & PostCSS', event)}
      >
        <Text style={styles.sectionTitle}>Preprocessors & PostCSS</Text>
        <Text style={styles.sectionText}>
          CSS preprocessors like Sass and Less extend CSS with features like variables, nesting, and mixins.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Sass example
$primary-color: #6C63FF;

.button {
  background-color: $primary-color;
  
  &:hover {
    background-color: darken($primary-color, 10%);
  }
  
  &--large {
    padding: 1rem 2rem;
  }
}`}</Text>
          <CopyButton text={`// Sass example
$primary-color: #6C63FF;

.button {
  background-color: $primary-color;
  
  &:hover {
    background-color: darken($primary-color, 10%);
  }
  
  &--large {
    padding: 1rem 2rem;
  }
}`} />
        </View>
        <Callout type="tip">Use preprocessors for better organization and maintainability, but be mindful of over-nesting.</Callout>
      </Animated.View>

      {/* Browser Support & Prefixes */}
      <Animated.View 
        entering={FadeInUp.delay(2800).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Browser Support & Prefixes', event)}
      >
        <Text style={styles.sectionTitle}>Browser Support & Prefixes</Text>
        <Text style={styles.sectionText}>
          Different browsers may require vendor prefixes for certain CSS properties.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`.flexbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.transition {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}`}</Text>
          <CopyButton text={`.flexbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.transition {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}`} />
        </View>
        <Callout type="tip">Use tools like Autoprefixer to automatically add vendor prefixes based on your browser support requirements.</Callout>
      </Animated.View>

      {/* Best Practices */}
      <Animated.View 
        entering={FadeInUp.delay(3000).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('Best Practices', event)}
      >
        <Text style={styles.sectionTitle}>Best Practices</Text>
        <Text style={styles.sectionText}>
          Follow these best practices for clean, maintainable CSS code:
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`/* Use meaningful class names */
.user-profile-card { }
.navigation-menu { }

/* Group related styles */
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button--primary {
  background-color: var(--primary-color);
  color: white;
}

/* Use comments for complex sections */
/* Header styles */
.header { }`}</Text>
          <CopyButton text={`/* Use meaningful class names */
.user-profile-card { }
.navigation-menu { }

/* Group related styles */
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button--primary {
  background-color: var(--primary-color);
  color: white;
}

/* Use comments for complex sections */
/* Header styles */
.header { }`} />
        </View>
        <Callout type="tip">Use a consistent naming convention like BEM (Block, Element, Modifier) for better code organization.</Callout>
      </Animated.View>

      {/* Resources */}
      <Animated.View 
        entering={FadeInUp.delay(3200).duration(700)} 
        style={styles.sectionCard}
        onLayout={(event) => measureSection('References', event)}
      >
        <Text style={styles.sectionTitle}>References</Text>
        <Text style={styles.sectionText}>
          Here are some valuable resources for learning more about CSS:
        </Text>
        <View style={{ marginTop: 8 }}>
          <Pressable onPress={() => openLink('https://developer.mozilla.org/en-US/docs/Web/CSS')}>
            <Text style={[styles.sectionText, { color: PALETTE.primary, textDecorationLine: 'underline' }]}>
              • MDN Web Docs - CSS
            </Text>
          </Pressable>
          <Pressable onPress={() => openLink('https://css-tricks.com/')}>
            <Text style={[styles.sectionText, { color: PALETTE.primary, textDecorationLine: 'underline' }]}>
              • CSS-Tricks
            </Text>
          </Pressable>
          <Pressable onPress={() => openLink('https://caniuse.com/')}>
            <Text style={[styles.sectionText, { color: PALETTE.primary, textDecorationLine: 'underline' }]}>
              • Can I Use - Browser Support
            </Text>
          </Pressable>
        </View>
        <Callout type="tip">Bookmark these resources for quick reference while developing CSS styles.</Callout>
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
}); 