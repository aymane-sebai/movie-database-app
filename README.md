# ASM Movie Dashboard 🎬

A modern movie search application built with React, Tailwind CSS, and the OMDB API.

## 🚀 Features
- ✅ Movie search by title
- ✅ Movie cards with poster, title, year, IMDb rating
- ✅ Movie details page with cast, genre, and plot
- ✅ Responsive UI using Tailwind CSS
- ✅ Reusable components (SearchBar, MovieCard, MovieDetails)
- ✅ Deployment on Vercel
- ✅ Error handling for empty searches or network issues
- ⏳ Future: Favorites List, Pagination, Theme Toggle

## 🛠 Tech Stack
- React
- Tailwind CSS
- Axios
- OMDB API
- React Router DOM

## 🧪 Getting Started
```bash
git clone https://github.com/aymane-sebai/movie-database-app.git
cd movie-database-app
npm install
npm run dev
```

## 🌐 Live Demo
[Visit Live Site](https://yourdeploymenturl.vercel.app)

## 🔑 API Setup
- Visit [OMDB API](https://www.omdbapi.com/apikey.aspx) to get your free API key.
- Replace `5215185e` in the code with your actual key.

## 📸 UI Preview
![Screenshot - Home Page](https://raw.githubusercontent.com/aymane-sebai/movie-database-app/main/Screenshot%20Home.png)

## ♿ Accessibility & Best Practices
- All images include `alt` attributes.
- Responsive design adapts across all devices.
- Semantic HTML tags for improved accessibility.
- Color contrast ensures readability.
- Supports keyboard navigation.

## 🧠 Meta & SEO
Add to your `index.html`:
```html
<meta name="description" content="Search movies and explore details with ASM Movie Dashboard." />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## ⚙️ Performance Enhancements
- Lazy-loaded movie posters: `<img loading="lazy">`
- Component memoization with `React.memo`

