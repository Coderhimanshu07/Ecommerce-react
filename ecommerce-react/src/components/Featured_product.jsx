import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import jack from '../assets/jack.png';
import juki from '../assets/juki.png';
import siruba2 from '../assets/siruba2.png';

function Featured_products() {
    return (
        <>
            <h1 className='container fw-bold text-center my-1 mb-4'>Our Major Trust With</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <span className='p-5'>
                                <img
                                    src={jack}
                                    className="card-img-top"
                                    alt="Customer Satisfaction"
                                />
                            </span>
                            <div className="card-body text-center">
                                <h5 className="card-title">Customer Satisfaction</h5>
                                <p className="card-text">We prioritize customer satisfaction and provide excellent service.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <span className='p-5'>
                                <img
                                    src={juki}
                                    className="card-img-top"
                                    alt="Customer Satisfaction"
                                />
                            </span>
                            <div className="card-body text-center">
                                <h5 className="card-title">Quality Assurance</h5>
                                <p className="card-text">All products undergo rigorous quality checks before delivery.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <span className='p-5'>
                                <img
                                    src={siruba2}
                                    className="card-img-top"
                                    alt="Customer Satisfaction"
                                />
                            </span>
                            <div className="card-body text-center">
                                <h5 className="card-title">Fast Delivery</h5>
                                <p className="card-text">We ensure timely delivery of all orders to meet your needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured_products