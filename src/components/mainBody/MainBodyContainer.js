import * as actions from "../../actions/albums";
import { connect } from "react-redux";
import MainBody from "./MainBody";
import { bindActionCreators } from "redux";
const mapStateToProps = (state) => ({
  albumData: state.albums.albumData,
  selectedAlbum: state.albums.selectedAlbum,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);
