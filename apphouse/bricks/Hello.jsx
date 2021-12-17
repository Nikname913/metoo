import React, { useState } from 'react';
import { Text } from 'react-native';
import StyleComponent from '../styles/css';

const MainSection = StyleComponent.MainSection;
const InputView = StyleComponent.HelloPage.HelloPageInpView;
const Input = StyleComponent.HelloPage.HelloPageInput;
const Submit = StyleComponent.HelloPage.HelloPageSubmit;
const Copyright = StyleComponent.HelloPage.Copyright;

export default function HelloPage() {

  const [ backgroundColor, setBackgroundColor ] = useState('rgb(114, 34, 114)')

  return (
    <MainSection
      style={{
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    > 

      <InputView>
        
        <Input
          placeholder="write or create login"
          maxLength={20}
        />
        <Input
          placeholder="write or create pass"
          maxLength={20}
        />

        <Submit
          style={{ backgroundColor }}
          onTouchStart={() => {
            setBackgroundColor('rgb(114, 54, 114)')
          }}
          onTouchEnd={() => {
            setBackgroundColor('rgb(114, 34, 114)')
          }}
        />
      
      </InputView>

      <Copyright>metoo 2022</Copyright>

    </MainSection>
  );
}
