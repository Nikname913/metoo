import React, { useState } from 'react'
import { Text, ScrollView } from 'react-native'
import StyleComponent from '../styles/css'
import MenuBlock from './components/Menu'

const MainSection = StyleComponent.MainSection;
const Header = StyleComponent.Header;
const HeaderUser = StyleComponent.HeaderUser;
const Content = StyleComponent.NearMeets.Content;
const VisitCardContent = StyleComponent.MyContact.VisitCard;
const VisitCardContentLine = StyleComponent.MyContact.VisitCardLine;
const VisitCardContentLineIcon = StyleComponent.MyContact.VisitCardLineIcon;

export default function MyContactVisitCard() {
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

          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              marginTop: 40,
              marginBottom: 16
            }}
          >
            
            NIK SHIPOV
            
          </Text>

          <VisitCardContent>

            { [{},{},{},{},{}].map(item => {

              return(

                <VisitCardContentLine>
                  <VisitCardContentLineIcon></VisitCardContentLineIcon>
                  <Text style={{ fontWeight: 'bold', opacity: 0.6 }}>contact number * 89068085023</Text>
                </VisitCardContentLine>

              )

            }) }

          </VisitCardContent>

          <Text 
            style={{ 
              height: 10, 
              opacity: 0
            }}
          />

        </ScrollView>
      </Content>

      <MenuBlock/>

    </MainSection>
  );
}
