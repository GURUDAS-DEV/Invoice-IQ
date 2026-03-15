# Invoice-IQ 🧾

<div align="center">

**Smart Invoice Management for Indian Kirana Stores**

*Stop Losing Money to High Prices & Grow Your Profit*

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-green?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

*Har delivery ka hisaab, ek hi app mein* 📱

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Usage Guide](#usage-guide)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About

**Invoice-IQ** is a B2B SaaS platform specifically designed for Indian Kirana store (retail shop) owners to optimize their procurement costs and maximize profitability. The platform digitizes and analyzes supplier invoices to help small business owners make data-driven purchasing decisions.

### The Problem

Small retail shop owners in India face several challenges:
- 📈 **Price Volatility**: Supplier prices fluctuate without notice
- 🔍 **Lack of Transparency**: Difficult to compare rates across multiple suppliers
- 💰 **Profit Erosion**: Hidden price increases eat into margins
- 📊 **Manual Tracking**: Time-consuming invoice and inventory management
- 🎯 **Poor Decision Making**: No data-driven insights for procurement

### The Solution

Invoice-IQ provides:
- 📸 **Invoice Digitization**: Scan and automatically extract data from supplier bills
- 📊 **Price Tracking**: Monitor price trends across all your suppliers
- 🚨 **Alert System**: Get notified when prices spike above normal ranges
- 💡 **Smart Insights**: AI-powered recommendations for cost optimization
- 📈 **Analytics Dashboard**: Visualize spending patterns and supplier performance
- 🔄 **Supplier Comparison**: Find the best deals by comparing wholesale rates

---

## ✨ Key Features

### 🔐 Authentication & Security
- **Google OAuth 2.0** integration for seamless login
- JWT-based authentication with access and refresh tokens
- HTTP-only cookies for secure session management
- Protected routes with middleware validation

### 📊 Dashboard & Analytics
- **Real-time Business Metrics**: Total spending, supplier count, items tracked
- **Price Alert System**: Immediate notifications for price spikes
- **Recent Deliveries Ledger**: Track all incoming inventory
- **Supplier Performance**: Breakdown of spending by distributor
- **Top Purchased Items**: Identify your most-ordered products
- **Monthly Trends**: Visualize spending patterns over time
- **Smart AI Summary**: Get actionable insights and recommendations

### 🏪 Supplier Management
- **Multi-Supplier Tracking**: Manage all your distributors in one place
- **Category Filtering**: Organize suppliers by product type (FMCG, Beverages, Snacks, etc.)
- **Contact Management**: Store and access supplier information
- **Historical Data**: Track supplier pricing history and reliability

### 🎨 User Experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Mode Support**: Toggle between light and dark themes
- **Intuitive Interface**: Clean, modern UI built with shadcn/ui
- **Toast Notifications**: Real-time feedback for user actions
- **Fast Performance**: Built with Next.js 16 App Router and React 19

---

## 🛠 Technology Stack

### Frontend
- **Framework**: [Next.js 16.1.6](https://nextjs.org/) with App Router
- **UI Library**: [React 19.2.3](https://react.dev/)
- **Language**: [TypeScript 5.x](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom theme
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Animations**: [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express 5.2.1](https://expressjs.com/)
- **Language**: [TypeScript 5.9.3](https://www.typescriptlang.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose 9.3.0](https://mongoosejs.com/)
- **Authentication**: [JWT (jsonwebtoken)](https://jwt.io/)
- **Security**: [CORS](https://github.com/expressjs/cors) + crypto-es for hashing
- **Environment Config**: [dotenv](https://github.com/motdotla/dotenv)

### Development Tools
- **Linting**: ESLint 9.x
- **Hot Reload**: nodemon (backend)
- **Compiler**: Babel React Compiler
- **Package Manager**: npm

---

## 🏗 Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────┐   │
│  │  Landing   │  │   Login    │  │   Dashboard/Home   │   │
│  │    Page    │  │    Page    │  │   (Protected)      │   │
│  └────────────┘  └────────────┘  └────────────────────┘   │
│                     Next.js 16 App Router                    │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ HTTP/REST API
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Layer (Express)                     │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────┐   │
│  │   Auth      │  │  Middleware  │  │  Controllers    │   │
│  │   Router    │  │  (JWT Check) │  │  (OAuth Logic)  │   │
│  └─────────────┘  └──────────────┘  └─────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Mongoose ODM
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Database Layer (MongoDB)                   │
│  ┌──────────────────┐  ┌─────────────────────────────┐     │
│  │   User Model     │  │  (Future: Invoice, Supplier │     │
│  │  - email         │  │   Delivery, Analytics)      │     │
│  │  - name          │  │                             │     │
│  │  - googleId      │  │                             │     │
│  └──────────────────┘  └─────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

### Authentication Flow

```
1. User clicks "Continue with Google"
   ↓
2. Frontend → POST /api/auth/loginWithGoogle
   ↓
3. Backend generates Google OAuth URL
   ↓
4. User redirected to Google Auth
   ↓
5. User authorizes app
   ↓
6. Google → GET /api/auth/google/callback?code=...
   ↓
7. Backend exchanges code for tokens
   ↓
8. Backend parses JWT id_token for user info
   ↓
9. User created/retrieved in MongoDB
   ↓
10. JWT Access & Refresh tokens generated
    ↓
11. Tokens set as HTTP-only cookies
    ↓
12. User redirected to /home (dashboard)
```

### Directory Structure

```
Invoice-IQ/
├── frontend/                      # Next.js application
│   ├── src/
│   │   ├── app/                   # App Router pages
│   │   │   ├── (public)/          # Public routes
│   │   │   │   ├── page.tsx       # Landing page
│   │   │   │   └── login/         # Login page
│   │   │   ├── (private)/         # Protected routes
│   │   │   │   ├── home/          # Dashboard
│   │   │   │   └── sellers/       # Supplier management
│   │   │   ├── layout.tsx         # Root layout
│   │   │   └── globals.css        # Global styles
│   │   ├── components/            # React components
│   │   │   ├── ui/                # Reusable UI components
│   │   │   ├── landing/           # Landing page sections
│   │   │   ├── layout/            # Layout components
│   │   │   ├── Navbar/            # Navigation
│   │   │   └── sellers/           # Seller components
│   │   ├── lib/                   # Utilities
│   │   │   ├── mock-data.ts       # Demo data
│   │   │   └── utils.ts           # Helper functions
│   │   ├── types/                 # TypeScript definitions
│   │   └── proxy.ts               # Auth middleware
│   ├── public/                    # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   └── components.json            # shadcn/ui config
│
├── backend/                       # Express API
│   ├── index.ts                   # Server entry point
│   ├── ConnectDB.ts               # MongoDB connection
│   ├── Router/
│   │   └── Auth.Router.ts         # Auth routes
│   ├── Controller/
│   │   └── Auth.Controller.ts     # Auth handlers
│   ├── Models/
│   │   └── auth.model.ts          # User schema
│   ├── utils/
│   │   ├── Hash.helper.ts         # SHA256 hashing
│   │   └── Token.helper.ts        # JWT generation
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                      # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** (v9.x or higher) - Comes with Node.js
- **MongoDB** (v6.x or higher) - [Installation Guide](https://docs.mongodb.com/manual/installation/)
- **Git** - [Download](https://git-scm.com/)

Additionally, you'll need:
- A **Google Cloud Platform** account for OAuth setup
- A **MongoDB Atlas** account (or local MongoDB instance)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/amar-295/Invoice-IQ.git
cd Invoice-IQ
```

2. **Install Frontend Dependencies**

```bash
cd frontend
npm install
```

3. **Install Backend Dependencies**

```bash
cd ../backend
npm install
```

### Environment Variables

#### Backend Configuration

Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=9000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/invoice-iq
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/invoice-iq

# Google OAuth 2.0 Credentials
# Get these from: https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:9000/api/auth/google/callback

# JWT Secrets (Generate random strings for production)
ACCESS_TOKEN_SECRET=your_access_token_secret_here
REFRESH_TOKEN_SECRET=your_refresh_token_secret_here

# Frontend URL (for redirects after auth)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

#### Frontend Configuration

Create a `.env.local` file in the `frontend/` directory:

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:9000
```

#### Setting up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth client ID**
5. Choose **Web application**
6. Add authorized redirect URIs:
   - `http://localhost:9000/api/auth/google/callback` (development)
   - `https://yourdomain.com/api/auth/google/callback` (production)
7. Copy the **Client ID** and **Client Secret** to your `.env` file

### Running the Application

#### Development Mode

1. **Start MongoDB** (if running locally)

```bash
# macOS/Linux
mongod --dbpath /path/to/data/directory

# Windows
mongod --dbpath C:\path\to\data\directory
```

2. **Start the Backend Server**

```bash
cd backend
npm start
```

The backend will run on `http://localhost:9000`

3. **Start the Frontend Development Server**

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:3000`

4. **Access the Application**

Open your browser and navigate to:
- Frontend: http://localhost:3000
- Backend API: http://localhost:9000

#### Production Build

**Frontend:**

```bash
cd frontend
npm run build
npm start
```

**Backend:**

```bash
cd backend
npm start
```

---

## 📁 Project Structure

### Frontend Pages

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with features and pricing |
| `/login` | Public | Authentication page (Google OAuth) |
| `/home` | Protected | Dashboard with analytics and insights |
| `/sellers` | Protected | Supplier management and comparison |

### Backend API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/loginWithGoogle` | Initiates Google OAuth flow | No |
| GET | `/api/auth/google/callback` | Handles OAuth callback | No |
| GET | `/api/auth/logout` | Logs out user and clears tokens | Yes |

---

## 📚 API Documentation

### Authentication Endpoints

#### POST `/api/auth/loginWithGoogle`

Generates Google OAuth URL for user authentication.

**Request:**
```http
POST /api/auth/loginWithGoogle
Content-Type: application/json
```

**Response:**
```json
{
  "success": true,
  "message": "Google OAuth URL generated successfully",
  "data": {
    "url": "https://accounts.google.com/o/oauth2/v2/auth?..."
  }
}
```

#### GET `/api/auth/google/callback`

Handles OAuth callback from Google.

**Request:**
```http
GET /api/auth/google/callback?code=4/0AfgeXvvr...&scope=email+profile
```

**Response:**
- Sets HTTP-only cookies: `accessToken`, `refreshToken`
- Redirects to: `http://localhost:3000/home`

#### GET `/api/auth/logout`

Logs out the current user.

**Request:**
```http
GET /api/auth/logout
Cookie: refreshToken=eyJhbGciOiJIUzI1NiIs...
```

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### Data Models

#### User Schema

```typescript
{
  email: string;        // User's email (unique)
  name: string;         // User's display name
  googleId: string;     // Google account ID
  createdAt: Date;      // Account creation timestamp
  updatedAt: Date;      // Last update timestamp
}
```

---

## 📖 Usage Guide

### For Kirana Store Owners

1. **Sign Up / Login**
   - Visit the landing page
   - Click "Get Started Free" or "Continue with Google"
   - Authorize the app with your Google account

2. **Dashboard Overview**
   - View your total spending across all suppliers
   - Check the number of suppliers and items tracked
   - Monitor active price alerts
   - Review recent deliveries in the ledger

3. **Track Suppliers**
   - Navigate to the Sellers page
   - View all your suppliers organized by category
   - Filter by FMCG, Beverages, Dairy, Snacks, etc.
   - Compare prices and performance

4. **Monitor Price Changes**
   - Check the Price Alerts section on the dashboard
   - Red badges indicate price spikes
   - Green badges show price drops
   - Get notified of significant changes

5. **Analyze Spending**
   - Review the Supplier Spending Breakdown chart
   - Check Top Purchased Items to understand inventory patterns
   - View Monthly Spending Trends for forecasting
   - Read AI-powered Smart Summary for actionable insights

### Key Metrics Explained

- **Total Spend**: Cumulative amount spent across all suppliers this month
- **Suppliers**: Number of active distributors you're purchasing from
- **Items Tracked**: Total unique products in your inventory system
- **Alerts**: Number of price anomalies detected

---

## 🔧 Development

### Code Style & Linting

**Frontend:**
```bash
cd frontend
npm run lint          # Run ESLint
npm run lint -- --fix # Auto-fix linting issues
```

**Backend:**
```bash
cd backend
npm start             # Automatically watches for changes
```

### Technology Choices

#### Why Next.js 16?
- App Router for better file-based routing
- React Server Components for improved performance
- Built-in API routes (future expansion)
- Excellent SEO support for landing pages
- Vercel deployment integration

#### Why TypeScript?
- Type safety reduces runtime errors
- Better IDE support and autocomplete
- Self-documenting code with interfaces
- Easier refactoring and maintenance

#### Why shadcn/ui?
- Copy-paste components (not a dependency)
- Full control over component code
- Built on Radix UI (accessible, unstyled)
- Customizable with Tailwind CSS
- Modern design system

#### Why MongoDB?
- Flexible schema for evolving data models
- JSON-like documents match JavaScript objects
- Excellent scalability for growing data
- Strong community and ecosystem
- Easy integration with Mongoose ODM

### Adding New Features

1. **New Frontend Page:**
   - Create page in `frontend/src/app/(private)/your-page/page.tsx`
   - Add navigation link in Sidebar component
   - Use existing UI components from `components/ui/`

2. **New Backend Route:**
   - Create router in `backend/Router/YourFeature.Router.ts`
   - Create controller in `backend/Controller/YourFeature.Controller.ts`
   - Create model in `backend/Models/your-feature.model.ts`
   - Import and use in `backend/index.ts`

3. **New Database Model:**
   - Define schema in `backend/Models/`
   - Use TypeScript interfaces for type safety
   - Add validation and indexes as needed

---

## 🚢 Deployment

### Frontend Deployment (Vercel)

1. **Connect to Vercel:**
   ```bash
   npm install -g vercel
   cd frontend
   vercel
   ```

2. **Set Environment Variables:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add `NEXT_PUBLIC_API_URL` with your backend URL

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Backend Deployment (Railway/Heroku/AWS)

#### Using Railway:

1. **Install Railway CLI:**
   ```bash
   npm install -g railway
   ```

2. **Login and Initialize:**
   ```bash
   railway login
   cd backend
   railway init
   ```

3. **Set Environment Variables:**
   ```bash
   railway variables set MONGODB_URI=mongodb+srv://...
   railway variables set GOOGLE_CLIENT_ID=...
   railway variables set GOOGLE_CLIENT_SECRET=...
   railway variables set ACCESS_TOKEN_SECRET=...
   railway variables set REFRESH_TOKEN_SECRET=...
   ```

4. **Deploy:**
   ```bash
   railway up
   ```

#### Using Docker:

```dockerfile
# Backend Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
CMD ["npm", "start"]
```

```bash
docker build -t invoice-iq-backend .
docker run -p 9000:9000 --env-file .env invoice-iq-backend
```

### Database (MongoDB Atlas)

1. Create a cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user
3. Whitelist your application's IP address
4. Get the connection string and add to your `.env`

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- Write clean, maintainable code
- Follow TypeScript best practices
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Ensure your code passes linting
- Test your changes thoroughly
- Update README if you add new features

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

### Areas for Contribution

- 🐛 **Bug Fixes**: Report and fix bugs
- ✨ **New Features**: Implement invoice scanning, SMS alerts, etc.
- 📝 **Documentation**: Improve guides and API docs
- 🎨 **UI/UX**: Enhance design and user experience
- 🧪 **Testing**: Add unit and integration tests
- 🌐 **Localization**: Add support for regional languages

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Invoice-IQ

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

### Technologies & Libraries

- [Next.js](https://nextjs.org/) - The React framework for production
- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Express.js](https://expressjs.com/) - Fast, minimalist web framework
- [MongoDB](https://www.mongodb.com/) - Document-oriented database
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling

### Design Inspiration

- Modern SaaS dashboard designs
- Indian e-commerce platforms
- Finance and analytics tools

### Community

Special thanks to:
- All contributors who help improve this project
- The open-source community for amazing tools and libraries
- Indian small business owners who inspired this solution

---

## 📞 Contact & Support

### Project Maintainer

- **GitHub**: [@amar-295](https://github.com/amar-295)
- **Repository**: [Invoice-IQ](https://github.com/amar-295/Invoice-IQ)

### Get Help

- 🐛 **Report Bugs**: [Open an Issue](https://github.com/amar-295/Invoice-IQ/issues)
- 💡 **Request Features**: [Feature Request](https://github.com/amar-295/Invoice-IQ/issues/new)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/amar-295/Invoice-IQ/discussions)

### Resources

- [Documentation](https://github.com/amar-295/Invoice-IQ/wiki)
- [FAQ](https://github.com/amar-295/Invoice-IQ/wiki/FAQ)
- [Roadmap](https://github.com/amar-295/Invoice-IQ/projects)

---

## 🗺 Roadmap

### Phase 1: MVP (Current)
- [x] Google OAuth authentication
- [x] Dashboard with mock data
- [x] Supplier management
- [x] Responsive UI design
- [x] Dark mode support

### Phase 2: Core Features (In Progress)
- [ ] Invoice scanning (OCR integration)
- [ ] Real invoice processing
- [ ] Supplier database integration
- [ ] Price tracking algorithm
- [ ] SMS/Email notifications

### Phase 3: AI Integration
- [ ] ML-based price prediction
- [ ] Smart procurement recommendations
- [ ] Anomaly detection
- [ ] Inventory forecasting
- [ ] Supplier rating system

### Phase 4: Scale & Growth
- [ ] Mobile app (React Native)
- [ ] Multi-language support (Hindi, Tamil, Telugu, etc.)
- [ ] Bulk invoice upload
- [ ] Advanced analytics
- [ ] API for third-party integrations
- [ ] Supplier marketplace

---

<div align="center">

**Made with ❤️ for Indian Small Business Owners**

*Empowering Kirana stores with data-driven insights*

⭐ **Star this repo** if you find it helpful!

</div>
