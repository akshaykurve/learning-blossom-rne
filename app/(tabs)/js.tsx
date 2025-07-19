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

export default function JSScreen() {
  const scrollRef = useRef(null);
  const sectionRefs = {
    intro: useRef(null),
    syntax: useRef(null),
    types: useRef(null),
    variables: useRef(null),
    operators: useRef(null),
    control: useRef(null),
    functions: useRef(null),
    objects: useRef(null),
    arrays: useRef(null),
    dom: useRef(null),
    es6: useRef(null),
    async: useRef(null),
    oop: useRef(null),
    patterns: useRef(null),
    modules: useRef(null),
    browser: useRef(null),
    best: useRef(null),
    resources: useRef(null),
    errors: useRef(null),
  };
  const toc: { key: keyof typeof sectionRefs; label: string }[] = [
    { key: 'intro', label: 'Introduction' },
    { key: 'syntax', label: 'Syntax & Structure' },
    { key: 'types', label: 'Types & Type Coercion' },
    { key: 'variables', label: 'Variables & Scope' },
    { key: 'operators', label: 'Operators & Expressions' },
    { key: 'control', label: 'Control Flow' },
    { key: 'functions', label: 'Functions & Closures' },
    { key: 'objects', label: 'Objects & Prototypes' },
    { key: 'arrays', label: 'Arrays & Iteration' },
    { key: 'dom', label: 'DOM & Events' },
    { key: 'es6', label: 'ES6+ Features' },
    { key: 'async', label: 'Async JS: Callbacks, Promises, Async/Await' },
    { key: 'oop', label: 'OOP & Classes' },
    { key: 'patterns', label: 'Patterns & Modules' },
    { key: 'modules', label: 'Modules & Bundling' },
    { key: 'browser', label: 'Browser APIs & BOM' },
    { key: 'errors', label: 'Error Handling' },
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
        <MaterialCommunityIcons name="language-javascript" size={60} color={LUXURY.gold} style={{ marginBottom: 16 }} />
        <Text style={styles.heroTitle}>JavaScript Documentation</Text>
        <Text style={styles.heroSubtitle}>
          The official, comprehensive guide to <Text style={{ color: LUXURY.gold, fontWeight: 'bold' }}>JavaScript</Text> — the language of the web.
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
      {/* Introduction (expanded) */}
      <Animated.View entering={FadeInUp.delay(400).duration(700)} style={styles.sectionCard} ref={sectionRefs.intro}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.sectionText}>
          JavaScript (JS) is a high-level, interpreted, multi-paradigm programming language that powers the dynamic behavior of most websites. It is essential for web interactivity, client-side logic, and modern web applications. JavaScript can also run on servers (Node.js), IoT devices, and even databases.
        </Text>
        <Text style={styles.sectionText}>
          JS is single-threaded, event-driven, and uses a prototype-based inheritance model. It supports functional, imperative, and object-oriented programming styles.
        </Text>
        <Callout type="tip">JavaScript is standardized as ECMAScript (ES). The latest version is ES2023, but ES6 (2015) introduced most modern features.</Callout>
        <Callout type="warning">JavaScript is not the same as Java. They are different languages with different purposes.</Callout>
      </Animated.View>
      {/* Syntax & Structure (expanded) */}
      <Animated.View entering={FadeInUp.delay(600).duration(700)} style={styles.sectionCard} ref={sectionRefs.syntax}>
        <Text style={styles.sectionTitle}>Syntax & Structure</Text>
        <Text style={styles.sectionText}>
          JavaScript syntax is C-like. Statements end with semicolons (optional but recommended). Code blocks use curly braces. Identifiers are case-sensitive. Whitespace is ignored except inside strings.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Single-line comment
/* Multi-line comment */
let x = 5;
if (x > 0) {
  console.log('Positive');
}
// Automatic Semicolon Insertion (ASI)
let y = 1
let z = 2
[y, z].forEach(console.log)`}</Text>
          <CopyButton text={`// Single-line comment
/* Multi-line comment */
let x = 5;
if (x > 0) {
  console.log('Positive');
}
// Automatic Semicolon Insertion (ASI)
let y = 1
let z = 2
[y, z].forEach(console.log)`} />
        </View>
        <Callout type="tip">Use strict mode (<Text style={{ color: PALETTE.primary }}>&#39;use strict&#39;</Text>) to catch common bugs and enable safer JavaScript.</Callout>
        <Callout type="warning">Automatic Semicolon Insertion (ASI) can cause bugs. Always use semicolons to avoid pitfalls.</Callout>
      </Animated.View>
      {/* Types & Type Coercion (expanded) */}
      <Animated.View entering={FadeInUp.delay(800).duration(700)} style={styles.sectionCard} ref={sectionRefs.types}>
        <Text style={styles.sectionTitle}>Types & Type Coercion</Text>
        <Text style={styles.sectionText}>
          JavaScript has 8 types: string, number, boolean, null, undefined, symbol, bigint, and object (including arrays, functions, dates, etc.). Types are dynamic and can change at runtime.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`typeof 42; // "number"
typeof 'hi'; // "string"
typeof null; // "object" (quirk)
typeof undefined; // "undefined"
typeof Symbol('s'); // "symbol"
typeof 10n; // "bigint"
typeof [1,2,3]; // "object"
typeof function(){}; // "function"`}</Text>
          <CopyButton text={`typeof 42; // "number"
typeof 'hi'; // "string"
typeof null; // "object" (quirk)
typeof undefined; // "undefined"
typeof Symbol('s'); // "symbol"
typeof 10n; // "bigint"
typeof [1,2,3]; // "object"
typeof function(){}; // "function"`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Type Coercion:</Text> JS automatically converts types in some operations. This can lead to unexpected results.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`1 + '2' // "12" (number + string = string)
1 - '2' // -1 (string converted to number)
false == 0 // true (loose equality)
false === 0 // false (strict equality)`}</Text>
          <CopyButton text={`1 + '2' // "12" (number + string = string)
1 - '2' // -1 (string converted to number)
false == 0 // true (loose equality)
false === 0 // false (strict equality)`} />
        </View>
        <Callout type="warning">Always use <Text style={{ color: PALETTE.primary }}>===</Text> for strict equality to avoid type coercion bugs.</Callout>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>Number()</Text>, <Text style={{ color: PALETTE.primary }}>String()</Text>, <Text style={{ color: PALETTE.primary }}>Boolean()</Text> for explicit conversion.</Callout>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Truthy &amp; Falsy Values:</Text> Falsy: <Text style={{ color: PALETTE.primary }}>false, 0, &#39;&#39;, null, undefined, NaN</Text>. Everything else is truthy.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`Boolean(0); // false
Boolean(''); // false
Boolean([]); // true
Boolean({}); // true`}</Text>
          <CopyButton text={`Boolean(0); // false
Boolean(''); // false
Boolean([]); // true
Boolean({}); // true`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>!!</Text> to convert a value to boolean.</Callout>
      </Animated.View>
      {/* Variables & Scope (expanded) */}
      <Animated.View entering={FadeInUp.delay(1000).duration(700)} style={styles.sectionCard} ref={sectionRefs.variables}>
        <Text style={styles.sectionTitle}>Variables & Scope</Text>
        <Text style={styles.sectionText}>
          Use <Text style={{ color: PALETTE.primary }}>let</Text> and <Text style={{ color: PALETTE.primary }}>const</Text> for block-scoped variables. <Text style={{ color: PALETTE.primary }}>var</Text> is function-scoped and hoisted. Variables declared without a keyword become global (not recommended).
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`let a = 1;
const b = 2;
var c = 3;
function test() {
  var d = 4;
  if (true) {
    let e = 5;
    const f = 6;
  }
  // console.log(e); // ReferenceError
}`}</Text>
          <CopyButton text={`let a = 1;
const b = 2;
var c = 3;
function test() {
  var d = 4;
  if (true) {
    let e = 5;
    const f = 6;
  }
  // console.log(e); // ReferenceError
}`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Hoisting:</Text> <Text style={{ color: PALETTE.primary }}>var</Text> declarations are hoisted and initialized as undefined. <Text style={{ color: PALETTE.primary }}>let</Text> and <Text style={{ color: PALETTE.primary }}>const</Text> are hoisted but not initialized (temporal dead zone).
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`console.log(x); // undefined
var x = 5;
console.log(y); // ReferenceError
let y = 10;`}</Text>
          <CopyButton text={`console.log(x); // undefined
var x = 5;
console.log(y); // ReferenceError
let y = 10;`} />
        </View>
        <Callout type="tip">Always declare variables at the top of their scope. Prefer <Text style={{ color: PALETTE.primary }}>const</Text> for values that do not change.</Callout>
        <Callout type="warning">Avoid using global variables. They can lead to hard-to-find bugs and conflicts.</Callout>
      </Animated.View>
      {/* Operators & Expressions (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(1200).duration(700)} style={styles.sectionCard} ref={sectionRefs.operators}>
        <Text style={styles.sectionTitle}>Operators & Expressions</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> Operators are special symbols or keywords that perform operations on operands (values and variables). Expressions combine values, variables, and operators to produce a result.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Types of Operators:</Text>{"\n"}
          <Text>• Arithmetic: <Text style={{ color: PALETTE.primary }}>+, -, *, /, %, **</Text></Text>{"\n"}
          <Text>• Assignment: <Text style={{ color: PALETTE.primary }}>=, +=, -=, *=, /=, %=, **=</Text></Text>{"\n"}
          <Text>• Comparison: <Text style={{ color: PALETTE.primary }}>==, ===, !=, !==, &gt;, &lt;, &gt;=, &lt;=</Text></Text>{"\n"}
          <Text>• Logical: <Text style={{ color: PALETTE.primary }}>&&, ||, !</Text></Text>{"\n"}
          <Text>• Bitwise: <Text style={{ color: PALETTE.primary }}>&, |, ^, ~, &lt;&lt;, &gt;&gt;, &gt;&gt;&gt;</Text></Text>{"\n"}
          <Text>• Ternary: <Text style={{ color: PALETTE.primary }}>condition ? expr1 : expr2</Text></Text>{"\n"}
          <Text>• Nullish Coalescing: <Text style={{ color: PALETTE.primary }}>??</Text></Text>{"\n"}
          <Text>• Optional Chaining: <Text style={{ color: PALETTE.primary }}>?.</Text></Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`let a = 5, b = 2;
a += b; // 7
let isEqual = (a === b); // false
let result = a > b ? 'a is greater' : 'b is greater';
let safe = user?.profile?.email ?? 'No email';`}</Text>
          <CopyButton text={`let a = 5, b = 2;
a += b; // 7
let isEqual = (a === b); // false
let result = a > b ? 'a is greater' : 'b is greater';
let safe = user?.profile?.email ?? 'No email';`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases:</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>==</Text> vs <Text style={{ color: PALETTE.primary }}>===</Text>: <Text>0 == false is true, but 0 === false is false.</Text></Text>{"\n"}
          <Text>• Division by zero: <Text>1/0 is Infinity.</Text></Text>{"\n"}
          <Text>• Chained assignments: <Text>let x = y = 10; (y becomes global if not declared).</Text></Text>
        </Text>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>??</Text> to provide defaults only for <Text style={{ color: PALETTE.primary }}>null</Text> or <Text style={{ color: PALETTE.primary }}>undefined</Text>.</Callout>
        <Callout type="warning">Always use <Text style={{ color: PALETTE.primary }}>===</Text> and <Text style={{ color: PALETTE.primary }}>!==</Text> for comparisons to avoid coercion bugs.</Callout>
        <Callout type="tip">Use parentheses to clarify complex expressions and avoid ambiguity.</Callout>
      </Animated.View>
      {/* Control Flow (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(1400).duration(700)} style={styles.sectionCard} ref={sectionRefs.control}>
        <Text style={styles.sectionTitle}>Control Flow</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> Control flow statements determine the order in which code is executed. JavaScript provides conditional statements, loops, and error handling constructs.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Types of Control Flow:</Text>{"\n"}
          <Text>• Conditional: <Text style={{ color: PALETTE.primary }}>if, else, else if, switch</Text></Text>{"\n"}
          <Text>• Loops: <Text style={{ color: PALETTE.primary }}>for, while, do...while, for...in, for...of</Text></Text>{"\n"}
          <Text>• Jump: <Text style={{ color: PALETTE.primary }}>break, continue, return</Text></Text>{"\n"}
          <Text>• Error Handling: <Text style={{ color: PALETTE.primary }}>try, catch, finally, throw</Text></Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`if (score > 90) {
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
}`}</Text>
          <CopyButton text={`if (score > 90) {
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
}`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>switch</Text> uses strict comparison (===) for case matching.</Text>{"\n"}
          <Text>• Always use <Text style={{ color: PALETTE.primary }}>break</Text> in <Text style={{ color: PALETTE.primary }}>switch</Text> cases to avoid fall-through.</Text>{"\n"}
          <Text>• Avoid infinite loops by ensuring loop conditions will eventually be false.</Text>{"\n"}
          <Text>• Use <Text style={{ color: PALETTE.primary }}>try/catch</Text> for error handling, especially with async/await.</Text>
        </Text>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>for...of</Text> for iterating arrays and <Text style={{ color: PALETTE.primary }}>for...in</Text> for objects (but beware of prototype properties).</Callout>
        <Callout type="warning">Never use <Text style={{ color: PALETTE.primary }}>return</Text> outside of a function. Avoid <Text style={{ color: PALETTE.primary }}>goto</Text> (not supported in JS).</Callout>
      </Animated.View>
      {/* Functions & Closures (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(1600).duration(700)} style={styles.sectionCard} ref={sectionRefs.functions}>
        <Text style={styles.sectionTitle}>Functions & Closures</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> Functions are reusable blocks of code. Closures are functions that remember the scope in which they were created, even after that scope has exited.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Types of Functions:</Text>{"\n"}
          <Text>• Function Declaration: <Text style={{ color: PALETTE.primary }}>function foo() {'{}'}</Text></Text>{"\n"}
          <Text>• Function Expression: <Text style={{ color: PALETTE.primary }}>const foo = function() {'{}'}</Text></Text>{"\n"}
          <Text>• Arrow Function: <Text style={{ color: PALETTE.primary }}>const foo = () =&gt; {'{}'}</Text></Text>{"\n"}
          <Text>• IIFE: <Text style={{ color: PALETTE.primary }}>(function() {'{}'})()</Text></Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`function add(a, b) {
  return a + b;
}
const sub = (a, b) => a - b;
const makeCounter = () => {
  let count = 0;
  return function() { count++; return count; };
};
const counter = makeCounter();
counter(); // 1
counter(); // 2`}</Text>
          <CopyButton text={`function add(a, b) {
  return a + b;
}
const sub = (a, b) => a - b;
const makeCounter = () => {
  let count = 0;
  return function() { count++; return count; };
};
const counter = makeCounter();
counter(); // 1
counter(); // 2`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• Function declarations are hoisted, but expressions are not.</Text>{"\n"}
          <Text>• Arrow functions do not have their own <Text style={{ color: PALETTE.primary }}>this</Text>, <Text style={{ color: PALETTE.primary }}>arguments</Text>, or <Text style={{ color: PALETTE.primary }}>new.target</Text>.</Text>{"\n"}
          <Text>• Closures can lead to memory leaks if not managed properly.</Text>{"\n"}
          <Text>• Use default parameters and rest/spread for flexible APIs.</Text>
        </Text>
        <Callout type="tip">Use closures for data privacy and factory functions.</Callout>
        <Callout type="warning">Avoid using <Text style={{ color: PALETTE.primary }}>arguments</Text> object in arrow functions.</Callout>
      </Animated.View>
      {/* Objects & Prototypes (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(1800).duration(700)} style={styles.sectionCard} ref={sectionRefs.objects}>
        <Text style={styles.sectionTitle}>Objects & Prototypes</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> Objects are collections of key-value pairs. Prototypes enable inheritance and sharing of methods and properties between objects.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Object Creation:</Text>{"\n"}
          <Text>• Object Literal: <Text style={{ color: PALETTE.primary }}>{'{}'}</Text></Text>{"\n"}
          <Text>• Constructor: <Text style={{ color: PALETTE.primary }}>new Object()</Text></Text>{"\n"}
          <Text>• Object.create(proto)</Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`const obj = { a: 1, b: 2 };
obj.c = 3;
console.log(obj.a);
// Prototypal inheritance
const parent = { greet() { return 'hi'; } };
const child = Object.create(parent);
child.greet();
// Property descriptors
Object.defineProperty(obj, 'd', { value: 4, writable: false });`}</Text>
          <CopyButton text={`const obj = { a: 1, b: 2 };
obj.c = 3;
console.log(obj.a);
// Prototypal inheritance
const parent = { greet() { return 'hi'; } };
const child = Object.create(parent);
child.greet();
// Property descriptors
Object.defineProperty(obj, 'd', { value: 4, writable: false });`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• Use <Text style={{ color: PALETTE.primary }}>Object.keys</Text>, <Text style={{ color: PALETTE.primary }}>Object.values</Text>, and <Text style={{ color: PALETTE.primary }}>Object.entries</Text> for iteration.</Text>{"\n"}
          <Text>• Use <Text style={{ color: PALETTE.primary }}>get</Text> and <Text style={{ color: PALETTE.primary }}>set</Text> for computed properties.</Text>{"\n"}
          <Text>• Avoid modifying <Text style={{ color: PALETTE.primary }}>__proto__</Text> directly.</Text>{"\n"}
          <Text>• Use <Text style={{ color: PALETTE.primary }}>Object.freeze</Text> to make objects immutable.</Text>
        </Text>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>Object.assign</Text> for shallow copies and <Text style={{ color: PALETTE.primary }}>structuredClone</Text> for deep copies.</Callout>
        <Callout type="warning">Be careful with property shadowing and prototype pollution.</Callout>
      </Animated.View>
      {/* Arrays & Iteration (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(2000).duration(700)} style={styles.sectionCard} ref={sectionRefs.arrays}>
        <Text style={styles.sectionTitle}>Arrays & Iteration</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> Arrays are ordered lists of values. JavaScript arrays are dynamic, can hold mixed types, and have many built-in methods for iteration and transformation.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Array Methods:</Text>{"\n"}
          <Text>• Iteration: <Text style={{ color: PALETTE.primary }}>forEach, map, filter, reduce, some, every, find, findIndex</Text></Text>{"\n"}
          <Text>• Mutation: <Text style={{ color: PALETTE.primary }}>push, pop, shift, unshift, splice, sort, reverse</Text></Text>{"\n"}
          <Text>• Access: <Text style={{ color: PALETTE.primary }}>at, includes, indexOf, join, slice, concat</Text></Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`const arr = [1, 2, 3];
arr.push(4);
arr.map(x => x * 2);
arr.filter(x => x % 2 === 0);
arr.reduce((sum, x) => sum + x, 0);
// Iterators
for (const val of arr) { console.log(val); }
// Spread
const arr2 = [...arr, 5];`}</Text>
          <CopyButton text={`const arr = [1, 2, 3];
arr.push(4);
arr.map(x => x * 2);
arr.filter(x => x % 2 === 0);
arr.reduce((sum, x) => sum + x, 0);
// Iterators
for (const val of arr) { console.log(val); }
// Spread
const arr2 = [...arr, 5];`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• Arrays can be sparse (missing indices).</Text>{"\n"}
          <Text>• Not all objects with a length property are arrays (e.g., arguments, NodeList).</Text>{"\n"}
          <Text>• Use <Text style={{ color: PALETTE.primary }}>Array.from</Text> to convert array-like objects.</Text>{"\n"}
          <Text>• Prefer <Text style={{ color: PALETTE.primary }}>map/filter/reduce</Text> for functional programming.</Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`function sum() {
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}`}</Text>
          <CopyButton text={`function sum() {
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>find</Text>, <Text style={{ color: PALETTE.primary }}>some</Text>, and <Text style={{ color: PALETTE.primary }}>every</Text> for expressive array logic.</Callout>
        <Callout type="warning">Be careful with <Text style={{ color: PALETTE.primary }}>sort</Text> (it mutates the array and sorts lexicographically by default).</Callout>
      </Animated.View>
      {/* DOM & Events (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(2200).duration(700)} style={styles.sectionCard} ref={sectionRefs.dom}>
        <Text style={styles.sectionTitle}>DOM & Events</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> The Document Object Model (DOM) is a tree-like structure representing the content of a web page. JavaScript can manipulate the DOM to change content, structure, and style dynamically. Events are actions or occurrences (like clicks or keypresses) that JavaScript can respond to.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Common DOM Methods & Events:</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>getElementById, querySelector, querySelectorAll</Text> for selecting elements</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>addEventListener, removeEventListener</Text> for handling events</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>innerHTML, textContent, style</Text> for modifying content and style</Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`const btn = document.getElementById('myBtn');
btn.addEventListener('click', function(e) {
  alert('Button clicked!');
});
document.querySelectorAll('.item').forEach(el => el.style.color = 'red');`}</Text>
          <CopyButton text={`const btn = document.getElementById('myBtn');
btn.addEventListener('click', function(e) {
  alert('Button clicked!');
});
document.querySelectorAll('.item').forEach(el => el.style.color = 'red');`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• Always remove event listeners when elements are removed to prevent memory leaks.</Text>{"\n"}
          <Text>• Use event delegation for better performance on many similar elements.</Text>{"\n"}
          <Text>• Avoid direct DOM manipulation in frameworks like React; use state and props instead.</Text>
        </Text>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>event.target</Text> to access the element that triggered the event.</Callout>
        <Callout type="warning">Direct DOM manipulation can cause bugs in modern frameworks. Prefer declarative updates.</Callout>
      </Animated.View>
      {/* Asynchronous JavaScript (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(2400).duration(700)} style={styles.sectionCard} ref={sectionRefs.async}>
        <Text style={styles.sectionTitle}>Asynchronous JavaScript</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> JavaScript is single-threaded but supports asynchronous operations via callbacks, promises, and async/await. This allows non-blocking code for tasks like network requests and timers.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Async Patterns:</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>setTimeout, setInterval</Text> for timers</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>Promise</Text> for chaining async operations</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>async/await</Text> for readable async code</Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`setTimeout(() => console.log('Later'), 1000);
function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve('done'), 500));
}
async function main() {
  const result = await fetchData();
  console.log(result);
}
main();`}</Text>
          <CopyButton text={`setTimeout(() => console.log('Later'), 1000);
function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve('done'), 500));
}
async function main() {
  const result = await fetchData();
  console.log(result);
}
main();`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• Always handle promise rejections to avoid unhandled errors.</Text>{"\n"}
          <Text>• Use <Text style={{ color: PALETTE.primary }}>Promise.all</Text> for parallel async operations.</Text>{"\n"}
          <Text>• Avoid callback hell by using promises or async/await.</Text>
        </Text>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>await</Text> inside <Text style={{ color: PALETTE.primary }}>try/catch</Text> for error handling in async functions.</Callout>
        <Callout type="warning">Never block the main thread with long-running synchronous code.</Callout>
      </Animated.View>
      {/* ES6+ Features (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(2600).duration(700)} style={styles.sectionCard} ref={sectionRefs.es6}>
        <Text style={styles.sectionTitle}>ES6+ Features</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> ES6 (ECMAScript 2015) and later versions introduced major improvements to JavaScript, including new syntax, data structures, and features for better code organization and performance.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Key Features:</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>let, const</Text> for block-scoped variables</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>Arrow functions</Text> for concise function syntax</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>Template literals</Text> for multi-line and interpolated strings</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>Destructuring</Text> for extracting values from arrays/objects</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>Spread/rest</Text> for flexible function arguments and array/object manipulation</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>Classes, modules, promises, sets, maps, symbols, async/await</Text></Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`const [a, b] = [1, 2];
const obj = { x: 1, y: 2 };
const { x, y } = obj;
const arr = [1, 2, 3];
const arr2 = [...arr, 4];`}</Text>
          <CopyButton text={`const [a, b] = [1, 2];
const obj = { x: 1, y: 2 };
const { x, y } = obj;
const arr = [1, 2, 3];
const arr2 = [...arr, 4];`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• Use <Text style={{ color: PALETTE.primary }}>const</Text> by default; use <Text style={{ color: PALETTE.primary }}>let</Text> only when reassignment is needed.</Text>{"\n"}
          <Text>• Arrow functions do not bind their own <Text style={{ color: PALETTE.primary }}>this</Text>.</Text>{"\n"}
          <Text>• Destructuring can provide default values and rename variables.</Text>
        </Text>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>import()</Text> for dynamic imports and code splitting.</Callout>
        <Callout type="warning">Be aware of browser compatibility for newer features.</Callout>
      </Animated.View>
      {/* OOP & Classes (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(2800).duration(700)} style={styles.sectionCard} ref={sectionRefs.oop}>
        <Text style={styles.sectionTitle}>OOP & Classes</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> Object-Oriented Programming (OOP) in JavaScript is based on prototypes and ES6 classes. Classes provide a cleaner syntax for creating objects and inheritance.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Class Syntax & Inheritance:</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>class, constructor, extends, super</Text></Text>{"\n"}
          <Text>• Methods, getters, setters, static methods</Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`class Animal {
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
}`}</Text>
          <CopyButton text={`class Animal {
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
}`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• Use <Text style={{ color: PALETTE.primary }}>super</Text> to call parent methods in subclasses.</Text>{"\n"}
          <Text>• Classes are syntactic sugar over prototypes.</Text>{"\n"}
          <Text>• Use <Text style={{ color: PALETTE.primary }}>static</Text> for utility methods that do not access instance data.</Text>
        </Text>
        <Callout type="tip">Use classes for complex data models and inheritance hierarchies.</Callout>
        <Callout type="warning">Avoid deep inheritance chains; prefer composition over inheritance when possible.</Callout>
      </Animated.View>
      {/* Patterns & Modules (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(3000).duration(700)} style={styles.sectionCard} ref={sectionRefs.patterns}>
        <Text style={styles.sectionTitle}>Patterns & Modules</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> Design patterns are reusable solutions to common problems. Modules help organize code into reusable, maintainable files.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Common Patterns:</Text>{"\n"}
          <Text>• Module: Encapsulates code and exposes a public API</Text>{"\n"}
          <Text>• Singleton: Ensures a class has only one instance</Text>{"\n"}
          <Text>• Factory: Creates objects without specifying the exact class</Text>{"\n"}
          <Text>• Observer: Allows objects to subscribe to events</Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Module pattern
const MyModule = (function() {
  let privateVar = 0;
  return {
    inc() { privateVar++; return privateVar; }
  };
})();
// ES6 module
// export function foo() {}
// import { foo } from './foo.js';`}</Text>
          <CopyButton text={`// Module pattern
const MyModule = (function() {
  let privateVar = 0;
  return {
    inc() { privateVar++; return privateVar; }
  };
})();
// ES6 module
// export function foo() {}
// import { foo } from './foo.js';`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• Use modules to split code into reusable files.</Text>{"\n"}
          <Text>• Use bundlers (Webpack, Vite, Parcel) for production.</Text>{"\n"}
          <Text>• Avoid polluting the global namespace.</Text>
        </Text>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>import()</Text> for dynamic imports and code splitting.</Callout>
        <Callout type="warning">Mixing CommonJS and ES6 modules can cause issues; stick to one system per project.</Callout>
      </Animated.View>
      {/* Modules & Bundling (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(3200).duration(700)} style={styles.sectionCard} ref={sectionRefs.modules}>
        <Text style={styles.sectionTitle}>Modules & Bundling</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> ES6 modules use <Text style={{ color: PALETTE.primary }}>import</Text> and <Text style={{ color: PALETTE.primary }}>export</Text> to organize code. Bundlers combine modules for deployment.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// foo.js
export function foo() { return 42; }
// main.js
import { foo } from './foo.js';`}</Text>
          <CopyButton text={`// foo.js
export function foo() { return 42; }
// main.js
import { foo } from './foo.js';`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• Use relative or absolute paths in imports.</Text>{"\n"}
          <Text>• Use dynamic imports for lazy loading.</Text>{"\n"}
          <Text>• Avoid circular dependencies.</Text>
        </Text>
        <Callout type="tip">Use bundlers to optimize and tree-shake your code for production.</Callout>
        <Callout type="warning">Be aware of module resolution differences between Node.js and browsers.</Callout>
      </Animated.View>
      {/* Browser APIs & BOM (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(3400).duration(700)} style={styles.sectionCard} ref={sectionRefs.browser}>
        <Text style={styles.sectionTitle}>Browser APIs & BOM</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> The Browser Object Model (BOM) provides access to browser features outside the DOM, such as <Text style={{ color: PALETTE.primary }}>window</Text>, <Text style={{ color: PALETTE.primary }}>navigator</Text>, <Text style={{ color: PALETTE.primary }}>location</Text>, <Text style={{ color: PALETTE.primary }}>history</Text>, and <Text style={{ color: PALETTE.primary }}>screen</Text>.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Common APIs:</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>localStorage, sessionStorage</Text> for persistent storage</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>fetch</Text> for network requests</Text>{"\n"}
          <Text>• <Text style={{ color: PALETTE.primary }}>window.addEventListener</Text> for global events</Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
window.addEventListener('resize', () => console.log(window.innerWidth));`}</Text>
          <CopyButton text={`localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
window.addEventListener('resize', () => console.log(window.innerWidth));`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• Always check for API support before using (feature detection).</Text>{"\n"}
          <Text>• Use <Text style={{ color: PALETTE.primary }}>caniuse.com</Text> to check browser compatibility.</Text>
        </Text>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>window</Text> for global variables and functions, but avoid polluting the global scope.</Callout>
        <Callout type="warning">Not all browser APIs are available in Node.js or all browsers.</Callout>
      </Animated.View>
      {/* Error Handling (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(3600).duration(700)} style={styles.sectionCard} ref={sectionRefs.errors}>
        <Text style={styles.sectionTitle}>Error Handling</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Definition:</Text> Error handling lets you gracefully manage unexpected situations. Use <Text style={{ color: PALETTE.primary }}>try</Text>, <Text style={{ color: PALETTE.primary }}>catch</Text>, <Text style={{ color: PALETTE.primary }}>finally</Text>, and <Text style={{ color: PALETTE.primary }}>throw</Text> to handle and raise errors.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`try {
  throw new Error('Something went wrong');
} catch (e) {
  console.error(e.message);
} finally {
  cleanup();
}
// Custom error
class MyError extends Error {
  constructor(msg) { super(msg); this.name = 'MyError'; }
}`}</Text>
          <CopyButton text={`try {
  throw new Error('Something went wrong');
} catch (e) {
  console.error(e.message);
} finally {
  cleanup();
}
// Custom error
class MyError extends Error {
  constructor(msg) { super(msg); this.name = 'MyError'; }
}`} />
        </View>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>Edge Cases & Best Practices:</Text>{"\n"}
          <Text>• Always clean up resources in <Text style={{ color: PALETTE.primary }}>finally</Text> blocks.</Text>{"\n"}
          <Text>• Never swallow errors silently; log or handle them appropriately.</Text>{"\n"}
          <Text>• Use custom error classes for better error management.</Text>
        </Text>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>try/catch</Text> with <Text style={{ color: PALETTE.primary }}>await</Text> for error handling in async functions.</Callout>
        <Callout type="warning">Throwing non-Error objects can make debugging harder.</Callout>
      </Animated.View>
      {/* Best Practices (deeply expanded) */}
      <Animated.View entering={FadeInUp.delay(3800).duration(700)} style={styles.sectionCard} ref={sectionRefs.best}>
        <Text style={styles.sectionTitle}>Best Practices</Text>
        <Text style={styles.sectionText}>
          <Text style={{ fontWeight: 'bold' }}>General Guidelines:</Text>{"\n"}
          <Text>• Use <Text style={{ color: PALETTE.primary }}>const</Text> and <Text style={{ color: PALETTE.primary }}>let</Text> instead of <Text style={{ color: PALETTE.primary }}>var</Text>.</Text>{"\n"}
          <Text>• Prefer arrow functions for callbacks.</Text>{"\n"}
          <Text>• Avoid global variables.</Text>{"\n"}
          <Text>• Use strict equality (<Text style={{ color: PALETTE.primary }}>===</Text>).</Text>{"\n"}
          <Text>• Document your code and use linters.</Text>{"\n"}
          <Text>• Write modular, reusable code.</Text>{"\n"}
          <Text>• Test in all major browsers and devices.</Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Bad
var foo = 1;
foo = 2;
// Good
const bar = 1;
// Arrow function
[1,2,3].forEach(x => console.log(x));`}</Text>
          <CopyButton text={`// Bad
var foo = 1;
foo = 2;
// Good
const bar = 1;
// Arrow function
[1,2,3].forEach(x => console.log(x));`} />
        </View>
        <Callout type="tip">Use tools like ESLint and Prettier to enforce code style and catch bugs early.</Callout>
        <Callout type="warning">Don&#39;t repeat yourself (DRY). Refactor duplicated code into functions or modules.</Callout>
      </Animated.View>
      {/* References */}
      <Animated.View entering={FadeInUp.delay(3800).duration(700)} style={styles.sectionCard} ref={sectionRefs.resources}>
        <Text style={styles.sectionTitle}>References & Resources</Text>
        <Pressable onPress={() => openLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}>
          <Text style={[styles.sectionText, { color: PALETTE.accent, textDecorationLine: 'underline' }]}>- MDN JS Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript</Text>
        </Pressable>
        <Pressable onPress={() => openLink('https://javascript.info/')}>
          <Text style={[styles.sectionText, { color: PALETTE.accent, textDecorationLine: 'underline' }]}>- JavaScript.info: https://javascript.info/</Text>
        </Pressable>
        <Pressable onPress={() => openLink('https://tc39.es/ecma262/')}>
          <Text style={[styles.sectionText, { color: PALETTE.accent, textDecorationLine: 'underline' }]}>- ECMAScript Spec: https://tc39.es/ecma262/</Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}
