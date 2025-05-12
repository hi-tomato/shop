import useDebounce from '@/hooks/useDebounce';
import React, { useEffect, useState, type FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const HeaderSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 300);
  const navigate = useNavigate();

  useEffect(() => {
    // 🚀 나중에 여기서 미리보기 및 필터링을 기능하는 함수를 만들어줄거임 - 05.10
    console.log('Header Search Input:', debouncedQuery);
  }, [searchQuery]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim().length === 0) {
      return;
    }
    console.log('입력한 키워드로 경로가 이동된다.');
    navigate(`/search?query=${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <div className="flex-1 mx-3">
      <form className="relative" onSubmit={handleSubmit}>
        <input
          className="w-full py-2 px-4 bg-gray-100 rounded-full text-sm"
          placeholder="내게 맞는 제품 찾기"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </form>
    </div>
  );
};

export default HeaderSearchForm;
