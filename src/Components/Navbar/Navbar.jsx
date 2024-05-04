
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";



function Navbar() {
// const {cart} = useProductContext();

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#"><img src="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/logo.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav gap-3 mx-auto">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeclassname="active"
                    >
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
                    <form className="search-form" role="search">
                        <div className="search-group">
                            <input className="form-control" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <div className="search-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </form>
                    <div className="nav-product-widgets">
                        <a href='#' className='wishlist-widget'>
                            <i className="dripicons-heart"></i>
                            <p>Wishlist</p>
                        </a>
                        <Link to={"/cart"} className='cart-widget'>
                            <div className='cart-status'>
                                {/* {cart.length} */}
                            </div>
                            <i className="dripicons-shopping-bag"></i>
                            <p>My Bag</p>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar;