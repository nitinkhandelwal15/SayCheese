import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId); //65797, 393840
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, avgRating, cuisines, costForTwoMessage, id } =
    resInfo?.cards[2]?.card?.card?.info || {};
  // Using {} as a fallback value makes sure your code handles the case where the object you're trying to destructure might be undefined or null. It helps to prevent runtime errors and makes your code more robust when dealing with data that might be incomplete or missing.

  //   const { name, avgRating, cuisines, costForTwoMessage, id } =
  //     resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <p>
        {cuisines.join(", ")} - {avgRating}
      </p>
      <h2>{avgRating}</h2>

      {/* <h1>{resInfo.cards[2].card.card.info.name}</h1>
      <h2>{resInfo.cards[2].card.card.info.avgRating}</h2>
      <h3>{resInfo.cards[2].card.card.info.cuisines.join(", ")}</h3> */}

      <ul>
        {itemCards.map((item) => (
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
