import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with real data later
  const mockResults = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" }
  ];

  const filteredResults = mockResults.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center gap-2 w-full border-b border-gray-200 pb-5">
      <div className="relative w-[80%]">
        <div className="flex items-center">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
            />
          </div>
        </div>

        {isOpen && searchTerm && (
          <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {filteredResults.map(result => (
              <button
                key={result.id}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  setSearchTerm(result.name);
                  setIsOpen(false);
                }}
              >
                {result.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
