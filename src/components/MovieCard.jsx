import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow-md">
      <img src={movie.Poster} alt={movie.Title} className="rounded w-full h-64 object-cover" />
      <h3 className="text-xl font-bold mt-2">{movie.Title}</h3>
      <p>{movie.Year} | IMDb: {movie.imdbRating}</p>
      <Link to={`/movie/${movie.imdbID}`} className="text-blue-400 hover:underline">View Details</Link>
    </div>
  );
}

export default MovieCard;
