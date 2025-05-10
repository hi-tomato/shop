import React from 'react';

interface CategoryItemProps {
  icon: React.ReactNode;
  label: string;
  backgroundColor: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryItem = ({
  icon,
  label,
  backgroundColor,
  isActive = false,
  onClick,
}: CategoryItemProps) => {
  return (
    <div
      className={`flex flex-col items-center space-y-1 w-1/5 p-2 ${isActive ? 'opacity-100' : 'opacity-80'}`}
      onClick={onClick}
    >
      <div
        className={`${backgroundColor} p-4 rounded-lg relative flex items-center justify-center w-12 h-12`}
      >
        {icon}
      </div>
      <span className="text-xs font-bold text-center">{label}</span>
    </div>
  );
};

export default CategoryItem;
