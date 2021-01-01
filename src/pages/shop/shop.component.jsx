import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectShopNomenclature } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ match }) => {
  const nomenclature = useSelector(selectShopNomenclature);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(nomenclature).length) dispatch(fetchCollectionsStart());
  }, [nomenclature, dispatch]);

  console.log("Shop component has been called");
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
