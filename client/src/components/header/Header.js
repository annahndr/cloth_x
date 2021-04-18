import "./header.scss";
import Logo from "../../assets/images/logo.png";
import Login from "../../assets/images/login_cta.svg";
import Cart from "../../assets/images/cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const isLoggedIn = localStorage.getItem('loggedIn');
console.log(isLoggedIn);
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="header__actions">
        {isLoggedIn === "true" && (
          <Link to="/create-post" className="btn btn-light">
            Create Post
          </Link>
        )}
        <Link to="/cart">
          <img src={Cart} alt="cart" />
        </Link>
         {isLoggedIn === null && (
        <Link to="/login">
          <img src={Login} alt="login" />
        </Link>
         )}
      </div>
    </header>
  );
};

export default Header;
