import React from "react";
import { connect } from "react-redux";
import { selectShopNomenclature } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {Object.values(collections).map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopNomenclature,
});

export default connect(mapStateToProps)(CollectionsOverview);
