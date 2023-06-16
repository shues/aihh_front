import React from 'react';
import './index.scss';
import { PageTemplate } from '../../../components/pageTemplate';
import { InfoBlock } from '../../../components/infoBlock';

export function ContentPageMobile(props) {
  React.useEffect(()=>{
    props.getFriends();
  });

  const info = {
    name: 'Тимур',
    lastName: 'Калимуллин',
    social: 'vk',
    town: 'Уфа',
    skills: [
      'CMS «1С-Битрикс»',
      'Laravel',
      'Swift',
      'WordPress',
      'PHP',
      'SOLID',
    ],
  };
  return (
    <div className="content-page">
      <PageTemplate title="Choose a friend">
        <div className="content-page__content">
          <InfoBlock info={info} />
          <InfoBlock info={info} />
          <InfoBlock info={info} />
          <InfoBlock info={info} />
        </div>
      </PageTemplate>
    </div>
  );
}
