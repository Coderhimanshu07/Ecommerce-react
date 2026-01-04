import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

export default function Contact() {

  // For whatsapp handle
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage = `Hello, I am ${name}. My email is ${email}. Message: ${message}`;
    const phoneNumber = "917291933500";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (

    <>
      <section id="Contact">
        <div className="container-fluid bg-black text-white position-relative contact-section">


          {/* BACKGROUND TEXT */}
          <h1
            className="position-absolute"
            style={{
              top: "20px",
              left: "20px",
              fontSize: "15vw",
              fontWeight: "900",
              color: "rgba(255,255,255,0.06)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            CONTACT
          </h1>

          {/* TITLE */}
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <h2 className="text-warning fw-bold mb-5" style={{ fontSize: "3rem" }}>
              GET IN TOUCH
            </h2>

            <div className="row g-5">

              {/* LEFT SIDE */}
              <div className="col-12 col-md-5">
                <h3 className="fw-bold">DON'T BE SHY</h3>
                <p className="mb-4">
                  Feel free to get in touch with me. I am always open to discussing
                  new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="d-flex align-items-center mb-4">
                  <FaEnvelope size={40} className="text-warning me-3" />
                  <div>
                    <p className="fw-bold m-0">Mail me</p>
                    <a
                      href="mailto:coderhimanshu07@gmail.com"
                      className="m-0 text-light text-decoration-none"
                    >
                      coderhimanshu07@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <FaPhone size={40} className="text-warning me-3" />
                  <div>
                    <p className="fw-bold m-0">Call me</p>
                    <a
                      href="tel:+917291933500"
                      className="m-0 text-light text-decoration-none"
                    >
                      +91 72919 33500
                    </a>
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE FORM */}
              <div className="col-12 col-md-7">

                {/* FORM WITH onSubmit */}
                <form onSubmit={handleWhatsAppSubmit}>

                  <label for="name">Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="name"
                    className="form-control bg-transparent text-white border-white mb-3"
                    placeholder="Enter your Name"
                    required
                  />


                  <label for="name">Email <span className="text-danger">*</span></label>
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-transparent text-white border-white mb-3"
                    placeholder="Enter a valid email address"
                    required
                  />


                  <label for="name">Message <span className="text-danger">*</span></label>
                  <textarea
                    name="message"
                    className="form-control bg-transparent text-white border-white mb-3"
                    placeholder="Enter your message"
                    rows="5"
                    required
                  ></textarea>

                  <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="termsCheck" required />
                    <label className="form-check-label" htmlFor="termsCheck">
                      I accept the Terms of Service
                    </label>
                  </div>

                  <button type="submit" className="btn btn-warning fw-bold px-4 py-2 rounded-pill">
                    SUBMIT
                  </button>

                </form>
              </div>

            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  );
}
