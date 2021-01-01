import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = (props) => {
  const collection = useSelector(
    selectCollection(props.match.params.collectionId)
  );
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
