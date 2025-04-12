function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="flex flex-col items-center mt-6">
      <input
        type="text"
        placeholder="Search for movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md p-2 rounded text-black"
      />
      <button
        onClick={onSearch}
        className="mt-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
