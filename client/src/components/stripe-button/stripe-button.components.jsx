import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JFqBeFadC7TpMtJz8PLzeaapaqdFNpu2amCGAAjUuIkDbehYoBHXSlPtJMzD7k0j43yb1ShIK8z16X6Ig3Uj7Gp00A40C8Clz";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        console.log("Response catched: ", response);
        alert("Payment successful");
      })
      .catch(error => {
        console.log("Error catched: ", error);
        // console.log("Payment error: ", JSON.parse(error));
        alert("There was an issue with your payment, please try again");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
