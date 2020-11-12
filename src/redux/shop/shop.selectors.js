import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectShopNomenclature = createSelector(
  [selectShop],
  (shop) => shop.nomenclature
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopNomenclature],
    (nomenclature) => nomenclature[collectionUrlParam]
  );
