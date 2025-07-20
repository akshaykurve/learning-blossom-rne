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

export default function JSScreen() {
  const scrollRef = useRef(null);

  const toc: { key: string; label: string }[] = [
    { key: 'Introduction', label: 'Introduction' },
    { key: 'Syntax & Structure', label: 'Syntax & Structure' },
    { key: 'Types & Type Coercion', label: 'Types & Type Coercion' },
    { key: 'Variables & Scope', label: 'Variables & Scope' },
    { key: 'Operators & Expressions', label: 'Operators & Expressions' },
    { key: 'Control Flow', label: 'Control Flow' },
    { key: 'Functions & Closures', label: 'Functions & Closures' },
    { key: 'Objects & Prototypes', label: 'Objects & Prototypes' },
    { key: 'Arrays & Iteration', label: 'Arrays & Iteration' },
    { key: 'DOM & Events', label: 'DOM & Events' },
    { key: 'ES6+ Features', label: 'ES6+ Features' },
    { key: 'Async JavaScript', label: 'Async JavaScript' },
    { key: 'OOP & Classes', label: 'OOP & Classes' },
    { key: 'Patterns & Modules', label: 'Patterns & Modules' },
    { key: 'Error Handling', label: 'Error Handling' },
    { key: 'Best Practices', label: 'Best Practices' },
    { key: 'References', label: 'References' },
  ];

  const openLink = (url: string) => Linking.openURL(url);
  
  const scrollToSection = (key: string) => {
    const sectionIndex = toc.findIndex(item => item.key === key);
    if (sectionIndex !== -1 && scrollRef.current) {
      const estimatedY = sectionIndex * 400; // Approximate section height
      (scrollRef.current as any).scrollTo({ y: estimatedY, animated: true });
    }
  };

  return (
    <ScrollView ref={scrollRef} style={{ backgroundColor: LUXURY.background }} contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <Animated.View entering={FadeInUp.duration(700)} style={[styles.sectionCard, { marginTop: 12 }]}>
        <MaterialCommunityIcons name="language-javascript" size={60} color={LUXURY.gold} style={{ marginBottom: 16 }} />
        <Text style={styles.heroTitle}>JavaScript Documentation</Text>
        <Text style={styles.heroSubtitle}>
          The official, comprehensive guide to <Text style={{ color: LUXURY.gold, fontWeight: 'bold' }}>JavaScript</Text> — the programming language of the web.
        </Text>
      </Animated.View>

      {/* Table of Contents */}
      <Animated.View entering={FadeInUp.delay(200).duration(700)} style={[styles.sectionCard, { marginBottom: 32 }]}>
        <Text style={styles.sectionTitle}>Table of Contents</Text>
        {toc.map((item) => (
          <Pressable key={item.key} onPress={() => scrollToSection(item.key)}>
            <Text style={[styles.tocItem, { color: PALETTE.primary }]}>
              • {item.label}
            </Text>
          </Pressable>
        ))}
      </Animated.View>

      {/* Introduction */}
      <Animated.View entering={FadeInUp.delay(400).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.sectionText}>
          JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
        </Text>
        <Text style={styles.sectionText}>
          JavaScript was originally created to make web pages interactive, but it has grown to become one of the most popular programming languages in the world, used for both frontend and backend development.
        </Text>
        <Callout type="tip">JavaScript is the only programming language that runs natively in web browsers, making it essential for web development.</Callout>
      </Animated.View>

      {/* Syntax & Structure */}
      <Animated.View entering={FadeInUp.delay(600).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Syntax & Structure</Text>
        <Text style={styles.sectionText}>
          JavaScript syntax is similar to C-style languages. It uses semicolons to end statements, curly braces for code blocks, and follows camelCase naming conventions.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Single line comment
/* Multi-line comment */

// Variables
let name = "John";
const age = 25;

// Functions
function greet(person) {
  return "Hello, " + person + "!";
}

// Objects
const user = {
  name: "Alice",
  age: 30
};`}</Text>
          <CopyButton text={`// Single line comment
/* Multi-line comment */

// Variables
let name = "John";
const age = 25;

// Functions
function greet(person) {
  return "Hello, " + person + "!";
}

// Objects
const user = {
  name: "Alice",
  age: 30
};`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>const</Text> by default, <Text style={{ color: PALETTE.primary }}>let</Text> when you need to reassign, and avoid <Text style={{ color: PALETTE.primary }}>var</Text>.</Callout>
      </Animated.View>

      {/* Types & Type Coercion */}
      <Animated.View entering={FadeInUp.delay(800).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Types & Type Coercion</Text>
        <Text style={styles.sectionText}>
          JavaScript has dynamic typing. The seven primitive types are: Number, String, Boolean, Undefined, Null, Symbol, and BigInt. Objects are reference types.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Primitive types
let number = 42;
let string = "Hello";
let boolean = true;
let undefined_var = undefined;
let null_var = null;
let symbol = Symbol("unique");
let bigint = 123456789012345678901234567890n;

// Type coercion
console.log("5" + 3);     // "53" (string concatenation)
console.log("5" - 3);     // 2 (numeric subtraction)
console.log(true + 1);    // 2 (boolean to number)`}</Text>
          <CopyButton text={`// Primitive types
let number = 42;
let string = "Hello";
let boolean = true;
let undefined_var = undefined;
let null_var = null;
let symbol = Symbol("unique");
let bigint = 123456789012345678901234567890n;

// Type coercion
console.log("5" + 3);     // "53" (string concatenation)
console.log("5" - 3);     // 2 (numeric subtraction)
console.log(true + 1);    // 2 (boolean to number)`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>===</Text> for strict equality comparison to avoid unexpected type coercion.</Callout>
      </Animated.View>

      {/* Variables & Scope */}
      <Animated.View entering={FadeInUp.delay(1000).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Variables & Scope</Text>
        <Text style={styles.sectionText}>
          JavaScript has function scope and block scope. <Text style={{ color: PALETTE.primary }}>var</Text> is function-scoped, while <Text style={{ color: PALETTE.primary }}>let</Text> and <Text style={{ color: PALETTE.primary }}>const</Text> are block-scoped.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Global scope
let globalVar = "I'm global";

function example() {
  // Function scope
  let functionVar = "I'm in function scope";
  
  if (true) {
    // Block scope
    let blockVar = "I'm in block scope";
    console.log(blockVar); // Works
  }
  
  // console.log(blockVar); // Error: blockVar is not defined
}

// Hoisting (var only)
console.log(hoistedVar); // undefined (not error)
var hoistedVar = "I'm hoisted";`}</Text>
          <CopyButton text={`// Global scope
let globalVar = "I'm global";

function example() {
  // Function scope
  let functionVar = "I'm in function scope";
  
  if (true) {
    // Block scope
    let blockVar = "I'm in block scope";
    console.log(blockVar); // Works
  }
  
  // console.log(blockVar); // Error: blockVar is not defined
}

// Hoisting (var only)
console.log(hoistedVar); // undefined (not error)
var hoistedVar = "I'm hoisted";`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>const</Text> for values that won't be reassigned, <Text style={{ color: PALETTE.primary }}>let</Text> for values that will change, and avoid <Text style={{ color: PALETTE.primary }}>var</Text>.</Callout>
      </Animated.View>

      {/* Operators & Expressions */}
      <Animated.View entering={FadeInUp.delay(1200).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Operators & Expressions</Text>
        <Text style={styles.sectionText}>
          JavaScript supports arithmetic, comparison, logical, assignment, and other operators.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Arithmetic operators
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

// Comparison operators
console.log(a > b);   // true
console.log(a >= b);  // true
console.log(a == "10"); // true (loose equality)
console.log(a === "10"); // false (strict equality)

// Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// Assignment operators
let x = 5;
x += 3; // Same as x = x + 3
console.log(x); // 8`}</Text>
          <CopyButton text={`// Arithmetic operators
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

// Comparison operators
console.log(a > b);   // true
console.log(a >= b);  // true
console.log(a == "10"); // true (loose equality)
console.log(a === "10"); // false (strict equality)

// Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// Assignment operators
let x = 5;
x += 3; // Same as x = x + 3
console.log(x); // 8`} />
        </View>
        <Callout type="tip">Always use <Text style={{ color: PALETTE.primary }}>===</Text> and <Text style={{ color: PALETTE.primary }}>!==</Text> for comparisons to avoid unexpected type coercion.</Callout>
      </Animated.View>

      {/* Control Flow */}
      <Animated.View entering={FadeInUp.delay(1400).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Control Flow</Text>
        <Text style={styles.sectionText}>
          JavaScript provides various control structures for decision making and looping.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// If statements
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}

// Switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Weekend coming!");
    break;
  default:
    console.log("Regular day");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}`}</Text>
          <CopyButton text={`// If statements
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}

// Switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Weekend coming!");
    break;
  default:
    console.log("Regular day");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>for...of</Text> for arrays and <Text style={{ color: PALETTE.primary }}>for...in</Text> for object properties.</Callout>
      </Animated.View>

      {/* Functions & Closures */}
      <Animated.View entering={FadeInUp.delay(1600).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Functions & Closures</Text>
        <Text style={styles.sectionText}>
          Functions are first-class citizens in JavaScript. They can be assigned to variables, passed as arguments, and returned from other functions.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Function declarations
function greet(name) {
  return "Hello, " + name;
}

// Function expressions
const greet2 = function(name) {
  return "Hello, " + name;
};

// Arrow functions
const greet3 = (name) => "Hello, " + name;

// Closures
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2`}</Text>
          <CopyButton text={`// Function declarations
function greet(name) {
  return "Hello, " + name;
}

// Function expressions
const greet2 = function(name) {
  return "Hello, " + name;
};

// Arrow functions
const greet3 = (name) => "Hello, " + name;

// Closures
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2`} />
        </View>
        <Callout type="tip">Arrow functions don't have their own <Text style={{ color: PALETTE.primary }}>this</Text> binding, making them useful for callbacks and methods.</Callout>
      </Animated.View>

      {/* Objects & Prototypes */}
      <Animated.View entering={FadeInUp.delay(1800).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Objects & Prototypes</Text>
        <Text style={styles.sectionText}>
          JavaScript uses prototypal inheritance. Objects can inherit properties and methods from other objects through the prototype chain.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Object literals
const person = {
  name: "John",
  age: 30,
  greet() {
    return "Hello, I'm " + this.name;
  }
};

// Constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return "Hello, I'm " + this.name;
};

// Classes (ES6+)
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return "Hello, I'm " + this.name;
  }
}`}</Text>
          <CopyButton text={`// Object literals
const person = {
  name: "John",
  age: 30,
  greet() {
    return "Hello, I'm " + this.name;
  }
};

// Constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return "Hello, I'm " + this.name;
};

// Classes (ES6+)
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return "Hello, I'm " + this.name;
  }
}`} />
        </View>
        <Callout type="tip">Use classes for cleaner object-oriented code, but remember they're syntactic sugar over prototypes.</Callout>
      </Animated.View>

      {/* Arrays & Iteration */}
      <Animated.View entering={FadeInUp.delay(2000).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Arrays & Iteration</Text>
        <Text style={styles.sectionText}>
          Arrays in JavaScript are dynamic and can hold mixed types. Modern array methods provide powerful iteration capabilities.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Array creation
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, { name: "John" }];

// Array methods
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Modern iteration
numbers.forEach(num => console.log(num));

// Destructuring
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(rest);  // [3, 4, 5]

// Spread operator
const newArray = [...numbers, 6, 7];`}</Text>
          <CopyButton text={`// Array creation
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, { name: "John" }];

// Array methods
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Modern iteration
numbers.forEach(num => console.log(num));

// Destructuring
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(rest);  // [3, 4, 5]

// Spread operator
const newArray = [...numbers, 6, 7];`} />
        </View>
        <Callout type="tip">Use <Text style={{ color: PALETTE.primary }}>map</Text>, <Text style={{ color: PALETTE.primary }}>filter</Text>, and <Text style={{ color: PALETTE.primary }}>reduce</Text> for functional programming patterns.</Callout>
      </Animated.View>

      {/* DOM & Events */}
      <Animated.View entering={FadeInUp.delay(2200).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>DOM & Events</Text>
        <Text style={styles.sectionText}>
          The Document Object Model (DOM) allows JavaScript to interact with HTML elements. Event handling is crucial for interactive web applications.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// DOM manipulation
const element = document.getElementById("myElement");
element.innerHTML = "New content";
element.classList.add("highlight");

// Event handling
element.addEventListener("click", function(event) {
  console.log("Clicked!");
  event.preventDefault();
});

// Modern event handling
element.addEventListener("click", (event) => {
  console.log("Arrow function handler");
});

// Event delegation
document.addEventListener("click", (event) => {
  if (event.target.matches(".button")) {
    console.log("Button clicked");
  }
});`}</Text>
          <CopyButton text={`// DOM manipulation
const element = document.getElementById("myElement");
element.innerHTML = "New content";
element.classList.add("highlight");

// Event handling
element.addEventListener("click", function(event) {
  console.log("Clicked!");
  event.preventDefault();
});

// Modern event handling
element.addEventListener("click", (event) => {
  console.log("Arrow function handler");
});

// Event delegation
document.addEventListener("click", (event) => {
  if (event.target.matches(".button")) {
    console.log("Button clicked");
  }
});`} />
        </View>
        <Callout type="tip">Use event delegation for dynamically created elements and to improve performance with many event listeners.</Callout>
      </Animated.View>

      {/* ES6+ Features */}
      <Animated.View entering={FadeInUp.delay(2400).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>ES6+ Features</Text>
        <Text style={styles.sectionText}>
          Modern JavaScript (ES6+) introduced many powerful features that make the language more expressive and easier to use.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Template literals
const name = "World";
const greeting = \`Hello, \${name}!\`;

// Destructuring
const { name: userName, age } = { name: "John", age: 30 };
const [a, b, c] = [1, 2, 3];

// Default parameters
function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

// Rest and spread
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Arrow functions
const multiply = (a, b) => a * b;

// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}`}</Text>
          <CopyButton text={`// Template literals
const name = "World";
const greeting = \`Hello, \${name}!\`;

// Destructuring
const { name: userName, age } = { name: "John", age: 30 };
const [a, b, c] = [1, 2, 3];

// Default parameters
function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

// Rest and spread
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Arrow functions
const multiply = (a, b) => a * b;

// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}`} />
        </View>
        <Callout type="tip">Use modern ES6+ features for cleaner, more readable code, but ensure browser compatibility or use a transpiler like Babel.</Callout>
      </Animated.View>

      {/* Async JavaScript */}
      <Animated.View entering={FadeInUp.delay(2600).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Async JavaScript: Callbacks, Promises, Async/Await</Text>
        <Text style={styles.sectionText}>
          JavaScript handles asynchronous operations through callbacks, promises, and async/await syntax.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Callbacks (older approach)
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});

// Promises
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

fetchDataPromise()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await (modern approach)
async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`}</Text>
          <CopyButton text={`// Callbacks (older approach)
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});

// Promises
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

fetchDataPromise()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await (modern approach)
async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`} />
        </View>
        <Callout type="tip">Use async/await for cleaner asynchronous code, but remember to handle errors with try/catch blocks.</Callout>
      </Animated.View>

      {/* OOP & Classes */}
      <Animated.View entering={FadeInUp.delay(2800).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>OOP & Classes</Text>
        <Text style={styles.sectionText}>
          JavaScript supports object-oriented programming through classes, inheritance, and encapsulation.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Class definition
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    return \`\${this.name} barks\`;
  }
  
  fetch() {
    return \`\${this.name} fetches the ball\`;
  }
}

// Private fields (ES2022)
class BankAccount {
  #balance = 0;
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}`}</Text>
          <CopyButton text={`// Class definition
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    return \`\${this.name} barks\`;
  }
  
  fetch() {
    return \`\${this.name} fetches the ball\`;
  }
}

// Private fields (ES2022)
class BankAccount {
  #balance = 0;
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}`} />
        </View>
        <Callout type="tip">Use private fields (#) for better encapsulation and to prevent external access to internal state.</Callout>
      </Animated.View>

      {/* Patterns & Modules */}
      <Animated.View entering={FadeInUp.delay(3000).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Patterns & Modules</Text>
        <Text style={styles.sectionText}>
          JavaScript supports various design patterns and modular code organization through ES6 modules.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Module pattern
const calculator = (function() {
  let result = 0;
  
  return {
    add: function(x) { result += x; },
    subtract: function(x) { result -= x; },
    getResult: function() { return result; }
  };
})();

// ES6 Modules
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default class Calculator { }

// main.js
import Calculator, { add, subtract } from './math.js';

// Singleton pattern
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this;
  }
}`}</Text>
          <CopyButton text={`// Module pattern
const calculator = (function() {
  let result = 0;
  
  return {
    add: function(x) { result += x; },
    subtract: function(x) { result -= x; },
    getResult: function() { return result; }
  };
})();

// ES6 Modules
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default class Calculator { }

// main.js
import Calculator, { add, subtract } from './math.js';

// Singleton pattern
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this;
  }
}`} />
        </View>
        <Callout type="tip">Use ES6 modules for better code organization and to avoid global namespace pollution.</Callout>
      </Animated.View>

      {/* Error Handling */}
      <Animated.View entering={FadeInUp.delay(3200).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Error Handling</Text>
        <Text style={styles.sectionText}>
          Proper error handling is crucial for robust JavaScript applications. Use try-catch blocks and handle promises properly.
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Try-catch blocks
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Cleanup code");
}

// Custom errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Promise error handling
fetchDataPromise()
  .then(data => processData(data))
  .catch(error => {
    console.error("Fetch failed:", error);
    // Handle error gracefully
  });

// Async/await error handling
async function handleData() {
  try {
    const data = await fetchDataPromise();
    const processed = await processData(data);
    return processed;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw if needed
  }
}`}</Text>
          <CopyButton text={`// Try-catch blocks
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Cleanup code");
}

// Custom errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Promise error handling
fetchDataPromise()
  .then(data => processData(data))
  .catch(error => {
    console.error("Fetch failed:", error);
    // Handle error gracefully
  });

// Async/await error handling
async function handleData() {
  try {
    const data = await fetchDataPromise();
    const processed = await processData(data);
    return processed;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw if needed
  }
}`} />
        </View>
        <Callout type="tip">Always handle errors gracefully and provide meaningful error messages to users.</Callout>
      </Animated.View>

      {/* Best Practices */}
      <Animated.View entering={FadeInUp.delay(3400).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Best Practices</Text>
        <Text style={styles.sectionText}>
          Follow these best practices for clean, maintainable JavaScript code:
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{`// Use meaningful variable names
const userAge = 25;           // Good
const ua = 25;               // Bad

// Use const by default
const PI = 3.14159;
let counter = 0;             // Only use let when reassignment is needed

// Use template literals
const message = \`Hello, \${name}!\`;  // Good
const message = "Hello, " + name + "!"; // Bad

// Use arrow functions for callbacks
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// Use destructuring
const { name, age } = user;
const [first, second] = array;

// Handle errors properly
try {
  // Risky operation
} catch (error) {
  console.error("Error:", error);
}`}</Text>
          <CopyButton text={`// Use meaningful variable names
const userAge = 25;           // Good
const ua = 25;               // Bad

// Use const by default
const PI = 3.14159;
let counter = 0;             // Only use let when reassignment is needed

// Use template literals
const message = \`Hello, \${name}!\`;  // Good
const message = "Hello, " + name + "!"; // Bad

// Use arrow functions for callbacks
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// Use destructuring
const { name, age } = user;
const [first, second] = array;

// Handle errors properly
try {
  // Risky operation
} catch (error) {
  console.error("Error:", error);
}`} />
        </View>
        <Callout type="tip">Use ESLint and Prettier to maintain consistent code style and catch potential issues early.</Callout>
      </Animated.View>

      {/* Resources */}
      <Animated.View entering={FadeInUp.delay(3600).duration(700)} style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>References</Text>
        <Text style={styles.sectionText}>
          Here are some valuable resources for learning more about JavaScript:
        </Text>
        <View style={{ marginTop: 8 }}>
          <Pressable onPress={() => openLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}>
            <Text style={[styles.sectionText, { color: PALETTE.primary, textDecorationLine: 'underline' }]}>
              • MDN Web Docs - JavaScript
            </Text>
          </Pressable>
          <Pressable onPress={() => openLink('https://javascript.info/')}>
            <Text style={[styles.sectionText, { color: PALETTE.primary, textDecorationLine: 'underline' }]}>
              • JavaScript.info - Modern JavaScript Tutorial
            </Text>
          </Pressable>
          <Pressable onPress={() => openLink('https://tc39.es/ecma262/')}>
            <Text style={[styles.sectionText, { color: PALETTE.primary, textDecorationLine: 'underline' }]}>
              • ECMAScript Specification
            </Text>
          </Pressable>
        </View>
        <Callout type="tip">Bookmark these resources for quick reference while developing JavaScript applications.</Callout>
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
