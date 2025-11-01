import express from "express";
import Razorpay from "razorpay";
import cors from "cors";

const app = express();

// ✅ Allow both localhost (for testing) and your Netlify domain
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://regal-cuchufli-8bc07f.netlify.app", // your deployed frontend
    ],
  })
);

app.use(express.json());

// ✅ Use environment variables for security
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_RXnL4bSMSuEA6p",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "N8Cx8ZkvyxhQDeNauOx4417F",
});

app.post("/payment", async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    return res.json(order);
  } catch (error) {
    console.error("❌ Error creating order:", error);
    return res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

// ✅ Use Render's dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
