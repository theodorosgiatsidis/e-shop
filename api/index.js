const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const Product = require("./routes/products");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/products", Product);
app.post("/api/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "EUR",
      description: "Gevris company",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is Running");
});
