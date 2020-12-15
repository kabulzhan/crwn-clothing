import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopNomenclature = createSelector(
  [selectShop],
  (shop) => shop.nomenclature
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopNomenclature], (nomenclature) =>
    nomenclature[collectionUrlParam] ? nomenclature[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !Object.keys(shop.nomenclature).length
);
