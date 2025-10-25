import express from "express";
import Razorpay from "razorpay";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const razorpay = new Razorpay({
  key_id: "rzp_test_RXnL4bSMSuEA6p",
  key_secret: "YOUR_KEY_SECRET",
});

app.post("/payment", async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    return res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

app.listen(5000, () => console.log("✅ Backend running on port 5000"));
