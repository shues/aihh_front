import './App.scss';
import React from 'react';

import { Provider } from 'react-redux';

import VisibleTitlePageMobile from './redux/conteiners/visibleTitlePageMobile';
import { Waiter } from './components/waiter';
import VisibleContentPageMobile from './redux/conteiners/visibleContentPageMobile';

function App(props) {
  React.useEffect(() => {
    props.setDeviceType(window.innerWidth);
    const search = document.location.search;
    if (search !== '') {
      const access_token = search.split('&')[0].split('=')[1];
      const social = search.split('&')[1].split('=')[1];
      props.setAccessToken(access_token, social);
    }
  },[props.deviceType]);

  let page = null;

  if (!props.authorized) {
    if (props.deviceType === 'mobile') {
      page = <VisibleTitlePageMobile />;
    }
  }else{
    if (props.deviceType === 'mobile') {
      page = <VisibleContentPageMobile />;
    }
  }
  return (
    <Provider store={props.store}>
      <div className="App">{page}</div>
      <Waiter active={props.fetching} />
    </Provider>
  );
}

export default App;
