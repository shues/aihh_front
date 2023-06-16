import { connect } from 'react-redux';
import App from '../../App';
import { setAccessToken, setDeviceType } from '../actions/sync/app_';

const mapStateToProps = (state) => {
  return {
    deviceType: state.app_.deviceType,
    authorized: state.app_.authorized,
    fetching: state.app_.fetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDeviceType: (width) => dispatch(setDeviceType(width)),
    setAccessToken: (token,social)=>dispatch(setAccessToken(token,social))
  };
};

const VisibleApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default VisibleApp;
