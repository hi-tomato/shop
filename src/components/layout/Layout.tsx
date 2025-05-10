import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import CategoryTabs from '../category/CategoryTap';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <CategoryTabs />
      <main className="flex-grow pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
