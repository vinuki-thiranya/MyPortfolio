# Component Library Documentation

## 📦 Component Overview

This documentation provides comprehensive details about all components in the portfolio website, their APIs, usage patterns, and implementation details.

## 🏗️ Component Hierarchy

```
Components/
├── Layout Components
│   ├── Navigation
│   ├── Footer  
│   └── Grid
├── Section Components  
│   ├── Hero
│   ├── About
│   ├── Experience
│   ├── Technologies
│   └── Work
├── Feature Components
│   ├── Chatbot
│   ├── Project Detail Modal
│   └── Theme Provider
└── UI Components (shadcn/ui)
    ├── Button
    ├── Card
    ├── Input
    └── [30+ more components]
```

---

## 🧭 Layout Components

### Navigation Component

**File**: `components/navigation.tsx`

**Purpose**: Top navigation bar with animated logo and project links

#### Features
- Animated logo entrance with vertical slide
- Responsive navigation items
- Dark mode support
- Framer Motion animations

#### Props Interface
```typescript
interface NavigationProps {
  // No props - uses internal state
}
```

#### Usage Example
```tsx
import Navigation from '@/components/navigation'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}
```

#### Animation Details
```typescript
// Logo animation
initial={{ opacity: 0, y: -30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.2 }}
viewport={{ amount: 0.3 }}

// Projects text animation
initial={{ opacity: 0, y: -30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.2 }}
```

#### Styling Classes
```css
/* Main navigation container */
.nav-container {
  @apply absolute left-12 top-12 right-12 z-[99] 
         flex justify-between items-center;
}

/* Logo styling */
.nav-logo {
  @apply static w-10;
}

/* Projects text styling */
.nav-projects {
  @apply w-[130px] ml-[3px] border-b border-[#667eea] 
         dark:border-[#e6f1ff] text-[#2d3748] 
         dark:text-[#e6f1ff] font-poppins text-sm 
         leading-10 font-semibold tracking-[2px] uppercase mb-5;
}
```

---

### Footer Component

**File**: `components/footer.tsx`

**Purpose**: Site footer with vertical email display and decorative lines

#### Features
- Vertical email text on the right
- Animated entrance effects
- Responsive positioning
- Dark mode support

#### Props Interface
```typescript
interface FooterProps {
  // No props - static content
}
```

#### Usage Example
```tsx
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main>
      {/* Page content */}
      <Footer />
    </main>
  )
}
```

#### Animation Details
```typescript
// Left footer line
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 2.6 }}

// Right footer with email
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 3.2 }}
```

#### Styling Implementation
```css
/* Vertical email styling */
.vertical-email {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  @apply font-poppins text-[#718096] dark:text-[#e6f1ff]/60 
         text-sm no-underline hover:text-[#5a67d8] 
         dark:hover:text-[#64ffd9] hover:-translate-y-1 
         transition-all duration-400 block;
}
```

---

### Grid Component

**File**: `components/grid.tsx`

**Purpose**: Animated background grid pattern

#### Features
- Subtle animated grid overlay
- Responsive grid sizing
- Performance optimized
- Dark mode variations

---

## 🎭 Section Components

### Hero Component

**File**: `components/hero.tsx`

**Purpose**: Main landing section with introduction and social links

#### Features
- Animated text entrance
- Social media icons (mobile)
- Responsive typography
- Playfair Display font integration
- Interactive animations

#### Props Interface
```typescript
interface HeroProps {
  // No external props - self-contained
}
```

#### Key Features
```typescript
// Mobile social icons configuration
const socialIcons = [
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/your-profile",
    label: "LinkedIn" 
  },
  { 
    icon: Instagram, 
    href: "https://instagram.com/your-profile",
    label: "Instagram" 
  },
  { 
    icon: Mail, 
    href: "mailto:vtkatugampala@gmail.com",
    label: "Email" 
  }
]
```

#### Animation Patterns
```typescript
// Main title animation
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}

// Social icons stagger
transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
```

#### Responsive Behavior
- **Desktop**: Full hero layout with large typography
- **Tablet**: Adjusted spacing and font sizes  
- **Mobile**: Stacked layout with social icons row

---

### About Component

**File**: `components/about.tsx`

**Purpose**: Personal introduction and background information

#### Features
- Scroll-triggered animations
- Professional description
- Skills highlights
- Responsive text layout

#### Content Structure
```typescript
interface AboutContent {
  title: string
  description: string[]
  highlights: string[]
  cta: string
}
```

---

### Experience Component  

**File**: `components/experience.tsx`

**Purpose**: Career timeline and professional experience

#### Features
- Vertical timeline layout
- Animated timeline progression
- Company logos and descriptions
- Date ranges and role descriptions

#### Experience Data Structure
```typescript
interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  description: string[]
  technologies: string[]
  logo?: string
}
```

#### Timeline Animation
```typescript
// Timeline items animate in sequence
variants={{
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, delay: index * 0.2 }
  }
}}
```

---

### Technologies Component

**File**: `components/technologies.tsx`

**Purpose**: Skills and technology showcase

#### Features
- Categorized skill groups
- Interactive hover effects
- Proficiency indicators
- Technology icons

#### Technology Categories
```typescript
interface TechnologyCategory {
  category: string
  technologies: {
    name: string
    icon: React.ComponentType
    proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  }[]
}
```

#### Hover Animations
```typescript
whileHover={{ 
  scale: 1.05, 
  rotate: [0, -1, 1, 0],
  transition: { duration: 0.3 }
}}
```

---

### Work Component

**File**: `components/work.tsx`

**Purpose**: Projects showcase grid with interactive overlays

#### Features
- Project grid layout
- Hover overlays (desktop only)
- Mobile tap interactions
- Technology filter tags
- Live demo and source code links

#### Project Data Structure
```typescript
interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  links: {
    live: string
    github: string
  }
  featured: boolean
}
```

#### Interactive States
```typescript
// Hover overlay state management
const [tappedProject, setTappedProject] = useState<number | null>(null)

// Desktop hover + Mobile tap logic
const isActive = (projectId: number) => {
  const isHovered = hoveredProject === projectId
  const isTapped = tappedProject === projectId
  return isHovered || (isMobile && isTapped)
}
```

#### Overlay Animation
```typescript
// Project overlay entrance
animate={{
  opacity: isActive ? 1 : 0,
  y: isActive ? 0 : 20
}}
transition={{ duration: 0.3, ease: "easeOut" }}
```

#### Responsive Behavior
- **Desktop**: Hover overlays with full descriptions
- **Mobile**: Tap to toggle overlay, click away to dismiss
- **Tablet**: Hybrid approach based on touch capability

---

## 🎪 Feature Components

### Chatbot Component

**File**: `components/chatbot.tsx`

**Purpose**: Interactive chatbot widget for visitor engagement

#### Features
- Modal-based chat interface
- Animated entrance/exit
- Message threading
- Typing indicators
- Auto-responses

#### Props Interface
```typescript
interface ChatbotProps {
  isOpen: boolean
  onClose: () => void
}
```

#### Animation States
```typescript
// Modal animations
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    y: 50,
    transition: { duration: 0.2 }
  }
}
```

#### Message System
```typescript
interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  typing?: boolean
}
```

---

### Project Detail Modal

**File**: `components/project-detail-modal.tsx`

**Purpose**: Full-screen project detail overlays

#### Features
- Full project information display
- Image galleries
- Technology breakdowns
- Links to live demos
- Smooth entrance/exit animations

#### Props Interface
```typescript
interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}
```

---

### Theme Provider

**File**: `components/theme-provider.tsx`

**Purpose**: Dark/light theme context and management

#### Features
- System preference detection
- Manual theme toggle
- Persistent theme storage
- Smooth theme transitions

#### Theme Context
```typescript
interface ThemeContextType {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}
```

#### Implementation
```typescript
export function ThemeProvider({ 
  children, 
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false
}) {
  // Theme logic implementation
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

---

## 🧩 UI Components (shadcn/ui)

### Button Component

**File**: `components/ui/button.tsx`

#### Variants
```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)
```

### Card Component

**File**: `components/ui/card.tsx`

#### Structure
```tsx
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
```

### Complete UI Component List

The portfolio uses the full shadcn/ui component library:

- **Layout**: Card, Separator, Scroll Area, Sheet, Sidebar
- **Navigation**: Breadcrumb, Menu, Navigation Menu, Pagination, Tabs
- **Form**: Button, Input, Label, Textarea, Select, Checkbox, Radio Group
- **Feedback**: Alert, Alert Dialog, Dialog, Drawer, Popover, Tooltip, Toast
- **Data Display**: Avatar, Badge, Calendar, Chart, Progress, Skeleton, Table
- **Advanced**: Command, Context Menu, Hover Card, Resizable, Slider, Switch, Toggle

---

## 🎨 Animation Patterns

### Common Animation Variants

```typescript
// Fade in from bottom
export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Stagger children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Scale on hover
export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
}
```

### Viewport Animation Triggers

```typescript
// Standard viewport trigger
viewport={{ once: true, amount: 0.3 }}

// Multiple triggers
viewport={{ once: false, amount: 0.1 }}

// Margin-based triggers
viewport={{ once: true, margin: "-100px" }}
```

---

## 📱 Responsive Design Patterns

### Breakpoint Strategy
```typescript
// Tailwind CSS breakpoints used throughout
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet portrait  
  lg: '1024px',  // Tablet landscape / Small desktop
  xl: '1280px',  // Desktop
  '2xl': '1536px' // Large desktop
}
```

### Responsive Component Patterns
```tsx
// Conditional rendering
<div className="hidden md:block">
  Desktop content
</div>

<div className="block md:hidden">
  Mobile content  
</div>

// Responsive props
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="text-xl md:text-3xl lg:text-5xl"
>
```

---

## 🧪 Testing Patterns

### Component Testing Strategy
```typescript
// Example test structure
describe('Hero Component', () => {
  it('renders main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
  
  it('displays social icons on mobile', () => {
    // Mock mobile viewport
    mockMatchMedia('(max-width: 768px)')
    render(<Hero />)
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
  
  it('animates on mount', async () => {
    render(<Hero />)
    await waitFor(() => {
      expect(screen.getByTestId('hero-title')).toHaveClass('opacity-1')
    })
  })
})
```

---

## 🔧 Development Guidelines

### Component Creation Checklist
- [ ] TypeScript interfaces defined
- [ ] Responsive behavior implemented  
- [ ] Accessibility attributes added
- [ ] Animation variants created
- [ ] Error states handled
- [ ] Loading states implemented
- [ ] Tests written
- [ ] Documentation updated

### Performance Best Practices
- Use `React.memo()` for expensive components
- Implement `useMemo()` for heavy calculations
- Use `useCallback()` for stable function references
- Lazy load heavy components with `React.lazy()`
- Optimize images with Next.js Image component

This component library provides a comprehensive foundation for building a modern, interactive portfolio website with consistent patterns and reusable components.