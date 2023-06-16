import React from 'react';
import './index.scss';

export function PageTemplate(props) {
  return (
    <div className="page-template">
      <div className="page-template__top-img"></div>
      <div className="page-template__bottom-img"></div>
      <div className="page-template__content">
        <div className="page-template__title">{props.title}</div>
        {props.children}
      </div>
    </div>
  );
}
