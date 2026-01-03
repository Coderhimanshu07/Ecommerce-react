import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/Cart_Context';
// importing the images there 
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



function Single_Product() {

  const value = useParams()
  // console.log(value);
  const { addToCart } = useContext(CartContext);
  const products = useContext(Productdata);

  const product = products.find(
    (item) => item.id === Number(value.id)
  );


  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">

          {/* IMAGE SECTION */}
          <div className="col-md-6">
            <img
              src={product.image}
              className="img-fluid rounded shadow w-100 h-75"
            />
          </div>

          {/* DETAILS SECTION */}
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <h4 className="text-success mb-3">₹ {product.price}</h4>

            <p>
              {product.info}
            </p>

            <button
              className="btn btn-dark"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </>

  )
}

export default Single_Product;