# University Client

A React-based web application for university management system with authentication and role-based access.

## Features

- **Authentication**: Secure login system with JWT tokens
- **Dashboard**: Overview with statistics and key metrics
- **Student Management**: View and manage student information
- **Lecturer Management**: Handle lecturer profiles and data
- **Course Management**: Browse courses with detailed course pages
- **Payment Tracking**: Monitor and manage payment records
- **Responsive Design**: Built with Material-UI components

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API server running on `https://localhost:8243/university/v1.0.0`

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd university-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm start` - Run the app in development mode
- `npm build` - Build the app for production
- `npm test` - Run the test suite

## Project Structure

```
src/
├── Pages/           # Main application pages
├── components/      # Reusable UI components
├── localStorage.tsx # Local storage utilities
├── privateRoute.tsx # Protected route component
└── server.ts        # API server configuration
```

## Authentication

The application uses JWT-based authentication. Users must log in to access protected routes including dashboard, students, lecturers, courses, and payments sections.

## Technology Stack

- **Frontend**: React 19, TypeScript
- **UI Framework**: Material-UI (MUI)
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Styling**: CSS with Material-UI components
