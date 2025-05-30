import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  //  console.log("header called");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  //subscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between  bg-yellow-50 md:bg-orange-100 shadow-lg m-2 rounded-lg sm:bg-green-50">
      <div className="logo-container cursor-pointer">
        <Link to="/">
          <img className="w-30 rounded-ee-4xl rounded-tr-4xl" src={LOGO_URL} />
        </Link>
      </div>

      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Connection : {onlineStatus === true ? "✅" : "🚫"}
          </li>

          <li className="px-2 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 cursor-pointer">
            <a href="/about">About Us</a>
          </li>
          <li className="px-2 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 mr-1 cursor-pointer text-xl font-medium flex">
            {/* <img
              className="w-10"
              src="https://cdn-icons-png.flaticon.com/512/6187/6187760.png"
            /> */}
            <Link to="/cart">
              🛒-(
              {cartItems.length})
            </Link>
          </li>
          <button
            className="px-2 bg-emerald-500 rounded-md font-medium cursor-pointer"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-2 cursor-pointer font-bold"> {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
