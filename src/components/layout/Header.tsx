import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearchForm from './HeaderSearchForm';
import HeaderTapMenu from './HeaderTapMenu';
import Banner from './Banner';

const Header = () => {
  return (
    <header className="flex flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="font-bold text-xl text-black">
          <Link to="/" className="flex items-center">
            가전나라<span className="text-sm ml-0.5 text-[#1A56F1]">⚡</span>
          </Link>
        </h1>

        <HeaderSearchForm />
      </div>

      <HeaderTapMenu />
      <Banner />
    </header>
  );
};

export default Header;
