import React from 'react';
import './index.scss';
import { PageTemplate } from '../../../components/pageTemplate';
import { Logo } from '../../../components/logo';
import { MainButton } from '../../../components/buttons/mainButton';

export function TitlePageMobile(props) {
  return (
    <div className="title-page">
      <PageTemplate title="Log in via social network">
        <div className="title-page__content">
          <Logo />
          <div className="title-page__button-section">
            <MainButton
              social="vk"
              caption="Log in via VKontakte"
              link={props.vkLink}
              startFetching={props.startFetching}
            />
            <MainButton
              social="discord"
              caption="Log in via discord"
              startFetching={() => {}}
            />
            <MainButton
              social="telegram"
              caption="Log in via telegram"
              startFetching={() => {}}
            />
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}
