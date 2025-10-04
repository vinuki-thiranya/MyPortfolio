# Deployment & Production Guide

## 🚀 Deployment Overview

This guide covers everything needed to build, optimize, and deploy the portfolio website to production environments with optimal performance and reliability.

---

## 🏗️ Build Process

### Production Build
```bash
# Create optimized production build
pnpm build

# Preview production build locally
pnpm start

# Build with bundle analysis
ANALYZE=true pnpm build
```

### Build Configuration
```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration
  output: 'standalone', // For Docker deployments
  trailingSlash: false,
  
  // Performance optimizations
  compress: true,
  generateEtags: false,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    domains: [
      'images.unsplash.com',
      'your-cdn-domain.com'
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
  },
  
  // Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'framer-motion',
      'lucide-react'
    ]
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer, webpack }) => {
    // Production optimizations
    if (!dev) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
          }
        }
      }
    }
    
    return config
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',  
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

export default nextConfig
```

### Build Optimization Checklist
- [ ] Bundle size under 500KB (initial load)
- [ ] Images optimized and responsive
- [ ] Unused CSS purged
- [ ] JavaScript minified and compressed
- [ ] Fonts preloaded and optimized
- [ ] Critical CSS inlined
- [ ] Service worker configured (if PWA)

---

## 🌐 Vercel Deployment (Recommended)

### Automatic Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Deploy to production
vercel --prod
```

### Vercel Configuration
```json
// vercel.json
{
  "version": 2,
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "installCommand": "pnpm install --frozen-lockfile",
  "framework": "nextjs",
  
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 10
    }
  },
  
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control", 
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ]
}
```

### Environment Variables (Vercel)
```bash
# Set via Vercel CLI
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add CONTACT_EMAIL
vercel env add GOOGLE_ANALYTICS_ID

# Or via Vercel Dashboard
# Project Settings > Environment Variables
```

---

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
# Multi-stage build for optimal image size
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Environment variables for build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN corepack enable pnpm && pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose
```yaml
# docker-compose.yml
version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://vinuki-thiranya.vercel.app/
    restart: unless-stopped
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - portfolio
    restart: unless-stopped
```

### Build and Run Docker
```bash
# Build Docker image
docker build -t portfolio-website .

# Run container
docker run -p 3000:3000 portfolio-website

# Run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f portfolio
```

---

## ☁️ Alternative Deployment Platforms

### Netlify Deployment
```toml
# netlify.toml
[build]
  command = "pnpm build && pnpm export"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--version"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/home"
  to = "/"
  status = 301
```

### AWS Amplify
```yaml
# amplify.yml  
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - corepack enable pnpm
        - pnpm install --frozen-lockfile
    build:
      commands:
        - pnpm build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### GitHub Pages (Static Export)
```javascript
// next.config.mjs for static export
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? '/portfolio-website' 
    : ''
}
```

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Setup pnpm
      uses: pnpm/action-setup@v2
      with:
        version: latest
        
    - name: Install dependencies
      run: pnpm install --frozen-lockfile
      
    - name: Build
      run: pnpm build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

---

## 🔧 Performance Optimization

### Bundle Analysis
```bash
# Analyze bundle size
ANALYZE=true pnpm build

# Generate bundle report
pnpm add -D @next/bundle-analyzer

# View bundle composition
pnpm build && pnpm analyze
```

### Image Optimization
```typescript
// Optimized image component usage
import Image from 'next/image'

export function OptimizedImage({ src, alt, ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      quality={85}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={false}
      {...props}
    />
  )
}
```

### Code Splitting Strategies
```typescript
// Route-level code splitting
const ProjectDetail = dynamic(
  () => import('@/components/project-detail-modal'),
  {
    loading: () => <ProjectDetailSkeleton />,
    ssr: false
  }
)

// Component-level splitting  
const HeavyChart = dynamic(
  () => import('@/components/heavy-chart'),
  {
    loading: () => <div>Loading chart...</div>,
    ssr: false
  }
)

// Conditional loading
const AdminPanel = dynamic(
  () => import('@/components/admin-panel'),
  { 
    ssr: false,
    loading: () => <AdminSkeleton />
  }
)
```

### Font Optimization
```typescript
// app/layout.tsx
import { Poppins, Roboto_Mono } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap', // Improves loading performance
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html className={`${poppins.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

---

## 📊 Monitoring & Analytics

### Vercel Analytics
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics 4
```typescript
// lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
```

```typescript
// app/layout.tsx
import Script from 'next/script'
import { GA_TRACKING_ID } from '@/lib/gtag'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Performance Monitoring
```typescript
// lib/performance.ts
export function reportWebVitals({ id, name, label, value }) {
  // Send to analytics service
  if (label === 'web-vital') {
    // Google Analytics
    window.gtag?.('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
    })
    
    // Vercel Analytics
    if (window.va) {
      window.va('track', 'Web Vital', {
        name,
        value,
        label: id,
      })
    }
  }
}
```

---

## 🔒 Security Configuration

### Content Security Policy
```typescript
// next.config.mjs
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
  child-src 'none';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data: https://images.unsplash.com;
  media-src 'none';
  connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com;
  font-src 'self' https://fonts.gstatic.com;
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'false'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
]

export default {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      }
    ]
  }
}
```

---

## 🚨 Error Handling & Logging

### Error Boundary Setup
```typescript
// components/error-boundary.tsx
'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo)
    
    // Send to error tracking service (e.g., Sentry)
    if (typeof window !== 'undefined') {
      // Only in browser
      fetch('/api/log-error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          error: error.message, 
          stack: error.stack,
          errorInfo 
        })
      })
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="btn-primary"
            >
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
```

### Global Error Pages
```typescript
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
```

```typescript
// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-6xl font-bold mb-4">404</h2>
        <p className="text-xl mb-8">Page not found</p>
        <a href="/" className="btn-primary">
          Return Home
        </a>
      </div>
    </div>
  )
}
```

---

## 📈 Performance Benchmarks

### Target Metrics
```javascript
// Performance targets
const performanceTargets = {
  // Core Web Vitals
  LCP: 2.5,      // Largest Contentful Paint (seconds)
  FID: 0.1,      // First Input Delay (seconds) 
  CLS: 0.1,      // Cumulative Layout Shift (score)
  
  // Additional metrics
  TTFB: 0.8,     // Time to First Byte (seconds)
  FCP: 1.8,      // First Contentful Paint (seconds)
  TTI: 3.8,      // Time to Interactive (seconds)
  
  // Bundle size targets
  initialJS: 500,    // KB
  totalJS: 1000,     // KB
  CSS: 100,          // KB
  images: 2000,      // KB (total page)
}
```

### Lighthouse CI Configuration
```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      startServerCommand: 'pnpm start',
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': ['warn', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
```

This deployment guide ensures your portfolio website is optimized, secure, and ready for production with comprehensive monitoring and error handling capabilities.