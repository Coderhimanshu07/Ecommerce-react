import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useContext } from "react";
import { CartContext } from "../Context/Cart_Context";

import { Link } from "react-router-dom";

// const { addToCart } = useContext(CartContext);

// importing the images 
import bb3 from '../assets/3_bbn.png';
import ndlP from '../assets/needle_plate.png';
import bb from '../assets/bb_case.png';
import belts from '../assets/belts.png';
import motors from '../assets/motors.png';
import ndlP2 from '../assets/2_needle_plate.png';
import U_motors from '../assets/Usha_Motors.png';
import belts2 from '../assets/2_belts.png';
import Shuttle from '../assets/Shuttle.png';
import Belt_c from '../assets/Belt_cover.png';
import Teeth from '../assets/Teeth.png';
import Needle from '../assets/Needle.png';
import { Productdata } from '../Context/Product-Context';

function All_Categories() {

  const { addToCart } = useContext(CartContext);
  const [Count, setCount] = useState(0)


  const products = useContext(Productdata);

  const value = useParams()


  const Filter_p = products.filter((Elem) => { return value.id === Elem.category })



  return (
    <div className="container py-5 w-75">

      {/* Category Title */}
      <h2 className="text-center mb-4 fw-bold">
        {value.id} Products
      </h2>

      <div className="row g-4">

        {Filter_p.length === 0 && (
          <div className="text-center text-muted">
            No products found in this category
          </div>
        )}

        {Filter_p.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">

              <img
                src={item.image}
                className="card-img-top p-3"
                alt={item.name}
                style={{ height: "200px", objectFit: "contain" }}
              />

              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{item.name}</h6>
                <p className="text-muted small flex-grow-1">
                  {item.info.slice(0, 90)}...
                </p>
                <span className='d-flex gap-2'>
                  <h5 className="text-danger text-decoration-line-through">₹{item.oldprice}</h5>
                  <h5 className="text-success">₹{item.price}</h5>
                </span>
              </div>

              <div className="card-footer bg-white border-0 d-flex gap-2">
                <Link
                  to={`/product/${item.id}`}
                  className="btn btn-warning w-100 py-2 rounded-pill fw-semibold"
                >
                  View Details
                </Link>

                <button onClick={() => addToCart(item)}
                  className="btn btn-dark w-100 py-2 rounded-pill fw-semibold">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default All_Categories;