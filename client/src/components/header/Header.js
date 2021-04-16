import "./header.scss";
import Logo from "../../assets/images/logo.png";
import Login from "../../assets/images/login_cta.svg";
import Cart from "../../assets/images/cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="header__actions">
        <Link to="/cart">
          <img src={Cart} alt="cart" />
        </Link>
        <Link to="/login">
          <img src={Login} alt="login" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
