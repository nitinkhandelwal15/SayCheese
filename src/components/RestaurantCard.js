import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  return (
    <div className=" rounded-md m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 ">
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
    </div>
  );
};

export default RestaurantCard;
