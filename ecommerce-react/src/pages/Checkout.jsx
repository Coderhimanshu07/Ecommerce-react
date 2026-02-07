import { useContext } from "react";
import { CartContext } from "../Context/Cart_Context";
import "bootstrap/dist/css/bootstrap.min.css";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handlePayment = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: "rzp_test_SDAiADIIzjE9TL",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Anshika Sewing Machine Store",
      description: "Order Payment",

      handler: function (response) {
        alert("Payment Successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
      },

      prefill: {
        name: "Coder Himanshu",
        email: "test@gmail.com",
        contact: "9999999999",
      },

      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3>Your cart is empty</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">

        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-lg border-0 rounded-4">

            {/* HEADER */}
            <div className="card-header bg-dark text-white text-center rounded-top-4 py-3">
              <h4 className="mb-0 fw-semibold">Checkout</h4>
            </div>

            {/* BODY */}
            <div className="card-body p-4">

              {/* ORDER ITEMS */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain",
                      }}
                    />
                    <div>
                      <h6 className="mb-1">{item.name}</h6>
                      <small className="text-muted">
                        Qty: {item.qty}
                      </small>
                    </div>
                  </div>

                  <div className="fw-semibold text-success">
                    ₹{item.price * item.qty}
                  </div>
                </div>
              ))}

              {/* TOTAL */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h5 className="fw-bold mb-0">Total Amount</h5>
                <h5 className="fw-bold text-success mb-0">
                  ₹{totalAmount}
                </h5>
              </div>

            </div>

            {/* FOOTER */}
            <div className="card-footer bg-white border-0 p-4">
              <button
                onClick={handlePayment}
                className="btn btn-dark w-100 py-3 rounded-pill fw-semibold"
              >
                Pay ₹{totalAmount} Securely
              </button>

              <p className="text-center text-muted small mt-3 mb-0">
                100% Secure Payment powered by Razorpay
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
