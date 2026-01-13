import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup:", form);
  };

  return (
    <>
      <section className="auth-wrapper d-flex align-items-center justify-content-center">
        <div className="auth-card shadow-lg rounded-4 signup-animate">
          <div className="p-4 p-md-5">

            <div className="text-center mb-4">
              <h3 className="fw-bold">Create Account</h3>
              <p className="text-muted small">Join us today</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control rounded-pill px-3"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control rounded-pill px-3"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control rounded-pill px-3"
                  placeholder="Create password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>

              <button className="btn btn-dark w-100 rounded-pill py-2 auth-btn">
                Sign Up
              </button>
            </form>

            <p className="text-center text-muted small mt-4 mb-0">
              Already have an account? <span><Link className="text-warning fw-semibold" to="/login">Login</Link></span>
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Signup;
