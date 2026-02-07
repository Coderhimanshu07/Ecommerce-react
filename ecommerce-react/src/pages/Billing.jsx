import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Billing() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        address: '',
        landmark: '',
        city: '',
        state: '',
        pincode: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First Name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last Name is required";
        }

        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }

        if (!formData.state.trim()) {
            newErrors.state = "State is required";
        }

        if (!/^[0-9]{6}$/.test(formData.pincode)) {
            newErrors.pincode = "Pincode must be exactly 6 digits";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            localStorage.setItem("billingAddress", JSON.stringify(formData));
            navigate("/Checkout");
        }
    };

    return (
        <>
            <div className="container-fluid border border-3 p-3 p-md-5 bg-warning bg-opacity-10 rounded-4">
                <h1 className="text-center fw-bold">Just a Step Left</h1>
                <p className="text-center text-muted">
                    <i>Save Your Address & Enjoy Shopping</i>
                </p>

                <div className="container border border-3 rounded-4 mt-4 fw-bold bg-dark text-light w-75">
                    <form className="p-3 p-md-5" onSubmit={handleSubmit}>

                        {/* Name Row */}
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Middle Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="middleName"
                                    value={formData.middleName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && <small className="text-danger">{errors.address}</small>}
                        </div>

                        {/* Landmark */}
                        <div className="mb-3">
                            <label className="form-label">Landmark</label>
                            <input
                                type="text"
                                className="form-control"
                                name="landmark"
                                value={formData.landmark}
                                onChange={handleChange}
                            />
                        </div>

                        {/* City State Pincode */}
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <label className="form-label">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                                {errors.city && <small className="text-danger">{errors.city}</small>}
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                />
                                {errors.state && <small className="text-danger">{errors.state}</small>}
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">PINCODE</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                />
                                {errors.pincode && <small className="text-danger">{errors.pincode}</small>}
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
    );
}

export default Billing;
