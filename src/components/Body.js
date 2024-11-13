import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
import { useEffect, useState } from "react";

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

  const [restaurantList, setrestaurantList] = useState(resObj);

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
  };

  let restaurantList2 = [
    {
      info: {
        id: "588619",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
        locality: "Brigade Road",
        areaName: "Central Bangalore",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 3.4,
        avgRatingString: "3.4",
        totalRatingsString: "1.9K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
        },
      },
    },
    {
      info: {
        id: "588620",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
        locality: "Brigade Road",
        areaName: "Central Bangalore",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.4,
        avgRatingString: "4.4",
        totalRatingsString: "1.9K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
        },
      },
    },
    {
      info: {
        id: "588621",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
        locality: "Brigade Road",
        areaName: "Central Bangalore",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 2.4,
        avgRatingString: "2.4",
        totalRatingsString: "1.9K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
        },
      },
    },
    {
      info: {
        id: "588622",
        name: "McD",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
        locality: "Brigade Road",
        areaName: "Central Bangalore",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.4,
        avgRatingString: "4.4",
        totalRatingsString: "1.9K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = restaurantList.filter((e) => e.info.avgRating > 4.5);
            setrestaurantList(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {restaurantList.map((e) => (
          <RestaurantCard key={e.info.id} resData={e} />
        ))}
      </div>
    </div>
  );
};

export default Body;
