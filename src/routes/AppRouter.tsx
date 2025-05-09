import React from 'react';
import Layout from '@/components/layout/Layout';
import Cart from '@/pages/Cart';
import Home from '@/pages/Home';
import ProductsDetail from '@/pages/ProductsDetail';
import ProductsList from '@/pages/ProductsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
