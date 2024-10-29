import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f2f5" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h2>{resData.info.name}</h2>
      <h3>{resData.info.avgRating} stars</h3>
      <h3>{resData.info.sla.slaString}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
