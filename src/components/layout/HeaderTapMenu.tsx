import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTapMenu = () => {
  return (
    <div>
      <ul className="flex px-4">
        <li className="mr-6 py-3 relative group">
          <Link to="/" className="block px-1 text-[#1A56F1] font-medium">
            홈
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1A56F1]"></span>
        </li>
        <li className="mr-6 py-3 relative group">
          <Link to="/lg-products" className="block px-1 text-gray-500">
            LG전자
          </Link>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1A56F1] transition-all duration-200 group-hover:w-full"></span>
        </li>
        <li className="mr-6 py-3 relative group">
          <Link to="/apple-products" className="block px-1 text-gray-500">
            Apple
          </Link>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1A56F1] transition-all duration-200 group-hover:w-full"></span>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTapMenu;
