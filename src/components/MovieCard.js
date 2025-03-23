import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <img src={movie.Poster} alt={movie.Title} className="w-full rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{movie.Title}</h2>
      <p className="text-gray-400">📅 {movie.Year}</p>
    </div>
  );
};

export default MovieCard;
