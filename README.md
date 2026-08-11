# 🎬 CineMind AI

> **AI-powered movie discovery and personal cinema workspace.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-7C3AED?style=for-the-badge&logo=github)](https://azamov-otabek.github.io/cinemind-ai/)
[![Status](https://img.shields.io/badge/status-active%20development-F59E0B?style=for-the-badge)](https://github.com/Azamov-Otabek/cinemind-ai)

CineMind AI is a modern movie and TV discovery application built with **React + TypeScript**. It combines a cinematic dashboard UI, reusable media components, client-side filtering, persistent saved lists, curated collections, and an AI-assisted movie finder.

The project is being developed as a production-style portfolio application with a focus on clean architecture, reusable components, state management, API integration, and real-world frontend practices.

## 🌐 Live Demo

**https://azamov-otabek.github.io/cinemind-ai/**

> The project is still in active development. The GitHub Pages demo currently hosts the frontend. The AI backend is being developed separately and is not yet deployed publicly.

---

## ✅ Current Progress

- ✅ Main application layout with sidebar and header
- ✅ Nested page routing
- ✅ Home hero and reusable movie sections
- ✅ Reusable `MediaCard` component
- ✅ Movie details page
- ✅ Movies page with search, genre, year, and sorting controls
- ✅ TV Shows page with search and filters
- ✅ My List with Zustand state management
- ✅ Persistent My List using Zustand `persist` / localStorage
- ✅ Collections page with cinematic collection cards
- ✅ Collection details page
- ✅ AI Movie Finder interface
- ✅ Mood, genre, and year AI preferences
- ✅ Express API server for AI requests
- ✅ Yandex Cloud AI Studio integration
- ✅ Structured AI recommendation response support
- ✅ Automated GitHub Pages deployment
- 🚧 TMDB integration for real movie data and poster lookup
- 🚧 AI recommendation cards with real posters
- ⏳ Authentication and cloud user data
- ⏳ Responsive/mobile polish

---

## ✨ Features

### 🎬 Movie & TV Discovery

- Trending and popular content sections
- Movie and TV cards
- Search by title
- Genre filtering
- Year filtering
- Highest-rated / newest sorting
- Dedicated movie details UI

### ❤️ My List

Users can save and remove movies or TV shows directly from media cards.

The list is currently stored in the browser using **Zustand persist**, so saved items remain after refresh or browser restart on the same device.

### 📚 Collections

CineMind includes curated collection cards with dedicated collection detail pages and reusable media grids.

### 🤖 AI Movie Finder

Users can describe what they want to watch in natural language, for example:

> *“I want a psychological movie with a big plot twist.”*

The AI Finder can also use extra preferences such as:

- mood
- genre
- release period

The current AI flow uses a small Express server and **Yandex Cloud AI Studio** through an OpenAI-compatible API client. The server asks the model for structured movie recommendations containing title, year, genre, rating, and a short reason.

The next AI step is matching those recommendations with **TMDB** so CineMind can display real movie IDs and poster URLs inside `MediaCard` components.

---

## 🏗 Architecture

```text
React / TypeScript frontend
        │
        ├── React Router
        ├── Zustand + persist
        ├── SCSS design system
        └── Reusable UI components
                │
                ▼
        Express API server
                │
                ▼
       Yandex Cloud AI Studio

Upcoming:
AI recommendation → TMDB search → real movie data/poster → MediaCard
```

---

## 🛠 Tech Stack

### Frontend

- **React 19**
- **TypeScript**
- **Vite**
- **React Router**
- **Zustand**
- **Axios**
- **SCSS / Sass**
- **Lucide React**
- **Inter Variable Font**

### Backend / AI

- **Node.js**
- **Express**
- **Yandex Cloud AI Studio**
- **OpenAI JavaScript SDK** as the OpenAI-compatible API client
- **dotenv**
- **CORS**

### Tooling & Deployment

- **ESLint**
- **Git / GitHub**
- **GitHub Actions**
- **GitHub Pages**

### Planned Integrations

- **TMDB API** — real movies, TV shows, IDs, posters, metadata
- **Firebase Authentication** — user accounts
- **Firebase Firestore** — cloud-based lists and CRUD features

---

## 🗺 Roadmap

### Phase 1 — UI & Core Components

- [x] Main layout
- [x] Sidebar
- [x] Header
- [x] Home hero
- [x] Reusable media cards
- [x] Reusable movie sections
- [x] Movie details page
- [x] Movies page
- [x] TV Shows page
- [x] Collections UI

### Phase 2 — Local User Features

- [x] Bookmark interaction
- [x] My List
- [x] Zustand store
- [x] Persistent browser storage
- [x] Collection detail routing

### Phase 3 — AI Movie Finder

- [x] AI Finder interface
- [x] Natural-language movie requests
- [x] Mood / genre / year preferences
- [x] Secure server-side AI key usage
- [x] Yandex AI integration
- [x] Structured recommendation parsing
- [ ] TMDB poster lookup for AI recommendations
- [ ] Render AI results as `MediaCard` components
- [ ] Deploy AI backend

### Phase 4 — Real Movie Data

- [ ] TMDB API setup
- [ ] Trending movies from API
- [ ] Popular movies from API
- [ ] TV data from API
- [ ] Real search
- [ ] Real genres
- [ ] Dynamic movie details
- [ ] Cast and recommendations

### Phase 5 — Accounts & Cloud Data

- [ ] Firebase Authentication
- [ ] Firestore My List
- [ ] User profile
- [ ] Create/edit/delete custom collections
- [ ] Sync data across devices

### Phase 6 — Production Polish

- [ ] Responsive mobile/tablet layout
- [ ] Loading and skeleton states
- [ ] Error handling
- [ ] Accessibility improvements
- [ ] Lazy loading / code splitting
- [ ] Performance optimization
- [ ] Final screenshots
- [ ] Final documentation

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/Azamov-Otabek/cinemind-ai.git
cd cinemind-ai
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

### Run the AI server locally

Create a `.env` file in the project root:

```env
YANDEX_API_KEY=your_secret_api_key
YANDEX_FOLDER_ID=your_folder_id
```

> Never commit secret API keys. Environment files are ignored by Git in this project.

Start the API server:

```bash
npm run server
```

The current local development setup uses:

```text
Frontend: http://localhost:5173
AI API:   http://localhost:3001
```

Create a production frontend build:

```bash
npm run build
```

---

## 📁 Main Project Structure

```text
cinemind-ai/
├── server/
│   └── index.ts
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MediaCard/
│   │   └── MovieSection/
│   ├── layouts/
│   ├── pages/
│   │   ├── AiFinder/
│   │   ├── CollectionDetails/
│   │   ├── Collections/
│   │   ├── Home/
│   │   ├── MovieDetails/
│   │   ├── Movies/
│   │   ├── MyList/
│   │   └── TvShows/
│   ├── router/
│   ├── store/
│   └── styles/
└── package.json
```

---

## 🔐 Security

AI credentials are kept server-side through environment variables and are not exposed inside the React application.

`.env` files are excluded from Git, and secret keys should never be committed to the repository.

---

## 📸 Screenshots

Screenshots will be added after the current UI and responsive pass is completed.

---

## 🎯 Project Goals

CineMind AI is designed to demonstrate practical application development skills including:

- reusable React component architecture
- TypeScript in a real project
- nested client-side routing
- state management and persistence
- filtering and sorting logic
- API/server communication
- secure environment variable handling
- AI feature integration
- structured AI responses
- future third-party API integration
- automated deployment
- production-oriented project organization

---

## 👨‍💻 Author

**Otabek Azamov**  
Frontend Developer

GitHub: [@Azamov-Otabek](https://github.com/Azamov-Otabek)

---

<p align="center">
  <strong>CineMind AI</strong> — discover your next movie smarter.
</p>
