import React from 'react';
import { SearchIcon, X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск..."
        className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;