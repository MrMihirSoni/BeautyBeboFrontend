import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/BrandLogo.jpg";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { PriceContext } from "../../contexts/PriceContext";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const { userName, auth, setAuth, setUserName } = useContext(AuthContext);
  const { cartPrice, setCartPrice, count, setCount } = useContext(PriceContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    navigate("/");
    const response = await axios.get(
      "https://beautybebobackend-production.up.railway.app/user/logout",
      { withCredentials: true }
    );
    if (response.data.msg == "User has been logged out!") {
      setAuth(false);
      setUserName("");
      localStorage.removeItem("userName");
      setCartPrice(0);
    }
    setHover(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, []);
  return (
    <>
      <div className="navbarWrapper">
        <div className="navbar">
          <div className="logoWrapper">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="searchWrapper">
            <div className="searchbox">
              <select name="" id="">
                {" "}
                <option value="">All Category</option>
              </select>
              <span>|</span>
              <input placeholder="Enter Your Search..." type="text" />
            </div>
            <button>
              <i className="bx bx-search"></i>
            </button>
          </div>
          <div className="accountWrapper">
            <div className="account">
              <div className="wishlistWrapper">
                <div className="wishlist">
                  <button onClick={() => navigate("/wishlist")}>
                    <i className="bx bxs-heart"></i>
                  </button>
                </div>
              </div>
              <div className="myAccountWrapper">
                <div className="myAccount">
                  <div className="acDetailsWrapper">
                    <div className="acDetails">
                      <button
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                      >
                        <i className="bx bxs-user-account"></i>
                      </button>
                      <span style={{ cursor: "default" }}>
                        {userName == "" ? "My Account" : userName}
                      </span>
                      {hover && (
                        <div
                          onMouseEnter={() => setHover(true)}
                          onMouseLeave={() => setHover(false)}
                          className="accountMenu"
                        >
                          {auth ? (
                            <p onClick={handleLogout}>Logout</p>
                          ) : (
                            <>
                              <p
                                onClick={() => {
                                  setHover(false);
                                  navigate("/login");
                                }}
                              >
                                Login
                              </p>
                              <p
                                onClick={() => {
                                  setHover(false);
                                  navigate("/signup");
                                }}
                              >
                                Signup
                              </p>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="searchboxForMobile">
          <div>
            <input placeholder="Enter Your Search..." type="text" />
          </div>
          <button>
            <i className="bx bx-search"></i>
          </button>
        </div>
      </div>
      <div className="lowerNavbarWrapper">
        <div className="lowerNavbar">
          <div
            onClick={() => navigate("/makeup")}
            className="lowerNavbarNavigation"
          >
            <p>MAKEUP</p>
            <i className="bx bx-chevron-down"></i>
          </div>
          <div
            onClick={() => navigate("/skin")}
            className="lowerNavbarNavigation"
          >
            <p>SKIN</p>
            <i className="bx bx-chevron-down"></i>
          </div>
          <div
            onClick={() => navigate("/hair")}
            className="lowerNavbarNavigation"
          >
            <p>HAIR</p>
            <i className="bx bx-chevron-down"></i>
          </div>
          <div
            onClick={() => navigate("/personal-care")}
            className="lowerNavbarNavigation"
          >
            <p>PERSONAL CARE</p>
            <i className="bx bx-chevron-down"></i>
          </div>
          <div
            onClick={() => navigate("/mom-baby-care")}
            className="lowerNavbarNavigation"
          >
            <p>MOM & BABY CARE</p>
            <i className="bx bx-chevron-down"></i>
          </div>
          <div
            onClick={() => navigate("/fragrance")}
            className="lowerNavbarNavigation"
          >
            <p>FRAGRANCE</p>
            <i className="bx bx-chevron-down"></i>
          </div>
          <div
            onClick={() => navigate("/womens")}
            className="lowerNavbarNavigation"
          >
            <p>WOMEN FASHION</p>
            <i className="bx bx-chevron-down"></i>
          </div>
          <div className="lowerNavbarNavigation">
            <p>BRANDS</p>
            <i className="bx bx-chevron-down"></i>
          </div>
          <div
            onClick={() => navigate("/cart")}
            className="lowerNavbarNavigation myCart"
          >
            <i className="bx bxs-shopping-bag"></i>
            <p>MY CART</p>
            <p>- {cartPrice == 0 ? "₹0.00" : `₹${cartPrice}`}</p>
          </div>
        </div>
        <div className="lowerNavbarForMobile">
          <div
            style={{ flexDirection: "column" }}
            className="myCartForMobile"
            onMouseEnter={() => {
              setShowMobileMenu(true);
            }}
            onMouseLeave={() => {
              setShowMobileMenu(false);
            }}
          >
            <div>
              <i className="bx bx-menu"></i>
            </div>
            {showMobileMenu && (
              <div className="toggleMenu">
                <div
                  onClick={() => {
                    navigate("/makeup");
                    setShowMobileMenu(false);
                  }}
                  className="lowerNavbarNavigation"
                >
                  <p>MAKEUP</p>
                  <i className="bx bx-chevron-down"></i>
                </div>
                <div
                  onClick={() => {
                    navigate("/skin");
                    setShowMobileMenu(false);
                  }}
                  className="lowerNavbarNavigation"
                >
                  <p>SKIN</p>
                  <i className="bx bx-chevron-down"></i>
                </div>
                <div
                  onClick={() => {
                    navigate("/hair");
                    setShowMobileMenu(false);
                  }}
                  className="lowerNavbarNavigation"
                >
                  <p>HAIR</p>
                  <i className="bx bx-chevron-down"></i>
                </div>
                <div
                  onClick={() => {
                    navigate("/personal-care");
                    setShowMobileMenu(false);
                  }}
                  className="lowerNavbarNavigation"
                >
                  <p>PERSONAL CARE</p>
                  <i className="bx bx-chevron-down"></i>
                </div>
                <div
                  onClick={() => {
                    navigate("/mom-baby-care");
                    setShowMobileMenu(false);
                  }}
                  className="lowerNavbarNavigation"
                >
                  <p>MOM & BABY CARE</p>
                  <i className="bx bx-chevron-down"></i>
                </div>
                <div
                  onClick={() => {
                    navigate("/fragrance");
                    setShowMobileMenu(false);
                  }}
                  className="lowerNavbarNavigation"
                >
                  <p>FRAGRANCE</p>
                  <i className="bx bx-chevron-down"></i>
                </div>
                <div
                  onClick={() => {
                    navigate("/womens");
                    setShowMobileMenu(false);
                  }}
                  className="lowerNavbarNavigation"
                >
                  <p>WOMEN FASHION</p>
                  <i className="bx bx-chevron-down"></i>
                </div>
                <div className="lowerNavbarNavigation">
                  <p>BRANDS</p>
                  <i className="bx bx-chevron-down"></i>
                </div>
              </div>
            )}
          </div>
          <div onClick={() => navigate("/cart")} className="myCartForMobile">
            <i className="bx bxs-shopping-bag"></i>
            <p>MY CART</p>
            <p>- {cartPrice == 0 ? "₹0.00" : `₹${cartPrice}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
