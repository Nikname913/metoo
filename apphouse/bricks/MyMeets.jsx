import React, { useContext } from 'react'
import { Text, ScrollView, Pressable } from 'react-native'
import StyleComponent from '../styles/css'
import MenuBlock from './components/Menu'
import { RoutesContext } from '../Context'

const MainSection = StyleComponent.MainSection;
const Header = StyleComponent.Header;
const HeaderUser = StyleComponent.HeaderUser;
const Content = StyleComponent.NearMeets.Content;
const Item = StyleComponent.MyMeets.ListItem;
const ItemLogo = StyleComponent.NearMeets.ItemLogo;
const ItemNo = StyleComponent.MyMeets.ItemNo;
const ItemYes = StyleComponent.MyMeets.ItemYes;

export default function MyMeets() {

  const [ ,setRoute ] = useContext(RoutesContext)

  return (
    <MainSection
      style={{
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    > 

      <Header>
        <Text 
          style={{ 
            fontSize: 22, 
            fontWeight: 'bold',
            letterSpacing: 1,
            marginBottom: 4 
          }}
        >
            
          metoo
          
        </Text>
        <HeaderUser/>
      </Header>

      <Content>
        <ScrollView>

          { [{},{},{},{},{},{},{},{},{}].map(item => { 
          
            return( 
              <Item>
                <Pressable
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    zIndex: 10
                  }}
                  onPress={() => setRoute('my-meet-page')}
                />
                <Text>USERNAME USER</Text>
                <ItemLogo/>
                <ItemYes/>
                <ItemNo/>
              </Item> 
            ) 
          
          }) }

          <Text 
            style={{ 
              height: 16, 
              opacity: 0
            }}
          />

        </ScrollView>
      </Content>

      <MenuBlock/>

    </MainSection>
  );
}
