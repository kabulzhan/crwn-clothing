import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <div className="cart-button">
      <Link to="/checkout">
        <CustomButton onClick={() => dispatch(toggleCart())}>
          GO TO CHECKOUT
        </CustomButton>
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
