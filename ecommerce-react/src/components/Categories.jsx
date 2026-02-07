import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ndlP from '../assets/needle_plate.png';
import bb from '../assets/bb_case.png';
import belts from '../assets/belts.png';
import motors from '../assets/motors.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Categories() {
  const Category = [
    { name: "Bobbin & case", url: "bobbin-case", image: bb },
    { name: "Needle Plate", url: "needle-plate", image: ndlP },
    { name: "Belts", url: "Belts", image: belts },
    { name: "Motors", url: "Motors", image: motors },
  ]
  return (
    <>
      {/* CATEGORIES */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h1 className="text-center mb-4 fs-2 fs-md-3 fw-bold">
            Shop by Category
          </h1>

          <div className="border border-3 rounded-5 p-4">
            <div className="row gap-3 g-md-1 text-center justify-content-center ">
              {Category.map((item, index) => (
                <div className="col-8 col-sm-6 col-md-4 col-lg-2" key={index}>
                  <Link to={`/categories/${item.url}`}>
                    <img src={item.image}
                      alt="Sewing Machine Spare Parts"
                      className="img-fluid w-100 rounded-4 mb-4 border border-4"
                      style={{ maxHeight: "180px", objectFit: "contain" }}
                    />
                  </Link>
                  <Link to={`/categories/${item.url}`} className="btn btn-outline-dark w-100 py-2 rounded-pill fw-semibold">
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  )
}

export default Categories