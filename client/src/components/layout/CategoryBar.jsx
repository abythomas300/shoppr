import React from "react";
import {
  Tv,
  Shirt,
  Home,
  ShoppingBasket,
  Sparkles,
} from "lucide-react"; 

const categories = [
  { id: 1, name: "Electronics", icon: <Tv className="w-6 h-6" /> },
  { id: 2, name: "Fashion", icon: <Shirt className="w-6 h-6" /> },
  { id: 3, name: "Accessories", icon: <Home className="w-6 h-6" /> },
  { id: 4, name: "Grocery", icon: <ShoppingBasket className="w-6 h-6" /> },
  { id: 5, name: "Skincare", icon: <Sparkles className="w-6 h-6" /> },
];

const CategoryBar = ({ onCategorySelect }) => {
  return (
    <div className="w-full bg-base-300 shadow-sm">
      <div className="flex md:justify-center gap-4 overflow-x-auto px-4 py-2 sm:gap-6 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect?.(category.name)}
            className="btn flex flex-col items-center justify-center bg-base-100 text-base-content hover:bg-primary hover:text-primary-content rounded-xl p-2 w-24 h-24 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 "
          >
            <span>{category.icon}</span>
            <span className="mt-1 text-sm font-medium text-center">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
