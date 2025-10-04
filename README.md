# Portfolio Website - Comprehensive Documentation

## 🌟 Project Overview

A modern, responsive portfolio website showcasing software engineering projects and skills. Built with cutting-edge web technologies and featuring smooth animations, dark mode support, and an immersive user experience.

### 🚀 Live Demo
- **Production**: https://vinuki-thiranya.vercel.app/
- **Repository**: https://github.com/vinuki-thiranya/MyPortfolio

### 📋 Table of Contents
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Documentation](#documentation)
- [Development](#development)
- [Deployment](#deployment)

## ⚡ Quick Start

### Prerequisites
- Node.js 18.17+ 
- npm or pnpm package manager
- Git

### Installation
```bash
# Clone the repository
git clone [your-repo-url]
cd portfolio-website

# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev
```

### Environment Setup
```bash
# Create .env.local file
cp .env.example .env.local

# Configure environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🏗️ Project Structure

```
portfolio-website/
├── app/                          # Next.js 13+ App Router
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with font loading
│   ├── page.tsx                 # Homepage composition
│   ├── image-licenses/          # Legal compliance pages
│   ├── projects/                # Dynamic project routes
│   │   └── [slug]/              # Individual project pages
│   └── style-guide/             # Design system documentation
├── components/                   # Reusable UI components
│   ├── ui/                      # shadcn/ui component library
│   ├── about.tsx                # About section component
│   ├── contact.tsx             # Contact form and info
│   ├── entry.tsx               # Landing animation sequence
│   ├── experience.tsx          # Career timeline
│   ├── footer.tsx              # Site footer with vertical email
│   ├── grid.tsx                # Animated background grid
│   ├── hero.tsx                # Main hero section
│   ├── navigation.tsx          # Top navigation bar
│   ├── project-detail-modal.tsx # Project overlay modals
│   ├── technologies.tsx        # Skills and tech stack
│   ├── theme-provider.tsx      # Dark/light theme context
│   └── work.tsx                # Projects showcase grid
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions and config
├── public/                      # Static assets
│   ├── images/                  # Project screenshots and assets
│   └── preview/                 # Social media previews
├── styles/                      # Additional stylesheets
└── docs/                        # Documentation files (this folder)
```

## 🛠️ Tech Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animation library
- **shadcn/ui** - Modern component library
- **Lucide React** - Consistent icon set

### Fonts & Typography
- **Poppins** - Primary sans-serif font
- **Roboto Mono** - Monospace font for code
- **Playfair Display** - Elegant serif for headings

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control
- **pnpm** - Fast package manager

### Deployment & Hosting
- **Vercel** - Optimized Next.js deployment
- **GitHub** - Source code management
- **Vercel Analytics** - Performance monitoring

## ✨ Key Features

### 🎨 Visual Design
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Dark Mode**: System preference detection with manual toggle
- **Smooth Animations**: Framer Motion-powered transitions and interactions
- **Custom Cursor**: Interactive cursor effects for desktop users
- **Typography Scale**: Carefully crafted font hierarchy and spacing

### 🖼️ Project Showcase
- **Dynamic Routing**: Individual pages for each project with SEO optimization
- **Interactive Galleries**: Image carousels with hover effects
- **Technology Tags**: Filterable and categorized skill tags
- **Live Demos**: Direct links to deployed projects and source code
- **Responsive Cards**: Adaptive project cards with hover states

### 🎭 Interactive Elements
- **Scroll Animations**: Elements animate on scroll using Intersection Observer
- **Hover States**: Subtle micro-interactions throughout the interface
- **Loading States**: Smooth transitions and skeleton loading
- **Form Validation**: Client-side validation with error handling
- **Modal System**: Accessible overlays and dialogs

### 📱 User Experience
- **Performance**: Optimized images, lazy loading, and code splitting
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **SEO**: Meta tags, structured data, and semantic HTML
- **PWA Features**: Manifest file and service worker ready
- **Cross-browser**: Tested across modern browsers and devices

## 📚 Documentation

This project includes comprehensive documentation:

- **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - System architecture and design patterns
- **[COMPONENTS.md](./docs/COMPONENTS.md)** - Component library and API reference
- **[STYLING.md](./docs/STYLING.md)** - Design system and styling guidelines
- **[DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - Build and deployment processes
- **[CONTRIBUTING.md](./docs/CONTRIBUTING.md)** - Development workflow and guidelines

## 🔧 Development

### Scripts
```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix linting issues

# Type checking
pnpm type-check       # Run TypeScript compiler

# Dependencies
pnpm update           # Update all dependencies
pnpm audit            # Check for security vulnerabilities
```

### Code Quality
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **ESLint**: Extended configuration with React and Next.js rules
- **Prettier**: Consistent code formatting across the project
- **Husky**: Pre-commit hooks for code quality assurance

### Testing Strategy
```bash
# Unit tests
pnpm test             # Run Jest unit tests
pnpm test:watch       # Watch mode for development
pnpm test:coverage    # Generate coverage reports

# End-to-end tests
pnpm e2e              # Run Playwright E2E tests
pnpm e2e:ui           # Interactive E2E test runner
```

## 🚀 Deployment

### Production Build
```bash
# Create optimized production build
pnpm build

# Analyze bundle size
pnpm analyze

# Start production server locally
pnpm start
```

### Environment Variables
```env
# Production environment
NEXT_PUBLIC_SITE_URL= https://vinuki-thiranya.vercel.app/

CONTACT_EMAIL=vtkatugampala@gmail.com
```

### Performance Optimizations
- **Image Optimization**: Next.js Image component with responsive loading
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Webpack Bundle Analyzer integration
- **Caching**: Aggressive caching strategies for static assets
- **Compression**: Gzip and Brotli compression enabled

## 📊 Analytics & Monitoring

### Performance Metrics
- **Core Web Vitals**: LCP, FID, CLS monitoring
- **Lighthouse Score**: 95+ across all categories
- **Bundle Size**: Tracked and optimized regularly
- **Loading Times**: Sub-second initial page loads

### User Analytics
- **Google Analytics**: User behavior and traffic analysis
- **Vercel Analytics**: Real-time performance monitoring
- **Error Tracking**: Automated error reporting and alerts

## 🤝 Contributing

Please read [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the incredible React framework
- **Vercel** - For seamless deployment and hosting
- **shadcn** - For the beautiful component library
- **Framer** - For the powerful animation library
- **Tailwind CSS** - For the utility-first CSS framework

## 📞 Contact

**Vinuki Thiranya**
- Email: vtkatugampala@gmail.com
- LinkedIn: www.linkedin.com/in/vinuki-thiranya
- GitHub: (https://github.com/vinuki-thiranya)

---

*Built with ❤️ using Next.js, TypeScript, and modern web technologies.*
