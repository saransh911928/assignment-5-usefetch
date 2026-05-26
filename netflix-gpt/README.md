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

🎨 Fullstack Netflix Clone with AI Movie Recommendations (MERN Stack 2025)
This is a fully functional, fullstack Netflix Clone built with the MERN stack — featuring AI-powered movie recommendations powered by Gemini AI, complete authentication, and a clean, responsive UI using real data from the TMDB API.

✅ This project is complete — from frontend to backend to AI integration and deployment. It’s built to teach and showcase real-world skills.

📺 Watch the Full YouTube Tutorial Series https://youtu.be/Y5YVfD1dVkk?si=YeXh48ULSnwy69HN

📆 Live Demo: https://aiflix-1.onrender.com/

🚀 Features
✅ Netflix-style UI with responsive layout
🎨 Real movie data from TMDB API
🧠 Mood-based AI recommendations using Gemini AI
🔐 Full authentication (JWT, bcrypt)
⚒️ REST API built with Express.js & MongoDB
⚛️ Clean React component architecture
↻ State management with Zustand
🌐 Axios-powered frontend/backend integration
🚀 Fully deployed on Render
🧰 Tech Stack
Frontend
React.js
Tailwind CSS
Axios
Zustand
Vite
TMDB API
Backend
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
Bcrypt.js
Postman (API testing)
AI Integration
Gemini AI (for movie mood-based recommendations)
Deployment
Frontend + Backend deployed on Render
📦 Getting Started
Clone the Repository
git clone https://github.com/ezeigboemmanuel/AIFlix.git
cd AIFlix
Install Frontend Dependencies
cd frontend
npm install
npm run dev
Install Backend Dependencies
cd ../backend
npm install
node server.js
Configure Environment Variables
Create .env files for both frontend and backend as needed. Include:

MongoDB URI
JWT Secret
Gemini AI API Key
👀 How the AI Works
The recommendation system uses Gemini AI to analyze user input based on mood, genre preference, and recent watch history. It responds with personalized movie suggestions that feel more human than just trending/popular filters.

📙 What You’ll Learn
Building fullstack apps with MERN
Debugging real-world issues (CORS, Mongo errors)
Zustand for clean state logic
Secure Auth with JWT & Bcrypt
Building scalable APIs
Using Gemini AI for real features
Deploying to the real web with Render
Best practices, clean code, and error handling
🙌 Support This Project
If you found this helpful, please:

⭐️ Star this repo
🛠️ Fork it
📣 Share with others
🧠 Subscribe on YouTube for more in-depth dev tutorials
