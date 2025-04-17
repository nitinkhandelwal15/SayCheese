import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
export const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  //  console.log("header called");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

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
          <li className="px-2 cursor-pointer">
            <img
              className="w-10"
              src="https://cdn-icons-png.flaticon.com/512/6187/6187760.png"
            />
          </li>
          <button
            className="px-2 my-0 cursor-pointer"
            onClick={() => {
              btnNameReact === "login"
                ? setbtnNameReact("logout")
                : setbtnNameReact("login");
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
