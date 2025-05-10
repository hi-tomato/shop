import React from 'react';
import { BiBookmark, BiHome, BiUser } from 'react-icons/bi';
import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-center px-4 py-2">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center w-1/5 `}
        >
          <BiHome className="text-2xl" />
          <span className="text-xs mt-1">홈</span>
        </Link>

        <Link
          to="/community"
          className={`flex flex-col items-center justify-center w-1/5`}
        >
          <HiOutlineMenu className="text-2xl" />
          <span className="text-xs mt-1">커뮤니티</span>
        </Link>

        <Link
          to="/explore"
          className={`flex flex-col items-center justify-center w-1/5`}
        >
          <BiBookmark className="text-2xl" />
          <span className="text-xs mt-1">탐색</span>
        </Link>

        <Link
          to="/mypage"
          className={`flex flex-col items-center justify-center w-1/5`}
        >
          <BiUser className="text-2xl" />
          <span className="text-xs mt-1">마이페이지</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
