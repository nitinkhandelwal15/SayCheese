import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className=" rounded-md m-4 p-4 w-[250px] h-[481.57px] bg-gray-100 hover:bg-gray-200 ">
      <div>
        <img
          alt="res-logo"
          className="res-logo rounded-md"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
      </div>

      <h2 className="font-bold py-2 text-xl">{resData.info.name}</h2>
      <h3>{resData.info.avgRating} stars</h3>
      <h3>{resData.info.sla.slaString}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

// higher order component for isopen label

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
