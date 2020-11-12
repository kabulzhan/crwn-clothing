import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import "./stripe-form.styles.scss";
import CustomButton from "../../components/custom-button/custom-button.component";

const StripeCheckoutForm = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => console.log(token);

  return (
    <form className="stripe-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Bank card details: </h2>
      <div className="stripe-row">
        <div className="cardElement-container">
          <CardElement
            options={{
              hidePostalCode: true,
            }}
          />
        </div>
      </div>
      <CustomButton>Pay NOW</CustomButton>
    </form>
  );
};

export default StripeCheckoutForm;
