import "./footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="quick-links">
          <p className="quick-links_heading">Quick Links</p>
          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-bottom_copyright">
          <p>All Rights Reserved &#169; ClothX 2021</p>
        </div>
        <div className="footer-bottom_contact">
          <p>
            CONTACT US:{" "}
            <FontAwesomeIcon icon={["fab", "facebook-f"]} className="icon" />
            <FontAwesomeIcon icon={["fab", "instagram"]} className="icon" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
