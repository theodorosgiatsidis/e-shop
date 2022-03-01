import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Checkout from "../../pages/checkout/Checkout";

const PUBLIC_KEY =
  "pk_test_51KX3YoLgVGdCnLHlrNTZjX9QOQQEWkeP9yuEPCxZJNAlktNm0p0GxWdRVl3ipGGYVCwh4fjaK5O7gc9DzkeZAaYf00e50wNWyr";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => (
  <Elements stripe={stripeTestPromise}>
    <Checkout />
  </Elements>
);

export default StripeContainer;
