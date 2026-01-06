import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ChLogo2 from "../assets/ChLogo2.png"


import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer() {

  return (
    <>
      {/* FOOTER */}
      <div className="container-fluid bg-dark text-light py-2">
        <div className="container py-4">
          <div className="row mb-4 pt-3">
            <div className="col-3 pt-5">
              {/* <img className='rounded-5 border' src={Logo} alt="Logo" style={{ height: '100px', width: '140px' }} /> */}
              <h5 className=''>Contact Us</h5>
              <p>
                <a className='text-decoration-none text-secondary' href="tel:+919810515926">+91 9810515926</a> <br />
                <a className='text-decoration-none text-secondary' href="tel:+917291933500">+91 7291933500</a> <br />
                <a href="mailto:test@example.com" className="text-decoration-none text-secondary">
                  info.store.anshika@gmail.com
                </a>
              </p>
            </div>
            <div className="col-2 text-center pt-5">
              <ul className='list-unstyled'>
                <h5>Useful Links</h5>
                <li><a href="" className='text-secondary text-decoration-none '>Products</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>About Us</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>Products</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>About Us</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>Contact Us</a></li>
              </ul>
            </div>
            <div className="col-2 text-center pt-5 ">
              <ul className='list-unstyled'>
                <h5>Category</h5>
                <li><a href="" className='text-secondary text-decoration-none'>Needles</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>Motors</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>Bobbin</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>Cases</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>Belts</a></li>
              </ul>
            </div>
            <div className="col-2 text-center pt-5">
              <ul className='list-unstyled'>
                <h5>Shop</h5>
                <li><a href="" className='text-secondary text-decoration-none'>Needles</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>Motors</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>Bobbin</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>Cases</a></li>
                <li><a href="" className='text-secondary text-decoration-none'>Belts</a></li>
              </ul>
            </div>
            <div className="col-3 text-end pt-5">
              <h5>Developed &
                Maintenance by</h5>

              <span className="d-inline-block mx-5 mt-3">
                <img
                  src={ChLogo2}
                  alt="Logo"
                  className="rounded-circle border border-2 border-secondary"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              </span>
            </div>

          </div>
        </div>
        <hr />

        <div className='container d-flex'>
          <div className='container text-secondary'>
            <p>© 2025 Anshika Sewing Machine & Spare Parts Store</p>
          </div>

          <div className="d-flex justify-content-center gap-3">
            <FaFacebookF size={18} />
            <FaInstagram size={18} />
            <FaTwitter size={18} />
          </div>

        </div>

        {/* <div>
          
        </div>

        <div>
          
        </div> */}

      </div>
    </>
  )
}

export default Footer;