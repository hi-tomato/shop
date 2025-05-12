import useDebounce from '@/hooks/useDebounce';
import React, { useEffect, useState, useRef, type FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchSearchSuggestions } from '@/hooks/useFetchSearch';

// CONSTANT VALUE - 일시적으로 처리함. 5월12일
const POPULAR_KEYWORDS = [
  'IPHONE16',
  'SAMSUNG',
  'LG',
  'QLED TV',
  '일체형 세탁기',
  '시스템 에어컨',
  '창문형 에어컨',
];

const HeaderSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debouncedQuery = useDebounce(searchQuery, 300);
  const navigate = useNavigate();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const { data: suggestedKeywords, isLoading } = useQuery({
    queryKey: ['searchSuggestions', debouncedQuery],
    queryFn: () => fetchSearchSuggestions(debouncedQuery),
    enabled: debouncedQuery.length >= 2,
    staleTime: 30 * 1000,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim().length === 0) {
      return;
    }

    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    navigate(`/search?query=${encodeURIComponent(suggestion)}`);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      setShowSuggestions(true);
    }
  }, [debouncedQuery]);

  return (
    <div className="flex-1 mx-3 relative" ref={searchContainerRef}>
      <form className="relative" onSubmit={handleSubmit}>
        <input
          className="w-full py-2 px-4 bg-gray-100 rounded-full text-sm"
          placeholder="내게 맞는 제품 찾기"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => debouncedQuery.length >= 2 && setShowSuggestions(true)}
        />
        <button type="submit">
          <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </button>
      </form>

      {showSuggestions && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border overflow-hidden">
          <div className="max-h-[70vh] overflow-y-auto p-2">
            {isLoading && debouncedQuery.length >= 2 && (
              <div className="px-3 py-2 text-sm text-gray-500 text-center">
                검색어 로딩 중...
              </div>
            )}

            {suggestedKeywords && suggestedKeywords.length > 0 ? (
              <div>
                <div className="mt-1">
                  {suggestedKeywords.map((suggestion, idx) => (
                    <div
                      key={`suggest-${idx}`}
                      className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer rounded"
                      onClick={() => handleSelectSuggestion(suggestion)}
                    >
                      <FiSearch
                        className="mr-2 text-gray-400 flex-shrink-0"
                        size={14}
                      />
                      <span className="text-sm">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // 검색어는 있지만 결과가 없는 경우
              debouncedQuery.length >= 2 &&
              !isLoading && (
                <div className="px-3 py-2 text-sm text-gray-500 text-center">
                  추천 검색어가 없습니다.
                </div>
              )
            )}

            {/* 검색어가 없을 때 인기 검색어 표시 */}
            {!debouncedQuery && (
              <div>
                <h4 className="text-xs font-medium text-gray-500 px-3 py-1">
                  인기 검색어
                </h4>
                <div className="mt-1 px-3 py-2 flex flex-wrap gap-2">
                  {POPULAR_KEYWORDS.map((keyword, idx) => (
                    <button
                      key={`popular-${idx}`}
                      className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={() => handleSelectSuggestion(keyword)}
                    >
                      {keyword}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSearchForm;
