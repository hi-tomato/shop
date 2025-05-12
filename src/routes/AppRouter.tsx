import React from 'react';
import Layout from '@/components/layout/Layout';
import Cart from '@/pages/Cart';
import Home from '@/pages/Home';
import ProductsDetail from '@/pages/ProductsDetail';
import ProductsList from '@/pages/ProductsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import SearchPage from '@/components/SearchPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const AppRouter = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductsDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default AppRouter;
