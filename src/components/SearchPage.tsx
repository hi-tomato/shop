import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSearchData = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    try {
      const url = '/api/v1/search/shop.json';
      const options = {
        headers: {
          'X-Naver-Client-Id': 'qZ6qnMEKv9qD2tTAwm3y',
          'X-Naver-Client-Secret': 'PMZmsnx0ag',
        },
        params: {
          query,
        },
      };
      const res = await axios.get(url, options);
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.error('Search error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearchData();
  }, [query]);

  return (
    <div>
      <h2>SearchPage: {query} 🔍</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.items && (
        <ul>
          {data.items?.map((item, index) => <li key={index}>{item.title}</li>)}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
