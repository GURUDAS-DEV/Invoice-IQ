# Contributing to Invoice-IQ 🤝

First off, thank you for considering contributing to Invoice-IQ! It's people like you that make Invoice-IQ such a great tool for Indian Kirana store owners.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Style Guidelines](#style-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- **Be Respectful**: Treat everyone with respect and kindness
- **Be Inclusive**: Welcome diverse perspectives and experiences
- **Be Constructive**: Provide helpful feedback and criticism
- **Be Collaborative**: Work together toward common goals
- **Be Professional**: Focus on what is best for the community

## Getting Started

### Prerequisites

Before you start contributing, make sure you have:

1. **Node.js** (v18.x or higher)
2. **npm** (v9.x or higher)
3. **MongoDB** (v6.x or higher)
4. **Git** installed
5. A **GitHub account**
6. Familiarity with **TypeScript** and **React**

### Setting Up Your Development Environment

1. **Fork the Repository**

   Click the "Fork" button at the top right of the repository page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/Invoice-IQ.git
   cd Invoice-IQ
   ```

3. **Add Upstream Remote**

   ```bash
   git remote add upstream https://github.com/amar-295/Invoice-IQ.git
   ```

4. **Install Dependencies**

   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

5. **Set Up Environment Variables**

   Copy the example files and fill in your values:
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env.local
   ```

6. **Run the Application**

   ```bash
   # Terminal 1 - Backend
   cd backend
   npm start

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

## How Can I Contribute?

### Reporting Bugs 🐛

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

**Bug Report Template:**

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g., Windows 10, macOS 13, Ubuntu 22.04]
 - Browser: [e.g., Chrome 120, Firefox 121]
 - Node Version: [e.g., 18.17.0]
 - npm Version: [e.g., 9.6.7]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Features ✨

Feature suggestions are welcome! Please provide:

- **Clear description** of the feature
- **Use case** - why is this feature needed?
- **Proposed solution** - how should it work?
- **Alternatives considered** - what other solutions did you think about?
- **Mockups/Screenshots** (if applicable)

### Improving Documentation 📝

Documentation improvements are always appreciated:

- Fix typos or grammatical errors
- Add missing information
- Clarify confusing sections
- Add code examples
- Improve API documentation

### Writing Code 💻

#### Good First Issues

Look for issues labeled `good first issue` or `help wanted` to get started.

#### Areas for Contribution

1. **Invoice Scanning**: Implement OCR for invoice digitization
2. **Price Tracking**: Build algorithms for price anomaly detection
3. **AI Features**: Integrate ML models for recommendations
4. **Mobile App**: Develop React Native version
5. **Testing**: Add unit and integration tests
6. **Localization**: Add support for Hindi, Tamil, Telugu, etc.

## Development Process

### Branch Naming Convention

Use descriptive branch names:

- `feature/` - New features (e.g., `feature/invoice-scanning`)
- `bugfix/` - Bug fixes (e.g., `bugfix/login-error`)
- `hotfix/` - Critical fixes (e.g., `hotfix/security-patch`)
- `docs/` - Documentation (e.g., `docs/api-guide`)
- `refactor/` - Code refactoring (e.g., `refactor/auth-flow`)
- `test/` - Adding tests (e.g., `test/user-model`)

### Workflow

1. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**

   - Write clean, maintainable code
   - Follow the style guidelines
   - Add comments for complex logic
   - Update documentation if needed

3. **Test Your Changes**

   ```bash
   # Run linter
   npm run lint

   # Test locally
   npm run dev
   ```

4. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "feat: add invoice scanning feature"
   ```

5. **Keep Your Branch Updated**

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**

## Style Guidelines

### TypeScript/JavaScript

- Use **TypeScript** for all new code
- Follow **ESLint** configuration
- Use **meaningful variable names**
- Prefer `const` over `let`, avoid `var`
- Use arrow functions for callbacks
- Add JSDoc comments for complex functions

**Example:**

```typescript
/**
 * Calculates the average price of an item over a specified period
 * @param itemId - The unique identifier of the item
 * @param startDate - Start date for the calculation
 * @param endDate - End date for the calculation
 * @returns The average price or null if no data available
 */
async function calculateAveragePrice(
  itemId: string,
  startDate: Date,
  endDate: Date
): Promise<number | null> {
  // Implementation
}
```

### React Components

- Use **functional components** with hooks
- Create **reusable components** when possible
- Use **TypeScript interfaces** for props
- Follow the **component structure** from existing code

**Example:**

```typescript
interface PriceAlertProps {
  itemName: string;
  oldPrice: number;
  newPrice: number;
  severity: 'low' | 'medium' | 'high';
}

export function PriceAlert({ itemName, oldPrice, newPrice, severity }: PriceAlertProps) {
  return (
    <div className={`alert alert-${severity}`}>
      {/* Component content */}
    </div>
  );
}
```

### CSS/Tailwind

- Use **Tailwind CSS** utility classes
- Follow existing **color scheme** and **spacing**
- Use **responsive design** principles
- Support both **light and dark** modes

**Example:**

```tsx
<div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
    Title
  </h2>
</div>
```

### File Structure

- Place components in appropriate directories
- Use **index.ts** for barrel exports
- Keep files **focused and small** (< 300 lines)
- Separate **business logic** from UI

**Example:**

```
components/
├── invoice/
│   ├── InvoiceList.tsx
│   ├── InvoiceCard.tsx
│   ├── InvoiceScanner.tsx
│   └── index.ts           # Barrel export
```

## Commit Guidelines

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

### Examples

```bash
feat(auth): add Google OAuth login

Implement Google OAuth 2.0 authentication flow with JWT token generation.
Users can now log in using their Google accounts.

Closes #123
```

```bash
fix(dashboard): correct price calculation in supplier breakdown

The total spending was incorrectly calculated when multiple currencies
were involved. Updated the calculation to normalize all prices to INR.

Fixes #456
```

```bash
docs(readme): add environment setup instructions

Added detailed steps for setting up development environment including
MongoDB configuration and OAuth credentials.
```

## Pull Request Process

### Before Submitting

1. **Update the README** if you added new features
2. **Add/Update tests** if applicable
3. **Run linter** and fix all issues
4. **Test thoroughly** on your local environment
5. **Rebase your branch** on the latest main branch

### PR Template

When you open a PR, please include:

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## How Has This Been Tested?
Describe the tests you ran and how to reproduce them.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Related Issues
Closes #issue_number
```

### Review Process

1. A maintainer will review your PR within **3-5 business days**
2. Address any **review comments** promptly
3. Make requested changes in **new commits** (don't force push during review)
4. Once approved, a maintainer will **merge your PR**

### After Your PR is Merged

1. **Delete your branch** (GitHub will prompt you)
2. **Update your local repository**:
   ```bash
   git checkout main
   git pull upstream main
   ```
3. **Celebrate!** 🎉 You're now a contributor!

## Recognition

All contributors will be:

- Listed in the **Contributors** section of the README
- Mentioned in release notes for significant contributions
- Given credit in the project's **CONTRIBUTORS.md** file

## Questions?

If you have questions, feel free to:

- Open a [GitHub Discussion](https://github.com/amar-295/Invoice-IQ/discussions)
- Comment on the relevant issue
- Reach out to the maintainers

## Resources

### Learning Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)

### Project-Specific

- [Project README](README.md)
- [Architecture Overview](README.md#architecture)
- [API Documentation](README.md#api-documentation)

---

**Thank you for contributing to Invoice-IQ!** 🙏

Together, we're helping Indian small business owners optimize their costs and grow their profits.
