import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutForm from "../../components/stripe-form/stripe-form.component";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51HmRqfIED8UWHjNrwXOR40ozBJXn7GhELMOYlnbA450d8jJoPar0sM7eYzxrbDKEURD6QEQIOCqYoVO29BhNmKAT00kXifl4k4"
).catch((error) => console.log(error));

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: $ {total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test cradit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      {stripePromise && (
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default CheckoutPage;
