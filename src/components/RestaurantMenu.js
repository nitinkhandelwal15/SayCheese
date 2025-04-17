import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  //  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId); //65797, 393840
  //   const json = await data.json();

  //   console.log(json);
  //   setResInfo(json.data);
  // };

  // console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, avgRating, cuisines, costForTwoMessage, id } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card === undefined
      ? resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card
      : resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card;

  // Check if itemCards is undefined or null, and fallback to an empty array
  const safeItemCards = itemCards || [];

  // console.log(safeItemCards);

  //  console.log(resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <div className="w-6/12 mx-auto my-4 p-4 flex justify-between font-bold bg-green-50 rounded-lg text-lg">
        <span className="underline font-extrabold font-serif">
          {cuisines.join(", ")}
        </span>
        <span>🌾{avgRating}</span>
        <span>{costForTwoMessage}</span>
      </div>
      {/* <p className="font-bold">
        {cuisines.join(", ")} - {avgRating}
      </p> */}

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
