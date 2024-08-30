
import {LOGO_URL} from "../utils/constants";
const Header = () => {
    return (
      <div className="header">
        <img
          className="logo"
          src={LOGO_URL} />
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li className="cart">
              Cart
             
            </li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;