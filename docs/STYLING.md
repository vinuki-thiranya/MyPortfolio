# Design System & Styling Guide

## 🎨 Design Philosophy

This portfolio website follows a modern, minimal design philosophy with emphasis on:
- **Clean Typography**: Readable fonts with proper hierarchy
- **Smooth Animations**: Subtle, purposeful motion design
- **Responsive Design**: Mobile-first, accessible across devices  
- **Dark Mode First**: Optimized for dark theme with light mode support
- **Performance**: CSS that loads fast and animates smoothly

---

## 🎯 Design Tokens

### Color Palette

#### Primary Colors
```css
/* Dark Theme (Primary) */
--color-background: #0a192f;     /* Deep navy background */
--color-text-primary: #e6f1ff;   /* Light blue-white text */
--color-text-secondary: #8892b0; /* Muted blue-gray text */
--color-accent: #64ffd9;         /* Bright cyan accent */
--color-accent-alt: #667eea;     /* Purple accent alternative */

/* Light Theme */
--color-background-light: #ffffff;
--color-text-primary-light: #2d3748;
--color-text-secondary-light: #718096;
--color-accent-light: #5a67d8;
```

#### Semantic Colors
```css
/* Status Colors */
--color-success: #48bb78;
--color-warning: #ed8936;
--color-error: #f56565;
--color-info: #4299e1;

/* UI Colors */
--color-border: #2d3748;
--color-border-light: #e2e8f0;
--color-hover: rgba(100, 255, 217, 0.1);
--color-focus: rgba(100, 255, 217, 0.2);
```

### Typography Scale

#### Font Families
```css
/* Primary font variables */
--font-poppins: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-roboto-mono: 'Roboto Mono', 'SF Mono', 'Monaco', 'Inconsolata', monospace;
--font-playfair: 'Playfair Display', 'Georgia', 'Times New Roman', serif;
```

#### Font Scale
```css
/* Typography scale */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */  
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px */
--text-8xl: 6rem;        /* 96px */
--text-9xl: 8rem;        /* 128px */
```

#### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 900;
```

### Spacing System

#### Spacing Scale
```css
/* Base spacing unit: 0.25rem (4px) */
--space-px: 1px;
--space-0: 0;
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
--space-40: 10rem;     /* 160px */
--space-48: 12rem;     /* 192px */
--space-56: 14rem;     /* 224px */
--space-64: 16rem;     /* 256px */
```

### Border Radius
```css
--radius-none: 0;
--radius-sm: 0.125rem;   /* 2px */
--radius: 0.25rem;       /* 4px */
--radius-md: 0.375rem;   /* 6px */
--radius-lg: 0.5rem;     /* 8px */
--radius-xl: 0.75rem;    /* 12px */
--radius-2xl: 1rem;      /* 16px */
--radius-3xl: 1.5rem;    /* 24px */
--radius-full: 9999px;
```

### Shadows
```css
/* Shadow system */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Colored shadows for dark theme */
--shadow-accent: 0 0 20px rgba(100, 255, 217, 0.3);
--shadow-accent-lg: 0 0 40px rgba(100, 255, 217, 0.2);
```

---

## 🎭 Animation System

### Timing Functions
```css
/* Easing curves */
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Custom easing for brand feel */
--ease-brand: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-back: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Duration Scale
```css
/* Animation durations */
--duration-75: 75ms;
--duration-100: 100ms;
--duration-150: 150ms;
--duration-200: 200ms;
--duration-300: 300ms;
--duration-500: 500ms;
--duration-700: 700ms;
--duration-1000: 1000ms;
```

### Framer Motion Variants

#### Common Entrance Animations
```typescript
// Fade in from bottom
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
}

// Fade in from left  
export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
}

// Scale entrance
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    }
  }
}
```

#### Hover Animations
```typescript
// Subtle lift
export const hoverLift = {
  whileHover: { 
    y: -5,
    transition: { duration: 0.2 }
  }
}

// Scale and glow
export const hoverGlow = {
  whileHover: { 
    scale: 1.05,
    boxShadow: "0 0 20px rgba(100, 255, 217, 0.3)",
    transition: { duration: 0.3 }
  }
}

// Color shift
export const hoverColorShift = {
  whileHover: { 
    color: "#64ffd9",
    transition: { duration: 0.2 }
  }
}
```

#### Stagger Animations
```typescript
// Container for staggered children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "beforeChildren"
    }
  }
}

// Child items for stagger
export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5 
    }
  }
}
```

### CSS Animations

#### Loading Animations
```css
/* Pulse animation for loading states */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Spin animation for loaders */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
```

#### Gradient Animations
```css
/* Animated gradient background */
@keyframes gradient-x {
  0%, 100% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-100%);
  }
}

.animate-gradient-x {
  animation: gradient-x 15s ease infinite;
  background-size: 200% 200%;
}
```

---

## 📱 Responsive Design System

### Breakpoint Strategy
```typescript
const breakpoints = {
  xs: '475px',    // Large phones
  sm: '640px',    // Small tablets
  md: '768px',    // Tablets
  lg: '1024px',   // Small laptops
  xl: '1280px',   // Desktops  
  '2xl': '1536px' // Large desktops
}
```

### Container Sizes
```css
/* Container max-widths */
.container-xs { max-width: 20rem; }    /* 320px */
.container-sm { max-width: 24rem; }    /* 384px */
.container-md { max-width: 28rem; }    /* 448px */
.container-lg { max-width: 32rem; }    /* 512px */
.container-xl { max-width: 36rem; }    /* 576px */
.container-2xl { max-width: 42rem; }   /* 672px */
.container-3xl { max-width: 48rem; }   /* 768px */
.container-4xl { max-width: 56rem; }   /* 896px */
.container-5xl { max-width: 64rem; }   /* 1024px */
.container-6xl { max-width: 72rem; }   /* 1152px */
.container-7xl { max-width: 80rem; }   /* 1280px */
```

### Grid System
```css
/* CSS Grid layouts */
.grid-layout-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-layout-main {
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
  }
}

@media (min-width: 1024px) {
  .grid-layout-main {
    grid-template-columns: 1fr 3fr 1fr;
    gap: 4rem;
  }
}
```

### Typography Responsive Scale
```css
/* Responsive typography */
.text-responsive-sm {
  font-size: 0.875rem; /* 14px */
}

.text-responsive-base {
  font-size: 1rem; /* 16px */
}

@media (min-width: 640px) {
  .text-responsive-base {
    font-size: 1.125rem; /* 18px */
  }
}

@media (min-width: 768px) {
  .text-responsive-base {
    font-size: 1.25rem; /* 20px */
  }
}

/* Fluid typography */
.text-fluid {
  font-size: clamp(1rem, 2.5vw, 2rem);
}

.text-fluid-heading {
  font-size: clamp(2rem, 8vw, 6rem);
}
```

---

## 🎨 Component Styling Patterns

### Card Components
```css
/* Base card styles */
.card-base {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-lg 
         border border-gray-200 dark:border-gray-700
         transition-all duration-300;
}

.card-hover {
  @apply hover:shadow-xl hover:shadow-accent/10
         hover:-translate-y-1 hover:border-accent/20;
}

.card-interactive {
  @apply cursor-pointer transform transition-transform
         hover:scale-105 active:scale-95;
}
```

### Button Variants
```css
/* Primary button */
.btn-primary {
  @apply bg-accent text-background font-medium px-6 py-3
         rounded-lg transition-all duration-200
         hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20
         focus:ring-2 focus:ring-accent/50 focus:ring-offset-2
         active:scale-95;
}

/* Outline button */  
.btn-outline {
  @apply border-2 border-accent text-accent bg-transparent
         px-6 py-3 rounded-lg font-medium transition-all duration-200
         hover:bg-accent hover:text-background
         focus:ring-2 focus:ring-accent/50 focus:ring-offset-2;
}

/* Ghost button */
.btn-ghost {
  @apply text-accent bg-transparent px-4 py-2 rounded-md
         transition-colors duration-200
         hover:bg-accent/10 hover:text-accent/80;
}
```

### Form Elements
```css
/* Input fields */
.input-base {
  @apply w-full px-4 py-3 rounded-lg border border-gray-300
         dark:border-gray-600 bg-white dark:bg-gray-800
         text-gray-900 dark:text-gray-100
         placeholder-gray-500 dark:placeholder-gray-400
         transition-colors duration-200
         focus:ring-2 focus:ring-accent/50 focus:border-accent
         focus:outline-none;
}

/* Textarea */
.textarea-base {
  @apply input-base resize-y min-h-[100px];
}

/* Select dropdown */
.select-base {
  @apply input-base appearance-none bg-no-repeat bg-right bg-[length:16px]
         pr-10 cursor-pointer;
}
```

### Navigation Styles
```css
/* Navigation link */
.nav-link {
  @apply text-text-secondary hover:text-accent
         transition-colors duration-200 font-medium
         relative after:content-[''] after:absolute 
         after:bottom-0 after:left-0 after:w-0 after:h-0.5
         after:bg-accent after:transition-all after:duration-300
         hover:after:w-full;
}

/* Active nav link */
.nav-link-active {
  @apply text-accent after:w-full;
}
```

---

## 🌙 Dark Mode Implementation

### CSS Variables Strategy
```css
/* Light theme variables */
:root {
  --color-background: #ffffff;
  --color-text-primary: #1a202c;
  --color-text-secondary: #4a5568;
  --color-border: #e2e8f0;
}

/* Dark theme variables */
[data-theme="dark"] {
  --color-background: #0a192f;
  --color-text-primary: #e6f1ff;
  --color-text-secondary: #8892b0;
  --color-border: #2d3748;
}

/* Auto theme (system preference) */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #0a192f;
    --color-text-primary: #e6f1ff;
    --color-text-secondary: #8892b0;
    --color-border: #2d3748;
  }
}
```

### Tailwind Dark Mode Classes
```tsx
// Component with dark mode support
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 className="text-gray-800 dark:text-gray-100">Heading</h1>
  <p className="text-gray-600 dark:text-gray-300">Description</p>
</div>
```

### Theme Toggle Component
```tsx
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800
                 text-gray-800 dark:text-gray-200
                 hover:bg-gray-200 dark:hover:bg-gray-700
                 transition-colors duration-200"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}
```

---

## 🎯 Performance Optimizations

### CSS Performance
```css
/* Hardware acceleration for animations */
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
}

/* Efficient transitions */
.efficient-transition {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

/* Avoid expensive properties in animations */
.avoid-layout-shift {
  /* Use transform instead of changing width/height */
  transform: scale(1.1);
  /* Use opacity instead of display */
  opacity: 0;
}
```

### Critical CSS Inlining
```tsx
// In layout.tsx - critical CSS is inlined
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <style jsx>{`
          /* Critical above-the-fold styles */
          body {
            margin: 0;
            font-family: var(--font-poppins);
            background: #0a192f;
            color: #e6f1ff;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### CSS Bundle Optimization
```javascript
// next.config.mjs
export default {
  experimental: {
    optimizeCss: true
  },
  // CSS tree-shaking for production
  purgeCss: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    safelist: ['dark', 'light']
  }
}
```

---

## 🧩 Utility Classes

### Custom Tailwind Utilities
```css
/* Custom utility classes */
@layer utilities {
  /* Text gradients */
  .text-gradient {
    @apply bg-gradient-to-r from-accent to-purple-400 
           bg-clip-text text-transparent;
  }
  
  /* Backdrop blur */
  .backdrop-blur-glass {
    backdrop-filter: blur(10px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  /* Scrollbar styling */
  .scrollbar-thin {
    scrollbar-width: thin;
    scrollbar-color: theme('colors.accent') transparent;
  }
  
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: theme('colors.accent');
    border-radius: 3px;
  }
}
```

### Animation Utilities
```css
@layer utilities {
  /* Entrance animations */
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  .animate-slide-up {
    animation: slideUp 0.8s ease-out forwards;
  }
  
  .animate-scale-in {
    animation: scaleIn 0.4s ease-out forwards;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes scaleIn {
  from { 
    opacity: 0; 
    transform: scale(0.9); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
}
```

---

## 🎨 Design System Usage Examples

### Hero Section Styling
```tsx
<section className="min-h-screen flex items-center justify-center
                   bg-gradient-to-br from-background via-background to-background/90
                   relative overflow-hidden">
  <div className="container mx-auto px-6 relative z-10">
    <motion.h1 
      className="text-4xl md:text-6xl lg:text-8xl font-black
                 text-gradient tracking-tight leading-none mb-8"
      style={{ fontFamily: 'var(--font-playfair)' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Creative Developer
    </motion.h1>
  </div>
</section>
```

### Project Card Styling  
```tsx
<motion.div
  className="group relative bg-white dark:bg-gray-800 rounded-xl
             shadow-lg hover:shadow-xl hover:shadow-accent/10
             border border-gray-200 dark:border-gray-700
             overflow-hidden cursor-pointer transition-all duration-300"
  whileHover={{ y: -5 }}
  whileTap={{ scale: 0.98 }}
>
  <div className="aspect-video relative overflow-hidden">
    <Image 
      src={project.image}
      alt={project.title}
      fill
      className="object-cover transition-transform duration-500
                 group-hover:scale-110"
    />
  </div>
  
  <div className="p-6">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white
                   group-hover:text-accent transition-colors duration-200">
      {project.title}
    </h3>
    
    <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
      {project.description}
    </p>
    
    <div className="flex flex-wrap gap-2 mt-4">
      {project.technologies.map(tech => (
        <span key={tech} 
              className="px-3 py-1 text-xs font-medium rounded-full
                         bg-accent/10 text-accent border border-accent/20">
          {tech}
        </span>
      ))}
    </div>
  </div>
</motion.div>
```

This styling guide provides a comprehensive foundation for maintaining consistent, beautiful, and performant styles throughout the portfolio website.