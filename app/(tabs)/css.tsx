import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef } from "react";
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
  const sectionRefs = {
    intro: useRef(null),
    syntax: useRef(null),
    selectors: useRef(null),
    specificity: useRef(null),
    box: useRef(null),
    layout: useRef(null),
    flex: useRef(null),
    grid: useRef(null),
    variables: useRef(null),
    animation: useRef(null),
    responsive: useRef(null),
    preprocess: useRef(null),
    browser: useRef(null),
    best: useRef(null),
    resources: useRef(null),
  };
  const toc: { key: keyof typeof sectionRefs; label: string }[] = [
    { key: 'intro', label: 'Introduction' },
    { key: 'syntax', label: 'Syntax & Structure' },
    { key: 'selectors', label: 'Selectors' },
    { key: 'specificity', label: 'Specificity & Cascade' },
    { key: 'box', label: 'Box Model' },
    { key: 'layout', label: 'Layout: Block, Inline, Position' },
    { key: 'flex', label: 'Flexbox' },
    { key: 'grid', label: 'CSS Grid' },
    { key: 'variables', label: 'Custom Properties (Variables)' },
    { key: 'animation', label: 'Transitions & Animations' },
    { key: 'responsive', label: 'Responsive Design' },
    { key: 'preprocess', label: 'Preprocessors & PostCSS' },
    { key: 'browser', label: 'Browser Support & Prefixes' },
    { key: 'best', label: 'Best Practices' },
    { key: 'resources', label: 'References' },
  ];
  const openLink = (url: string) => Linking.openURL(url);
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
  return (
    <ScrollView ref={scrollRef} style={{ backgroundColor: LUXURY.background }} contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <Animated.View entering={FadeInUp.duration(700)} style={[styles.sectionCard, { marginTop: 12 }]} ref={sectionRefs.intro}>
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
      <Animated.View entering={FadeInUp.delay(400).duration(700)} style={styles.sectionCard} ref={sectionRefs.intro}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.sectionText}>
          CSS (Cascading Style Sheets) is the language used to describe the presentation of HTML or XML documents. CSS controls layout, colors, fonts, spacing, and much more.
        </Text>
        <Callout type="tip">CSS is supported by all modern browsers and is essential for responsive, accessible, and visually appealing web design.</Callout>
      </Animated.View>
      {/* Syntax & Structure */}
      <Animated.View entering={FadeInUp.delay(600).duration(700)} style={styles.sectionCard} ref={sectionRefs.syntax}>
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
      <Animated.View entering={FadeInUp.delay(800).duration(700)} style={styles.sectionCard} ref={sectionRefs.selectors}>
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
      <Animated.View entering={FadeInUp.delay(1000).duration(700)} style={styles.sectionCard} ref={sectionRefs.specificity}>
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
      <Animated.View entering={FadeInUp.delay(1200).duration(700)} style={styles.sectionCard} ref={sectionRefs.box}>
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
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>box-sizing: border-box</Text> to include padding and border in the element{"'"}s total width and height.</Callout>
      </Animated.View>
      {/* Layout: Block, Inline, Position */}
      <Animated.View entering={FadeInUp.delay(1400).duration(700)} style={styles.sectionCard} ref={sectionRefs.layout}>
        <Text style={styles.sectionTitle}>Layout: Block, Inline, Position</Text>
        <Text style={styles.sectionText}>
          CSS controls how elements are displayed: block, inline, inline-block, and positioned (relative, absolute, fixed, sticky).
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`span { display: inline; }
div { display: block; }
.menu { position: fixed; top: 0; }`}</Text>
          <CopyButton text={`span { display: inline; }
div { display: block; }
.menu { position: fixed; top: 0; }`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>position: sticky</Text> for sticky headers and sidebars.</Callout>
      </Animated.View>
      {/* Flexbox */}
      <Animated.View entering={FadeInUp.delay(1600).duration(700)} style={styles.sectionCard} ref={sectionRefs.flex}>
        <Text style={styles.sectionTitle}>Flexbox</Text>
        <Text style={styles.sectionText}>
          Flexbox is a layout model for distributing space and aligning items in a container, even when their size is unknown.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}`}</Text>
          <CopyButton text={`.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>gap</Text> for spacing between flex items (supported in all modern browsers).</Callout>
      </Animated.View>
      {/* CSS Grid */}
      <Animated.View entering={FadeInUp.delay(1800).duration(700)} style={styles.sectionCard} ref={sectionRefs.grid}>
        <Text style={styles.sectionTitle}>CSS Grid</Text>
        <Text style={styles.sectionText}>
          CSS Grid is a two-dimensional layout system for the web. It allows you to create complex layouts easily.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
}`}</Text>
          <CopyButton text={`.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
}`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>minmax</Text> and <Text style={{ color: PALETTE.primary }}>auto-fit</Text> for responsive grids.</Callout>
      </Animated.View>
      {/* Custom Properties (Variables) */}
      <Animated.View entering={FadeInUp.delay(2000).duration(700)} style={styles.sectionCard} ref={sectionRefs.variables}>
        <Text style={styles.sectionTitle}>Custom Properties (Variables)</Text>
        <Text style={styles.sectionText}>
          CSS variables allow you to store values for reuse throughout your stylesheet.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`:root {
  --main-color: #6C63FF;
}
.button {
  background: var(--main-color);
}`}</Text>
          <CopyButton text={`:root {
  --main-color: #6C63FF;
}
.button {
  background: var(--main-color);
}`} />
        </View>
        <Callout type="tip">Variables are inherited and can be dynamically changed with JavaScript.</Callout>
      </Animated.View>
      {/* Transitions & Animations */}
      <Animated.View entering={FadeInUp.delay(2200).duration(700)} style={styles.sectionCard} ref={sectionRefs.animation}>
        <Text style={styles.sectionTitle}>Transitions & Animations</Text>
        <Text style={styles.sectionText}>
          CSS transitions and animations allow you to animate changes to properties.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`.box {
  transition: background 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`}</Text>
          <CopyButton text={`.box {
  transition: background 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>will-change</Text> for performance optimization of animating properties.</Callout>
      </Animated.View>
      {/* Responsive Design */}
      <Animated.View entering={FadeInUp.delay(2400).duration(700)} style={styles.sectionCard} ref={sectionRefs.responsive}>
        <Text style={styles.sectionTitle}>Responsive Design</Text>
        <Text style={styles.sectionText}>
          Use media queries, relative units, and modern layout techniques to create responsive designs.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`@media (max-width: 600px) {
  .container { flex-direction: column; }
}`}</Text>
          <CopyButton text={`@media (max-width: 600px) {
  .container { flex-direction: column; }
}`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>rem</Text> and <Text style={{ color: PALETTE.primary }}>em</Text> units for scalable layouts.</Callout>
      </Animated.View>
      {/* Preprocessors & PostCSS */}
      <Animated.View entering={FadeInUp.delay(2600).duration(700)} style={styles.sectionCard} ref={sectionRefs.preprocess}>
        <Text style={styles.sectionTitle}>Preprocessors & PostCSS</Text>
        <Text style={styles.sectionText}>
          CSS preprocessors like SASS, LESS, and Stylus add features like variables, nesting, and mixins. PostCSS is a tool for transforming CSS with JavaScript plugins.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`$main-color: #6C63FF;
.button {
  background: $main-color;
}`}</Text>
          <CopyButton text={`$main-color: #6C63FF;
.button {
  background: $main-color;
}`} />
        </View>
        <Callout type="tip">Use autoprefixer with PostCSS to add vendor prefixes automatically.</Callout>
      </Animated.View>
      {/* Browser Support & Prefixes */}
      <Animated.View entering={FadeInUp.delay(2800).duration(700)} style={styles.sectionCard} ref={sectionRefs.browser}>
        <Text style={styles.sectionTitle}>Browser Support & Prefixes</Text>
        <Text style={styles.sectionText}>
          Use <Text style={{ color: PALETTE.primary }}>caniuse.com</Text> to check browser support. Use vendor prefixes for experimental features.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`/* Vendor prefixes */
.box {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}`}</Text>
          <CopyButton text={`/* Vendor prefixes */
.box {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}`} />
        </View>
        <Callout type="tip">Use tools like Autoprefixer to automate prefixing.</Callout>
      </Animated.View>
      {/* Best Practices */}
      <Animated.View entering={FadeInUp.delay(3000).duration(700)} style={styles.sectionCard} ref={sectionRefs.best}>
        <Text style={styles.sectionTitle}>Best Practices</Text>
        <Text style={styles.sectionText}>
          - Keep CSS modular and reusable.
        </Text>
        <Text style={styles.sectionText}>
          - Use BEM or other naming conventions for classes.
        </Text>
        <Text style={styles.sectionText}>
          - Minimize specificity and avoid !important.
        </Text>
        <Text style={styles.sectionText}>
          - Test in all major browsers and devices.
        </Text>
        <Text style={styles.sectionText}>
          - Use CSS variables and custom properties for theming.
        </Text>
        <Callout type="tip">Keep your CSS clean, DRY, and well-documented for maintainability.</Callout>
      </Animated.View>
      {/* References */}
      <Animated.View entering={FadeInUp.delay(3200).duration(700)} style={styles.sectionCard} ref={sectionRefs.resources}>
        <Text style={styles.sectionTitle}>References & Resources</Text>
        <Pressable onPress={() => openLink('https://developer.mozilla.org/en-US/docs/Web/CSS')}>
          <Text style={[styles.sectionText, { color: PALETTE.accent, textDecorationLine: 'underline' }]}>- MDN CSS Docs: https://developer.mozilla.org/en-US/docs/Web/CSS</Text>
        </Pressable>
        <Pressable onPress={() => openLink('https://css-tricks.com/')}>
          <Text style={[styles.sectionText, { color: PALETTE.accent, textDecorationLine: 'underline' }]}>- CSS-Tricks: https://css-tricks.com/</Text>
        </Pressable>
        <Pressable onPress={() => openLink('https://caniuse.com/')}>
          <Text style={[styles.sectionText, { color: PALETTE.accent, textDecorationLine: 'underline' }]}>- Can I use: https://caniuse.com/</Text>
        </Pressable>
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
}); 