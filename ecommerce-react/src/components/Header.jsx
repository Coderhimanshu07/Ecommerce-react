import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../Context/Cart_Context";

/* ======================
   SVG CART LOGO
====================== */
const CartLogo = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cart-logo"
  >
    <path
      d="M3 3H5L7 14H19L21 6H6"
      stroke="#ff9800"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="19" r="2" fill="#ff9800" />
    <circle cx="17" cy="19" r="2" fill="#ff9800" />
    <path
      d="M9 6H21"
      stroke="#ff9800"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useContext(CartContext)

  const Navlinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Products", link: "/product" },
    { label: "Contact", link: "/contact" },

  ];

  const activeClass = ({ isActive }) =>
    `nav-link nav-hover ${isActive ? "active-link text-white" : "text-secondary"}`;

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-black fixed-top py-3">
        <div className="container-fluid">

          {/* LOGO */}
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" width="40" />
          </Link>

          {/* HAMBURGER */}
          <button
            type="button"
            className="btn text-white d-lg-none fs-3"
            onClick={openMenu}
          >
            <i className="bi bi-list"></i>
          </button>

          {/* DESKTOP MENU */}
          <ul className="navbar-nav d-none d-lg-flex flex-row gap-4 mx-auto">
            {Navlinks.map((item) => (
              <li key={item.label} className="nav-item">
                <NavLink to={item.link} className={activeClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CART LOGO + LOGIN (DESKTOP) */}

          <div className="d-none d-lg-flex align-items-center gap-3">


            {/* CART SVG LOGO */}
            <Link className="position-relative" to="/cart" title="Cart">
              <CartLogo />
              <span className="badge bg-warning text-dark rounded-pill position-absolute top-0 start-100 translate-middle p-2">{cartCount}</span>
            </Link>

            {/* REGISTER */}
            <Link
              to="/signup"
              className="btn btn-outline-warning rounded-pill px-3"
            >
              Register
            </Link>

            {/* LOGIN */}
            <Link
              to="/login"
              className="btn btn-outline-warning rounded-pill px-3"
            >
              Login
            </Link>



          </div>
        </div>
      </nav>

      {/* BACKDROP */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"
          style={{ zIndex: 1040 }}
          onClick={closeMenu}
        />
      )}

      {/* OFFCANVAS (MOBILE) */}
      <div
        className="position-fixed top-0 start-0 h-100 bg-black text-white p-4"
        style={{
          width: "260px",
          zIndex: 1050,
          transition: "transform 0.3s ease",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <button
          className="btn text-white fs-4 mb-4"
          onClick={closeMenu}
        >
          <i className="bi bi-x-lg"></i>
        </button>

        {/* CART LOGO (MOBILE) */}
        <div className="text-center mb-3">
          <Link to="/cart" onClick={closeMenu}>
            <CartLogo />
          </Link>
        </div>

        <ul className="navbar-nav text-center gap-3">
          {Navlinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.link}
                onClick={closeMenu}
                className={activeClass}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-center mt-4 gap-2 d-flex flex-column">
          <Link
            to="/signup"

            onClick={closeMenu}
            className="btn btn-warning rounded-pill px-4"
          >
            Register
          </Link>
          <Link
            to="/login"
            onClick={closeMenu}
            className="btn btn-warning rounded-pill px-4"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
