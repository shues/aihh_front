import React from 'react';
import './index.scss';

export function MainButton(props) {
  const [clicked, setClicked] = React.useState(false);

  const ref_ = React.useRef(null);

  function hendleEvent(event) {
    if (event.type === 'mowseup' || event.type === 'touchend') {
      setClicked(false);
    } else if (event.type === 'mowsedown' || event.type === 'touchstart') {
      setClicked(true);
    }
  }

  function clickButton(){
    props.startFetching();
    ref_.current.click();
  }

  return (
    <div
      className={'button' + (clicked ? ' button_clicked' : '')}
      onMouseDown={hendleEvent}
      onMouseUp={hendleEvent}
      onTouchStart={hendleEvent}
      onTouchEnd={hendleEvent}
      onClick={clickButton}
    >
      <a href={props.link} ref={ref_} target="_self"></a>
      <div className={'button__img button__img_' + props.social}></div>
      <div className="button__caption">{props.caption}</div>
    </div>
  );
}
