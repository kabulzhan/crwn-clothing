import SHOP_DATA from "./shop.data";
import shopActionTypes from "./shop.types";

const INITIAL_STATE = {
  nomenclature: {},
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.COLLECTION_FROM_FIRESTORE:
      return {
        ...state,
        nomenclature: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
