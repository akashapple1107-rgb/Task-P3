# Task P4 - DEV@Deakin

This project extends the P3 home page with the P4 navigation bar, login and registration pages. The P3 article data, cards, newsletter and footer are reused. Search and Post are placeholders for a later task.

## Run

1. Run `npm install`.
2. Copy `.env.example` to `.env` if you do not already have one.
3. Put your Firebase service account JSON file in `secrets/` and set `FIREBASE_SERVICE_ACCOUNT_PATH` in `.env` to its filename. Enable Firestore in that Firebase project. Never commit the key or `.env`.
4. Run `npm run dev` and open the local address printed by Vite.

`npm run build` builds the website. After building, `npm start` serves it at http://127.0.0.1:3001.

## Files

- `src/components/`: shared navigation/footer and the original P3 cards/newsletter.
- `src/data/data.js`: original P3 article and tutorial arrays.
- `src/pages/`: Home, Login and Signup.
- `server.js`: connects to Firestore, validates registration, hashes passwords, checks login details and starts the server.
- `firestore.rules`: denies direct browser access to stored password hashes. The server uses Firebase Admin credentials.

A successful sign-up redirects to Login; a successful login redirects to Home. This task does not add sessions, protected content, logout, search or posting.

The existing local Firebase settings are retained. Install dependencies locally, but do not commit `node_modules`, `.env`, service account keys, or generated build files.
