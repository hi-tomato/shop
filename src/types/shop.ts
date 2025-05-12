// API 응답 타입
export interface NaverShopItem {
  title: string; // 상품명
  link: string; // 상품 URL
  image: string; // 이미지 URL
  lprice: string; // 최저가
  hprice: string; // 최고가
  mallName: string; // 쇼핑몰 이름
  productId: string; // 상품 ID
  productType: string; // 상품 타입
  brand: string; // 브랜드
  maker: string; // 제조사
  category1: string; // 카테고리1
  category2: string; // 카테고리2
  category3: string; // 카테고리3
  category4: string; // 카테고리4
}

export interface NaverShopResponse {
  lastBuildDate: string; // 검색 결과 생성 시간
  total: number; // 총 검색 결과 개수
  start: number; // 검색 시작 위치
  display: number; // 한 번에 표시할 검색 결과 개수
  items: NaverShopItem[]; // 상품 목록
}

// 검색 파라미터 타입
export interface ShopSearchParams {
  query: string; // 검색어 (필수)
  display?: number; // 표시 개수 (최대 100)
  start?: number; // 시작 위치 (최대 1000)
  sort?: 'sim' | 'date' | 'asc' | 'dsc'; // 정렬 방식
}
