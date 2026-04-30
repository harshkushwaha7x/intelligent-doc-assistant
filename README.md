# Intelligent Document Assistant

> AI-powered document summarization and interactive PDF chat application

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646cff.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Overview

Intelligent Document Assistant is a modern web application that enables users to upload PDF documents, extract key insights using AI, and have interactive conversations with their documents. Built with React, TypeScript, and a scalable backend architecture deployed on AWS EC2.

### Key Features

- PDF Upload & Management - Upload, organize, and manage your PDF documents
- AI-Powered Summarization - Automatically extract key insights from documents
- Interactive Chat - Ask questions and get instant answers from your PDFs
- Favorites System - Mark important documents for quick access
- Secure Authentication - JWT-based authentication with session management
- Responsive Design - Seamless experience across desktop and mobile devices
- Real-time Updates - Live document status and chat responses
- Modern UI/UX - Beautiful animations and intuitive interface

## Quick Start

### Prerequisites

- Node.js 18+ and npm
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
   
   Edit `.env` and set your API URL:
   ```env
   VITE_API_URL=https://your-backend-api.com/api/v1
   VITE_APP_NAME=Intelligent Document Assistant
   ```

4. Start development server
   ```bash
   npm run dev
   ```

5. Open your browser
   ```
   http://localhost:5173
   ```

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
intelligent-doc-assistant/
├── src/
│   ├── assets/          # Images, icons, and static files
│   ├── components/      # Reusable React components
│   │   └── icons/       # SVG icon components
│   ├── constants/       # Application constants and enums
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Route-level page components
│   ├── services/        # API service layer
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Helper utilities
│   ├── atoms.ts         # Recoil state atoms
│   ├── config.ts        # App configuration
│   └── main.tsx         # Application entry point
├── public/              # Public static assets
├── .env.example         # Environment variables template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build configuration
```

## Tech Stack

### Frontend
- React 18.3 - UI library
- TypeScript 5.6 - Type safety
- Vite 6.0 - Build tool and dev server
- Recoil - State management
- React Router 7 - Client-side routing
- Tailwind CSS 4 - Utility-first styling
- Framer Motion - Animations
- Axios - HTTP client

### UI Components
- Radix UI - Accessible component primitives
- Lucide React - Icon library
- Sonner - Toast notifications
- React Loading Indicators - Loading states

### Development Tools
- ESLint - Code linting
- TypeScript ESLint - TypeScript-specific linting
- Vite Plugin React - Fast refresh and JSX support

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Key Features Explained

### Authentication
- Secure JWT-based authentication
- Session storage for enhanced security
- Automatic token refresh and logout on expiration
- CSRF token protection

### Document Management
- Upload PDFs up to 4MB
- Real-time document processing status
- Organize documents with favorites
- Delete and archive functionality

### AI Chat Interface
- Context-aware responses
- Chat history persistence
- Real-time typing indicators
- Smooth animations and transitions

### Performance Optimizations
- React.memo for component memoization
- Request cancellation to prevent race conditions
- Optimized re-renders with Recoil
- Loading skeletons for better UX

## Security Features

- CSRF token protection
- Secure session storage
- Input validation and sanitization
- XSS prevention
- Automatic session expiration
- HTTP-only cookie support

## UI/UX Highlights

- Responsive Design - Mobile-first approach
- Dark Theme - Easy on the eyes
- Smooth Animations - Framer Motion powered
- Loading States - Skeleton screens and indicators
- Error Handling - User-friendly error messages
- Accessibility - ARIA labels and semantic HTML

## API Integration

The application communicates with a RESTful backend API. Key endpoints:

- `POST /user/signin` - User authentication
- `POST /user/signup` - User registration
- `GET /documents` - Fetch user documents
- `POST /upload` - Upload new document
- `POST /documents/:id/query` - Query document with AI
- `GET /history/:id` - Fetch chat history
- `GET /favourite` - Fetch favorite documents

## Known Issues & Limitations

- File upload limited to 4MB (configurable)
- Polling-based updates (WebSocket implementation planned)
- PDF format only (other formats planned)

## Roadmap

- WebSocket integration for real-time updates
- Support for more document formats (DOCX, TXT)
- Advanced search and filtering
- Document sharing and collaboration
- Export chat conversations
- Mobile app (React Native)
- Offline mode with service workers
- Multi-language support

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code refactoring
- `perf:` - Performance improvement
- `chore:` - Maintenance tasks
- `docs:` - Documentation updates

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- Harsh Kushwaha - [@harshkushwaha7x](https://github.com/harshkushwaha7x)

## Acknowledgments

- Backend deployed on AWS EC2
- AI processing powered by advanced language models
- UI inspiration from modern design systems

## Support

For support, email your-email@example.com or open an issue in the GitHub repository.

---

Built with React and TypeScript
