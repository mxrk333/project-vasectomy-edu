import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/AppContext';

interface SearchResult {
  sectionId: string;
  sectionName: string;
  textSnippet: string;
}

export default function GlobalSearch() {
  const { t: allT, language } = useAppContext();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const newResults: SearchResult[] = [];

    // Helper to add a result if it matches
    const searchInText = (text: string, sectionId: string, sectionName: string) => {
      if (typeof text === 'string' && text.toLowerCase().includes(lowerQuery)) {
        // Find context snippet around the match
        const index = text.toLowerCase().indexOf(lowerQuery);
        const start = Math.max(0, index - 30);
        const end = Math.min(text.length, index + lowerQuery.length + 30);
        const snippet = (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');
        
        // Prevent exact duplicates in the result list for the same snippet
        if (!newResults.some(r => r.textSnippet === snippet)) {
          newResults.push({ sectionId, sectionName, textSnippet: snippet });
        }
      }
    };

    const searchInObject = (obj: any, sectionId: string, sectionName: string) => {
      if (!obj) return;
      if (typeof obj === 'string') {
        searchInText(obj, sectionId, sectionName);
      } else if (Array.isArray(obj)) {
        obj.forEach(item => searchInObject(item, sectionId, sectionName));
      } else if (typeof obj === 'object') {
        Object.values(obj).forEach(val => searchInObject(val, sectionId, sectionName));
      }
    };

    // Define searchable sections
    const searchableSections = [
      { id: 'home', name: allT.navbar.links[0].name, data: allT.hero },
      { id: 'whatis', name: allT.navbar.links[1].name, data: allT.whatis },
      { id: 'myths', name: allT.navbar.links[2].name, data: allT.myths },
      { id: 'benefits', name: allT.navbar.links[3].name, data: allT.benefits },
      { id: 'faq', name: allT.navbar.links[4].name, data: allT.askMidwife },
      { id: 'research', name: allT.navbar.links[5].name, data: allT.research },
      { id: 'contact', name: allT.navbar.links[6].name, data: allT.contact }
    ];

    searchableSections.forEach(section => {
      searchInObject(section.data, section.id, section.name);
    });

    setResults(newResults.slice(0, 8)); // Limit to top 8 results
  }, [query, allT]);

  const handleResultClick = (sectionId: string) => {
    setIsOpen(false);
    setQuery('');
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={wrapperRef} className="relative z-50 flex items-center">
      <div className={`flex items-center bg-slate-100 dark:bg-slate-800 rounded-full transition-all duration-300 ${isOpen ? 'w-48 sm:w-64 px-3 py-1.5' : 'w-9 h-9 sm:w-48 sm:px-3 sm:py-1.5 justify-center'}`}>
        <span className="material-symbols-outlined text-slate-400 text-[20px] sm:mr-2 cursor-pointer" onClick={() => setIsOpen(true)}>
          search
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={language === 'TL' ? 'Hanapin...' : 'Search...'}
          className={`bg-transparent outline-none text-sm text-slate-700 dark:text-slate-300 w-full ${isOpen ? 'block' : 'hidden sm:block'}`}
        />
        {query && isOpen && (
          <button onClick={() => setQuery('')} className="flex items-center justify-center ml-1">
            <span className="material-symbols-outlined text-slate-400 text-[16px] hover:text-slate-600">close</span>
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && query.trim() !== '' && (
        <div className="absolute top-full right-0 sm:left-0 mt-2 w-72 sm:w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              <p className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50 dark:bg-slate-800/50">
                {language === 'TL' ? 'Mga Resulta' : 'Results'}
              </p>
              {results.map((res, i) => (
                <button
                  key={i}
                  onClick={() => handleResultClick(res.sectionId)}
                  className="w-full text-left px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-100 dark:border-slate-800/50 last:border-0"
                >
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">{res.sectionName}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {/* Highlight the matching query */}
                    {res.textSnippet.split(new RegExp(`(${query})`, 'gi')).map((part, index) => 
                      part.toLowerCase() === query.toLowerCase() ? (
                        <span key={index} className="bg-yellow-200 dark:bg-yellow-900/50 text-slate-900 dark:text-white font-medium">{part}</span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-4xl mb-2">search_off</span>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {language === 'TL' ? 'Walang nahanap para sa' : 'No results found for'} "{query}"
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
