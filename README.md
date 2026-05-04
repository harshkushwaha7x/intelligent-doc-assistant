# DocuChat

AI-powered document chat and summarization application that enables intelligent conversations with your PDF documents.

## Overview

DocuChat is a modern web application that allows users to upload PDF documents and interact with them through an AI-powered chat interface. Built with React, TypeScript, and Recoil for state management, the application provides a seamless experience for document analysis and information extraction.

## Features

- **Document Upload & Management** - Upload and organize PDF documents up to 4MB
- **AI-Powered Chat** - Ask questions and receive contextual answers from your documents
- **Document Summarization** - Automatically extract key insights and summaries
- **Favorites System** - Mark and organize important documents for quick access
- **Chat History** - Persistent conversation history for each document
- **Secure Authentication** - JWT-based authentication with CSRF token protection
- **Responsive Design** - Optimized for desktop and mobile devices
- **Real-time Updates** - Live document processing status and chat responses
- **Modern UI/UX** - Smooth animations and intuitive interface

## Tech Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript 5.6** - Type-safe development
- **Vite 6.0** - Build tool and development server
- **Recoil 0.7** - State management
- **React Router 7.1** - Client-side routing
- **Tailwind CSS 4.0** - Utility-first styling
- **Motion 12.0** - Animation library (Framer Motion alternative)
- **Axios 1.7** - HTTP client

### UI Components & Libraries
- **Radix UI** - Accessible dropdown menu components
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **React Loading Indicators** - Loading states
- **React Scroll** - Smooth scrolling navigation
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility class merging
- **Tailwind Animate** - Animation utilities

### Development Tools
- **ESLint 9.17** - Code linting
- **TypeScript ESLint 8.18** - TypeScript-specific linting rules
- **Vite Plugin React** - Fast refresh and JSX support

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm package manager
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/harshkushwaha7x/intelligent-doc-assistant.git
   cd intelligent-doc-assistant
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   VITE_API_URL=https://be1.piyushxz.online/api/v1
   VITE_APP_NAME=DocuChat
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to
   ```
   http://localhost:5173
   ```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript and build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Project Structure

```
intelligent-doc-assistant/
├── src/
│   ├── assets/              # Static assets (images, icons, screenshots)
│   ├── components/          # Reusable React components
│   │   ├── icons/           # SVG icon components
│   │   ├── Aboutus.tsx
│   │   ├── AddContentModal.tsx
│   │   ├── AnimatedAIResult.tsx
│   │   ├── Button.tsx
│   │   ├── ChatBubble.tsx
│   │   ├── ChatBubbleLoading.tsx
│   │   ├── DashboardNavbar.tsx
│   │   ├── DeleteModal.tsx
│   │   ├── DropdownMenu.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Features2.tsx
│   │   ├── Featurs.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingSkeleton.tsx
│   │   ├── Navbar.tsx
│   │   ├── PDFCard.tsx
│   │   ├── PDFUpload.tsx
│   │   ├── QueryBox.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SidebarOption.tsx
│   │   └── Testimonials.tsx
│   ├── constants/           # Application constants and API endpoints
│   │   └── index.ts
│   ├── hooks/               # Custom React hooks
│   │   ├── useDebounce.ts
│   │   ├── useDocuments.ts
│   │   ├── useErrorHandler.ts
│   │   └── useHistory.ts
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   ├── pages/               # Page components
│   │   ├── DashBoard.tsx
│   │   ├── Landing.tsx
│   │   ├── Login.tsx
│   │   ├── QueryRoom.tsx
│   │   └── Signup.tsx
│   ├── services/            # API service layer
│   │   ├── apiClient.ts     # Axios instance with interceptors
│   │   ├── authService.ts   # Authentication services
│   │   └── documentService.ts # Document operations
│   ├── types/               # TypeScript type definitions
│   │   ├── errors.ts        # Custom error classes
│   │   └── index.ts         # Shared type definitions
│   ├── utils/               # Helper utilities
│   │   └── validation.ts    # Input validation functions
│   ├── App.tsx              # Root application component with lazy loading
│   ├── atoms.ts             # Recoil state atoms
│   ├── config.ts            # Application configuration
│   ├── index.css            # Global styles and Tailwind imports
│   ├── main.tsx             # Application entry point
│   └── vite-env.d.ts        # Vite environment type definitions
├── public/                  # Public static assets
│   └── vite.svg
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── components.json          # Shadcn UI configuration
├── declarations.d.ts        # Global TypeScript declarations
├── Dockerfile               # Docker configuration for containerization
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point with SEO meta tags
├── package.json             # Dependencies and scripts
├── package-lock.json        # Locked dependency versions
├── README.md                # Project documentation
├── tsconfig.json            # Base TypeScript configuration
├── tsconfig.app.json        # App-specific TypeScript config
├── tsconfig.node.json       # Node-specific TypeScript config
└── vite.config.ts           # Vite build configuration with path aliases
```

## Architecture

### State Management
The application uses Recoil for state management with the following key atoms:
- **Authentication state** - User session and token management
- **Document state** - Document list, active document, and favorites
- **Chat state** - Messages, history, and loading states
- **UI state** - Modals, sidebar visibility, and content selection

### API Integration
All API calls are centralized in the `services` directory:

**apiClient.ts** - Axios instance with:
- Request interceptors for JWT token attachment
- CSRF token management for state-changing operations
- Response interceptors for token refresh and error handling
- Automatic redirect on 401 (unauthorized)
- Request timeout handling (10 seconds)

**authService.ts** - Authentication operations:
- User login and signup
- Token storage in sessionStorage
- Token validation and expiration checks
- Logout functionality

**documentService.ts** - Document operations:
- Fetch user documents and favorites
- Upload new documents (multipart/form-data)
- Delete documents
- Query documents with AI
- Toggle favorite status

### Custom Hooks

**useDebounce** - Debounce input values for optimized API calls
- Reduces unnecessary API requests during typing
- Configurable delay (default: 500ms)

**useDocuments** - Fetch and manage document list
- Automatic polling for document updates
- Loading and error states
- Cleanup on unmount

**useErrorHandler** - Centralized error handling
- Toast notifications for user feedback
- Axios error parsing
- Development vs production logging

**useHistory** - Fetch and manage chat history
- Load conversation history for documents
- Format messages with sender information
- Loading states and error handling

### Validation & Security

**Input Validation**
- File type validation (PDF only)
- File size validation (max 4MB)
- Document name validation
- Email and password validation

**Security Features**
- CSRF token protection for POST/PUT/DELETE/PATCH requests
- JWT Bearer token authentication
- Session storage for secure token management
- XSS prevention through React's built-in escaping
- Automatic session expiration handling
- Request timeout protection

## Key Features Implementation

### Document Upload
- File validation (PDF only, max 4MB)
- Multipart form data upload
- Real-time upload feedback with toast notifications
- Automatic document list refresh
- Error handling with user-friendly messages

### AI Chat Interface
- Context-aware responses based on document content
- Chat history persistence per document
- Real-time typing indicators
- Smooth animations for message rendering
- Request cancellation with AbortController to prevent race conditions
- Debounced input for optimized API calls

### Performance Optimizations
- **Lazy loading** - Routes and components loaded on demand
- **React.memo** - Component memoization to prevent unnecessary re-renders
- **useMemo** - Expensive computations cached
- **Debounced inputs** - Reduced API calls during typing
- **Request cancellation** - Prevents race conditions and memory leaks
- **Loading skeletons** - Better perceived performance
- **Image lazy loading** - Deferred loading of non-critical images

### Accessibility
- ARIA labels for screen readers
- Keyboard navigation support (Enter, Escape, Space)
- Semantic HTML structure
- Focus management for modals and dialogs
- Proper form labels and error messages
- aria-current for active navigation items
- Role attributes for custom components

## API Endpoints

The application integrates with the following backend endpoints:

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/user/signup` | User registration | `{ username, email, password }` |
| POST | `/user/signin` | User authentication | `{ username, password }` |
| POST | `/user/logout` | User logout | None |
| GET | `/documents` | Fetch user documents | None |
| POST | `/upload` | Upload new document | FormData with file and documentName |
| DELETE | `/documents` | Delete document | `{ documentId }` |
| POST | `/documents/:id/query` | Query document with AI | `{ query }` |
| GET | `/history/:id` | Fetch chat history | None |
| GET | `/favourite` | Fetch favorite documents | None |
| POST | `/favourite` | Toggle document favorite | `{ document: documentId }` |

### Authentication
All authenticated requests include:
- `Authorization: Bearer <token>` header
- `X-CSRF-Token` header for state-changing operations
- `withCredentials: true` for cookie support

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `VITE_API_URL` | Backend API base URL | `https://be1.piyushxz.online/api/v1` | Yes |
| `VITE_APP_NAME` | Application display name | `DocuChat` | No |

## Build and Deployment

### Production Build
```bash
npm run build
```

This command:
1. Runs TypeScript compiler (`tsc -b`)
2. Builds optimized production bundle with Vite
3. Outputs to `dist` directory
4. Minifies and tree-shakes code
5. Generates source maps

### Preview Production Build
```bash
npm run preview
```

Serves the production build locally for testing before deployment.

### Docker Deployment

Build and run with Docker:
```bash
docker build -t docuchat .
docker run -p 5173:5173 docuchat
```

The Dockerfile:
- Uses Node.js 22 Alpine (lightweight)
- Installs dependencies
- Exposes port 5173
- Runs development server with host flag for Docker networking

### Static Hosting Deployment

The `dist` folder can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

## Configuration

### Path Aliases
The project uses `@` as an alias for the `src` directory:
```typescript
import { Button } from '@/components/Button'
```

### Tailwind CSS
Configured with:
- Custom color palette
- Animation utilities
- Responsive breakpoints
- Dark mode support

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Known Limitations

- File upload limited to 4MB (backend constraint)
- PDF format only (DOCX, TXT support planned)
- Polling-based updates every 10 seconds (WebSocket planned)
- Session storage only (no persistent login across browser sessions)
- Single document query at a time (no batch processing)

## Troubleshooting

### Common Issues

**Port 5173 already in use**
```bash
# Kill the process using the port
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

**Module not found errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build fails with TypeScript errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

**CORS errors**
- Ensure backend API has proper CORS configuration
- Check `VITE_API_URL` in `.env` file
- Verify `withCredentials: true` in apiClient

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow ESLint rules
- Use functional components with hooks
- Prefer named exports over default exports
- Use const assertions for constants

### Component Structure
```typescript
// 1. Imports
import { useState } from 'react'

// 2. Types/Interfaces
interface Props {
  title: string
}

// 3. Component
export const Component = ({ title }: Props) => {
  // 4. Hooks
  const [state, setState] = useState()
  
  // 5. Handlers
  const handleClick = () => {}
  
  // 6. Render
  return <div>{title}</div>
}
```

### State Management
- Use Recoil atoms for global state
- Use local state for component-specific data
- Use custom hooks for reusable logic
- Avoid prop drilling with Recoil selectors

## Roadmap

### Version 1.1 (Q2 2026)
- WebSocket integration for real-time updates
- Support for DOCX and TXT formats
- Advanced search and filtering
- Document sharing functionality
- Export chat conversations to PDF

### Version 1.2 (Q3 2026)
- Collaborative document annotation
- Voice input for queries
- Multi-language support (i18n)
- Dark/light theme toggle
- Keyboard shortcuts

### Version 2.0 (Q4 2026)
- Mobile application (React Native)
- Offline mode with service workers
- Document version history
- Team workspaces
- Advanced analytics dashboard

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

**Harsh Kushwaha**
- GitHub: [@harshkushwaha7x](https://github.com/harshkushwaha7x)
- Email: harshkushwaha4151@gmail.com

## Acknowledgments

- Backend infrastructure deployed on AWS EC2
- AI processing powered by advanced language models
- UI design inspired by modern design systems
- Icons provided by Lucide React
- Animation library by Motion (Framer Motion alternative)

## Support

For issues, questions, or feature requests:
- Open an issue on [GitHub](https://github.com/harshkushwaha7x/intelligent-doc-assistant/issues)
- Email: harshkushwaha4151@gmail.com
