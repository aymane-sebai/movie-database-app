import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form className="flex justify-center gap-3 p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="px-4 py-2 text-black rounded-md"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="px-4 py-2 bg-blue-500 rounded-md">Search</button>
    </form>
  );
};

export default SearchBar;
