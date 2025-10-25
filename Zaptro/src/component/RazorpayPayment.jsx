import React from "react";

function RazorpayPayment() {
  const handlePayment = async () => {
    const orderResponse = await fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 500 }),
    });


    const order = await orderResponse.json();

    const options = {
      key: "rzp_test_RXnL4bSMSuEA6p",
      amount: order.amount,
      currency: "INR",
      name: "Zaptro Store",
      description: "Test Payment",
      order_id: order.id,
      handler: function (response) {
        alert(`✅ Payment Successful! ID: ${response.razorpay_payment_id}`);
      },
      theme: { color: "#f44336" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div style={{ textAlign: "center", margin: "60px 0" }}>
      <h2>React Razorpay Payment</h2>
      <button
        onClick={handlePayment}
        style={{
          background: "#f44336",
          color: "#fff",
          border: "none",
          padding: "12px 30px",
          fontSize: "18px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Pay ₹500
      </button>
    </div>
  );
}

export default RazorpayPayment;
