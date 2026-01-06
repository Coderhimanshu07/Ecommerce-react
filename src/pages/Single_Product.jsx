import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/Cart_Context';

// Importing Product Data Context
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
        <div className="row">

          {/* IMAGE SECTION */}
          <div className="col-md-6">
            <img
              src={product.image}
              className="img-fluid rounded shadow w-100 h-100"
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