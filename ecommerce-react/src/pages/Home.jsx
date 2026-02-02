import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bg from '../assets/sewing_machine.jpg';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Testmonials from '../components/Testmonials';
import Featured_products from '../components/Featured_product';
import Testimonials from '../components/Testmonials';
import Faqs from '../components/FAQ';


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
            <div className="col-12 col-md-6 order-2 order-md-1 py-5 pt-4 mt-5">
              <h1 className="fw-bold fs-1 fs-md-2 lh-sm lh-md-base overflow-hidden">

                <span className="d-block d-md-inline 
                   fs-2 fs-md-3 
                   text-md-nowrap">
                  Mechanical Sewing Machine Spare Parts
                </span>

                <span className="d-block d-md-inline">
                  <br className="d-none d-md-block" />
                  High-Quality Components
                </span>

                <span className="d-block">
                  For Smooth & Long-Lasting Performance
                </span>

              </h1>

              <p className="mt-2 fs-6 fs-md-5">
                Mechanical sewing machine spare parts are essential for maintaining the accuracy, durability, and smooth functioning of traditional sewing machines. These parts include needles, bobbins, shuttle hooks, presser feet, belts, gears, tension assemblies, and other vital components that ensure consistent stitching and reliable performance.
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

      {/* Importing Featured products element */}
      <Featured_products />

      {/* Importing Testimonials */}
      <Testimonials />

      {/* Importing The FAQ's There */}
      <Faqs />

      {/* Importing Footer */}
      <Footer />
    </>
  )
}

export default Home;