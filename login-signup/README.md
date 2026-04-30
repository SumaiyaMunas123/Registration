# Login / Signup UI

A simple React-based login and signup interface with a polished card layout, icon inputs, and stateful switching between login and signup modes.

## Features

- Toggle between Login and Signup states
- Username, email, and password fields with icons
- Clean card-style layout with responsive CSS
- Prepared for static deployment on Vercel

## Tech Stack

- React 19
- Create React App
- Plain CSS

## Project Structure

```text
src/
	App.js
	Components/
		LoginSignup/
			LoginSignup.jsx
			LoginSignup.css
		Assets/
```

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the [build](build) folder.

## Deployment on Vercel

This app is intended to be deployed from the [login-signup](.) folder.

Recommended Vercel settings:

- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `build`

If you are deploying as a single-page app, keep a fallback route to [index.html](build/index.html) so direct page loads do not return 404.

## Notes

- The form is currently presentational and does not submit data to a backend.
- The Login and Signup buttons only switch UI state at the moment.
- The project is ready for future integration with authentication APIs.

