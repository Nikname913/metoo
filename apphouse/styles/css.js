import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
const CSS = {

  MainSection: styled.View`
    position: relative;
    width: ${ window.width };
    height: 100%;
    padding: 0px;
  `,
  Header: styled.View`
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${ window.width };
    height: 80px;
    background-color: #D9D9D9;
    elevation: 4;
    padding-left: 18px;
    padding-right: 18px;
  `,
  HeaderUser: styled.View`
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background-color: #AAAAAA;
  `,
  HelloPage: {
    HelloPageInpView: styled.View`
      flex-direction: column;
      align-items: flex-end;
      position: relative;
      width: 100%;
      height: auto;
      min-height: 100px;
    `,
    HelloPageInput: styled.TextInput`
      position: relative;
      width: ${ window.width };
      height: 60px;
      border-bottom-width: 2px;
      border-bottom-color: rgb(114, 34, 114);
      padding-left: 19px;
      padding-bottom: 4px;
    `,
    HelloPageSubmit: styled.View`
      width: 200px;
      height: 64px;
      border-bottom-right-radius: 16px;
      border-bottom-left-radius: 16px;
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
      margin-right: 20px;
      margin-top: -20px;
      elevation: 4;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    `,
    Copyright: styled.Text`
      color: grey;
      position: absolute;
      text-align: center;
      width: 100%;
      top: 100%;
      margin-top: -40px;
    `
  },
  MainPage: {
    Menu: styled.View`
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      position: relative;
      width: ${ window.width };
      height: 240px;
    `,
    MenuActionButton: styled.View`
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 60px;
      border-width: 1;
    `,
    MenuActionButtonColor: styled.View`
      position: relative;
      width: 60px;
      height: 60px;
      background-color: rgb(114, 34, 114);
      border-radius: 30px;
      elevation: 4;
      opacity: ${ props => props.opacity ? props.opacity : 1 }
    `,
    Content: styled.View`
      position: relative;
      width: ${ window.width };
      height: ${ window.height - 240 };
    `,
    ContentAvatar: styled.View`
      position: relative;
      width: 180px;
      height: 180px;
      border-radius: 90px;
      background-color: rgba(114, 34, 114, 0.2);
      margin-left: auto;
      margin-right: auto;
      margin-top: 80px;
    `,
    ContentAvatarIcons: styled.View`
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      position: absolute;
      width: 40px;
      height: 40px;
      left: 100%;
      margin-left: -44px;
    `,
    ContentAvatarIconsIcon: styled.View`
      width: 36px;
      height: 36px;
      border-radius: 18px;
      background-color: #AAAAAA;
    `,
    ContentItems: styled.View`
      position: relative;
      width: ${ window.width * 0.6 };
      height: auto;
      min-height: 100px;
      margin-left: auto;
      margin-right: auto;
    `,
    ContentItemsButton: styled.View`
      position: relative;
      width: 100%;
      height: 54px;
      background-color: rgba(114, 34, 114, 1);
      border-radius: 6px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding-bottom: 4px;
      opacity: ${ props => props.opacity ? props.opacity : 1 }
    `
  },
  NearMeets: {
    Content: styled.View`
      position: relative;
      width: ${ window.width };
      height: ${ window.height - 320 };
      border-bottom-width: 1;
      border-bottom-color: rgb(114, 34, 114);
    `,
    Item: styled.View`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: 86%;
      height: 80px;
      background-color: #D9D9D9;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      elevation: 4;
      margin-top: 16px;
      padding-left: 18px;
      padding-right: 18px;
    `,
    ItemLogo: styled.View`
      position: relative;
      width: 44px;
      height: 44px;
      border-radius: 22px;
      background-color: #AAAAAA; 
    `,
    ItemClose: styled.View`
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background-color: #AAAAAA;
      left: 100%;
      margin-left: 50px;
      opacity: 0.6; 
    `
  },
  NearMeetOne: {
    Bio: styled.View`
      position: relative;
      width: ${ window.width };
      height: auto;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding-left: 26px;
    `,
    BioAvatar: styled.View`
      position: relative;
      width: 180px;
      height: 180px;
      border-radius: 90px;
      background-color: rgba(114, 34, 114, 0.2);
      margin-top: 38px;
    `,
    BioDescription: styled.View`
      position: relative;
      width: ${ window.width - 180 };
      height: auto;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding-left: 8px;
    `,
    BioDescriptionDialog: styled.View`
      position: relative;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 72%;
      height: 84px;
      background-color: grey;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      border-bottom-left-radius: 6px;
      margin-top: 26px;
      margin-bottom: 20px;
    `,
    AddMeetButton: styled.View`
      position: relative;
      width: ${ window.width * 0.7 };
      height: 60px;
      background-color: rgba(114, 34, 114, 1);
      border-radius: 6px;
      margin-left: auto;
      margin-right: auto;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-top: 38px;
      padding-bottom: 4px;
    `,
    BackButton: styled.View`
      position: relative;
      width: ${ window.width * 0.7 };
      height: 60px;
      background-color: grey;
      border-radius: 6px;
      margin-left: auto;
      margin-right: auto;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-top: 12px;
      padding-bottom: 4px;
    `
  },
  MyContacts: {
    Item: styled.View`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: ${ window.width - 16 };
      height: 80px;
      background-color: #D9D9D9;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      elevation: 4;
      margin-top: 16px;
      padding-left: 18px;
      padding-right: 18px;
    `,
  },
  MyContact: {
    VisitCard: styled.View`
      position: relative;
      width: ${ window.width }
      height: auto;
    `,
    VisitCardLine: styled.View`
      position: relative;
      width: ${ window.width * 0.8 };
      height: 54px;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin-left: auto;
      margin-right: auto;
    `,
    VisitCardLineIcon: styled.View`
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background-color: #AAAAAA;
      margin-right: 12px;
    `
  },
  MyMeets: {
    ListItem: styled.View`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: 72%;
      height: 80px;
      background-color: #D9D9D9;
      border-radius: 16px;
      elevation: 4;
      margin-top: 16px;
      margin-left: 14%;
      padding-left: 18px;
      padding-right: 18px;
    `,
    ItemYes: styled.View`
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background-color: #AAAAAA;
      left: 0%;
      margin-left: -45px;
      opacity: 0.6; 
    `,
    ItemNo: styled.View`
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background-color: #AAAAAA;
      left: 100%;
      margin-left: 50px;
      opacity: 0.6; 
    `
  },
  MyMeetPage: {
    ButtonsGroup: styled.View`
      position: relative;
      width: ${ window.width * 0.7 };
      height: 60px;
      margin-left: auto;
      margin-right: auto;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 38px;
      padding-bottom: 4px;
    `,
    ButtonAdd: styled.View`
      position: relative;
      width: 46%;
      height: 60px;
      background-color: rgb(12, 167, 137);
      margin-left: auto;
      margin-right: auto;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding-bottom: 4px;
      border-radius: 6px;
    `,
    ButtonSkip: styled.View`
      position: relative;
      width: 46%;
      height: 60px;
      background-color: rgb(218, 0, 99);
      margin-left: auto;
      margin-right: auto;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding-bottom: 4px;
      border-radius: 6px;
    `
  },
  MyPage: {
    ContentAvatar: styled.View`
      position: relative;
      width: 180px;
      height: 180px;
      border-radius: 90px;
      background-color: rgba(114, 34, 114, 0.2);
      margin-left: auto;
      margin-right: auto;
      margin-top: 40px;
    `,
  }

}

export default CSS;