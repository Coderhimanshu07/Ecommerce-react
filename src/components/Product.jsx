import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-router-dom';

import { useContext } from "react";
import { CartContext } from "../Context/Cart_Context";


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
import Footer from './Footer';


function Product() {

    const { addToCart } = useContext(CartContext);
    const products = useContext(Productdata);


    return (
        <>
            <section className="bg-light py-5">
                <div className="container ">
                    <h2 className="text-center mb-4">
                        Checkout All Products
                    </h2>

                    <div className="row gap-3 g-md-1 justify-content-center">
                        {products.map((item, index) => (
                            <div
                                className="col-12 col-sm-6 col-md-3"
                                key={index}
                            >
                                <div className="card h-100 w-100 text-center shadow-sm rounded-4 border-3">

                                    {/* Image */}
                                    <Link to={`/product/${item.id}`} href=""><img
                                        src={item.image}
                                        alt={item.name}

                                        className="card-img-top"
                                        style={{
                                            height: "160px",
                                            objectFit: "contain",
                                            padding: "10px"
                                        }}
                                    />
                                    </Link>

                                    {/* Content */}
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title">
                                            {item.name}
                                        </h6>

                                        <div className='d-flex gap-2 align-items-center justify-content-center mb-3'>
                                            <p className="text-danger text-decoration-line-through mb-3">
                                                ₹{item.oldprice}
                                            </p>

                                            <p className="fw-bold text-success mb-3">
                                                ₹{item.price}
                                            </p>


                                        </div>

                                        <div className="container mt-auto px-0 d-flex gap-2">
                                            <Link to={`/product/${item.id}`} className="btn btn-dark w-50">
                                                View Details
                                            </Link>
                                            <button onClick={() => addToCart(item)} className="btn btn-warning  w-50">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Product;