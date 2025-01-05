import { Link } from "react-router-dom";
import { WEBNAME } from "../../constant/AppConstant";
import "./NavigationBar.css";
import {
  HOMEPAGEURL,
  CONTACTUS,
  ABOUTUS,
  PROPERTIES,
} from "../../constant/AppConstant";
import { useWishlist } from "../../Context/WishlistContext";

export const NavigationBar = () => {

  const { wishlistCount } = useWishlist();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar pt-3">
      <div className="container flex align-items-center">
        <h2 className="text-dark">{WEBNAME}</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item mx-1">
              <p className="footer-contact">contact@company.com</p>
            </li>
            <li className="nav-item mx-1">
              <p className="footer-contact"> +1 (123) 456-7890</p>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto flex align-items-center ">
            <li className="nav-item">
              <Link className="nav-link text-dark" to={`../${HOMEPAGEURL}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to={`../${PROPERTIES}`}>
                Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to={`../${ABOUTUS}`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to={`../${CONTACTUS}`}>
                Contact
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to={`../${PROPERTIES}`} className="nav-link position-relative">
                <i className="bi-heart-fill text-danger fs-4"></i>
                {wishlistCount >= 0 && (
                  <span className="badge position-absolute top-0 start-100 translate-middle bg-danger text-white rounded-circle">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
