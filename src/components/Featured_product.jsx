import React from 'react'

function Featured_product() {
    return (
        <>
            {/* FEATURED PRODUCTS */}
            <section className="bg-light py-4 py-md-5">
                <div className="container">
                    <h2 className="text-center mb-4 fs-5 fs-md-3">
                        Featured Spare Parts
                    </h2>

                    <div className="row g-3 g-md-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                className="col-12 col-sm-6 col-md-4 col-lg-3"
                                key={item}
                            >
                                <div className="card h-100 text-center shadow-sm">
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title">
                                            Sewing Machine Part
                                        </h6>
                                        <p className="fw-bold text-success mb-3">
                                            ₹499
                                        </p>
                                        <button className="btn btn-dark rounded-pill mt-auto">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featured_product