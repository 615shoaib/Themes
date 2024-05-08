import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import HeartIcon from "../../Pages/Homepage/CatgoeyBased/HeartIcon";
import Heartclick from "./Heartclick";
import Logo from "../../Images/logo.png"

const Demo = () => {
  const CartItems = useSelector((state) => state.Cart.items) || [];
  const HeartItems = useSelector((state) => state.wishlist.wishlistItems) || [];

  const CartItemsCount = CartItems.reduce(
    (total, item) => total + parseInt(item.quantity),
    0
  );
  const HeartItemsCount = HeartItems.length;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light w-100 d-flex justify-content-between">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* <img
              src="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/logo.png"
              style={{ width: "200px" }}
            /> */}
            <img src={Logo} alt="/" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-3 mx-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeclassname="active">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/shop"
                  className="nav-link"
                  activeclassname="active"
                >
                  SHOP
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about-us"
                  className="nav-link"
                  activeclassname="active"
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact-us"
                  className="nav-link"
                  activeclassname="active"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="nav-product-widgets">
              <Link to={"/add-to-cart"} className="cart-widget">
                <i className="fa-solid fa-magnifying-glass fs-5 "></i>
                <p>Search</p>
              </Link>
              <Link
                to={"/add-wishlist"}
                className="cart-widget wishlist-widget"
              >
                <div className="cart-status ">{/* {HeartItemsCount} */}</div>
                <i className="fa-regular fa-heart"></i>
                <p>WhishList</p>
              </Link>
              <Link to={"/add-to-cart"} className="cart-widget">
                <div className="cart-status">{CartItemsCount}</div>
                <i className="fa-solid fa-bag-shopping fs-4 text-dark"></i>
                <p>My Bag</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Demo;
