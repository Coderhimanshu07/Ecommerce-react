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
    { name: "Bobbin & case", image: bb },
    { name: "Needle Plate", image: ndlP },
    { name: "Belts", image: belts },
    { name: "Motors", image: motors },
  ]
  return (
    <>
      {/* CATEGORIES */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="text-center mb-4 fs-2 fs-md-3">
            Shop by Category
          </h2>

          <div className="border border-3 rounded-5 p-4">
            <div className="row gap-5 g-md-4 text-center justify-content-center ">
              {Category.map((item, index) => (
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                  <img src={item.image}
                    alt="Sewing Machine Spare Parts"
                    className="img-fluid w-100 rounded-4 mb-4 border border-4"
                    style={{ maxHeight: "180px", objectFit: "contain" }}
                  />
                  <Link to={`/categories/${item.name}`} className="btn btn-outline-dark w-100 py-2 rounded-pill fw-semibold">
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Categories