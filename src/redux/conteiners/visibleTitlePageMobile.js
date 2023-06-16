import { connect } from 'react-redux';
import { TitlePageMobile } from '../../pages/mobile/title';
import { startFetching } from '../actions/sync/app_';

const mapStateToProps = (state) => {
  return { vkLink: state.app_.vkLink };
};

const mapDispatchToProps = (dispatch) => {
  return { startFetching: () => dispatch(startFetching()) };
};

const VisibleTitlePageMobile = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitlePageMobile);

export default VisibleTitlePageMobile;
