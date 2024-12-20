import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  console.log("header called");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <img
              className="cart-logo"
              src="https://cdn-icons-png.flaticon.com/512/6187/6187760.png"
            />
          </li>
          <button
            className="login"
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
