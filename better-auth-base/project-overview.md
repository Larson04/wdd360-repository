# Better Auth Project Overview

## Purpose
This project is a small full-stack starter app that combines:
- an Astro-based frontend in the client folder
- an Express-based backend in the server folder
- MongoDB for storing note data
- a place to add Better Auth for authentication and session management

The app currently focuses on a simple notes workflow, but it is structured in a way that makes it easy to add login, signup, protected routes, and user-specific data.

## Top-level structure

### Root folder
- README.md: setup instructions for running the app locally.
- client/: frontend application.
- server/: backend API and database connection layer.

### Client app
The client folder is an Astro project with Svelte integration.

Key pieces:
- astro.config.mjs: Astro configuration, including the Svelte integration.
- package.json: frontend dependencies and scripts.
- src/pages/: Astro route files.
  - index.astro: the home page.
  - notes.astro: the page that renders the notes experience.
- src/components/: UI components.
  - Notes.svelte: the main interactive component for loading and creating notes.
- src/layouts/: shared page layout structure.

### Server app
The server folder contains the API layer and database connection logic.

Key pieces:
- index.js: Express server entry point.
- database.js: MongoDB client setup, connection handling, and shared database access.
- package.json: backend dependencies and scripts.

## How the pieces fit together

1. The client is served by Astro on the frontend.
2. The notes page loads a Svelte component that runs in the browser.
3. That component uses fetch requests to call the backend API.
4. The Express server receives those requests and talks to MongoDB.
5. The database layer returns or saves note data so the UI can display it.

## Current data flow for notes
The current app works like this:
- When the Notes page loads, the Svelte component sends a GET request to /api/notes.
- The server reads notes from MongoDB and returns them as JSON.
- When the user submits a note, the component sends a POST request to /api/notes.
- The server validates the input and inserts a new note into the database.
- The UI updates immediately with the newly created note.

## Where authentication would fit
The app is currently open and does not yet enforce login or user ownership. Better Auth would typically be added in these places:

- server/index.js
  - initialize Better Auth
  - expose auth endpoints such as sign-in and sign-up
  - protect API routes like /api/notes

- server/database.js
  - ensure user/session/auth-related data is stored in the same MongoDB setup if needed

- client/src/components/
  - add login, signup, logout, and session-aware UI components

- client/src/pages/
  - create or protect pages that should only be visible to authenticated users

## Important integration points
A few spots are especially important if you want to integrate Better Auth cleanly:
- CORS configuration in the server should allow authenticated frontend requests.
- API routes should be updated so notes are tied to the logged-in user rather than being globally accessible.
- The client should store or read auth session state so it can decide what to show and which requests to send.

## Recommended mental model
Think of the app as three layers:
- frontend layer: Astro + Svelte UI
- API layer: Express routes and middleware
- data layer: MongoDB persistence

Better Auth should sit between the frontend and API layers as the authentication and session layer, so the app can securely identify users before allowing access to protected data.
