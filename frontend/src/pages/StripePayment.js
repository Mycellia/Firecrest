import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import QueryString from "query-string";
import { API_URL } from "../config/index";
import { useParams } from "react-router-dom";

export function StripePayment() {
  const location = useLocation();

  useEffect(() => {
    const values = QueryString.parse(location.search);

    if (values.success) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (values.canceled) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return (
    <section>
      <div className="product">
        <img src="" alt="Flight Picture" />
        <div className="description">
          <h3>Flight Ticket</h3>
          <h5>£50</h5>
          <p id="flightInfo"></p>
          {/* <p>{data.departing_gate}</p> */}
        </div>
      </div>
      <form
        action={`${API_URL}/api/stripe/create-checkout-session`}
        method="POST"
      >
        <button type="submit">Checkout</button>
      </form>
    </section>
  );
}
