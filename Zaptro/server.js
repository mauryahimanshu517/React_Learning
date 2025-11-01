import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// CORS setup to allow requests from your Netlify frontend
app.use(cors({
  origin: "https://regal-cuchufli-8bc07f.netlify.app",  // Use your actual Netlify URL
}));

app.use(express.json());

// Simple GET route to check if backend is working
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Razorpay payment route
app.post("/payment", async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: Math.round(amount * 100), // Razorpay expects amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    return res.json(order);  // Send order details back to frontend
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend running on port 5000");
});
