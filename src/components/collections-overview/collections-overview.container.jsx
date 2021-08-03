import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIscollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import collectionsOverview from "./collections-overview.components";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIscollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;