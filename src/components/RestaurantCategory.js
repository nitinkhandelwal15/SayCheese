import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    setShowIndex(index);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between font-bold cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "△" : "▽"}</span>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showItems ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ItemList items={data.itemCards} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
