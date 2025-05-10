import type { Products } from '@/types/Products';
import { create } from 'zustand';

interface SearchState {
  searchQuery: string;
  searchResults: Products[];
  isSearching: boolean;

  setSearchQuery: (query: string) => void;
  performSearch: (query: string, allProducts: Products[]) => Products[];
  clearSearch: () => void;
}

const useSearchStore = create<SearchState>((set) => ({
  searchQuery: '',
  searchResults: [],
  isSearching: false,

  setSearchQuery: (query) => set({ searchQuery: query }),

  performSearch: (query, allProducts) => {
    set({ isSearching: true });
    const results = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
    );

    set({ searchResults: results, isSearching: false });
    return results;
  },

  clearSearch: () => set({ searchQuery: '', searchResults: [] }),
}));

export default useSearchStore;
