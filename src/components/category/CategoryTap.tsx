import React from 'react';
import CategoryItem from './categoryItem';
import { GiWashingMachine } from 'react-icons/gi';
import { BsSnow } from 'react-icons/bs';
import { MdAcUnit } from 'react-icons/md';
import { FaTrophy, FaTv } from 'react-icons/fa';
import { BiFridge } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const CategoryTabs = () => {
  return (
    <div className="p-4 flex">
      <CategoryItem
        icon={
          <Link to="/" className="relative">
            <FaTrophy size={18} className="text-yellow-500" />
          </Link>
        }
        label="베스트"
        backgroundColor="bg-red-50"
      />

      <CategoryItem
        icon={
          <Link to="/">
            <FaTv size={24} className="text-gray-700" />
          </Link>
        }
        label="TV"
        backgroundColor="bg-blue-100"
      />

      <CategoryItem
        icon={
          <Link to="/">
            <BiFridge size={32} className="text-gray-700" />
          </Link>
        }
        label="냉장고"
        backgroundColor="bg-green-100"
      />

      <CategoryItem
        icon={
          <Link to="/">
            <GiWashingMachine size={32} className="text-gray-700" />
          </Link>
        }
        label="세탁기"
        backgroundColor="bg-purple-100"
      />

      <CategoryItem
        icon={
          <Link to="/" className="relative">
            <MdAcUnit size={32} className="text-blue-500" />
            <BsSnow
              size={16}
              className="text-blue-300 absolute -bottom-1 -right-1"
            />
          </Link>
        }
        label="에어컨"
        backgroundColor="bg-blue-50"
      />
    </div>
  );
};

export default CategoryTabs;
