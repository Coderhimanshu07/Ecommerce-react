import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", email, password);
  };

  return (
    <>
      <section className="auth-wrapper d-flex align-items-center justify-content-center">
        <div className="auth-card shadow-lg rounded-4 login-animate">
          <div className="p-4 p-md-5">

            <div className="text-center mb-4">
              <h3 className="fw-bold">Welcome Back</h3>
              <p className="text-muted small">Login to your account</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control rounded-pill px-3"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control rounded-pill px-3"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button className="btn btn-dark w-100 rounded-pill py-2 auth-btn">
                Login
              </button>
            </form>

            <p className="text-center text-muted small mt-4 mb-0">
              Don’t have an account? <span className="fw-semibold"><Link className="text-warning" to="/signup">Sign Up</Link></span>
            </p>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
