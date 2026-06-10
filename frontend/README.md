# AI Career Roadmap Generator - Frontend

A modern, production-ready React 19 frontend for an AI-powered career roadmap platform.

## Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Ultra-fast frontend build tool
- **React Router** - Client-side routing
- **TanStack React Query** - Server state management
- **Zustand** - Global state management
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **React Hook Form** - Efficient form handling
- **Zod** - TypeScript-first schema validation
- **Axios** - HTTP client
- **Recharts** - Data visualization
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Update API base URL in .env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Development

```bash
# Start development server
npm run dev

# The app will open at http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
frontend/
├── public/                 # Static files
├── src/
│   ├── app/               # App configuration
│   │   ├── router/        # Route definitions
│   │   ├── providers/     # App providers
│   │   └── layouts/       # Layout components
│   ├── assets/            # Images, fonts
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components
│   │   ├── feedback/     # Error handling, loaders
│   │   ├── navigation/   # Navigation components
│   │   ├── tables/       # Table components
│   │   └── forms/        # Form components
│   ├── features/          # Feature modules
│   │   └── acrg/         # ACRG specific features
│   ├── services/          # API services
│   ├── hooks/            # Custom React hooks
│   ├── store/            # Zustand stores
│   ├── lib/              # Utilities and helpers
│   ├── constants/        # App constants
│   ├── utils/            # Utility functions
│   ├── schemas/          # Zod validation schemas
│   ├── types/            # TypeScript types (JSDoc)
│   ├── styles/           # Global styles
│   ├── App.jsx          # Root component
│   └── main.jsx         # Entry point
├── .env                  # Environment variables
├── .env.example         # Example env file
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── index.html           # HTML template
```

## Features

### Authentication
- Login/Register with email verification
- Forgot/Reset password flows
- JWT token management with refresh tokens
- Role-based access control

### Dashboard
- Role-specific dashboards (Student, Mentor, Placement Officer, Admin)
- Progress tracking and analytics
- Key metrics and KPIs

### User Roles
1. **Student** - Create goals, track progress, get AI roadmaps
2. **Mentor** - Review student submissions, provide feedback
3. **Placement Officer** - View placement analytics and reports
4. **Admin** - Manage users, content, and system settings

### Feature Modules
- Career Profile Management
- Goal Setting and Tracking
- Skill Inventory
- Gap Analysis
- AI Roadmap Generation
- Progress Tracking
- Project Planning
- Mentor Reviews
- Notifications
- Reports and Analytics

## API Integration

All API calls are centralized in `/services/api/`:

```javascript
import { authAPI, goalsAPI, skillsAPI } from '@/services/api'

// Usage
const response = await authAPI.login(email, password)
const goals = await goalsAPI.list({ page: 1 })
```

## State Management

### Zustand Stores
- `useAuthStore` - Authentication state
- `useThemeStore` - Theme preferences
- `useUIStore` - UI state (modals, sidebar, etc.)
- `useNotificationStore` - Notifications

### React Query
- Server state management
- Automatic caching and synchronization
- Background refetching

## Component Examples

### Button Component
```jsx
import Button from '@/components/ui/Button'

<Button variant="default" size="lg">Click Me</Button>
<Button variant="outline">Secondary</Button>
<Button isLoading={true}>Loading...</Button>
```

### Input Component
```jsx
import Input from '@/components/ui/Input'

<Input 
  label="Email"
  type="email"
  icon={Mail}
  error={errors.email?.message}
  {...register('email')}
/>
```

### Card Component
```jsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

## Styling

The project uses Tailwind CSS with custom colors and extensions:

```jsx
// Primary colors
className="text-primary-600 bg-primary-100 border-primary-500"

// Dark mode support
className="dark:bg-secondary-900 dark:text-secondary-100"

// Glass morphism
className="glass"

// Gradients
className="bg-gradient-primary"
```

## Protected Routes

Routes are protected based on authentication and roles:

```jsx
<PrivateRoute>
  <Dashboard />
</PrivateRoute>

<RoleRoute allowedRoles={['admin']}>
  <AdminPanel />
</RoleRoute>

<PublicRoute>
  <LoginPage />
</PublicRoute>
```

## Error Handling

- Global error boundary for crash prevention
- API error interceptors with auto-retry
- User-friendly error messages with toast notifications
- Error pages (404, 403, 500)

## Performance Optimizations

- Code splitting with React Router
- Image optimization
- CSS minification
- Tree shaking unused code
- Lazy loading components

## Best Practices

- Component composition over inheritance
- Custom hooks for reusable logic
- Centralized API services
- Consistent naming conventions
- Comprehensive error handling
- Responsive design
- Accessibility-first approach

## Environment Variables

```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=AI Career Roadmap Generator
VITE_APP_VERSION=1.0.0
VITE_ENVIRONMENT=development
```

## Development Guidelines

1. **Components**: Keep components small and focused
2. **Hooks**: Extract reusable logic into custom hooks
3. **Styles**: Use Tailwind utilities, avoid inline styles
4. **API**: Use services layer for all API calls
5. **State**: Use Zustand for global state, React Query for server state
6. **Forms**: Use React Hook Form with Zod validation
7. **Testing**: Write tests for critical functions

## Troubleshooting

### Module not found errors
- Ensure all imports use correct path aliases (@/...)
- Check that files are in the correct directories

### Styling issues
- Clear Tailwind cache: `rm -rf node_modules/.tailwind`
- Rebuild: `npm run build`

### API connection issues
- Verify backend is running
- Check VITE_API_BASE_URL in .env
- Review browser console for CORS errors

## License

Private - Not for public distribution

## Support

For issues and questions, contact the development team.
