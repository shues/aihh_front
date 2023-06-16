export function getFriends() {
  return (dispatch, getState) => {
    const state = getState();
    const accessToken = state.app_.vk_token;
    const API_VERSION = state.app_.vk_api_version;
    const url = `https://api.vk.com/method/friends.get?access_token=${accessToken}&v=${API_VERSION}&fields=nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation&callback=showFriends`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
}
