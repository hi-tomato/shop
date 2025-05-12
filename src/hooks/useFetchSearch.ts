import axios from 'axios';

// interface SearchSuggestion {
//   text: string;
//   type: 'recent' | 'suggestion' | 'popular';
// }

export const fetchSearchSuggestions = async (
  keyword: string
): Promise<string[]> => {
  if (!keyword || keyword.length < 2) return [];

  try {
    const url = '/api/ac';
    const response = await axios.get(url, {
      params: {
        q: keyword,
        q_enc: 'UTF-8',
        st: '100',
        r_format: 'json',
        r_enc: 'UTF-8',
      },
      headers: {
        'X-Naver-Client-Id': import.meta.env.VITE_NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': import.meta.env.VITE_NAVER_CLIENT_SECRET,
      },
    });
    return response.data.items || [];
  } catch (error) {
    console.error('검색어 추천 가져오기 실패:', error);
    return [];
  }
};
