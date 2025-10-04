# Contributing Guide

## 👋 Welcome Contributors

Thank you for your interest in contributing to this portfolio website! This guide will help you get started with contributing code, reporting issues, and improving the project.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or higher
- pnpm (recommended) or npm
- Git
- Code editor (VS Code recommended)

### Initial Setup
```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork locally
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
cd portfolio-website

# 3. Add upstream remote
git remote add upstream https://github.com/vinuki-thiranya/portfolio-website.git

# 4. Install dependencies
pnpm install

# 5. Create environment file
cp .env.example .env.local

# 6. Start development server
pnpm dev
```

### Development Environment Setup
```bash
# Recommended VS Code extensions
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension ms-vscode.vscode-eslint

# Configure Git (if not already done)
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

---

## 🔄 Development Workflow

### Branch Strategy
We use GitHub Flow for a simple, effective workflow:

```bash
# 1. Update main branch
git checkout main
git pull upstream main

# 2. Create feature branch  
git checkout -b feature/your-feature-name
# or for fixes
git checkout -b fix/issue-description

# 3. Make your changes
# ... code changes ...

# 4. Commit changes
git add .
git commit -m "feat: add new project card animation"

# 5. Push to your fork
git push origin feature/your-feature-name

# 6. Create Pull Request on GitHub
```

### Commit Convention
We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# Format: type(scope): description
# Types: feat, fix, docs, style, refactor, test, chore

# Examples:
git commit -m "feat: add dark mode toggle component"
git commit -m "fix: resolve mobile navigation overlay issue"
git commit -m "docs: update component API documentation"
git commit -m "style: improve project card hover animation"
git commit -m "refactor: extract reusable animation variants"
git commit -m "test: add unit tests for hero component"
git commit -m "chore: update dependencies to latest versions"
```

### Commit Message Guidelines
```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix  
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

**Examples with body:**
```
feat(components): add project filtering functionality

- Add filter buttons for technology categories
- Implement filter state management with useState
- Add smooth transition animations for filtered results
- Update project data structure to include category tags

Closes #123
```

---

## 🧪 Testing Guidelines

### Running Tests
```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run specific test file
pnpm test components/hero.test.tsx

# Run E2E tests
pnpm test:e2e
```

### Writing Tests

#### Component Testing
```typescript
// components/__tests__/hero.test.tsx
import { render, screen } from '@testing-library/react'
import { Hero } from '../hero'

describe('Hero Component', () => {
  it('renders main heading', () => {
    render(<Hero />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Vinuki Thiranya')
  })

  it('displays social media links on mobile', () => {
    // Mock mobile viewport
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: query === '(max-width: 768px)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    })

    render(<Hero />)
    
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('animates on mount', async () => {
    render(<Hero />)
    
    const title = screen.getByTestId('hero-title')
    
    // Test initial state
    expect(title).toHaveStyle({ opacity: 0 })
    
    // Wait for animation
    await waitFor(() => {
      expect(title).toHaveStyle({ opacity: 1 })
    }, { timeout: 1000 })
  })
})
```

#### Integration Testing
```typescript
// __tests__/navigation.integration.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Navigation } from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'

describe('Navigation Integration', () => {
  const NavigationWithProviders = () => (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  )

  it('navigates to projects section when clicked', () => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = jest.fn()
    
    render(
      <>
        <NavigationWithProviders />
        <div id="work">Projects Section</div>
      </>
    )
    
    const projectsLink = screen.getByText('PROJECTS')
    fireEvent.click(projectsLink)
    
    expect(document.getElementById('work')?.scrollIntoView).toHaveBeenCalled()
  })
})
```

#### E2E Testing (Playwright)
```typescript
// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load and display main sections', async ({ page }) => {
    await page.goto('/')
    
    // Check hero section
    await expect(page.locator('h1')).toContainText('Vinuki Thiranya')
    
    // Check navigation
    await expect(page.locator('[data-testid="navigation"]')).toBeVisible()
    
    // Check projects section
    await expect(page.locator('#work')).toBeVisible()
    
    // Test smooth scrolling
    await page.click('text=PROJECTS')
    await expect(page.locator('#work')).toBeInViewport()
  })

  test('should toggle dark/light mode', async ({ page }) => {
    await page.goto('/')
    
    const themeToggle = page.locator('[data-testid="theme-toggle"]')
    
    // Test initial dark mode
    await expect(page.locator('html')).toHaveClass(/dark/)
    
    // Toggle to light mode
    await themeToggle.click()
    await expect(page.locator('html')).not.toHaveClass(/dark/)
    
    // Toggle back to dark mode
    await themeToggle.click()
    await expect(page.locator('html')).toHaveClass(/dark/)
  })

  test('should display project details on hover', async ({ page }) => {
    await page.goto('/')
    
    const projectCard = page.locator('[data-testid="project-card"]').first()
    
    // Initially overlay should not be visible
    await expect(projectCard.locator('[data-testid="project-overlay"]'))
      .not.toBeVisible()
    
    // Hover should show overlay
    await projectCard.hover()
    await expect(projectCard.locator('[data-testid="project-overlay"]'))
      .toBeVisible()
  })
})
```

### Test Coverage Requirements
- **Components**: Minimum 80% coverage
- **Utilities**: Minimum 90% coverage
- **Critical paths**: 100% coverage

---

## 🎨 Code Style Guidelines

### TypeScript Standards
```typescript
// Use explicit types for props and state
interface ComponentProps {
  title: string
  description?: string
  onAction: (id: string) => void
}

// Use proper return types
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]
}

// Use const assertions for immutable data
const ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
} as const

// Use generic types appropriately  
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}
```

### React Component Guidelines
```tsx
// Use function components with TypeScript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  disabled = false 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'btn-base',
        variant === 'primary' && 'btn-primary',
        variant === 'secondary' && 'btn-secondary',
        variant === 'outline' && 'btn-outline',
        size === 'sm' && 'btn-sm',
        size === 'lg' && 'btn-lg'
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

// Use proper prop destructuring
// ✅ Good
function ProjectCard({ title, description, image }: ProjectProps) {
  // Component logic
}

// ❌ Avoid
function ProjectCard(props: ProjectProps) {
  const { title, description, image } = props
  // Component logic
}
```

### Styling Guidelines
```css
/* Use Tailwind classes in logical order */
/* Layout -> Positioning -> Box Model -> Typography -> Visual -> Misc */
.component {
  @apply 
    /* Layout */
    flex items-center justify-center
    /* Positioning */
    relative z-10
    /* Box Model */
    w-full max-w-md px-4 py-2
    /* Typography */
    text-lg font-semibold
    /* Visual */
    bg-white border border-gray-200 rounded-lg shadow-sm
    /* Interactions */
    hover:bg-gray-50 transition-colors duration-200;
}

/* Group related utilities */
.card {
  @apply 
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-white
    border border-gray-200 dark:border-gray-700;
}
```

### File Naming Conventions
```
components/
├── ui/
│   ├── button.tsx           # kebab-case for files
│   ├── input-field.tsx      # kebab-case with descriptive names
│   └── modal-dialog.tsx     # clear, specific names
├── sections/
│   ├── hero-section.tsx     # section suffix for page sections
│   ├── about-section.tsx    # consistent naming pattern
│   └── contact-section.tsx  # group related components
└── features/
    ├── project-gallery/     # folder for complex features
    │   ├── index.tsx        # barrel exports
    │   ├── gallery.tsx      # main component
    │   ├── gallery-item.tsx # sub-components
    │   └── gallery.test.tsx # co-located tests
    └── theme-switcher.tsx   # standalone feature components
```

---

## 🐛 Bug Reports

### Before Reporting
1. **Search existing issues** - Check if the bug has already been reported
2. **Reproduce the issue** - Ensure the bug is consistent
3. **Test in different browsers** - Verify browser compatibility
4. **Check recent changes** - Review recent commits for related changes

### Bug Report Template
```markdown
## Bug Description
A clear and concise description of what the bug is.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
A clear description of what you expected to happen.

## Actual Behavior  
A clear description of what actually happened.

## Screenshots
If applicable, add screenshots to help explain your problem.

## Environment
- OS: [e.g. macOS 12.0, Windows 11, Ubuntu 20.04]
- Browser: [e.g. Chrome 96, Firefox 94, Safari 15]
- Device: [e.g. Desktop, iPhone 12, iPad Pro]
- Screen Resolution: [e.g. 1920x1080, 375x667]

## Additional Context
Add any other context about the problem here.

## Possible Solution
If you have suggestions on how to fix the bug, please describe them here.
```

---

## 💡 Feature Requests

### Feature Request Template
```markdown
## Feature Summary
A brief description of the feature you'd like to see.

## Problem Statement
What problem does this feature solve? What use case does it address?

## Proposed Solution
Describe your preferred solution in detail.

## Alternative Solutions
Describe any alternative solutions or features you've considered.

## Additional Context
Add any other context, mockups, or examples about the feature request.

## Implementation Considerations
- Technical complexity: [Low/Medium/High]
- Breaking changes: [Yes/No]
- Dependencies: [List any new dependencies needed]

## Acceptance Criteria
- [ ] Criteria 1
- [ ] Criteria 2  
- [ ] Criteria 3
```

---

## 📋 Pull Request Guidelines

### Before Submitting
- [ ] Code follows project style guidelines
- [ ] Self-review of changes completed
- [ ] Tests added/updated for new functionality
- [ ] Documentation updated if needed
- [ ] All CI checks pass
- [ ] Branch is up to date with main

### Pull Request Template
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that causes existing functionality to change)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Refactoring (no functional changes)

## Related Issue
Fixes #(issue_number)

## Screenshots
If applicable, add screenshots of the changes.

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass  
- [ ] E2E tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No console.log statements left
- [ ] Performance impact considered

## Breaking Changes
List any breaking changes and migration steps if applicable.

## Additional Notes
Any additional information for reviewers.
```

---

## 👥 Code Review Process

### For Authors
1. **Self-review** your code before requesting review
2. **Write clear PR descriptions** explaining what and why
3. **Keep PRs focused** - one feature/fix per PR
4. **Respond promptly** to feedback and questions
5. **Test thoroughly** before marking as ready for review

### For Reviewers
1. **Review promptly** - aim for 24-48 hour response time
2. **Be constructive** - explain the "why" behind feedback
3. **Test locally** for complex changes
4. **Check edge cases** and error handling
5. **Approve when satisfied** - don't nitpick minor issues

### Review Checklist
- [ ] **Functionality**: Does the code do what it's supposed to?
- [ ] **Performance**: Are there any performance implications?
- [ ] **Security**: Are there any security vulnerabilities?
- [ ] **Maintainability**: Is the code readable and well-structured?
- [ ] **Testing**: Are there adequate tests?
- [ ] **Documentation**: Is documentation updated if needed?

---

## 🎯 Performance Guidelines

### Code Performance
```typescript
// ✅ Good - Memoized expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data)
}, [data])

// ✅ Good - Stable callback references
const handleClick = useCallback(() => {
  onAction(id)
}, [onAction, id])

// ✅ Good - Proper component memoization
const ProjectCard = memo(({ project, onSelect }: ProjectCardProps) => {
  return (
    <div onClick={() => onSelect(project.id)}>
      {project.title}
    </div>
  )
})

// ❌ Avoid - Creating objects in render
function Component() {
  return <OtherComponent style={{ margin: '10px' }} /> // Creates new object each render
}

// ✅ Better - Define outside or use useMemo
const COMPONENT_STYLE = { margin: '10px' }

function Component() {
  return <OtherComponent style={COMPONENT_STYLE} />
}
```

### Bundle Size Considerations
```typescript
// ✅ Good - Selective imports
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

// ❌ Avoid - Full library imports  
import * as FramerMotion from 'framer-motion'
import * as Icons from 'lucide-react'

// ✅ Good - Dynamic imports for heavy components
const HeavyChart = dynamic(() => import('./heavy-chart'), {
  loading: () => <ChartSkeleton />,
  ssr: false
})

// ✅ Good - Lazy loading images
<Image
  src="/large-image.jpg"
  alt="Description"
  loading="lazy"
  placeholder="blur"
/>
```

---

## 🔧 Development Tools

### Recommended VS Code Extensions
```json
// .vscode/extensions.json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode", 
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-eslint",
    "streetsidesoftware.code-spell-checker",
    "ms-playwright.playwright",
    "ms-vscode.test-adapter-converter"
  ]
}
```

### VS Code Settings
```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "tailwindCSS.experimental.classRegex": [
    "cva\\(([^)]*)\\)",
    "[\"'`]([^\"'`]*).*?[\"'`]"
  ]
}
```

### Debugging Setup
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node",
      "request": "attach",
      "port": 9229,
      "skipFiles": ["<node_internals>/**"]
    },
    {
      "name": "Next.js: debug client-side",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

---

## 🎉 Recognition

### Contributors Hall of Fame
We recognize and appreciate all contributions! Contributors will be:
- Listed in the project README
- Mentioned in release notes for significant contributions
- Invited to join the core contributor team for ongoing contributions

### Contribution Types We Value
- **Code contributions** - New features, bug fixes, improvements
- **Documentation** - Writing, editing, translating docs
- **Testing** - Writing tests, manual testing, reporting bugs
- **Design** - UI/UX improvements, design system work
- **Performance** - Optimization and performance improvements
- **Accessibility** - Making the site more accessible
- **Mentoring** - Helping other contributors

---

## 📞 Getting Help

### Communication Channels
- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General questions and community chat
- **Email** - vtkatugampala@gmail.com for private matters

### Response Times
- **Bug reports**: 1-3 days
- **Feature requests**: 3-7 days  
- **Pull requests**: 1-2 days
- **General questions**: 1-3 days

---

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same [MIT License](../LICENSE) that covers the project.

---

Thank you for contributing to make this portfolio website better! 🚀