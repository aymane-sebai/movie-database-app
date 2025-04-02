import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    if (!query) return;
    const apiKey = "YOUR_OMDB_API_KEY";  // Replace with your actual OMDB API key
    const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
    setMovies(response.data.Search || []);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="p-2 border rounded w-full max-w-md text-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
          onClick={searchMovies}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="bg-gray-800 p-4 rounded shadow-lg">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{movie.Title}</h3>
            <p className="text-sm text-gray-400">{movie.Year}</p>
            <Link
              to={`/movie/${movie.imdbID}`}
              className="text-blue-400 mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

