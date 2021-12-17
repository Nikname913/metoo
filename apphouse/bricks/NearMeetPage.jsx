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
const Bio = StyleComponent.NearMeetOne.Bio;
const BioAvatar = StyleComponent.NearMeetOne.BioAvatar;
const BioDescription = StyleComponent.NearMeetOne.BioDescription;
const BioDescriptionDialog = StyleComponent.NearMeetOne.BioDescriptionDialog;
const AddMeetButton = StyleComponent.NearMeetOne.AddMeetButton;
const BackButton = StyleComponent.NearMeetOne.BackButton;

export default function NearMeetPage() {
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

          <Bio>

            <BioAvatar/>
            <BioDescription>
              <BioDescriptionDialog>
                <Text style={{ color: 'white' }}>meet status</Text>
              </BioDescriptionDialog>
              <Text
                style={{
                  color: 'grey',
                  marginLeft: 16
                }}
              >
                
                meet name
                
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 15,
                  marginTop: 4,
                  fontWeight: 'bold',
                }}
              >
                
                NIK SHIPOV
                
              </Text>
            </BioDescription>
          
          </Bio>

          <AddMeetButton> 
            <Text style={{ color: 'white', fontSize: 15 }}>отправить новый мит</Text>
          </AddMeetButton>
          <BackButton>
            <Text style={{ color: 'white', fontSize: 15 }}>вернуться к списку</Text>
          </BackButton>

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
