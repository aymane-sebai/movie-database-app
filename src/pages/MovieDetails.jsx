import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const apiKey = '5215185e';
      const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
      setMovie(res.data);
    };
    fetchDetails();
  }, [id]);

  if (!movie) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-4">
        <img src={movie.Poster} alt={movie.Title} className="w-64 rounded shadow" />
        <div>
          <h2 className="text-3xl font-bold">{movie.Title}</h2>
          <p className="text-gray-300">{movie.Year} | {movie.Genre}</p>
          <p className="mt-2">{movie.Plot}</p>
          <p className="mt-2 font-semibold">Director: {movie.Director}</p>
          <p className="mt-1">Cast: {movie.Actors}</p>
          <p className="mt-1">IMDb Rating: ⭐ {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
