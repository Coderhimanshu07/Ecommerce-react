import React, { useContext, useEffect, useState } from "react";
// import { cart_value } from "../Context/Cart_Context";

import { CartContext } from "../Context/Cart_Context";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// slider images (replace freely)
import img1 from "../assets/logo.png";
import juki from "../assets/juki.png";
import jack from "../assets/jack.png";
import brother from "../assets/brother.png";
import siruba from "../assets/siruba.png";
import pegasus from "../assets/pegasus.png";
import singer from "../assets/singer.png";
import Footer from "../components/Footer";


function About() {



    const { cartItems } = useContext(CartContext);
    // counters state
    const [clients, setClients] = useState(0);
    const [experience, setExperience] = useState(0);

    useEffect(() => {
        let clientTarget = 30000;
        let expTarget = 15;

        let clientInterval = setInterval(() => {
            setClients((prev) => {
                if (prev >= clientTarget) {
                    clearInterval(clientInterval);
                    return clientTarget;
                }
                return prev + 300;
            });
        }, 20);

        let expInterval = setInterval(() => {
            setExperience((prev) => {
                if (prev >= expTarget) {
                    clearInterval(expInterval);
                    return expTarget;
                }
                return prev + 1;
            });
        }, 150);

        return () => {
            clearInterval(clientInterval);
            clearInterval(expInterval);
        };
    }, []);

    return (
        <>
            <section className="py-5 bg-light">
                <div className="container">

                    {/* Heading */}
                    <div className="text-center mb-5">
                        <h2 className="fw-bold display-6">
                            About Us
                        </h2>
                        <p className="text-muted">
                            Experts in Japanese Industrial Sewing Machines
                        </p>
                    </div>

                    {/* Slider + Content */}
                    <div className="row align-items-center g-4">

                        {/* Slider */}
                        <div className="col-md-6">
                            <div
                                id="aboutSlider"
                                className="carousel slide shadow rounded-4 overflow-hidden"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={img1} className="d-block w-100" alt="Repair" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="col-md-6">
                            <div className="p-4 bg-white rounded-4 shadow-sm h-100 border border-2">
                                <h4 className="fw-semibold mb-3">Who We Are</h4>
                                <p className="text-muted">
                                    We are a dedicated sewing machine service and trading business with a strong focus on Japanese industrial sewing machines. Our core expertise lies in repairing, servicing, buying, and selling heavy-duty sewing machines used in garment factories, tailoring units, workshops, and industrial production environments.

                                    With over 15 years of hands-on experience, we have successfully supported thousands of mechanics, factories, and professionals by providing reliable machine solutions and long-term technical support. We understand the importance of machine accuracy, speed, and durability in daily production, and we work with the same mindset while servicing every machine.

                                    Our commitment is built on trust, technical knowledge, and fair pricing.
                                </p>

                                <div className="d-flex gap-3 flex-wrap py-3">
                                    <span className="badge bg-dark px-4 py-2 rounded-pill">
                                        Repair
                                    </span>
                                    <span className="badge bg-secondary px-3 py-2 rounded-pill">
                                        Spare Parts
                                    </span>
                                    <span className="badge bg-success px-3 py-2 rounded-pill">
                                        Buy & Sell
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" mt-5 px-5 text-center mb-4 pt-5">
                    <h2 className="fw-bold display-7 ">
                        We Deals In
                    </h2>
                    <p className="text-muted">
                        Trusted Providers of Quality Solutions
                    </p>
                </div>



                {/* Company Logo Slider */}
                <section className="bg-light">
                    <div className="container-fluid px-0">

                        <div className="border rounded-4 bg-white overflow-hidden py-4">

                            <div className="logo-slider d-flex align-items-center">
                                <div className="logo-track d-flex align-items-center">

                                    <img src={juki} alt="Juki" />
                                    <img src={brother} alt="Brother" />
                                    <img src={jack} alt="Jack" />
                                    <img src={siruba} alt="Siruba" />
                                    <img src={pegasus} alt="Pegasus" />
                                    <img src={singer} alt="Singer" />

                                    {/* duplicate for smooth infinite loop */}
                                    <img src={juki} alt="Juki" />
                                    <img src={brother} alt="Brother" />
                                    <img src={jack} alt="Jack" />
                                    <img src={siruba} alt="Siruba" />
                                    <img src={pegasus} alt="Pegasus" />
                                    <img src={singer} alt="Singer" />

                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <div className=" mt-5 px-5 text-center  mb-4 pt-5">
                    <h2 className="fw-bold display-7 ">
                        Why Choose Us
                    </h2>
                    <p className="text-muted">
                        Expertise That Makes the Difference
                    </p>
                </div>

                {/* LIVE COUNTERS */}
                <div className="container">
                    <div className="row text-center g-4">

                        <div className="col-md-6">
                            <div className="bg-white shadow-sm rounded-4 p-4 h-100">
                                <h1 className="fw-bold text-success mb-1">
                                    {clients.toLocaleString()}+
                                </h1>
                                <p className="fw-semibold text-muted mb-0">
                                    Happy Clients
                                </p>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="bg-white shadow-sm rounded-4 p-4 h-100">
                                <h1 className="fw-bold text-primary mb-1">
                                    {experience}+
                                </h1>
                                <p className="fw-bold text-muted mb-0">
                                    Years of Experience
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="text-center mt-5">
                        <div className="bg-dark text-white d-inline-block px-5 py-4 rounded-4 shadow">
                            <h5 className="mb-1 fw-semibold">
                                Trusted • Experienced • Reliable
                            </h5>
                            <p className="mb-0 text-light">
                                Japanese Industrial Sewing Machine Specialists
                            </p>
                        </div>
                    </div>
                </div>


            </section>
            <Footer />
        </>
    );
}

export default About;
