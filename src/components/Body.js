import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //   const [restaurantList, setrestaurantList] = useState([
  //     {
  //       info: {
  //         id: "588619",
  //         name: "KFC",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
  //         locality: "Brigade Road",
  //         areaName: "Central Bangalore",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 3.4,
  //         avgRatingString: "3.4",
  //         totalRatingsString: "1.9K+",
  //         sla: {
  //           deliveryTime: 22,
  //           lastMileTravel: 2.3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "588620",
  //         name: "Dominos",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
  //         locality: "Brigade Road",
  //         areaName: "Central Bangalore",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 4.4,
  //         avgRatingString: "4.4",
  //         totalRatingsString: "1.9K+",
  //         sla: {
  //           deliveryTime: 22,
  //           lastMileTravel: 2.3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "588621",
  //         name: "Burger King",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
  //         locality: "Brigade Road",
  //         areaName: "Central Bangalore",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 2.4,
  //         avgRatingString: "2.4",
  //         totalRatingsString: "1.9K+",
  //         sla: {
  //           deliveryTime: 22,
  //           lastMileTravel: 2.3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "588622",
  //         name: "McD",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
  //         locality: "Brigade Road",
  //         areaName: "Central Bangalore",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 4.4,
  //         avgRatingString: "4.4",
  //         totalRatingsString: "1.9K+",
  //         sla: {
  //           deliveryTime: 22,
  //           lastMileTravel: 2.3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //         },
  //       },
  //     },
  //   ]);

  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setrestaurantList(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>OOPS!! Offline, check the internet connection!</h1>;

  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  //   //return <h1>Loading...</h1>;
  // }
  //DEMO DATA
  // let restaurantList2 = [
  //   {
  //     info: {
  //       id: "588619",
  //       name: "KFC",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
  //       locality: "Brigade Road",
  //       areaName: "Central Bangalore",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //       avgRating: 3.4,
  //       avgRatingString: "3.4",
  //       totalRatingsString: "1.9K+",
  //       sla: {
  //         deliveryTime: 22,
  //         lastMileTravel: 2.3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "20-25 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "588620",
  //       name: "Dominos",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
  //       locality: "Brigade Road",
  //       areaName: "Central Bangalore",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //       avgRating: 4.4,
  //       avgRatingString: "4.4",
  //       totalRatingsString: "1.9K+",
  //       sla: {
  //         deliveryTime: 22,
  //         lastMileTravel: 2.3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "20-25 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "588621",
  //       name: "Burger King",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
  //       locality: "Brigade Road",
  //       areaName: "Central Bangalore",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //       avgRating: 2.4,
  //       avgRatingString: "2.4",
  //       totalRatingsString: "1.9K+",
  //       sla: {
  //         deliveryTime: 22,
  //         lastMileTravel: 2.3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "20-25 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "588622",
  //       name: "McD",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
  //       locality: "Brigade Road",
  //       areaName: "Central Bangalore",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //       avgRating: 4.4,
  //       avgRatingString: "4.4",
  //       totalRatingsString: "1.9K+",
  //       sla: {
  //         deliveryTime: 22,
  //         lastMileTravel: 2.3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "20-25 mins",
  //       },
  //     },
  //   },
  // ];

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex my-2">
        <div className="search mx-4">
          <input
            type="text"
            className="border border-solid border-black p-2 ml-2 mr-1 rounded-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-orange-300 px-4 py-1  rounded-2xl"
            onClick={() => {
              const filteredRestaurant = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(searchText);

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn border border-solid border-orange-600 py-2 px-4 mx-2 text-orange-400 rounded-lg bg-orange-50"
          onClick={() => {
            filteredList = restaurantList.filter((e) => e.info.avgRating > 4.5);
            setrestaurantList(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((e) => (
          <Link key={e.info.id} to={"/restaurants/" + e.info.id}>
            <RestaurantCard resData={e} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
