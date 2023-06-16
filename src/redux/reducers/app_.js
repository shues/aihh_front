import {
  SET_ACCESS_TOKEN,
  SET_DEVICE_TYPE,
  START_FETCHING,
} from '../actions/sync/app_';

const defState = {
  deviceType: null,
  authorized: false,
  fetching: false,
  vkLink: `https://api.aihh.pro/vkLoginer?url=${
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname
  }`,
  vk_token: '',
  vk_api_version: '5.131',
};

function app_(state = defState, action) {
  switch (action.type) {
    case SET_DEVICE_TYPE:
      return Object.assign({}, state, {
        deviceType: action.width < 800 ? 'mobile' : 'desktop',
      });
    case SET_ACCESS_TOKEN:
      if (action.token !== '') {
        switch (action.social) {
          case 'vk':
            return Object.assign({}, state, {
              vk_token: action.token,
              authorized: true,
            });
          default:
            return state;
        }
      } else {
        return state;
      }
    case START_FETCHING:
      return Object.assign({}, state, { fetching: true });
    default:
      return state;
  }
}

export default app_;
