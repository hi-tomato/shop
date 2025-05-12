import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularKeywords = () => {
  const POPULAR_KEYWORDS = [
    'iPhone',
    '노트북',
    '에어팟',
    '키보드',
    '모니터',
    '마우스',
    '헤드폰',
  ];

  const navigate = useNavigate();
  const handleKeywordClick = (keyword: string) => {
    navigate(`/search/?query=${keyword}`);
  };

  return (
    <div>
      <p>인기 검색어</p>
      <div>
        {POPULAR_KEYWORDS.map((keyword, index) => (
          <button key={index} onClick={() => handleKeywordClick(keyword)}>
            {keyword}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularKeywords;
