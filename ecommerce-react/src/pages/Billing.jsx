import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer';

function Billing() {
    return (
        <>
            <div className="container-fluid border border-3 p-3 p-md-5 bg-warning bg-opacity-10 rounded-4">
                <h1 className="text-center fw-bold">Just a Step Left</h1>
                <p className="text-center text-muted">
                    <i>Save Your Address & Enjoy Shopping</i>
                </p>

                <div className="container border border-3 rounded-4 mt-4 fw-bold bg-dark text-light w-75">
                    <form className="p-3 p-md-5">

                        {/* Name Row */}
                        <div className="row mb-3">
                            <div className="col-12 col-md-4 mb-3 mb-md-0">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control focus-ring"
                                    placeholder="Enter First Name"
                                />
                            </div>

                            <div className="col-12 col-md-4 mb-3 mb-md-0">
                                <label className="form-label">Middle Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Middle Name"
                                />
                            </div>

                            <div className="col-12 col-md-4">
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Last Name"
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Full Address"
                            />
                        </div>

                        {/* Landmark */}
                        <div className="mb-3">
                            <label className="form-label">Landmark</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter any landmark near you"
                            />
                        </div>

                        {/* City State Pincode */}
                        <div className="row mb-4">
                            <div className="col-12 col-md-4 mb-3 mb-md-0">
                                <label className="form-label">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your City"
                                />
                            </div>

                            <div className="col-12 col-md-4 mb-3 mb-md-0">
                                <label className="form-label">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your State"
                                />
                            </div>

                            <div className="col-12 col-md-4">
                                <label className="form-label">PINCODE</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Pincode"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <div className="text-center text-md-start">
                            <button type="submit" className="btn btn-outline-warning px-4">
                                Save Address
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}



export default Billing