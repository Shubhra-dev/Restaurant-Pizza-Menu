import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order by ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-64 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-40 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
