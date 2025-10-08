# AttendEase - Attendance Management System

## Overview
AttendEase is a modern attendance management system built with React, TypeScript, and Tailwind CSS. It provides an intuitive interface for tracking student attendance, managing leave requests, and generating analytics.

## Features
- User authentication (Student and Faculty)
- Dashboard with attendance overview
- Interactive attendance calendar
- Leave request management
- Analytics and reporting
- Light/Dark mode support

## Getting Started

### Prerequisites
- Node.js version 16.x or 20.x (recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/attendease.git
cd attendease
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Build for production
```bash
npm run build
```

## Deployment to Netlify

### Automatic Deployment
1. Connect your GitHub repository to Netlify
2. Set the build command to `npm run build`
3. Set the publish directory to `build`

### Troubleshooting Netlify Deployment

If you encounter build errors on Netlify:

1. Ensure Node.js version is set to 20 in `netlify.toml`:
```toml
[build.environment]
  NODE_VERSION = "20"
```

2. Clean and reinstall dependencies locally:
```bash
# On Windows
.\clean-install.ps1

# On macOS/Linux
chmod +x ./clean-install.sh
./clean-install.sh
```

3. Check for compatibility issues between dependencies

4. Refer to the [Netlify Troubleshooting Guide](./NETLIFY_TROUBLESHOOTING.md) for detailed solutions

### Verification Scripts

This project includes verification scripts to ensure all required files exist:

- `npm run prebuild` - Runs before build to verify source files
- `npm run postbuild` - Runs after build to verify build output
- `node verify-build.js` - Manual verification of required files

## Technology Stack
- React 18
- TypeScript
- Tailwind CSS 3
- React Router 6
- Chart.js for analytics
- Framer Motion for animations

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
