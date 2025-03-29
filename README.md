# Next.js Monorepo with Mantine UI

This is a monorepo project built with [Turborepo](https://turbo.build/repo) featuring multiple Next.js applications that share a common UI package built with Mantine UI.

## Project Structure

```
.
├── apps/
│   ├── client/         # Client-facing application
│   └── admin/          # Admin dashboard application
└── packages/
    ├── ui/             # Shared UI components with Mantine
    ├── eslint-config/  # Shared ESLint configuration
    └── typescript-config/ # Shared TypeScript configuration
```

## Tech Stack

- **Monorepo Management**: [Turborepo](https://turbo.build/repo)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [Mantine UI](https://mantine.dev/)
- **Styling**: Mantine core styles + Tailwind CSS
- **Language**: TypeScript

## Features

- 🏎️ **Shared UI Components**: Common UI components shared across applications
- 🔄 **Consistent Design System**: Unified design system with Mantine UI
- ⚡ **Optimized Development**: Fast refresh and build times with Turborepo
- 📱 **Responsive Design**: Mobile-first responsive layouts
- 🛠️ **Type Safety**: Full TypeScript support

## Getting Started

### Prerequisites

- Node.js 18 or later
- pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kimhwanhoon/nextjs-monorepo-with-mantine.git
cd nextjs-monorepo-with-mantine
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
# Run all applications
pnpm dev

# Run specific applications
pnpm dev:client  # Run only client app
pnpm dev:admin   # Run only admin app
```

4. Open your browser:
   - Client app: [http://localhost:3000](http://localhost:3000)
   - Admin app: [http://localhost:3001](http://localhost:3001)

## Development

### Build

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

## UI Package

The shared UI package is located in `packages/ui`. It includes common components built with Mantine UI that can be used across all applications.

### Usage

```tsx
import { Button } from '@repo/ui';

export default function MyComponent() {
  return (
    <Button color="blue" size="lg">
      Click me
    </Button>
  );
}
```

## Project Structure Details

### Apps

- **Client**: The main user-facing application
- **Admin**: Administration dashboard

### Packages

- **UI**: Shared UI components using Mantine
- **eslint-config**: Shared ESLint configuration
- **typescript-config**: Shared TypeScript configuration

## License

MIT
