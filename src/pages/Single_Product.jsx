import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/Cart_Context';

// Importing Product Data Context
import { Productdata } from '../Context/Product-Context';
import Footer from '../components/Footer';



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
            <h4 className="mb-3">
              <h2 className=''>{product.name}</h2>
              <span className="text-danger text-decoration-line-through">₹ {product.oldprice}</span>
              <span className="text-success ms-2">₹ {product.price}</span>
            </h4>


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

      <Footer />
    </>

  )
}

export default Single_Product;