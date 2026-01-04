import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bg from '../assets/sewing_machine.jpg';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


function Home() {
  return (
    <>

      {/* Importing the Header there
    <Header /> */}



      {/* HERO SECTION */}
      <section className="bg-dark text-light py-4 py-md-5 mt-0">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">

            {/* IMAGE */}
            <div className="col-12 col-md-6 order-1 order-md-2 mb-3 mb-md-0">
              <img
                src={bg}
                alt="Sewing Machine Spare Parts"
                className="img-fluid w-100 rounded-4"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </div>

            {/* TEXT */}
            <div className="col-12 col-md-6 order-2 order-md-1">
              <h1 className="fw-bold fs-1 fs-md-2">
                Mechanical Sewing <br /> Machine Spare Parts
              </h1>
              <p className="mt-2 fs-6 fs-md-5">
                Industrial-grade spare parts for durability & performance
              </p>
              <Link to="/product" className="btn btn-warning rounded-pill px-4 mt-3">
                Shop Now
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Importing categories */}
      <Categories />

      {/* All Products */}

      {/* <Product /> */}


      {/* WHY CHOOSE US */}
      {/* <section className="py-4 py-md-5">
  <div className="container">
    <h2 className="text-center mb-4 fs-5 fs-md-3">
      Why Choose Us
    </h2>

    <div className="row g-3 text-center">
      {[
        "Heavy Duty Quality",
        "Machine Compatible",
        "Affordable Pricing",
        "Fast Delivery"
      ].map((text, index) => (
        <div
          className="col-12 col-sm-6 col-md-3 fw-semibold"
          key={index}
        >
          {text}
        </div>
      ))}
    </div>
  </div>
</section> */}

      <Footer />
    </>
  )
}

export default Home;