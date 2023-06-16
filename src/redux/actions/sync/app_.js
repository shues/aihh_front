export const SET_DEVICE_TYPE = 'SET_DEVICE_TYPE';
export function setDeviceType(width) {
  return {
    type: SET_DEVICE_TYPE,
    width,
  };
}

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export function setAccessToken(token, social) {
  return {
    type: SET_ACCESS_TOKEN,
    token,
    social,
  };
}

export const START_FETCHING = 'START_FETCHING';
export function startFetching() {
  return {
    type: START_FETCHING,
  };
}
