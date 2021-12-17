import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import StyleComponent from '../styles/css';

const MainSection = StyleComponent.MainSection;
const Menu = StyleComponent.MainPage.Menu;
const MenuAction = StyleComponent.MainPage.MenuActionButton;
const MenuActionColor = StyleComponent.MainPage.MenuActionButtonColor;
const Content = StyleComponent.MainPage.Content;
const ContentAvatar = StyleComponent.MainPage.ContentAvatar;
const ContentAvatarIcons = StyleComponent.MainPage.ContentAvatarIcons;
const ContentAvatarIcon = StyleComponent.MainPage.ContentAvatarIconsIcon;
const ContentItems = StyleComponent.MainPage.ContentItems;
const ContentItemsButton = StyleComponent.MainPage.ContentItemsButton;

export default function MainPage() {
  return (
    <MainSection
      style={{
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    > 

      <Content>
        <ScrollView>

          <ContentAvatar>
            <ContentAvatarIcons>
              <ContentAvatarIcon/>
              <ContentAvatarIcon/>
            </ContentAvatarIcons>
          </ContentAvatar>
          <Text 
            style={{ 
              textAlign: 'center',
              marginTop: 24,
              marginBottom: 26
            }}
          >
            
            NIK SHIPOV
            
          </Text>
          <ContentItems>

            <ContentItemsButton/>
            <ContentItemsButton/>
            <ContentItemsButton style={{ marginBottom: 0 }}/>

          </ContentItems>

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
