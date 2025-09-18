# Kawada Care Game

川田を可愛がるゲーム＋スケジュール管理アプリ - An interactive game where you can chat with Kawada, increase affinity, give gifts, take quizzes, and receive study reminders.

## Features

- 🗨️ **Chat System**: Unlimited conversations with Kawada using predefined conversation patterns
- ❤️ **Affinity System**: Build your relationship with Kawada (0-100 scale with special events)
- 🎁 **Gift System**: Give presents to Kawada (flowers, coffee, cake, books)
- 🧠 **Quiz System**: Take 4-choice quizzes to earn affinity points
- ⏰ **Reminder System**: Daily study reminders via push notifications
- 👤 **User Authentication**: Secure login with AWS Cognito
- 📊 **Admin Dashboard**: User management and analytics

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: AWS Lambda, API Gateway, DynamoDB
- **Authentication**: Amazon Cognito
- **Notifications**: Amazon EventBridge Scheduler + Pinpoint
- **Hosting**: AWS Amplify

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- AWS Account (for deployment)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.local.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # React components
│   ├── chat/           # Chat-related components
│   ├── gift/           # Gift system components
│   ├── quiz/           # Quiz components
│   ├── reminder/       # Reminder components
│   ├── admin/          # Admin dashboard components
│   └── ui/             # Shared UI components
├── services/           # API and business logic
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── data/               # Static data (conversations, gifts)
```

## Development Workflow

This project follows a spec-driven development approach:

1. **Requirements** - Defined in `.kiro/specs/kawada-care-game/requirements.md`
2. **Design** - Architecture in `.kiro/specs/kawada-care-game/design.md`
3. **Tasks** - Implementation plan in `.kiro/specs/kawada-care-game/tasks.md`

## Deployment

The app is configured for deployment on AWS Amplify. See `amplify.yml` for build configuration.

## Contributing

1. Check the task list in `.kiro/specs/kawada-care-game/tasks.md`
2. Pick a task and implement it
3. Test your changes
4. Submit a pull request

## License

Private project - All rights reserved.
