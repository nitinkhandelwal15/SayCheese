import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>
            <img
              className="cart-logo"
              src="https://cdn-icons-png.flaticon.com/512/6187/6187760.png"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
