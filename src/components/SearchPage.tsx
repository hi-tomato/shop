import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { NaverShopResponse } from '@/types/shop';

const fetchNaverShopItems = async (
  query: string
): Promise<NaverShopResponse> => {
  if (!query)
    return { lastBuildDate: '', total: 0, start: 0, display: 0, items: [] };

  const url = '/api/v1/search/shop.json';
  const options = {
    headers: {
      'X-Naver-Client-Id': 'qZ6qnMEKv9qD2tTAwm3y',
      'X-Naver-Client-Secret': 'PMZmsnx0ag',
    },
    params: { query },
  };

  const response = await axios.get(url, options);
  return response.data;
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const { data, isLoading, error } = useQuery<NaverShopResponse, Error>({
    queryKey: ['naverShop', query],
    queryFn: () => fetchNaverShopItems(query),
    enabled: !!query,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  console.log(data);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">SearchPage: {query} 🔍</h2>

      {isLoading && <p>검색 중...</p>}
      {error && <p className="text-red-500">오류 발생: {error.message}</p>}

      {data?.items && data.items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items.map((item, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <h3
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p>가격: {Number(item.lprice).toLocaleString()}원</p>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-2 h-32 object-contain"
                />
              )}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-500 hover:underline"
              >
                상품 보기 →
              </a>
            </div>
          ))}
        </div>
      ) : (
        query && data?.items && <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default SearchPage;
