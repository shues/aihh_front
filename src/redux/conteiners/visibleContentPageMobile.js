import { connect } from 'react-redux';
import { ContentPageMobile } from '../../pages/mobile/content';
import { getFriends } from '../actions/async/app_';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFriends: () => dispatch(getFriends()),
  };
};

const VisibleContentPageMobile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentPageMobile);

export default VisibleContentPageMobile;
