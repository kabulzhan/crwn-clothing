import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartOpen } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ toggleCart }) => {
  const currentUser = useSelector(selectCurrentUser);
  const cartOpen = useSelector(selectCartOpen);
  const dispatch = useDispatch();
  console.log("Header component has been rendered");
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as="div"
            onClick={() => {
              dispatch(signOutStart());
            }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon handleClick={toggleCart} />
      </OptionsContainer>
      {cartOpen && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
