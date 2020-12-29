import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopNomenclature } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart, nomenclature, match }) => {
  useEffect(() => {
    if (!Object.keys(nomenclature).length) fetchCollectionsStart();
  }, [fetchCollectionsStart, nomenclature]);

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

const mapStateToProps = createStructuredSelector({
  nomenclature: selectShopNomenclature,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
