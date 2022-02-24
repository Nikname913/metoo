import React, { useState } from 'react';
import HelloPage from './bricks/Hello';
import MainPage from './bricks/Main';
import NearMeets from './bricks/NearMeets';
import NearMeetPage from './bricks/NearMeetPage';
import MyContacts from './bricks/MyContacts';
import MyContactPage from './bricks/MyContactPage';
import MyContactVisitCard from './bricks/MyContactVisitCard';
import MyMeets from './bricks/MyMeets';
import MyMeetPage from './bricks/MyMeetPage';
import MyPage from './bricks/MyPage';
import { RoutesContext, LoginContext } from './Context';

export default function Routes() {

  const [ route, setRoute ] = useState('start-page')
  const [ loginData, setLoginData ] = useState({})

  return (
    <RoutesContext.Provider value={[ route, setRoute ]}>
    <LoginContext.Provider value={[ loginData, setLoginData ]}>
      { route === 'main' 
        ? <MainPage></MainPage>
        : route === 'start-page'
        ? <HelloPage></HelloPage>
        : route === 'near-meets'
        ? <NearMeets></NearMeets>
        : route === 'near-meet-page'
        ? <NearMeetPage></NearMeetPage>
        : route === 'contacts'
        ? <MyContacts></MyContacts>
        : route === 'my-contacts-page'
        ? <MyContactPage></MyContactPage>
        : route === 'my-contact-visit-card'
        ? <MyContactVisitCard></MyContactVisitCard>
        : route === 'my-meets'
        ? <MyMeets></MyMeets>
        : route === 'my-meet-page'
        ? <MyMeetPage></MyMeetPage>
        : route === 'my-page'
        ? <MyPage></MyPage>
        : <MainPage></MainPage>
      }
    </LoginContext.Provider>
    </RoutesContext.Provider>
  );
}