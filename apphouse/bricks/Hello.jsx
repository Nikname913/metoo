import React, { useState, useContext } from 'react'
import { Text } from 'react-native'
import StyleComponent from '../styles/css'
import { LoginContext, RoutesContext } from '../Context';

const MainSection = StyleComponent.MainSection;
const InputView = StyleComponent.HelloPage.HelloPageInpView;
const Input = StyleComponent.HelloPage.HelloPageInput;
const Submit = StyleComponent.HelloPage.HelloPageSubmit;
const Copyright = StyleComponent.HelloPage.Copyright;

export default function HelloPage() {

  const [ loginData, setLoginData ] = useContext(LoginContext)
  const [ ,setRoute ] = useContext(RoutesContext)
  const [ backgroundColor, setBackgroundColor ] = useState('rgb(114, 34, 114)')
  const [ login, setLogin ] = useState('')
  const [ pass, setPass ] = useState('')

  const [ placeholderLogin, setPlaceholderLogin ] = useState('write or create login')
  const [ placeholderPass, setPlaceholderPass ] = useState('write or create pass')

  function unValidLogin() {

    setPlaceholderLogin('write here your login')
    setTimeout(() => { setPlaceholderLogin('write or create login') }, 2000)

  }

  function unValidPass() {

    setPlaceholderPass('write here your pass')
    setTimeout(() => { setPlaceholderPass('write or create pass') }, 2000)

  }

  return (
    <MainSection
      style={{
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    > 

      <InputView>
        
        <Input
          placeholder={placeholderLogin}
          maxLength={20}
          onChangeText={inputValue => setLogin(inputValue)}
        />
        <Input
          placeholder={placeholderPass}
          maxLength={20}
          onChangeText={inputValue => setPass(inputValue)}
        />

        { login === '' ? 

        <Submit
          style={{ backgroundColor: 'grey' }}
          onTouchStart={() => {
            setBackgroundColor('rgb(114, 54, 114)')
          }}
          onTouchEnd={() => {
            setBackgroundColor('rgb(114, 34, 114)')
          }}
          onTouchStart={() => {

            login === '' && unValidLogin()
            pass === '' && unValidPass()

          }}
        >

          <Text
            style={{
              color: 'white',
              fontSize: 13,
              textAlign: 'center',
              marginBottom: 1
            }}
          >
            CONTINUE
          </Text>

        </Submit> : pass === '' ?

        <Submit
          style={{ backgroundColor: 'grey' }}
          onTouchStart={() => {
            setBackgroundColor('rgb(114, 54, 114)')
          }}
          onTouchEnd={() => {
            setBackgroundColor('rgb(114, 34, 114)')
          }}
          onTouchStart={() => {

            login === '' && unValidLogin()
            pass === '' && unValidPass()

          }}
        >

          <Text
            style={{
              color: 'white',
              fontSize: 13,
              textAlign: 'center',
              marginBottom: 1
            }}
          >
            CONTINUE
          </Text>

        </Submit> :

        <Submit
          style={{ backgroundColor }}
          onTouchStart={() => {
            setBackgroundColor('rgb(114, 54, 114)')
            setLoginData({
              userName: login,
              userPass: pass
            })

            setRoute('main')

          }}
          onTouchEnd={() => {
            setBackgroundColor('rgb(114, 34, 114)')
          }}
        >

          <Text
            style={{
              color: 'white',
              fontSize: 13,
              textAlign: 'center',
              marginBottom: 1
            }}
          >
            CONTINUE
          </Text>

        </Submit> }
      
      
      </InputView>

      <Copyright>metoo 2022</Copyright>

    </MainSection>
  );
}
