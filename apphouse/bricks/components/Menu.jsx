import React, { useState, useContext } from 'react'
import { Text } from 'react-native'
import StyleComponent from '../../styles/css'
import { RoutesContext } from '../../Context'

const Menu = StyleComponent.MainPage.Menu
const MenuAction = StyleComponent.MainPage.MenuActionButton
const MenuActionColor = StyleComponent.MainPage.MenuActionButtonColor

export default function Manu() {

  const [ route, setRoute ] = useContext(RoutesContext)
  const [ opacity, setOpacity ] = useState(1)

  return (
    <React.Fragment>
      <Menu>
        <MenuAction>

          <Text
            style={{
              position: 'absolute',
              left: '100%',
              marginLeft: 19,
              fontWeight: 'bold',
            }}
            onPress={() => setRoute('main')}
          >
              
            new meet
              
          </Text>
          <Text
            style={{
              position: 'absolute',
              left: '0%',
              marginLeft: -86,
              fontWeight: 'bold',
            }}
            onPress={() => setRoute('main')}
          >
              
            backward
              
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: 0,
              marginLeft: -6,
              marginTop: -36,
              fontWeight: 'bold',
            }}
            onPress={() => setRoute('main')}
          >
              
            main page
              
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: '100%',
              marginLeft: 8,
              marginTop: 11,
              fontWeight: 'bold',
            }}
            onPress={() => setRoute('main')}
          >
              
            logout
              
          </Text>

        <MenuActionColor 
          opacity={opacity}
          onTouchStart={() => {
            setOpacity(0.8)
            setRoute('main')
          }}
          onTouchEnd={() => setOpacity(1)}
        />
      </MenuAction>
    </Menu>
    </React.Fragment>
  )

}