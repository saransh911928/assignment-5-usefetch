# Netflix GPT

Netflix GPT is a full-stack movie discovery app inspired by Netflix. It combines TMDB-powered browsing with AI-assisted movie recommendations and basic user authentication.

## Features

- Browse movies by category: now playing, top rated, popular, and upcoming
- View movie details, trailer links, and related recommendations
- Sign up, sign in, fetch current user, and log out with JWT cookie auth
- Generate personalized movie suggestions with Gemini based on mood and preferences

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Zustand, React Router
- Backend: Node.js, Express, MongoDB, Mongoose
- APIs: TMDB, Google Gemini

## Project Structure

```text
Netflix GPT/
|- frontend/
|- backend/
```

## Environment Variables

Frontend `frontend/.env.local`

```env
VITE_GOOGLE_GENAI_API_KEY=your_key_here
```

Backend `backend/.env`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
PORT=5000
NODE_ENV=development
```

## Run Locally

```bash
cd backend
npm install
node server.js
```

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` and backend runs on `http://localhost:5000`.

## API Endpoints

- `POST /api/signup`
- `POST /api/login`
- `GET /api/fetch-user`
- `POST /api/logout`

## Notes

- This project currently uses TMDB requests directly from the frontend.
- Keep API keys and secrets in local env files only.
