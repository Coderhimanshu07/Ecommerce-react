import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ChLogo2 from "../assets/ChLogo2.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light">
        <div className="container py-5">
          <div className="row gy-4">

            {/* Contact */}
            <div className="col-6 col-lg-3 text-center text-lg-start">
              <h5>Contact Us</h5>
              <p className="mb-1">
                <a className="text-secondary text-decoration-none" href="tel:+919810515926">
                  +91 9810515926
                </a>
              </p>
              <p className="mb-1">
                <a className="text-secondary text-decoration-none" href="tel:+917291933500">
                  +91 7291933500
                </a>
              </p>
              <a
                href="mailto:info.store.anshika@gmail.com"
                className="text-secondary text-decoration-none" style={{ textAlign: "justify" }}
              >
                info.store.anshika@gmail.com
              </a>
            </div>

            {/* Useful Links */}
            <div className="col-6 col-lg-2 text-center">
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">Products</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Category */}
            <div className="col-6 col-lg-2 text-center">
              <h5>Category</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">Needles</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Motors</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Bobbin</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Belts</a></li>
              </ul>
            </div>

            {/* Shop */}
            <div className="col-6 col-lg-2 text-center">
              <h5>Shop</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">Needles</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Motors</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Cases</a></li>
              </ul>
            </div>

            {/* Developer */}
            <div className="col-12 col-lg-3 text-center">
              <h5>Developed & Maintenance by</h5>
              <img
                src={ChLogo2}
                alt="Developer Logo"
                className="rounded-circle border border-secondary mt-3"
                style={{ width: "90px", height: "90px", objectFit: "cover" }}
              />
            </div>

          </div>
        </div>

        <hr className="border-secondary" />

        {/* Bottom Bar */}
        <div className="container pb-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary gap-3">
            <p className="mb-0 text-center text-md-start">
              © 2025 Anshika Sewing Machine & Spare Parts Store
            </p>

            <div className="d-flex gap-3">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Footer;
