import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import StyleComponent from '../styles/css';

const MainSection = StyleComponent.MainSection;
const Header = StyleComponent.Header;
const HeaderUser = StyleComponent.HeaderUser;
const Menu = StyleComponent.MainPage.Menu;
const MenuAction = StyleComponent.MainPage.MenuActionButton;
const MenuActionColor = StyleComponent.MainPage.MenuActionButtonColor;
const Content = StyleComponent.NearMeets.Content;
const Item = StyleComponent.NearMeets.Item;
const ItemLogo = StyleComponent.NearMeets.ItemLogo;
const ItemClose = StyleComponent.NearMeets.ItemClose;

export default function NearMeets() {
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
                <Text>USERNAME USER</Text>
                <ItemLogo/>
                <ItemClose/>
              </Item> 
            ) 
          
          }) }

          <Text 
            style={{ 
              height: 10, 
              opacity: 0
            }}
          />

        </ScrollView>
      </Content>

      <Menu>
        <MenuAction>

            <Text
              style={{
                position: 'absolute',
                left: '100%',
                marginLeft: 14,
              }}
            >
              
              main page
              
            </Text>
            <Text
              style={{
                position: 'absolute',
                left: '0%',
                marginLeft: -86,
              }}
            >
              
              main page
              
            </Text>
            <Text
              style={{
                position: 'absolute',
                top: 0,
                marginLeft: -6,
                marginTop: -36
              }}
            >
              
              main page
              
            </Text>
            <Text
              style={{
                position: 'absolute',
                top: '100%',
                marginLeft: -6,
                marginTop: 11
              }}
            >
              
              main page
              
            </Text>

          <MenuActionColor/>
        </MenuAction>
      </Menu>

    </MainSection>
  );
}
