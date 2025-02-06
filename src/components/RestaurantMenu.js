import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

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

  console.log(safeItemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <p>
        {cuisines.join(", ")} - {avgRating}
      </p>
      <h2>{avgRating}</h2>

      <ul>
        {safeItemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.defaultPrice / 100 ||
              item.card.info.finalPrice / 100 ||
              item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
