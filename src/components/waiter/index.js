import React from 'react';
import './index.scss';

export function Waiter(props) {
  return (
    <div
      className={
        'waiter__wrapper' + (props.active ? ' waiter__wrapper_active' : '')
      }
    >
      <div className="waiter"></div>
    </div>
  );
}
