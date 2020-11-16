import shopActionTypes from "./shop.types";

export const addInitialCollections = (collections) => ({
  type: shopActionTypes.COLLECTION_FROM_FIRESTORE,
  payload: collections,
});
