import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  console.log("header called");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between  bg-yellow-50 md:bg-orange-100 shadow-lg m-2 rounded-lg sm:bg-green-50">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>

      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Connection : {onlineStatus === true ? "✅" : "🚫"}
          </li>

          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <a href="/about">About Us</a>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">
            <img
              className="w-18"
              src="https://cdn-icons-png.flaticon.com/512/6187/6187760.png"
            />
          </li>
          <button
            className="px-2"
            onClick={() => {
              btnNameReact === "login"
                ? setbtnNameReact("logout")
                : setbtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
