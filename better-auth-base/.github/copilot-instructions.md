# Copilot Instructions for Better Auth Base

## Project purpose
This repository is a small full-stack starter app with:
- an Astro frontend in the client folder
- an Express backend in the server folder
- MongoDB-backed note storage
- a planned integration point for Better Auth authentication

When making changes, preserve the separation between frontend, backend, and data layers.

## Architecture guidance
- Keep client-side UI changes in the client folder.
- Keep server-side API and middleware changes in the server folder.
- Keep database connection logic in server/database.js.
- Avoid mixing frontend-specific code into the backend unless it is required for the API contract.

## Working style
- Prefer small, focused changes over large rewrites.
- Keep existing patterns consistent with the current codebase.
- Preserve the current simple notes flow unless the task explicitly asks for broader auth changes.
- When adding authentication, integrate it at the API boundary first and then update the frontend to use it.

## Backend expectations
- The Express server entry point is server/index.js.
- Existing routes for notes are currently simple CRUD endpoints.
- If authentication is added, protect relevant routes and ensure requests are validated before touching the database.
- Keep error handling consistent with the existing style: log the error and return a clear JSON error response.

## Frontend expectations
- The Astro client uses Svelte components in the client/src/components folder.
- The notes experience lives in client/src/components/Notes.svelte and is rendered from client/src/pages/notes.astro.
- If auth UI is added, keep it modular and place reusable UI in components rather than embedding everything directly in page files.
- Use environment-based configuration for backend URLs where relevant.

## Database expectations
- Database initialization happens in server/database.js.
- Do not create ad hoc database logic in page components or UI files.
- If new data needs to be stored, keep it scoped to the server layer and use the existing database helper where possible.

## Change checklist
Before finishing a task:
1. Verify the change works in the relevant frontend or backend context.
2. Keep the code readable and aligned with the existing structure.
3. Avoid introducing unnecessary dependencies.
4. If authentication logic is added, ensure it is wired through the API layer and the UI layer consistently.

## Notes for future work
The current app is intentionally simple. Authentication should be introduced as an incremental addition rather than a full rewrite.
