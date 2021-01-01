import { useSelector } from "react-redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const CollectionsOverviewContainer = (otherProps) => {
  const isLoading = useSelector(selectIsCollectionFetching);
  return WithSpinner(CollectionsOverview)(isLoading, otherProps);
};

export default CollectionsOverviewContainer;
