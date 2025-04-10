import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const apiKey = "5215185e";  // Replace with your OMDB API key
      const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
      setMovie(response.data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p className="text-center text-gray-400">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center">
        <img src={movie.Poster} alt={movie.Title} className="w-64 h-auto rounded shadow-md" />
        <div className="ml-4">
          <h2 className="text-3xl font-bold">{movie.Title}</h2>
          <p className="text-gray-400">{movie.Year} • {movie.Genre}</p>
          <p className="mt-2">{movie.Plot}</p>
          <p className="mt-2"><strong>Director:</strong> {movie.Director}</p>
          <p className="mt-2"><strong>Cast:</strong> {movie.Actors}</p>
          <p className="mt-2"><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

