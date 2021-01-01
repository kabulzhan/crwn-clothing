import { useSelector } from "react-redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const CollectionPageContainer = (otherProps) => {
  const isLoading = useSelector(selectIsCollectionsLoaded);
  return WithSpinner(CollectionPage)(isLoading, otherProps);
};

export default CollectionPageContainer;
