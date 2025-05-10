import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  return <div>SearchPage: {query} 🔍</div>;
};

export default SearchPage;
