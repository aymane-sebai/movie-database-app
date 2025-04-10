import { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const apiKey = '5215185e';
    const res = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
    setMovies(res.data.Search || []);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar query={query} setQuery={setQuery} onSearch={searchMovies} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
