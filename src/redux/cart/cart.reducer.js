import cartActionTypes from "./cart.types";

const INITIAL_STATE = {
  cartOpen: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    default:
      return state;
  }
};

export default cartReducer;
