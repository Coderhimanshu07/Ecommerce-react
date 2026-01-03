import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {

  const Navlinks = [
    {
      label: "Home",
      link: ""
    },

    {
      label: "Products",
      link: "product"
    },

    {
      label: "Cart",
      link: "cart"
    },

    {
      label: "Contact",
      link: "contact"
    },

    {
      label: "About",
      link: "about"
    }
  ]
  return (
    <header>
      <nav className="navbar navbar-dark bg-black navbar-expand-lg py-3 fixed-top">
        <div className="container-fluid">

          {/* LOGO */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ width: "40px" }} />
          </Link>

          {/* ICON HAMBURGER */}
          <button
            className="btn text-white d-lg-none fs-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <i className="bi bi-list"></i>
          </button>

          {/* DESKTOP MENU */}
          <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
            <ul className="navbar-nav gap-4">
              {Navlinks.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link text-secondary nav-hover" to={`/${item.link}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LOGIN (DESKTOP) */}
          <div className="d-none d-lg-block">
            <Link to="/login" className="btn btn-outline-warning rounded-pill px-4">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* OFFCANVAS */}
      <div
        className="offcanvas offcanvas-start custom-offcanvas bg-black text-white"
        tabIndex="-1"
        id="mobileMenu"
      >
        <div className="offcanvas-header d-flex align-items-center justify-content-between">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn text-white fs-4"
            data-bs-dismiss="offcanvas"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav gap-3 text-center">
            {["Home", "Product", "Cart", "Contact", "About"].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link text-secondary nav-hover" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-center mt-4">
            <button className="btn btn-warning rounded-pill px-4">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
