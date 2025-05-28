import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" border-gray-200 border-b-2 m-2 p-2 text-left font-serif flex justify-between"
        >
          <div className="font-semibold justify-between w-9/12">
            <div>{item.card.info.name}</div>
            <div>
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>

            <p className="text-xs text-gray-600 font-normal py-2">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="py-2 px-4 mx-8 my-24 cursor-pointer text-green-600 font-bold bg-white shadow-lg m-auto rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>{" "}
            </div>
            <img
              className="rounded-2xl w-full"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
